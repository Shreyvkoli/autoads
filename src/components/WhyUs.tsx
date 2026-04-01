import { ShieldCheck, TrendingUp, Handshake, BarChart3 } from "lucide-react";
import dashboardMap from "@/assets/dashboard-map.jpg";

const WhyUs = () => {
    const reasons = [
        {
            icon: TrendingUp,
            title: "Hyperlocal Focus",
            description: "Precision targeting across specific Mumbai neighborhoods."
        },
        {
            icon: Handshake,
            title: "Cost-Effective",
            description: "Unmatched ROI compared to traditional static billboards."
        },
        {
            icon: ShieldCheck,
            title: "Simple Onboarding",
            description: "Your campaign live in 48 hours with our 3-step process."
        },
        {
            icon: BarChart3,
            title: "Transparent Data",
            description: "Proof of performance with weekly photo and route reports."
        }
    ];

    return (
        <section className="py-24 bg-[#09090b] relative overflow-hidden border-t border-white/5" id="why-us">
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl mb-6 tracking-wide text-white">WHY <span className="text-primary">US</span></h2>
                    <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed italic">
                        "Engineering the future of street-level visibility and digital interaction."
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="glass-card group text-center p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] transition-all duration-500 hover:-translate-y-2">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:-rotate-3 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                <reason.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-xl md:text-3xl mb-3 md:mb-4 tracking-wide text-white group-hover:text-primary transition-colors">{reason.title}</h3>
                            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium">{reason.description}</p>
                        </div>
                    ))}
                </div>

                {/* Narrative Section with Image */}
                <div className="mt-32 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-[2.5rem] overflow-hidden glass-card hidden lg:block border-primary/20 shadow-[0_0_30px_rgba(251,191,36,0.15)] group">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                            <img
                                src={dashboardMap}
                                alt="Dashboard Results"
                                className="w-full h-[500px] object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                            />
                        </div>

                        <div className="text-left bg-[#111115] backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 shadow-2xl relative">
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none" />

                            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold mb-6 tracking-wide text-xs uppercase shadow-sm">The Synergy</div>
                            <h2 className="font-display text-4xl mb-10 tracking-wide text-white">Visibility + Engagement = <span className="text-primary">Results</span></h2>

                            <div className="space-y-8">
                                <div className="space-y-3">
                                    <h3 className="font-display text-3xl text-primary flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg text-primary">1</span>
                                        Awareness
                                    </h3>
                                    <p className="text-lg text-slate-400 font-medium leading-relaxed pl-11">Auto ads build massive local awareness. Customers see your brand everywhere on the streets.</p>
                                </div>
                                <div className="space-y-3">
                                    <h3 className="font-display text-3xl text-primary flex items-center gap-3">
                                        <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lg text-primary">2</span>
                                        Interest
                                    </h3>
                                    <p className="text-lg text-slate-400 font-medium leading-relaxed pl-11">QR deals capture that interest. Customers scan to unlock value immediately.</p>
                                </div>
                            </div>

                            <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-white/5">
                                <p className="text-xl font-display text-slate-300 leading-normal">
                                    "Customers first notice your brand <span className="text-white drop-shadow-md">outside.</span> <br />
                                    Then discover your offer <span className="text-white drop-shadow-md">inside.</span>"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
