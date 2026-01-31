import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Professional Abstract Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/4" />

      {/* Content */}
      <div className="container relative z-20 px-4 max-w-[1200px] mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-display text-5xl md:text-8xl leading-[0.9] mb-8 tracking-tight">
            <span className="text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">ADVERTISE</span> <br />
            <span className="text-gradient font-bold italic">WHERE THE CITY MOVES.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Dominate the streets with premium <span className="text-white font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Auto Branding</span> and state-of-the-art <span className="text-white font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">QR Discovery</span>.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-up delay-200">
          {/* Auto Advertising Card - Solid White */}
          <div
            onClick={() => navigate("/auto-ads")}
            className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 p-10 cursor-pointer flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="relative z-10 w-full flex flex-col items-center h-full">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500 border border-blue-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300"
                >
                  <circle cx="7" cy="17" r="3" />
                  <circle cx="17" cy="17" r="3" />
                  <path d="M10 17h4" />
                  <path d="M20 17h2" />
                  <path d="M2 17h2" />
                  <path d="M14 17V8a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v9" />
                  <path d="M14 8h3l3 5v4" />
                  <path d="M14 8v9" />
                </svg>
              </div>

              <h3 className="font-display text-4xl mb-4 tracking-wide text-slate-900 group-hover:text-blue-700 transition-colors duration-300">Auto Advertising</h3>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-sm">
                Massive reach across Mumbai's most high-traffic transit corridors.
              </p>

              <Button size="lg" className="mt-auto w-full h-14 rounded-xl text-lg font-semibold bg-slate-900 text-white shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* QR Deal Marketing Card - Solid White */}
          <div
            onClick={() => navigate("/qr-deals")}
            className="group relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 p-10 cursor-pointer flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className="relative z-10 w-full flex flex-col items-center h-full">
              <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:scale-110 transition-all duration-500 border border-indigo-100">
                <Smartphone className="w-10 h-10 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-display text-4xl mb-4 tracking-wide text-slate-900 group-hover:text-indigo-700 transition-colors duration-300">QR Deal Marketing</h3>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-sm">
                Engagement-first video discovery for the mobile-native generation.
              </p>

              <Button size="lg" className="mt-auto w-full h-14 rounded-xl text-lg font-semibold bg-slate-900 text-white shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300">
                View Deals <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
