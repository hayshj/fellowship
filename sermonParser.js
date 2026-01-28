import * as cheerio from "cheerio";

/**
 * Takes ONE sermon card HTML (like you pasted) and returns your Mongo doc shape:
 * { title, date, scripture, speaker, videoLink }
 */
export function parseCardToMongoDoc(cardHtml) {
  const $ = cheerio.load(cardHtml);

  // Title
  const h3 = $("h3.display-2").first();
  let title = h3.clone().find(".card-tags").remove().end().text().trim();
  title = title.replace(/\s+/g, " ").trim();

  // Badges: [dateText, scripture, speaker]
  const badges = h3.find(".card-tags .badge").toArray().map((el) => $(el).text().trim());
  const [dateText, scripture, speaker] = badges;

  // Convert "Jan 11th, 2026" -> "2026-01-11"
  const date = toYYYYMMDD(dateText);

  // If you later scrape a page that includes a video link, set it here.
  // For now: empty string (matches your current structure)
  const videoLink = "";

  return {
    title: title || "",
    date: date || "",           // "YYYY-MM-DD"
    scripture: scripture || "",
    speaker: speaker || "",
    videoLink,
  };
}

function toYYYYMMDD(dateText) {
  if (!dateText) return null;

  // remove ordinal suffixes: 1st/2nd/3rd/4th...
  const cleaned = dateText.replace(/(\d+)(st|nd|rd|th)/i, "$1").trim();
  const d = new Date(cleaned);

  if (Number.isNaN(d.getTime())) return null;

  // format YYYY-MM-DD in local-safe way using UTC parts
  const yyyy = d.getUTCFullYear();
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(d.getUTCDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}
