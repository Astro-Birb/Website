import React from "react";
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
export default function Header() {
    return (
        <header
        className="w-full py-3 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white text-center shadow-md fixed top-0 z-50 glassmorphism">
        <nav className="flex items-center justify-between w-full px-4">
            <a href="/" className="text-3xl font-bold flex items-center justify-center">
                <img
                    src="https://cdn.discordapp.com/attachments/1119158184003780639/1258802402497265664/astro-logo.svg?ex=66895e98&is=66880d18&hm=edb14a259c85e362e64b1a796ec03f92d61b399200e38c1b10eabcfb1ab05a3c&"
                    alt="Astro Birb Logo"
                    className="w-12 h-12 mr-2"
                />
                Astro Birb
            </a>
            <div className="flex items-center">
                    <ClerkProvider>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <div className="relative">
                                <SignInButton>
                                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-indigo-600 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Login With Discord </button>
                                </SignInButton>
                            </div>
                        </SignedOut>
                    </ClerkProvider>
                </div>
            </nav>
        </header>
    );
}
