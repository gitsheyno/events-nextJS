import { MongoClient } from "mongodb";
//-------------------------<< Stablish a connection >>-------------------------
export const connectDB = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://events:1f2swjYA2LySFf0Z@cluster0.fqkrxtu.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
};

//-------------------------<< Inserting Data >>-------------------------

export const insertDocument = async (client, collection, document) => {
  const db = client.db();

  const res = await db.collection(collection).insertOne({ email: document });

  return res;
};

//-------------------------<< Fetching Data >>-------------------------

export const fetchingData = async (client, collection) => {
  const db = client.db();

  const allDocs = await db
    .collection(collection)
    .find()
    .sort({ _id: -1 })
    .toArray();

  return allDocs;
};
