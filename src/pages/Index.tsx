
import Hero from '@/components/Hero';
import StatCards from '@/components/StatCards';
import WorldMap from '@/components/WorldMap';
import PredictionModel from '@/components/PredictionModel';
import DisasterKnowledge from '@/components/DisasterKnowledge';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <section className="py-12 bg-gradient-to-r from-pastel-blue to-pastel-purple">
          <div className="container mx-auto px-4">
            <StatCards />
          </div>
        </section>
        
        <section className="py-16 bg-gradient-to-b from-pastel-lavender to-pastel-mint">
          <div className="container mx-auto px-4">
            <WorldMap />
          </div>
        </section>
        
        <Separator className="bg-pastel-blue" />
        
        <section className="py-16 bg-gradient-to-r from-pastel-purple to-pastel-pink">
          <div className="container mx-auto px-4">
            <PredictionModel />
          </div>
        </section>
        
        <Separator className="bg-pastel-blue" />
        
        <section className="py-16 bg-gradient-to-b from-pastel-yellow to-pastel-green">
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
