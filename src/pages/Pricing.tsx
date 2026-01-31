import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, ClipboardList, Zap, BarChart2, MessageSquare } from "lucide-react";

const Pricing = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20 relative z-10">
                {/* Hero Section */}
                <section className="py-20 bg-transparent relative overflow-hidden text-center">
                    <div className="container px-4 relative z-10 max-w-[1000px] mx-auto">
                        <h1 className="text-5xl md:text-6xl font-display mb-6 tracking-wide text-foreground">ADZO Pricing</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                            Hyperlocal advertising that combines on-ground visibility + digital engagement — all trackable, all transparent.
                        </p>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="py-10 pb-24">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Starter Package - Green */}
                            <div className="bg-white/80 backdrop-blur-md border border-green-200 rounded-[2rem] p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                                <h3 className="text-xl md:text-2xl font-display tracking-wide mb-2 text-foreground">Starter Package</h3>
                                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 font-display">₹300 <span className="text-base md:text-lg text-muted-foreground font-sans font-normal">/ auto / month</span></div>
                                <p className="text-muted-foreground text-sm font-medium mb-8 min-h-[40px]">Best for local businesses starting hyperlocal marketing.</p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "Back banner on auto",
                                        "QR code inside auto",
                                        "2 brand reels",
                                        "Scan & engagement tracking",
                                        "Monthly performance report",
                                        "Installation + verification included"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1 bg-green-100 p-1 rounded-full"><Check className="w-3.5 h-3.5 text-green-700" /></div>
                                            <span className="text-sm font-medium text-foreground/80">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Minimum Booking</span>
                                        <span className="font-semibold text-foreground">10 autos</span>
                                    </div>
                                    <div className="mb-6">
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Ideal For</span>
                                        <span className="font-medium text-foreground text-sm">Restaurants, salons, gyms, clinics, local stores</span>
                                    </div>
                                    <Button className="w-full rounded-xl bg-green-600 hover:bg-green-700 font-bold" onClick={() => window.open('https://api.whatsapp.com/send?phone=917977568891', '_blank')}>
                                        Choose Starter
                                    </Button>
                                </div>
                            </div>

                            {/* Growth Package - Blue */}
                            <div className="bg-white/90 backdrop-blur-md border-2 border-blue-500 rounded-[2rem] p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden transform md:-translate-y-4 z-10">
                                <div className="absolute top-0 inset-x-0 h-2 bg-blue-500"></div>
                                <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Most Popular</div>

                                <h3 className="text-2xl md:text-3xl font-display tracking-wide mb-2 text-foreground">Growth Package</h3>
                                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 font-display">₹500 <span className="text-base md:text-lg text-muted-foreground font-sans font-normal">/ auto / month</span></div>
                                <p className="text-muted-foreground text-sm font-medium mb-8 min-h-[40px]">Best for brands looking for stronger visibility and faster results.</p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "Back banner on auto",
                                        "QR code inside auto",
                                        "4 brand reels",
                                        "Scan & engagement tracking",
                                        "Priority placement across autos",
                                        "Faster verification & support",
                                        "Area-focused deployment strategy",
                                        "Enhanced performance reporting",
                                        "Installation + verification included"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1 bg-blue-100 p-1 rounded-full"><Check className="w-3.5 h-3.5 text-blue-700" /></div>
                                            <span className="text-sm font-medium text-foreground/80">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <div className="mb-4">
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Minimum Booking</span>
                                        <span className="font-semibold text-foreground">10 autos</span>
                                    </div>
                                    <div className="mb-6">
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Ideal For</span>
                                        <span className="font-medium text-foreground text-sm">Franchises, multi-location brands, aggressive growth campaigns</span>
                                    </div>
                                    <Button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 font-bold text-base shadow-lg shadow-blue-200" onClick={() => window.open('https://api.whatsapp.com/send?phone=917977568891', '_blank')}>
                                        Choose Growth
                                    </Button>
                                </div>
                            </div>

                            {/* QR-Only Package - Orange */}
                            <div className="bg-white/80 backdrop-blur-md border border-orange-200 rounded-[2rem] p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                                <h3 className="text-xl md:text-2xl font-display tracking-wide mb-2 text-foreground">QR-Only Package</h3>
                                <div className="text-3xl md:text-3xl font-bold text-orange-600 mb-2 font-display">₹1,500 <span className="text-base md:text-lg text-muted-foreground font-sans font-normal">/ month</span></div>
                                <p className="text-muted-foreground text-sm font-medium mb-8 min-h-[40px]">Best for brands that want digital discovery without physical banners.</p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "2 brand reels",
                                        "QR placement inside autos",
                                        "Engagement & scan tracking",
                                        "Area-based exposure",
                                        "Monthly insights report"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="mt-1 bg-orange-100 p-1 rounded-full"><Check className="w-3.5 h-3.5 text-orange-700" /></div>
                                            <span className="text-sm font-medium text-foreground/80">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-gray-100">
                                    <div className="mb-14"> {/* Added spacing to align with other cards */}
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Ideal For</span>
                                        <span className="font-medium text-foreground text-sm">Online brands, new launches, limited budgets</span>
                                    </div>
                                    <div className="mb-0"></div> {/* Spacer */}
                                    <Button className="w-full rounded-xl bg-orange-600 hover:bg-orange-700 font-bold" onClick={() => window.open('https://api.whatsapp.com/send?phone=917977568891', '_blank')}>
                                        Choose QR-Only
                                    </Button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Add-ons & What You Get */}
                <section className="py-16 bg-white/50 backdrop-blur-sm border-t border-white/20">
                    <div className="container px-4 max-w-[1200px] mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Add-ons */}
                            <div>
                                <h3 className="text-3xl font-display mb-8 text-foreground">Targeted Add-ons</h3>
                                <div className="bg-white/70 rounded-3xl p-8 border border-white/50 shadow-sm space-y-4">
                                    {[
                                        { name: "Extra reel", price: "₹500 / month" },
                                        { name: "Area exclusivity", price: "Custom pricing" },
                                        { name: "City-wide campaign", price: "Custom pricing" },
                                        { name: "Spin-the-wheel promotions", price: "Custom pricing" },
                                        { name: "Premium QR placement", price: "Custom pricing" },
                                    ].map((addon, i) => (
                                        <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0 last:pb-0">
                                            <span className="font-medium text-foreground">{addon.name}</span>
                                            <span className="text-primary font-bold">{addon.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* What You Get */}
                            <div>
                                <h3 className="text-3xl font-display mb-8 text-foreground">What You Get With Every Campaign</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        "Verified auto placements",
                                        "Weekly photo proof",
                                        "QR-based tracking",
                                        "Transparent reporting",
                                        "Replacement guarantee",
                                        "Dedicated support"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white/70 p-4 rounded-2xl border border-white/50 shadow-sm">
                                            <div className="bg-primary/10 p-2 rounded-full">
                                                <Check className="w-4 h-4 text-primary" />
                                            </div>
                                            <span className="font-medium text-sm text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 z-0" />
                    <div className="container px-4 relative z-10 text-center max-w-[800px] mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display mb-6 text-foreground tracking-wide">Not Sure Which Package Fits You?</h2>
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

export default Pricing;
