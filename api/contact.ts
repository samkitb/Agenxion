import { Resend } from "resend";

type ApiRequest = { method?: string; body?: any };
type ApiResponse = { status: (code: number) => ApiResponse; json: (body: any) => void; setHeader?: (name: string, value: string) => void };

// Use the runtime process env; declared here to avoid missing Node types in this isolated file.
declare const process: any;

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || '"Agenxion" <no-reply@agenxion.com>';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "piyush@agenxion.com";
const SUBJECT = "New contact form submission from Agenxion website";

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    if (res.setHeader) res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message } = req.body ?? {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  if (!resend) {
    console.error("Missing RESEND_API_KEY");
    return res.status(500).json({ error: "Contact form not configured." });
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
      to: [TO_EMAIL],
      reply_to: email,
      subject: SUBJECT,
      text,
      html: `
        <div>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : "<p><strong>Company:</strong> (not provided)</p>"}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return res.status(500).json({ error: "Failed to send message." });
  }
}

