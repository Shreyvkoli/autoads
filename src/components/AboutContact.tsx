import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

const AboutContact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        toast({
          title: "Could not send message",
          description: "Please try again in a moment.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message sent",
        description: "We’ll get back to you shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background" id="contact">
      <div className="container px-4">
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* About */}
            <div className={`${isVisible ? 'animate-slide-left' : 'opacity-0'}`} style={{ animationFillMode: 'forwards' }}>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                ABOUT US
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We are a hyperlocal performance media company using autos and QR funnels to deliver real, trackable leads for brands. No vanity metrics – just verified placements, captured leads, and measurable ROI.
              </p>
              <p className="text-muted-foreground mb-8">
                Based in Mumbai, we partner with thousands of auto-rickshaw drivers to bring your brand message directly to the streets where your customers live, work, and shop.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">Andheri West, Mumbai, Maharashtra 400058</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">hello@autoads.in</span>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild variant="cta" size="lg" className="gap-2">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="tel:+919876543210">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-card rounded-2xl p-8 shadow-card border border-border ${isVisible ? 'animate-slide-right' : 'opacity-0'}`} style={{ animationFillMode: 'forwards' }}>
              <h3 className="font-display text-3xl text-foreground mb-6">GET IN TOUCH</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="john@company.com"
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-foreground placeholder:text-muted-foreground"
                    placeholder="Tell us about your campaign needs..."
                    disabled={isSubmitting}
                    required
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
