import { MongoClient, ServerApiVersion } from "mongodb";
import { getToken } from "next-auth/jwt";

//@ts-ignore
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!session) {
    return res.status(401).json({ error: "You need to login" });
  }

  let client;

  try {
    //@ts-ignore
    client = await MongoClient.connect(process.env.MONGODB_URI, {
      serverApi: ServerApiVersion.v1,
    });
    console.log("Connected to MongoDB");

    const astro = client.db("astro");

    const { title, content, tag } = req.body;

    if (!title || typeof title !== "string") {
      return res
        .status(400)
        .json({ error: "Title is required and must be a string" });
    }

    const data = {
      title: title,
      content: content || "",
      author_icon: session.picture,
      author_name: session.name,
      tag: tag,
      createdAt: new Date(),
    };

    const response = await astro.collection("Posts").insertOne(data);

    console.log("Inserted feedback:", response);
    res
      .status(201)
      .json({ message: "Feedback posted successfully", data: data });
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookData = {
        embeds: [
          {
            title: data.title,
            description: data.content,
            url: `https://astrobirb.dev/feedback/post/${response.insertedId}`,

            author: {
              name: data.author_name,
              icon_url: data.author_icon,
            },
            footer: {
              text: `${tag}`,
              icon_url: data.author_icon,
            },
            color: 16705372,
          },
        ],
      };

      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      });
      console.log("Sent webhook to Discord");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    if (client) {
      await client.close();
      console.log("Disconnected from MongoDB");
    }
  }
}
