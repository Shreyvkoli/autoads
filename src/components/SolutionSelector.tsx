import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SolutionSelector = () => {
    const navigate = useNavigate();

    const solutions = [
        {
            title: "Auto Advertising",
            features: [
                "Your brand printed on auto rickshaws",
                "High daily visibility",
                "Area-wise coverage",
                "Weekly proof & reporting"
            ],
            cta: "Explore Auto Advertising",
            link: "/auto-ads",
            color: "primary"
        },
        {
            title: "QR Deal Marketing",
            features: [
                "QR inside autos",
                "Reels-style deal discovery",
                "Local & D2C brand promotion",
                "View & engagement tracking"
            ],
            cta: "Explore Solutions",
            link: "/qr-deals",
            color: "primary"
        }
    ];

    return (
        <section className="py-20 bg-white/30 relative overflow-hidden">
            <div className="container px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-6xl mb-4 tracking-tight">Choose Your Solution</h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Strategic advertising channels engineered for maximum hyperlocal impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/80 backdrop-blur-3xl rounded-3xl p-8 shadow-sm border border-black/5 hover:border-primary/40 transition-all duration-500 flex flex-col hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.01]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                            <h3 className="font-display text-4xl mb-6 tracking-tight">{solution.title}</h3>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {solution.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 text-base">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                                            <Check className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-foreground/80 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className="w-full h-14 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg group-hover:scale-[1.01] bg-primary hover:bg-primary/90 text-white shadow-primary/20"
                                size="lg"
                                onClick={() => navigate(solution.link)}
                            >
                                {solution.cta} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSelector;
