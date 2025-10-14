import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import BioImmune from "./pages/GlobalBusiness/BioImmune";
import StemCells from "./pages/GlobalBusiness/StemCells";
import ElderlyCare from "./pages/GlobalBusiness/ElderlyCare";
import ModernCommerce from "./pages/GlobalBusiness/ModernCommerce";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/global-business/bio-immune" element={<BioImmune />} />
          <Route path="/global-business/stem-cells" element={<StemCells />} />
          <Route path="/global-business/elderly-care" element={<ElderlyCare />} />
          <Route path="/global-business/modern-commerce" element={<ModernCommerce />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
