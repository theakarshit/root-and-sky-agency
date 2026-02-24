import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

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

    // Parallax scroll transforms for the 4 corners: they move outwards as you scroll down
    const tl_x = useTransform(scrollY, [0, 500], [0, -150]);
    const tl_y = useTransform(scrollY, [0, 500], [0, -150]);

    const tr_x = useTransform(scrollY, [0, 500], [0, 150]);
    const tr_y = useTransform(scrollY, [0, 500], [0, -150]);

    const bl_x = useTransform(scrollY, [0, 500], [0, -150]);
    const bl_y = useTransform(scrollY, [0, 500], [0, 150]);

    const br_x = useTransform(scrollY, [0, 500], [0, 150]);
    const br_y = useTransform(scrollY, [0, 500], [0, 150]);

    // Generate random delays for fireflies to stagger their appearance
    const delays = Array.from({ length: 30 }, () => Math.random() * 20);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a120c]">
            {/* Deep Green Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-forest-canopy/40 to-[#0a120c] z-10" />
                {/* Firefly Particles */}
                {delays.map((delay, index) => (
                    <Firefly key={index} delay={delay} />
                ))}
            </div>

            {/* Corner Foliage Canopy */}
            <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden mix-blend-normal">
                <motion.img
                    src="/foliage_top_left.png"
                    alt="Top Left Foliage"
                    initial={{ scale: 1.1, opacity: 0, x: -50, y: -50 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ x: tl_x, y: tl_y }}
                    className="absolute top-[-5%] left-[-5%] w-[60%] md:w-[45%] max-w-[550px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] contrast-125 saturate-150"
                />
                <motion.img
                    src="/foliage_top_right.png"
                    alt="Top Right Foliage"
                    initial={{ scale: 1.1, opacity: 0, x: 50, y: -50 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    style={{ x: tr_x, y: tr_y }}
                    className="absolute top-[-5%] right-[-5%] w-[60%] md:w-[45%] max-w-[550px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] contrast-125 saturate-150"
                />
                <motion.img
                    src="/foliage_bottom_left.png"
                    alt="Bottom Left Foliage"
                    initial={{ scale: 1.1, opacity: 0, x: -50, y: 50 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                    style={{ x: bl_x, y: bl_y }}
                    className="absolute bottom-[-5%] left-[-5%] w-[60%] md:w-[45%] max-w-[550px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] contrast-125 saturate-150"
                />
                <motion.img
                    src="/foliage_bottom_right.png"
                    alt="Bottom Right Foliage"
                    initial={{ scale: 1.1, opacity: 0, x: 50, y: 50 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    style={{ x: br_x, y: br_y }}
                    className="absolute bottom-[-5%] right-[-5%] w-[60%] md:w-[45%] max-w-[550px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] contrast-125 saturate-150"
                />
            </div>

            {/* Typography and Content enclosed in a Glassmorphic Greenhouse Card */}
            <div className="relative z-30 text-center px-8 py-16 md:px-16 md:py-24 max-w-5xl mx-auto flex flex-col items-center
                            bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">

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
                    <button className="bg-forest-canopy text-ivory px-10 py-5 rounded-full text-lg font-medium hover:bg-forest-canopy/80 hover:scale-105 transition-all flex items-center gap-3 group border border-pale-sage/30 shadow-lg">
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
            </div>
        </section>
    );
}
