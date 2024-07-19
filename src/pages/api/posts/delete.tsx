import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';
import { getToken } from 'next-auth/jwt';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!session) {
    return res.status(401).json({ error: 'You need to login' });
  }

  const userRoles = {
    "bugsbirt": "operator",
    "markination": "operator",
    "zippybonzo": "admin"
  };
//@ts-ignore
  const userRole = userRoles[session.name];

  if (!['admin', 'operator'].includes(userRole)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Post ID is required' });
  }

  let client;

  try {//@ts-ignore
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      serverApi: ServerApiVersion.v1,
    });
    console.log("Connected to MongoDB");

    const astro = client.db("astro");

    const response = await astro.collection("Posts").deleteOne({ _id: new ObjectId(id) });

    if (response.deletedCount === 0) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    if (client) {
      await client.close();
      console.log("Disconnected from MongoDB");
    }
  }
};

export default handler;
