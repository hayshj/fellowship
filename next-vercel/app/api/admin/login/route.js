import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import { unavailable } from "@/lib/api";
import Admin from "@/models/Admin";

export async function POST(request) {
  if (!process.env.JWT_SECRET) {
    console.error("[Config] Missing required JWT_SECRET environment variable");
    return NextResponse.json(
      { error: "Admin authentication is not configured" },
      { status: 503 }
    );
  }

  try {
    await connectDB();
  } catch (error) {
    return unavailable(error);
  }

  try {
    const { username, password } = await request.json();
    const admin = await Admin.findOne({ username: username?.toLowerCase().trim() });
    if (!admin) return NextResponse.json({ error: "Admin not found" }, { status: 404 });

    const valid = await admin.comparePassword(password);
    if (!valid) return NextResponse.json({ error: "Invalid password" }, { status: 401 });

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return NextResponse.json({ token, admin: { username: admin.username } });
  } catch (error) {
    console.error("[Admin login]", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
