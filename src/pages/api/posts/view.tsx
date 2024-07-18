import { MongoClient, ServerApiVersion } from 'mongodb';


//@ts-ignore
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  let client;

  try {
    //@ts-ignore
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      serverApi: ServerApiVersion.v1,
    });
    console.log("Connected to MongoDB");

    const astro = client.db("astro");

    const posts = await astro.collection("Posts")
    .find({})
    .sort({ createdAt: -1 })  
    .toArray();

    res.status(200).json(posts);

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: 'Internal Server Error' });

  } finally {
    if (client) {
      await client.close();
      console.log("Disconnected from MongoDB");
    }
  }
}
