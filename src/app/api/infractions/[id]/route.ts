import { NextResponse } from "next/server";
import { withAuth, makeApiRequest } from "@/utils/api-middleware";
import { getCached, setCached } from "@/utils/redis";

export const dynamic = "force-dynamic";

export const GET = (request: Request, context: { params: { id: string } }) =>
  withAuth(async (session, { params }) => {
    const { id } = params;
    if (!id) {
      return NextResponse.json(
        { message: "Server ID is required" },
        { status: 400 }
      );
    }

   
    const data = await makeApiRequest(
      `${
        process.env.PROD_API_URL || "https://api.astrobirb.dev"
      }/infractions?auth=${process.env.API_AUTH}&server=${id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    return NextResponse.json(data);
  }, context);
