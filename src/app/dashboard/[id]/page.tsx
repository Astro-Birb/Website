import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainContent } from "@/components/dashboard/permissions";
import { cookies } from "next/headers";
import Dashboard from "./dashboard";
import { auth } from "~/auth";
import { redirect } from "next/navigation";
import UnauthorizedScreen from "@/components/unauthorised";

async function GetGuild(params: { id: string }) {
  console.log(params.id)
  const res = await fetch(`${process.env.SITE}/api/guild/${params.id}`, {
    headers: {
      Cookie: cookies().toString(),
    },
    cache: "no-store",
  });
  const response = await res.json();
  if (response.mutualGuilds.length === 0){
    return 403;
  } 
    
  if (!res.ok) {

    if (res.status === 403) {

      return 403;
    }
  }
  return response;
}

export default async function Page({ params }: { params: { id: string } }) {
  const session = await auth();
  if (!session) redirect("/");
  const guildData = await GetGuild({ id: params.id });
  console.log(guildData);
  if (guildData === 403) return <UnauthorizedScreen />;

  return (
    <>
      <Dashboard guildData={guildData.mutualGuilds[0]} />
    </>
  );
}
