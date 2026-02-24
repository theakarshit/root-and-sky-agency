import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: 'The Sky Lounge',
        description: 'Focusing on vast terraces, WPC decking, automated pergolas, and vertical living walls to turn rooftops into private resorts.',
        image: '/sky_lounge_terrace.jpeg',
    },
    {
        title: 'The Balcony Oasis',
        description: 'Designed for luxury high-rise apartments. We maximize vertical space with custom planters, ambient lighting, and elegant seating.',
        image: '/balcony_oasis.jpeg',
    },
    {
        title: 'The Grounded Estate',
        description: 'Transforming sprawling villa lawns with natural stone pathways, exotic koi ponds, and smart drip-irrigation systems.',
        image: '/grounded_estate.jpeg',
    }
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-ivory">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm uppercase tracking-widest text-terracotta font-semibold mb-4">Core Offerings</h2>
                        <h3 className="text-4xl md:text-5xl font-serif text-charcoal">Architectural Landscapes</h3>
                    </div>
                    <p className="text-charcoal/60 max-w-sm">
                        We don't offer generic gardening services. Every project is a bespoke architectural transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            key={index}
                            className="group relative bg-white border border-charcoal/10 overflow-hidden"
                        >
                            {/* Animated SVG Border on Hover */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
                                <motion.rect
                                    x="0" y="0" width="100%" height="100%"
                                    fill="none"
                                    stroke="#2A3B2C"
                                    strokeWidth="4"
                                    strokeDasharray="0 4000"
                                    className="transition-all duration-700 ease-out group-hover:stroke-dasharray-[4000_0]"
                                />
                            </svg>

                            <div className="h-80 overflow-hidden relative">
                                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8 relative z-10 bg-white">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-2xl font-serif text-charcoal">{service.title}</h4>
                                    <div className="w-10 h-10 rounded-full border border-charcoal/20 flex items-center justify-center group-hover:bg-forest-canopy group-hover:text-ivory group-hover:border-forest-canopy transition-all">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                                <p className="text-charcoal/70 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
