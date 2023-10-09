import { MongoClient } from "mongodb";
export default async function helper(req, res) {
  const eventID = req.query.eventid;
  const client = await MongoClient.connect(
    "mongodb+srv://events:1f2swjYA2LySFf0Z@cluster0.fqkrxtu.mongodb.net/events?retryWrites=true&w=majority"
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (!email.includes * "@" || !name || !text) {
      res.status(401).json({ message: "invalid" });
      return;
    }

    const newComment = {
      name,
      email,
      text,
      eventID,
    };
    const db = client.db();

    const res = await db.collection("comments").insertOne(newComment);

    newComment.id = res.insertedId;

    res.status(201).json({ message: "comment added", comment: newComment });
  }

  if (req.method === "GET") {
    const db = client.db();

    const allDocs = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    console.log(allDocs);
    res.status(200).json({ data: allDocs });
  }

  client.close();
}
