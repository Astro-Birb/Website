"use client";

import { useState, useEffect } from "react";
import { TopNavBar } from "@/components/dashboard/dashnav";
import { Sidebar } from "@/components/dashboard/sidebar";
import { MainContent } from "@/components/dashboard/permissions";

export default function Dashboard({ guildData }: { guildData: any }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen flex flex-col bg-[#1E1F22]">
      <TopNavBar onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isMobile={isMobile} isOpen={isSidebarOpen} Guild={guildData} />
        <MainContent guild={guildData} />
      </div>
    </div>
  );
}
