import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ClipboardList, Map, Megaphone, ArrowRight } from "lucide-react";
import AutoAdReal from "@/assets/auto-ad-rear-view.jpg";


const AutoAds = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20 relative z-10">
                {/* Hero Section */}
                {/* Hero Section */}
                <section className="py-12 md:py-24 relative overflow-hidden bg-transparent">
                    <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                    <div className="container px-4 relative z-10 mx-auto max-w-[1240px]">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-wide text-foreground leading-[0.95]">
                                    Auto <br className="hidden lg:block" /> Advertising
                                </h1>
                                <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    High-impact street presence. 100% verified placement. Massive hyperlocal reach.
                                </p>
                            </div>

                            <div className="relative group animate-fade-up delay-200">
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-[2rem] border border-white/40">
                                    <img
                                        src={AutoAdReal}
                                        alt="Auto Ad Real Example"
                                        className="w-full h-auto rounded-[1.8rem] shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-rotate-1"
                                    />
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-blue-100 animate-bounce duration-3000 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <Check className="w-5 h-5 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-800">Verified Placement</p>
                                            <p className="text-xs text-gray-500">Live Tracking Enabled</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-24 border-y border-white/20 bg-white/60 backdrop-blur-md">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-display mb-6 tracking-wide text-foreground">Normal Ads vs. ADZO</h2>
                            <p className="text-lg text-muted-foreground font-medium">We don’t sell blind advertising. We provide visibility you can trust.</p>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-[2rem] p-8 md:p-12 border border-white/40 shadow-card overflow-hidden">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                                {/* Header */}
                                <div className="pb-4 border-b border-black/5 font-display text-2xl md:text-3xl text-muted-foreground/60 text-center">Normal Auto Ads</div>
                                <div className="pb-4 border-b border-primary/20 font-display text-2xl md:text-3xl text-primary text-center">Our Auto Ads</div>

                                {/* Rows */}
                                <div className="py-3 px-4 text-base md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">One-time photo</div>
                                <div className="py-3 px-4 text-base md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Ongoing verification</div>

                                <div className="py-3 px-4 text-base md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">No tracking</div>
                                <div className="py-3 px-4 text-base md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Active auto monitoring</div>

                                <div className="py-3 px-4 text-base md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">Driver unmanaged</div>
                                <div className="py-3 px-4 text-base md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Driver connected</div>

                                <div className="py-3 px-4 text-base md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">Sticker once, forget</div>
                                <div className="py-3 px-4 text-base md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Continuous control</div>

                                <div className="py-3 px-4 text-base md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">Blind exposure</div>
                                <div className="py-3 px-4 text-base md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Transparent execution</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who This Is Best For */}
                <section className="py-24 bg-transparent">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display text-center mb-16 tracking-wide text-foreground">WHO THIS IS BEST FOR</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                "Brands serious about local visibility",
                                "Companies who want accountability",
                                "Businesses with limited budgets but smart thinking",
                                "Brands that understand trust comes from familiarity",
                                "Brands tired of traditional auto advertising",
                                "Auto ads for brands who want consistent local visibility, not random exposure."
                            ].map((item, index) => (
                                <div key={index} className="bg-white/70 backdrop-blur-xl p-8 rounded-[1.5rem] border border-white/40 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-card-hover flex items-center justify-center min-h-[160px] group">
                                    <h3 className="font-display text-2xl tracking-wide leading-tight text-foreground/90 group-hover:text-primary transition-colors">{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Auto Advertising Model */}
                <section className="py-24 bg-white/60 backdrop-blur-md relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
                    <div className="container px-4 max-w-[1200px] mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display text-center mb-6 tracking-wide text-foreground">OUR ADVERTISING MODEL</h2>
                        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16 font-medium">Everything we do is designed for verification and impact.</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "1. Verified Network", desc: "Every auto driver is digitally onboarded. No random autos. No fake placements." },
                                { title: "2. Automated Engagement", desc: "Drivers stay connected through automated communication. No manual chasing." },
                                { title: "3. Proof of Presence", desc: "Weekly photo verification. Consistent ad visibility confirmation. Non-active autos removed." },
                                { title: "4. Route Awareness", desc: "We know autos are actually running. No parked ads. No inactive vehicles." },
                                { title: "5. Total Transparency", desc: "Brands don't 'hope' their ads are running. They know." },
                                { title: "6. Clean Management", desc: "Area-based deployment. Easy scaling. Controlled execution." },
                            ].map((step, index) => (
                                <div key={index} className="group p-8 rounded-[2rem] bg-white/80 border border-white/40 hover:border-primary/30 hover:bg-white transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-2">
                                    <h3 className="text-2xl font-display mb-4 tracking-wide text-primary">{step.title}</h3>
                                    <p className="text-foreground/80 text-base leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary z-0" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                    <div className="container px-4 relative z-10 text-center max-w-[1000px] mx-auto">
                        <h2 className="text-4xl md:text-6xl font-display mb-8 text-white tracking-wide">OUR PROMISE</h2>
                        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                            Our network consists only of verified autos committed to active campaigns.
                        </p>

                        <Button size="lg" variant="secondary" className="h-16 px-12 rounded-2xl text-xl font-bold bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all" onClick={() => window.open('https://api.whatsapp.com/send?phone=917977568891', '_blank')}>
                            Talk to us <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                        <p className="mt-8 text-white/80 font-medium text-base tracking-wide">👉 Stop guessing. Start knowing.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>

    );
};

export default AutoAds;
