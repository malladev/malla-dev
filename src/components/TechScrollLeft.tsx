import React from "react";
import { InfiniteScroll } from "./ui/InfiniteScroll.tsx";

export function TechScrollLeft() {
    return (
        <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteScroll
                items={tech}
                direction="left"
                speed="slow"
            />
        </div>
    );
}

const tech = [
    {
        picture:"./assets/tech/angular.png",
        name: "Angular"
    },
    {
        picture:"./assets/tech/figma.png",
        name: "Figma"
    },
    {
        picture:"./assets/tech/react.png",
        name: "React Js"
    },
    {
        picture:"./assets/tech/typescript.png",
        name: "TypeScript"
    },
    {
        picture:"./assets/tech/photoshop.png",
        name: "Photoshop"
    },
    {
        picture:"./assets/tech/springboot.png",
        name: "Spring Boot"
    },
    {
        picture:"./assets/tech/tailwind.png",
        name: "Tailwind CSS"
    },
    {
        picture:"./assets/tech/next.png",
        name: "Next JS"
    },
    {
        picture:"./assets/tech/flutter.png",
        name: "Flutter"
    },
];
