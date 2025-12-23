import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import dashboardLeads from "@/assets/dashboard-leads.jpg";
import dashboardMap from "@/assets/dashboard-map.jpg";
import dashboardAutos from "@/assets/dashboard-autos.jpg";

const screenshots = [
  {
    image: dashboardLeads,
    title: "Lead Tracking",
    description: "Real-time lead list with phone numbers, timestamps, and status",
  },
  {
    image: dashboardMap,
    title: "Route Coverage",
    description: "Mumbai heat map showing your campaign reach",
  },
  {
    image: dashboardAutos,
    title: "Photo Proof",
    description: "Before/after photos of your ads on autos",
  },
];

const DashboardScreenshots = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 md:py-32 bg-muted" id="dashboard">
      <div className="container px-4">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-6xl text-foreground mb-4">
            YOUR CAMPAIGN DASHBOARD
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track every lead, every impression, every auto – all in one place
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <ScreenshotCard key={screenshot.title} screenshot={screenshot} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ScreenshotCardProps {
  screenshot: typeof screenshots[0];
  index: number;
  isVisible: boolean;
}

const ScreenshotCard = ({ screenshot, index, isVisible }: ScreenshotCardProps) => {
  return (
    <div
      className={`group ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
      style={{ animationDelay: `${(index + 1) * 150}ms`, animationFillMode: 'forwards' }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-card group-hover:shadow-card-hover transition-all duration-500 bg-secondary">
        <img
          src={screenshot.image}
          alt={screenshot.title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="font-display text-2xl text-foreground mb-1">{screenshot.title.toUpperCase()}</h3>
        <p className="text-muted-foreground text-sm">{screenshot.description}</p>
      </div>
    </div>
  );
};

export default DashboardScreenshots;
