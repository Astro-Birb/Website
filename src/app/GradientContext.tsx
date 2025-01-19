'use client'

import { createContext, useContext, useState } from 'react'

interface GradientContextType {
  gradient: string
  setGradient: (color: string) => void
}

const GradientContext = createContext<GradientContextType>({
  gradient: '#000000',
  setGradient: () => {}
})

export function GradientProvider({ children }: { children: React.ReactNode }) {
  const [gradient, setGradient] = useState('#000000')

  return (
    <GradientContext.Provider value={{ gradient, setGradient }}>
      {children}
    </GradientContext.Provider>
  )
}

export const useGradient = () => useContext(GradientContext)
