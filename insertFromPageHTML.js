import fs from "node:fs";
import path from "node:path";
import * as cheerio from "cheerio";
import mongoose from "mongoose";
import "dotenv/config";

// ---------- CONFIG ----------
const MONGO_URI = process.env.MONGO_URI;             // required
const HTML_PATH = process.env.HTML_PATH || "./bltn.html"; // your downloaded HTML file
const CARD_SELECTOR = ".mb-3.card.no-hover.header-md";    // matches your snippet

// ---------- MONGOOSE MODEL (matches your existing docs) ----------
const SermonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    date: { type: String, required: true }, // "YYYY-MM-DD"
    scripture: { type: String, required: true },
    speaker: { type: String, required: true },
    videoLink: { type: String, default: "" },
  },
  { timestamps: true } // creates createdAt/updatedAt
);

const Sermon = mongoose.models.Sermon || mongoose.model("Sermon", SermonSchema);

// ---------- HELPERS ----------
function toYYYYMMDD(dateText) {
  if (!dateText) return null;

  // "Jan 11th, 2026" -> "Jan 11, 2026"
  const cleaned = dateText.replace(/(\d+)(st|nd|rd|th)/i, "$1").trim();

  const d = new Date(cleaned);
  if (Number.isNaN(d.getTime())) return null;

  // Format as YYYY-MM-DD using UTC parts for consistency
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function extractDocFromCard($, cardEl) {
  const card = $(cardEl);

  // Title is in h3.display-2 but includes badges; remove tags first
  const h3 = card.find("h3.display-2").first();
  let title = h3.clone().find(".card-tags").remove().end().text().trim();
  title = title.replace(/\s+/g, " ").trim();

  // Badges: [date, scripture, speaker]
  const badges = h3.find(".card-tags .badge").toArray().map((el) => $(el).text().trim());
  const [dateText, scripture, speaker] = badges;

  const date = toYYYYMMDD(dateText);

  // Try to find a YouTube link if it exists anywhere inside the card
  const videoLink =
    card.find('a[href*="youtube.com/watch"], a[href*="youtu.be/"]').first().attr("href") || "";

  return {
    title: title || "",
    date: date || "",
    scripture: scripture || "",
    speaker: speaker || "",
    videoLink,
  };
}

// ---------- MAIN ----------
async function main() {
  if (!MONGO_URI) throw new Error("Missing MONGO_URI env var.");

  const fullPath = path.resolve(HTML_PATH);
  const html = fs.readFileSync(fullPath, "utf8");
  const $ = cheerio.load(html);

  const cards = $(CARD_SELECTOR).toArray();
  if (cards.length === 0) {
    console.warn(`No cards found with selector: ${CARD_SELECTOR}`);
    console.warn("Tip: open the HTML file and confirm the card class names match.");
    return;
  }

  await mongoose.connect(MONGO_URI);

  let processed = 0;
  let inserted = 0;
  let skippedInvalid = 0;

  for (const el of cards) {
    const doc = extractDocFromCard($, el);

    processed++;

    // basic validation: matches your schema requirements
    if (!doc.title || !doc.date || !doc.scripture || !doc.speaker) {
      skippedInvalid++;
      continue;
    }

    // Upsert: avoid duplicates by title+date (you can change the unique key if you want)
    const res = await Sermon.updateOne(
      { title: doc.title, date: doc.date },
      { $setOnInsert: doc },
      { upsert: true }
    );

    // res.upsertedCount exists in newer drivers; fallback check is safe
    if (res.upsertedCount === 1 || res.upsertedId) inserted++;
  }

  console.log({
    file: fullPath,
    foundCards: cards.length,
    processed,
    inserted,
    skippedInvalid,
  });

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
