import { NextResponse } from "next/server";
import { withAuth, makeApiRequest } from "@/utils/api-middleware";
import { redisClient } from "@/utils/redis";

export const dynamic = "force-dynamic";

async function handleUpdate(
  request: Request,
  context: { params: { id: string; singleid: string } }
) {
  return withAuth(async (session, { params }) => {
    const { id, singleid } = params;
    const body = await request.json();

    if (!id || !singleid || !body) {
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 }
      );
    }

    const data = await makeApiRequest(
      `${
        process.env.PROD_API_URL || "https://api.astrobirb.dev"
      }/UpdateInfraction?auth=${
        process.env.API_AUTH
      }&server=${id}&id=${singleid}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    // Invalidate related caches
    await Promise.all([
      redisClient.del(`infraction:${id}:${singleid}`),
      redisClient.del(`infractions:${id}`),
    ]);

    return NextResponse.json(data);
  }, context);
}

export const PUT = handleUpdate;
export const HEAD = handleUpdate;
export const OPTIONS = handleUpdate;
