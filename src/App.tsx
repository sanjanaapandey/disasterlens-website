
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import Index from "./pages/Index";
import AlertsPage from "./pages/AlertsPage";
import KnowledgePage from "./pages/KnowledgePage";
import PredictPage from "./pages/PredictPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Wrapped routes with AnimatePresence for transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Index />
          </PageTransition>
        } />
        <Route path="/alerts" element={
          <PageTransition>
            <AlertsPage />
          </PageTransition>
        } />
        <Route path="/knowledge" element={
          <PageTransition>
            <KnowledgePage />
          </PageTransition>
        } />
        <Route path="/predict" element={
          <PageTransition>
            <PredictPage />
          </PageTransition>
        } />
        <Route path="*" element={
          <PageTransition>
            <NotFound />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="bg-white min-h-screen">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
