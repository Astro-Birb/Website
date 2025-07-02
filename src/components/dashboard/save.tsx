
'use client'

import { useSaveStore } from '@/lib/use-store'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'

export default function SavePopup() {
  const { hasUnsavedChanges, onSave, setUnsavedChanges } = useSaveStore()
  const [isPending, startTransition] = useTransition()

  if (!hasUnsavedChanges) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white border shadow-lg rounded-xl p-4 space-x-3 flex items-center animate-in fade-in slide-in-from-bottom-5">
        <p className="text-sm text-muted-foreground">You have unsaved changes</p>
        <Button
          size="sm"
          disabled={isPending}
          onClick={() => {
            startTransition(async () => {
              await onSave()
              setUnsavedChanges(false)
            })
          }}
        >
          {isPending ? 'Saving...' : 'Save'}
        </Button>
      </div>
    </div>
  )
}
