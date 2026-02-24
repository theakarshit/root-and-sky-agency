import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rootDraw = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);
    const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section id="philosophy" ref={containerRef} className="relative py-32 bg-ivory overflow-hidden border-b border-charcoal/10">
            {/* Background SVG Root Animation */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <svg viewBox="0 0 500 1000" className="w-full h-full text-forest-canopy">
                    <motion.path
                        d="M 250 0 C 250 200, 450 300, 450 500 C 450 700, 100 800, 100 1000 M 250 0 C 250 300, 50 400, 50 700 C 50 900, 200 950, 200 1000"
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{ pathLength: rootDraw }}
                    />
                </svg>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text */}
                    <div className="pr-0 md:pr-12">
                        <h2 className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">The Rooted Philosophy</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight mb-8">
                            Elevating Chandigarh's outdoor living, one terrace at a time.
                        </h3>
                        <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                            We believe that true luxury lies in connection with nature. In the heart of the Tricity, amidst concrete and chaos, we carve out breathing spaces.
                        </p>
                        <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                            We are not just a nursery selling pots and soil. Root & Sky is an end-to-end design studio dedicated to building private, weather-proof, and breathtaking sanctuaries. From structural load-bearing analysis to curating exotic biophilic walls, we handle the science so you can enjoy the serenity.
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4"
                        >
                            <div className="w-12 h-12 rounded-full border border-forest-canopy flex items-center justify-center text-forest-canopy">
                                <span className="font-serif italic text-xl">R</span>
                            </div>
                            <div className="text-sm font-medium uppercase tracking-wide">Root & Sky Founders</div>
                        </motion.div>
                    </div>

                    {/* Right Images (Staggered Grid) */}
                    <motion.div style={{ y: yParallax }} className="grid grid-cols-2 gap-6 h-[600px] relative mt-12 lg:mt-0">
                        <div className="col-span-1 space-y-6 translate-y-12">
                            <img
                                src="/wpc_decking_detail.jpeg"
                                alt="WPC Decking Detail"
                                className="w-full h-64 object-cover rounded-sm"
                            />
                            <img
                                src="/biophilic_vertical_wall.jpeg"
                                alt="Biophilic Design"
                                className="w-full h-80 object-cover rounded-sm"
                            />
                        </div>
                        <div className="col-span-1 space-y-6">
                            <img
                                src="/pergola_lighting.jpeg"
                                alt="Pergola Lighting"
                                className="w-full h-80 object-cover rounded-sm"
                            />
                            <img
                                src="/minimalist_terrace_decor.jpeg"
                                alt="Minimalist Design"
                                className="w-full h-64 object-cover rounded-sm"
                            />
                        </div>

                        {/* Minimalist leaf overlay */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-ivory rounded-full flex items-center justify-center border border-charcoal/10 shadow-xl hidden md:flex">
                            <span className="font-serif italic text-4xl text-forest-canopy">Oasis</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
