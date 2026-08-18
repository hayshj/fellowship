import { NextResponse } from "next/server";
import { getEmailConfig } from "@/lib/email";

export async function POST(request) {
  const { name, email, message } = await request.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  let config;
  try {
    config = getEmailConfig({ requireRecipient: true });
  } catch (error) {
    console.error("[Config]", error.message);
    return NextResponse.json(
      { error: "Server email is not configured (missing EMAIL_USER/EMAIL_PASS/EMAIL_TO)." },
      { status: 503 }
    );
  }

  try {
    await config.transporter.sendMail({
      from: config.user,
      to: config.to,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[Contact email]", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
