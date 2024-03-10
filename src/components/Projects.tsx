import React from "react";
import { HoverEffect } from "./ui/ProjectUI.tsx";
import { motion } from "framer-motion";


export function Projects() {
    return (
        <div id="project" className="max-w-5xl mx-auto px-8">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className=" text-white py-4 text-center text-4xl font-bold tracking-tight md:text-6xl"
            >
                My <span className="from-indigo-500 bg-gradient-to-r to-slate-200 text-transparent bg-clip-text">projects</span>
            </motion.h1>
            <HoverEffect items={projects} />
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
