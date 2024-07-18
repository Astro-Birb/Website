import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
//@ts-ignore
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  let client;

  try {
    //@ts-ignore
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      serverApi: ServerApiVersion.v1,
    });

    const astro = client.db('astro');

    const objectId = new ObjectId(id);
    console.log(objectId)

    const feedback = await astro.collection('Posts')
      .find({ _id: objectId })
      .sort({ createdAt: -1 })
      .toArray();
    console.log(feedback)
    res.status(200).json(feedback);

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });

  } finally {
    if (client) {
      await client.close();
    }
  }
}
