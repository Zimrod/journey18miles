// pages/api/contact.js
import { ServerClient } from 'postmark'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  try {
    // Initialize Postmark client
    const client = new ServerClient('5e068b8b-aa72-463a-9d7a-7393e795f6d4')

    // Send email via Postmark
    await client.sendEmail({
      From: 'submit@journey18miles.com', 
      To: 'admin@journey18miles.com',
      Subject: `Contact Form: ${subject}`,
      HtmlBody: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from Journey of 18 Miles contact form</em></p>
      `,
      TextBody: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
Sent from Journey of 18 Miles contact form
      `,
    })

    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Postmark error:', error)
    res.status(500).json({ message: 'Failed to send email' })
  }
}