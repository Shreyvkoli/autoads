import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AutoAds from "./pages/AutoAds";
import QrDeals from "./pages/QrDeals";
import NotFound from "./pages/NotFound";

import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

import Pricing from "./pages/Pricing";
import HowItWorks from "./pages/HowItWorks";

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/auto-ads" element={<AutoAds />} />
              <Route path="/qr-deals" element={<QrDeals />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
