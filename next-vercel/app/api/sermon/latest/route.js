import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { serverError, unavailable } from "@/lib/api";
import Sermon from "@/models/Sermon";

export async function GET() {
  try {
    await connectDB();
  } catch (error) {
    return unavailable(error);
  }

  try {
    const sermon = await Sermon.findOne().sort({ date: -1 });
    if (!sermon) {
      return NextResponse.json({ error: "No sermons found" }, { status: 404 });
    }
    return NextResponse.json(sermon);
  } catch (error) {
    return serverError("Sermons", error, "Failed to fetch latest sermon");
  }
}
