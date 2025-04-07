
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle, CloudRain, Flame, Mountain, Waves, Wind } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const disasterTypes = [
  {
    id: 'earthquakes',
    name: 'Earthquakes',
    icon: <div className="w-10 h-10 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 animate-shake">≈≈≈</div>
    </div>,
    color: 'disaster-red',
    definition: 'Sudden and violent shaking of the ground as a result of movements within the earth\'s crust or volcanic action.',
    causes: [
      'Tectonic plate movements',
      'Volcanic activity',
      'Man-made causes like mining or reservoir-induced seismicity'
    ],
    precautions: [
      'Drop, cover, and hold on during shaking',
      'Stay away from windows and exterior walls',
      'Have an emergency kit prepared',
      'Identify safe spots in each room'
    ],
    incidents: [
      { name: '2023 Turkey-Syria Earthquake', magnitude: '7.8', deaths: '50,000+' },
      { name: '2023 Morocco Earthquake', magnitude: '6.8', deaths: '2,900+' },
      { name: '2024 Taiwan Earthquake', magnitude: '7.4', deaths: '13' }
    ]
  },
  {
    id: 'floods',
    name: 'Floods',
    icon: <CloudRain className="w-10 h-10 text-disaster-blue" />,
    color: 'disaster-blue',
    definition: 'An overflow of water that submerges land that is usually dry, often caused by excessive rainfall.',
    causes: [
      'Heavy rainfall',
      'Overflow of water bodies',
      'Storm surges along coasts',
      'Dam failures',
      'Rapid snowmelt'
    ],
    precautions: [
      'Move to higher ground immediately',
      'Don\'t walk or drive through flood waters',
      'Have emergency supplies ready',
      'Consider flood insurance if in risk areas'
    ],
    incidents: [
      { name: '2022 Pakistan Floods', area: '1/3 of country', deaths: '1,700+' },
      { name: '2024 Rio Grande do Sul, Brazil', area: 'Major flooding', deaths: '100+' },
      { name: '2023 Libya Floods', area: 'Derna region', deaths: '11,000+' }
    ]
  },
  {
    id: 'hurricanes',
    name: 'Hurricanes',
    icon: <Wind className="w-10 h-10 text-disaster-teal" />,
    color: 'disaster-teal',
    definition: 'Tropical cyclones with sustained winds of at least 74 mph, characterized by a low-pressure center and spiral rain bands.',
    causes: [
      'Warm ocean waters (at least 80°F/27°C)',
      'Moist air',
      'Converging winds',
      'Coriolis effect due to Earth\'s rotation'
    ],
    precautions: [
      'Evacuate if ordered by authorities',
      'Secure your home and property',
      'Have emergency supplies for at least 3 days',
      'Stay informed through a NOAA weather radio'
    ],
    incidents: [
      { name: 'Hurricane Otis (2023)', category: '5', region: 'Mexico' },
      { name: 'Hurricane Idalia (2023)', category: '3', region: 'Florida, USA' },
      { name: 'Hurricane Freddy (2023)', category: '5', region: 'Madagascar, Mozambique, Malawi' }
    ]
  },
  {
    id: 'wildfires',
    name: 'Wildfires',
    icon: <Flame className="w-10 h-10 text-disaster-orange" />,
    color: 'disaster-orange',
    definition: 'Uncontrolled fires that burn in wildland vegetation, often in rural areas.',
    causes: [
      'Lightning strikes',
      'Human activities (campfires, cigarettes, arson)',
      'Drought conditions',
      'High temperatures and low humidity',
      'Strong winds'
    ],
    precautions: [
      'Create a defensible space around your home',
      'Use fire-resistant building materials',
      'Have an evacuation plan ready',
      'Follow all fire restrictions and bans'
    ],
    incidents: [
      { name: '2023 Canada Wildfires', area: '18.5 million acres', notes: 'Worst fire season in Canadian history' },
      { name: '2023 Hawaii Wildfires', area: 'Maui island', deaths: '100+' },
      { name: '2024 Chile Wildfires', area: 'Central Chile', deaths: '130+' }
    ]
  },
  {
    id: 'volcanic',
    name: 'Volcanic Eruptions',
    icon: <Mountain className="w-10 h-10 text-disaster-red" />,
    color: 'disaster-red',
    definition: 'The release of molten rock, ash, and gases from a volcano, often accompanied by explosive force.',
    causes: [
      'Magma rises through cracks in Earth\'s crust',
      'Pressure build-up within the volcano',
      'Tectonic plate activity',
      'Gas-rich magma reaching the surface'
    ],
    precautions: [
      'Evacuate immediately if ordered',
      'Wear masks to filter ash particles',
      'Protect electronics from ash',
      'Clear ash from roofs to prevent collapse'
    ],
    incidents: [
      { name: 'Hunga Tonga Eruption (2022)', impact: 'Massive tsunami', notes: 'Largest eruption of 21st century' },
      { name: 'La Palma Eruption (2021)', duration: '85 days', notes: 'Destroyed 3,000 buildings' },
      { name: 'Mount Semeru, Java (2023)', impact: 'Multiple eruptions', notes: 'Ongoing activity' }
    ]
  },
  {
    id: 'tsunamis',
    name: 'Tsunamis',
    icon: <Waves className="w-10 h-10 text-disaster-blue" />,
    color: 'disaster-blue',
    definition: 'A series of ocean waves caused by sudden displacements in the sea floor, landslides, or volcanic activity.',
    causes: [
      'Underwater earthquakes',
      'Volcanic eruptions',
      'Underwater landslides',
      'Meteor impacts in ocean',
      'Large coastal landslides'
    ],
    precautions: [
      'Move inland and to higher ground immediately',
      'Know tsunami evacuation routes',
      'If you feel a strong earthquake near the coast, don\'t wait for official warnings',
      'Stay away from the coast until officials declare it safe'
    ],
    incidents: [
      { name: 'Tonga Tsunami (2022)', cause: 'Volcanic eruption', impact: 'Pacific-wide tsunami' },
      { name: 'Indonesia Tsunami (2023)', cause: 'Undersea landslide', impact: 'Coastal communities affected' },
      { name: 'Alaska Tsunami (2021)', cause: '8.2 earthquake', impact: 'Minor damage' }
    ]
  }
];

