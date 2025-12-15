import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || "piyush@agenxion.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

// Basic serverless handler for Vercel
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY");
    return res.status(500).json({ error: "Contact form not configured" });
  }

  try {
    const resend = new Resend(resendApiKey);
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: [email],
      subject: `New contact from ${name}`,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form submission error:", error);
    return res.status(500).json({ error: "Failed to send message" });
  }
}
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = '"Agenxion" <no-reply@agenxion.com>';
const TO_EMAIL = "piyush@agenxion.com";
const SUBJECT = "New contact form submission from Agenxion website";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "Company: (not provided)",
      "",
      "Message:",
      message,
    ].join("\n");

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      reply_to: email,
      subject: SUBJECT,
      text,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return res.status(500).json({ error: "Failed to send message." });
  }
}

