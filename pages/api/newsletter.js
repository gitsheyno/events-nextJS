import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email.includes("@") || !email) {
      res.status(401).json({ message: "bad input" });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://events:1f2swjYA2LySFf0Z@cluster0.fqkrxtu.mongodb.net/newsletter?retryWrites=true&w=majority"
    );

    const db = client.db();

    await db.collection("emails").insertOne({ email: email });

    client.close();

    res.status(201).json({ message: "successful" });
  }
}
