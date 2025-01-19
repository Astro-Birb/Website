import { auth } from "~/auth"
import { cookies } from "next/headers"
import { notFound, redirect } from "next/navigation"
import { InfractionDetail } from "./infraction-detail"
import Header from "@/components/header"
import { Link } from 'next-view-transitions'

async function getInfraction(guildId: string, infractionId: string) {
  const res = await fetch(`${process.env.SITE}/api/infractions/${guildId}/${infractionId}`, {
    headers: {
      'Cookie': cookies().toString()
    },
    cache: 'no-store'
  })
  
  if (!res.ok) {
    if (res.status === 403){
      return notFound()
    }
      
    if (res.status === 404) return notFound()
    throw new Error('You are unauthorised from accessing this. (If this is a mistake contact support)')
  }
  
  return res.json()
}

export default async function InfractionPage({
  params
}: {
  params: { id: string; infid: string }
}) {
  const session = await auth()
  if (!session) redirect("/")

  const infraction = await getInfraction(params.id, params.infid)

  return (
    <>
      <Header />
      <InfractionDetail infraction={infraction} guildId={params.id} infractionId={params.infid} />
    </>
  )
}