'use client'

import { useState, useEffect, startTransition } from 'react'
import { useTransitionRouter } from 'next-view-transitions'
import { ArrowLeft, Clock, Trash2, Edit2, Loader2 } from 'lucide-react'
import { updateInfraction } from './actions'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getAverageColor } from '@/lib/color-utils'
import { useGradient } from '@/app/GradientContext'

export function InfractionDetail({ 
  infraction: initialInfraction, 
  guildId, 
  infractionId 
}: { 
  infraction: any
  guildId: string
  infractionId: string
}) {
  const router = useTransitionRouter()
  const { setGradient } = useGradient()
  const [infraction, setInfraction] = useState(initialInfraction)
  const [isEditing, setIsEditing] = useState(false)
  const [editedReason, setEditedReason] = useState(initialInfraction.action.details)
  const [editedAction, setEditedAction] = useState(initialInfraction.action.type)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [primaryColor, setPrimaryColor] = useState('#000000');
  const [isColorLoaded, setIsColorLoaded] = useState(false);

  useEffect(() => {
    if (initialInfraction?.user?.avatar) {
      setIsColorLoaded(false);
      getAverageColor(initialInfraction.user.avatar)
        .then(color => {
          setPrimaryColor(color);
          setGradient(color); // Set the global gradient
          setTimeout(() => setIsColorLoaded(true), 100);
        })
        .catch(() => {
          setPrimaryColor('#000000');
          setGradient('#000000');
          setIsColorLoaded(true);
        });
    }
  }, [initialInfraction?.user?.avatar, setGradient]);

  // Preload the back navigation
  useEffect(() => {
    void startTransition(() => {
      router.prefetch(`/panel/${guildId}`);
    });
  }, [guildId, router]);

  const handleEdit = async () => {
    try {
      setIsUpdating(true)
      const updatedInfraction = {
        ...infraction,
        action: {
          ...infraction.action,
          type: editedAction,
          details: editedReason
        },
      }

      await updateInfraction(guildId, infractionId, updatedInfraction)
      setInfraction(updatedInfraction)
      setIsEditing(false)
      router.refresh()
    } catch (error) {
      console.error('Error updating infraction:', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const handleDelete = async () => {
    try {
      setIsDeleting(true)
      const res = await fetch(`/api/infractions/${guildId}/${infractionId}/delete`, {
        method: 'DELETE',
      })

      if (!res.ok) throw new Error('Failed to delete')

      router.push(`/panel/${guildId}`)
      router.refresh()
    } catch (error) {
      console.error('Error deleting infraction:', error)
    }
  }

  const handleBack = () => {
    setIsColorLoaded(false);
    setGradient('#000000');
    setTimeout(() => {
      router.push(`/panel/${guildId}`);
    }, 300); // Wait for fade out animation
  };

  if (!infraction) return (
    <main className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <div className="flex items-center justify-center h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          className="animate-spin text-indigo-500"
        >
          <path
            fill="none"
            stroke="#fff"
            strokeDasharray="16"
            strokeDashoffset="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3c4.97 0 9 4.03 9 9"
          >
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.2s"
              values="16;0"
            />
            <animateTransform
              attributeName="transform"
              dur="1.5s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            />
          </path>
        </svg>
      </div>
    </main>
  )

  return (
    <div className="dark min-h-screen p-6 relative">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"
      />
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${primaryColor}, rgb(0, 0, 0))`,
          opacity: isColorLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto space-y-6 mt-20">
        <Button
          variant="outline"
          className="mb-6 text-white bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors"
          onClick={handleBack}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Infractions
        </Button>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Case Information
                <Badge 
                  variant={infraction.status === 'active' ? 'destructive' : 'secondary'}
                >
                  {infraction.status.toUpperCase()}
                </Badge>
              </CardTitle>
              <CardDescription>Case ID: {infractionId}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>User</Label>
                <div className="flex items-center gap-3">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={infraction.user.avatar} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{infraction.user.name}</div>
                    <div className="text-sm text-muted-foreground font-mono">
                      {infraction.user.id}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Moderator</Label>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={infraction.author.avatar} />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm">{infraction.author.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {infraction.author.id}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Created on {new Date(infraction.created).toLocaleString()}
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Action Details
                <Badge variant="secondary">
                  {infraction.action.type}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Reason</Label>
                  <div className="font-medium">{infraction.action.details}</div>
                </div>

                <div className="space-y-2">
                  <Label>Details</Label>
                  <div className="text-sm text-muted-foreground">
                    {infraction.action.evidence}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Dialog open={isEditing} onOpenChange={setIsEditing}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex-1 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-colors">
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit Case
                  </Button>
                </DialogTrigger>
                <DialogContent className="dark bg-black border">
                  <DialogHeader className="text-white">
                    <DialogTitle>Edit Infraction</DialogTitle>
                    <DialogDescription>
                      Make changes to this infraction case. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label className="text-gray-200">Reason</Label>
                      <Input
                        value={editedReason}
                        onChange={(e) => setEditedReason(e.target.value)}
                        className="text-gray-200"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-gray-200">Action</Label>
                      <Input
                        value={editedAction}
                        onChange={(e) => setEditedAction(e.target.value)}
                        className="text-gray-200"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button className="text-white" variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleEdit} disabled={isUpdating}>
                      {isUpdating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        'Save changes'
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="destructive" 
                    disabled={isDeleting} 
                    className="flex-1 bg-red-500/20 backdrop-blur-md border-red-500/20 hover:bg-red-500/30 transition-colors"
                  >
                    {isDeleting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Deleting...
                      </>
                    ) : (
                      <>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Case
                      </>
                    )}
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="dark bg-black border">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-white">Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete this
                      infraction case and remove it from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="text-white">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete}>
                      Delete Case
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
