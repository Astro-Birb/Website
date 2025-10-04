import { auth } from "~/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import DiscordTranscript from "./transcript";
import Header from "@/components/Landing/header";
import UnauthorizedScreen from "@/components/unauthorised";

async function GetTranscript(id: string) {
  const res = await fetch(`${process.env.SITE}/api/transcript/${id}`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  if (!res.ok) {
    return 403;
  }

  const data = await res.json();

  return data;
}

export default async function Transcript({
  params,
}: {
  params: { id: string };
}) {
  const session = await auth();
  if (!session) redirect("/");

  let transcript;
  try {
    transcript = await GetTranscript(params.id);
  } catch (error) {
    console.error(error);
    return <UnauthorizedScreen />;
  }
  if (transcript === 403) return <UnauthorizedScreen />;

  transcript.compact.reverse();

  return (
    <div>
      <DiscordTranscript transcript={transcript.compact} />
    </div>
  );
}
