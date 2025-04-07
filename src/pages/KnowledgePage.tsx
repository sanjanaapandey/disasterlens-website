
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DisasterKnowledge from '@/components/DisasterKnowledge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, BookOpen, Download, FileText } from 'lucide-react';

const KnowledgePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Knowledge Center</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Understanding Natural Disasters
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Explore our comprehensive guides to various types of natural disasters, their causes, effects, and how to prepare for them.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Safety Guide
                </Button>
                <Button variant="outline" className="flex items-center">
                  <FileText className="h-4 w-4 mr-2" />
                  Emergency Checklist
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <DisasterKnowledge />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-disaster-blue/10 to-disaster-teal/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white rounded-full p-2 shadow">
                    <AlertTriangle className="h-6 w-6 text-disaster-blue" />
                  </div>
                  <h3 className="text-xl font-semibold">Disaster Risk Reduction</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Learn about strategies for reducing disaster risks and building community resilience through proactive planning and preparedness.
                </p>
                
                <Button variant="outline" className="w-full">Learn About DRR</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-disaster-orange/10 to-disaster-red/10">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white rounded-full p-2 shadow">
                    <BookOpen className="h-6 w-6 text-disaster-orange" />
                  </div>
                  <h3 className="text-xl font-semibold">Climate Change Impact</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Explore how climate change is affecting the frequency and intensity of natural disasters around the world.
                </p>
                
                <Button variant="outline" className="w-full">Explore Climate Impact</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default KnowledgePage;
