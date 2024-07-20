import { MongoClient, ServerApiVersion, Long } from "mongodb";

//@ts-ignore
export default async function handler(req, res) {
  let client;
  try {
    //@ts-ignore
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      serverApi: ServerApiVersion.v1,
    });
    console.log("Connected to MongoDB");
    const astro = client.db("astro");
    const roadmapdata = await astro.collection("Road Map").find().toArray();
    const data = roadmapdata;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (client) {
      await client.close();
    }
  }
}
