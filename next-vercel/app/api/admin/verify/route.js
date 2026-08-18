import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";

export async function GET(request) {
  const auth = requireAdmin(request);
  if (auth.response) return auth.response;
  return NextResponse.json({ ok: true });
}
