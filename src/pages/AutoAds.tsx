import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ClipboardList, Map, Megaphone, ArrowRight } from "lucide-react";


const AutoAds = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20 relative z-10">
                {/* Hero Section */}
                <section className="py-16 relative overflow-hidden bg-white/50">
                    <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                    <div className="container px-4 text-center relative z-10">
                        <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tight">Auto Advertising</h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-medium">
                            High-impact street presence. 100% verified placement. Massive hyperlocal reach.
                        </p>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-16 border-y border-black/5">
                    <div className="container px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-display mb-4 tracking-tight">Normal Ads vs. AutoAds</h2>
                            <p className="text-lg text-muted-foreground">We don’t sell blind advertising. We provide visibility you can trust.</p>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-black/5 shadow-sm overflow-hidden">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Header */}
                                <div className="p-3 border-b border-black/5 font-display text-xl md:text-2xl text-muted-foreground/50">Normal Auto Ads</div>
                                <div className="p-3 border-b border-primary/20 font-display text-xl md:text-2xl text-primary bg-primary/5 rounded-t-xl">Our Auto Ads</div>

                                {/* Row 1 */}
                                <div className="p-3 text-base md:text-lg text-muted-foreground font-medium flex items-center">One-time photo</div>
                                <div className="p-3 text-base md:text-lg text-foreground font-bold flex items-center bg-primary/5">Ongoing verification</div>

                                {/* Row 2 */}
                                <div className="p-3 text-base md:text-lg text-muted-foreground font-medium flex items-center">No tracking</div>
                                <div className="p-3 text-base md:text-lg text-foreground font-bold flex items-center bg-primary/5">Active auto monitoring</div>

                                {/* Row 3 */}
                                <div className="p-3 text-base md:text-lg text-muted-foreground font-medium flex items-center">Driver unmanaged</div>
                                <div className="p-3 text-base md:text-lg text-foreground font-bold flex items-center bg-primary/5">Driver connected</div>

                                {/* Row 4 */}
                                <div className="p-3 text-base md:text-lg text-muted-foreground font-medium flex items-center">Sticker once, forget</div>
                                <div className="p-3 text-base md:text-lg text-foreground font-bold flex items-center bg-primary/5">Continuous control</div>

                                {/* Row 5 */}
                                <div className="p-3 text-base md:text-lg text-muted-foreground font-medium flex items-center">Blind exposure</div>
                                <div className="p-3 text-base md:text-lg text-foreground font-bold flex items-center bg-primary/5 rounded-b-xl">Transparent execution</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who This Is Best For */}
                <section className="py-16 bg-white/30">
                    <div className="container px-4">
                        <h2 className="text-4xl font-display text-center mb-10 tracking-tight">WHO THIS IS BEST FOR</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                "Brands serious about local visibility",

                                "Companies who want accountability",
                                "Businesses with limited budgets but smart thinking",
                                "Brands that understand trust comes from familiarity",
                                "Brands tired of traditional auto advertising",
                                "Auto ads for brands who want consistent local visibility, not random exposure."
                            ].map((item, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-black/5 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md flex items-center justify-center min-h-[120px]">
                                    <h3 className="font-display text-2xl tracking-wide leading-tight">{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Auto Advertising Model */}
                <section className="py-20">
                    <div className="container px-4">
                        <h2 className="text-5xl font-display text-center mb-4 tracking-tight">OUR ADVERTISING MODEL</h2>
                        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">Everything we do is designed for verification and impact.</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "1. Verified Network", desc: "Every auto driver is digitally onboarded. No random autos. No fake placements." },
                                { title: "2. Automated Engagement", desc: "Drivers stay connected through automated communication. No manual chasing." },
                                { title: "3. Proof of Presence", desc: "Weekly photo verification. Consistent ad visibility confirmation. Non-active autos removed." },
                                { title: "4. Route Awareness", desc: "We know autos are actually running. No parked ads. No inactive vehicles." },
                                { title: "5. Total Transparency", desc: "Brands don't 'hope' their ads are running. They know." },
                                { title: "6. Clean Management", desc: "Area-based deployment. Easy scaling. Controlled execution." },
                            ].map((step, index) => (
                                <div key={index} className="group p-8 rounded-2xl bg-white/80 border border-black/5 hover:border-primary/30 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                                    <h3 className="text-2xl font-display mb-3 tracking-tight text-primary">{step.title}</h3>
                                    <p className="text-foreground/80 text-base leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary z-0" />
                    <div className="container px-4 relative z-10 text-center">
                        <h2 className="text-5xl md:text-7xl font-display mb-6 text-white tracking-tight">OUR PROMISE</h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10 font-medium">
                            Our network consists only of verified autos committed to active campaigns.
                        </p>

                        <Button size="lg" variant="secondary" className="h-16 px-10 rounded-xl text-xl font-bold bg-white text-primary hover:bg-white/90 shadow-xl transition-all" onClick={() => window.open('https://wa.me/919999999999', '_blank')}>
                            Talk to us <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                        <p className="mt-6 text-white/80 font-medium text-base">👉 Stop guessing. Start knowing.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>

    );
};

export default AutoAds;
