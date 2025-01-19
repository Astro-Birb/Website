import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Header from "./header"

interface Guild {
  id: string
  name: string
  icon: string
  memberCount?: number
}

export function GuildHeader({ guild }: { guild: Guild }) {
  if (!guild) return null;

  // Use the full icon URL directly since it's already in the correct format
  const iconUrl = guild.icon || null

  return (
    
    <div className="flex items-center justify-between">
      <Header />
      <div className="flex items-center space-x-4 mt-25">
        <Avatar className="h-16 w-16 border-2 border-gray-700">
          <AvatarImage src={iconUrl || ''} />
          <AvatarFallback>{guild.name?.[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{guild.name}</h1>
          <p className="text-muted-foreground">Moderation Dashboard</p>
        </div>
      </div>
    </div>
  )
}
