import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function TypesModal({
  open,
  onOpenChange,
  type,
  setType,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  type?: string | null
  setType?: (type: string | null) => void
}) {
  const handleClose = (open: boolean) => {
    onOpenChange(open)
    if (!open && setType) setType(null)
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Infraction Type</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}