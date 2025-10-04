'use client'

import { useEffect, useState, useCallback } from 'react'
import { InfractionTable } from "@/components/Admin/infraction-table"
import Header from "@/components/Landing/header";
import { useGradient } from '@/app/GradientContext'

interface PanelContentProps {
  guildId: string
}

export function PanelContent({ guildId }: PanelContentProps) {
  const { gradient, setGradient } = useGradient()
  const [infractions, setInfractions] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const prefetchCache = new Map()

  const prefetchInfractionData = useCallback(async (id: string) => {
    if (prefetchCache.has(id)) return
    
    try {
      const res = await fetch(`/api/infractions/${guildId}/${id}`)
      if (!res.ok) throw new Error('Failed to prefetch infraction')
      const data = await res.json()
      prefetchCache.set(id, data)
    } catch (error) {
      console.error('Error prefetching infraction:', error)
    }
  }, [guildId])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/infractions/${guildId}`)
        if (!res.ok) throw new Error('Failed to fetch infractions')
        const data = await res.json()
        setInfractions(data)
      } catch (error) {
        console.error('Error fetching infractions:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [guildId])

  useEffect(() => {
    setGradient('#1f2937')
    return () => setGradient('#000000')
  }, [setGradient])

  if (isLoading) {
    return (
      <div className="dark min-h-screen overflow-y-auto flex items-center justify-center">
        <div className="animate-spin">Loading...</div>
      </div>
    )
  }

  return (
    <div className="dark min-h-screen overflow-y-auto">
      <div 
        className="fixed inset-0 transition-[background] duration-1000"
        style={{
          background: `linear-gradient(to bottom, ${gradient}, rgb(0, 0, 0))`
        }}
      />
      <div className="relative z-10">
        <Header />
        <div className="p-4 space-y-4 mt-20">
          <InfractionTable 
            initialInfractions={infractions} 
            guildId={guildId}
            onPrefetch={prefetchInfractionData}
          />
        </div>
      </div>
    </div>
  )
}
