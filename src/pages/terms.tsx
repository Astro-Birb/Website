"use client"
import React from 'react';
import '../app/globals.css';
import Footer from '../components/footer';
import Header from "../components/header";
import { SessionProvider } from "next-auth/react";
export default function TermsOfService() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-stone-950 to-zinc-950 text-white font-sans">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center px-4 mt-15 pt-[100px]">
                    <section className="text-left max-w-4xl mx-auto pt-14">
                        <h2 className="text-5xl font-bold mb-8">
                            Terms of Service
                        </h2>
                        <p className="text-lg text-gray-300 mb-8">
                            By interacting with Astro Birb on Discord, you agree to abide by the following rules when using our service:
                        </p>

                        <article className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">1. Eligibility</h3>
                            <p className="text-lg text-gray-300 mb-4">
                                Individuals under the age of 13 are not eligible to use our services.
                            </p>
                        </article>

                        <article className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">2. Compliance with Discord's Terms of Service</h3>
                            <p className="text-lg text-gray-300 mb-4">
                                You must adhere to Discord's Terms of Service while using Astro Birb.
                            </p>
                        </article>

                        <article className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">3. Prohibited Activities</h3>
                            <p className="text-lg text-gray-300 mb-4">
                                You are prohibited from impersonating any staff member of Astro Birb or the bot itself. Spamming commands or engaging in activities that negatively impact the bot's performance is strictly prohibited.
                            </p>
                        </article>

                        <article className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">4. User Information</h3>
                            <p className="text-lg text-gray-300 mb-4">
                                By using our service, you acknowledge and agree that we reserve the right to collect basic user information in accordance with our Privacy Policy.
                            </p>
                        </article>

                        <article className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">5. Changes to Terms of Service</h3>
                            <p className="text-lg text-gray-300 mb-4">
                                We may update these Terms of Service from time to time. We will notify you of any changes by posting the updated Terms of Service on our website or through other appropriate communication channels.
                            </p>
                        </article>

                        <article className="mb-8">
                            <h3 className="text-2xl font-bold mb-2">6. Contact Us</h3>
                            <p className="text-lg text-gray-300">
                                If you have any questions or concerns about these Terms of Service, please contact us through Astro Birb's Support Server or by emailing us at <a href="mailto:support@astrobirb.com" className="text-blue-400">support@astrobirb.com</a>.
                            </p>
                        </article>
                    </section>
                </main>
                <Footer />
        </div>
    );
}