import nodemailer from "nodemailer";

export function getEmailConfig({ requireRecipient = false } = {}) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.EMAIL_TO || (!requireRecipient ? user : undefined);

  if (!user || !pass || !to) {
    throw new Error(
      "Missing required EMAIL_USER, EMAIL_PASS, or EMAIL_TO environment variable"
    );
  }

  return {
    user,
    to,
    transporter: nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.mail.me.com",
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user, pass },
    }),
  };
}
