import Footer from "../components/Landing/footer";
import Header from "@/components/Landing/header";
import "./globals.css";
import TrustedServers from "@/components/Landing/servers";
import Example from "@/components/Landing/team";
import Features from "@/components/Landing/features";
import InvolveUrSelf from "@/components/Landing/Involvement";
import MainSection from "@/components/Landing/Main";
import NotLongerMaintained from "@/components/Servers/NoLongerMaintained";

export default function Home() {
  return (
    <div className="dark overflow-auto flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <Header /> <NotLongerMaintained />
      <main className="relative flex-grow md:mt-16 sm:mb-72">
        <div className="flex flex-col items-center justify-center h-screen px-4  md:mt-0">
          <MainSection />

          <TrustedServers />
        </div>
        <section className="min-h-screen w-full font-sans flex flex-col items-center pt-10 px-6 md:px-[12rem] lg:px-[18rem]">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-4" />
          <Example />
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent my-4" />

          <Features />
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-4" />
          <InvolveUrSelf />
        </section>
      </main>
      <Footer />
    </div>
  );
}
