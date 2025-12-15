import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { verifyPassword } from "@/lib/auth";

type LoginPayload = {
  email?: string;
  password?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginPayload;
    const email = body.email?.trim().toLowerCase();
    const password = body.password;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const db = await getDb();
    const users = db.collection("users");
    const user = await users.findOne<{ name: string; email: string; passwordHash: string }>({
      email,
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const isValid = await verifyPassword(password, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: "Login successful.",
      user: { name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Login API error", error);
    return NextResponse.json(
      { error: "Unable to login. Please try again later." },
      { status: 500 }
    );
  }
}

