
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DisasterKnowledge from '@/components/DisasterKnowledge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, BookOpen, Info } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const drrContent = (
  <div className="space-y-4">
    <p>
      Disaster Risk Reduction (DRR) is the concept and practice of reducing disaster risks through systematic efforts to analyze and manage the causal factors of disasters.
    </p>
    <h3 className="font-semibold text-lg mt-4">Key Components of DRR:</h3>
    <ul className="space-y-2 pl-5 list-disc">
      <li>Risk assessment and analysis</li>
      <li>Prevention and mitigation measures</li>
      <li>Early warning systems</li>
      <li>Preparedness planning</li>
      <li>Community-based disaster risk management</li>
      <li>Policy development and institutional strengthening</li>
    </ul>
    <h3 className="font-semibold text-lg mt-4">Benefits of DRR:</h3>
    <ul className="space-y-2 pl-5 list-disc">
      <li>Reduced loss of life and property</li>
      <li>Enhanced resilience of communities</li>
      <li>Protection of development investments</li>
      <li>More effective emergency response</li>
      <li>Sustainable development</li>
    </ul>
  </div>
);

const climateContent = (
  <div className="space-y-4">
    <p>
      Climate change is altering the frequency, intensity, spatial extent, duration, and timing of extreme weather events, often making them more severe and unpredictable.
    </p>
    <h3 className="font-semibold text-lg mt-4">Climate Change Impact on Disasters:</h3>
    <ul className="space-y-2 pl-5 list-disc">
      <li><strong>Rising Sea Levels:</strong> Increased coastal flooding and erosion</li>
      <li><strong>Changing Precipitation Patterns:</strong> More severe droughts and floods</li>
      <li><strong>Higher Temperatures:</strong> Heat waves and wildfires</li>
      <li><strong>Stronger Storms:</strong> More intense tropical cyclones</li>
      <li><strong>Ocean Acidification:</strong> Impact on marine ecosystems</li>
    </ul>
    <h3 className="font-semibold text-lg mt-4">Adaptation Strategies:</h3>
    <ul className="space-y-2 pl-5 list-disc">
      <li>Climate-resilient infrastructure</li>
      <li>Ecosystem-based approaches</li>
      <li>Early warning systems</li>
      <li>Diversification of livelihoods</li>
      <li>Community-based adaptation</li>
    </ul>
  </div>
);

const KnowledgePage = () => {
  const [dialogContent, setDialogContent] = useState<{ title: string, content: React.ReactNode } | null>(null);

  const openDialog = (title: string, content: React.ReactNode) => {
    setDialogContent({ title, content });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pastel-bg">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
                <BookOpen className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Knowledge Center</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Understanding Natural Disasters
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Explore our comprehensive guides to various types of natural disasters, their causes, effects, and how to prepare for them.
              </p>
              
              <Button className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white font-medium">
                Get Alerts for Your Region
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <DisasterKnowledge />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-blue-100 hover-lift transition-all hover:shadow-md cursor-pointer" onClick={() => openDialog("Disaster Risk Reduction", drrContent)}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white rounded-full p-2 shadow">
                    <AlertTriangle className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-700">Disaster Risk Reduction</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Learn about strategies for reducing disaster risks and building community resilience through proactive planning and preparedness.
                </p>
                
                <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">Learn About DRR</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-orange-100 hover-lift transition-all hover:shadow-md cursor-pointer" onClick={() => openDialog("Climate Change Impact", climateContent)}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-white rounded-full p-2 shadow">
                    <BookOpen className="h-6 w-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-700">Climate Change Impact</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Explore how climate change is affecting the frequency and intensity of natural disasters around the world.
                </p>
                
                <Button variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50">Explore Climate Impact</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Dialog open={dialogContent !== null} onOpenChange={(open) => !open && setDialogContent(null)}>
        <DialogContent className="bg-gradient-to-br from-white to-blue-50 max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Info className="h-5 w-5 mr-2 text-blue-500" />
              {dialogContent?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="py-4">{dialogContent?.content}</div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default KnowledgePage;
