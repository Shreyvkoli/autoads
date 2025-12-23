import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Eye, MapPin, Target, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "High Visibility",
    description: "10,000+ daily impressions per auto across busy Mumbai routes",
  },
  {
    icon: MapPin,
    title: "Street-Level Attention",
    description: "Eye-level ads that pedestrians and commuters can't miss",
  },
  {
    icon: Target,
    title: "Route Targeting",
    description: "Choose specific areas, markets, and routes for your campaign",
  },
  {
    icon: Zap,
    title: "Lead Capture Automation",
    description: "QR codes + WhatsApp automation capture every interested lead",
  },
  {
    icon: ShieldCheck,
    title: "No Wastage",
    description: "Pay only for verified placement with photo proof",
  },
];

const WhyBrandsLoveUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-background" id="why-us">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            WHY BRANDS LOVE US
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for successful street-level advertising
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: typeof features[0];
  index: number;
  isVisible: boolean;
}

const FeatureCard = ({ feature, index, isVisible }: FeatureCardProps) => {
  const Icon = feature.icon;
  
  return (
    <div
      className={`flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group ${
        isVisible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${(index + 1) * 100}ms`, animationFillMode: 'forwards' }}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold text-lg text-foreground mb-1">{feature.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
};

export default WhyBrandsLoveUs;
