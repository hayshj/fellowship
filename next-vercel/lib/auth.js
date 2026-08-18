import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export function requireAdmin(request) {
  if (!process.env.JWT_SECRET) {
    console.error("[Config] Missing required JWT_SECRET environment variable");
    return {
      response: NextResponse.json(
        { error: "Admin authentication is not configured" },
        { status: 503 }
      ),
    };
  }

  const authorization = request.headers.get("authorization") || "";
  const token = authorization.startsWith("Bearer ")
    ? authorization.slice(7)
    : null;

  if (!token) {
    return {
      response: NextResponse.json({ error: "No token provided" }, { status: 401 }),
    };
  }

  try {
    const admin = jwt.verify(token, process.env.JWT_SECRET);
    if (admin.role !== "admin") {
      return {
        response: NextResponse.json({ error: "Not authorized" }, { status: 403 }),
      };
    }
    return { admin };
  } catch {
    return {
      response: NextResponse.json({ error: "Invalid token" }, { status: 401 }),
    };
  }
}
