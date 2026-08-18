import { NextResponse } from "next/server";

export function serverError(label, error, message = "Internal server error") {
  console.error(`[${label}]`, error);
  return NextResponse.json({ error: message }, { status: 500 });
}

export function unavailable(error) {
  console.error("[Database]", error);
  return NextResponse.json(
    { error: "Database unavailable. Check the server's MONGODB_URI configuration." },
    { status: 503 }
  );
}
