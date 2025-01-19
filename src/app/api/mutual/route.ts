export const dynamic = 'force-dynamic'

import { withAuth } from '@/utils/api-middleware';
import { getCached, setCached } from '@/utils/redis';
import { fetchWithRetry } from '@/utils/api-helpers';
import type { DiscordGuild, MutualGuildsResponse } from '@/types/discord';

export const GET = (request: Request) =>
  withAuth(async (session) => {
    console.log("Step 1 - Starting mutual route with session:", {
      userId: session?.user?.id,
      hasAccessToken: !!session?.user?.accessToken
    });

    try {
      const cacheKey = `discord:servers_and_mutuals:${session.user.id}`;
      const cachedData = await getCached<MutualGuildsResponse>(cacheKey);
      
      if (cachedData) {
        console.log("Step 2a - Returning cached data");
        return Response.json(cachedData);
      }

      console.log("Step 2b - Fetching Discord guilds");
      console.log("Session data:", session);
      const userGuilds = await fetchWithRetry<DiscordGuild[]>(
        'https://discord.com/api/users/@me/guilds',
        {
          headers: { Authorization: `Bearer ${session.user.accessToken}` },
        }
      );
      console.log("Step 3 - Discord guilds response:", {
        guildCount: userGuilds?.length,
        firstGuild: userGuilds?.[0]?.id
      });

      console.log("Step 4 - Fetching mutual servers");
      const requestBody = {
        user: session.user.id,
        guilds: userGuilds.map((guild: DiscordGuild) => guild.id)
      };
      console.log("Request body:", requestBody);

      const mutualGuilds = await fetchWithRetry<MutualGuildsResponse>(
        `${process.env.PROD_API_URL || "https://api.astrobirb.dev"}/mutual_servers?perm=staff&auth=${process.env.API_AUTH}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody)
        }
      );

      console.log("Step 5 - Mutual servers response:", {
        hasData: !!mutualGuilds,
        dataType: typeof mutualGuilds,
        responseBody: mutualGuilds
      });

      await setCached(cacheKey, mutualGuilds, 1200);
      return Response.json(mutualGuilds);
    } catch (error: any) {
      console.error("Detailed error in mutual route:", {
        errorMessage: error.message,
        errorStack: error.stack,
        errorName: error.name,
        sessionInfo: {
          hasUser: !!session?.user,
          hasAccessToken: !!session?.accessToken
        },
        step: "Unknown - check logs above for last successful step"
      });
      
      return Response.json(
        { error: 'Failed to fetch mutual servers', details: error.message }, 
        { status: 500 }
      );
    }
  });
