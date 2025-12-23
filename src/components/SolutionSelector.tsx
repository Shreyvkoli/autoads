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
        <section className="py-32 bg-white/30 relative overflow-hidden">
            <div className="container px-4 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="font-display text-5xl md:text-8xl mb-6 tracking-tight">Choose Your Solution</h2>
                    <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                        Strategic advertising channels engineered for maximum hyperlocal impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white/80 backdrop-blur-3xl rounded-[3rem] p-12 shadow-card border border-black/5 hover:border-primary/40 transition-all duration-700 flex flex-col hover:-translate-y-4`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br from-${solution.color}/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]`} />

                            <h3 className="font-display text-5xl mb-10 tracking-tight">{solution.title}</h3>

                            <ul className="space-y-6 mb-16 flex-grow">
                                {solution.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-5 text-lg">
                                        <div className={`w-10 h-10 rounded-[0.8rem] bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-500`}>
                                            <Check className={`w-6 h-6 text-primary`} />
                                        </div>
                                        <span className="text-foreground/80 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full h-18 rounded-2xl text-xl font-bold transition-all duration-500 shadow-2xl group-hover:scale-[1.02] bg-primary hover:bg-primary/90 text-white shadow-primary/20`}
                                size="lg"
                                onClick={() => navigate(solution.link)}
                            >
                                {solution.cta} <ArrowRight className="ml-2 w-7 h-7" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionSelector;
