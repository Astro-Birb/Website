"use client";
import React from 'react';
import '../app/globals.css';
import Footer from '../components/footer';
import Header from "../components/header";
import { useSession } from 'next-auth/react'
export default function PrivacyPolicy() {
    const { data: session, status } = useSession();
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800 to-zinc-950 text-white font-sans">
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center px-4 mt-15 pt-[100px]">
                <section className="text-left max-w-4xl mx-auto pt-14">
                    <h2 className="text-5xl font-bold mb-8">
                        Privacy Policy
                    </h2>
                    <article className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">1. Introduction</h3>
                        <p className="text-lg text-gray-300">
                            Welcome to Astro Birb! We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services. By accessing or using Astro Birb, you agree to the terms of this policy. If you have any questions or concerns, please contact us.
                        </p>
                    </article>
                    <article className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">2. Information We Collect</h3>
                        <p className="text-lg text-gray-300">
                            We collect different types of information to provide and improve our service:
                        </p>
                        <ul className="list-disc ml-5 text-lg text-gray-300">
                            <li>
                                <strong>Public User Information:</strong> Usernames, discriminators, IDs, and avatars, which help us identify and communicate with you.
                            </li>
                            <li>
                                <strong>Public Guild Information:</strong> Server names, IDs, icons, members, channels, and roles, which help us support server-specific functionalities.
                            </li>
                        </ul>
                    </article>
                    <article className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">3. How We Use Your Information</h3>
                        <p className="text-lg text-gray-300">
                            We use your information to:
                        </p>
                        <ul className="list-disc ml-5 text-lg text-gray-300">
                            <li>Provide and maintain our services.</li>
                            <li>Improve your experience on Astro Birb.</li>
                            <li>Ensure the security of our platform and prevent misuse.</li>
                            <li>Analyze usage to understand and enhance our service offerings.</li>
                        </ul>
                    </article>
                    <article className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">4. Data Security</h3>
                        <p className="text-lg text-gray-300">
                            Your data security is important to us. We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse. We regularly review our practices to enhance the safety of your data.
                        </p>
                    </article>
                    <article className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">5. Third-Party Services</h3>
                        <p className="text-lg text-gray-300">
                            We use <strong>MongoDB Atlas</strong> to securely store your data. MongoDB Atlas is a trusted third-party service known for its robust security measures, ensuring your information is safe and compliant with industry standards and regulations.
                        </p>
                    </article>
                    <article className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">6. Children's Privacy</h3>
                        <p className="text-lg text-gray-300">
                            Astro Birb is not intended for children under the age of 13. We do not knowingly collect personal information from users under 13. If you believe we have inadvertently collected such data, please reach out to us immediately, and we will take steps to delete the information.
                        </p>
                    </article>
                    <article className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">7. Changes to This Privacy Policy</h3>
                        <p className="text-lg text-gray-300">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, technical, or regulatory reasons. We will notify you of any significant changes by posting the new policy on our website. Your continued use of our services following these changes means you accept the revised policy.
                        </p>
                    </article>
                    <article className="mb-8">
                        <h3 className="text-2xl font-bold mb-2">8. Contact Us</h3>
                        <p className="text-lg text-gray-300">
                            If you have any questions or concerns about this Privacy Policy, please contact us through Astro Birb's Support Server or email us at <a href="mailto:help@astrobirb.com" className="text-blue-400">help@astrobirb.com</a>.
                        </p>
                    </article>
                </section>
            </main>
            <Footer />
        </div>
    );
}