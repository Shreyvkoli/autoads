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
                <section className="py-16 relative overflow-hidden bg-white/50">
                    <div className="absolute inset-0 bg-hero-gradient opacity-30" />
                    <div className="container px-4 text-center relative z-10">
                        <h1 className="text-5xl md:text-7xl font-display mb-6 tracking-tighter">QR Deal Marketing</h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-medium">
                            Bridging the physical and digital gap. Reels-style engagement for every commute.
                        </p>
                    </div>
                </section>

                {/* Why QR Deal Marketing Converts */}
                <section className="py-16 border-y border-black/5">
                    <div className="container px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-display mb-4 tracking-tight">Why QR Deal Marketing Converts</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Visibility + Engagement = Results</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    {[
                                        { title: "High Intent", desc: "People scan by choice. They want to see your offer." },
                                        { title: "Reels-Style Format", desc: "Vertical video deals capture undivided attention." },
                                        { title: "Right Timing", desc: "Deals shown when passengers have idle time during commutes." },
                                        { title: "Unified Flow", desc: "Multiple brands visible in one seamless discovery experience." },
                                        { title: "Full Tracking", desc: "View & engagement tracking. Know exactly what works." },
                                        { title: "Action Oriented", desc: "Perfect for offers, launches & driving footfall." }
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <Zap className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-display text-xl mb-1">{benefit.title}</h3>
                                                <p className="text-muted-foreground text-base leading-relaxed">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/50 backdrop-blur-xl h-[500px] rounded-[2rem] border border-black/5 flex items-center justify-center p-8 overflow-hidden group shadow-sm relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                                <div className="relative z-10 w-full max-w-[260px] bg-black rounded-[2rem] h-[480px] border-4 border-gray-900 shadow-xl overflow-hidden flex flex-col">
                                    {/* Mock Phone UI */}
                                    <div className="flex-grow bg-gray-900 relative group-hover:bg-gray-800 transition-colors duration-500 flex items-center justify-center">
                                        <Video className="w-12 h-12 text-white/20" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black/80 to-transparent">
                                            <div className="w-3/4 h-3 bg-white/20 rounded-full mb-2" />
                                            <div className="w-1/2 h-3 bg-white/20 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="h-14 bg-black flex items-center justify-center border-t border-white/10">
                                        <Button size="sm" className="rounded-full px-5 bg-primary hover:bg-primary/90 text-sm h-8">Get Deal</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Should Use This */}
                <section className="py-16 bg-white/30">
                    <div className="container px-4">
                        <h2 className="text-4xl font-display text-center mb-10 tracking-tight">WHO SHOULD USE THIS</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <div key={index} className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-black/5 hover:border-primary/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group">
                                    <div className="flex items-center gap-3 mb-4 p-3 bg-primary/5 rounded-xl w-fit group-hover:bg-primary/10 transition-colors">
                                        <span className="text-2xl">{category.icon}</span>
                                        <h3 className="font-display text-xl tracking-wide leading-tight text-foreground">{category.title}</h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-muted-foreground group-hover:text-foreground/80 transition-colors">
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

                {/* Removed How It Works (integrated) */}

                {/* Final CTA */}
                <section className="py-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary z-0" />
                    <div className="container px-4 relative z-10 text-center">
                        <h2 className="text-5xl md:text-7xl font-display mb-8 text-white tracking-tighter">READY TO SCALE?</h2>

                        <Button size="lg" variant="secondary" className="h-16 px-10 rounded-xl text-xl font-bold bg-white text-primary hover:bg-white/90 shadow-xl transition-all" onClick={() => window.open('https://wa.me/919999999999', '_blank')}>
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
