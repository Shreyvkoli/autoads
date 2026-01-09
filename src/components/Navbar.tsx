import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Megaphone } from "lucide-react";

const Navbar = () => {
    const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.location.href = "/#contact";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm">
            <div className="container px-4 max-w-[1200px] mx-auto h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <Megaphone className="w-5 h-5 text-white transform -rotate-12" />
                    </div>
                    <span className="font-display text-3xl text-foreground tracking-wide">ADZO</span>
                </Link>

                <div className="flex items-center gap-6">
                    <Button variant="ghost" className="hidden md:flex text-base font-medium text-muted-foreground hover:text-primary hover:bg-transparent transition-colors" asChild>
                        <Link to="/auto-ads">Auto Ads</Link>
                    </Button>
                    <Button variant="ghost" className="hidden md:flex text-base font-medium text-muted-foreground hover:text-primary hover:bg-transparent transition-colors" asChild>
                        <Link to="/qr-deals">QR Deals</Link>
                    </Button>
                    <Button onClick={scrollToContact} className="h-11 px-6 rounded-xl font-bold text-base shadow-button hover:bg-primary/90 transition-all hover:-translate-y-0.5">
                        Contact Us
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
