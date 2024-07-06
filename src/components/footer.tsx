import '../app/globals.css';
import React from "react";

export default function Footer() {
    return (
        <footer className="w-full bg-zinc-950 py-6 mt-auto glassmorphism">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center text-zinc-400 text-sm">
                <p>&copy; 2024 Astro Birb. All rights reserved.</p>
                <div className="mt-2 flex space-x-4">
                    <a href="https://astrobirb.dev/terms" className="hover:text-white">
                        Terms of Service
                    </a>
                    <span>|</span>
                    <a href="https://astrobirb.dev/privacy" className="hover:text-white">
                        Privacy Policy
                    </a>
                    <span>|</span>
                    <a href="https://discord.gg/birb" className="hover:text-white">
                        Contact Us
                    </a>
                </div>
                <div className="mt-4 flex space-x-4">
                    <a href="https://github.com/Astro-Birb" className="hover:text-white">
                        GitHub
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
    )
}
