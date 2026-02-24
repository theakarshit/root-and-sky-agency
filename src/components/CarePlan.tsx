import { motion } from 'framer-motion';

export default function CarePlan() {
    return (
        <section className="relative py-32 bg-pale-sage overflow-hidden text-charcoal">
            {/* Falling Leaves Animation (CSS based concept) */}
            <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -100, x: Math.random() * window.innerWidth, rotate: 0 }}
                        animate={{
                            y: window.innerHeight + 100,
                            x: `calc(${Math.random() * 100}vw)`,
                            rotate: 360
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                        className="absolute w-8 h-8 rounded-tr-full rounded-bl-full bg-forest-canopy/30"
                        style={{ left: `${Math.random() * 100}%` }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm uppercase tracking-widest text-forest-canopy font-semibold mb-4">Peace of Mind</h2>
                    <h3 className="text-4xl md:text-6xl font-serif text-charcoal mb-8">
                        The Root & Sky Care Plan
                    </h3>
                    <p className="text-xl text-charcoal/80 mb-12 leading-relaxed">
                        Your beautiful space requires expert hands to thrive. Our premium Annual Maintenance Contract ensures your sanctuary remains pristine, week after week. From structural pruning and organic fertilizing to seasonal replanting, we take care of the soil so you can command the sky.
                    </p>

                    <button className="bg-charcoal text-ivory px-8 py-4 rounded-full text-lg font-medium hover:bg-charcoal/90 transition-all">
                        Explore Maintenance Plans
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
