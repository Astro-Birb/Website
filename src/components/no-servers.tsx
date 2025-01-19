import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ServerCrash } from 'lucide-react'

interface NoServersFoundProps {
  title?: string
  description?: string
}

export function NoServersFound({
  title = "No Servers Found",
  description = "We couldn't find any servers. Please try again later or contact support if the problem persists."
}: NoServersFoundProps) {
  return (
    <Alert variant="destructive" className="flex items-center">
      <ServerCrash className="h-5 w-5 mr-2" />
      <div>
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </div>
    </Alert>
  )
}

