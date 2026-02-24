import { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-ivory/80 backdrop-blur-md py-4 border-b border-charcoal/10' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="/" className="flex items-center gap-2 group">
                    <motion.div
                        whileHover={{ rotate: 15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <Leaf className={`w-6 h-6 ${scrolled ? 'text-forest-canopy' : 'text-ivory'}`} />
                    </motion.div>
                    <span className={`font-serif text-2xl font-bold tracking-tight ${scrolled ? 'text-charcoal' : 'text-ivory'}`}>
                        Root & Sky
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-6">
                        {['Services', 'Philosophy', 'Portfolio'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`text-sm tracking-wide uppercase transition-colors hover:text-terracotta ${scrolled ? 'text-charcoal/70' : 'text-ivory/80'
                                    }`}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                    <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105 ${scrolled ? 'bg-forest-canopy text-ivory hover:bg-forest-canopy/90' : 'bg-ivory text-forest-canopy hover:bg-white'
                        }`}>
                        Book Consultation
                    </button>
                </div>
            </div>
        </header>
    );
}
