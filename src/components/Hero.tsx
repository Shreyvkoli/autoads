import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, CarFront } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] z-10" />

      {/* Content */}
      <div className="container relative z-20 px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="font-display text-5xl md:text-7xl text-foreground leading-[1.0] mb-6 animate-fade-up tracking-tight">
            ADVERTISE <br />
            <span className="text-primary italic">WHERE THE CITY MOVES.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground/80 mb-10 max-w-xl mx-auto animate-fade-up delay-100 font-medium">
            Dominate the streets with premium Auto Branding and state-of-the-art QR Discovery.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-up delay-200">
          {/* Auto Advertising Card */}
          <div
            onClick={() => navigate("/auto-ads")}
            className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-2xl border border-black/5 hover:border-primary/50 transition-all duration-500 p-8 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-500 shadow-lg">
                <CarFront className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl mb-3 tracking-tight">Auto Advertising</h3>
              <p className="text-muted-foreground/90 text-base mb-8 leading-relaxed">Massive reach across Mumbai's most high-traffic transit corridors.</p>

              <Button size="lg" className="mt-auto w-full h-12 rounded-xl text-lg font-bold group-hover:bg-primary group-hover:scale-[1.02] transition-all duration-300 shadow-primary/20">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* QR Deal Marketing Card */}
          <div
            onClick={() => navigate("/qr-deals")}
            className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-2xl border border-black/5 hover:border-primary/50 transition-all duration-500 p-8 cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-500 shadow-lg">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl mb-3 tracking-tight">QR Deal Marketing</h3>
              <p className="text-muted-foreground/90 text-base mb-8 leading-relaxed">Engagement-first video discovery for the mobile-native generation.</p>

              <Button size="lg" className="mt-auto w-full h-12 rounded-xl text-lg font-bold group-hover:bg-primary group-hover:scale-[1.02] transition-all duration-300 shadow-primary/20">
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
