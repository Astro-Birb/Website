import { MongoClient, ObjectId } from 'mongodb';
import { getToken } from 'next-auth/jwt';

const uri = process.env.MONGODB_URI;
//@ts-ignore
const client = new MongoClient(uri);
//@ts-ignore
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { postId } = req.query;
    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!session) {
      return res.status(401).json({ error: 'You need to login' });
    }

    try {
      await client.connect();
      const database = client.db('astro');
      const commentsCollection = database.collection('comments');
      

    
      const comments = await commentsCollection.find({ postId: postId }).toArray();

      res.status(200).json(comments);
    } catch (error) {
      console.error('Failed to fetch comments:', error);
      res.status(500).json({ message: 'Failed to fetch comments' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
