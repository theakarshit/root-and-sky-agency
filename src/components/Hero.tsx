import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

// Generative SVG Vine Component
const GrowingVine = ({ path, delay, className, style }: { path: string, delay: number, className: string, style?: any }) => (
    <motion.svg
        className={`absolute pointer-events-none drop-shadow-2xl opacity-60 ${className}`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={style}
    >
        <motion.path
            d={path}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", delay }}
        />
        {/* Adds a slight gentle sway to the fully grown vine */}
        <motion.path
            d={path}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={{ pathLength: 1, opacity: 0 }}
            animate={{
                opacity: [0, 1, 0.7, 1],
                scale: [1, 1.02, 0.98, 1],
                rotate: [0, 1, -1, 0]
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay + 4
            }}
            style={{ transformOrigin: "top left" }}
        />
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

    // Mouse Tracking for Vine Physics
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        // Normalize mouse coordinates to [-1, 1]
        mouseX.set((clientX / innerWidth) * 2 - 1);
        mouseY.set((clientY / innerHeight) * 2 - 1);
    };

    const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };

    // Interactive Physics: Vines bend away when the cursor is near them
    const tl_x = useSpring(useTransform(mouseX, [-1, 0, 1], [40, 0, 0]), springConfig);
    const tl_y = useSpring(useTransform(mouseY, [-1, 0, 1], [40, 0, 0]), springConfig);

    const tr_x = useSpring(useTransform(mouseX, [-1, 0, 1], [0, 0, -40]), springConfig);
    const tr_y = useSpring(useTransform(mouseY, [-1, 0, 1], [40, 0, 0]), springConfig);

    const bl_x = useSpring(useTransform(mouseX, [-1, 0, 1], [40, 0, 0]), springConfig);
    const bl_y = useSpring(useTransform(mouseY, [-1, 0, 1], [0, 0, -40]), springConfig);

    const br_x = useSpring(useTransform(mouseX, [-1, 0, 1], [0, 0, -40]), springConfig);
    const br_y = useSpring(useTransform(mouseY, [-1, 0, 1], [0, 0, -40]), springConfig);


    const delays = Array.from({ length: 30 }, () => Math.random() * 20);

    // Intricate, organic SVG paths mapped to 100x100 viewBox
    const vineTopLeft = "M0,0 C20,10 10,40 40,30 S60,80 80,60";
    const vineTopRight = "M100,0 C80,20 90,50 60,40 S30,90 20,70";
    const vineBottomLeft = "M0,100 C15,80 5,40 35,50 S55,10 75,30";
    const vineBottomRight = "M100,100 C85,85 95,45 65,55 S45,5 25,25";

    // Cinematic Typography Variants
    const headline = "We build private sanctuaries out of thin air.";
    const words = headline.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.6 }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 30, rotateX: -60 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: { type: "spring", damping: 14, stiffness: 120 }
        }
    };

    return (
        <section
            className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a120c]"
            onMouseMove={handleMouseMove}
        >
            {/* CSS Animated 'Wind in the Canopy' Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
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

            {/* Generative SVG Vine System */}
            <div className="absolute inset-0 z-20 pointer-events-none text-pale-sage">
                <GrowingVine path={vineTopLeft} delay={0} className="w-[40vw] h-[40vh] top-0 left-0" style={{ x: tl_x, y: tl_y }} />
                <GrowingVine path={vineTopRight} delay={0.5} className="w-[45vw] h-[50vh] top-0 right-0" style={{ x: tr_x, y: tr_y }} />
                <GrowingVine path={vineBottomLeft} delay={1} className="w-[35vw] h-[45vh] bottom-0 left-0" style={{ x: bl_x, y: bl_y }} />
                <GrowingVine path={vineBottomRight} delay={1.5} className="w-[50vw] h-[40vh] bottom-0 right-0" style={{ x: br_x, y: br_y }} />
            </div>

            {/* Typography and Content enclosed in a Glassmorphic Greenhouse Card */}
            <motion.div
                style={{ y: yTransform }}
                className="relative z-30 text-center px-8 py-16 md:px-16 md:py-24 max-w-5xl mx-auto flex flex-col items-center
                           bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl pointer-events-auto"
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

                {/* Cinematic Typography Reveal */}
                <motion.h1
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ perspective: 1000 }}
                    className="flex flex-wrap justify-center gap-x-3 gap-y-2 text-5xl md:text-7xl lg:text-8xl text-ivory font-serif leading-tight mb-10 drop-shadow-md"
                >
                    {words.map((word, i) => (
                        <motion.span key={i} variants={wordVariants} className="inline-block origin-bottom filter drop-shadow-sm">
                            {word}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
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
