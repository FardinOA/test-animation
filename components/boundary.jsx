"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Boundary = () => {
    const pRef = useRef(null); // Create a ref for the inner <p> element

    useGSAP(() => {
        // Animate the boundary element width and background color
        gsap.to("#boundary", {
            duration: 1.5,
            ease: "power3.inOut",
            width: "100%",
            backgroundColor: "#f0f0f0",
        });

        gsap.to("#text", {
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 1,
            delay: 0.2,
        });
    }, []);

    return (
        <div
            id="boundary"
            className="h-20 flex items-center justify-center w-0 absolute bg-gradient-to-r from-blue-400 via-blue-800 to-purple-700 bottom-0 left-1/2 -translate-x-1/2"
        >
            <p id="text" className="opacity-0">
                Four
            </p>
        </div>
    );
};

export default Boundary;
