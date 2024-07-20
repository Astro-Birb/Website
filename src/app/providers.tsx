"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface SessionProvidersProps {
  children: ReactNode;
}
export function SessionProviders({ children }: SessionProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
