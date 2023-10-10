import { connectDB, insertDocument } from "../../helpers/db-helper-util";

//-------------------------<< Helper Function  >>-------------------------

export default async function helper(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email.includes("@") || !email) {
      res.status(401).json({ message: "bad input" });
      return;
    }

    let client;

    //-------------------------<< Try to connect >>-------------------------
    try {
      client = await connectDB();
    } catch (err) {
      res.status(500).json({ message: "Connection failed" });
      return;
    }
    //-------------------------<< Try to insert >>-------------------------

    try {
      await insertDocument(client, "emails", email);
      client.close();
    } catch (err) {
      res.status(500).json({ message: "Inserting failed" });
      return;
    }

    res.status(201).json({ message: "successful" });
  }
}
