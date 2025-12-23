import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Truck, MessageCircle, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Your ads go on autos",
    description: "We print & place your brand message on targeted routes across Mumbai.",
    icon: Truck,
  },
  {
    number: "02",
    title: "People call/WhatsApp the number",
    description: "All responses come directly to you + automation captures every lead.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "You get every lead in your dashboard",
    description: "Track calls, WhatsApp leads, impressions – all in real-time.",
    icon: BarChart3,
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-background" id="how-it-works">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            HOW IT WORKS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to get your brand on Mumbai's streets
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  step: typeof steps[0];
  index: number;
  isVisible: boolean;
}

const StepCard = ({ step, index, isVisible }: StepCardProps) => {
  const Icon = step.icon;
  
  return (
    <div
      className={`relative bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border group ${
        isVisible ? 'animate-fade-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
    >
      {/* Number Badge */}
      <div className="absolute -top-4 left-8 bg-primary text-primary-foreground font-display text-2xl px-4 py-1 rounded-lg">
        {step.number}
      </div>

      {/* Icon */}
      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mt-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary" />
      </div>

      {/* Content */}
      <h3 className="font-display text-2xl text-foreground mb-3">
        {step.title.toUpperCase()}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {step.description}
      </p>
    </div>
  );
};

export default HowItWorks;
