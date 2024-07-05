import React from 'react';
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800  bg-zinc-950 text-white font-sans">
      <header className="w-full py-3 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white text-center shadow-md fixed top-0 z-50 glassmorphism">
      <nav className="flex items-center justify-between w-full px-4">
      <h1 className="text-3xl font-bold flex items-center justify-center">
        <img
          src="https://cdn.discordapp.com/attachments/1119158184003780639/1258802402497265664/astro-logo.svg?ex=66895e98&is=66880d18&hm=edb14a259c85e362e64b1a796ec03f92d61b399200e38c1b10eabcfb1ab05a3c&"
          alt="Astro Birb Logo"
          className="w-12 h-12 mr-2" 
        />
        Astro Birb
      </h1>
    </nav>

      </header>
      <main className="flex-grow flex flex-col items-center justify-center px-4 mt-15">
        <img
          src="https://cdn.discordapp.com/avatars/1113245569490616400/a_c2f162676b5a2be3a835f01fe19c0559.gif?size=1024&width=0&height=256"
          alt="Astro Birb Logo"
          className="w-32 h-32 mb-8 rounded-full"
        />
        <section className="text-center">
        <h2 className="text-5xl font-bold">
          Your Ultimate Discord Bot <span className="animated-gradient">Companion</span>
        </h2>

          <p className="mt-4 text-lg text-gray-300">
            Power up your Discord server with Astro Birb's advanced features and seamless integrations.
          </p>
          <div className="mt-8 flex space-x-4 justify-center font-bold">
          <a href="https://discord.com/api/oauth2/authorize?client_id=1113245569490616400&permissions=429765553360&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors">
              Invite Bot
            </button>
          </a>
          <a href="https://discord.gg/birb" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg shadow hover:bg-gray-800 transition-colors">
              Support Server
            </button>
          </a>
        </div>

        </section>
        </main>
      <footer className="w-full bg-zinc-950 py-6 mt-auto glassmorphism">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center text-zinc-400 text-sm">
          <p>&copy; 2024 Astro Birb. All rights reserved.</p>
          <div className="mt-2 flex space-x-4">
            <a href="https://docs.astrobirb.dev/legal/terms-of-service" className="hover:text-white">
              Terms of Service
            </a>
            <span>|</span>
            <a href="https://docs.astrobirb.dev/legal/privacy-policy" className="hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="https://discord.gg/birb" className="hover:text-white">
              Contact Us
            </a>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="https://github.com/Astro-Birb" className="hover:text-white">
              Github
            </a>
            <span>|</span>
            <a href="https://ko-fi.com/astrobird" className="hover:text-white">
              Ko-fi
            </a>
            <span>|</span>
            <a href="https://patreon.com/astrobirb" className="hover:text-white">
              Patreon
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}