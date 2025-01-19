import { auth } from "~/auth"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import { InfractionTable } from "@/components/infraction-table"
import Header from "@/components/header"
import { GradientBackground } from "./gradient-background"

async function getGuildData(id: string) {
  const res = await fetch(`${process.env.SITE}/api/guild/${id}`, {
    headers: {
      'Cookie': cookies().toString()
    }
  })
  if (!res.ok) throw new Error('Failed to fetch guild')
  return res.json()
}

async function getInfractions(id: string) {
  const res = await fetch(`${process.env.SITE}/api/infractions/${id}`, {
    headers: {
      'Cookie': cookies().toString()
    }
  })
  if (!res.ok) throw new Error('Failed to fetch infractions')
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
