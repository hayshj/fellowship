import mongoose from "mongoose";

const SermonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: String, required: true },
    scripture: { type: String },
    speaker: { type: String },
    videoLink: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.Sermon || mongoose.model("Sermon", SermonSchema);
