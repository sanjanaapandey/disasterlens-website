
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import StatCards from '@/components/StatCards';
import WorldMap from '@/components/WorldMap';
import PredictionModel from '@/components/PredictionModel';
import DisasterKnowledge from '@/components/DisasterKnowledge';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add entry animation to sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pastel-lavender via-pastel-blue to-pastel-mint">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <section className="py-12 bg-gradient-to-r from-pastel-mint to-pastel-blue opacity-0 transition-opacity duration-1000">
          <div className="container mx-auto px-4">
            <StatCards />
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-b from-pastel-purple to-pastel-pink opacity-0 transition-opacity duration-1000">
          <div className="container mx-auto px-4">
            <WorldMap />
          </div>
        </section>
        
        <Separator className="bg-pastel-purple h-1 opacity-50" />
        
        <section className="py-16 bg-gradient-to-r from-pastel-pink to-pastel-yellow opacity-0 transition-opacity duration-1000">
          <div className="container mx-auto px-4">
            <PredictionModel />
          </div>
        </section>
        
        <Separator className="bg-pastel-purple h-1 opacity-50" />
        
        <section className="py-16 bg-gradient-to-b from-pastel-blue to-pastel-green opacity-0 transition-opacity duration-1000">
          <div className="container mx-auto px-4">
            <DisasterKnowledge />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
