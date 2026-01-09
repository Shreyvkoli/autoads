import { MessageCircle, Mail, MapPin, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/40 border-t border-white/20 py-20" id="contact">
      <div className="container px-4 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <Megaphone className="w-6 h-6 text-white transform -rotate-12" />
              </div>
              <span className="font-display text-3xl text-foreground tracking-wide">ADZO</span>
            </div>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed">
              Hyperlocal advertising solutions for modern brands in Mumbai.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-8 tracking-wide">About</h4>
            <ul className="space-y-4">
              <li><Link to="/our-story" className="text-muted-foreground hover:text-primary transition-colors text-base font-medium">Our Story</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-primary transition-colors text-base font-medium">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-base font-medium">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-8 tracking-wide">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-muted-foreground group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="mt-1 font-medium">Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:hello@adzo.in" className="hover:text-primary transition-colors font-medium">hello@adzo.in</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-8 tracking-wide">Get Started</h4>
            <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 mb-4 h-12 rounded-xl text-base font-bold shadow-button hover:-translate-y-1 transition-all duration-300">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </Button>
            <p className="text-sm text-muted-foreground font-medium">
              Response time: Usually within 1 hour
            </p>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm font-medium">
            © {currentYear} ADZO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
