import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
import { getToken } from "next-auth/jwt";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { postId, author, content, author_icon } = req.body;

    if (!postId || !author || !content) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      await client.connect();
      const database = client.db("astro");
      const commentsCollection = database.collection("comments");
      const session = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!session) {
        return res.status(401).json({ error: "You need to login" });
      }
      if (author !== session.name) {
        return res.status(401).json({ error: "You are not the author" });
      }



      const newComment = {
        postId,
        author,
        author_icon,
        content,
        createdAt: new Date(),
      };


      const result = await commentsCollection.insertOne(newComment);
      console.log("New comment inserted:", result);

      res.status(201).json({ id: result.insertedId });
    } catch (error) {
      console.error("Error inserting comment:", error);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
