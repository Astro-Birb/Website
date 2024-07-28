"use client";
import React from "react";
import "../app/globals.css";
import Footer from "../components/footer";
import Header from "../components/header";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-stone-950 to-zinc-950 text-white font-sans">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-4 mt-15 pt-[100px]">
        <section className="text-left max-w-4xl mx-auto pt-14">
          <h2 className="text-5xl font-bold mb-8">Terms of Service</h2>
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
              The following activities are prohibited:
            </p>
            <ul className="list-disc ml-5 text-lg text-gray-300">
              <li>Using our services to facilitate illegal activities or those that violate Discord's Terms of Service or Community Guidelines.</li>
              <li>Sending advertisements to another user without their consent or sending messages at a high rate.</li>
              <li>Using our services in any way that may negatively impact the services or the reputation of the service/its staff team.</li>
            </ul>
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
              If you have any questions or concerns about these Terms of Service, please contact us through Astro Birb's Support Server or by emailing us at{" "}
              <a href="mailto:bugsbirt@astrobirb.dev" className="text-blue-400">
              bugsbirt@astrobirb.dev
              </a>.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
