import { ArrowUpIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Fonction pour détecter le scroll
    const toggleVisibility = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    cursor: "pointer",
                    backgroundColor: "#3F51B5",
                    padding: "10px",
                    borderRadius: "100%",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    zIndex: "50",
                }}
            >
                <ArrowUpIcon className="w-5 text-white" />
            </button>
        )
    );
};

export default BackToTopButton;
