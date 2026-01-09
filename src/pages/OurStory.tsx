import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurStory = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-24 container px-4 mb-20">
                <div className="max-w-3xl mx-auto space-y-16">
                    <section className="text-center">
                        <h1 className="text-4xl md:text-5xl font-display mb-6 tracking-tight">Built for real visibility. Not fake impressions.</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Auto advertising has always had a trust problem.
                            <br /><br />
                            Stickers get placed, payments are made — but brands are left guessing:
                            <br />
                            Was the ad actually displayed?
                            <br />
                            Is it still on the vehicle?
                            <br />
                            Is anyone accountable?
                            <br /><br />
                            We started this company to fix exactly that.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">The problem we noticed</h2>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                            <li>No transparency in traditional auto advertising</li>
                            <li>No verification once the sticker is placed</li>
                            <li>No structured system to manage drivers or campaigns</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">What we changed</h2>
                        <p className="text-lg text-muted-foreground">We redesigned auto advertising to be organized, verifiable, and execution-driven.</p>
                        <ul className="list-disc pl-5 space-y-2 text-lg text-muted-foreground">
                            <li>Every auto is registered before onboarding</li>
                            <li>Campaigns run for a defined duration</li>
                            <li>Drivers are directly connected to our system</li>
                            <li>Execution is monitored instead of assumed</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">What we believe</h2>
                        <p className="text-lg text-muted-foreground">
                            Outdoor advertising should be visible on the road — not just on paper.
                            <br /><br />
                            We don’t promise unrealistic reach.
                            <br />
                            We focus on consistent, local, real-world exposure.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-3xl font-display tracking-tight">Our vision</h2>
                        <p className="text-lg text-muted-foreground">
                            We are starting with focused local areas and building a scalable, accountable auto advertising network — city by city.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default OurStory;
