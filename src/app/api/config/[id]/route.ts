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

        const mutualData = await makeApiRequest(
            `${process.env.PROD_API_URL || "https://api.astrobirb.dev"}/config?auth=${
                process.env.API_AUTH
            }&server=${id}&stringify=True`,
            {
                method: "GET",
            }
        );

        const response = { mutualData };
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

        let response;
        try {
            response = await makeApiRequest(
                `${process.env.PROD_API_URL || "https://api.astrobirb.dev"}/config?auth=${
                    process.env.API_AUTH
                }&server=${id}&unstringify=True`,
                {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
        } catch (err: any) {
            return NextResponse.json(
                { message: err?.message || "Unknown error from upstream API" },
                { status: err?.status || 500 }
            );
        }

        if (response?.status && response.status !== "success") {
            return NextResponse.json(
                { message: response.message || "Upstream API error", ...response },
                { status: 422 }
            );
        }

        return NextResponse.json(response);
    }, context);