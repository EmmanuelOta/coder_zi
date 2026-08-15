import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.json();

    const {
      name,
      email,
      company,
      projectType,
      budget,
      timeline,
      message,
    } = formData;

    // Basic server-side validation.
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const submittedAt = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const emailContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;
      line-height: 1.6;
      color: #252936;
      background: #f7f8fa;
      padding: 40px 20px;
    }

    .email-wrapper {
      max-width: 680px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e3e5ea;
      border-radius: 20px;
      overflow: hidden;
      box-shadow:
        0 1px 2px rgba(33, 37, 45, 0.04),
        0 12px 32px rgba(33, 37, 45, 0.08);
    }

    .header {
      background: #f3f4f8;
      padding: 40px 32px;
      border-bottom: 1px solid #e3e5ea;
    }

    .eyebrow {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #737987;
      margin-bottom: 10px;
    }

    .header h1 {
      color: #252936;
      font-size: 30px;
      line-height: 1.15;
      font-weight: 650;
      letter-spacing: -0.035em;
      margin-bottom: 10px;
    }

    .header p {
      color: #737987;
      font-size: 14px;
    }

    .content {
      padding: 32px;
    }

    .section {
      margin-bottom: 20px;
      background: #ffffff;
      border: 1px solid #e3e5ea;
      border-radius: 16px;
      padding: 24px;
    }

    .section:last-child {
      margin-bottom: 0;
    }

    .section-title {
      color: #252936;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      margin-bottom: 20px;
    }

    .section-title::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 14px;
      margin-right: 8px;
      vertical-align: -2px;
      border-radius: 4px;
      background: #7657e8;
    }

    .identity {
      background: #fafbfc;
    }

    .identity-name {
      color: #252936;
      font-size: 24px;
      line-height: 1.2;
      font-weight: 650;
      letter-spacing: -0.03em;
      margin-bottom: 14px;
    }

    .meta {
      display: block;
    }

    .meta-item {
      color: #737987;
      font-size: 14px;
      margin-bottom: 7px;
    }

    .meta-item strong {
      color: #444957;
      font-weight: 600;
    }

    .meta-item a {
      color: #7657e8;
      text-decoration: none;
    }

    .badge-row {
      margin-top: 18px;
    }

    .badge {
      display: inline-block;
      padding: 6px 11px;
      border-radius: 999px;
      background: #eeeafb;
      color: #6547d3;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.04em;
    }

    .field {
      margin-bottom: 18px;
    }

    .field:last-child {
      margin-bottom: 0;
    }

    .field-label {
      color: #737987;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 7px;
    }

    .field-value {
      color: #303541;
      background: #fafbfc;
      border: 1px solid #e8e9ed;
      border-radius: 10px;
      padding: 12px 14px;
      font-size: 14px;
      line-height: 1.6;
      word-break: break-word;
    }

    .message {
      white-space: pre-wrap;
    }

    .footer {
      background: #f7f8fa;
      border-top: 1px solid #e3e5ea;
      padding: 22px 32px;
      color: #8a8f9b;
      text-align: center;
      font-size: 12px;
    }

    @media only screen and (max-width: 600px) {
      body {
        padding: 20px 10px;
      }

      .header {
        padding: 30px 22px;
      }

      .content {
        padding: 20px;
      }

      .section {
        padding: 20px;
      }

      .footer {
        padding: 20px;
      }
    }
  </style>
</head>

<body>
  <div class="email-wrapper">

    <div class="header">
      <div class="eyebrow">coder_zi · New inquiry</div>

      <h1>Someone wants to build something.</h1>

      <p>${submittedAt}</p>
    </div>

    <div class="content">

      <div class="section identity">
        <div class="identity-name">
          ${escapeHtml(name)}
        </div>

        <div class="meta">
          <div class="meta-item">
            <strong>Email:</strong>
            <a href="mailto:${escapeHtml(email)}">
              ${escapeHtml(email)}
            </a>
          </div>

          ${
            company
              ? `
                <div class="meta-item">
                  <strong>Company:</strong>
                  ${escapeHtml(company)}
                </div>
              `
              : ""
          }
        </div>

        <div class="badge-row">
          <span class="badge">
            ${escapeHtml(projectType)}
          </span>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Project</div>

        <div class="field">
          <div class="field-label">What they're building</div>
          <div class="field-value message">
            ${escapeHtml(message)}
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Scope & timing</div>

        <div class="field">
          <div class="field-label">Project type</div>
          <div class="field-value">
            ${escapeHtml(projectType)}
          </div>
        </div>

        <div class="field">
          <div class="field-label">Budget</div>
          <div class="field-value">
            ${escapeHtml(budget || "Not specified")}
          </div>
        </div>

        <div class="field">
          <div class="field-label">Timeline</div>
          <div class="field-value">
            ${escapeHtml(timeline || "Not specified")}
          </div>
        </div>
      </div>

    </div>

    <div class="footer">
      <p>
        This inquiry was submitted through the coder_zi website.
      </p>
    </div>

  </div>
</body>
</html>
`;

    console.log("Attempting to send inquiry email to: emmyraddo4@gmail.com");
    console.log("From email:", process.env.EMAIL_USER);

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "emmyraddo4@gmail.com",
      replyTo: email,
      subject: `New ${projectType} inquiry${company ? ` — ${company}` : ` — ${name}`}`,
      html: emailContent,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry sent successfully",
        messageId: info.messageId,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending inquiry email:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send inquiry",
      },
      { status: 500 },
    );
  }
}

/**
 * Escape user-provided values before inserting them into HTML.
 * This is important because the email template contains data
 * submitted directly by visitors to the site.
 */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}