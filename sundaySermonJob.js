'use strict';

const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Scrapes the sermon title, scripture, and speaker from the
 * "This Weekend" message section on bl.tn/fellowship.
 */
async function getSermonFromBltn() {
  const { data: html } = await axios.get('https://bl.tn/fellowship', {
    timeout: 15000,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    },
  });

  const $ = cheerio.load(html);
  const msg = $('.bltn-message');

  if (!msg.length) {
    throw new Error('Could not find .bltn-message section on bl.tn/fellowship');
  }

  const title = msg.find('.bltn-message-title p').first().text().trim();

  // Byline: <span>scripture</span> <span>|</span> <span>speaker</span>
  // Filter out the divider span (contains only pipe / non-breaking spaces)
  const bylineSpans = msg.find('.bltn-message-byline span').toArray();
  const dataSpans = bylineSpans.filter((el) => {
    const text = $(el).text().replace(/\u00a0/g, ' ').trim();
    return text !== '|';
  });

  const scripture =
    $(dataSpans[0]).find('p').text().trim() || $(dataSpans[0]).text().trim();
  const speaker =
    $(dataSpans[1]).find('p').text().trim() || $(dataSpans[1]).text().trim();

  if (!title) throw new Error('Sermon title not found on bl.tn/fellowship');
  if (!scripture) throw new Error('Scripture not found on bl.tn/fellowship');
  if (!speaker) throw new Error('Speaker not found on bl.tn/fellowship');

  return { title, scripture, speaker };
}

/**
 * Fetches the YouTube streams page for @FellowshipRC and returns the URL
 * of the most recently published stream by extracting the first videoId
 * from the embedded ytInitialData JSON.
 */
async function getMostRecentYouTubeStream() {
  const { data: html } = await axios.get(
    'https://www.youtube.com/@FellowshipRC/streams',
    {
      timeout: 15000,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    }
  );

  const match = html.match(/"videoId":"([a-zA-Z0-9_-]{11})"/);
  if (!match) {
    throw new Error(
      'No video ID found on the YouTube streams page — YouTube may have blocked the request'
    );
  }

  return `https://www.youtube.com/watch?v=${match[1]}`;
}

/**
 * Main job: scrape sermon data + YouTube URL, then POST to /api/sermon.
 * Runs every Sunday at 1:00 PM CST (scheduled from app.js via node-cron).
 */
async function runSermonJob() {
  console.log('[SermonJob] Starting Sunday sermon import...');

  try {
    const [sermonData, videoLink] = await Promise.all([
      getSermonFromBltn(),
      getMostRecentYouTubeStream(),
    ]);

    const { title, scripture, speaker } = sermonData;
    console.log(`[SermonJob] Sermon : "${title}" | ${scripture} | ${speaker}`);
    console.log(`[SermonJob] Video  : ${videoLink}`);

    // Build today's date in YYYY-MM-DD using UTC (1 PM CST = 6–7 PM UTC, still same Sunday)
    const now = new Date();
    const date = [
      now.getUTCFullYear(),
      String(now.getUTCMonth() + 1).padStart(2, '0'),
      String(now.getUTCDate()).padStart(2, '0'),
    ].join('-');

    const apiBase =
      process.env.API_BASE_URL ||
      `http://localhost:${process.env.PORT || 3001}`;

    // Authenticate as admin to get a JWT
    const { data: loginData } = await axios.post(
      `${apiBase}/api/admin/login`,
      {
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
      }
    );

    // POST the new sermon
    const { data: created } = await axios.post(
      `${apiBase}/api/sermon`,
      { title, date, scripture, speaker, videoLink },
      { headers: { Authorization: `Bearer ${loginData.token}` } }
    );

    console.log(`[SermonJob] Sermon created (id: ${created._id}) on ${date}`);
  } catch (err) {
    console.error('[SermonJob] Failed:', err.response?.data ?? err.message);
  }
}

module.exports = { runSermonJob };

// Allow manual runs: `node sundaySermonJob.js`
if (require.main === module) {
  require('dotenv').config();
  runSermonJob().then(() => process.exit(0)).catch(() => process.exit(1));
}
