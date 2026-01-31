import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
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

                <div className="flex items-center gap-6">
                    <Button variant="ghost" className="hidden md:flex text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300" asChild>
                        <Link to="/how-it-works">How It Works</Link>
                    </Button>
                    <Button variant="ghost" className="hidden md:flex text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300" asChild>
                        <Link to="/auto-ads">Auto Ads</Link>
                    </Button>
                    <Button variant="ghost" className="hidden md:flex text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300" asChild>
                        <Link to="/qr-deals">QR Deals</Link>
                    </Button>
                    <Button variant="ghost" className="hidden md:flex text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300" asChild>
                        <Link to="/pricing">Pricing</Link>
                    </Button>
                    <Button onClick={scrollToContact} size="sm" className="h-10 px-6 rounded-full font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-blue-600/40 bg-blue-600 text-white hover:bg-blue-700 transition-all hover:-translate-y-0.5">
                        Contact Us
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
