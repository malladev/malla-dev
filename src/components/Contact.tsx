import React from "react";
import { ContactBackground } from "./ui/ContactBackground.tsx";
import Layout from "./Layout.jsx";


const contacts = [
    { id: 1, name: 'LinkedIn', icone: 'https://api.iconify.design/uiw:linkedin.svg', url: 'https://www.linkedin.com/in/mohamed-lamine-kon%C3%A9-b51999193/', color: 'bg-blue-500 text-white' },
    { id: 2, name: 'Github', icone: 'https://api.iconify.design/mdi:github.svg', url: 'https://github.com/malladev', color: 'bg-gray-900 ring-slate-100 ring-1 text-white' },
    { id: 3, name: 'Twitter', icone: 'https://api.iconify.design/ri:twitter-x-line.svg', url: 'https://twitter.com/malladev223', color: 'bg-blue-400 text-white' }
];

export function Contact() {
    return (
        <div className="relative">
            <div className="absolute h-full w-full flex justify-center items-start -top-8">
                <img
                    src="./triangle-down.svg"
                    alt="triangle-down"
                    className="w-20 gray-icon"
                />
            </div>

            <Layout>
                <div id="contact" className="my-20 mx-auto max-w-5xl lg:p-0 sm:px-5">
                    <ContactBackground className="rounded-[22px] p-4 sm:p-10 bg-white">
                        <p className="text-2xl sm:text-3xl mt-4 mb-2 font-bold text-gray-700">
                            Contacts
                        </p>
                        <p className="text-base text-gray-500">
                            Let&apos;s discuss something cool together
                        </p>
                        <div className="flex items-center gap-2 flex-wrap mt-3">
                            {contacts.map((contact) => (
                                <a key={contact.id} href={contact.url} className={`${contact.color} py-2 px-6 w-fit rounded text-sm flex items-center justify-center gap-1 hover:shadow-md hover:-translate-y-1 duration-300 transition-all`}>
                                    <img src={contact.icone} alt={contact.name} className="white-icon w-4 h-4" />
                                    {contact.name}
                                </a>
                            ))}
                            <a href="mailto:konelamine1122@gmail.com" className="py-2 px-6 w-fit rounded text-sm flex items-center justify-center gap-1 bg-slate-100 hover:shadow-md hover:-translate-y-1 duration-300 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.33em" height="1em" viewBox="0 0 256 193"><path fill="#4285F4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"></path><path fill="#34A853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"></path><path fill="#EA4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"></path><path fill="#FBBC04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"></path><path fill="#C5221F" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"></path></svg>
                                Gmail</a>
                        </div>
                    </ContactBackground>
                </div>
            </Layout>
        </div>
    );
}
