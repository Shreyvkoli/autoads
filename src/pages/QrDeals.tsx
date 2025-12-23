import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Video, BarChart2, Zap, ArrowRight } from "lucide-react";


const QrDeals = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 relative z-10">
                {/* Hero Section */}
                <section className="py-24 relative overflow-hidden bg-white/50">
                    <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                    <div className="container px-4 text-center relative z-10">
                        <h1 className="text-7xl md:text-9xl font-display mb-8 tracking-tighter">QR Deal Marketing</h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium">
                            Bridging the physical and digital gap. Reels-style engagement for every commute.
                        </p>
                    </div>
                </section>

                {/* Why QR Deal Marketing Converts */}
                <section className="py-24 border-y border-black/5">
                    <div className="container px-4">
                        <div className="text-center mb-20">
                            <h2 className="text-6xl font-display mb-6 tracking-tight">Why QR Deal Marketing Converts</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Visibility + Engagement = Results</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    {[
                                        { title: "High Intent", desc: "People scan by choice. They want to see your offer." },
                                        { title: "Reels-Style Format", desc: "Vertical video deals capture undivided attention." },
                                        { title: "Right Timing", desc: "Deals shown when passengers have idle time during commutes." },
                                        { title: "Unified Flow", desc: "Multiple brands visible in one seamless discovery experience." },
                                        { title: "Full Tracking", desc: "View & engagement tracking. Know exactly what works." },
                                        { title: "Action Oriented", desc: "Perfect for offers, launches & driving footfall." }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Zap className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-display text-2xl mb-1">{benefit.title}</h3>
                                                <p className="text-muted-foreground text-lg leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-xl h-[600px] rounded-[3rem] border border-black/5 flex items-center justify-center p-10 overflow-hidden group shadow-card relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                                <div className="relative z-10 w-full max-w-xs bg-black rounded-[2.5rem] h-[520px] border-8 border-gray-900 shadow-2xl overflow-hidden flex flex-col">
                                    {/* Mock Phone UI */}
                                    <div className="flex-grow bg-gray-900 relative group-hover:bg-gray-800 transition-colors duration-500 flex items-center justify-center">
                                        <Video className="w-16 h-16 text-white/20" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                                            <div className="w-3/4 h-4 bg-white/20 rounded-full mb-3" />
                                            <div className="w-1/2 h-4 bg-white/20 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="h-16 bg-black flex items-center justify-center border-t border-white/10">
                                        <Button size="sm" className="rounded-full px-6 bg-primary hover:bg-primary/90">Get Deal</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Should Use This */}
                <section className="py-24 bg-white/30">
                    <div className="container px-4">
                        <h2 className="text-5xl font-display text-center mb-16 tracking-tight">WHO SHOULD USE THIS</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {["Cafes & Restaurants", "Salons & Gyms", "Local Stores", "D2C Brands"].map((industry) => (
                                <div key={industry} className="bg-white/80 backdrop-blur-md p-10 rounded-[2rem] border border-black/5 text-center hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 shadow-card hover:shadow-card-hover flex items-center justify-center min-h-[140px]">
                                    <h3 className="font-display text-2xl tracking-wide leading-tight">{industry}</h3>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-xl text-muted-foreground mt-12 font-medium">Best for brands who want real customer action.</p>
                    </div>
                </section>

                {/* Removed How It Works (integrated) */}

                {/* Final CTA */}
                <section className="py-32 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary z-0" />
                    <div className="container px-4 relative z-10 text-center">
                        <h2 className="text-6xl md:text-8xl font-display mb-12 text-white tracking-tighter">READY TO SCALE?</h2>

                        <Button size="xl" variant="secondary" className="h-20 px-12 rounded-2xl text-2xl font-bold bg-white text-primary hover:bg-white/90 shadow-2xl transition-all" onClick={() => window.open('https://wa.me/919999999999', '_blank')}>
                            Talk to Sales <ArrowRight className="ml-3 w-8 h-8" />
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>

    );
};

export default QrDeals;
