import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

// Sprouting Leaf Component with wind physics
const Leaf = ({ cx, cy, angle, scale = 1, delay }: { cx: number, cy: number, angle: number, scale?: number, delay: number }) => {
    const flutterDuration = 3 + Math.random() * 3;

    return (
        <motion.g
            style={{ x: cx, y: cy }}
            initial={{ scale: 0, opacity: 0, rotate: angle }}
            animate={{ scale: scale, opacity: 1, rotate: angle }}
            transition={{ delay, duration: 1, type: "spring", bounce: 0.5 }}
        >
            <motion.path
                // Minimalist asymmetric leaf shape originating at 0,0
                d="M0,0 C1.5,-4 5,-4 8,-1.5 C5,1.5 1.5,4 0,0 Z"
                fill="currentColor"
                opacity="0.85"
                style={{ originX: "0px", originY: "0px" }}
                animate={{ rotate: [0, 10, -5, 0] }}
                transition={{
                    duration: flutterDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + Math.random()
                }}
            />
        </motion.g>
    );
};

type LeafData = { cx: number; cy: number; angle: number; delayOffset: number; scale?: number };

// Generative SVG Vine Component
const GrowingVine = ({
    path, delay, className, leaves, origin
}: {
    path: string, delay: number, className: string, leaves: LeafData[], origin: [number, number]
}) => (
    <motion.svg
        className={`absolute pointer-events-none drop-shadow-2xl opacity-80 ${className}`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
    >
        <motion.g
            style={{ originX: `${origin[0]}px`, originY: `${origin[1]}px` }}
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 1.5, -0.5, 0], scale: [1, 1.01, 0.99, 1] }}
            transition={{ duration: 8 + Math.random() * 4, repeat: Infinity, ease: "easeInOut", delay: delay + 4 }}
        >
            <motion.path
                d={path}
                stroke="currentColor"
                strokeWidth="0.6"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 4, ease: "easeInOut", delay }}
            />

            {leaves.map((l, i) => (
                <Leaf
                    key={i}
                    cx={l.cx} cy={l.cy} angle={l.angle} scale={l.scale}
                    delay={delay + l.delayOffset}
                />
            ))}
        </motion.g>
    </motion.svg>
);

