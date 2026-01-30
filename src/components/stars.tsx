"use client";

import * as React from "react";
import {
    type HTMLMotionProps,
    motion,
    type SpringOptions,
    type Transition,
    useMotionValue,
    useSpring
} from "framer-motion";

import { cn } from "@/lib/utils";

const lightModeStyles = {
    // Stars changed to Blue shades
    "--star-color-dark": "#3b82f6", // Blue-500 (Visible bright blue)
    "--star-color-light": "#1e3a8a", // Blue-900 (Navy Blue)

    // Background reverted to transparent
    "--bg-color-start-dark": "transparent",
    "--bg-color-end-dark": "transparent",
    "--bg-color-start-light": "transparent",
    "--bg-color-end-light": "transparent"
};

const getStarColor = (isLight: boolean) => {
    return isLight ? lightModeStyles["--star-color-light"] : lightModeStyles["--star-color-dark"];
};

type StarLayerProps = HTMLMotionProps<"div"> & {
    count: number;
    size: number;
    transition: Transition;
    isLight: boolean;
};

// ... existing code ...
function generateStars(count: number, starColor: string) {
    const shadows: string[] = [];
    for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 4000) - 2000;
        const y = Math.floor(Math.random() * 4000) - 2000;
        shadows.push(`${x}px ${y}px ${starColor}`);
    }
    return shadows.join(", ");
}

function StarLayer({
    count = 1000,
    size = 1,
    transition = { repeat: Infinity, duration: 50, ease: "linear" },
    isLight,
    className,
    ...props
}: StarLayerProps) {
    const [boxShadow, setBoxShadow] = React.useState<string>("");
    const starColor = getStarColor(isLight);

    React.useEffect(() => {
        setBoxShadow(generateStars(count, starColor));
    }, [count, starColor]);

    return (
        <motion.div
            data-slot="star-layer"
            animate={{ y: [0, -2000] }}
            transition={transition}
            className={cn("absolute top-0 left-0 h-[2000px] w-full", className)}
            {...props}>
            <div
                className="absolute rounded-full bg-transparent"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: boxShadow
                }}
            />
            <div
                className="absolute top-[2000px] rounded-full bg-transparent"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    boxShadow: boxShadow
                }}
            />
        </motion.div>
    );
}

type StarsBackgroundProps = React.ComponentProps<"div"> & {
    factor?: number;
    speed?: number;
    transition?: SpringOptions;
};

export function StarsBackground({
    children,
    className,
    factor = 0.05,
    speed = 50,
    transition = { stiffness: 50, damping: 20 },
    ...props
}: StarsBackgroundProps) {
    const offsetX = useMotionValue(1);
    const offsetY = useMotionValue(1);

    const springX = useSpring(offsetX, transition);
    const springY = useSpring(offsetY, transition);

    const handleMouseMove = React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const newOffsetX = -(e.clientX - centerX) * factor;
            const newOffsetY = -(e.clientY - centerY) * factor;
            offsetX.set(newOffsetX);
            offsetY.set(newOffsetY);
        },
        [offsetX, offsetY, factor]
    );

    const [isLight, setIsLight] = React.useState(false);

    React.useEffect(() => {
        const checkLightMode = () => {
            const isLightMode =
                document.documentElement.classList.contains("light") ||
                document.documentElement.getAttribute("data-theme") === "light";
            setIsLight(isLightMode);
        };

        checkLightMode();

        const observer = new MutationObserver(checkLightMode);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class", "data-theme"]
        });

        return () => observer.disconnect();
    }, []);

    const bgColorStart = isLight
        ? lightModeStyles["--bg-color-start-light"]
        : lightModeStyles["--bg-color-start-dark"];
    const bgColorEnd = isLight
        ? lightModeStyles["--bg-color-end-light"]
        : lightModeStyles["--bg-color-end-dark"];
    const backgroundStyle = `radial-gradient(ellipse_at_bottom, ${bgColorStart} 0%, ${bgColorEnd} 100%)`;

    return (
        <div
            data-slot="stars-background"
            className={cn("relative size-full overflow-hidden", className)}
            style={{
                background: backgroundStyle
            }}
            onMouseMove={handleMouseMove}
            {...props}>
            <motion.div style={{ x: springX, y: springY }} className="absolute inset-0">
                <StarLayer
                    count={1000}
                    size={1.5}
                    transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
                    isLight={isLight}
                />
                <StarLayer
                    count={400}
                    size={3}
                    transition={{
                        repeat: Infinity,
                        duration: speed * 2,
                        ease: "linear"
                    }}
                    isLight={isLight}
                />
                <StarLayer
                    count={200}
                    size={4.5}
                    transition={{
                        repeat: Infinity,
                        duration: speed * 3,
                        ease: "linear"
                    }}
                    isLight={isLight}
                />
            </motion.div>
            <div className="relative z-10 w-full h-full pointer-events-none *:pointer-events-auto">
                {children}
            </div>
        </div>
    );
}
