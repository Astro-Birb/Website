import { NextResponse } from "next/server";
import { withAuth, makeApiRequest } from "@/utils/api-middleware";
import { getCached, setCached } from "@/utils/redis";
import type { InfractionResponse } from "@/types/discord";

interface SingleInfractionParams {
  id: string;
  singleid: string;
}

export const dynamic = "force-dynamic";

export const GET = (
  request: Request,
  context: { params: SingleInfractionParams }
) =>
  withAuth(async (session, { params }) => {
    const { id, singleid } = params;
    if (!id || !singleid) {
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 }
      );
    }

    const cacheKey = `infraction:${id}:${singleid}`;
    const cachedData = await getCached<InfractionResponse>(cacheKey);
    if (cachedData) {
      return NextResponse.json(cachedData);
    }
    const data = (await makeApiRequest(
      `${
        process.env.PROD_API_URL || "https://api.astrobirb.dev"
      }/infraction?auth=${process.env.API_AUTH}&server=${id}&id=${singleid}`
    )) as InfractionResponse;

    await setCached(cacheKey, data, 300);
    return NextResponse.json(data);
  }, context);
