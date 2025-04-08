
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, AlertTriangle, MapPin, Search } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface PredictionResult {
  disasterType: string;
  probability: number;
  riskLevel: 'High' | 'Medium' | 'Low';
  color: string;
  description: string;
  safetyTips: string[];
}

const predictionData: Record<string, Record<string, PredictionResult[]>> = {
  'United States': {
    'California': [
      { 
        disasterType: 'Earthquake', 
        probability: 78, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'California sits on the San Andreas Fault, making it highly susceptible to earthquakes.',
        safetyTips: [
          'Create an emergency preparedness kit',
          'Identify safe spots in each room',
          'Secure heavy furniture to walls',
          'Practice "drop, cover, and hold on" drills'
        ]
      },
      { 
        disasterType: 'Wildfire', 
        probability: 85, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Hot, dry conditions and seasonal winds create ideal wildfire conditions.',
        safetyTips: [
          'Create defensible space around your home',
          'Have an evacuation plan ready',
          'Keep emergency supplies accessible',
          'Monitor local fire alerts'
        ]
      },
      { 
        disasterType: 'Flood', 
        probability: 42, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Coastal areas and regions near waterways face seasonal flood risks.',
        safetyTips: [
          'Know evacuation routes',
          'Consider flood insurance',
          'Keep important documents in waterproof containers',
          'Never drive through flooded roads'
        ]
      },
      { 
        disasterType: 'Hurricane', 
        probability: 15, 
        riskLevel: 'Low', 
        color: 'disaster-teal',
        description: 'While rare, coastal regions can experience hurricane effects.',
        safetyTips: [
          'Prepare emergency supplies',
          'Know evacuation routes',
          'Secure outdoor items before a storm',
          'Stay informed about weather updates'
        ]
      },
    ],
    'Florida': [
      { 
        disasterType: 'Hurricane', 
        probability: 89, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Florida's peninsula location makes it particularly vulnerable to hurricanes.',
        safetyTips: [
          'Have a hurricane evacuation plan',
          'Prepare a disaster supply kit',
          'Install hurricane shutters or plywood for windows',
          'Know your evacuation zone'
        ]
      },
      { 
        disasterType: 'Flood', 
        probability: 75, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Low elevation and heavy rainfall create significant flood risks.',
        safetyTips: [
          'Consider flood insurance',
          'Elevate electrical systems',
          'Keep emergency supplies accessible',
          'Know evacuation routes'
        ]
      },
      { 
        disasterType: 'Earthquake', 
        probability: 8, 
        riskLevel: 'Low', 
        color: 'disaster-teal',
        description: 'Florida has little seismic activity and minimal earthquake risk.',
        safetyTips: [
          'While rare, know basic earthquake safety',
          'Secure heavy items in your home',
          'Have basic emergency supplies'
        ]
      },
      { 
        disasterType: 'Wildfire', 
        probability: 22, 
        riskLevel: 'Low', 
        color: 'disaster-teal',
        description: 'Some inland areas face moderate wildfire risk during dry seasons.',
        safetyTips: [
          'Clear vegetation near your home',
          'Have an evacuation plan',
          'Stay informed during high-risk seasons'
        ]
      },
    ],
    'Texas': [
      { 
        disasterType: 'Hurricane', 
        probability: 62, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Gulf Coast regions face seasonal hurricane threats.',
        safetyTips: [
          'Prepare an emergency kit',
          'Know evacuation routes',
          'Secure outdoor items before storms',
          'Stay informed about weather updates'
        ]
      },
      { 
        disasterType: 'Flood', 
        probability: 58, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Flooding is common in low-lying areas and near waterways.',
        safetyTips: [
          'Consider flood insurance',
          'Know evacuation routes',
          'Keep important documents elevated and protected',
          'Never drive through flooded areas'
        ]
      },
      { 
        disasterType: 'Tornado', 
        probability: 70, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Parts of Texas lie in "Tornado Alley" with frequent tornado activity.',
        safetyTips: [
          'Know where to shelter (basement or interior room)',
          'Have a weather radio with alerts',
          'Practice tornado drills',
          'Be aware of warning signs'
        ]
      },
      { 
        disasterType: 'Drought', 
        probability: 45, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Certain regions experience recurring drought conditions.',
        safetyTips: [
          'Conserve water',
          'Be aware of wildfire risks during droughts',
          'Have emergency water supplies',
          'Follow local water restrictions'
        ]
      },
    ]
  },
  'Japan': {
    'Tokyo': [
      { 
        disasterType: 'Earthquake', 
        probability: 92, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Tokyo sits near major fault lines and experiences frequent seismic activity.',
        safetyTips: [
          'Secure furniture and heavy objects',
          'Know evacuation routes and meeting points',
          'Keep emergency supplies ready',
          'Practice earthquake drills'
        ]
      },
      { 
        disasterType: 'Tsunami', 
        probability: 80, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Coastal areas face significant tsunami risk following offshore earthquakes.',
        safetyTips: [
          'Know evacuation routes to high ground',
          'Recognize natural tsunami warnings (ground shaking, unusual ocean behavior)',
          'Keep emergency kit ready',
          'Evacuate immediately if warned'
        ]
      },
      { 
        disasterType: 'Typhoon', 
        probability: 65, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Seasonal typhoons bring heavy rain and strong winds.',
        safetyTips: [
          'Secure windows and outdoor items',
          'Prepare emergency supplies',
          'Stay informed about weather updates',
          'Follow evacuation orders if issued'
        ]
      },
      { 
        disasterType: 'Volcanic Eruption', 
        probability: 35, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Japan has several active volcanoes that pose occasional threats.',
        safetyTips: [
          'Be aware of local volcano alert systems',
          'Prepare for ash fall (masks, eye protection)',
          'Follow evacuation orders promptly',
          'Keep emergency supplies ready'
        ]
      },
    ],
    'Osaka': [
      { 
        disasterType: 'Earthquake', 
        probability: 85, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Osaka sits in a seismically active region with significant earthquake risk.',
        safetyTips: [
          'Create an emergency plan',
          'Secure heavy furniture',
          'Know evacuation routes',
          'Keep emergency supplies accessible'
        ]
      },
      { 
        disasterType: 'Tsunami', 
        probability: 72, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Coastal location makes tsunami risk significant following earthquakes.',
        safetyTips: [
          'Know evacuation routes to high ground',
          'Recognize tsunami warnings',
          'Move inland or to higher ground immediately if warned',
          'Have a family communication plan'
        ]
      },
      { 
        disasterType: 'Typhoon', 
        probability: 58, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Seasonal typhoons bring strong winds and heavy rainfall.',
        safetyTips: [
          'Secure windows and outdoor items',
          'Prepare emergency supplies',
          'Stay informed about weather alerts',
          'Follow evacuation orders if issued'
        ]
      },
      { 
        disasterType: 'Flood', 
        probability: 42, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Urban flooding can occur during heavy rainfall events.',
        safetyTips: [
          'Know which areas flood locally',
          'Keep important documents elevated',
          'Have emergency supplies ready',
          'Never walk or drive through floodwaters'
        ]
      },
    ]
  },
  'India': {
    'Kerala': [
      { 
        disasterType: 'Flood', 
        probability: 82, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Monsoon season brings heavy rainfall and significant flood risk.',
        safetyTips: [
          'Stay informed about weather forecasts',
          'Keep emergency supplies ready',
          'Know evacuation routes',
          'Move to higher ground if flooding threatens'
        ]
      },
      { 
        disasterType: 'Landslide', 
        probability: 65, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Hilly regions face landslide risk during heavy rainfall.',
        safetyTips: [
          'Be alert for signs of land movement',
          'Evacuate immediately if you notice cracks or shifting ground',
          'Follow local warnings',
          'Have emergency supplies ready'
        ]
      },
      { 
        disasterType: 'Cyclone', 
        probability: 55, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Coastal areas face cyclone risk during certain seasons.',
        safetyTips: [
          'Board up windows and secure loose items',
          'Have emergency supplies ready',
          'Know evacuation routes',
          'Follow official warnings and instructions'
        ]
      },
      { 
        disasterType: 'Earthquake', 
        probability: 18, 
        riskLevel: 'Low', 
        color: 'disaster-teal',
        description: 'Kerala has relatively low seismic activity compared to other regions.',
        safetyTips: [
          'Know basic earthquake safety procedures',
          'Identify safe spots in buildings',
          'Secure heavy furniture if possible'
        ]
      },
    ],
    'Gujarat': [
      { 
        disasterType: 'Earthquake', 
        probability: 75, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Gujarat lies in a seismically active zone with history of major earthquakes.',
        safetyTips: [
          'Retrofit older buildings if possible',
          'Practice earthquake drills',
          'Know safe spots in your home',
          'Keep emergency supplies accessible'
        ]
      },
      { 
        disasterType: 'Cyclone', 
        probability: 68, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Coastal areas face seasonal cyclone threats.',
        safetyTips: [
          'Board up windows before storms',
          'Keep emergency kit ready',
          'Know evacuation routes',
          'Follow official warnings'
        ]
      },
      { 
        disasterType: 'Drought', 
        probability: 72, 
        riskLevel: 'High', 
        color: 'disaster-red',
        description: 'Many areas experience recurring drought conditions.',
        safetyTips: [
          'Conserve water',
          'Be aware of increased wildfire risk',
          'Follow local water restrictions',
          'Consider water storage options'
        ]
      },
      { 
        disasterType: 'Flood', 
        probability: 38, 
        riskLevel: 'Medium', 
        color: 'disaster-orange',
        description: 'Certain regions experience flooding during monsoon season.',
        safetyTips: [
          'Know local flood-prone areas',
          'Keep emergency supplies ready',
          'Move valuables to higher levels',
          'Follow evacuation orders promptly'
        ]
      },
    ]
  }
};

