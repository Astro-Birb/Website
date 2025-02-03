import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const userId = searchParams.get("id");

        if (!userId) {
            return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
        }

        const userResponse = await fetch(`https://users.roblox.com/v1/users/${userId}`);
        const userData = await userResponse.json();

        const avatarResponse = await fetch(`https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=png`);
        const avatarData = await avatarResponse.json();

        return NextResponse.json({ username: userData.name, avatarUrl: avatarData.data[0].imageUrl });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
}
