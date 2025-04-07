
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PredictionModel from '@/components/PredictionModel';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, ArrowRight, BrainCircuit } from 'lucide-react';

const PredictPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-muted/50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <BrainCircuit className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">AI-Powered Prediction</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Forecast Natural Disaster Risks
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced machine learning model analyzes historical data, geographical factors, and climate patterns to predict natural disaster risks for your location.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <PredictionModel />
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">How It Works</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Enter Location</h4>
                        <p className="text-sm text-muted-foreground">
                          Provide your country and state/region
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">AI Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Our model processes historical and geographical data
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Risk Assessment</h4>
                        <p className="text-sm text-muted-foreground">
                          Get detailed disaster risk probabilities for your area
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Important Disclaimer</AlertTitle>
                <AlertDescription>
                  The prediction model provides estimates based on available data and is intended for informational purposes only. Always follow official guidance from local authorities during emergencies.
                </AlertDescription>
              </Alert>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Model Accuracy</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our prediction model has been trained on extensive historical data going up to 2025, with regular updates to improve accuracy.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Earthquakes</span>
                        <span className="font-medium">88%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-disaster-blue h-2 rounded-full" style={{ width: '88%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Floods</span>
                        <span className="font-medium">92%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-disaster-teal h-2 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Hurricanes</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-disaster-purple h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Wildfires</span>
                        <span className="font-medium">79%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-disaster-orange h-2 rounded-full" style={{ width: '79%' }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PredictPage;