// Firefly Particle Component
const Firefly = ({ delay }: { delay: number }) => {
    const [xPos, setXPos] = useState(0);

    useEffect(() => {
        setXPos(Math.random() * 100);
    }, []);

    return (
        <motion.div
            className="absolute rounded-full bg-pale-sage/60 blur-[2px]"
            initial={{
                x: `${xPos}vw`,
                y: "110vh",
                scale: Math.random() * 0.5 + 0.5,
                opacity: 0
            }}
            animate={{
                y: "-10vh",
                x: `${xPos + (Math.random() * 20 - 10)}vw`,
                opacity: [0, 0.8, 0]
            }}
            transition={{
                duration: Math.random() * 10 + 15,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
            style={{ width: `${Math.random() * 6 + 4}px`, height: `${Math.random() * 6 + 4}px` }}
        />
    );
};

export default function Hero() {
    const { scrollY } = useScroll();

    // Smooth Parallax for the Glass Card
    const yTransform = useTransform(scrollY, [0, 500], [0, -100]);

    const delays = Array.from({ length: 30 }, () => Math.random() * 20);

    // Intricate, organic SVG paths mapped to 100x100 viewBox
    const vineTopLeft = "M0,0 C20,10 10,40 40,30 S60,80 80,60";
    const vineTopRight = "M100,0 C80,20 90,50 60,40 S30,90 20,70";
    const vineBottomLeft = "M0,100 C15,80 5,40 35,50 S55,10 75,30";
    const vineBottomRight = "M100,100 C85,85 95,45 65,55 S45,5 25,25";

    // Coordinates mapping foliage nodes along the vine curves
    const leavesTL = [
        { cx: 6, cy: 5, angle: 45, delayOffset: 0.4, scale: 0.8 },
        { cx: 11, cy: 15, angle: -30, delayOffset: 0.8, scale: 1.2 },
        { cx: 23, cy: 27, angle: 60, delayOffset: 1.6, scale: 1 },
        { cx: 32, cy: 29, angle: -45, delayOffset: 2.0, scale: 1.3 },
        { cx: 52, cy: 45, angle: 70, delayOffset: 2.8, scale: 1.1 },
        { cx: 68, cy: 55, angle: -20, delayOffset: 3.4, scale: 0.9 },
        { cx: 78, cy: 59, angle: 30, delayOffset: 3.8, scale: 0.7 },
    ];

    const leavesTR = [
        { cx: 92, cy: 10, angle: 135, delayOffset: 0.4, scale: 0.9 },
        { cx: 85, cy: 23, angle: -140, delayOffset: 0.8, scale: 1.1 },
        { cx: 75, cy: 42, angle: 110, delayOffset: 1.6, scale: 1.3 },
        { cx: 65, cy: 42, angle: -120, delayOffset: 2.0, scale: 1.2 },
        { cx: 45, cy: 62, angle: 150, delayOffset: 2.8, scale: 1 },
        { cx: 30, cy: 78, angle: -160, delayOffset: 3.4, scale: 0.8 },
        { cx: 22, cy: 73, angle: 110, delayOffset: 3.8, scale: 0.7 },
    ];

    const leavesBL = [
        { cx: 5, cy: 90, angle: -45, delayOffset: 0.4, scale: 1.1 },
        { cx: 12, cy: 72, angle: 30, delayOffset: 0.8, scale: 0.9 },
        { cx: 18, cy: 52, angle: -60, delayOffset: 1.6, scale: 1.2 },
        { cx: 28, cy: 48, angle: 45, delayOffset: 2.0, scale: 1.3 },
        { cx: 48, cy: 28, angle: -70, delayOffset: 2.8, scale: 1.1 },
        { cx: 62, cy: 20, angle: 20, delayOffset: 3.4, scale: 0.8 },
        { cx: 72, cy: 26, angle: -30, delayOffset: 3.8, scale: 0.7 },
    ];

    const leavesBR = [
        { cx: 95, cy: 92, angle: -135, delayOffset: 0.4, scale: 1 },
        { cx: 88, cy: 75, angle: 140, delayOffset: 0.8, scale: 1.2 },
        { cx: 80, cy: 58, angle: -110, delayOffset: 1.6, scale: 1.1 },
        { cx: 68, cy: 52, angle: 120, delayOffset: 2.0, scale: 1.3 },
        { cx: 48, cy: 35, angle: -150, delayOffset: 2.8, scale: 0.9 },
        { cx: 35, cy: 18, angle: 160, delayOffset: 3.4, scale: 0.8 },
        { cx: 28, cy: 22, angle: -120, delayOffset: 3.8, scale: 0.7 },
    ];

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a120c]">
            {/* CSS Animated 'Wind in the Canopy' Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-forest-canopy/40 to-[#0a120c] z-10" />

                {/* Undulating CSS Blobs simulating leaves passing over the sun */}
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pale-sage/10 mix-blend-overlay blur-[80px] rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        borderRadius: ["40% 60% 70% 30%", "60% 40% 30% 70%", "40% 60% 70% 30%"]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-forest-canopy/20 mix-blend-overlay blur-[100px] rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                        borderRadius: ["60% 40% 30% 70%", "40% 60% 70% 30%", "60% 40% 30% 70%"]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Firefly Particles */}
                {delays.map((delay, index) => (
                    <Firefly key={index} delay={delay} />
                ))}
            </div>

            {/* Generative SVG Vine System with Sprouting Leaves */}
            <div className="absolute inset-0 z-20 pointer-events-none text-pale-sage">
                <GrowingVine origin={[0, 0]} path={vineTopLeft} delay={0} className="w-[40vw] h-[40vh] top-0 left-0" leaves={leavesTL} />
                <GrowingVine origin={[100, 0]} path={vineTopRight} delay={0.5} className="w-[45vw] h-[50vh] top-0 right-0" leaves={leavesTR} />
                <GrowingVine origin={[0, 100]} path={vineBottomLeft} delay={1} className="w-[35vw] h-[45vh] bottom-0 left-0" leaves={leavesBL} />
                <GrowingVine origin={[100, 100]} path={vineBottomRight} delay={1.5} className="w-[50vw] h-[40vh] bottom-0 right-0" leaves={leavesBR} />
            </div>

            {/* Typography and Content enclosed in a Glassmorphic Greenhouse Card */}
            <motion.div
                style={{ y: yTransform }}
                className="relative z-30 text-center px-8 py-16 md:px-16 md:py-24 max-w-5xl mx-auto flex flex-col items-center
                           bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl"
            >
                <div className="absolute inset-0 bg-noise opacity-5 rounded-3xl mix-blend-overlay pointer-events-none" />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-pale-sage uppercase tracking-widest text-sm mb-6 font-semibold tracking-[0.2em]"
                >
                    Outdoor Living & Biophilic Design Studio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl text-ivory font-serif leading-tight mb-10 drop-shadow-md"
                >
                    We build private sanctuaries out of thin air.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <button className="bg-forest-canopy text-ivory px-10 py-5 rounded-full text-lg font-medium hover:bg-forest-canopy/80 hover:scale-105 transition-all flex items-center gap-3 group border border-pale-sage/30 shadow-[0_0_20px_rgba(42,59,44,0.4)]">
                        Book a Site Visit
                        <svg
                            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
