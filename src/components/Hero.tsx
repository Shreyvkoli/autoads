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
      <div className="container relative z-20 px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="font-display text-7xl md:text-9xl text-foreground leading-[0.85] mb-8 animate-fade-up tracking-tighter">
            ADVERTISE <br />
            <span className="text-primary italic">WHERE THE CITY MOVES.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-up delay-100 font-medium">
            Dominate the streets with premium Auto Branding and state-of-the-art QR Discovery.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-up delay-200">
          {/* Auto Advertising Card */}
          <div
            onClick={() => navigate("/auto-ads")}
            className="group relative overflow-hidden rounded-[2rem] bg-white/80 backdrop-blur-2xl border border-black/5 hover:border-primary/50 transition-all duration-700 p-10 cursor-pointer shadow-card hover:shadow-card-hover hover:-translate-y-3"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <div className="w-24 h-24 bg-primary/15 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-700 shadow-2xl">
                <CarFront className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-5xl mb-4 tracking-tight">Auto Advertising</h3>
              <p className="text-muted-foreground/90 text-lg mb-12 leading-relaxed">Massive reach across Mumbai's most high-traffic transit corridors.</p>

              <Button size="lg" className="mt-auto w-full h-16 rounded-2xl text-xl font-bold group-hover:bg-primary group-hover:scale-[1.03] transition-all duration-500 shadow-primary/20">
                Explore Solutions <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* QR Deal Marketing Card */}
          <div
            onClick={() => navigate("/qr-deals")}
            className="group relative overflow-hidden rounded-[2rem] bg-white/80 backdrop-blur-2xl border border-black/5 hover:border-primary/50 transition-all duration-700 p-10 cursor-pointer shadow-card hover:shadow-card-hover hover:-translate-y-3"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="relative z-10 flex flex-col items-center text-center h-full">
              <div className="w-24 h-24 bg-primary/15 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-primary/25 transition-all duration-700 shadow-2xl">
                <Smartphone className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-display text-5xl mb-4 tracking-tight">QR Deal Marketing</h3>
              <p className="text-muted-foreground/90 text-lg mb-12 leading-relaxed">Engagement-first video discovery for the mobile-native generation.</p>

              <Button size="lg" className="mt-auto w-full h-16 rounded-2xl text-xl font-bold group-hover:bg-primary group-hover:scale-[1.03] transition-all duration-500 shadow-primary/20">
                View Deals <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
