import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface TopNavBarProps {
  onToggleSidebar: () => void
}

export function TopNavBar({ onToggleSidebar }: TopNavBarProps) {
  return (
    <nav className="flex h-12 items-center justify-between border-b border-zinc-800 bg-[#2B2D31] px-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5 text-zinc-400" />
        </Button>
        <img src="/astro-logo.svg" alt="Logo" className="h-8 w-8 rounded-full" />
        <span className="text-sm font-bold text-white">Dashboard</span>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-white">
          Support
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative h-8 w-8 rounded-full">
              <div className="h-8 w-8 rounded-full bg-zinc-700" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-[#1E1F22] text-zinc-200 border-zinc-800">
            <DropdownMenuItem className="focus:bg-zinc-700/50 focus:text-white">Servers</DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-zinc-700/50 focus:text-white">Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

