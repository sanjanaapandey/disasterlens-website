
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  useEffect(() => {
    // Update title and metadata
    document.title = "DisasterLens - Predict & Prepare for Natural Disasters";
    
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
