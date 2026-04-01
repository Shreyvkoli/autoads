import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Timer, Ban, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import heroAuto from "@/assets/hero-auto.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-28 pb-20 bg-[#09090b]">
      {/* Original Animated Bubble Effect Component (Yellow Theme) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <BackgroundGradientAnimation
          gradientBackgroundStart="rgb(9, 9, 11)"
          gradientBackgroundEnd="rgb(9, 9, 11)"
          firstColor="251, 191, 36"
          secondColor="217, 119, 6"
          thirdColor="251, 191, 36"
          fourthColor="202, 138, 4"
          fifthColor="253, 224, 71"
          pointerColor="251, 191, 36"
          size="100%"
          blendingValue="screen"
          interactive={false}
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 lg:mb-24">

          {/* Left Text Column */}
          <div className="text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold text-sm mb-6 lg:mb-8 tracking-wide uppercase shadow-[0_0_15px_rgba(251,191,36,0.15)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Premium Hyperlocal Advertising
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] md:leading-[0.85] mb-6 tracking-tight text-white drop-shadow-lg">
              DOMINATE THE <br />
              <span className="text-gradient font-bold italic">STREETS.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 lg:mb-10 max-w-lg font-light leading-relaxed">
              Capture your city's attention with <strong className="text-white font-medium">Auto Branding</strong> and state-of-the-art <strong className="text-white font-medium">QR Discovery</strong>. Unbeatable ROI, targeted precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate("/auto-ads")}
                size="lg"
                className="h-14 px-8 rounded-xl text-lg font-bold bg-primary text-primary-foreground shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] hover:bg-primary/90 transition-all hover:-translate-y-1"
              >
                Start Campaign <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => navigate("/how-it-works")}
                variant="outline"
                size="lg"
                className="h-14 px-8 rounded-xl text-lg font-semibold border-white/20 text-white hover:bg-white/10 transition-all hover:-translate-y-1 backdrop-blur-sm bg-white/5"
              >
                How It Works
              </Button>
            </div>
          </div>

          {/* Right Image/Visual Column */}
          <div className="relative animate-fade-in delay-200 block mt-12 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl glass-card group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

              <video
                src="/IMG_7614.MP4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] md:h-[550px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 glass-card bg-black/60 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/10 flex items-center gap-3 md:gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-white font-display text-2xl tracking-wide">Top Visibility</p>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">Hyperlocal Targeting</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-1 border border-primary/20 rounded-[2rem] -z-10 blur-[2px]" />
          </div>
        </div>

        {/* Stats Grid - Dark Premium Style */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 animate-fade-up delay-300 mt-6 md:mt-0">
          {[
            {
              icon: <Timer className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
              title: "20+ Mins",
              subtitle: "Dwell Time",
              desc: "Unavoidable visibility stuck in traffic.",
            },
            {
              icon: <Ban className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
              title: "No Skip",
              subtitle: "Forced View",
              desc: "Physical banners cannot be skipped.",
            },
            {
              icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
              title: "Hyperlocal",
              subtitle: "Precision Targeting",
              desc: "Target the exact 5km radius of your customers.",
            },
            {
              icon: <Coins className="w-6 h-6 md:w-8 md:h-8 text-primary" />,
              title: "1/10th Cost",
              subtitle: "Massive ROI",
              desc: "City-wide visibility for less.",
            }
          ].map((item, i) => (
            <div key={i} className="glass-card hover:-translate-y-2 p-4 sm:p-5 md:p-8 rounded-[1.2rem] md:rounded-3xl group">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-6 group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_15px_rgba(251,191,36,0.2)] group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display text-white mb-1.5 md:mb-2 group-hover:text-primary transition-colors leading-tight">{item.title}</h3>
              <p className="text-[10px] sm:text-xs font-bold text-primary tracking-wider uppercase mb-2 md:mb-3">{item.subtitle}</p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium leading-snug md:leading-relaxed line-clamp-2 md:line-clamp-none">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
