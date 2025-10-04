import { auth } from "~/auth";
import { redirect } from "next/navigation";
import ServerCard from "@/components/server-card";
import { NoServersFound } from "@/components/no-servers";
import { cookies } from "next/headers";
import { UserAvatar } from "@/components/user-avatar";
import Header from "@/components/Landing/header";
import NotLongerMaintained from "@/components/Servers/NoLongerMaintained";
import { useState } from "react";

async function getMutualServers() {
  const session = await auth();

  if (!session?.user?.accessToken) {
    redirect("/");
  }

  try {
    const res = await fetch(`${process.env.SITE}/api/mutual`, {
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
  } catch (error) {
    console.error("Error fetching servers:", error);
    throw new Error("Failed to fetch servers");
  }
}

export default async function Servers() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  const { mutual: servers = [] } = await getMutualServers();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <div className="py-8 border-b border-gray-800">
          <div className="flex items-center justify-between mt-20">
            <div className="flex items-center space-x-4">
              <UserAvatar
                user={{
                  image: session.user?.image,
                  name: session.user?.name || "User",
                }}
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Your Servers
                </h1>
                <p className="text-gray-400">Manage your Discord servers</p>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              {servers.length} {servers.length === 1 ? "server" : "servers"}{" "}
              available
            </div>
          </div>
        </div>

        <NotLongerMaintained />

        <div className="py-12">
          {servers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {servers.map((server: any) => (
                <ServerCard
                  key={server.id}
                  name={server.name}
                  iconUrl={server.icon}
                  role="Admin"
                  id={server.id.toString()}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-12">
              <NoServersFound />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
