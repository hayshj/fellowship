const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

const SCRAPE_URL = 'https://churchteams.com/m/GroupBrowseNew.asp?oID=13823&s=MXdsZzNNbW1kbHAwK2tJc2cyUVVOQTEwa2xHQWZDK0s%3D&filter=y&q56335=309368';

router.get('/', async (req, res) => {
  try {
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
      const registerLink = $(el).find('a[title="Register"]').attr('href');
      const image = $(el).find('img.media-object').attr('src');

      events.push({
        name,
        description,
        day,
        time,
        location,
        registerLink: registerLink && !registerLink.startsWith('https://') ? baseUrl + registerLink : registerLink,  // Fix for the duplicate URL
        image: image ? baseUrl + image : null,
      });
    });

    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

module.exports = router;
