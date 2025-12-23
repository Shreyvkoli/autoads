import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ClipboardList, Map, Megaphone, ArrowRight } from "lucide-react";


const AutoAds = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 relative z-10">
                {/* Hero Section */}
                <section className="py-24 relative overflow-hidden bg-white/50">
                    <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                    <div className="container px-4 text-center relative z-10">
                        <h1 className="text-7xl md:text-9xl font-display mb-8 tracking-tighter">Auto Advertising</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium">
                            High-impact street presence. 100% verified placement. Massive hyperlocal reach.
                        </p>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-24 border-y border-black/5">
                    <div className="container px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-5xl font-display mb-6 tracking-tight">Normal Ads vs. AutoAds</h2>
                            <p className="text-xl text-muted-foreground">We don’t sell blind advertising. We provide visibility you can trust.</p>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-black/5 shadow-card overflow-hidden">
                            <div className="grid grid-cols-2 gap-4 md:gap-8">
                                {/* Header */}
                                <div className="p-4 border-b border-black/5 font-display text-2xl md:text-3xl text-muted-foreground/50">Normal Auto Ads</div>
                                <div className="p-4 border-b border-primary/20 font-display text-2xl md:text-3xl text-primary bg-primary/5 rounded-t-2xl">Our Auto Ads</div>

                                {/* Row 1 */}
                                <div className="p-4 text-lg md:text-xl text-muted-foreground font-medium flex items-center">One-time photo</div>
                                <div className="p-4 text-lg md:text-xl text-foreground font-bold flex items-center bg-primary/5">Ongoing verification</div>

                                {/* Row 2 */}
                                <div className="p-4 text-lg md:text-xl text-muted-foreground font-medium flex items-center">No tracking</div>
                                <div className="p-4 text-lg md:text-xl text-foreground font-bold flex items-center bg-primary/5">Active auto monitoring</div>

                                {/* Row 3 */}
                                <div className="p-4 text-lg md:text-xl text-muted-foreground font-medium flex items-center">Driver unmanaged</div>
                                <div className="p-4 text-lg md:text-xl text-foreground font-bold flex items-center bg-primary/5">Driver connected</div>

                                {/* Row 4 */}
                                <div className="p-4 text-lg md:text-xl text-muted-foreground font-medium flex items-center">Sticker once, forget</div>
                                <div className="p-4 text-lg md:text-xl text-foreground font-bold flex items-center bg-primary/5">Continuous control</div>

                                {/* Row 5 */}
                                <div className="p-4 text-lg md:text-xl text-muted-foreground font-medium flex items-center">Blind exposure</div>
                                <div className="p-4 text-lg md:text-xl text-foreground font-bold flex items-center bg-primary/5 rounded-b-2xl">Transparent execution</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who This Is Best For */}
                <section className="py-24 bg-white/30">
                    <div className="container px-4">
                        <h2 className="text-5xl font-display text-center mb-16 tracking-tight">WHO THIS IS BEST FOR</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                "Brands serious about local visibility",
                                "Businesses tired of fake outdoor ads",
                                "Companies who want accountability"
                            ].map((item, index) => (
                                <div key={index} className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-black/5 text-center hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-card hover:shadow-card-hover flex items-center justify-center min-h-[160px]">
                                    <h3 className="font-display text-3xl tracking-wide leading-tight">{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Auto Advertising Model */}
                <section className="py-32">
                    <div className="container px-4">
                        <h2 className="text-6xl font-display text-center mb-6 tracking-tighter">OUR ADVERTISING MODEL</h2>
                        <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-20">Everything we do is designed for verification and impact.</p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "1. Verified Network", desc: "Every auto driver is digitally onboarded. No random autos. No fake placements." },
                                { title: "2. Automated Engagement", desc: "Drivers stay connected through automated communication. No manual chasing." },
                                { title: "3. Proof of Presence", desc: "Weekly photo verification. Consistent ad visibility confirmation. Non-active autos removed." },
                                { title: "4. Route Awareness", desc: "We know autos are actually running. No parked ads. No inactive vehicles." },
                                { title: "5. Total Transparency", desc: "Brands don't 'hope' their ads are running. They know." },
                                { title: "6. Clean Management", desc: "Area-based deployment. Easy scaling. Controlled execution." },
                            ].map((step, index) => (
                                <div key={index} className="group p-10 rounded-[2rem] bg-white/80 border border-black/5 hover:border-primary/30 hover:bg-white transition-all duration-500 shadow-card hover:shadow-card-hover hover:-translate-y-2">
                                    <h3 className="text-3xl font-display mb-4 tracking-tight text-primary">{step.title}</h3>
                                    <p className="text-foreground/80 text-lg leading-relaxed font-medium">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary z-0" />
                    <div className="container px-4 relative z-10 text-center">
                        <h2 className="text-6xl md:text-8xl font-display mb-8 text-white tracking-tighter">OUR PROMISE</h2>
                        <p className="text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-medium">
                            If an auto is not active, it doesn’t stay in our network.
                        </p>

                        <Button size="xl" variant="secondary" className="h-24 px-12 rounded-3xl text-2xl font-bold bg-white text-primary hover:bg-white/90 shadow-2xl transition-all" onClick={() => window.open('https://wa.me/919999999999', '_blank')}>
                            Talk to us <ArrowRight className="ml-3 w-8 h-8" />
                        </Button>
                        <p className="mt-8 text-white/80 font-medium text-lg">👉 Stop guessing. Start knowing.</p>
                    </div>
                </section>
            </main>

            <Footer />
        </div>

    );
};

export default AutoAds;
