import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, MapPin, Timer, Ban, Coins } from "lucide-react";
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
            <span className="text-black">ADVERTISE</span> <br />
            <span className="text-gradient font-bold italic">WHERE THE CITY MOVES.</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Dominate the streets with premium <span className="text-black font-medium">Auto Branding</span> and state-of-the-art <span className="text-black font-medium">QR Discovery</span>.
          </p>

          {/* Stats Grid - HowItWorks Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 px-4 md:px-0">
            {[
              {
                icon: <Timer className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                title: "20+ Mins",
                subtitle: "Dwell Time",
                desc: "Passengers are stuck in traffic with nothing to do but read your ad.",
                color: "bg-blue-500",
                shadow: "shadow-blue-500/20",
                border: "border-blue-200"
              },
              {
                icon: <Ban className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                title: "No Skip",
                subtitle: "Forced View",
                desc: "Unlike scrolling past ads online, a physical banner cannot be skipped or blocked.",
                color: "bg-rose-500",
                shadow: "shadow-rose-500/20",
                border: "border-rose-200"
              },
              {
                icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                title: "Hyperlocal",
                subtitle: "Precision Targeting",
                desc: "Target the exact 5km radius where your actual customers live and shop.",
                color: "bg-purple-500",
                shadow: "shadow-purple-500/20",
                border: "border-purple-200"
              },
              {
                icon: <Coins className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                title: "1/10th Cost",
                subtitle: "Massive ROI",
                desc: "Get city-wide visibility for the price of a single billboard.",
                color: "bg-emerald-500",
                shadow: "shadow-emerald-500/20",
                border: "border-emerald-200"
              }
            ].map((item, i) => (
              <div key={i} className={`bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border ${item.border} relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left`}>
                <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 ${item.color} opacity-5 rounded-full blur-3xl -mr-6 -mt-6 md:-mr-10 md:-mt-10 group-hover:opacity-10 transition-opacity`} />

                <div className={`${item.color} w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>

                <h3 className="text-xl md:text-3xl font-display text-foreground mb-1">{item.title}</h3>
                <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider mb-2 md:mb-3">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
