import { NextResponse } from "next/server";
import { withAuth, makeApiRequest } from "@/utils/api-middleware";
import { getCached, setCached } from "@/utils/redis";

interface GuildParams {
    id: string;
}
export const dynamic = "force-dynamic";
export const GET = (request: Request, context: { params: GuildParams }) =>
    withAuth<GuildParams>(async (session, { params }) => {
        const { id } = params;
        if (!id) {
            return NextResponse.json(
                { message: "Guild ID is required" },
                { status: 400 }
            );
        }

        const cacheKey = `guild:${id}:config`;
        const cachedData = await getCached(cacheKey);
        if (cachedData) {
            return NextResponse.json(cachedData);
        }

        const mutualData = await makeApiRequest(
            `${process.env.PROD_API_URL || "https://api.astrobirb.dev"}/config?auth=${
                process.env.API_AUTH
            }&server=${id}&stringify=True`,
            {
                method: "GET",
            }
        );

        const response = { mutualData };
        await setCached(cacheKey, response, 900);
        return NextResponse.json(response);
    }, context);

export const POST = (request: Request, context: { params: GuildParams }) =>
    withAuth<GuildParams>(async (session, { params }) => {
        const { id } = params;
        if (!id) {
            return NextResponse.json(
                { message: "Guild ID is required" },
                { status: 400 }
            );
        }

        const body = await request.json();
        const cacheKey = `guild:${id}:config`;

        const response = await makeApiRequest(
            `${process.env.PROD_API_URL || "https://api.astrobirb.dev"}/config?auth=${
                process.env.API_AUTH
            }&server=${id}`,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        await setCached(cacheKey, response, 900);
        return NextResponse.json(response.config);
    }, context);