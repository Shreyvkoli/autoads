import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Video, BarChart2, Zap, ArrowRight } from "lucide-react";


const QrDeals = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20 relative z-10">
                {/* Hero Section */}
                <section className="py-24 relative overflow-hidden bg-white/50">
                    <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                    <div className="container px-4 text-center relative z-10 max-w-[1000px] mx-auto">
                        <h1 className="text-5xl md:text-6xl font-display mb-8 tracking-wide text-foreground">QR Deal Marketing</h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                            Bridging the physical and digital gap. Reels-style engagement for every commute.
                        </p>
                    </div>
                </section>

                {/* Why QR Deal Marketing Converts */}
                <section className="py-24 border-y border-white/20 bg-white/30 backdrop-blur-sm">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-display mb-4 tracking-wide text-foreground">Why QR Deal Marketing Converts</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">Visibility + Engagement = Results</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    {[
                                        { title: "High Intent", desc: "People scan by choice. They want to see your offer." },
                                        { title: "Reels-Style Format", desc: "Vertical video deals capture undivided attention." },
                                        { title: "Right Timing", desc: "Deals shown when passengers have idle time during commutes." },
                                        { title: "Unified Flow", desc: "Multiple brands visible in one seamless discovery experience." },
                                        { title: "Full Tracking", desc: "View & engagement tracking. Know exactly what works." },
                                        { title: "Action Oriented", desc: "Perfect for offers, launches & driving footfall." }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-4 group">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-all duration-300">
                                                <Zap className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-display text-2xl mb-1 text-foreground group-hover:text-primary transition-colors">{benefit.title}</h3>
                                                <p className="text-muted-foreground text-base leading-relaxed font-medium">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/60 backdrop-blur-2xl h-[560px] rounded-[3rem] border border-white/40 flex items-center justify-center p-10 overflow-hidden group shadow-card hover:shadow-card-hover relative transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                                <div className="relative z-10 w-full max-w-[280px] bg-black rounded-[2.5rem] h-[520px] border-8 border-gray-900 shadow-2xl overflow-hidden flex flex-col transform group-hover:scale-105 transition-transform duration-500">
                                    {/* Mock Phone UI */}
                                    <div className="flex-grow bg-gray-900 relative group-hover:bg-gray-800 transition-colors duration-500 flex items-center justify-center">
                                        <Video className="w-16 h-16 text-white/20" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                            <div className="w-3/4 h-3 bg-white/20 rounded-full mb-3" />
                                            <div className="w-1/2 h-3 bg-white/20 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="h-16 bg-black flex items-center justify-center border-t border-white/10">
                                        <Button size="sm" className="rounded-full px-6 bg-primary hover:bg-primary/90 text-sm h-10 font-bold">Get Deal</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Should Use This */}
                <section className="py-24 bg-transparent">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display text-center mb-16 tracking-wide text-foreground">WHO SHOULD USE THIS</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: "🍽️",
                                    title: "Food & Beverage",
                                    items: ["Cafes & Restaurants", "Cloud Kitchens", "Bakeries & Dessert Brands", "Juice / Shake / Ice-cream Shops"]
                                },
                                {
                                    icon: "💇‍♂️",
                                    title: "Personal Care & Fitness",
                                    items: ["Salons & Spas", "Gyms & Yoga Studios", "Skin / Hair Clinics", "Tattoo Studios"]
                                },
                                {
                                    icon: "🏪",
                                    title: "Local Retail",
                                    items: ["Local Stores & Kirana Shops", "Fashion Boutiques", "Footwear Stores", "Electronics & Mobile Shops"]
                                },
                                {
                                    icon: "🏠",
                                    title: "Home & Local Services",
                                    items: ["Interior & Furniture Stores", "Hardware & Paint Shops", "Home Cleaning Services", "Pest Control & Maintenance Services"]
                                },
                                {
                                    icon: "🚗",
                                    title: "Auto & Mobility",
                                    items: ["Bike / Car Repair & Service Centers", "Car Wash & Detailing", "Driving Schools"]
                                },
                                {
                                    icon: "🧑‍⚕️",
                                    title: "Health & Wellness",
                                    items: ["Clinics & Diagnostic Centers", "Dental Clinics", "Pharmacies"]
                                },
                                {
                                    icon: "📦",
                                    title: "Online-First / Growth Brands",
                                    items: ["D2C Brands", "Quick-commerce / Hyperlocal Apps", "New Product Launch Brands"]
                                },
                                {
                                    icon: "🎓",
                                    title: "Education & Skill",
                                    items: ["Coaching Classes", "Training Institutes", "Spoken English / Skill Centres"]
                                },
                                {
                                    icon: "🎉",
                                    title: "Experiences & Lifestyle",
                                    items: ["Event Planners", "Photography Studios", "Gaming Cafes", "Travel & Local Experiences"]
                                }
                            ].map((category, index) => (
                                <div key={index} className="bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40 hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 group shadow-card">
                                    <div className="flex items-center gap-4 mb-6 p-4 bg-primary/10 rounded-2xl w-fit group-hover:bg-primary/20 transition-colors">
                                        <span className="text-3xl">{category.icon}</span>
                                        <h3 className="font-display text-xl tracking-wide leading-tight text-foreground">{category.title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0 group-hover:bg-primary transition-colors" />
                                                <span className="text-base font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
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
                        <h2 className="text-4xl md:text-6xl font-display mb-8 text-white tracking-wide">READY TO SCALE?</h2>

                        <Button size="lg" variant="secondary" className="h-16 px-12 rounded-2xl text-xl font-bold bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all" onClick={() => window.open('https://wa.me/919999999999', '_blank')}>
                            Talk to Sales <ArrowRight className="ml-2 w-6 h-6" />
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>

    );
};

export default QrDeals;
