import React from "react";
import { ContactBackground } from "./ui/ContactBackground.tsx";
import Layout from "./Layout.jsx";

export function Contact() {
    return (
        <Layout>
            <div id="contact" className="my-20">
                <ContactBackground className="rounded-[22px] p-4 sm:p-10 bg-zinc-900">
                    <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
                        Contacts
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                        February 17, 2024. Your best opportunity to get these right now is by
                        entering raffles and waiting for the official releases.
                    </p>
                </ContactBackground>
            </div>
        </Layout>
    );
}
