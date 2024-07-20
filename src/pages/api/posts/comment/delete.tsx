import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from "mongodb";
import { getToken } from "next-auth/jwt";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { commentId } = req.body;

    if (!commentId) {
      return res.status(400).json({ error: "Missing commentId" });
    }

    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!session) {
      return res.status(401).json({ error: "You need to login" });
    }

    try {
      await client.connect();
      const database = client.db("astro");
      const commentsCollection = database.collection("comments");

      const comment = await commentsCollection.findOne({
        _id: new ObjectId(commentId),
      });
      if (!comment) {
        return res.status(404).json({ error: "Comment not found" });
      }

      if (comment.author !== session.name) {
        return res
          .status(403)
          .json({ error: "You are not authorized to delete this comment" });
      }

      await commentsCollection.deleteOne({ _id: new ObjectId(commentId) });
      res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      console.error("Error deleting comment:", error);
      res.status(500).json({ error: "Internal server error" });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
