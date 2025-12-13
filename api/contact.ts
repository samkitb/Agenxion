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

