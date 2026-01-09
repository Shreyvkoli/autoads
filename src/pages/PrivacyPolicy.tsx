import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 container px-4 mb-20">
                <div className="max-w-3xl mx-auto space-y-16">
                    <section className="text-center">
                        <h1 className="text-4xl md:text-5xl font-display mb-6 tracking-tight">Your privacy matters to us.</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            This Privacy Policy explains how we collect, use, and protect information.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">Information we collect</h2>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                            <li>Contact details of businesses advertising with us</li>
                            <li>Auto driver information strictly for campaign execution</li>
                            <li>Basic operational data required to run campaigns</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">What we do NOT collect</h2>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                            <li>No personal consumer data</li>
                            <li>No unnecessary tracking</li>
                            <li>No selling or sharing of data</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">How we use information</h2>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                            <li>To manage and execute advertising campaigns</li>
                            <li>To coordinate with auto drivers</li>
                            <li>To communicate campaign-related updates</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">Data protection</h2>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                            <li>Data access is limited to authorized team members</li>
                            <li>Secure storage practices are followed</li>
                            <li>No misuse or unauthorized sharing</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">Third-party tools</h2>
                        <p className="text-lg text-muted-foreground">We may use trusted third-party services for:</p>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                            <li>Hosting and infrastructure</li>
                            <li>Communication and analytics <span className="text-sm italic">(Only when required for operations)</span></li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">Policy updates</h2>
                        <p className="text-lg text-muted-foreground">
                            This policy may be updated as our platform evolves.
                            <br />
                            The latest version will always be available on this page.
                        </p>
                    </section>

                    <section className="bg-muted p-8 rounded-2xl text-center">
                        <p className="text-xl font-medium">📧 For any privacy concerns: <a href="mailto:privacy@yourbrand.in" className="text-primary hover:underline">privacy@yourbrand.in</a></p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
