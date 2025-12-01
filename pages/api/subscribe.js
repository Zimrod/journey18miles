// pages/api/subscribe.js
import * as postmark from "postmark";
import { createClient } from "@supabase/supabase-js";

const client = new postmark.ServerClient(process.env.POSTMARK_API_TOKEN);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, userType } = req.body;

  try {
    // 1️⃣ Save to Supabase
    const { data, error } = await supabase.auth.signUp({
      email,
      password: crypto.randomUUID(), 
      options: {
        emailRedirectTo: 'www.journey18miles/email-confirmed', 
        emailRedirectTo: 'http://localhost:3000/email-confirmed', // after verification
      },
    });

    if (error) throw error;

    // 2️⃣ Send immediate welcome email (transactional stream)
    await client.sendEmail({
      From: "admin@journey18miles.com",
      To: email,
      MessageStream: "outbound", // <-- your transactional stream
      Subject: "Thank you for subscribing!",
      TextBody: `Welcome! We'll notify you about ${
        userType === "author" ? "writing opportunities" : "new book releases"
      }.`
    }).then(response => {
        console.log("Sending message");
        console.log(response.To);
        console.log(response.Message);
    });

    // (Optional) 3️⃣ If you really want them in Postmark Audience for Broadcasts
    // await client.createContact({
    //   Email: email,
    //   MessageStreamId: userType === "author" ? "authors-stream-id" : "parents-stream-id"
    // });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return res.status(500).json({ error: "Subscription failed" });
  }
}
