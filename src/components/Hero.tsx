import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-charcoal">
            {/* Background Image/Video Placeholder */}
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

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-pale-sage uppercase tracking-widest text-sm mb-6 font-semibold"
                >
                    Outdoor Living & Biophilic Design Studio
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl text-ivory font-serif leading-tight mb-8"
                >
                    We build private sanctuaries out of thin air.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <button className="bg-forest-canopy text-ivory px-8 py-4 rounded-full text-lg font-medium hover:bg-forest-canopy/90 transition-all flex items-center gap-2 group">
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
