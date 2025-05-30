import { useEffect } from "react";
import { combinedParticlesConfig } from "../hooks/combined-particles-config";

export default function Particles() {
    useEffect(() => {
        if (typeof window.particlesJS === "function") {
        window.particlesJS("particles-js", combinedParticlesConfig);
        } else {
        console.error("particles.js is not loaded or available globally.");
        }
    }, []);

    return null;
}