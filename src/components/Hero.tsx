import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10" />

      {/* Content */}
      <div className="container relative z-20 px-4 py-16 md:py-24 max-w-[1200px] mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1.0] mb-8 animate-fade-up tracking-normal">
            ADVERTISE <br />
            <span className="text-primary italic">WHERE THE CITY MOVES.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl mx-auto animate-fade-up delay-100 font-medium leading-relaxed">
            Dominate the streets with premium Auto Branding and state-of-the-art QR Discovery.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-up delay-200">
          {/* Auto Advertising Card */}
          <div
            onClick={() => navigate("/auto-ads")}
            className="group relative overflow-hidden rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/40 shadow-card hover:shadow-card-hover transition-all duration-500 p-10 cursor-pointer flex flex-col items-center text-center hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 w-full flex flex-col items-center h-full">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all duration-500 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-10 h-10 text-primary"
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

              <h3 className="font-display text-3xl mb-4 tracking-wide text-foreground">Auto Advertising</h3>
              <p className="text-muted-foreground text-base mb-10 leading-relaxed max-w-sm">
                Massive reach across Mumbai's most high-traffic transit corridors.
              </p>

              <Button size="lg" className="mt-auto w-full h-14 rounded-xl text-lg font-bold bg-primary text-white shadow-button hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* QR Deal Marketing Card */}
          <div
            onClick={() => navigate("/qr-deals")}
            className="group relative overflow-hidden rounded-[2rem] bg-white/80 backdrop-blur-xl border border-white/40 shadow-card hover:shadow-card-hover transition-all duration-500 p-10 cursor-pointer flex flex-col items-center text-center hover:-translate-y-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 w-full flex flex-col items-center h-full">
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-all duration-500 shadow-sm">
                <Smartphone className="w-10 h-10 text-primary" />
              </div>

              <h3 className="font-display text-3xl mb-4 tracking-wide text-foreground">QR Deal Marketing</h3>
              <p className="text-muted-foreground text-base mb-10 leading-relaxed max-w-sm">
                Engagement-first video discovery for the mobile-native generation.
              </p>

              <Button size="lg" className="mt-auto w-full h-14 rounded-xl text-lg font-bold bg-primary text-white shadow-button hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300">
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
