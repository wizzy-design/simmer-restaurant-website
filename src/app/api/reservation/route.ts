import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_fallback");

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      guests,
      type,
      time,
      date,
      fullName,
      email,
      phone,
      foodOrders,
      specialRequests,
    } = data;

    if (!fullName || !phone || !email || !date || !time) {
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
      await new Promise((resolve) => setTimeout(resolve, 800));
      return NextResponse.json(
        { success: true, simulated: true },
        { status: 200 },
      );
    }

    const htmlContent = `
      <h2>New Reservation Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Guests:</strong> ${guests}</p>
      <p><strong>Type:</strong> ${type}</p>
      <br />
      <p><strong>Food & Drinks order:</strong></p>
      <p>${foodOrders ? foodOrders.replace(/\n/g, "<br />") : "None"}</p>
      <br />
      <p><strong>Special Requests:</strong></p>
      <p>${specialRequests ? specialRequests.replace(/\n/g, "<br />") : "None"}</p>
    `;

    const { data: resendData, error } = await resend.emails.send({
      from: "Simmer Website <onboarding@resend.dev>",
      to: ["developedbymighty@gmail.com"],
      replyTo: email,
      subject: `New Reservation Request from ${fullName} for ${date}`,
      html: htmlContent,
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
    console.error("Reservation API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
