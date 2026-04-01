import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Video, BarChart2, Zap, ArrowRight } from "lucide-react";
import qrAutoView from "@/assets/qr-auto-view.jpg";
import adzoQrCode from "@/assets/adzo-qr-code.png";

const QrDeals = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#09090b]">
            <Navbar />

            <main className="flex-grow pt-20 relative z-10">
                {/* Hero Section */}
                <section className="py-24 relative overflow-hidden bg-transparent">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/25 rounded-full blur-[150px] -z-10" />
                    <div className="container px-4 sm:px-8 md:px-12 lg:px-20 relative z-10 max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div className="text-left pl-4 lg:pl-0 animate-fade-up">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 md:mb-8 tracking-wide text-white leading-tight drop-shadow-md">
                                QR Deal <span className="text-primary italic">Marketing</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-400 mb-10 font-medium leading-relaxed">
                                Bridging the physical and digital gap. Reels-style engagement for every commute.
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-end pr-4 lg:pr-0 animate-fade-in delay-200">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                                <a href="https://qr-insta.vercel.app/malad" target="_blank" rel="noopener noreferrer" className="block relative">
                                    <img
                                        src={adzoQrCode}
                                        alt="Adzo QR Code"
                                        className="relative w-[280px] md:w-[320px] h-auto rounded-[1.5rem] shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-white/20 transition-transform hover:scale-105"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why QR Deal Marketing Converts */}
                <section className="py-24 border-y border-white/10 bg-[#111115]">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-display mb-4 tracking-wide text-white">Why QR Deal Marketing Converts</h2>
                            <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">Visibility + Engagement = <span className="text-primary">Results</span></p>
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
                                            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                                                <Zap className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-display text-2xl mb-1 text-white group-hover:text-primary transition-colors">{benefit.title}</h3>
                                                <p className="text-slate-400 text-base leading-relaxed font-medium">{benefit.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative group perspective-1000">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-yellow-600/30 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>
                                <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 bg-black/60 backdrop-blur-md group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                                    <img
                                        src={qrAutoView}
                                        alt="QR Code inside Auto Rickshaw"
                                        className="w-full h-[500px] object-cover object-center transform transition-transform duration-700 hover:scale-110"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                        <p className="text-white font-display text-2xl mb-2 drop-shadow-md">Real-world placement.</p>
                                        <p className="text-primary font-bold uppercase tracking-widest text-sm drop-shadow-md">Zero distractions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Should Use This */}
                <section className="py-24 bg-[#09090b]">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display text-center mb-16 tracking-wide text-white">WHO SHOULD USE <span className="text-primary">THIS</span></h2>
                        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
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
                                <div key={index} className="bg-[#111115] backdrop-blur-xl p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-xl hover:-translate-y-2 group">
                                    <div className="flex items-center gap-4 mb-6 p-4 bg-white/5 border border-white/5 rounded-2xl w-fit group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors">
                                        <span className="text-3xl drop-shadow-sm">{category.icon}</span>
                                        <h3 className="font-display text-xl tracking-wide leading-tight text-white">{category.title}</h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {category.items.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 flex-shrink-0 group-hover:bg-primary transition-colors shadow-[0_0_5px_rgba(251,191,36,0.5)]" />
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
                <section className="py-24 relative overflow-hidden bg-[#111115] border-t border-white/5">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/25 rounded-[100%] blur-[100px] pointer-events-none" />

                    <div className="container px-4 relative z-10 text-center max-w-[1000px] mx-auto">
                        <h2 className="text-4xl md:text-6xl font-display mb-8 text-white tracking-wide">READY TO <span className="text-primary italic">SCALE?</span></h2>

                        <Button size="lg" className="h-16 px-12 rounded-xl text-xl font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:scale-105 transition-all" onClick={() => window.open('https://api.whatsapp.com/send?phone=919167273951', '_blank')}>
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
