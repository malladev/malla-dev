import React from "react";
import { HoverEffect } from "./ui/ProjectUI.tsx";
import { motion } from "framer-motion";


export function Projects() {
    return (
        <div className="bg-gray-900 py-10 relative">
            <div className="absolute h-full w-full flex justify-center items-start -top-8">
                <img src="./triangle-down.svg" alt="triangle-down" className="w-20 white-icon" />
            </div>

            <div id="project" className="max-w-5xl z-50 mx-auto mt-20 lg:p-0 px-5">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=" text-gray-200 py-4 text-center text-4xl font-bold tracking-tight md:text-6xl"
                >
                    My <span className="from-indigo-500 bg-gradient-to-r to-gray-200 text-transparent bg-clip-text">projects</span>
                </motion.h1>
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}

export const projects = [
    {
        title: "Assurance Lafia Workflow",
        description: "A technology company that builds economic infrastructure for the internet.",
        link: "#",
        techs: [{ name: ["Angular JS"] }, { name: ["Tailwind CSS"] }, { name: ["Spring Boot"] }, { name: ["MySql"] }]
    },
    {
        title: "E-Shop",
        description: "A technology company that builds economic infrastructure for the internet.",
        link: "#",
        techs: [{ name: ["Next JS"] }, { name: ["Tailwind CSS"] }, { name: ["Nest JS"] }, { name: ["MongoDB"] }, { name: ["Prisma"] }]
    },
    {
        title: "Hub Scolaire",
        description: "A technology company that builds economic infrastructure for the internet.",
        link: "#",
        techs: [{ name: ["React Native"] }, { name: ["Tailwind CSS"] }, { name: ["MongoDB"] }]
    }
];
