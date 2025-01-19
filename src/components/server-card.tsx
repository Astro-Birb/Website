"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
interface ServerCardProps {
  name: string;
  iconUrl: string;
  role?: string;
  id: string;
}

export default function ServerCard({ name, iconUrl, role, id}: ServerCardProps) {
  const router = useRouter();
  return (
    <div className="">
      <Card className="w-full max-w-sm mx-auto  glassmorphism bg-zinc-900 border-stone-900">
        <CardContent className="pt-4 pb-2">
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage src={iconUrl} alt={`${name} icon`} />
              <AvatarFallback>{name.slice(0, 4)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold text-white">{name}</h2>
                {role && (
                  <Badge variant="secondary" className="text-xs px-2 py-0.5">
                    {role}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-stone-900 glassmorphism text-white" onClick={() => router.push(`/panel/${id}`)}>
            Admin Panel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

