import { ChevronDown, LayoutDashboard, MessageSquare, Shield, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SidebarProps {
  isMobile: boolean
  isOpen: boolean
}

export function Sidebar({ isMobile, isOpen }: SidebarProps) {
  return (
    <div
      className={`
        fixed md:relative z-10 w-64 h-[calc(100vh-48px)] md:h-auto 
        border-r border-zinc-800 bg-[#2B2D31] overflow-y-auto
        transition-transform duration-300 ease-in-out
        ${isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
        md:translate-x-0
      `}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-3 p-4 cursor-pointer hover:bg-zinc-700/50">
            <div className="relative h-10 w-10">
              <Image
                src="https://placeholder.svg"
                alt="Server icon"
                className="rounded-full"
                fill
              />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-white">Server Name</h2>
              <p className="text-xs text-zinc-400">100 Members</p>
            </div>
            <ChevronDown className="h-4 w-4 text-zinc-400" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#1E1F22] text-zinc-200 border-zinc-800">
          <DropdownMenuItem className="focus:bg-zinc-700/50 focus:text-white">Switch Server</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="px-2">
        <div className="mb-4">
          <h3 className="mb-2 px-4 text-xs font-semibold text-zinc-400">MAIN SETTINGS</h3>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-zinc-400 hover:bg-zinc-700/50 hover:text-white"
          >
            <LayoutDashboard className="h-4 w-4" />
            Overview
          </Button>
        </div>

        <div>
          <h3 className="mb-2 px-4 text-xs font-semibold text-zinc-400">MODULE SETTINGS</h3>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-zinc-400 hover:bg-zinc-700/50 hover:text-white"
            >
              <Shield className="h-4 w-4" />
              Infractions
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-zinc-400 hover:bg-zinc-700/50 hover:text-white"
            >
              <Star className="h-4 w-4" />
              Promotions
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 text-zinc-400 hover:bg-zinc-700/50 hover:text-white"
            >
              <MessageSquare className="h-4 w-4" />
              Message Quota
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

