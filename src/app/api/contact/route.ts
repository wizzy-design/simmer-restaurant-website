import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_fallback");

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // In a real application without an API key right now,
    // we should prevent Resend from crashing by throwing a manual soft block
    // or simulate success if RESEND_API_KEY is not set for local dev testing.
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is missing. Simulating sending email...");
      // Simulate slow network
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log(
        `Received contact form from ${name} (${phone}) - ${email}\nMessage: ${message}`,
      );
      return NextResponse.json(
        { success: true, simulated: true },
        { status: 200 },
      );
    }

    const { data: resendData, error } = await resend.emails.send({
      from: "Simmer Website <onboarding@resend.dev>", // replace with verified domain if available
      to: ["info@mysimmer.com"], // using your domain email
      replyTo: email || undefined,
      subject: `New Contact Request from ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email || "Not provided"}

Message:
${message}
      `,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <br />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, data: resendData },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
