import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
    MapPin,
    Smartphone,
    Eye,
    BarChart3,
    TrendingUp,
    Calculator,
    Timer,
    Ban,
    Coins,
    HelpCircle
} from "lucide-react";
import { useState } from 'react';
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
        <div className="min-h-screen flex flex-col bg-[#09090b]">
            <Navbar />

            <main className="flex-grow pt-20 relative z-10">
                {/* Hero Section */}
                <section className="py-20 relative overflow-hidden text-center bg-transparent">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/25 rounded-full blur-[150px] -z-10 pointer-events-none" />
                    <div className="container px-4 relative z-10 max-w-[1000px] mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display mb-6 tracking-wide text-white drop-shadow-md">HOW IT <span className="text-primary italic">WORKS</span></h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            From booking to verification in 5 simple steps.
                        </p>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-16">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <div className="grid md:grid-cols-5 gap-8 items-start relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[48px] left-10 right-10 h-0.5 bg-white/10 -z-10"></div>

                            {[
                                {
                                    icon: <MapPin className="w-8 h-8 text-primary group-hover:text-black transition-colors" />,
                                    title: "1. Choose Your Package",
                                    desc: "Select Starter, Growth, or QR-only based on your marketing goal."
                                },
                                {
                                    icon: <Smartphone className="w-8 h-8 text-primary group-hover:text-black transition-colors" />,
                                    title: "2. We Deploy Your Ads",
                                    desc: "We place your banner on autos and QR inside autos in your target area."
                                },
                                {
                                    icon: <Eye className="w-8 h-8 text-primary group-hover:text-black transition-colors" />,
                                    title: "3. People See & Scan",
                                    desc: "Your brand gets daily street visibility and real engagement via QR scans."
                                },
                                {
                                    icon: <BarChart3 className="w-8 h-8 text-primary group-hover:text-black transition-colors" />,
                                    title: "4. You Track Performance",
                                    desc: "Get scan data, engagement insights, and weekly proof photos."
                                },
                                {
                                    icon: <TrendingUp className="w-8 h-8 text-primary group-hover:text-black transition-colors" />,
                                    title: "5. Scale or Optimize",
                                    desc: "Upgrade, expand to more autos, or refine areas based on performance."
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#111115] rounded-[1.5rem] md:rounded-3xl flex items-center justify-center shadow-lg border border-white/10 mb-5 md:mb-6 group-hover:bg-primary group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-300">
                                        <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl group-hover:bg-black/10 transition-colors">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <h3 className="font-display text-xl mb-3 text-white">{step.title}</h3>
                                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ROI Calculator */}
                <section className="py-24 bg-[#111115] border-y border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />

                    <div className="container px-4 max-w-[1100px] mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display mb-4 flex items-center justify-center gap-4 text-white">
                                <Calculator className="w-10 h-10 text-primary" /> ROI CALCULATOR
                            </h2>
                            <p className="text-lg text-slate-400 font-medium">Calculate how affordable hyperlocal dominance can be.</p>
                        </div>

                        <div className="bg-[#09090b] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white/10 grid lg:grid-cols-2 gap-12 lg:gap-16">
                            {/* Inputs */}
                            <div className="space-y-10">
                                <div>
                                    <label className="block text-sm font-bold text-white mb-4 uppercase tracking-widest text-primary/80">Select Package</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {['starter', 'growth', 'qr'].map((pkg) => (
                                            <button
                                                key={pkg}
                                                onClick={() => setPackageType(pkg)}
                                                className={`py-4 rounded-xl text-sm font-bold transition-all border ${packageType === pkg ? 'bg-primary text-black border-primary shadow-[0_0_15px_rgba(251,191,36,0.2)]' : 'bg-[#111115] text-slate-400 border-white/10 hover:border-white/20'}`}
                                            >
                                                {pkg === 'qr' ? 'QR-Only' : pkg.charAt(0).toUpperCase() + pkg.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-sm font-bold text-white uppercase tracking-widest text-primary/80">Number of Autos</label>
                                        <span className="text-primary font-display text-3xl">{autos}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="500"
                                        step="10"
                                        value={autos}
                                        onChange={(e) => setAutos(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-3 font-medium">
                                        <span>10 Autos</span>
                                        <span>500 Autos</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <label className="text-sm font-bold text-white uppercase tracking-widest text-primary/80">Campaign Duration</label>
                                        <span className="text-primary font-display text-3xl">{duration} <span className="text-lg">Mo</span></span>
                                    </div>
                                    <input
                                        type="range"
                                        min="1"
                                        max="12"
                                        value={duration}
                                        onChange={(e) => setDuration(parseInt(e.target.value))}
                                        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                                    />
                                    <div className="flex justify-between text-xs text-slate-500 mt-3 font-medium">
                                        <span>1 Month</span>
                                        <span>12 Months</span>
                                    </div>
                                </div>
                            </div>

                            {/* Outputs */}
                            <div className="bg-[#111115] border border-white/5 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-center">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/25 rounded-full blur-[50px] pointer-events-none" />

                                <div className="pb-8 border-b border-white/10 relative z-10">
                                    <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-2">Estimated Total Spend</p>
                                    <p className="text-5xl md:text-6xl font-display text-white drop-shadow-md">₹{totalCost.toLocaleString()}</p>
                                    <div className="inline-block mt-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-primary font-bold">
                                        ₹{cpm} <span className="text-slate-400 font-medium">Cost per 1,000 views (CPM)</span>
                                    </div>
                                </div>

                                <div className="pt-8 space-y-6 relative z-10">
                                    <div className="bg-[#09090b] p-4 rounded-xl border border-white/5 flex justify-between items-center">
                                        <p className="text-sm text-slate-400 font-medium tracking-wide">Monthly Impressions</p>
                                        <p className="text-2xl font-display text-white">{monthlyImpressions.toLocaleString()}+</p>
                                    </div>
                                    <div className="bg-[#09090b] p-4 rounded-xl border border-white/5 flex justify-between items-center">
                                        <p className="text-sm text-slate-400 font-medium tracking-wide">Est. Engaged Reach</p>
                                        <p className="text-2xl font-display text-primary">~{estimatedEngagement.toLocaleString()}</p>
                                    </div>
                                </div>

                                <div className="text-center mt-8 relative z-10">
                                    <p className="text-sm font-medium text-slate-400">
                                        {packageType === 'qr' ?
                                            `Fixed campaign cost ≈ ₹${costPerMonth.toLocaleString()}/mo for bulk placement.` :
                                            `"${autos} autos × ₹${packageType === 'starter' ? 300 : 500} = ₹${costPerMonth.toLocaleString()}/mo`
                                        }
                                        <br />
                                        <span className="text-white mt-1 block">Thousands of local impressions daily.</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Features grid below calculator */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                            {[
                                {
                                    icon: <Timer className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                                    title: "20+ Mins",
                                    subtitle: "Dwell Time",
                                    desc: "Passengers are stuck in traffic with nothing to do but read your ad.",
                                    color: "bg-blue-500",
                                },
                                {
                                    icon: <Ban className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                                    title: "No Skip",
                                    subtitle: "Forced View",
                                    desc: "Unlike scrolling past ads online, a physical banner cannot be skipped or blocked.",
                                    color: "bg-rose-500",
                                },
                                {
                                    icon: <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                                    title: "Hyperlocal",
                                    subtitle: "Precision Targeting",
                                    desc: "Target the exact 5km radius where your actual customers live and shop.",
                                    color: "bg-purple-500",
                                },
                                {
                                    icon: <Coins className="w-6 h-6 md:w-8 md:h-8 text-white" />,
                                    title: "1/10th Cost",
                                    subtitle: "Massive ROI",
                                    desc: "Get city-wide visibility for the price of a single billboard.",
                                    color: "bg-emerald-500",
                                }
                            ].map((item, i) => (
                                <div key={i} className={`bg-[#09090b] p-5 md:p-6 rounded-[1.5rem] md:rounded-3xl border border-white/10 relative overflow-hidden group hover:shadow-2xl hover:-translate-y-2 hover:border-white/20 transition-all duration-300`}>
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} opacity-10 rounded-full blur-[40px] -mr-10 -mt-10 group-hover:opacity-20 transition-opacity`} />

                                    <div className={`${item.color} w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>

                                    <h3 className="text-2xl font-display text-white mb-2">{item.title}</h3>
                                    <p className="text-[10px] md:text-xs font-bold ${item.color.replace('bg-', 'text-')} uppercase tracking-wider mb-3 text-slate-400">{item.subtitle}</p>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 bg-[#09090b]">
                    <div className="container px-4 max-w-[900px] mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-display mb-4 flex items-center justify-center gap-4 text-white">
                                <HelpCircle className="w-10 h-10 text-primary" /> FAQ
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
                                    <AccordionItem key={i} value={`item-${i}`} className="bg-[#111115] border border-white/5 px-6 rounded-2xl data-[state=open]:bg-white/5 data-[state=open]:border-primary/30 transition-all duration-300">
                                        <AccordionTrigger className="text-lg md:text-xl font-bold font-sans text-white hover:no-underline py-6 text-left hover:text-primary transition-colors">
                                            {item.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-400 text-base pb-6 font-medium leading-relaxed">
                                            {item.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 relative overflow-hidden bg-[#111115] border-t border-white/5">
                    <div className="absolute inset-0 bg-primary/5 z-0" />
                    <div className="container px-4 relative z-10 text-center max-w-[800px] mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display mb-6 text-white tracking-wide">Ready to dominate your local area?</h2>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                            Book a free consultation and we'll build a custom campaign for your brand.
                        </p>

                        <Button size="lg" className="h-16 px-12 rounded-2xl text-xl font-bold bg-primary text-black hover:bg-primary/90 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] hover:scale-105 transition-all" onClick={() => window.open('https://api.whatsapp.com/send?phone=919167273951', '_blank')}>
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
