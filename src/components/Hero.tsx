import { motion, useScroll, useTransform } from 'framer-motion';

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

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <div className="absolute inset-0 bg-charcoal/30 z-10" /> {/* Dark Overlay */}
                    <img
                        src="/hero_terrace_day.jpeg"
                        alt="Luxury Terrace Day"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
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
                    className="absolute top-[-5%] left-[-5%] w-[50%] md:w-[35%] max-w-[450px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] brightness-75"
                />
                <motion.img
                    src="/foliage_top_right.png"
                    alt="Top Right Foliage"
                    initial={{ scale: 1.1, opacity: 0, x: 50, y: -50 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    style={{ x: tr_x, y: tr_y }}
                    className="absolute top-[-5%] right-[-5%] w-[50%] md:w-[35%] max-w-[450px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] brightness-75"
                />
                <motion.img
                    src="/foliage_bottom_left.png"
                    alt="Bottom Left Foliage"
                    initial={{ scale: 1.1, opacity: 0, x: -50, y: 50 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
                    style={{ x: bl_x, y: bl_y }}
                    className="absolute bottom-[-5%] left-[-5%] w-[50%] md:w-[35%] max-w-[450px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] brightness-75"
                />
                <motion.img
                    src="/foliage_bottom_right.png"
                    alt="Bottom Right Foliage"
                    initial={{ scale: 1.1, opacity: 0, x: 50, y: 50 }}
                    animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                    style={{ x: br_x, y: br_y }}
                    className="absolute bottom-[-5%] right-[-5%] w-[50%] md:w-[35%] max-w-[450px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] brightness-75"
                />
            </div>

            {/* Typography and Content */}
            <div className="relative z-30 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-pale-sage uppercase tracking-widest text-sm mb-6 font-semibold drop-shadow-md"
                >
                    Outdoor Living & Biophilic Design Studio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl text-ivory font-serif leading-tight mb-8 drop-shadow-lg"
                >
                    We build private sanctuaries out of thin air.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <button className="bg-forest-canopy text-ivory px-8 py-4 rounded-full text-lg font-medium hover:bg-forest-canopy/90 transition-all flex items-center gap-2 group shadow-xl">
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
