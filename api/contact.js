import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send to your email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "qadeerhussain385@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Confirmation to sender
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Qadeer Ahmed",
      html: `
        <h3>Thank you for reaching out!</h3>
        <p>Hi ${name},</p>
        <p>Thank you for contacting me through my portfolio website. I have received your message and will get back to you as soon as possible.</p>
        <hr />
        <p><strong>Your message:</strong></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p>${message}</p>
        <hr />
        <p>Best regards,<br/>Qadeer Ahmed</p>
      `,
    });

    res.status(200).json({ success: true, message: "Thank you for your message! I'll get back to you soon." });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email." });
  }
}