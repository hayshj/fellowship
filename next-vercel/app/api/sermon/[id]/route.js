import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { requireAdmin } from "@/lib/auth";
import { serverError, unavailable } from "@/lib/api";
import Sermon from "@/models/Sermon";

export async function DELETE(request, context) {
  const auth = requireAdmin(request);
  if (auth.response) return auth.response;

  try {
    await connectDB();
  } catch (error) {
    return unavailable(error);
  }

  try {
    const { id } = await context.params;
    const sermon = await Sermon.findByIdAndDelete(id);
    if (!sermon) {
      return NextResponse.json({ error: "Sermon not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Sermon deleted" });
  } catch (error) {
    return serverError("Sermons", error, "Failed to delete sermon");
  }
}

export async function PUT(request, context) {
  const auth = requireAdmin(request);
  if (auth.response) return auth.response;

  try {
    await connectDB();
  } catch (error) {
    return unavailable(error);
  }

  try {
    const { id } = await context.params;
    const updates = await request.json();
    const sermon = await Sermon.findById(id);
    if (!sermon) {
      return NextResponse.json({ error: "Sermon not found" }, { status: 404 });
    }

    for (const field of ["title", "date", "scripture", "speaker", "videoLink"]) {
      if (updates[field]) sermon[field] = updates[field];
    }
    await sermon.save();
    return NextResponse.json({ message: "Sermon updated", sermon });
  } catch (error) {
    return serverError("Sermons", error, "Failed to update sermon");
  }
}
