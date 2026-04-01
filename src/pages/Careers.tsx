import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#09090b]">
            <Navbar />
            <main className="flex-grow pt-24 container px-4 mb-20 max-w-4xl mx-auto">
                <div className="space-y-16">
                    <section className="text-center animate-fade-up">
                        <h1 className="text-4xl md:text-5xl font-display mb-6 tracking-wide text-white drop-shadow-sm">Build the future of local advertising.</h1>
                        <p className="text-xl text-slate-400 leading-relaxed font-medium">
                            We are an early-stage startup creating a better system for outdoor and transit advertising.
                            <br /><br />
                            If you enjoy:
                        </p>
                        <div className="inline-block text-left mt-8">
                            <ul className="text-lg text-slate-300 space-y-4 font-medium">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> On-ground execution</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Ownership and responsibility</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary" /> Fast-paced startup environments</li>
                            </ul>
                        </div>
                        <p className="text-xl text-primary font-bold mt-10 tracking-wide inline-block border-t border-white/10 pt-8 w-full">You'll feel at home here.</p>
                    </section>

                    <section className="space-y-6 bg-[#111115] border border-white/10 p-10 rounded-[2.5rem] shadow-xl">
                        <h2 className="text-3xl font-display tracking-wide text-white">Open roles <span className="text-slate-500 font-sans font-medium text-xl ml-2 tracking-normal">(initial phase)</span></h2>
                        <ul className="grid sm:grid-cols-2 gap-4 text-lg text-slate-300 font-medium">
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-primary/40 hover:bg-white/10 hover:-translate-y-1 transition-all">Field Operations Executive</li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-primary/40 hover:bg-white/10 hover:-translate-y-1 transition-all">Local Sales & Partnerships</li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-primary/40 hover:bg-white/10 hover:-translate-y-1 transition-all">Content & Creative Coordinator</li>
                            <li className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:border-primary/40 hover:bg-white/10 hover:-translate-y-1 transition-all">Tech & Automation Intern</li>
                        </ul>
                        <p className="text-sm text-slate-500 italic mt-6">(Roles will expand as we grow into new areas)</p>
                    </section>

                    <section className="space-y-6 pl-4">
                        <h2 className="text-3xl font-display tracking-wide text-white mb-8">Why work with <span className="text-primary italic">us?</span></h2>
                        <ul className="space-y-6 text-lg text-slate-300 font-medium">
                            <li className="flex items-start gap-4"><span className="text-primary text-2xl drop-shadow-sm">🚀</span> Direct impact on real-world campaigns</li>
                            <li className="flex items-start gap-4"><span className="text-primary text-2xl drop-shadow-sm">⚡</span> High responsibility, low bureaucracy</li>
                            <li className="flex items-start gap-4"><span className="text-primary text-2xl drop-shadow-sm">🌱</span> Growth alongside the company</li>
                            <li className="flex items-start gap-4"><span className="text-primary text-2xl drop-shadow-sm">🛠️</span> A practical, execution-first culture</li>
                        </ul>
                    </section>

                    <section className="bg-primary/5 hover:bg-primary/10 transition-colors border border-primary/20 p-8 md:p-12 rounded-[2.5rem] text-center shadow-[0_0_30px_rgba(251,191,36,0.05)]">
                        <p className="text-3xl font-display text-white mb-6 tracking-wide drop-shadow-sm">Ready to apply?</p>
                        <p className="text-xl text-slate-300 font-medium mb-4">
                            📩 Email: <a href="mailto:adzo.co.team@gmail.com" className="text-primary hover:text-primary/80 transition-colors font-bold underline underline-offset-4 decoration-primary/40 hover:decoration-primary">adzo.co.team@gmail.com</a>
                        </p>
                        <p className="text-slate-500 text-sm font-medium">(Send your Resume + short introduction)</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;
