"use client";
import React from 'react';
import TypeIt from 'typeit-react';
import './globals.css';
import Footer from '../components/footer';
import Header from "../components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-950 text-white font-sans">
      <Header />
      <main className="flex-grow">

        <div className="flex flex-col items-center justify-center h-screen px-4">
          <img
            src="/spinny.gif"
            alt="Astro Birb Logo"
            className="w-32 h-32 mb-8 rounded-full"
          />
          <section className="text-center">
            <h2 className="text-5xl font-bold">
              <TypeIt>
                <span className="animated-gradient">Imagine</span> a bot...
              </TypeIt>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              That helps you run your server with <span className="animated-gradient">ease</span>.
            </p>
            <div className="mt-8 flex space-x-4 justify-center font-bold">
              <a
                href="https://discord.com/api/oauth2/authorize?client_id=1113245569490616400&permissions=429765553360&scope=bot%20applications.commands"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors">
                  Invite Bot
                </button>
              </a>
              <a
                href="https://discord.gg/DhWdgfh3hN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg shadow hover:bg-gray-800 transition-colors">
                  Support Server
                </button>
              </a>
            </div>
          </section>
        </div>


        <section className="mt-12 w-full px-6">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white sm:text-5xl lg:text-6xl">
                Designed for staff teams like yours
              </h2>
              <p className="text-gray-300 sm:text-xl lg:text-2xl">
                Here at Astro Birb, we streamline the management of punishments and staff with robust features tailored for handling infractions, promotions, and monitoring message quotas effortlessly.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">

              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Uptime</h3>
                <p className="text-gray-300 text-center">
                  At Astro Birb, our Discord bot is designed to guarantee seamless operation without downtime, ensuring continuous availability for all your needs.
                </p>
              </div>


              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-shield-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12.462 20.87c-.153 .047 -.307 .09 -.462 .13a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 .11 6.37" />
                    <path d="M16 19h6" />
                    <path d="M19 16v6" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Staff Management</h3>
                <p className="text-gray-300 text-center">
                  Easily manage your staff members with our comprehensive suite of staff management modules at Astro Birb.
                </p>
              </div>

   
              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                    <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Customisation</h3>
                <p className="text-gray-300 text-center">
                  We enable you to customize promotion, infraction, and other embeds to suit your server's specific needs and design preferences at Astro Birb.
                </p>
              </div>


              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-premium-rights">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M13.867 9.75c-.246 -.48 -.708 -.769 -1.2 -.75h-1.334c-.736 0 -1.333 .67 -1.333 1.5c0 .827 .597 1.499 1.333 1.499h1.334c.736 0 1.333 .671 1.333 1.5c0 .828 -.597 1.499 -1.333 1.499h-1.334c-.492 .019 -.954 -.27 -1.2 -.75" />
                    <path d="M12 7v2" />
                    <path d="M12 15v2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Premium</h3>
                <p className="text-gray-300 text-center">
                  Our premium subscription at Astro Birb includes a variety of useful add-ons designed to enhance your server experience.
                </p>
              </div>


              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-lifebuoy">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M15 15l3.35 3.35" />
                    <path d="M9 15l-3.35 3.35" />
                    <path d="M5.65 5.65l3.35 3.35" />
                    <path d="M18.35 5.65l-3.35 3.35" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Server Fun</h3>
                <p className="text-gray-300 text-center">
                  Astro Birb provides a variety of exciting modules that can significantly enhance the enjoyment and engagement on your server.
                </p>
              </div>


              <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-moon-stars">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                    <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2" />
                    <path d="M19 11h2m-1 -1v2" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">Have some time away</h3>
                <p className="text-gray-300 text-center">
                  With our leave of absence module, you can easily submit a request to have some time off!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
              <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our team</h2>
                  <p className="font-light text-gray-500 sm:text-xl dark:text-gray-300">
                  As a team of dedicated staff members at Astro Birb, our primary goal is to ensure we deliver the best possible experience for our users. 
              </p>
              </div> 
              <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/bugsy.png" alt="Bonnie Avatar"></img>
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Bugsy</a>
                      </h3>
                      <p>Owner</p>
                      <ul className="flex justify-center mt-4 space-x-4">

                          <li>
                              <a href="https://x.com/bugsbirt" className="text-[#00acee] hover:text-gray-900 dark:hover:text-white">
                                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                              </a>
                          </li>
                          <li>
                              <a href="https://github.com/bugsbirt" className="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                              </a>
                          </li>

                      </ul>
                  </div>
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/markination.png" alt="Helene Avatar"></img>
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">markination</a>
                      </h3>
                      <p>Co Owner</p>

                  </div>
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/zee.png" alt="Jese Avatar"></img>
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">zee</a>
                      </h3>
                      <p>Community Manager & Contributer</p>

                  </div>
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/toxic.gif" alt="Joseph Avatar"></img>
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Toxic</a>
                      </h3>
                      <p>Admin</p>
                     
                  </div>
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/trey.png" alt="Sofia Avatar"></img>
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Trey</a>
                      </h3>
                      <p>Admin</p>

                  </div>
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/cloudy.png" alt="Leslie Avatar"></img>
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Cloudy</a>
                      </h3>
                      <p>Senior Support</p>

                  </div>
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/foxhast.png" alt="Michael Avatar"></img>
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Foxhast</a>
                      </h3>
                      <p>Support</p>

                  </div>
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/alexii.png" alt="Neil Avatar"></img> 
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Aℓєxii</a>
                      </h3>
                      <p>Support</p>
                      <ul className="flex justify-center mt-4 space-x-4">

                      </ul>
                  </div>
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/limited.png" alt="Neil Avatar"></img> 
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">ImLimited</a>
                      </h3>
                      <p>Support</p>
                      <ul className="flex justify-center mt-4 space-x-4">

                      </ul>
                  </div>               
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/alex.png" alt="Neil Avatar"></img> 
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Alex†</a>
                      </h3>
                      <p>Support</p>
                      <ul className="flex justify-center mt-4 space-x-4">

                      </ul>
                  </div>           
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/lavoxiy.png" alt="Neil Avatar"></img> 
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">Lavoxiy</a>
                      </h3>
                      <p>Support</p>
                      <ul className="flex justify-center mt-4 space-x-4">

                      </ul>
                  </div>    
                  <div className="text-center text-gray-500 dark:text-gray-400">
                      <img className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56" src="/team/erik.png" alt="Neil Avatar"></img> 
                      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <a href="#">erekle4329</a>
                      </h3>
                      <p>Support</p>
                      <ul className="flex justify-center mt-4 space-x-4">

                      </ul>
                  </div>                                                        
              </div>  
          </div>
        </section>

        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's find more that brings us together.</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Astro Birb is a project that is constantly evolving. We are always looking for ways to improve our bot and make it more useful for our users. If you have any feedback or suggestions, please don't hesitate to contact us.
            </p>
            <div className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 sm:px-6 sm:py-3 lg:text-lg lg:py-4 lg:px-8">
                <a href="https://discord.com/api/oauth2/authorize?client_id=1113245569490616400&permissions=429765553360&scope=bot%20applications.commands" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get Started
                </a>
                <a href="https://discord.gg/DhWdgfh3hN" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    
                    Support Server
                </a>  
            </div>
        </div>
    </div>        
      </main>
      <Footer />
    </div>
  );
}