const express = require('express');
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const nodemailer = require("nodemailer");

const sermonRouter = require('./routes/api/sermon');
const adminRouter = require('./routes/api/admin');
const eventsRouter = require('./routes/api/events');
const connectGroupsRouter = require('./routes/api/connectGroups');
const serveFormRouter = require('./routes/api/serveForm');

dotenv.config(); // Load environment variables

const app = express();

// ✅ Connect Database
connectDB();

// ✅ Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ API Routes
app.use('/api/sermon', sermonRouter);
app.use('/api/admin', adminRouter);
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

// ✅ Serve frontend last (Vite uses 'dist'; CRA uses 'build')
const frontendPath = path.join(__dirname, 'frontend', 'dist');
app.use(express.static(frontendPath));

// ✅ Frontend fallback (only for non-API routes)
app.get(/^\/(?!api\/).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));
