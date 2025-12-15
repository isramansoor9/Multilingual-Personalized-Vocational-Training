import os
import random
from typing import Tuple
from datetime import datetime

from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
from pymongo.collection import Collection
from dotenv import load_dotenv
import bcrypt


load_dotenv()

app = Flask(__name__)

# Allow Next.js dev server by default; override with CORS_ORIGIN env for deploy
cors_origin = os.getenv("CORS_ORIGIN", "http://localhost:3000")
CORS(app, resources={r"/api/*": {"origins": cors_origin}}, supports_credentials=False)

mongo_uri = os.getenv("MONGODB_URI")
mongo_uri = "mongodb+srv://abdullahmalhi361_db_user:EtKklr72IwZMLkNC@teachus1.pw2lfiw.mongodb.net/?appName=Teachus1"
mongo_db = os.getenv("MONGODB_DB", "Teachus1")

if not mongo_uri:
  raise RuntimeError("MONGODB_URI must be set in .env for the Flask backend.")

mongo_client = MongoClient(mongo_uri)
db = mongo_client[mongo_db]
users: Collection = db["users"]


def normalize_email(email: str) -> str:
  return email.strip().lower()


def hash_password(password: str) -> bytes:
  return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())


def verify_password(password: str, hashed: bytes) -> bool:
  try:
    return bcrypt.checkpw(password.encode("utf-8"), hashed)
  except ValueError:
    return False


def validate_register_payload(body: dict) -> Tuple[bool, str]:
  first_name = body.get("firstName", "").strip()
  last_name = body.get("lastName", "").strip()
  city = body.get("city", "").strip()
  phone = body.get("phone", "").strip()
  email = body.get("email", "").strip()
  cnic = body.get("cnic", "").strip()
  password = body.get("password", "")
  if not first_name or not last_name or not city or not phone or not email or not password or not cnic:
    return False, "First name, last name, city, phone, CNIC, email, and password are required."
  if len(password) < 6:
    return False, "Password must be at least 6 characters long."
  # CNIC should be 13 numeric digits (no dashes)
  if len(cnic) != 13 or not cnic.isdigit():
    return False, "CNIC must be exactly 13 digits (numbers only)."
  return True, ""


@app.route("/api/health", methods=["GET"])
def health():
  return jsonify({"status": "ok"}), 200


@app.route("/api/register", methods=["POST"])
def register():
  body = request.get_json(silent=True) or {}
  valid, error = validate_register_payload(body)
  if not valid:
    return jsonify({"error": error}), 400

  first_name = body["firstName"].strip()
  last_name = body["lastName"].strip()
  city = body["city"].strip()
  phone = body["phone"].strip()
  cnic = body["cnic"].strip()
  email = normalize_email(body["email"])
  password = body["password"]
  user_id = str(random.randint(10_000_000, 99_999_999))

  existing = users.find_one({"email": email})
  if existing:
    return jsonify({"error": "An account with this email already exists."}), 409

  password_hash = hash_password(password)
  users.insert_one(
    {
      "name": f"{first_name} {last_name}".strip(),
      "firstName": first_name,
      "lastName": last_name,
      "city": city,
      "cnic": cnic,
      "phone": phone,
      "course": None,
      "userId": user_id,
      "email": email,
      "passwordHash": password_hash,
      "createdAt": datetime.utcnow(),
    }
  )

  return jsonify({"message": "Account created successfully."}), 201


@app.route("/api/login", methods=["POST"])
def login():
  body = request.get_json(silent=True) or {}
  email = normalize_email(body.get("email", ""))
  password = body.get("password", "")

  if not email or not password:
    return jsonify({"error": "Email and password are required."}), 400

  user = users.find_one({"email": email})
  if not user:
    return jsonify({"error": "Invalid email or password."}), 401

  if not verify_password(password, user["passwordHash"]):
    return jsonify({"error": "Invalid email or password."}), 401

  return (
    jsonify(
      {
        "message": "Login successful.",
        "user": {"name": user.get("name", ""), "email": user["email"]},
      }
    ),
    200,
  )


if __name__ == "__main__":
  port = int(os.getenv("PORT", "5000"))
  app.run(host="0.0.0.0", port=port, debug=True)
