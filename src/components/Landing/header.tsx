'use server'

import React from "react";
import Link from "next/link";
import { auth } from "~/auth";
import { UserMenu } from "../user-menu";
import { signIn, signOut } from "~/auth";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid"; 

export const Header = async () => {
  const session = await auth();

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 px-8 md:px-16 lg:px-24 transition duration-500 backdrop-blur-md shadow-sm`}
    >
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/astro-logo.svg"
            alt="Astro Birb Logo"
            className="w-10 h-10 md:w-12 md:h-12 transition duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:block text-3xl font-bold text-white">Birb</span>
        </Link>
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            href="/docs"
            className="text-gray-300 hover:text-indigo-400 transition font-medium hidden lg:block"
          >
            Docs
          </Link>
          <Link
            href="https://patreon.com/astrobirb"
            className="text-gray-300 hover:text-indigo-400 transition font-medium hidden lg:block"
          >
            Patreon
          </Link>

          {session ? (
            <UserMenu user={session.user} />
          ) : (
            <Link
              href="/api/auth/signin"
              className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
