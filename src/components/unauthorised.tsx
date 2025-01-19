"use client";
import { AlertTriangle, ArrowLeft, ShieldOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function UnauthorizedScreen() {
  return (
    <div className="dark min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white dark:bg-gray-950 shadow-xl">
        <CardHeader>
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-100 dark:bg-gray-800">
            <ShieldOff className="w-8 h-8 text-zinc-600 dark:text-zinc-300 animate-pulse" />
          </div>
          <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-zinc-100">Unauthorized Access</h1>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-zinc-600 dark:text-zinc-300">
            If you believe this is an error, please contact the administrator or try logging in again.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="outline" onClick={() => window.history.back()} className="w-full sm:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

