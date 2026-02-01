import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    Smartphone,
    Eye,
    BarChart3,
    TrendingUp,
    ArrowRight,
    HelpCircle,
    CheckCircle2,
    Calculator,
    Quote,
    Timer,
    Ban,
    Coins,
    Focus
} from "lucide-react";
import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const HowItWorks = () => {
    // ROI Calculator State
    const [autos, setAutos] = useState(10);
    const [duration, setDuration] = useState(1);
    const [packageType, setPackageType] = useState('starter'); // starter, growth, qr

    // Constants for calculation
    const impressionsPerAutoDaily = 2000; // Estimated
    const engagementRate = 0.05; // 5%

    // Calculations
    const getCostPerMonth = () => {
        if (packageType === 'qr') return 1500;
        const pricePerAuto = packageType === 'starter' ? 300 : 500;
        return autos * pricePerAuto;
    };

    const costPerMonth = getCostPerMonth();
    const totalCost = costPerMonth * duration;

    const dailyImpressions = autos * impressionsPerAutoDaily;
    const monthlyImpressions = dailyImpressions * 30;
    const totalImpressions = monthlyImpressions * duration;

    const cpm = (totalCost / (totalImpressions / 1000)).toFixed(2);
    const estimatedEngagement = Math.floor(totalImpressions * engagementRate); // 5% engagement rate

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />

            <main className="flex-grow pt-20 relative z-10">
                {/* Hero Section */}
                <section className="py-20 relative overflow-hidden text-center bg-transparent">
                    <div className="absolute inset-0 bg-hero-gradient opacity-20" />
                    <div className="container px-4 relative z-10 max-w-[1000px] mx-auto">
                        <h1 className="text-5xl md:text-6xl font-display mb-6 tracking-wide text-foreground">HOW IT WORKS</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                            From booking to verification in 5 simple steps.
                        </p>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-16">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <div className="grid md:grid-cols-5 gap-8 items-start relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                            {[
                                {
                                    icon: <MapPin className="w-8 h-8 text-primary" />,
                                    title: "1. Choose Your Package",
                                    desc: "Select Starter, Growth, or QR-only based on your marketing goal."
                                },
                                {
                                    icon: <Smartphone className="w-8 h-8 text-primary" />,
                                    title: "2. We Deploy Your Ads",
                                    desc: "We place your banner on autos and QR inside autos in your target area."
                                },
                                {
                                    icon: <Eye className="w-8 h-8 text-primary" />,
                                    title: "3. People See & Scan",
                                    desc: "Your brand gets daily street visibility and real engagement via QR scans."
                                },
                                {
                                    icon: <BarChart3 className="w-8 h-8 text-primary" />,
                                    title: "4. You Track Performance",
                                    desc: "Get scan data, engagement insights, and weekly proof photos."
                                },
                                {
                                    icon: <TrendingUp className="w-8 h-8 text-primary" />,
                                    title: "5. Scale or Optimize",
                                    desc: "Upgrade, expand to more autos, or refine areas based on performance."
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-white mb-6 group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300">
                                        <div className="bg-primary/10 p-4 rounded-full">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-display text-xl mb-3 text-foreground">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROI Calculator */}
                <section className="py-24 bg-white/50 backdrop-blur-md border-y border-white/20">
                    <div className="container px-4 max-w-[1000px] mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-display mb-4 flex items-center justify-center gap-3">
                                <Calculator className="w-8 h-8 text-primary" /> ROI CALCULATOR
                            </h2>
                            <p className="text-lg text-muted-foreground font-medium">Calculate how affordable hyperlocal dominance can be.</p>
                        </div>

                        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-card border border-white/60 grid lg:grid-cols-2 gap-12">
                            {/* Inputs */}
                            <div className="space-y-8">
                                <div>
                                    <label className="block text-sm font-bold text-foreground mb-3">Select Package</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {['starter', 'growth', 'qr'].map((pkg) => (
                                            <button
                                                key={pkg}
                                                onClick={() => setPackageType(pkg)}
                                                className={`py-3 rounded-xl text-sm font-bold transition-all ${packageType === pkg ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'}`}
                                            >
                                                {pkg === 'qr' ? 'QR-Only' : pkg.charAt(0).toUpperCase() + pkg.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-foreground mb-3 flex justify-between">
                                        <span>Number of Autos</span>
                                        <span className="text-primary">{autos}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="10"
                                        max="500"
                                        step="10"
                                        value={autos}
                                        onChange={(e) => setAutos(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
                                        <span>10</span>
                                        <span>500</span>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-foreground mb-3 flex justify-between">
                                        <span>Campaign Duration</span>
                                        <span className="text-primary">{duration} Month{duration > 1 ? 's' : ''}</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="1"
                                        max="12"
                                        value={duration}
                                        onChange={(e) => setDuration(parseInt(e.target.value))}
                                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-xs text-muted-foreground mt-2 font-medium">
                                        <span>1 Month</span>
                                        <span>1 Year</span>
                                    </div>
                                </div>
                            </div>

                            {/* Outputs */}
                            <div className="bg-slate-50 rounded-2xl p-8 flex flex-col justify-center space-y-6">
                                <div className="pb-6 border-b border-gray-200">
                                    <p className="text-sm text-muted-foreground font-medium mb-1">Total Estimated Spend</p>
                                    <p className="text-4xl font-display text-foreground">₹{totalCost.toLocaleString()}</p>
                                    <p className="text-xs text-blue-600 font-bold mt-1">₹{cpm} Cost per 1,000 views (CPM)</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flexjustify-between items-center">
                                        <div>
                                            <p className="text-sm text-muted-foreground font-medium">Monthly Impressions</p>
                                            <p className="text-xl font-bold text-foreground">{monthlyImpressions.toLocaleString()}+</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-muted-foreground font-medium">Est. Engagement Reach</p>
                                            <p className="text-xl font-bold text-green-600">~{estimatedEngagement.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-xl border border-gray-100 text-center mt-4">
                                    <p className="text-sm font-medium text-foreground">
                                        {packageType === 'qr' ?
                                            `Fixed campaign cost ≈ ₹${costPerMonth.toLocaleString()}/mo for bulk placement.` :
                                            `"${autos} autos × ₹${packageType === 'starter' ? 300 : 500} = ₹${costPerMonth.toLocaleString()}/mo`
                                        }
                                        <br />
                                        <span className="text-primary font-bold">Thousands of local impressions daily.</span>"
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
                            {[
                                {
                                    icon: <Timer className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                                    title: "20+ Mins",
                                    subtitle: "Dwell Time",
                                    desc: "Passengers are stuck in traffic with nothing to do but read your ad.",
                                    color: "bg-blue-500",
                                    shadow: "shadow-blue-500/20",
                                    border: "border-blue-200"
                                },
                                {
                                    icon: <Ban className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                                    title: "No Skip",
                                    subtitle: "Forced View",
                                    desc: "Unlike scrolling past ads online, a physical banner cannot be skipped or blocked.",
                                    color: "bg-rose-500",
                                    shadow: "shadow-rose-500/20",
                                    border: "border-rose-200"
                                },
                                {
                                    icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                                    title: "Hyperlocal",
                                    subtitle: "Precision Targeting",
                                    desc: "Target the exact 5km radius where your actual customers live and shop.",
                                    color: "bg-purple-500",
                                    shadow: "shadow-purple-500/20",
                                    border: "border-purple-200"
                                },
                                {
                                    icon: <Coins className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                                    title: "1/10th Cost",
                                    subtitle: "Massive ROI",
                                    desc: "Get city-wide visibility for the price of a single billboard.",
                                    color: "bg-emerald-500",
                                    shadow: "shadow-emerald-500/20",
                                    border: "border-emerald-200"
                                }
                            ].map((item, i) => (
                                <div key={i} className={`bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl border ${item.border} relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                                    <div className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 ${item.color} opacity-5 rounded-full blur-3xl -mr-6 -mt-6 md:-mr-10 md:-mt-10 group-hover:opacity-10 transition-opacity`} />

                                    <div className={`${item.color} w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>

                                    <h3 className="text-xl md:text-3xl font-display text-foreground mb-1">{item.title}</h3>
                                    <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider mb-2 md:mb-3">{item.subtitle}</p>
                                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24">
                    <div className="container px-4 max-w-[900px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-display mb-4 flex items-center justify-center gap-3">
                                <HelpCircle className="w-8 h-8 text-primary" /> FAQ
                            </h2>
                        </div>

                        <div className="max-w-[800px] mx-auto">
                            <Accordion type="single" collapsible className="w-full space-y-4">
                                {[
                                    { q: "How many people will see my ad?", a: "Auto-rickshaws operate 10–14 hours daily and pass through busy routes, giving your brand thousands of impressions every week in your target area." },
                                    { q: "Will I get proof that my ads are running?", a: "Yes. We provide weekly photo verification of your ads on autos so you can track your campaign's deployment." },
                                    { q: "Do people actually scan the QR?", a: "Yes. Passengers are idle during rides and often scan QR codes that offer value—like discounts, rewards, or interesting content. We help design this to maximize scans." },
                                    { q: "What kind of businesses is ADZO best for?", a: "It's perfect for hyperlocal businesses like Restaurants, Salons, Gyms, Coaching Centers, Real Estate, and Clinics, as well as D2C brands looking for brand awareness." },
                                    { q: "Can I choose the areas where my ads run?", a: "Yes. You can select specific localities. We perform 'cluster targeting' to ensure your autos dominate the zones where your customers live." },
                                    { q: "What is the minimum campaign size?", a: "We recommend a minimum of 10 autos to ensure meaningful visibility and reach in a chosen area." },
                                    { q: "Can I run a short trial campaign?", a: "Yes. You can start with a 1-month pilot campaign to validate results before scaling up to longer durations." },
                                    { q: "What happens if a banner is removed or damaged?", a: "We offer a replacement guarantee. If a banner is damaged or removed during the contracted period, we replace it for free." },
                                    { q: "Do you create the reels for us?", a: "Yes. Our creative team handles the reel creation optimized for auto-travel context (short, engaging, no-sound proof)." },
                                    { q: "Are there any hidden charges?", a: "None. Our pricing covers printing, installation, mounting, tracking, and reporting. Everything is transparent." }
                                ].map((item, i) => (
                                    <AccordionItem key={i} value={`item-${i}`} className="bg-white/60 backdrop-blur-sm border border-white/50 px-6 rounded-2xl data-[state=open]:bg-white/80 transition-all duration-300">
                                        <AccordionTrigger className="text-xl font-bold font-sans text-foreground hover:no-underline py-5 text-left">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground text-base pb-6 font-medium leading-relaxed">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-24 bg-white/50 backdrop-blur-md border-y border-white/20">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <h2 className="text-3xl md:text-4xl font-display text-center mb-16 tracking-wide text-foreground">WHAT OUR CLIENTS SAY</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    text: "We saw customers mentioning they found us through auto ads. ADZO made local marketing affordable and trackable.",
                                    author: "Restaurant Owner",
                                    loc: "Mumbai"
                                },
                                {
                                    text: "The QR scans helped us drive real footfall. It’s much better than flyers or posters.",
                                    author: "Salon Owner",
                                    loc: "Andheri"
                                },
                                {
                                    text: "ADZO gave us both street visibility and online engagement in one campaign.",
                                    author: "Gym Owner",
                                    loc: "Malad"
                                }
                            ].map((testimonial, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 relative">
                                    <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                                    <p className="text-lg text-foreground/80 font-medium italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                                    <div>
                                        <p className="font-bold text-foreground">{testimonial.author}</p>
                                        <p className="text-sm text-primary font-medium">{testimonial.loc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 z-0" />
                    <div className="container px-4 relative z-10 text-center max-w-[800px] mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display mb-6 text-foreground tracking-wide">Ready to dominate your local area?</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                            Book a free consultation and we’ll build a custom campaign for your brand.
                        </p>

                        <Button size="lg" className="h-16 px-12 rounded-2xl text-xl font-bold shadow-xl hover:scale-105 transition-all" onClick={() => window.open('https://api.whatsapp.com/send?phone=917977568891', '_blank')}>
                            Book a Free Consultation
                        </Button>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default HowItWorks;
