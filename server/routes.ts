import type { Express } from "express";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export function registerRoutes(app: Express): void {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);

      // Save in memory storage
      const contact = await storage.createContact(validatedData);

      console.log("New contact form submission:", {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        timestamp: new Date().toISOString(),
      });

      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          });

          // Send to you
          await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "qadeerhussain385@gmail.com",
            subject: `Portfolio Contact: ${validatedData.subject}`,
            html: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${validatedData.message}</p>
            `,
          });

          // Send confirmation to sender
          await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: validatedData.email,
            subject: "Thank you for contacting Qadeer Ahmed",
            html: `
              <h3>Thank you for reaching out!</h3>
              <p>Hi ${validatedData.name},</p>
              <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
              <hr />
              <p><strong>Your message:</strong></p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
              <p>${validatedData.message}</p>
              <hr />
              <p>Best regards,<br/>Qadeer Ahmed</p>
            `,
          });

          console.log("Emails sent successfully");
        } catch (emailError) {
          console.error("Email sending failed:", emailError);
        }
      } else {
        console.log("Email credentials not configured - contact saved only");
      }

      res.json({
        success: true,
        message: "Thank you for your message! I'll get back to you soon.",
        contact,
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({
        error: "Failed to process your message. Please try again.",
      });
    }
  });

  // Get all contacts (optional)
  app.get("/api/contacts", async (_req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });
}
