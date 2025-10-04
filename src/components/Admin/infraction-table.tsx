"use client"

import { useEffect, useState, useCallback } from "react"
import { useTransitionRouter } from 'next-view-transitions'
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function InfractionTable({ initialInfractions, guildId }: any) {
  const router = useTransitionRouter()
  const [search, setSearch] = useState("")
  const [infractions, setInfractions] = useState(initialInfractions)

  // Simplified preload function with debugging
  const preloadInfraction = useCallback((id: string) => {
    try {
      console.log(`🔍 Attempting to preload infraction ${id}`)
      const url = `/panel/${guildId}/${id}`
      console.log(`📍 Preloading URL: ${url}`)
      router.prefetch(url)
      console.log(`✅ Prefetch initiated for ${url}`)
    } catch (err: unknown) {
      console.error(`❌ Failed to prefetch:`, err)
    }
  }, [guildId, router]);

  // Batch preload visible infractions
  const preloadVisibleInfractions = useCallback(() => {
    const visibleInfractions = infractions.filter((inf: any) => 
      inf.user.name.toLowerCase().includes(search.toLowerCase()) ||
      inf.action.type.toLowerCase().includes(search.toLowerCase()) ||
      inf.action.details.toLowerCase().includes(search.toLowerCase())
    );

    visibleInfractions.forEach((infraction: any) => {
      preloadInfraction(infraction.id);
    });
  }, [infractions, search, preloadInfraction]);

  // Preload on mount and search change
  useEffect(() => {
    preloadVisibleInfractions();
  }, [search, preloadVisibleInfractions]);

  // Add a mount effect to preload all initially
  useEffect(() => {
    if (initialInfractions) {
      initialInfractions.forEach((infraction: any) => {
        preloadInfraction(infraction.id);
      });
    }
  }, [initialInfractions, preloadInfraction]);

  const handleRowClick = (id: string) => {
    router.push(`/panel/${guildId}/${id}`)
  }

  // Debug hover events
  const handlePointerEnter = useCallback((id: string) => {
    console.log(`👆 Pointer entered row for infraction ${id}`)
    preloadInfraction(id)
  }, [preloadInfraction])

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Search className="h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search cases..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          className="max-w-sm bg-gray-800/50 border-gray-700"
        />
      </div>

      <div className="rounded-lg border border-gray-800 overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-900/50">
            <TableRow>
              <TableHead>Case ID</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Moderator</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {infractions
              .filter((inf: any) => 
                inf.user.name.toLowerCase().includes(search.toLowerCase()) ||
                inf.action.type.toLowerCase().includes(search.toLowerCase()) ||
                inf.action.details.toLowerCase().includes(search.toLowerCase())
              )
              .map((infraction: any) => (
                <TableRow 
                  key={infraction.id}
                  className="hover:bg-gray-800/50 cursor-pointer transition-colors"
                  onClick={() => router.push(`/panel/${guildId}/${infraction.id}`)}
                  onPointerEnter={() => handlePointerEnter(infraction.id)}
                >
                  <TableCell className="font-mono text-sm">{infraction.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={infraction.user.avatar} />
                        <AvatarFallback>{infraction.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <span>{infraction.user.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={infraction.author.avatar} />
                        <AvatarFallback>{infraction.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <span>{infraction.author.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={infraction.status === 'active' ? 'destructive' : 'secondary'}>
                      {infraction.action.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-[300px] truncate">
                    {infraction.action.details}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(infraction.created).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
