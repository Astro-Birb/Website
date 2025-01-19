'use client'

import { ReactNode } from 'react'
import { useGradient } from '@/app/GradientContext'

export function GradientBackground({ children }: { children: ReactNode }) {
  return (
    <div className="dark min-h-screen relative text-white overflow-y-auto">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black transition-opacity duration-1000" />
      {children}
    </div>
  )
}
