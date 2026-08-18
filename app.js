require("dotenv").config();

const express = require('express');
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const sermonRouter = require('./routes/api/sermon');
const adminRouter = require('./routes/api/admin');
const eventsRouter = require('./routes/api/events');
const connectGroupsRouter = require('./routes/api/connectGroups');
const serveFormRouter = require('./routes/api/serveForm');

const app = express();

// ✅ Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const requireDatabase = async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error(`[Database] ${error.message}`);
    res.status(503).json({
      error: "Database unavailable. Check the server's MONGODB_URI configuration.",
    });
  }
};

// ✅ API Routes
app.use('/api/sermon', requireDatabase, sermonRouter);
app.use('/api/admin', requireDatabase, adminRouter);
app.use('/api/events', eventsRouter);
app.use('/api/connectGroups', connectGroupsRouter);
app.use('/api/serveForm', serveFormRouter);

/**
 * ✅ Contact form email route
 * POST /api/contact
 * body: { name, email, message }
 */
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Ensure env vars exist
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_TO = process.env.EMAIL_TO;

    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
      return res.status(500).json({
        error: "Server email is not configured (missing EMAIL_USER/EMAIL_PASS/EMAIL_TO).",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.mail.me.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // STARTTLS on 587
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS, // Apple app-specific password recommended
      },
    });

    await transporter.sendMail({
      from: EMAIL_USER, // must be your iCloud address
      to: EMAIL_TO,     // where you want submissions
      replyTo: email,   // visitor's email (so you can reply)
      subject: `New Contact Form Submission from ${name}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}\n`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Contact email send error:", err);
    return res.status(500).json({ error: "Failed to send email." });
  }
});

// ✅ Serve the Vite build last. Vite outputs to root public/ so Vercel can
// serve assets from its CDN and this Express app can serve the same files.
const frontendPath = path.join(__dirname, 'public');
app.use(express.static(frontendPath));

// ✅ Frontend fallback (only for non-API routes)
app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.use((error, req, res, next) => {
  console.error("[Express] Unhandled request error:", error);
  if (res.headersSent) return next(error);
  return res.status(500).json({ error: "Internal server error" });
});

async function startServer() {
  try {
    await connectDB();
  } catch (error) {
    console.error(`[Startup] ${error.message}`);
    process.exitCode = 1;
    return;
  }

  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);

    // Long-lived self-hosted processes can run node-cron. Vercel imports the
    // exported app below and does not start a duplicate listener or scheduler.
    const cron = require("node-cron");
    const { runSermonJob } = require("./sundaySermonJob");
    cron.schedule('0 13 * * 0', runSermonJob, { timezone: 'America/Chicago' });
    console.log('Sunday sermon job scheduled (Sundays 1:00 PM America/Chicago)');
  });
}

if (require.main === module) {
  startServer();
}

module.exports = app;
