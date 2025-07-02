"use client"

import SavePopup from '@/components/dashboard/save'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
        <SavePopup />
      </body>
    </html>
  )
}
