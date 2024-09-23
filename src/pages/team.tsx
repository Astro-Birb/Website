"use client";
import TypeIt from "typeit-react";
import Footer from "../components/footer";
import Header from "../components/header";
import "../app/globals.css";

export default function Team() {
    return (
        <div className="overflow-auto flex flex-col min-h-screen bg-gradient-to-b from-stone-950 to-zinc-950 text-white font-sans">
            <Header />
            <main className="flex-grow">
                <section className="">
                    <div className="mt-12 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                            <h2 className="mb-4 text-4xl tracking-tight font-bold text-white scale-125 dark:text-white">
                                Our team
                            </h2>
                            <p className="font-light text-white sm:text-xl dark:text-white ">
                                As a team of dedicated staff members at Astro Birb, our primary
                                goal is to ensure we deliver the best possible experience for
                                our users.
                            </p>
                        </div>
                        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/bugsy.png"
                                    alt="Bonnie Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">Bugsy</a>
                                </h3>
                                <p>Owner</p>
                                <ul className="flex justify-center mt-4 space-x-4">
                                    <li>
                                        <a
                                            href="https://x.com/bugsbirt"
                                            className="text-[#00acee] hover:text-white dark:hover:text-white"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/bugsbirt"
                                            className="text-white hover:text-white dark:hover:text-white dark:text-white"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/markination.png"
                                    alt="Helene Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">markination</a>
                                </h3>
                                <p>Co Owner</p>
                                <ul className="flex justify-center mt-4 space-x-4">
                                    <li>
                                        <a
                                            href="https://github.com/markination"
                                            className="text-white hover:text-white dark:hover:text-white dark:text-white"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/zee.png"
                                    alt="Jese Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">zee</a>
                                </h3>
                                <p>Community Manager & Contributor</p>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/toxic.gif"
                                    alt="Joseph Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">Toxic</a>
                                </h3>
                                <p>Moderator</p>
                                <ul className="flex justify-center mt-4 space-x-4">
                                    <li>
                                        <a
                                            href="https://x.com/flstate2022"
                                            className="text-[#00acee] hover:text-white dark:hover:text-white"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/trey.png"
                                    alt="Sofia Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">Trey</a>
                                </h3>
                                <p>Support</p>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/cloudy.png"
                                    alt="Leslie Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">Cloudy</a>
                                </h3>
                                <p>Admin</p>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/foxhast.png"
                                    alt="Michael Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">Foxhast</a>
                                </h3>
                                <p>Support</p>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/alexii.png"
                                    alt="Neil Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">Aℓєxii</a>
                                </h3>
                                <p>Support</p>
                                <ul className="flex justify-center mt-4 space-x-4">
                                    <li>
                                        <a
                                            href="https://x.com/alexiidev"
                                            className="text-[#00acee] hover:text-white dark:hover:text-white"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://github.com/alexiidev"
                                            className="text-white hover:text-white dark:hover:text-white dark:text-white"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/limited.png"
                                    alt="Neil Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">ImLimiteds</a>
                                </h3>
                                <p>Support</p>
                                <ul className="flex justify-center mt-4 space-x-4">
                                    <li>
                                        <a
                                            href="https://github.com/ImLimiteds"
                                            className="text-white hover:text-white dark:hover:text-white dark:text-white"
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/alex.png"
                                    alt="Neil Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">Alex†</a>
                                </h3>
                                <p>Support</p>
                                <ul className="flex justify-center mt-4 space-x-4"></ul>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/lavoxiy.png"
                                    alt="Neil Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">Lavoxiy</a>
                                </h3>
                                <p>Support</p>
                                <ul className="flex justify-center mt-4 space-x-4"></ul>
                            </div>
                            <div className="text-center text-white dark:text-white">
                                <img
                                    className="mx-auto mb-4 w-36 h-36 rounded-full sm:w-48 sm:h-48 lg:w-56 lg:h-56"
                                    src="/team/erik.png"
                                    alt="Neil Avatar"
                                ></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                                    <a href="#">erekle4329</a>
                                </h3>
                                <p>Support</p>
                                <ul className="flex justify-center mt-4 space-x-4"></ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
