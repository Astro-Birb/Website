"use client"
import InfractionsCD from "./pages/infractions"

export default function ClientDashboardPage({
  page,
  guildData,
  configData,
}: {
  page: string
  guildData: any
  configData: any
}) {
  switch (page) {
    case "infractions":
      return <InfractionsCD guild={guildData} config={configData} />

    default:
      return <div>Unknown page</div>
  }
}
