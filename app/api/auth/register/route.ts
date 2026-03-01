import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { hashPassword } from "@/lib/auth";

type RegisterPayload = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  city?: string;
  phone?: string;
  cnic?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RegisterPayload;
    const name = body.name?.trim() || [body.firstName, body.lastName].filter(Boolean).join(" ").trim();
    const email = body.email?.trim().toLowerCase();
    const password = body.password;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const db = await getDb();
    const users = db.collection("users");

    const existing = await users.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await hashPassword(password);
    await users.insertOne({
      name: name || email,
      firstName: body.firstName?.trim(),
      lastName: body.lastName?.trim(),
      email,
      passwordHash,
      city: body.city?.trim(),
      phone: body.phone?.trim(),
      cnic: body.cnic?.trim(),
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Account created successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register API error", error);
    return NextResponse.json(
      { error: "Unable to register. Please try again later." },
      { status: 500 }
    );
  }
}

