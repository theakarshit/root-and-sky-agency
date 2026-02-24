import { Leaf } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-charcoal text-ivory pt-32 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Huge CTA Block */}
                <div className="text-center max-w-4xl mx-auto mb-32 border-b border-ivory/10 pb-32">
                    <h2 className="text-5xl md:text-7xl font-serif mb-8 text-pale-sage">Ready to elevate your home?</h2>
                    <p className="text-xl text-ivory/70 mb-12 max-w-2xl mx-auto">
                        Schedule a high-end design consultation today and let us build your personal sanctuary.
                        <span className="block mt-2 text-sm italic opacity-50 text-terracotta">(Consultation fee: ₹2,500 - fully adjustable against final build)</span>
                    </p>
                    <button className="bg-ivory text-charcoal px-10 py-5 rounded-full text-xl font-medium hover:bg-pale-sage transition-all block mx-auto">
                        Schedule Consultation
                    </button>
                </div>

                {/* Links */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-ivory/10 pb-16">
                    <div className="col-span-1 md:col-span-2">
                        <a href="/" className="flex items-center gap-2 mb-6 text-pale-sage">
                            <Leaf className="w-8 h-8" />
                            <span className="font-serif text-3xl font-bold tracking-tight">Root & Sky</span>
                        </a>
                        <p className="text-ivory/50 max-w-xs">An exclusive Outdoor Living & Biophilic Design Studio based in Chandigarh.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold uppercase tracking-widest text-sm mb-6 text-ivory/80">Links</h4>
                        <ul className="space-y-4 text-ivory/50">
                            <li><a href="#services" className="hover:text-terracotta transition-colors">Services</a></li>
                            <li><a href="#philosophy" className="hover:text-terracotta transition-colors">Philosophy</a></li>
                            <li><a href="#portfolio" className="hover:text-terracotta transition-colors">Portfolio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold uppercase tracking-widest text-sm mb-6 text-ivory/80">Legal</h4>
                        <ul className="space-y-4 text-ivory/50">
                            <li><a href="/privacy" className="hover:text-terracotta transition-colors">Privacy Policy</a></li>
                            <li><a href="/terms" className="hover:text-terracotta transition-colors">Terms of Service</a></li>
                            <li><a href="/contact" className="hover:text-terracotta transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-ivory/40 pb-8">
                    <p>&copy; {new Date().getFullYear()} Root & Sky. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Designed for the Tricity.</p>
                </div>

            </div>

            {/* Decorative Grass Silhouette */}
            <div className="absolute bottom-0 left-0 w-full h-24 opacity-5 pointer-events-none flex text-terracotta overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <svg key={i} viewBox="0 0 100 100" className="w-16 h-24 flex-shrink-0 -ml-4">
                        <path d="M50 100 Q 60 50 80 0 Q 55 50 45 100" fill="currentColor" />
                        <path d="M50 100 Q 40 60 20 20 Q 45 70 48 100" fill="currentColor" />
                    </svg>
                ))}
            </div>
        </footer>
    );
}
