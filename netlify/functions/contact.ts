import nodemailer from "nodemailer";

export const handler = async (event: {
  httpMethod?: string;
  headers?: Record<string, string | undefined>;
  body?: string | null;
}) => {
  // Handle CORS Preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  // Only accept POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    let data: { name?: string; email?: string; subject?: string; message?: string } = {};

    if (event.headers && (event.headers["content-type"] || "").includes("application/json")) {
      data = JSON.parse(event.body || "{}");
    } else {
      const params = new URLSearchParams(event.body || "");
      data = {
        name: params.get("name") || "",
        email: params.get("email") || "",
        subject: params.get("subject") || "",
        message: params.get("message") || "",
      };
    }

    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Missing required fields (name, email, message)" }),
      };
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE !== "false";
    const user = process.env.SMTP_USER || "noruvalabs@gmail.com";
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || "noruvalabs@gmail.com";

    if (!pass) {
      console.error("SMTP_PASS is not configured in environment variables");
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Server SMTP configuration error: missing SMTP_PASS" }),
      };
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: email,
      to: toEmail,
      subject: `[Contact Form] ${subject || "Inquiry from " + name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "None"}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-top: 0; font-size: 20px;">New Message from Noruva Labs Contact Form</h2>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="margin: 8px 0; color: #334155;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0; color: #334155;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
          <p style="margin: 8px 0; color: #334155;"><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; white-space: pre-wrap; color: #1e293b; line-height: 1.6;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">Sent automatically from https://noruva.dev</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ success: true, message: "Email sent successfully" }),
    };
  } catch (error: unknown) {
    const err = error as Error;
    console.error("Failed to send contact email:", err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: err.message || "Failed to send email" }),
    };
  }
};
