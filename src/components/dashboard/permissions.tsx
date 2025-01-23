"use client";

import * as React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface MultiSelectProps {
  roles: { name: string; id: string }[];
  placeholder: string;
  selectedRoles: string[];
  onRolesChange: (roles: string[]) => void;
}

export function MultiSelect({
  roles,
  placeholder,
  selectedRoles,
  onRolesChange,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const toggleRoleSelection = (roleId: string) => {
    const isSelected = selectedRoles.includes(roleId);
    onRolesChange(
      isSelected
        ? selectedRoles.filter((id) => id !== roleId)
        : [...selectedRoles, roleId]
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between border-gray-700 bg-[#1E1F22] text-zinc-200 hover:bg-zinc-700/50"
        >
          {selectedRoles.length > 0
            ? `${selectedRoles.length} selected`
            : placeholder}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="max-h-64 overflow-y-auto bg-[#1E1F22] border-zinc-700 text-zinc-200 rounded-lg scrollbar-none"
        style={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
        }}
      >
        <ul className="divide-y divide-gray-700">
          {roles.map((role) => (
            <li
              key={role.id}
              onClick={() => toggleRoleSelection(role.id)}
              className={cn(
                "flex items-center justify-between p-2 cursor-pointer hover:bg-zinc-700/50",
                selectedRoles.includes(role.id) && "font-bold"
              )}
            >
              <span>{role.name}</span>
              {selectedRoles.includes(role.id) && (
                <Check className="h-4 w-4 text-green-500" />
              )}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}




export function MainContent({ guild }) {
  const [selectedStaffRoles, setSelectedStaffRoles] = React.useState<string[]>([]);
  const [selectedAdminRoles, setSelectedAdminRoles] = React.useState<string[]>([]);

  const staffRoles = guild.roles || [];
  const adminRoles = guild.roles || [];

  console.log("Staff Roles:", staffRoles); 
  console.log("Admin Roles:", adminRoles);

  return (
    <div className="flex-1 bg-[#313338] overflow-auto">
      <div className="h-[140px] w-full bg-gradient-to-b from-zinc-700 to-zinc-800" />

      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold text-white">Permissions</h1>

        <div className="space-y-4 rounded-lg bg-[#2B2D31] p-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-white">Staff Roles</label>
            <MultiSelect
              roles={staffRoles}
              placeholder="Select staff roles..."
              selectedRoles={selectedStaffRoles}
              onRolesChange={setSelectedStaffRoles}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-white">Admin Roles</label>
            <MultiSelect
              roles={staffRoles}
              placeholder="Select staff roles..."
              selectedRoles={selectedAdminRoles}
              onRolesChange={setSelectedAdminRoles}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
