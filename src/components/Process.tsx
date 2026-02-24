import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
    {
        title: 'Consultation & Site Analysis',
        description: 'We assess the structural load-bearing capacity, sunlight direction, and architectural style of your home.',
    },
    {
        title: '3D Blueprint & Costing',
        description: 'A hyper-realistic render of your future sanctuary, along with an exact turnkey quotation.',
    },
    {
        title: 'The Clean Build',
        description: 'Our trained contractors execute the vision seamlessly, ensuring zero civil mess for your family.',
    },
    {
        title: 'Handover & Growth',
        description: 'The final reveal of your outdoor lounge, followed immediately by our Root & Sky Care maintenance.',
    }
];

export default function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const trunkGrow = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <section id="process" ref={containerRef} className="py-32 bg-ivory relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-24">
                <h2 className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">The Setup Guide</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-charcoal">From Concept to Canopy</h3>
            </div>

            <div className="relative max-w-4xl mx-auto px-6">
                {/* The Growing Trunk SVG */}
                <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-2 bg-charcoal/5">
                    <motion.div
                        className="w-full bg-forest-canopy origin-top"
                        style={{ scaleY: trunkGrow }}
                    />
                </div>

                <div className="space-y-24">
                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                key={index}
                                className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Branch Circle Node */}
                                <div className={`absolute left-[16px] md:left-1/2 w-4 h-4 rounded-full border-4 border-ivory bg-terracotta z-20 md:-translate-x-1/2 transition-transform duration-500 delay-300 shadow-md ${index === 3 ? 'bg-forest-canopy w-6 h-6' : ''}`} />

                                {/* Content */}
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                                    <div className="bg-white p-8 border border-charcoal/5 shadow-sm">
                                        <span className="text-forest-canopy font-serif italic text-2xl opacity-50 mb-4 block">0{index + 1}</span>
                                        <h4 className="text-2xl font-serif text-charcoal mb-4">{step.title}</h4>
                                        <p className="text-charcoal/70 leading-relaxed text-lg">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
