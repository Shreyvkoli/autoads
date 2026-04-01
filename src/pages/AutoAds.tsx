import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import AutoAdReal from "@/assets/auto-ad-rear-view.jpg";

const AutoAds = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#09090b]">
            <Navbar />

            <main className="flex-grow pt-20 relative z-10">
                {/* Hero Section */}
                <section className="py-12 md:py-24 relative overflow-hidden bg-transparent">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[120px] -z-10" />
                    <div className="container px-8 md:px-12 lg:px-20 relative z-10 mx-auto max-w-[1300px]">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div className="text-center lg:text-left pl-4 lg:pl-0">
                                <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-wide text-white leading-[0.95] drop-shadow-sm">
                                    Auto <br className="hidden lg:block" /> Advertising
                                </h1>
                                <p className="text-lg md:text-xl text-slate-400 mb-8 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                                    High-impact street presence. 100% verified placement. Massive hyperlocal reach.
                                </p>
                            </div>

                            <div className="relative group animate-fade-up delay-200">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-yellow-600 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
                                <div className="relative bg-white/5 backdrop-blur-sm p-2 rounded-[2rem] border border-white/10 shadow-2xl">
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
                <section className="py-24 border-y border-white/10 bg-[#111115] relative">
                    <div className="container px-4 max-w-[1200px] mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-display mb-6 tracking-wide text-white">Normal Ads vs. <span className="text-primary">ADZO</span></h2>
                            <p className="text-lg text-slate-400 font-medium">We don't sell blind advertising. We provide visibility you can trust.</p>
                        </div>

                        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl rounded-[2rem] p-6 md:p-12 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden">
                            <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 md:gap-y-6">
                                {/* Header */}
                                <div className="pb-4 border-b border-white/10 font-display text-xl md:text-3xl text-slate-500 text-center">Normal Auto Ads</div>
                                <div className="pb-4 border-b border-primary/30 font-display text-xl md:text-3xl text-primary text-center">Our Auto Ads</div>

                                {/* Rows */}
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-slate-400 font-medium flex items-center justify-center text-center bg-white/5 rounded-xl border border-white/5">One-time photo</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-white font-bold flex items-center justify-center text-center bg-primary/20 rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(251,191,36,0.1)]">Ongoing verification</div>

                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-slate-400 font-medium flex items-center justify-center text-center bg-white/5 rounded-xl border border-white/5">No tracking</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-white font-bold flex items-center justify-center text-center bg-primary/20 rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(251,191,36,0.1)]">Active auto monitoring</div>

                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-slate-400 font-medium flex items-center justify-center text-center bg-white/5 rounded-xl border border-white/5">Driver unmanaged</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-white font-bold flex items-center justify-center text-center bg-primary/20 rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(251,191,36,0.1)]">Driver connected</div>

                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-slate-400 font-medium flex items-center justify-center text-center bg-white/5 rounded-xl border border-white/5">Sticker once, forget</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-white font-bold flex items-center justify-center text-center bg-primary/20 rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(251,191,36,0.1)]">Continuous control</div>

                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-slate-400 font-medium flex items-center justify-center text-center bg-white/5 rounded-xl border border-white/5">Blind exposure</div>
                                <div className="py-3 px-3 md:px-4 text-sm md:text-lg text-white font-bold flex items-center justify-center text-center bg-primary/20 rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(251,191,36,0.1)]">Transparent execution</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who This Is Best For - Redesigned */}
                <section className="py-24 relative overflow-hidden bg-[#09090b]">
                    {/* Decorative background elements */}
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

                    <div className="container px-4 max-w-[1000px] mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-display mb-6 tracking-wide text-white">
                                Who This Is <span className="text-primary italic font-bold">Perfect</span> For
                            </h2>
                            <p className="text-lg text-slate-400 font-medium max-w-2xl mx-auto">
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
                                    className="group flex items-center p-5 md:p-6 bg-[#111115] border border-white/10 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(251,191,36,0.1)] hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
                                >
                                    <div className="flex-shrink-0 mr-4 md:mr-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                                            <Check className="w-5 h-5 md:w-6 md:h-6 text-primary group-hover:scale-110 transition-transform" />
                                        </div>
                                    </div>
                                    <span className="text-base md:text-xl font-medium text-slate-300 group-hover:text-white transition-colors">
                                        {item}
                                    </span>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0 hidden md:block">
                                        <ArrowRight className="w-5 h-5 text-primary/80" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Auto Advertising Model */}
                <section className="py-24 bg-[#111115] relative border-t border-white/5">
                    <div className="container px-4 max-w-[1200px] mx-auto relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display text-center mb-6 tracking-wide text-white">OUR ADVERTISING MODEL</h2>
                        <p className="text-lg text-slate-400 text-center max-w-2xl mx-auto mb-16 font-medium">Everything we do is designed for verification and impact.</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "1. Verified Network", desc: "Every auto driver is digitally onboarded. No random autos. No fake placements." },
                                { title: "2. Automated Engagement", desc: "Drivers stay connected through automated communication. No manual chasing." },
                                { title: "3. Proof of Presence", desc: "Weekly photo verification. Consistent ad visibility confirmation. Non-active autos removed." },
                                { title: "4. Route Awareness", desc: "We know autos are actually running. No parked ads. No inactive vehicles." },
                                { title: "5. Total Transparency", desc: "Brands don't 'hope' their ads are running. They know." },
                                { title: "6. Clean Management", desc: "Area-based deployment. Easy scaling. Controlled execution." },
                            ].map((step, index) => (
                                <div key={index} className="group p-6 md:p-8 rounded-[2rem] bg-black/40 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                                    <h3 className="text-xl md:text-2xl font-display mb-4 tracking-wide text-primary">{step.title}</h3>
                                    <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 relative overflow-hidden bg-[#09090b]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/25 rounded-[100%] blur-[100px] pointer-events-none" />

                    <div className="container px-4 relative z-10 text-center max-w-[1000px] mx-auto">
                        <h2 className="text-4xl md:text-6xl font-display mb-8 text-white tracking-wide">OUR <span className="text-primary italic">PROMISE</span></h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                            Our network consists only of verified autos committed to active campaigns.
                        </p>

                        <Button size="lg" className="h-16 px-12 rounded-xl text-xl font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:scale-105 transition-all" onClick={() => window.open('https://api.whatsapp.com/send?phone=919167273951', '_blank')}>
                            Talk to us <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                        <p className="mt-8 text-slate-400 font-medium text-base tracking-wide">👉 Stop guessing. Start knowing.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>

    );
};

export default AutoAds;
