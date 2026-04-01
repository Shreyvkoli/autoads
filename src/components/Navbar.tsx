import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.location.href = "/#contact";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/10 shadow-sm transition-all duration-300">
            <div className="container px-4 max-w-[1200px] mx-auto h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="group-hover:scale-105 transition-transform duration-300">
                        <img src="/adzo-logo.png" alt="ADZO" className="h-10 w-auto object-contain" />
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Button variant="ghost" className="text-sm font-medium text-slate-300 hover:text-primary hover:bg-primary/10 transition-all duration-300" asChild>
                            <Link to="/how-it-works">How It Works</Link>
                        </Button>
                        <Button variant="ghost" className="text-sm font-medium text-slate-300 hover:text-primary hover:bg-primary/10 transition-all duration-300" asChild>
                            <Link to="/auto-ads">Auto Ads</Link>
                        </Button>
                        <Button variant="ghost" className="text-sm font-medium text-slate-300 hover:text-primary hover:bg-primary/10 transition-all duration-300" asChild>
                            <Link to="/qr-deals">QR Deals</Link>
                        </Button>
                    </div>

                    <Button onClick={scrollToContact} size="sm" className="hidden md:flex h-10 px-6 rounded-full font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:-translate-y-0.5">
                        Contact Us
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-slate-300 hover:text-primary transition-colors" onClick={() => setIsOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-[#0A0A0A] h-screen w-screen flex flex-col p-6 animate-in slide-in-from-right duration-300">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center gap-3">
                            <div>
                                <img src="/adzo-logo.png" alt="ADZO" className="h-10 w-auto object-contain" />
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-2 bg-white/5 rounded-full text-slate-300 hover:bg-white/10 hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-center mt-4">
                        <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-white hover:text-primary transition-colors">Home</Link>
                        <Link to="/how-it-works" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-white hover:text-primary transition-colors">How It Works</Link>
                        <Link to="/auto-ads" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-white hover:text-primary transition-colors">Auto Ads</Link>
                        <Link to="/qr-deals" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-white hover:text-primary transition-colors">QR Deals</Link>

                        <div className="h-px bg-white/10 w-full my-4" />

                        <Button onClick={() => { scrollToContact(); setIsOpen(false); }} className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 bg-primary text-primary-foreground hover:bg-primary/90">
                            Contact Us
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
