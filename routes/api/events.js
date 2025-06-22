const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

const SCRAPE_URL = 'https://churchteams.com/m/GroupBrowseNew.asp?oID=13823&s=MXdsZzNNbW1kbHAwK2tJc2cyUVVOQTEwa2xHQWZDK0s%3D&filter=y&q56335=309368';

const scrapeEvents = async () => {
  const { data } = await axios.get(SCRAPE_URL);
  const $ = cheerio.load(data);
  const baseUrl = 'https://churchteams.com';

  const events = [];

  $('#grouplist .media').each((i, el) => {
    const name = $(el).find('.gn').text().trim();
    const description = $(el).find('.description + .av').text().trim();
    const day = $(el).find('.ginfo span:contains("Day:")').next('.av').text().trim();
    const time = $(el).find('.ginfo span:contains("Time of day:")').next('.av').text().trim();
    const location = $(el).find('.ginfo span:contains("Location:")').next('.av').text().trim();
    const startDateText = $(el).find('.ginfo span:contains("Start Date:")').next('.av').text().trim();

    const registerLink = $(el).find('a[title="Register"]').attr('href');
    const fullRegisterLink = registerLink && !registerLink.startsWith('https://') ? baseUrl + registerLink : registerLink;

    const image = $(el).find('img.media-object').attr('src');
    const fullImageUrl = image ? baseUrl + image : null;

    events.push({
      name,
      description,
      day,
      time,
      location,
      startDate: startDateText,
      registerLink: fullRegisterLink,
      image: fullImageUrl,
    });
  });

  return events;
};

router.get('/', async (req, res) => {
  try {
    const events = await scrapeEvents();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

router.get('/upcoming', async (req, res) => {
  try {
    const events = await scrapeEvents();

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison

    const upcomingEvents = events.filter((event) => {
      const parsedDate = Date.parse(event.startDate);
      if (!isNaN(parsedDate)) {
        const eventDate = new Date(parsedDate);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate >= today;
      }
      return false;
    });

    res.json(upcomingEvents);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch upcoming events' });
  }
});

module.exports = router;
