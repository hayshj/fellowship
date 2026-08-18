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
    return NextResponse.json(await Sermon.find().sort({ date: -1 }));
  } catch (error) {
    return serverError("Sermons", error, "Failed to fetch all sermons");
  }
}
