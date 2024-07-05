"use client";
import React from 'react';
import '../app/globals.css';
import Footer from '../components/footer';
import Header from "../components/header";

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-zinc-800  bg-zinc-950 text-white font-sans">
            <Header/>
            <main className="flex-grow flex flex-col items-center justify-center px-4 mt-15">
                <section className="text-left m-12 pt-14">
                    <h2 className="text-5xl font-bold">
                        Privacy Policy
                    </h2>

                    <div style={{marginLeft: '20px'}}>
                        <p className="mt-4 text-lg text-gray-300">
                            <span className="text-2xl font-bold">1. Introduction</span><br/><br/>Thank you for choosing Astro Birb. This Privacy Policy outlines how we collect, use, disclose, and protect your information. By using our service, you agree to the terms outlined in this policy.<br/><br/>
                            <span className="text-2xl font-bold">2. Information We Collect</span><br/><br/>User Provided Information:<br/><br/><span className="font-bold">Public User Information:</span><br/>Usernames, Discriminators, IDs and Avatars. <span className="font-bold">Public Guild Information:</span><br/>Server Names, IDs, Icons, Members, Channels and Roles.<br/><br/>
                            <span className="text-2xl font-bold">2. How We Use Your Information</span><br/><br/><span className="font-bold">We use the collected information for the following purposes:</span><br/><br/><span className="font-bold">•</span> To prevent spam and security issues.<br/><br/><span className="font-bold">•</span> Analyse your service usage.<br/><br/>
                            <span className="text-2xl font-bold">3. Data Security</span><br/><br/>We prioritize the security of your information and employ industry-standard measures to protect against unauthorized access or disclosure.<br/><br/>
                            <span className="text-2xl font-bold">4. Third-Party Services</span><br/><br/>Our service utilizes MongoDB Atlas for secure data storage. MongoDB Atlas is a reputable third-party service that employs industry-standard security measures to safeguard your information.<br/><br/>Your information is securely stored on MongoDB servers. MongoDB employs robust security practices to protect against unauthorized access, disclosure, or alteration of your data. MongoDB complies with industry standards and regulations concerning data protection.<br/><br/>
                            <span className="text-2xl font-bold">5. Children's Privacy</span><br/><br/>Our service is not intended for users under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected the data of a user under the age of 13, please contact us in our support server.<br/><br/>
                            <span className="text-2xl font-bold">6. Changes to This Privacy Policy</span><br/><br/>We reserve the right to update this Privacy Policy. Any changes will be effective upon posting the revised policy on our website.<br/><br/>
                            <span className="text-2xl font-bold">7. Contact Us</span><br/><br/>If you have any questions or concerns about this Privacy Policy, please contact us at Astro Birb's Support Server
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
