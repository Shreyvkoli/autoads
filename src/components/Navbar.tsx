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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="container px-4 max-w-[1200px] mx-auto h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="bg-white/50 p-1.5 rounded-lg border border-gray-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <img src="/adzo-logo.png" alt="ADZO" className="h-8 w-auto object-contain" />
                    </div>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <Button variant="ghost" className="text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300" asChild>
                            <Link to="/how-it-works">How It Works</Link>
                        </Button>
                        <Button variant="ghost" className="text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300" asChild>
                            <Link to="/auto-ads">Auto Ads</Link>
                        </Button>
                        <Button variant="ghost" className="text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300" asChild>
                            <Link to="/qr-deals">QR Deals</Link>
                        </Button>
                        <Button variant="ghost" className="text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300" asChild>
                            <Link to="/pricing">Pricing</Link>
                        </Button>
                    </div>

                    <Button onClick={scrollToContact} size="sm" className="hidden md:flex h-10 px-6 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 bg-blue-600 text-white hover:bg-blue-700 transition-all hover:-translate-y-0.5">
                        Contact Us
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden p-2 text-slate-700" onClick={() => setIsOpen(true)}>
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] bg-white h-screen w-screen flex flex-col p-6 animate-in slide-in-from-right duration-300">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center gap-3">
                            <div className="bg-white p-1.5 rounded-lg border border-gray-100 shadow-sm">
                                <img src="/adzo-logo.png" alt="ADZO" className="h-8 w-auto object-contain" />
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-700 hover:bg-slate-200 transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6 text-center mt-4">
                        <Link to="/" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-slate-800 hover:text-blue-600 transition-colors">Home</Link>
                        <Link to="/how-it-works" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-slate-800 hover:text-blue-600 transition-colors">How It Works</Link>
                        <Link to="/auto-ads" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-slate-800 hover:text-blue-600 transition-colors">Auto Ads</Link>
                        <Link to="/qr-deals" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-slate-800 hover:text-blue-600 transition-colors">QR Deals</Link>
                        <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-2xl font-display font-medium text-slate-800 hover:text-blue-600 transition-colors">Pricing</Link>

                        <div className="h-px bg-slate-100 w-full my-4" />

                        <Button onClick={() => { scrollToContact(); setIsOpen(false); }} className="w-full h-14 rounded-xl text-lg font-bold shadow-lg shadow-blue-500/20 bg-blue-600 text-white hover:bg-blue-700">
                            Contact Us
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
