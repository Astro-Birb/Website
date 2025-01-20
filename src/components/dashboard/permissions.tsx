"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const staffRoles = [
  { label: "Moderator", value: "mod" },
  { label: "Administrator", value: "admin" },
  { label: "Helper", value: "helper" },
]

const adminRoles = [
  { label: "Owner", value: "owner" },
  { label: "Administrator", value: "admin" },
  { label: "Moderator", value: "mod" },
]

interface MultiSelectProps {
  roles: { label: string; value: string }[]
  placeholder: string
  selectedRoles: string[]
  onRolesChange: (roles: string[]) => void
}

function MultiSelect({ roles, placeholder, selectedRoles, onRolesChange }: MultiSelectProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border-zinc-700 bg-[#1E1F22] text-zinc-200 hover:bg-zinc-700/50 hover:text-white"
        >
          {selectedRoles.length > 0 ? `${selectedRoles.length} selected` : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-[#1E1F22] border-zinc-700">
        <Command className="bg-[#1E1F22]">
          <CommandInput placeholder="Search roles..." className="text-zinc-200" />
          <CommandEmpty className="text-zinc-400">No role found.</CommandEmpty>
          <CommandGroup>
            {roles.map((role) => (
              <CommandItem
                key={role.value}
                onSelect={() => {
                  onRolesChange(
                    selectedRoles.includes(role.value)
                      ? selectedRoles.filter((item) => item !== role.value)
                      : [...selectedRoles, role.value],
                  )
                }}
                className="text-zinc-200 hover:bg-zinc-700/50"
              >
                <Check
                  className={cn("mr-2 h-4 w-4", selectedRoles.includes(role.value) ? "opacity-100" : "opacity-0")}
                />
                {role.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export function MainContent() {
  const [selectedStaffRoles, setSelectedStaffRoles] = React.useState<string[]>([])
  const [selectedAdminRoles, setSelectedAdminRoles] = React.useState<string[]>([])

  return (
    <div className="flex-1 bg-[#313338] overflow-auto">
      <div className="h-[140px] w-full bg-gradient-to-b from-zinc-700 to-zinc-800" />

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-white">Permissions</h1>

        <div className="space-y-4 rounded-lg bg-[#2B2D31] p-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Staff Roles</label>
            <MultiSelect
              roles={staffRoles}
              placeholder="Select staff roles..."
              selectedRoles={selectedStaffRoles}
              onRolesChange={setSelectedStaffRoles}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Admin Roles</label>
            <MultiSelect
              roles={adminRoles}
              placeholder="Select admin roles..."
              selectedRoles={selectedAdminRoles}
              onRolesChange={setSelectedAdminRoles}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

