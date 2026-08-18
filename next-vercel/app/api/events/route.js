import { NextResponse } from "next/server";
import { scrapeEvents } from "@/lib/churchteams";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(await scrapeEvents());
  } catch (error) {
    console.error("[Events]", error);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}
