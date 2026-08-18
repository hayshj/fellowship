import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { serverError, unavailable } from "@/lib/api";
import Sermon from "@/models/Sermon";

export async function GET(request) {
  try {
    await connectDB();
  } catch (error) {
    return unavailable(error);
  }

  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(Number.parseInt(searchParams.get("page") || "1", 10), 1);
    const limit = Math.max(Number.parseInt(searchParams.get("limit") || "6", 10), 1);
    const skip = (page - 1) * limit;
    const [sermons, total] = await Promise.all([
      Sermon.find().sort({ date: -1 }).skip(skip).limit(limit),
      Sermon.countDocuments(),
    ]);

    return NextResponse.json({
      sermons,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    return serverError("Sermons", error, "Failed to fetch sermons");
  }
}

export async function POST(request) {
  const auth = requireAdmin(request);
  if (auth.response) return auth.response;

  try {
    await connectDB();
  } catch (error) {
    return unavailable(error);
  }

  try {
    const { title, date, scripture, speaker, videoLink } = await request.json();
    if (!title || !date || !videoLink) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const sermon = await Sermon.create({ title, date, scripture, speaker, videoLink });
    return NextResponse.json(sermon, { status: 201 });
  } catch (error) {
    return serverError("Sermons", error, "Server error creating sermon");
  }
}