interface DialogInfo {
  title: string;
  content: React.ReactNode;
}

const DisasterKnowledge = () => {
  const [activeTab, setActiveTab] = useState(disasterTypes[0].id);
  const [dialogInfo, setDialogInfo] = useState<DialogInfo | null>(null);

  const handleLearnMore = (title: string, content: React.ReactNode) => {
    setDialogInfo({ title, content });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">Disaster Knowledge Base</h2>
        <p className="text-muted-foreground">
          Learn about different types of natural disasters, their causes, and precautions.
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {disasterTypes.map((type) => (
          <Card 
            key={type.id}
            className={`cursor-pointer transition-all hover-lift pastel-${activeTab === type.id ? 'blue' : ''}-card`}
            onClick={() => setActiveTab(type.id)}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className={`mb-2 ${activeTab === type.id ? 'text-blue-500' : `text-${type.color}`}`}>
                {type.icon}
              </div>
              <h3 className="text-sm font-medium">{type.name}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="pt-6">
        {disasterTypes.map((type) => (
          <div 
            key={type.id} 
            className={`space-y-6 ${activeTab === type.id ? 'block animate-fade-in' : 'hidden'}`}
          >
            <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-${type.color}/10 text-${type.color}`}>
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">{type.name}</span>
            </div>
            
            <Card className={`bg-gradient-to-br from-white to-blue-50 border-blue-100`}>
              <CardHeader>
                <CardTitle className={`text-${type.color}`}>{type.name}</CardTitle>
                <CardDescription>
                  {type.definition}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Tabs defaultValue="causes">
                  <TabsList className="grid grid-cols-3 w-full bg-blue-50">
                    <TabsTrigger value="causes" className="data-[state=active]:bg-white">Causes</TabsTrigger>
                    <TabsTrigger value="precautions" className="data-[state=active]:bg-white">Precautions</TabsTrigger>
                    <TabsTrigger value="incidents" className="data-[state=active]:bg-white">Recent Incidents</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="causes" className="mt-4 space-y-4">
                    <ul className="space-y-2">
                      {type.causes.map((cause, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`inline-block w-2 h-2 mt-1.5 mr-2 rounded-full bg-${type.color}`}></span>
                          <span>{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="precautions" className="mt-4 space-y-4">
                    <ul className="space-y-2">
                      {type.precautions.map((precaution, index) => (
                        <li key={index} className="flex items-start">
                          <span className={`inline-block w-2 h-2 mt-1.5 mr-2 rounded-full bg-${type.color}`}></span>
                          <span>{precaution}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  
                  <TabsContent value="incidents" className="mt-4">
                    <div className="space-y-4">
                      {type.incidents.map((incident, index) => (
                        <div key={index} className="p-3 border border-blue-100 bg-blue-50/50 rounded-lg">
                          <h4 className="font-medium">{incident.name}</h4>
                          <div className="mt-1 text-sm text-muted-foreground">
                            {Object.entries(incident)
                              .filter(([key]) => key !== 'name')
                              .map(([key, value]) => (
                                <div key={key}>
                                  <span className="capitalize">{key}</span>: {value as string}
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Interactive Knowledge Dialog */}
      <Dialog open={dialogInfo !== null} onOpenChange={(open) => !open && setDialogInfo(null)}>
        <DialogContent className="bg-gradient-to-br from-white to-blue-50 max-w-lg">
          <DialogHeader>
            <DialogTitle>{dialogInfo?.title}</DialogTitle>
          </DialogHeader>
          <div className="py-4">{dialogInfo?.content}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DisasterKnowledge;