const PredictionModel = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<PredictionResult[]>([]);
  const [showTips, setShowTips] = useState<string | null>(null);
  const { toast } = useToast();

  // Expand predictionData with more countries for better user experience
  const allCountries = [
    ...Object.keys(predictionData),
    'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Brazil', 'Mexico', 'South Africa', 'China', 'Russia'
  ];

  // Generate states for countries that don't have data
  const getStatesForCountry = (country: string) => {
    if (predictionData[country]) {
      return Object.keys(predictionData[country]);
    }
    
    // Return generic states/regions for countries without specific data
    switch(country) {
      case 'Canada':
        return ['Ontario', 'British Columbia', 'Alberta', 'Quebec'];
      case 'United Kingdom':
        return ['England', 'Scotland', 'Wales', 'Northern Ireland'];
      case 'Australia':
        return ['New South Wales', 'Victoria', 'Queensland', 'Western Australia'];
      case 'Germany':
        return ['Bavaria', 'Berlin', 'Hamburg', 'Saxony'];
      case 'France':
        return ['Île-de-France', 'Provence-Alpes-Côte d\'Azur', 'Normandy', 'Brittany'];
      case 'Brazil':
        return ['São Paulo', 'Rio de Janeiro', 'Bahia', 'Amazonas'];
      case 'Mexico':
        return ['Mexico City', 'Jalisco', 'Quintana Roo', 'Baja California'];
      case 'South Africa':
        return ['Western Cape', 'Gauteng', 'KwaZulu-Natal', 'Eastern Cape'];
      case 'China':
        return ['Beijing', 'Shanghai', 'Guangdong', 'Sichuan'];
      case 'Russia':
        return ['Moscow', 'Saint Petersburg', 'Siberia', 'Vladivostok'];
      default:
        return [];
    }
  };

  // Get states based on selected country
  const states = selectedCountry ? getStatesForCountry(selectedCountry) : [];

  // Generate prediction data for countries without specific data
  const generateGenericPrediction = (country: string, state: string) => {
    let predictions: PredictionResult[] = [];
    
    // Adjust predictions based on country
    switch(country) {
      case 'Canada':
        predictions = [
          { 
            disasterType: 'Snowstorm', 
            probability: Math.floor(70 + Math.random() * 20), 
            riskLevel: 'High', 
            color: 'disaster-red',
            description: 'Severe winter conditions cause significant disruption and safety hazards.',
            safetyTips: [
              'Keep emergency winter supplies in your vehicle',
              'Maintain heating systems properly',
              'Have alternative heat sources available',
              'Stock up on food and water before storms'
            ]
          },
          { 
            disasterType: 'Flood', 
            probability: Math.floor(40 + Math.random() * 30), 
            riskLevel: 'Medium', 
            color: 'disaster-orange',
            description: 'Spring thaws and heavy rainfall can cause flooding in many regions.',
            safetyTips: [
              'Know evacuation routes',
              'Keep important documents elevated',
              'Consider flood insurance',
              'Never drive through flooded areas'
            ]
          }
        ];
        break;
      case 'United Kingdom':
        predictions = [
          { 
            disasterType: 'Flooding', 
            probability: Math.floor(60 + Math.random() * 20), 
            riskLevel: 'Medium', 
            color: 'disaster-orange',
            description: 'Heavy rainfall and coastal surge create flood risks across many regions.',
            safetyTips: [
              'Sign up for flood warnings',
              'Prepare a flood plan',
              'Keep valuable items above likely water levels',
              'Know how to turn off utilities'
            ]
          },
          { 
            disasterType: 'Severe Storm', 
            probability: Math.floor(50 + Math.random() * 20), 
            riskLevel: 'Medium', 
            color: 'disaster-orange',
            description: 'Strong winds and heavy rain can cause damage and disruption.',
            safetyTips: [
              'Secure outdoor items',
              'Stay indoors during severe weather',
              'Have emergency supplies ready',
              'Be prepared for power outages'
            ]
          }
        ];
        break;
      default:
        // Generic predictions for other countries
        predictions = [
          { 
            disasterType: 'Earthquake', 
            probability: Math.floor(Math.random() * 70), 
            riskLevel: 'Medium', 
            color: 'disaster-orange',
            description: 'Seismic activity varies by region.',
            safetyTips: [
              'Know safe spots in buildings',
              'Secure heavy furniture',
              'Have emergency supplies ready',
              'Learn how to shut off utilities'
            ]
          },
          { 
            disasterType: 'Flood', 
            probability: Math.floor(30 + Math.random() * 40), 
            riskLevel: 'Medium', 
            color: 'disaster-orange',
            description: 'Flood risk depends on local topography and rainfall patterns.',
            safetyTips: [
              'Know evacuation routes',
              'Keep important documents elevated',
              'Have emergency supplies accessible',
              'Never walk or drive through flooded areas'
            ]
          },
          { 
            disasterType: 'Extreme Weather', 
            probability: Math.floor(40 + Math.random() * 30), 
            riskLevel: 'Medium', 
            color: 'disaster-orange',
            description: 'Climate patterns determine local extreme weather risks.',
            safetyTips: [
              'Stay informed about weather forecasts',
              'Have emergency supplies ready',
              'Know evacuation routes',
              'Follow official instructions during emergencies'
            ]
          }
        ];
    }
    
    // Add some location-specific variation
    if (predictions.length > 0) {
      predictions[0].probability = Math.min(95, predictions[0].probability + state.length % 20);
    }
    
    return predictions;
  };

  const handlePredict = () => {
    setIsLoading(true);
    
    // Check if we have custom input
    let searchCountry = selectedCountry;
    let searchState = selectedState;
    
    if (country.trim() !== '') {
      searchCountry = country;
    }
    
    if (state.trim() !== '') {
      searchState = state;
    }
    
    // Validate inputs
    if (!searchCountry || !searchState) {
      toast({
        title: "Missing Information",
        description: "Please enter both country and state/region for prediction.",
        variant: "destructive"
      });
      setIsLoading(false);
      return;
    }

    // Simulate API call with a delay
    setTimeout(() => {
      if (
        predictionData[searchCountry] && 
        predictionData[searchCountry][searchState]
      ) {
        setResults(predictionData[searchCountry][searchState]);
        toast({
          title: "Prediction Complete",
          description: `Disaster analysis for ${searchState}, ${searchCountry} is ready.`,
        });
      } else {
        // Generate generic prediction for areas not in our dataset
        const genericResults = generateGenericPrediction(searchCountry, searchState);
        setResults(genericResults);
        toast({
          title: "Generic Prediction",
          description: "Using generalized model for this location as specific data is limited.",
          variant: "default"
        });
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const toggleTips = (disasterType: string) => {
    if (showTips === disasterType) {
      setShowTips(null);
    } else {
      setShowTips(disasterType);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Disaster Risk Prediction</h2>
        <p className="text-muted-foreground">Enter a location to predict the risk of natural disasters.</p>
      </div>
      
      <Card className="p-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <div className="flex space-x-2">
                <Input 
                  id="country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    // Clear selected country if typing
                    if (e.target.value) setSelectedCountry('');
                  }}
                  placeholder="Type country name"
                  className="flex-1"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex-shrink-0 min-w-[120px]">
                      {selectedCountry || "Select"} <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="max-h-60 overflow-y-auto">
                    {allCountries.sort().map((c) => (
                      <DropdownMenuItem 
                        key={c}
                        onClick={() => {
                          setSelectedCountry(c);
                          setCountry('');
                          setSelectedState('');
                          setState('');
                        }}
                      >
                        {c}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="state">State/Region</Label>
              <div className="flex space-x-2">
                <Input 
                  id="state"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                    // Clear selected state if typing
                    if (e.target.value) setSelectedState('');
                  }}
                  placeholder="Type state/region"
                  className="flex-1"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild disabled={!selectedCountry}>
                    <Button variant="outline" className="flex-shrink-0 min-w-[120px]">
                      {selectedState || "Select"} <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="max-h-60 overflow-y-auto">
                    {states.sort().map((s) => (
                      <DropdownMenuItem 
                        key={s}
                        onClick={() => {
                          setSelectedState(s);
                          setState('');
                        }}
                      >
                        {s}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          
          <Button 
            className="w-full mt-4 flex items-center justify-center gap-2" 
            onClick={handlePredict}
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : (
              <>
                <Search className="h-4 w-4" />
                Predict Disaster Risk
              </>
            )}
          </Button>
          
          {isLoading && (
            <div className="mt-4 space-y-2 animate-pulse">
              <div className="h-8 bg-muted rounded"></div>
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-8 bg-muted rounded w-1/2"></div>
            </div>
          )}
        </div>
        
        {results.length > 0 && !isLoading && (
          <div className="mt-8 space-y-6">
            <Separator />
            
            <div className="space-y-2">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5 text-disaster-red" />
                Prediction Results for {selectedState || state}, {selectedCountry || country}
              </h3>
              <p className="text-sm text-muted-foreground">
                Based on historical data, environmental factors, and climate patterns
              </p>
            </div>
            
            <div className="space-y-6">
              {results.map((result) => (
                <div key={result.disasterType} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{result.disasterType}</span>
                      {result.riskLevel === 'High' && (
                        <AlertTriangle className="h-4 w-4 text-disaster-red" />
                      )}
                    </div>
                    <span
                      className={`text-sm font-semibold text-${result.color}`}
                    >
                      {result.probability}% Risk
                    </span>
                  </div>
                  
                  <Progress 
                    value={result.probability} 
                    className={`h-2 bg-muted`}
                  />
                  
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-muted-foreground">
                      Risk Level: <span className={`text-${result.color} font-medium`}>{result.riskLevel}</span>
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs"
                      onClick={() => toggleTips(result.disasterType)}
                    >
                      {showTips === result.disasterType ? "Hide details" : "Show details"}
                    </Button>
                  </div>
                  
                  {showTips === result.disasterType && (
                    <div className="mt-2 p-3 bg-muted/30 rounded-md text-sm space-y-3">
                      <p>{result.description}</p>
                      
                      <div>
                        <h4 className="font-medium mb-1">Safety Tips:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {result.safetyTips.map((tip, index) => (
                            <li key={index} className="text-xs">{tip}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 border border-disaster-orange/30 bg-disaster-orange/5 rounded-lg">
              <p className="text-sm flex items-start">
                <AlertTriangle className="h-5 w-5 text-disaster-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  These predictions are based on historical data and environmental patterns. Always follow official guidelines and alerts from local authorities.
                </span>
              </p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default PredictionModel;
