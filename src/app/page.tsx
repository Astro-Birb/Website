"use client";
import React from 'react';
import TypeIt from 'typeit-react';
import './globals.css';
import Footer from '../components/footer';
import Header from "../components/header";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800  bg-zinc-950 text-white font-sans">
      <Header/>
      <main className="flex-grow flex flex-col items-center justify-center px-4 mt-15">
        <img
          src="https://cdn.discordapp.com/avatars/1113245569490616400/a_c2f162676b5a2be3a835f01fe19c0559.gif?size=256&width=0&height=256"
          alt="Astro Birb Logo"
          className="w-32 h-32 mb-8 rounded-full"
        />
        <section className="text-center">
        <h2 className="text-5xl font-bold">
          <TypeIt><span className="animated-gradient">Imagine</span> a bot...</TypeIt>
        </h2>

          <p className="mt-4 text-lg text-gray-300">
            That helps you run your server with <span className="animated-gradient">ease</span>.
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
      <Footer></Footer>
    </div>
  );
}
