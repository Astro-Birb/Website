"use client";
import TypeIt from "typeit-react";
import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";

export default function Home() {
  return (
    <div className="overflow-auto flex flex-col min-h-screen bg-gradient-to-b from-stone-950 to-zinc-950 text-white font-sans">
      <Header />
      <main className="flex-grow">
        <div className="flex flex-col items-center justify-center h-screen px-4 sm:scale-75 md:scale-125">
          <img
            src="/spinny.gif"
            alt="Astro Birb Logo"
            className="w-32 h-32 mb-8 rounded-full glow"
          />
          <section className="text-center">
            <h2 className="text-5xl font-bold">
              <TypeIt>
                <span className="animated-gradient">Imagine</span> a bot...
              </TypeIt>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Where staff management is a {" "}
              <span className="animated-gradient">breeze</span>.
            </p>
            <div className="mt-8 flex space-x-4 justify-center font-bold">
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=1113245569490616400&permissions=429765553360&scope=bot%20applications.commands"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-6 py-3 glow bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors">
                  Invite Bot
                </button>
              </a>
              <a
                href="https://discord.gg/DhWdgfh3hN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg shadow hover:bg-gray-800 transition-colors">
                  Support Server
                </button>
              </a>
            </div>
          </section>
        </div>

        <section className="mt-12 w-full px-6 ">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
                Work your way.
              </h2>
              <p className="text-gray-300 sm:text-xl lg:text-2xl">
                No more stressing about staff applications tomorrow.
                Sit back, relax, and let Astro Birb handle it for you.<br></br>
                Quota checks tomorrow? No problem. Astro Birb has you covered.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Uptime</h3>
                <p className="text-gray-300 text-center">
                  If your bot is down, that's time you can't spend working.
                  That's why we have 99.99% uptime.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-shield-plus"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.462 20.87c-.153 .047 -.307 .09 -.462 .13a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .11 6.37" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Promote in seconds
                </h3>
                <p className="text-gray-300 text-center">
                  Instead of spending 10 minutes to promote someone, just /promote. It's that easy.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-palette"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                    <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Make it yours, truly.
                </h3>
                <p className="text-gray-300 text-center">
                  Customise the messages, maybe more minimalistic, or more professional. It's up to you.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-premium-rights"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75" />
                    <path d="M12 7v2" />
                    <path d="M12 15v2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Premium</h3>
                <p className="text-gray-300 text-center">
                  Unlock more with Astro Birb premium. More modules to help you manage your server.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-lifebuoy"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M15 15l3.35 3.35" />
                    <path d="M9 15l-3.35 3.35" />
                    <path d="M5.65 5.65l3.35 3.35" />
                    <path d="M18.35 5.65l-3.35 3.35" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Fun? We got it.
                </h3>
                <p className="text-gray-300 text-center">
                  Don't worry, it's not all about work, there's fun modules too.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                    <path d="M19 11h2m-1 -1v2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Relax with ease
                </h3>
                <p className="text-gray-300 text-center">
                  No more long forms to take a break. The Leave of Absence module has you covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-100 dark:text-white">
              Get involved
            </h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Astro Birb is constantly evolving because of your ideas.
              If you have any feedback, join the Support Server.
            </p>
            <div className="flex gap-3 items-center justify-start ">
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=1113245569490616400&permissions=429765553360&scope=bot%20applications.commands"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium glow text-white  bg-indigo-500 rounded-lg shadow hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </a>
              <a
                href="https://discord.gg/DhWdgfh3hN"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-800 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-200 dark:focus:ring-gray-600"
              >
                Support Server
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
