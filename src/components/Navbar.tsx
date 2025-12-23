import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
    const scrollToContact = () => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.location.href = "/#contact";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-black/5">
            <div className="container px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                        <span className="font-display text-xl text-white">A</span>
                    </div>
                    <span className="font-display text-2xl text-black">AUTOADS</span>
                </Link>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="hidden md:flex" asChild>
                        <Link to="/auto-ads">Auto Ads</Link>
                    </Button>
                    <Button variant="ghost" className="hidden md:flex" asChild>
                        <Link to="/qr-deals">QR Deals</Link>
                    </Button>
                    <Button onClick={scrollToContact}>Contact Us</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
