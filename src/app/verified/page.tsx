"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckIcon } from "lucide-react";

export default function Page({ searchParams }: { searchParams: { u?: string } }) {
    const query = searchParams.u || ""; 
    const u = decodeURIComponent(query);
    const [avatarUrl, setAvatarUrl] = useState<string>("");
    const [username, setUsername] = useState<string>("User");

    useEffect(() => {
        async function fetchRobloxData() {
            try {
                const response = await fetch(`/api/roblox?id=${u}`);
                const data = await response.json();

                if (data.error) {
                    console.error("API error:", data.error);
                    return;
                }

                setUsername(data.username || "User");
                setAvatarUrl(data.avatarUrl);
            } catch (error) {
                console.error("Error fetching Roblox data:", error);
            }
        }

        if (u) {
            fetchRobloxData();
        }
    }, [u]);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md flex flex-col items-center space-y-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zinc-800">
                    {avatarUrl ? (
                        <Image
                            src={avatarUrl}
                            alt="User avatar"
                            width={96}
                            height={96}
                            priority
                        />
                    ) : (
                        <div className="w-24 h-24 bg-gray-500" />
                    )}
                </div>

                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-bold">Welcome, {username}!</h1>
                    <p className="text-zinc-400">Your Roblox account has been successfully verified</p>
                </div>

                <div className="w-full space-y-4">
                    <h2 className="text-xl font-semibold">What you can do!</h2>
                    <ul className="space-y-3">
                        <li className="flex items-start space-x-2">
                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-zinc-400">Manage group users</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-zinc-400">Infraction Type API (Roblox Integrated)</span>
                        </li>
                    </ul>
                </div>
                <a href="https://discord.com/api/oauth2/authorize?client_id=1113245569490616400&permissions=429765553360&scope=bot%20applications.commands" className="w-full">
                    <Button className="w-full bg-white text-black hover:bg-zinc-200" size="lg">
                        Invite Bot
                    </Button>
                </a>
            </div>
        </div>
    );
}
