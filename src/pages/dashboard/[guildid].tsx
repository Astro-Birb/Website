import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';





const GuildDashboard = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const { guildid } = router.query;
    const [guild, setGuild] = useState(null);
    const [prefix, setPrefix] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchGuildData = async () => {
            try {
                const response = await fetch(`/api/discord/guild/${guildid}`);
                if (!response.ok) {
                    router.push('/guilds');
                    return;
                }
                if (response.ok) {
                    const data = await response.json();
                    setGuild(data);
                } else {
                    console.error('Failed to fetch guild data');
                }
            } catch (error) {
                console.error('Error fetching guild data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        const fetchPrefix = async () => {
            try {
                const response = await fetch(`/api/data/${guildid}/prefix`);
                if (!response.ok) {
                    console.error('Failed to fetch prefix data');
                    return;
                }
                const data = await response.json();
                setPrefix(data.prefix.prefix);
            } catch (error) {
                console.error('Error fetching prefix data:', error);
            }
        };

        if (guildid) {
            fetchGuildData();
            fetchPrefix();
        }
    }, [guildid]);







    if (status === 'loading' || isLoading) {
        return (
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                    <path fill="white" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
                        <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" />
                    </path>
                </svg>
                <p className="text-xl text-gray-300">Loading guild...</p>
            </div>
        );
    }



    if (status === 'unauthenticated') {
        router.push('/api/auth/signin');
        return null;
    }
    console.log(guild)

    return (
        <main>
          <Header />
          <div className="flex flex-col min-h-screen bg-gradient-to-b from-stone-950 to-zinc-950 text-white font-sans">
            <div className="sm:flex sm:flex-row">
              <Sidebar Guild={guild} />
              <div className="dashtab">
                <div className="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-zinc-900 dark:border-zinc-700">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bot Prefix</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">This is where you set the bot's prefix. You can run commands like !!infract.</p>
                  <div>
                    <label htmlFor="prefix-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prefix:</label>
                    <input
                      type="text"
                      id="prefix-input"
                      value={prefix ?? ''}
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      );
}


export default GuildDashboard;
