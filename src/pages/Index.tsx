
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <StatCards />
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <WorldMap />
          </div>
        </section>
        
        <Separator />
        
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <PredictionModel />
          </div>
        </section>
        
        <Separator />
        
        <section className="py-16">
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
