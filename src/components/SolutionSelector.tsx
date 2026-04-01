import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import autoAdRearView from "@/assets/auto-ad-rear-view.jpg";
import qrDealMockup from "@/assets/qr-deal-mockup.jpg";

const SolutionSelector = () => {
    const navigate = useNavigate();

    const solutions = [
        {
            title: "Auto Advertising",
            features: [
                "Your brand on premium transit vehicles",
                "High daily visibility across routes",
                "Hyperlocal area-wise coverage",
                "Weekly proof & route reporting"
            ],
            cta: "Explore Campaigns",
            link: "/auto-ads",
            image: autoAdRearView
        },
        {
            title: "QR Deal Marketing",
            features: [
                "Interactive QR codes inside transit",
                "Reels-style deal discovery feed",
                "Local & D2C brand promotion",
                "Real-time view & engagement tracking"
            ],
            cta: "View Platform",
            link: "/qr-deals",
            image: qrDealMockup
        }
    ];

    return (
        <section className="py-32 bg-[#09090b] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-20 animate-fade-up">
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6 tracking-wide text-white drop-shadow-sm">Choose Your <span className="text-primary">Solution</span></h2>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Strategic advertising channels engineered for maximum hyperlocal impact and unbeatable ROI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#111115] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)] hover:border-primary/30 flex flex-col"
                        >
                            <div className="h-48 md:h-64 relative overflow-hidden w-full">
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] to-transparent z-10" />
                                <img src={solution.image} alt={solution.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                            </div>

                            <div className="p-8 md:p-10 pt-4 flex-grow flex flex-col relative z-20">
                                <h3 className="font-display text-4xl mb-8 tracking-wide text-white group-hover:text-primary transition-colors">{solution.title}</h3>

                                <ul className="space-y-5 mb-10 flex-grow">
                                    {solution.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4 text-base lg:text-lg">
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-300">
                                                <Check className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="text-slate-300 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className="w-full h-14 rounded-xl text-lg font-bold transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] bg-primary hover:bg-primary/90 text-primary-foreground group-hover:scale-[1.02]"
                                    size="lg"
                                    onClick={() => navigate(solution.link)}
                                >
                                    {solution.cta} <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSelector;
