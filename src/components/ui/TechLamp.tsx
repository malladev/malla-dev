import React from "react";
import { motion } from "framer-motion";

export function TechLamp() {
    return (
        <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
            }}
            className="mt-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
            Build lamps <br /> the right way
        </motion.h1>
    );
}
//     children,
//     className,
// }: {
//     children: React.ReactNode;
//     className?: string;
// }) => {
//     return (
//         <div
//             className={cn(
//                 "relative flex min-h-screen flex-col items-center bg-gray-900 justify-center overflow-hidden w-full rounded-md z-0",
//                 className
//             )}
//         >
//             <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
//                 {children}
//             </div>
//         </div>
//     );
// };
