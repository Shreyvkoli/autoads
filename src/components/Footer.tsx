import { MessageCircle, Mail, MapPin, Megaphone, Phone } from "lucide-react";
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
              <div className="bg-gradient-to-br from-gray-900 to-black p-4 rounded-xl shadow-lg border border-white/10 w-fit overflow-hidden">
                <img src="/adzo-logo.png" alt="ADZO" className="h-12 w-auto object-contain" />
              </div>
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
                <a href="mailto:adzo.co.team@gmail.com" className="hover:text-primary transition-colors font-medium">adzo.co.team@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-xl text-foreground mb-8 tracking-wide">Contact Us Anytime</h4>
            <div className="flex flex-col gap-3 mb-4">
              <a href="https://api.whatsapp.com/send?phone=917977568891" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 p-4 rounded-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <div className="w-10 h-10 bg-[#25D366]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-[#25D366] transition-colors">+91 79775 68891</p>
                </div>
              </a>

              <a href="https://api.whatsapp.com/send?phone=918450912498" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 p-4 rounded-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                <div className="w-10 h-10 bg-[#25D366]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <p className="font-bold text-foreground group-hover:text-[#25D366] transition-colors">+91 84509 12498</p>
                </div>
              </a>
            </div>
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
