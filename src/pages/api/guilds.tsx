import permissions from "@/utils/bitfield";
import { getToken } from "next-auth/jwt";

const API_KEY = process.env.API_KEY;
const ASTROBIRB_API_URL = process.env.ASTROBIRB_API_URL;

interface Guild {
  id: string;
  permissions: string;
}

interface User {
  accessToken: string;
}

export default async function guilds(req: any, res: any) {
  try {
    const session = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { accessToken } = session as unknown as User;

    const userGuildsResponse = await fetch(
      "https://discord.com/api/v10/users/@me/guilds",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!userGuildsResponse.ok) {
      const errorDetails = await userGuildsResponse.text();
      console.error("Failed to fetch user guilds:", errorDetails);
      return res
        .status(userGuildsResponse.status)
        .json({ error: errorDetails });
    }

    const userGuilds: Guild[] = await userGuildsResponse.json();

    const botguildsResponse = await fetch(`${ASTROBIRB_API_URL}/guilds`, {
      //@ts-ignore
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY,
      },
    });

    if (!botguildsResponse.ok) {
      const errorDetails = await botguildsResponse.text();
      console.error("Failed to fetch bot guilds:", errorDetails);
      return res.status(botguildsResponse.status).json({ error: errorDetails });
    }

    const botGuildsData = await botguildsResponse.json();
    const botGuildIds = botGuildsData.guilds.map((guild: any) => guild.guild);

    const filteredGuilds = userGuilds.filter((userGuild) => {
      const userGuildId = parseInt(userGuild.id);
      const userHasManageGuild = permissions(userGuild.permissions).includes(
        "MANAGE_GUILD"
      );
      return botGuildIds.includes(userGuildId) && userHasManageGuild;
    });

    res.status(200).json(filteredGuilds);
  } catch (error: any) {
    console.error("Error in guilds API", error.message);
    res.status(500).json({ error: error.message });
  }
}
