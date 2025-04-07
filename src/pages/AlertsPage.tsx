
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorldMap from '@/components/WorldMap';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, CloudRain, Flame, Mountain, Wind } from 'lucide-react';

const recentAlerts = [
  {
    id: 1,
    type: 'Earthquake',
    location: 'Tokyo, Japan',
    date: '2025-04-02T14:30:00',
    severity: 'medium',
    details: 'Magnitude 5.8 earthquake detected 30km offshore from Tokyo Bay. No tsunami warning issued.',
    icon: <div className="animate-shake">≈≈≈</div>
  },
  {
    id: 2,
    type: 'Hurricane',
    location: 'Gulf of Mexico',
    date: '2025-04-05T08:15:00',
    severity: 'high',
    details: 'Hurricane Diana (Category 3) approaching the Gulf Coast. Expected landfall in 24-36 hours.',
    icon: <Wind className="h-5 w-5" />
  },
  {
    id: 3,
    type: 'Flood',
    location: 'Bangladesh',
    date: '2025-04-05T10:45:00',
    severity: 'high',
    details: 'Severe flooding in central regions following heavy monsoon rainfall. Major rivers above danger levels.',
    icon: <CloudRain className="h-5 w-5" />
  },
  {
    id: 4,
    type: 'Wildfire',
    location: 'California, USA',
    date: '2025-04-01T16:20:00',
    severity: 'high',
    details: 'Rapidly spreading wildfire in northern California. Evacuation orders issued for several communities.',
    icon: <Flame className="h-5 w-5" />
  },
  {
    id: 5,
    type: 'Volcanic Activity',
    location: 'Indonesia',
    date: '2025-03-30T21:10:00',
    severity: 'medium',
    details: 'Increased activity at Mount Merapi. Alert level raised, exclusion zone extended to 5km radius.',
    icon: <Mountain className="h-5 w-5" />
  }
];

const AlertsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Live Disaster Alerts</h1>
            <Badge variant="outline" className="animate-pulse-slow">Live Updates</Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <WorldMap />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Historical Data Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="earthquakes">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="earthquakes">Earthquakes</TabsTrigger>
                      <TabsTrigger value="storms">Storms</TabsTrigger>
                      <TabsTrigger value="other">Other</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="earthquakes">
                      <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                        <p className="text-muted-foreground">[Earthquake Frequency Chart Visualization]</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="storms">
                      <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                        <p className="text-muted-foreground">[Storm Frequency Chart Visualization]</p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="other">
                      <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                        <p className="text-muted-foreground">[Other Disasters Frequency Chart]</p>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-disaster-red mr-2" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAlerts.map((alert) => (
                      <Card key={alert.id} className="hover-lift">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center">
                              <div className={`
                                inline-flex items-center justify-center h-8 w-8 rounded-full mr-2
                                ${alert.severity === 'high' 
                                  ? 'bg-disaster-red/10 text-disaster-red' 
                                  : alert.severity === 'medium'
                                  ? 'bg-disaster-orange/10 text-disaster-orange'
                                  : 'bg-disaster-teal/10 text-disaster-teal'
                                }
                              `}>
                                {alert.icon}
                              </div>
                              <div>
                                <h3 className="font-medium">{alert.type}</h3>
                                <p className="text-xs text-muted-foreground">{alert.location}</p>
                              </div>
                            </div>
                            <Badge
                              variant="outline"
                              className={
                                alert.severity === 'high'
                                  ? 'bg-disaster-red/10 text-disaster-red border-disaster-red/20'
                                  : alert.severity === 'medium'
                                  ? 'bg-disaster-orange/10 text-disaster-orange border-disaster-orange/20'
                                  : 'bg-disaster-teal/10 text-disaster-teal border-disaster-teal/20'
                              }
                            >
                              {alert.severity}
                            </Badge>
                          </div>
                          <p className="text-sm">{alert.details}</p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {new Date(alert.date).toLocaleString()}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
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
