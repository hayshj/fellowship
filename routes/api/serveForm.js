const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, dob, gender, email, phone, team } = req.body;

  if (!name || !dob || !gender || !email || !phone || !team) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.me.com', // or your preferred SMTP host
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Serve Form Submission from ${name}`,
      text: `
New Serve Form Submission:

Name: ${name}
DOB: ${dob}
Gender: ${gender}
Email: ${email}
Phone: ${phone}
Team of Interest: ${team}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Serve form submitted successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send serve form." });
  }
});

module.exports = router;
