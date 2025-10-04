export default function InvolveUrSelf() {
  return (
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

      <div className="py-12 px-6 mx-auto max-w-screen-lg sm:py-20 lg:px-8">
        <div className="max-w-screen-md mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gradient-to-br from-indigo-600 to-indigo-700 mb-6">
            Get Involved with Astro Birb
          </h2>
          <p className="mb-10 text-lg text-gray-300">
            Your ideas are the heart of Astro Birb's growth. Join our community
            and share your feedback to help shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="https://discord.com/api/oauth2/authorize?client_id=1113245569490616400&permissions=429765553360&scope=bot%20applications.commands"
              className="inline-flex items-center px-10 py-3 text-lg font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 transform hover:scale-110 hover:shadow-2xl transition duration-200"
            >
              Get Started
            </a>
            <a
              href="https://discord.gg/DhWdgfh3hN"
              className="inline-flex items-center px-10 py-3 text-lg font-semibold text-gray-200 bg-gray-800 rounded-full border border-gray-700 hover:bg-gray-700 hover:text-white transform hover:scale-110 hover:shadow-xl transition duration-200"
            >
              Support Server
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-900 to-transparent my-4" />
    </div>
  );
}
