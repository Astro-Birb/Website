import { withAuth } from "@/utils/api-middleware";
import { makeApiRequest } from "@/utils/api-middleware";

interface GuildParams {
  id: string;
}

export const GET = (_request: Request, context: { params: GuildParams }) =>
  withAuth<GuildParams>(async (session, { params }) => {
    const { id } = context.params;


    if (!id || typeof id !== "string") {
      return new Response(
        JSON.stringify({ error: "Invalid or missing id parameter" }),
        { status: 400 }
      );
    }

    try {
      const response = await fetch(
        `${process.env.PROD_API_URL}/transcript?id=${id}&auth=${process.env.API_AUTH}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch transcript");
      }

      const data = await response.json();
      const compact = data.transcript[0].compact;
      const GuildID = data.GuildID;
      const permissions = await makeApiRequest(
        `${
          process.env.PROD_API_URL || "https://api.astrobirb.dev"
        }/permissions?auth=${process.env.API_AUTH}&server=${GuildID}&user=${
          session.user.id
        }`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );    
      if (permissions.isAdmin === false) {
        return new Response(JSON.stringify({ message: "Unauthorized" }), {
          status: 403,
        });
      }        
      return new Response(JSON.stringify({ data, compact, GuildID: GuildID }), {
        status: 200,
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }
  });
