import { NextResponse } from "next/server";
import { scrapeConnectGroups } from "@/lib/churchteams";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return NextResponse.json(await scrapeConnectGroups());
  } catch (error) {
    console.error("[Connect groups]", error);
    return NextResponse.json(
      { error: "Failed to fetch connect groups" },
      { status: 500 }
    );
  }
}
