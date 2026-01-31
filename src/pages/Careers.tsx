import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Careers = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 container px-4 mb-20">
                <div className="max-w-3xl mx-auto space-y-16">
                    <section className="text-center">
                        <h1 className="text-4xl md:text-5xl font-display mb-6 tracking-tight">Build the future of local advertising with us.</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We are an early-stage startup creating a better system for outdoor and transit advertising.
                            <br /><br />
                            If you enjoy:
                        </p>
                        <ul className="text-lg text-muted-foreground mt-4 space-y-2 font-medium">
                            <li>On-ground execution</li>
                            <li>Ownership and responsibility</li>
                            <li>Fast-paced startup environments</li>
                        </ul>
                        <p className="text-xl text-muted-foreground mt-6">You’ll feel at home here.</p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">Open roles (initial phase)</h2>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                            <li>Field Operations Executive</li>
                            <li>Local Sales & Partnerships</li>
                            <li>Content & Creative Coordinator</li>
                            <li>Tech & Automation Intern</li>
                        </ul>
                        <p className="text-sm text-muted-foreground/70 italic">(Roles will expand as we grow into new areas)</p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">Why work with us?</h2>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                            <li>Direct impact on real-world campaigns</li>
                            <li>High responsibility, low bureaucracy</li>
                            <li>Growth alongside the company</li>
                            <li>A practical, execution-first culture</li>
                        </ul>
                    </section>

                    <section className="bg-muted p-6 md:p-8 rounded-2xl text-center">
                        <p className="text-xl font-medium mb-2">📩 Email: <a href="mailto:adzo.co.team@gmail.com" className="text-primary hover:underline">adzo.co.team@gmail.com</a></p>
                        <p className="text-muted-foreground">(Resume + short introduction)</p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Careers;
