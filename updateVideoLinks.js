import fs from "node:fs";
import * as cheerio from "cheerio";
import mongoose from "mongoose";
import "dotenv/config";


// --- your existing schema shape (same fields as Sermon.js) ---
const SermonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: String, required: true }, // "YYYY-MM-DD"
    scripture: { type: String },
    speaker: { type: String },
    videoLink: { type: String, default: "" },
  },
  { timestamps: true }
);

const Sermon = mongoose.models.Sermon || mongoose.model("Sermon", SermonSchema);

const MONGO_URI = process.env.MONGO_URI;
const YOUTUBE_HTML = process.env.YOUTUBE_HTML || "./youtube.html";

// Prefer this campus if multiple appear in the file
const PREFERRED_TITLE_CONTAINS = "Royse City";

function toYYYYMMDDFromText(dateText) {
  if (!dateText) return null;

  // Normalize whitespace
  const raw = dateText.replace(/\s+/g, " ").trim();

  // If the text has extra stuff, try grabbing just the date-y tail after "|"
  // ex: "Fellowship Church - Royse City | August 3rd, 2025"
  const part = raw.includes("|") ? raw.split("|").pop().trim() : raw;

  // 1) M/D/YYYY or MM/DD/YYYY
  let m = part.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) {
    const mm = String(parseInt(m[1], 10)).padStart(2, "0");
    const dd = String(parseInt(m[2], 10)).padStart(2, "0");
    const yyyy = m[3];
    return `${yyyy}-${mm}-${dd}`;
  }

  // 2) Month-name formats with ordinal suffixes:
  // "August 3rd, 2025" -> "August 3, 2025"
  // "Aug 3rd 2025" -> "Aug 3 2025"
  const cleaned = part
    .replace(/(\d+)(st|nd|rd|th)\b/gi, "$1")
    .replace(/,+/g, ",") // collapse double commas if any
    .trim();

  // Let JS Date parse it (works well for English month names)
  const d = new Date(cleaned);
  if (!Number.isNaN(d.getTime())) {
    const yyyy = d.getUTCFullYear();
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(d.getUTCDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  return null;
}


function extractYouTubeDateToUrlMap(html) {
  const $ = cheerio.load(html);

  // In your HTML, anchors look like:
  // <a id="video-title-link" ... title="Fellowship Church - Royse City | 1/4/2026" href="/watch?v=ZzhCCW7Ej48">
  // :contentReference[oaicite:2]{index=2}
  const links = $('a#video-title-link[href^="/watch"]').toArray();

  const map = new Map(); // date -> { url, title }
  for (const el of links) {
    const href = $(el).attr("href") || "";
    const title = ($(el).attr("title") || $(el).text() || "").trim();
    if (!href.includes("watch?v=") || !title) continue;

    const date = toYYYYMMDDFromText(title);
    if (!date) continue;

    const url = `https://www.youtube.com${href.split("&")[0]}`;

    // If multiple videos map to same date, prefer the one that contains the preferred campus text
    const existing = map.get(date);
    const isPreferred = title.includes(PREFERRED_TITLE_CONTAINS);

    if (!existing) {
      map.set(date, { url, title });
    } else {
      const existingPreferred = existing.title.includes(PREFERRED_TITLE_CONTAINS);
      if (!existingPreferred && isPreferred) {
        map.set(date, { url, title });
      }
    }
  }

  return map;
}

async function main() {
  if (!MONGO_URI) throw new Error("Missing MONGO_URI env var.");
  const html = fs.readFileSync(YOUTUBE_HTML, "utf8");

  const dateToVideo = extractYouTubeDateToUrlMap(html);
  console.log(`Found ${dateToVideo.size} dated YouTube videos in HTML.`);

  await mongoose.connect(MONGO_URI);

  // Only update sermons missing a videoLink
  const sermons = await Sermon.find(
    { $or: [{ videoLink: "" }, { videoLink: { $exists: false } }] },
    { _id: 1, date: 1, title: 1, videoLink: 1 }
  ).lean();

  let updated = 0;
  let noMatch = 0;

  for (const s of sermons) {
    const match = dateToVideo.get(s.date);
    if (!match) {
      noMatch++;
      continue;
    }

    await Sermon.updateOne({ _id: s._id }, { $set: { videoLink: match.url } });
    updated++;
    console.log(`Updated ${s.date} "${s.title}" -> ${match.url}`);
  }

  console.log({
    sermonsMissingVideo: sermons.length,
    updated,
    noMatch,
  });

  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
