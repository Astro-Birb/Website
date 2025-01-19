import { auth } from "~/auth"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { InfractionTable } from "@/components/infraction-table"
import Header from "@/components/header"
import { GradientBackground } from "./gradient-background"
import  UnauthorizedScreen  from "@/components/unauthorised"


async function getGuildData(id: string) {
  const res = await fetch(`${process.env.SITE}/api/guild/${id}`, {
    headers: {
      'Cookie': cookies().toString()
    }
  })
  if (!res.ok) throw new Error('Can\'t find that server.')
  return res.json()
}

async function getInfractions(id: string) {
  const res = await fetch(`${process.env.SITE}/api/infractions/${id}`, {
    headers: {
      'Cookie': cookies().toString()
    }
  })

  if (!res.ok) return 403
  return res.json()
}

export default async function InfractionManager({
  params
}: {
  params: { id: string }
}) {
  const session = await auth()
  if (!session) redirect("/")

  const [guild, infractions] = await Promise.all([
    getGuildData(params.id),
    getInfractions(params.id)
  ])
  if (infractions === 403) return <UnauthorizedScreen />

  if (!guild) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-center text-white">Could not find that server.</p>
      </div>
    )
  }


  return (
    <GradientBackground>
      <div className="relative z-10">
        <Header />
        <div className="p-4 space-y-4 mt-20">
          <InfractionTable 
            initialInfractions={infractions} 
            guildId={params.id}
          />
        </div>
      </div>
    </GradientBackground>
  )
}
