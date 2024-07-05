"use client";
import React from 'react';
import '../app/globals.css';
import Footer from '../components/footer';
import Header from "../components/header";

export default function TermsOfService() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800  bg-zinc-950 text-white font-sans">
            <Header/>
            <main className="flex-grow flex flex-col items-center justify-center px-4 mt-15">
                <section className="text-left m-12 pt-14">
                    <h2 className="text-5xl font-bold">
                        Terms of Service
                    </h2>

                    <p className="mt-4 text-lg text-gray-300">
                        By interacting with Astro Birb on Discord, you agree to obide by the following rules when interacting with the bot:<br/><br/>
                        1. Individuals under the age of 13 are not eligible to use our services.<br/>
                        2. You must adhere to Discord's Terms of Service while using this service.<br/>
                        3. You are prohibited from impersonating any staff member of Astro Birb or the bot itself.<br/>
                        4. Spamming commands or engaging in activities that negatively impact the bot's performance is strictly prohibited.<br/>
                        5. By using our service, you acknowledge and agree that we reserve the right to collect basic user information in accordance with our privacy policy.
                    </p>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
}
