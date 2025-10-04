export default function MainSection() {
  return (
    <>
      <img
        src="/spinny.gif"
        alt="Astro Birb Logo"
        className="w-32 h-32 mb-8 rounded-full border-4 border-indigo-500 shadow-lg"
      />
      <section className="text-center">
        <h2 className="text-5xl font-bold text-gray-100">
          <span className="text-indigo-400">Imagine</span> a bot...
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Where staff management is a{" "}
          <span className="text-indigo-400">breeze</span>.
        </p>
        <div className="mt-8 flex space-x-4 justify-center font-semibold">
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=1113245569490616400&permissions=429765553360&scope=bot%20applications.commands"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="px-6 py-3 font-semibold bg-indigo-600 border-indigo-900 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition-colors">
              Add To Discord
            </button>
          </a>
          <a
            href="https://discord.gg/DhWdgfh3hN"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="px-6 py-3 text-pretty bg-gray-800 border border-gray-700 font-semibold text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
              Support Server
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
