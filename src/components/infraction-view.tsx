'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Clock, Trash2, Edit2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function InfractionView({ 
  infraction, 
  guildId, 
  infractionId 
}: { 
  infraction: any
  guildId: string
  infractionId: string
}) {
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [editedReason, setEditedReason] = useState(infraction.action.details)
  const [editedAction, setEditedAction] = useState(infraction.action.type)

  const handleEdit = async () => {
    try {
      const updatedInfraction = {
        ...infraction,
        action: {
          ...infraction.action,
          type: editedAction,
          details: editedReason
        },
      }

      const res = await fetch(`/api/infractions/${guildId}/${infractionId}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedInfraction),
      })

      if (!res.ok) throw new Error('Failed to update')
      
      setIsEditing(false)
      router.refresh()
    } catch (error) {
      console.error('Error updating infraction:', error)
    }
  }

  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/infractions/${guildId}/${infractionId}/delete`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Failed to delete')
      
      router.push(`/panel/${guildId}`)
    } catch (error) {
      console.error('Error deleting infraction:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => router.push(`/panel/${guildId}`)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Infractions
      </Button>

      {/* Rest of the JSX remains the same as in the original file,
          just update the handlers to use the new handleEdit and handleDelete */}
      // ...existing code...
    </div>
  )
}
