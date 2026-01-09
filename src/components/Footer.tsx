import { MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-16" id="contact">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-display text-xl text-primary-foreground">A</span>
              </div>
              <span className="font-display text-2xl text-secondary-foreground">AUTOADS</span>
            </div>
            <p className="text-secondary-foreground/70 mb-6">
              Hyperlocal advertising solutions for modern brands in Mumbai.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-xl text-secondary-foreground mb-6">About</h4>
            <ul className="space-y-3">
              <li><Link to="/our-story" className="text-secondary-foreground/70 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/careers" className="text-secondary-foreground/70 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-secondary-foreground/70 hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-secondary-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 shrink-0 text-primary" />
                <span>Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-3 text-secondary-foreground/70">
                <Mail className="w-5 h-5 shrink-0 text-primary" />
                <a href="mailto:hello@autoads.in" className="hover:text-primary transition-colors">hello@autoads.in</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-xl text-secondary-foreground mb-6">Get Started</h4>
            <Button className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2 mb-4">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </Button>
            <p className="text-sm text-secondary-foreground/50">
              Response time: Usually within 1 hour
            </p>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary-foreground/50 text-sm">
            © {currentYear} AutoAds. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
