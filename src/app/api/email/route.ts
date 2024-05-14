import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  const email = formData.email;
  const message = formData.message;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure: true,

    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      to: email,

      subject: "You have a new message. Check it!",

      html: `
        <h2>You have a new message!</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        `,
    });

    return NextResponse.json({ message: "Success!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Unexpected error!" }, { status: 500 });
  }
}
