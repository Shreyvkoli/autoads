import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Basic",
    price: "₹1,000",
    period: "/auto/month",
    description: "Back panel advertisement",
    features: ["Back panel ad placement", "Standard printing", "Monthly reporting"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹1,200",
    period: "/auto/month",
    description: "Back + Side panels",
    features: ["Back panel ad placement", "Both side panels", "Premium printing", "Weekly reporting"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹1,500",
    period: "/auto/month",
    description: "Back + Sides + QR lead tracking + automation",
    features: ["All panel placements", "QR code integration", "Lead tracking automation", "Real-time dashboard", "Priority support"],
    popular: false,
  },
];

const addons = [
  { text: "Printing included", icon: Check },
  { text: "Tracking included", icon: Check },
  { text: "Automation included", icon: Check },
];

const Packages = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-dark-gradient" id="packages">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-6xl text-secondary-foreground mb-4">
            CHOOSE YOUR PACKAGE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible pricing that scales with your campaign needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => (
            <PackageCard key={pkg.name} pkg={pkg} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Add-ons */}
        <div className={`flex flex-wrap justify-center gap-6 ${isVisible ? 'animate-fade-up delay-500' : 'opacity-0'}`} style={{ animationFillMode: 'forwards' }}>
          {addons.map((addon) => (
            <div key={addon.text} className="flex items-center gap-2 bg-success/20 px-4 py-2 rounded-full">
              <addon.icon className="w-5 h-5 text-success" />
              <span className="text-secondary-foreground font-medium">{addon.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface PackageCardProps {
  pkg: typeof packages[0];
  index: number;
  isVisible: boolean;
}

const PackageCard = ({ pkg, index, isVisible }: PackageCardProps) => {
  return (
    <div
      className={`relative bg-card rounded-2xl p-8 transition-all duration-500 border-2 ${
        pkg.popular ? 'border-primary shadow-glow scale-105' : 'border-border shadow-card hover:shadow-card-hover'
      } ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
    >
      {/* Popular Badge */}
      {pkg.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-semibold text-sm px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="font-display text-3xl text-foreground mb-2">{pkg.name.toUpperCase()}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="font-display text-5xl text-primary">{pkg.price}</span>
          <span className="text-muted-foreground">{pkg.period}</span>
        </div>
        <p className="text-muted-foreground mt-2">{pkg.description}</p>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check className="w-5 h-5 text-success flex-shrink-0" />
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button variant={pkg.popular ? "cta" : "outline"} className="w-full" size="lg">
        Get Started
      </Button>
    </div>
  );
};

export default Packages;
