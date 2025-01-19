'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center text-red-500">
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Something went wrong!</h2>
        <p className="text-sm mb-4">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
