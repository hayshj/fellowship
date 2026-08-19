import { NextResponse } from "next/server";
import { runSermonImport } from "@/lib/sermon-import";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function GET(request) {
  if (!process.env.CRON_SECRET) {
    console.error("[Config] Missing required CRON_SECRET environment variable");
    return NextResponse.json({ error: "Cron is not configured" }, { status: 503 });
  }

  if (request.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await runSermonImport();
    return NextResponse.json({
      ok: true,
      created: result.created,
      sermonId: result.sermon._id,
    });
  } catch (error) {
    console.error("[Sunday sermon cron]", error);
    return NextResponse.json({ error: "Sunday sermon import failed" }, { status: 500 });
  }
}
