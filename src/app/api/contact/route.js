export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    if (!body?.email) {
      return NextResponse.json({ message: "Email required" }, { status: 400 });
    }

    console.log("ENV CHECK:", {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS ? "exists" : "missing",
      receiver: process.env.EMAIL_RECEIVER,
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Contact Form Submission from ${body.email}`,
      text: `You received interest from ${body.email}`,
    });

    return NextResponse.json({ message: "Email sent!" });
  } catch (error) {
    console.error("FULL ERROR:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}