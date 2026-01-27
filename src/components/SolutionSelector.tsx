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
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="container relative z-10 max-w-[1200px] mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl mb-4 tracking-wide text-foreground">Choose Your Solution</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        Strategic advertising channels engineered for maximum hyperlocal impact.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-[2rem] p-10 shadow-lg hover:shadow-xl border border-slate-100 transition-all duration-500 flex flex-col hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />

                            <h3 className="font-display text-3xl mb-8 tracking-wide text-foreground">{solution.title}</h3>

                            <ul className="space-y-5 mb-12 flex-grow">
                                {solution.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-4 text-base">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                                            <Check className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-foreground/90 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className="w-full h-14 rounded-xl text-lg font-bold transition-all duration-300 shadow-button group-hover:scale-[1.01] bg-primary hover:bg-primary/90 text-white"
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
