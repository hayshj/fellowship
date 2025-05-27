const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const router = express.Router();

// This URL corresponds to your <iframe> src
const SCRAPE_URL = 'https://churchteams.com/m/GroupBrowseNew.asp?oID=13823&s=MXdsZzNNbW1kbHAwK2tJc2cyUVVOQTEwa2xHQWZDK0s%3D&filter=y&q56335=309361&NoLogin=y';

router.get('/', async (req, res) => {
  try {
    const { data } = await axios.get(SCRAPE_URL);
    const $ = cheerio.load(data);
    const baseUrl = 'https://churchteams.com';

    const groups = [];

    $('#grouplist .media').each((i, el) => {
      const name = $(el).find('.gn').text().trim();
      const description = $(el).find('.description + .av').text().trim();
      const day = $(el).find('.ginfo span:contains("Day:")').next('.av').text().trim();
      const time = $(el).find('.ginfo span:contains("Time of day:")').next('.av').text().trim();
      const location = $(el).find('.ginfo span:contains("Location:")').next('.av').text().trim();
      const startDate = $(el).find('.ginfo span:contains("Start Date:")').next('.av').text().trim();
      const topic = $(el).find('.ginfo span:contains("Topic:")').next('.av').text().trim();

      const registerLink = $(el).find('a[title="Register"]').attr('href');
      const fullRegisterLink = registerLink && !registerLink.startsWith('https://') ? baseUrl + registerLink : registerLink;

      const image = $(el).find('img.media-object').attr('src');
      const fullImageUrl = image ? baseUrl + image : null;

      groups.push({
        name,
        description,
        day,
        time,
        location,
        startDate,
        registerLink: fullRegisterLink,
        image: fullImageUrl,
        topic,
      });
    });

    res.json(groups);
  } catch (err) {
    console.error('Scrape failed:', err.message);
    res.status(500).json({ error: 'Failed to fetch connect groups' });
  }
});

module.exports = router;
