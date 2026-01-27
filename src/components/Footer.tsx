import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-20" id="contact">
      <div className="container px-4 max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 w-fit overflow-hidden">
                <img src="/adzo-logo.png" alt="ADZO" className="h-10 w-auto object-contain" />
              </div>
            </div>
            <p className="text-slate-600 mb-8 text-base leading-relaxed">
              Hyperlocal advertising solutions for modern brands in Mumbai.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="font-display text-xl text-slate-900 mb-8 tracking-wide">About</h4>
            <ul className="space-y-4">
              <li><Link to="/our-story" className="text-slate-500 hover:text-blue-600 transition-colors text-base font-medium">Our Story</Link></li>
              <li><Link to="/careers" className="text-slate-500 hover:text-blue-600 transition-colors text-base font-medium">Careers</Link></li>
              <li><Link to="/privacy-policy" className="text-slate-500 hover:text-blue-600 transition-colors text-base font-medium">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-slate-900 mb-8 tracking-wide">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 text-slate-500 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <MapPin className="w-4 h-4 text-blue-600" />
                </div>
                <span className="mt-1 font-medium group-hover:text-slate-900 transition-colors">Mumbai, Maharashtra</span>
              </li>
              <li className="flex items-center gap-4 text-slate-500 group">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Mail className="w-4 h-4 text-blue-600" />
                </div>
                <a href="mailto:adzo.co.team@gmail.com" className="hover:text-blue-600 transition-colors font-medium">adzo.co.team@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display text-xl text-slate-900 mb-8 tracking-wide">Contact Us Anytime</h4>
            <div className="flex flex-col gap-3 mb-4">
              <a href="https://api.whatsapp.com/send?phone=917977568891" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white hover:bg-green-50 border border-slate-200 hover:border-green-200 p-4 rounded-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-md cursor-pointer">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 group-hover:text-green-700 transition-colors">+91 79775 68891</p>
                </div>
              </a>

              <a href="https://api.whatsapp.com/send?phone=918450912498" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-white hover:bg-green-50 border border-slate-200 hover:border-green-200 p-4 rounded-xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-md cursor-pointer">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 group-hover:text-green-700 transition-colors">+91 84509 12498</p>
                </div>
              </a>
            </div>
            <p className="text-sm text-slate-400 font-medium">
              Response time: Usually within 1 hour
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            © {currentYear} ADZO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
