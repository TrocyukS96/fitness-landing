// lib/mail/service.ts
import nodemailer from "nodemailer";
import { CreateContactDto } from "@/lib/validation/schemas";

class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || 'user',
        pass: process.env.EMAIL_PASSWORD || 'password',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendContactEmail(createContactDto: CreateContactDto): Promise<void> {
    const { name, message, topic, phone } = createContactDto;
    const ownerEmail = process.env.OWNER_EMAIL || 'owner@example.com';
    const subject = `New message from the website from ${name}`;
    const date = new Date().toLocaleString("en-US");

    const htmlData = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { color: #4a6bff; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .message { background: #f5f7ff; padding: 15px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New message from the website</h2>
          </div>
          
          <div class="field">
            <span class="label">Date:</span> ${date}
          </div>
          
          <div class="field">
            <span class="label">From:</span> ${name}
          </div>

          ${
            phone
              ? `<div class="field">
                  <span class="label">Phone:</span> ${phone}
                </div>`
              : ""
          }
          
          <div class="field">
            <span class="label">Subject:</span> ${topic || "not specified"}
          </div>
          
          <div class="message">
            <h3>Message text:</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await this.transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM}>`,
      to: ownerEmail,
      subject,
      html: htmlData,
      text: `New message\n\nName: ${name}\n${
        phone ? `Phone: ${phone}\n` : ""
      }Subject: ${topic || "not specified"}\nMessage: ${message}`,
    });
  }

  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log("SMTP connection verified successfully");
      return true;
    } catch (error) {
      console.error("SMTP connection error:", error);
      return false;
    }
  }
}

// Export singleton instance
export const mailService = new MailService();