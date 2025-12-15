import { MongoClient, Db } from "mongodb";

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "teachus";

if (!uri) {
  throw new Error(
    "Please set the MONGODB_URI environment variable in your .env.local file."
  );
}

const client = new MongoClient(uri);
const clientPromise =
  global._mongoClientPromise || client.connect().catch((error) => {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  });

if (!global._mongoClientPromise) {
  global._mongoClientPromise = clientPromise;
}

export async function getDb(): Promise<Db> {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName);
}

