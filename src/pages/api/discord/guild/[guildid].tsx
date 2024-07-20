import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { guildid } = req.query;
    if (!guildid) {
      return res.status(400).json({ error: "Guild ID is required" });
    }

    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });
    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const guildsResponse = await fetch(
      `https://discord.com/api/users/@me/guilds`,
      {
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!guildsResponse.ok) {
      return res.status(500).json({ error: "Failed to fetch user guilds" });
    }

    const userGuilds = await guildsResponse.json();
    const userGuild = userGuilds.find((guild: any) => guild.id === guildid);

    if (!(userGuild.permissions & 0x20)) {
      return res
        .status(403)
        .json({
          error: "Unauthorized: User does not have MANAGE_GUILD permission",
        });
    }

    const guildResponse = await fetch(
      `https://discord.com/api/guilds/${guildid}`,
      {
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      }
    );

    if (!guildResponse.ok) {
      return res.status(404).json({ error: "Guild not found" });
    }

    const guildData = await guildResponse.json();

    return res.status(200).json(guildData);
  } catch (error) {
    console.error("Error fetching guild data:", error);
    res.status(500).json({ error: "Failed to fetch guild data" });
  }
}
