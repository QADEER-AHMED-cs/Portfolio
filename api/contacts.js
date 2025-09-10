let contacts = []; // in-memory storage

export default async function handler(req, res) {
  if (req.method === "GET") {
    // Fetch all contacts
    return res.status(200).json(contacts);
  }

  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      createdAt: new Date().toISOString(),
    };

    contacts.push(newContact);

    return res.status(201).json(newContact);
  }

  return res.status(405).json({ error: "Method not allowed" });
}
