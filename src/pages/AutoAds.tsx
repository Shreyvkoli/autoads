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
                    <div className="container px-8 md:px-12 lg:px-20 relative z-10 mx-auto max-w-[1300px]">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="text-center lg:text-left pl-4 lg:pl-0">
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

                        <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl rounded-[2rem] p-6 md:p-12 border border-white/40 shadow-card overflow-hidden">
                            <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
                                {/* Header */}
                                <div className="pb-4 border-b border-black/5 font-display text-xl md:text-3xl text-muted-foreground/60 text-center">Normal Auto Ads</div>
                                <div className="pb-4 border-b border-primary/20 font-display text-xl md:text-3xl text-primary text-center">Our Auto Ads</div>

                                {/* Rows */}
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">One-time photo</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Ongoing verification</div>

                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">No tracking</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Active auto monitoring</div>

                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">Driver unmanaged</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Driver connected</div>

                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">Sticker once, forget</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Continuous control</div>

                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-muted-foreground font-medium flex items-center justify-center text-center bg-gray-50/50 rounded-xl">Blind exposure</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-foreground font-bold flex items-center justify-center text-center bg-primary/10 rounded-xl">Transparent execution</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who This Is Best For - Redesigned */}
                <section className="py-24 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10" />

                    <div className="container px-4 max-w-[1000px] mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display mb-6 tracking-wide text-foreground">
                                Who This Is <span className="text-gradient">Perfect</span> For
                            </h2>
                            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                                Designed for brands that demand accountability, not just visibility.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "Brands serious about verifying their local visibility",
                                "Companies demanding 100% accountability",
                                "Businesses with smart budgets looking for high ROI",
                                "Brands building trust through consistent neighborhood presence",
                                "Advertisers tired of 'blind' traditional campaigns",
                                "Growth-focused teams wanting measurable offline data"
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-center p-5 md:p-6 bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm hover:shadow-xl hover:bg-white/80 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
                                >
                                    <div className="flex-shrink-0 mr-4 md:mr-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                            <Check className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    <span className="text-base md:text-xl font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                                        {item}
                                    </span>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0 hidden md:block">
                                        <ArrowRight className="w-5 h-5 text-primary/50" />
                                    </div>
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
                                <div key={index} className="group p-6 md:p-8 rounded-[2rem] bg-white/80 border border-white/40 hover:border-primary/30 hover:bg-white transition-all duration-300 shadow-card hover:shadow-card-hover hover:-translate-y-2">
                                    <h3 className="text-xl md:text-2xl font-display mb-4 tracking-wide text-primary">{step.title}</h3>
                                    <p className="text-foreground/80 text-sm md:text-base leading-relaxed font-medium">{step.desc}</p>
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
