import Footer from "../components/Landing/footer";
import Header from "@/components/Landing/header";
import "./globals.css";
import TrustedServers from "@/components/Landing/servers";
import Example from "@/components/Landing/team";
import Features from "@/components/Landing/features";
import InvolveUrSelf from "@/components/Landing/Involvement";
import MainSection from "@/components/Landing/Main";

export default function Home() {
  return (
    <div className="dark overflow-auto flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans">
      <Header />
      <main className="relative flex-grow md:mt-16 sm:mb-72">

        <div className="flex flex-col items-center justify-center h-screen px-4  md:mt-0">
          <MainSection />

          <TrustedServers />
        </div>
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-4" />

        <Example />

        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-4" />

        {/* Message Quota Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-between p-8 max-w-screen-lg mx-auto md:ml-64 space-y-8 md:space-y-0 md:space-x-8">
          <div className="absolute inset-0 -top-4 -left-4 w-full h-full border-2 border-gray-500 opacity-20 rounded-lg transform scale-105 -z-10"></div>
          <div className="max-w-md text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="p-2 rounded-full mr-2 bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-.5 6a1 1 0 10-1 0v.5a1 1 0 001 0V13z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-gray-400 text-sm font-semibold">
                MESSAGE QUOTA
              </h2>
            </div>
            <h1 className="text-pretty text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl mb-4 ">
              Track your staff members' activity
            </h1>
            <p className="text-gray-400 mb-6">
              Our system meticulously monitors and records the number of
              messages sent by each staff member. This data is then eloquently
              displayed on a specialized staff leaderboard, providing a
              transparent and competitive environment for your team.
            </p>
            <a
              href="https://docs.astrobirb.dev/Modules/quota"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-600 transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="relative w-full max-w-sm shadow-lg">
            <div className="absolute inset-0 bg-gray-700 opacity-30 rounded-lg border border-gray-500 transform scale-x-105 scale-y-110 z-0"></div>
            <img
              src="/assets/quota.png"
              alt="Placeholder image"
              className="relative z-10 rounded-md"
            />
            <div className="absolute top-2 right-2 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-.5 6a1 1 0 10-1 0v.5a1 1 0 001 0V13z"
                    clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Staff Panel Section */}
        <div className="relative flex flex-col md:flex-row-reverse items-center justify-between p-8 max-w-screen-lg mx-auto md:mr-64 space-y- md:space-y-0 md:space-x-8 text-gray-900 rounded-lg">
          <div className="absolute inset-0 -top-4 -right-4 w-full h-full border-2 border-gray-500 opacity-20 rounded-lg transform scale-105 -z-10"></div>
          <div className="max-w-md text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end mb-4">
              <div className="p-2 rounded-full mr-2 bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-.5 6a1 1 0 10-1 0v.5a1 1 0 001 0V13z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-gray-400 text-sm font-semibold">
                STAFF PANEL
              </h2>
            </div>
            <h1 className="text-pretty text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl mb-4 ">
              Introduce your staff
            </h1>
            <p className="text-gray-400 mb-6">
              The staff list is a way of displaying all your staff on an
              automatically updated list.
            </p>
            <a
              href="https://docs.astrobirb.dev/Modules/staffpanel"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-600 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="relative w-full max-w-sm shadow-lg sm:bottom-11 mt-12">
            <div className="absolute inset-0 bg-gray-700 opacity-30 rounded-lg border border-gray-500 transform scale-x-105 scale-y-110 z-0"></div>
            <img
              src="/assets/panel.png"
              alt="List Image"
              className="relative z-10 rounded-md"
            />
            <div className="absolute top-2 right-2 text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-.5 6a1 1 0 10-1 0v.5a1 1 0 001 0V13z"
                    clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-between p-8 max-w-screen-lg mx-auto md:ml-64 space-y-8 md:space-y-0 md:space-x-8">
          <div className="absolute inset-0 -top-4 -left-4 w-full h-full bg-gray-700 opacity-30 rounded-lg transform scale-105 md:scale-100 -z-10"></div>

          <div className="max-w-md text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="p-2 rounded-full mr-2 bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-.5 6a1 1 0 10-1 0v.5a1 1 0 001 0V13z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-gray-400 text-sm font-semibold">
                INFRACTIONS
              </h2>
            </div>
            <h1 className="text-pretty text-3xl font-semibold tracking-tight text-gray-100 sm:text-4xl mb-4 ">
              Punish your staff members
            </h1>
            <p className="text-gray-400 mb-6">
              If a staff member is causing issues you can easily run /infract
              and log their punishment and have automated actions happen to
              them.
            </p>
            <a
              href="https://docs.astrobirb.dev/Modules/infractions"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-600 transition-colors"
            >
              Learn More
            </a>
          </div>
          <div className="relative w-full max-w-sm shadow-lg">
            <div className="absolute inset-0 bg-gray-800 opacity-30 rounded-lg border border-gray-600 transform scale-105 "></div>{" "}
            <img
              src="/assets/infractions.png"
              alt="Placeholder image"
              className="relative z-10 rounded-md"
            />
            <div className="absolute top-2 right-2 text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 002 0V7zm-.5 6a1 1 0 10-1 0v.5a1 1 0 001 0V13z"
                    clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative">
          <svg
            className="absolute top-[-250px] left-1/2 transform -translate-x-1/2"
            width="1024"
            height="1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                id="glowGradient"
                cx="50%"
                cy="50%"
                r="50%"
                fx="50%"
                fy="50%"
              >
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.125" />
                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="512" cy="512" r="512" fill="url(#glowGradient)" />
          </svg>

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
