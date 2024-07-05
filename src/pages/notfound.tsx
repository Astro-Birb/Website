"use client";
import React from 'react';
import '../app/globals.css';
import Footer from '../components/footer';
import Header from "../components/header";
export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800  bg-zinc-950 text-white font-sans">
            <Header/>
            <main className="flex-grow flex flex-col items-center justify-center px-4 mt-15">
                <section className="text-center">
                    <h2 className="text-5xl font-bold">
                        You seem lost traveller...
                    </h2>

                    <p className="mt-4 text-lg text-gray-300">
                        We couldn't find the page you were looking for, here's a <a href="https://astrobirb.dev">link</a> back home.
                    </p>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
}
