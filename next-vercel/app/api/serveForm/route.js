import { NextResponse } from "next/server";
import { getEmailConfig } from "@/lib/email";

export async function POST(request) {
  const { name, dob, gender, email, phone, team } = await request.json();
  if (!name || !dob || !gender || !email || !phone || !team) {
    return NextResponse.json({ message: "All fields are required." }, { status: 400 });
  }

  let config;
  try {
    config = getEmailConfig();
  } catch (error) {
    console.error("[Config]", error.message);
    return NextResponse.json(
      { message: "Server email is not configured." },
      { status: 503 }
    );
  }

  try {
    await config.transporter.sendMail({
      from: config.user,
      to: config.to,
      replyTo: email,
      subject: `New Serve Form Submission from ${name}`,
      text: `New Serve Form Submission:\n\nName: ${name}\nDOB: ${dob}\nGender: ${gender}\nEmail: ${email}\nPhone: ${phone}\nTeam of Interest: ${team}\n`,
    });
    return NextResponse.json({ message: "Serve form submitted successfully!" });
  } catch (error) {
    console.error("[Serve form email]", error);
    return NextResponse.json({ message: "Failed to send serve form." }, { status: 500 });
  }
}
