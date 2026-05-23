import mongoose from "mongoose";
import "dotenv/config";

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

const Sermon = mongoose.models.Sermon || mongoose.model("Sermon", SermonSchema);

async function main() {
  if (!process.env.MONGO_URI) throw new Error("Missing MONGO_URI env var.");

  await mongoose.connect(process.env.MONGO_URI);

  // Find sermons with no videoLink (empty string, null, or missing field)
  const toDelete = await Sermon.find(
    { $or: [{ videoLink: "" }, { videoLink: null }, { videoLink: { $exists: false } }] },
    { _id: 1, date: 1, title: 1 }
  ).lean();

  if (toDelete.length === 0) {
    console.log("No sermons without a video link found.");
    await mongoose.disconnect();
    return;
  }

  console.log(`Found ${toDelete.length} sermon(s) without a video link:`);
  for (const s of toDelete) {
    console.log(`  [${s.date}] ${s.title}`);
  }

  const ids = toDelete.map((s) => s._id);
  const result = await Sermon.deleteMany({ _id: { $in: ids } });

  console.log(`\nDeleted ${result.deletedCount} sermon(s).`);

  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
