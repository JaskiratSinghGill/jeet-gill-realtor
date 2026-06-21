import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required."),
  email: z.string().trim().email("A valid email is required."),
  phone: z.string().trim().min(7, "Phone number is required."),
  message: z.string().trim().min(10, "Please include a little more detail."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid form submission." },
        { status: 400 },
      );
    }

    const { name, email, phone, message } = parsed.data;
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL ?? "jeet11gill@gmail.com";
    const from =
      process.env.CONTACT_FROM_EMAIL ?? "Jeet Gill Website <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json({
        ok: true,
        mocked: true,
        message: "Contact request validated. Add RESEND_API_KEY to send email.",
      });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New consultation request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
