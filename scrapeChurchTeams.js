const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://churchteams.com/m/GroupBrowseNew.asp?oID=13823&s=MXdsZzNNbW1kbHAwK2tJc2cyUVVOQTEwa2xHQWZDK0s%3D&filter=y&q56335=309368';

async function scrapeEvents() {
  try {
    const { data } = await axios.get(URL);
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
      const fullRegisterLink = registerLink && !registerLink.startsWith('https://') ? baseUrl + registerLink : registerLink;

      const imagePath = $(el).find('img.media-object').attr('src');
      const fullImageUrl = imagePath ? baseUrl + imagePath : null;

      events.push({
        name,
        description,
        day,
        time,
        location,
        registerLink: fullRegisterLink,
        image: fullImageUrl,
      });
    });

    console.log(events);
  } catch (err) {
    console.error('Error fetching or parsing:', err.message);
  }
}

scrapeEvents();
