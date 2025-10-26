"use client"
import Footer from "../components/Landing/footer";
import Header from "@/components/Landing/header";
import "./globals.css";
import TrustedServers from "@/components/Landing/servers";
import Example from "@/components/Landing/team";
import Features from "@/components/Landing/features";
import InvolveUrSelf from "@/components/Landing/Involvement";
import MainSection from "@/components/Landing/Main";
import NotLongerMaintained from "@/components/Servers/NoLongerMaintained";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="dark overflow-auto flex flex-col min-h-screen  to-black text-white font-sans">
      {/* <Header /> <NotLongerMaintained /> */}
      {/* <main className="relative flex-grow md:mt-16 sm:mb-72"> */}
      <main>
        <div className="flex items-center justify-center h-screen px-4 md:mt-0">
          <div className="m-4 flex flex-col gap-12 max-w-[26rem]">
            <span className="underline decoration-wavy decoration-indigo-500 text-6xl font-bold">
              Be Right Back
            </span>
            <span className="font-semibold">
              Birb <span className="text-indigo-500">website</span> is currently
              underconstruction for upgrades, and improvements.
            </span>
            <section className="relative flex flex-row gap-2 items-center">
              <Button className="h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-2xl flex-grow" onClick={() => (router.push('/support'))}>
                Support
              </Button>
              <Button
                className="h-12 text-white font-semibold rounded-2xl flex-grow"
                variant="outline"
                onClick={() => (router.push('/servers'))}
              >
                Use Anyway
              </Button>
            </section>
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center h-screen px-4  md:mt-0">
          <MainSection />

          <TrustedServers />
        </div> */}
        {/* <section className="min-h-screen w-full font-sans flex flex-col items-center pt-10 px-6 md:px-[12rem] lg:px-[18rem]">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-4" />
          <Example />
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent my-4" />

          <Features />
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-4" />
          <InvolveUrSelf />
        </section> */}
      </main>
    </div>
  );
}
