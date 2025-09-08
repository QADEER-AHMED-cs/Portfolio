import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store contact in memory
      const contact = await storage.createContact(validatedData);
      
      console.log('New contact form submission:', {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        timestamp: new Date().toISOString()
      });

      // Try to send email if credentials are available
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
            }
          });

          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'qadeerhussain385@gmail.com',
            subject: `Portfolio Contact: ${validatedData.subject}`,
            html: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> ${validatedData.email}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
              <p><strong>Message:</strong></p>
              <p>${validatedData.message}</p>
            `
          };

          await transporter.sendMail(mailOptions);
          console.log('Email sent successfully to qadeerhussain385@gmail.com');
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
          // Don't fail the request if email fails, just log it
        }
      } else {
        console.log('Email credentials not configured - contact saved to storage only');
      }

      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon.",
        contact: contact
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: "Failed to process your message. Please try again." });
    }
  });

  // Get all contacts (optional admin endpoint)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
