import axios from "axios";
import * as cheerio from "cheerio";

const BASE_URL = "https://churchteams.com";
const GROUPS_URL =
  "https://churchteams.com/m/GroupBrowseNew.asp?oID=13823&s=MXdsZzNNbW1kbHAwK2tJc2cyUVVOQTEwa2xHQWZDK0s%3D&filter=y&q56335=309361&NoLogin=y";
const EVENTS_URL =
  "https://churchteams.com/m/GroupBrowseNew.asp?oID=13823&s=MXdsZzNNbW1kbHAwK2tJc2cyUVVOQTEwa2xHQWZDK0s%3D&filter=y&q56335=309368";

function absoluteUrl(value) {
  if (!value) return null;
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `${BASE_URL}${value}`;
}

async function load(url) {
  const { data } = await axios.get(url, { timeout: 15000 });
  return cheerio.load(data);
}

export async function scrapeEvents() {
  const $ = await load(EVENTS_URL);
  const events = [];

  $("#grouplist .media").each((index, element) => {
    events.push({
      name: $(element).find(".gn").text().trim(),
      description: $(element).find(".description + .av").text().trim(),
      day: $(element).find('.ginfo span:contains("Day:")').next(".av").text().trim(),
      time: $(element).find('.ginfo span:contains("Time of day:")').next(".av").text().trim(),
      location: $(element).find('.ginfo span:contains("Location:")').next(".av").text().trim(),
      startDate: $(element).find('.ginfo span:contains("Start Date:")').next(".av").text().trim(),
      registerLink: absoluteUrl($(element).find('a[title="Register"]').attr("href")),
      image: absoluteUrl($(element).find("img.media-object").attr("src")),
    });
  });

  return events;
}

export async function scrapeConnectGroups() {
  const $ = await load(GROUPS_URL);
  const groups = [];

  $("#grouplist .media").each((index, element) => {
    groups.push({
      name: $(element).find(".gn").text().trim(),
      description: $(element).find(".description + .av").text().trim(),
      day: $(element).find('.ginfo span:contains("Day:")').next(".av").text().trim(),
      time: $(element).find('.ginfo span:contains("Time of day:")').next(".av").text().trim(),
      location: $(element).find('.ginfo span:contains("Location:")').next(".av").text().trim(),
      startDate: $(element).find('.ginfo span:contains("Start Date:")').next(".av").text().trim(),
      registerLink: absoluteUrl($(element).find('a[title="Register"]').attr("href")),
      image: absoluteUrl($(element).find("img.media-object").attr("src")),
      topic: $(element).find('.ginfo span:contains("Topic:")').next(".av").text().trim(),
    });
  });

  return groups;
}
