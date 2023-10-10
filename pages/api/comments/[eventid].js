import {
  connectDB,
  insertDocument,
  fetchingData,
} from "../../../helpers/db-helper-util";

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
      client.close();
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
      const result = await insertDocument(client, "comments", newComment);

      newComment._id = result.insertedId;

      res.status(201).json({ message: "comment added", comment: newComment });
    } catch (err) {
      res.status(500).json({ message: "Inserting failed" });
    }
  }

  if (req.method === "GET") {
    //-------------------------<< Try to Fetch >>-------------------------

    try {
      const allDocs = await fetchingData(client, "comments");
      res.status(200).json({ data: allDocs });
    } catch (err) {
      res.status(500).json({ message: "Fetching failed" });
    }
  }

  client.close();
}
