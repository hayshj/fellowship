import axios from "axios";
import * as cheerio from "cheerio";
import connectDB from "@/lib/mongodb";
import Sermon from "@/models/Sermon";

async function getSermonFromBulletin() {
  const { data: html } = await axios.get("https://bl.tn/fellowship", {
    timeout: 15000,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/121 Safari/537.36",
    },
  });
  const $ = cheerio.load(html);
  const message = $(".bltn-message");
  if (!message.length) throw new Error("Could not find the bulletin message section");

  const title = message.find(".bltn-message-title p").first().text().trim();
  const spans = message
    .find(".bltn-message-byline span")
    .toArray()
    .filter((element) => $(element).text().replace(/\u00a0/g, " ").trim() !== "|");
  const scripture =
    $(spans[0]).find("p").text().trim() || $(spans[0]).text().trim();
  const speaker =
    $(spans[1]).find("p").text().trim() || $(spans[1]).text().trim();

  if (!title || !scripture || !speaker) {
    throw new Error("The bulletin sermon details were incomplete");
  }
  return { title, scripture, speaker };
}

async function getMostRecentYouTubeStream() {
  const { data: html } = await axios.get(
    "https://www.youtube.com/@FellowshipRC/streams",
    {
      timeout: 15000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/121 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9",
      },
    }
  );
  const match = html.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
  if (!match) throw new Error("No video ID found on the YouTube streams page");
  return `https://www.youtube.com/watch?v=${match[1]}`;
}

function dateInChicago() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function isOnePmInChicago() {
  return (
    new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago",
      hour: "2-digit",
      hour12: false,
    }).format(new Date()) === "13"
  );
}

export async function runSermonImport() {
  const [{ title, scripture, speaker }, videoLink] = await Promise.all([
    getSermonFromBulletin(),
    getMostRecentYouTubeStream(),
  ]);
  const date = dateInChicago();

  await connectDB();
  const existing = await Sermon.findOne({ date });
  if (existing) return { sermon: existing, created: false };

  const sermon = await Sermon.create({ title, date, scripture, speaker, videoLink });
  return { sermon, created: true };
}
