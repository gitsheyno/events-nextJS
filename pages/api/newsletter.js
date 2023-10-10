import { MongoClient } from "mongodb";

//-------------------------<< Stablish a connection >>-------------------------
const connectDB = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://events:1f2swjYA2LySFf0Z@cluster0.fqkrxtu.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
};

//-------------------------<< Inserting Data >>-------------------------

const insertDocument = async (client, document) => {
  const db = client.db();

  await db.collection("emails").insertOne({ email: document });
};

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
      await insertDocument(client, email);
      client.close();
    } catch (err) {
      res.status(500).json({ message: "Inserting failed" });
      return;
    }

    res.status(201).json({ message: "successful" });
  }
}
