import { NextResponse } from "next/server";
import { scrapeEvents } from "@/lib/churchteams";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const events = await scrapeEvents();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = events.filter((event) => {
      const parsed = Date.parse(event.startDate);
      if (Number.isNaN(parsed)) return false;
      const eventDate = new Date(parsed);
      eventDate.setHours(0, 0, 0, 0);
      return eventDate >= today;
    });

    return NextResponse.json(upcoming);
  } catch (error) {
    console.error("[Events]", error);
    return NextResponse.json(
      { error: "Failed to fetch upcoming events" },
      { status: 500 }
    );
  }
}
