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
        <section className="py-24 bg-transparent relative overflow-hidden" id="why-us">
            {/* Minimalist Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl mb-6 tracking-wide text-foreground">WHY US</h2>
                    <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-medium leading-relaxed italic">
                        "Engineering the future of street-level visibility and digital interaction."
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div key={index} className="group text-center p-4 md:p-8 rounded-[2rem] bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-3 transition-all duration-500 shadow-sm">
                                <reason.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                            </div>
                            <h3 className="font-display text-xl md:text-2xl mb-4 tracking-wide text-foreground">{reason.title}</h3>
                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-medium">{reason.description}</p>
                        </div>
                    ))}
                </div>

                {/* Narrative Section */}
                <div className="mt-24 max-w-4xl mx-auto text-center">
                    <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-bold mb-6 tracking-wide text-xs uppercase">The Synergy</div>
                    <h2 className="font-display text-3xl md:text-5xl mb-10 tracking-wide text-foreground">Visibility + Engagement = Results</h2>

                    <div className="grid md:grid-cols-2 gap-8 text-left bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl">
                        <div className="space-y-4">
                            <h3 className="font-display text-2xl text-primary">1. Awareness</h3>
                            <p className="text-lg text-muted-foreground font-medium leading-relaxed">Auto ads build massive local awareness. Customers see your brand everywhere on the streets.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-display text-2xl text-primary">2. Interest</h3>
                            <p className="text-lg text-muted-foreground font-medium leading-relaxed">QR deals capture that interest. Customers scan to unlock value immediately.</p>
                        </div>
                    </div>

                    <p className="mt-12 text-xl md:text-2xl font-display text-muted-foreground/80 leading-normal">
                        "Customers first notice your brand <span className="text-foreground">outside.</span> <br />
                        Then discover your offer <span className="text-foreground">inside.</span>"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
