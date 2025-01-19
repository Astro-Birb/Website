import { NextResponse } from "next/server";
import { withAuth, makeApiRequest } from "@/utils/api-middleware";

interface DeleteInfractionParams {
  id: string;
  singleid: string;
}

export const dynamic = "force-dynamic";

async function handleDelete(
  request: Request,
  context: { params: DeleteInfractionParams }
) {
  return withAuth<DeleteInfractionParams>(async (session, { params }) => {
    const { id, singleid } = params;
    if (!id || !singleid) {
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 }
      );
    }

    await makeApiRequest(
      `${
        process.env.PROD_API_URL || "https://api.astrobirb.dev"
      }/delinfraction?auth=${process.env.API_AUTH}&server=${id}&id=${singleid}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
    );

    return NextResponse.json({ message: "Infraction deleted successfully" });
  }, context);
}

export const DELETE = handleDelete;
export const HEAD = handleDelete;
export const OPTIONS = handleDelete;
