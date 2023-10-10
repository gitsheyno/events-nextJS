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
  await db.collection("comments").insertOne(document);
};

//-------------------------<< Fetching Data >>-------------------------

const fetchingData = async (client) => {
  const db = client.db();

  const allDocs = await db
    .collection("comments")
    .find()
    .sort({ _id: -1 })
    .toArray();

  return allDocs;
};

//-------------------------<< Helper Function  >>-------------------------

export default async function helper(req, res) {
  const eventID = req.query.eventid;

  //-------------------------<< Try to connect >>-------------------------

  let client;
  try {
    client = await connectDB();
  } catch (err) {
    res.status(500).json({ message: "connection failed" });
    return;
  }

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

    //-------------------------<< Try to insert >>-------------------------

    try {
      await insertDocument(client, newComment);
    } catch (err) {
      res.status(500).json({ message: "Inserting failed" });
      return;
    }

    newComment.id = res.insertedId;

    res.status(201).json({ message: "comment added", comment: newComment });
  }

  if (req.method === "GET") {
    //-------------------------<< Try to Fetch >>-------------------------

    let allDocs;
    try {
      allDocs = await fetchingData(client);
    } catch (err) {
      res.status(500).json({ message: "Fetching failed" });
    }

    res.status(200).json({ data: allDocs });
  }

  client.close();
}
