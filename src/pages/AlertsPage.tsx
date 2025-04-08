
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AlertSignup from '@/components/AlertSignup';
import { Bell, AlertTriangle, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AlertsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center bg-white/10 text-white px-4 py-2 rounded-full mb-4">
                <Bell className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Early Warning System</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Informed, Stay Safe
              </h1>
              
              <p className="text-lg text-white/80 mb-6">
                Subscribe to receive timely alerts about potential natural disasters in your area.
                Our advanced early warning system monitors environmental conditions 24/7.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <AlertSignup />
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-500" />
                    How Alerts Work
                  </h3>
                  
                  <div className="space-y-4 text-sm">
                    <p>
                      Our advanced early warning system uses a combination of real-time data sources, including:
                    </p>
                    
                    <ul className="list-disc list-inside space-y-2">
                      <li>Seismic monitoring networks</li>
                      <li>Weather forecasting systems</li>
                      <li>Satellite imagery analysis</li>
                      <li>Ocean sensors and buoys</li>
                      <li>Artificial intelligence prediction models</li>
                    </ul>
                    
                    <p>
                      We process this data continuously to identify potential threats and deliver
                      timely alerts through your preferred communication channels.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Alert className="bg-disaster-orange/10 border-disaster-orange/30 text-disaster-orange">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Important Information</AlertTitle>
                <AlertDescription className="text-gray-700">
                  While our alert system provides valuable early warnings, always follow instructions
                  from local emergency management agencies during actual disaster events.
                </AlertDescription>
              </Alert>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Alert Types</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="font-medium">Immediate Threat</span>
                        <span className="text-disaster-red font-medium">High Priority</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-disaster-red h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Urgent alerts for imminent threats requiring immediate action
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="font-medium">Warning</span>
                        <span className="text-disaster-orange font-medium">Medium Priority</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-disaster-orange h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Notifications about developing situations with potential for escalation
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <div className="flex justify-between items-center text-sm mb-1">
                        <span className="font-medium">Advisory</span>
                        <span className="text-disaster-teal font-medium">Low Priority</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-disaster-teal h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Informational updates about conditions that may develop over time
                      </p>
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

export default AlertsPage;
