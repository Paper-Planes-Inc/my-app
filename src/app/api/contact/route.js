"use server";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse request body
    const { name, email, company, state, stores, phone } = await req.json();

    if (!name || !email || !company) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail", // or configure SMTP
      auth: {
        user: process.env.EMAIL_USER, // must exist in .env.local
        pass: process.env.EMAIL_PASS, // app password or SMTP password
      },
    });

    // Email details
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER, // set this in .env.local
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Company: ${company}
        State: ${state || "N/A"}
        Stores: ${stores || "N/A"}
        Email: ${email}
        Phone: ${phone || "N/A"}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
