import React, { useState } from "react";
import { signIn, signOut, useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { LayoutDashboard, Settings, Logout } from 'tabler-icons-react';

interface UserSession extends Session {
    user: {
        name: string;
        image: string;
        id: string,
        username: string,
        discriminator: string,
        bot: Boolean | null,
        system: Boolean | null,
        mfa_enabled: Boolean | null,
        avatar: string,
        verified: Boolean | null,
        email: string | null,
        flags: Number | null,
        banner: string | null,
        accent_color: string | null,
        premium_type: Number | null,
        public_flags: Number | null,
    };
}

const Header = () => {
    const { data: session, status } = useSession();
    const user = session as UserSession;
    const loading = status === 'loading';

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="w-full py-3 z-1 bg-opacity-50 backdrop-filter backdrop-blur-lg text-white text-center shadow-md fixed top-0 z-50 glassmorphism">
            <nav className="flex items-center justify-between w-full px-4">
                <a href="/" className="flex items-center justify-center">
                    <img
                        src="/astro-logo.svg"
                        alt="Astro Birb Logo"
                        className="w-12 h-12 mr-2"
                    />
                    <span className="hidden sm:block text-3xl font-bold">Astro Birb</span>
                </a>
                {!loading && (
                    <div className="flex items-center relative">
                        {!user ? (
                            <button
                                type="button"
                                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 transition duration-300 ease-in-out"
                                onClick={() => signIn('discord')}
                            >
                                Login With Discord
                            </button>
                        ) : (
                            <div className="relative">
                                <img
                                    className="rounded-full cursor-pointer transition duration-300 ease-in-out"
                                    src={user?.user?.image ?? 'https://cdn.discordapp.com/avatars/1113245569490616400/a_c2f162676b5a2be3a835f01fe19c0559.gif?size=1024'}
                                    alt={user?.user?.name ?? 'User'}
                                    onClick={toggleDropdown}
                                    style={{ width: '48px', height: '48px' }}
                                />
                                {dropdownOpen && (
                                    <div id="dropdown" className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-200 rounded-lg shadow-md w-36 dark:bg-neutral-800 border border-zinc-700 transition duration-300 ease-in-out opacity-100 scale-100 transform origin-top">
                                        <ul className="py-1 text-sm text-gray-800 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="#" className="disabled line-through flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    <LayoutDashboard className="w-5 h-5 mr-2" />
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="line-through flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                                                    <Settings className="w-5 h-5 mr-2" />
                                                    Settings
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white" onClick={() => signOut({ callbackUrl: '/' })}>
                                                    <Logout className="w-5 h-5 mr-2" />
                                                    Sign out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;