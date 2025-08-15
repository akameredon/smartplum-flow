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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
