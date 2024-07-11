'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Header from '@/components/header';
import bitfield from '../utils/bitfield';
import Footer from '@/components/footer';

interface Guild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: string[];
}

interface User {
  id: string;
  username: string;
  discriminator: string;
  bot: boolean | null;
  system: boolean | null;
  mfa_enabled: boolean | null;
  avatar: string;
  verified: boolean | null;
  email: string | null;
  flags: number | null;
  banner: string | null;
  accent_color: string | null;
  premium_type: number | null;
  public_flags: number | null;
}
export default function Guilds() {
  const { data: session, status } = useSession();
  const [guilds, setGuilds] = useState<Guild[]>([]);
  const router = useRouter();
  if (status === 'unauthenticated') {
    router.push('/api/auth/signin'); 
  }
  useEffect(() => {
      const fetchGuilds = async () => {
          if (session) {
              //@ts-ignore
              const access_token = session.accessToken;
              

              const response = await fetch("https://discordapp.com/api/users/@me/guilds", {
                  headers: {
                      Authorization: `Bearer ${access_token}`,
                      "Content-Type": "application/json",
                  },
              });

              if (response.ok) {
                  let guildsData: Guild[] = await response.json();
                  guildsData = guildsData.filter((guild) => {
                      const userPermissions = bitfield(parseInt(guild.permissions));
                      return userPermissions.includes("MANAGE_GUILD");
                  });
                  setGuilds(guildsData);
              } else {
                  console.error("Failed to fetch guilds:", response.statusText);
              }
          }
      };

      fetchGuilds();
  }, [session]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-stone-950 to-zinc-950 text-white font-sans">
        <Header />
        <main className="flex-grow mt-15 pt-[100px] px-1 md:px-5 lg:px-20">
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4 lg:px-10">
                    {guilds.map((guild) => (
                        <div key={guild.id} className="glassmorphism flex-shrink-0 w-72 max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-neutral-700 mb-4">
                            <div className="flex justify-end px-4 pt-4" />
                            <div className="flex flex-col items-center pb-6">
                                <img
                                    className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                    src={guild.icon ? `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png` : '/default.png'}
                                    alt={`${guild.name} icon`}
                                />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{guild.name}</h5>
                                <span className="text-sm text-gray-500 dark:text-gray-400"></span>
                                <div className="flex mt-2 md:mt-4">
                                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Dashboard
                                    </a>
                                    <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        Admin Panel
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
        <Footer />
    </div>
  );
}