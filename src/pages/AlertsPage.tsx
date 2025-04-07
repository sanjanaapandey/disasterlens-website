
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorldMap from '@/components/WorldMap';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, BarChart2, CloudRain, Flame, LineChart, Mountain, PieChart, Wind } from 'lucide-react';
import { Chart } from '@/components/ui/chart';

const chartData = {
  earthquakes: [
    {
      name: 'Earthquakes by Region (2023-2025)',
      type: 'pie',
      data: [
        { name: 'Asia-Pacific', value: 48 },
        { name: 'Americas', value: 27 },
        { name: 'Europe', value: 14 },
        { name: 'Africa', value: 8 },
        { name: 'Middle East', value: 3 }
      ]
    },
    {
      name: 'Earthquake Frequency',
      type: 'line',
      data: [
        { name: 'Jan 2023', value: 18 },
        { name: 'Apr 2023', value: 21 },
        { name: 'Jul 2023', value: 25 },
        { name: 'Oct 2023', value: 22 },
        { name: 'Jan 2024', value: 19 },
        { name: 'Apr 2024', value: 24 },
        { name: 'Jul 2024', value: 27 },
        { name: 'Oct 2024', value: 25 },
        { name: 'Jan 2025', value: 21 },
        { name: 'Apr 2025', value: 24 }
      ]
    }
  ],
  storms: [
    {
      name: 'Storm Types (2023-2025)',
      type: 'pie',
      data: [
        { name: 'Hurricanes', value: 35 },
        { name: 'Typhoons', value: 30 },
        { name: 'Cyclones', value: 25 },
        { name: 'Severe Storms', value: 10 }
      ]
    },
    {
      name: 'Storm Frequency',
      type: 'line',
      data: [
        { name: 'Jan 2023', value: 5 },
        { name: 'Apr 2023', value: 8 },
        { name: 'Jul 2023', value: 12 },
        { name: 'Oct 2023', value: 10 },
        { name: 'Jan 2024', value: 6 },
        { name: 'Apr 2024', value: 9 },
        { name: 'Jul 2024', value: 15 },
        { name: 'Oct 2024', value: 11 },
        { name: 'Jan 2025', value: 7 },
        { name: 'Apr 2025', value: 10 }
      ]
    }
  ],
  other: [
    {
      name: 'Other Disasters (2023-2025)',
      type: 'pie',
      data: [
        { name: 'Floods', value: 40 },
        { name: 'Wildfires', value: 25 },
        { name: 'Landslides', value: 15 },
        { name: 'Volcanic Eruptions', value: 10 },
        { name: 'Tsunamis', value: 10 }
      ]
    },
    {
      name: 'Disaster Frequency',
      type: 'line',
      data: [
        { name: 'Jan 2023', value: 12 },
        { name: 'Apr 2023', value: 15 },
        { name: 'Jul 2023', value: 22 },
        { name: 'Oct 2023', value: 18 },
        { name: 'Jan 2024', value: 14 },
        { name: 'Apr 2024', value: 17 },
        { name: 'Jul 2024', value: 24 },
        { name: 'Oct 2024', value: 20 },
        { name: 'Jan 2025', value: 16 },
        { name: 'Apr 2025', value: 19 }
      ]
    }
  ]
};

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
      
      <main className="flex-1 pastel-bg">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Live Disaster Alerts</h1>
            <Badge variant="outline" className="animate-pulse-slow bg-pink-50 text-pink-700 border-pink-200">Live Updates</Badge>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8 pastel-card">
                <CardContent className="p-6">
                  <WorldMap />
                </CardContent>
              </Card>
              
              <Card className="pastel-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
                    Historical Data Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="earthquakes">
                    <TabsList className="grid grid-cols-3 mb-4 bg-blue-50">
                      <TabsTrigger value="earthquakes" className="data-[state=active]:bg-white">Earthquakes</TabsTrigger>
                      <TabsTrigger value="storms" className="data-[state=active]:bg-white">Storms</TabsTrigger>
                      <TabsTrigger value="other" className="data-[state=active]:bg-white">Other</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="earthquakes">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-blue-50/50 border-blue-100">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium flex items-center">
                              <PieChart className="h-4 w-4 mr-2 text-blue-500" />
                              Earthquakes by Region (2023-2025)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[250px] w-full">
                              <Chart 
                                type="pie" 
                                data={chartData.earthquakes[0].data}
                                colors={['#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE', '#EFF6FF']}
                                index="name"
                                categories={['value']}
                                valueFormatter={(value) => `${value}%`}
                                className="h-full w-full"
                              />
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="bg-blue-50/50 border-blue-100">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium flex items-center">
                              <LineChart className="h-4 w-4 mr-2 text-blue-500" />
                              Earthquake Frequency (2023-2025)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[250px] w-full">
                              <Chart 
                                type="line" 
                                data={chartData.earthquakes[1].data}
                                colors={['#3B82F6']}
                                index="name"
                                categories={['value']}
                                valueFormatter={(value) => `${value}`}
                                showXGrid={true}
                                showYGrid={true}
                                className="h-full w-full"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="storms">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-teal-50/50 border-teal-100">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium flex items-center">
                              <PieChart className="h-4 w-4 mr-2 text-teal-500" />
                              Storm Types (2023-2025)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[250px] w-full">
                              <Chart 
                                type="pie" 
                                data={chartData.storms[0].data}
                                colors={['#2DD4BF', '#5EEAD4', '#99F6E4', '#CCFBF1']}
                                index="name"
                                categories={['value']}
                                valueFormatter={(value) => `${value}%`}
                                className="h-full w-full"
                              />
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="bg-teal-50/50 border-teal-100">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium flex items-center">
                              <LineChart className="h-4 w-4 mr-2 text-teal-500" />
                              Storm Frequency (2023-2025)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[250px] w-full">
                              <Chart 
                                type="line" 
                                data={chartData.storms[1].data}
                                colors={['#14B8A6']}
                                index="name"
                                categories={['value']}
                                valueFormatter={(value) => `${value}`}
                                showXGrid={true}
                                showYGrid={true}
                                className="h-full w-full"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="other">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="bg-amber-50/50 border-amber-100">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium flex items-center">
                              <PieChart className="h-4 w-4 mr-2 text-amber-500" />
                              Other Disasters (2023-2025)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[250px] w-full">
                              <Chart 
                                type="pie" 
                                data={chartData.other[0].data}
                                colors={['#F59E0B', '#FBBF24', '#FCD34D', '#FDE68A', '#FEF3C7']}
                                index="name"
                                categories={['value']}
                                valueFormatter={(value) => `${value}%`}
                                className="h-full w-full"
                              />
                            </div>
                          </CardContent>
                        </Card>
                        <Card className="bg-amber-50/50 border-amber-100">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium flex items-center">
                              <LineChart className="h-4 w-4 mr-2 text-amber-500" />
                              Disaster Frequency (2023-2025)
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="h-[250px] w-full">
                              <Chart 
                                type="line" 
                                data={chartData.other[1].data}
                                colors={['#F59E0B']}
                                index="name"
                                categories={['value']}
                                valueFormatter={(value) => `${value}`}
                                showXGrid={true}
                                showYGrid={true}
                                className="h-full w-full"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="pastel-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-5 w-5 text-rose-500 mr-2" />
                    Recent Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAlerts.map((alert) => (
                      <Card key={alert.id} className="hover-lift bg-gradient-to-br from-white to-blue-50 border-blue-100">
                        <CardContent className="p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center">
                              <div className={`
                                inline-flex items-center justify-center h-8 w-8 rounded-full mr-2
                                ${alert.severity === 'high' 
                                  ? 'bg-red-100 text-red-700' 
                                  : alert.severity === 'medium'
                                  ? 'bg-amber-100 text-amber-700'
                                  : 'bg-teal-100 text-teal-700'
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
                                  ? 'bg-red-100 text-red-700 border-red-200'
                                  : alert.severity === 'medium'
                                  ? 'bg-amber-100 text-amber-700 border-amber-200'
                                  : 'bg-teal-100 text-teal-700 border-teal-200'
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
                  
                  <div className="mt-6">
                    <Button className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white">
                      Get Alerts for Your Region
                    </Button>
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
