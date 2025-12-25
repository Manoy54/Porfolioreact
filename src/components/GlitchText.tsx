import { useRef, useState, useEffect } from "react";

const CHARS = "_____________!@#$^&*-=+";

interface GlitchTextProps {
    text: string;
    className?: string; // allow passing classes for styling
    triggerOnMount?: boolean;
}

export function GlitchText({ text, className, triggerOnMount = false }: GlitchTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const animationRef = useRef<number | null>(null);

    const animate = () => {
        const duration = 1500; // 1.5 seconds as requested
        const startTime = Date.now();

        const tick = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Calculate how many characters should be revealed based on progress
            const revealIndex = Math.floor(progress * text.length);

            const scrambled = text.split("")
                .map((char, index) => {
                    // If character is already revealed or is a space, show it
                    if (index < revealIndex || char === ' ') {
                        return char;
                    }
                    // Otherwise show random char
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setDisplayText(scrambled);

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(tick);
            }
        };

        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
        animationRef.current = requestAnimationFrame(tick);
    };

    useEffect(() => {
        if (triggerOnMount) {
            animate();
        }
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, [triggerOnMount]);

    return (
        <span
            onMouseEnter={animate}
            className={`relative inline-block ${className || ''}`}
        >
            {/* Invisible text to preserve width */}
            <span className="opacity-0">{text}</span>
            {/* Glitching text overlay */}
            <span className="absolute top-0 left-0 w-full h-full">
                {displayText}
            </span>
        </span>
    );
}
