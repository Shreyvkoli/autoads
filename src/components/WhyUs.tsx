import { ShieldCheck, TrendingUp, Handshake, BarChart3 } from "lucide-react";

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
        <section className="py-20 bg-transparent relative overflow-hidden" id="why-us">
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-6xl mb-6 tracking-tight">WHY US</h2>
                    <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-medium leading-relaxed italic">
                        "Engineering the future of street-level visibility and digital interaction."
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="group text-center p-8 rounded-3xl bg-white border border-black/5 hover:border-primary/30 hover:bg-slate-50 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/10 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                                <reason.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-2xl mb-4 tracking-tight">{reason.title}</h3>
                            <p className="text-muted-foreground text-base leading-relaxed font-medium">{reason.description}</p>
                        </div>
                    ))}
                </div>

                {/* Narrative Section */}
                <div className="mt-24 max-w-4xl mx-auto text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-4 tracking-wide text-xs uppercase">The Synergy</div>
                    <h2 className="font-display text-3xl md:text-5xl mb-6 tracking-tight">Visibility + Engagement = Results</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left bg-slate-50 rounded-3xl p-8 border border-black/5">
                        <div className="space-y-3">
                            <h3 className="font-display text-2xl text-primary">1. Awareness</h3>
                            <p className="text-lg text-muted-foreground font-medium leading-relaxed">Auto ads build massive local awareness. Customers see your brand everywhere on the streets.</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-display text-2xl text-primary">2. Interest</h3>
                            <p className="text-lg text-muted-foreground font-medium leading-relaxed">QR deals capture that interest. Customers scan to unlock value immediately.</p>
                        </div>
                    </div>
                    <p className="mt-8 text-xl md:text-2xl font-display text-muted-foreground/80 leading-tight">
                        "Customers first notice your brand <span className="text-foreground">outside.</span> <br />
                        Then discover your offer <span className="text-foreground">inside.</span>"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
