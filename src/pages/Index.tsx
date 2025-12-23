import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionSelector from "@/components/SolutionSelector";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AutoAds - Hyperlocal Advertising Solutions</title>
        <meta
          name="description"
          content="Reach thousands daily through Auto Advertising or QR-based Deal Discovery. The best hyperlocal advertising platform in India."
        />
      </Helmet>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <SolutionSelector />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
};

export default Index;

