import { MongoClient, ServerApiVersion, Long } from 'mongodb';
import { getToken } from 'next-auth/jwt';
   
//@ts-ignore
export default async function handler(req, res) {
  let client;
  try {
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const { guildid } = req.query;
        //@ts-ignore
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      serverApi: ServerApiVersion.v1,
    });
    console.log("Connected to MongoDB");

    const astro = client.db("astro");
    const prefixdb = astro.collection("prefixes");

    const guildIdLong = Long.fromString(guildid);
    const filter = { guild_id: guildIdLong };
    const prefix = await prefixdb.findOne(filter);


    if (!prefix) {
      return res.status(404).json({ error: "Prefix not found" });
    }

    res.status(200).json({ prefix });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: 'Internal Server Error' });

  } finally {
    if (client) {
      await client.close();
    }
  }
}
