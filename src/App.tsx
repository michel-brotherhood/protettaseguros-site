import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import Client from "./pages/Client";
import Broker from "./pages/Broker";
import About from "./pages/About";
import BusinessIntelligence from "./pages/BusinessIntelligence";
import Wellness from "./pages/Wellness";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import ProChange from "./pages/ProChange";
import SaudeAmbiental from "./pages/SaudeAmbiental";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/cliente" element={<Client />} />
        <Route path="/corretor" element={<Broker />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/sistema-bi" element={<BusinessIntelligence />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/cotacao" element={<Quote />} />
        <Route path="/prochange" element={<ProChange />} />
        <Route path="/saude-ambiental" element={<SaudeAmbiental />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
