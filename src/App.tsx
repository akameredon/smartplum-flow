import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EmergencyService from "./pages/EmergencyService";
import LeakDetection from "./pages/LeakDetection";
import DrainCleaning from "./pages/DrainCleaning";
import WaterHeaterService from "./pages/WaterHeaterService";
import PipeRepair from "./pages/PipeRepair";
import BathroomPlumbing from "./pages/BathroomPlumbing";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import ServiceAreas from "./pages/ServiceAreas";
import PricingCalculator from "./pages/PricingCalculator";
import BusinessDashboard from "./pages/BusinessDashboard";
import CustomerPortal from "./pages/CustomerPortal";
import MaintenanceScheduler from "./pages/MaintenanceScheduler";
import ServiceGuides from "./pages/ServiceGuides";
import PhotoGallery from "./pages/PhotoGallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/emergency-plumbing" element={<EmergencyService />} />
          <Route path="/leak-detection" element={<LeakDetection />} />
          <Route path="/drain-cleaning" element={<DrainCleaning />} />
          <Route path="/water-heater-service" element={<WaterHeaterService />} />
          <Route path="/pipe-repair" element={<PipeRepair />} />
          <Route path="/bathroom-plumbing" element={<BathroomPlumbing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/pricing-calculator" element={<PricingCalculator />} />
          <Route path="/business-dashboard" element={<BusinessDashboard />} />
          <Route path="/customer-portal" element={<CustomerPortal />} />
          <Route path="/maintenance-scheduler" element={<MaintenanceScheduler />} />
          <Route path="/service-guides" element={<ServiceGuides />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
