import { useState } from 'react';
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
import { ChevronDown, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface PredictionResult {
  disasterType: string;
  probability: number;
  riskLevel: 'High' | 'Medium' | 'Low';
  color: string;
}

const predictionData: Record<string, Record<string, PredictionResult[]>> = {
  'United States': {
    'California': [
      { disasterType: 'Earthquake', probability: 78, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Wildfire', probability: 85, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Flood', probability: 42, riskLevel: 'Medium', color: 'disaster-orange' },
      { disasterType: 'Hurricane', probability: 15, riskLevel: 'Low', color: 'disaster-teal' },
    ],
    'Florida': [
      { disasterType: 'Hurricane', probability: 89, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Flood', probability: 75, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Earthquake', probability: 8, riskLevel: 'Low', color: 'disaster-teal' },
      { disasterType: 'Wildfire', probability: 22, riskLevel: 'Low', color: 'disaster-teal' },
    ],
    'Texas': [
      { disasterType: 'Hurricane', probability: 62, riskLevel: 'Medium', color: 'disaster-orange' },
      { disasterType: 'Flood', probability: 58, riskLevel: 'Medium', color: 'disaster-orange' },
      { disasterType: 'Tornado', probability: 70, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Drought', probability: 45, riskLevel: 'Medium', color: 'disaster-orange' },
    ]
  },
  'Japan': {
    'Tokyo': [
      { disasterType: 'Earthquake', probability: 92, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Tsunami', probability: 80, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Typhoon', probability: 65, riskLevel: 'Medium', color: 'disaster-orange' },
      { disasterType: 'Volcanic Eruption', probability: 35, riskLevel: 'Medium', color: 'disaster-orange' },
    ],
    'Osaka': [
      { disasterType: 'Earthquake', probability: 85, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Tsunami', probability: 72, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Typhoon', probability: 58, riskLevel: 'Medium', color: 'disaster-orange' },
      { disasterType: 'Flood', probability: 42, riskLevel: 'Medium', color: 'disaster-orange' },
    ]
  },
  'India': {
    'Kerala': [
      { disasterType: 'Flood', probability: 82, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Landslide', probability: 65, riskLevel: 'Medium', color: 'disaster-orange' },
      { disasterType: 'Cyclone', probability: 55, riskLevel: 'Medium', color: 'disaster-orange' },
      { disasterType: 'Earthquake', probability: 18, riskLevel: 'Low', color: 'disaster-teal' },
    ],
    'Gujarat': [
      { disasterType: 'Earthquake', probability: 75, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Cyclone', probability: 68, riskLevel: 'Medium', color: 'disaster-orange' },
      { disasterType: 'Drought', probability: 72, riskLevel: 'High', color: 'disaster-red' },
      { disasterType: 'Flood', probability: 38, riskLevel: 'Medium', color: 'disaster-orange' },
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
  const { toast } = useToast();

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
        // Simulate a generic prediction for areas not in our dataset
        setResults([
          { disasterType: 'Earthquake', probability: Math.floor(Math.random() * 100), riskLevel: 'Medium', color: 'disaster-orange' },
          { disasterType: 'Flood', probability: Math.floor(Math.random() * 100), riskLevel: 'Medium', color: 'disaster-orange' },
          { disasterType: 'Storm', probability: Math.floor(Math.random() * 100), riskLevel: 'Medium', color: 'disaster-orange' },
          { disasterType: 'Wildfire', probability: Math.floor(Math.random() * 100), riskLevel: 'Low', color: 'disaster-teal' },
        ]);
        toast({
          title: "Generic Prediction",
          description: "Using generalized model for this location as specific data is limited.",
          variant: "default"
        });
      }
      
      setIsLoading(false);
    }, 2000);
  };

  // Lists of countries and states for the dropdowns
  const countries = Object.keys(predictionData);
  const states = selectedCountry ? Object.keys(predictionData[selectedCountry] || {}) : [];

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
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter country name"
                  className="flex-1"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="min-w-[120px]">
                      {selectedCountry || "Select"} <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {countries.map((c) => (
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
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter state/region"
                  className="flex-1"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild disabled={!selectedCountry}>
                    <Button variant="outline" className="min-w-[120px]">
                      {selectedState || "Select"} <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {states.map((s) => (
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
            className="w-full mt-4" 
            onClick={handlePredict}
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Predict Disaster Risk'}
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
              <h3 className="font-semibold text-lg">Prediction Results</h3>
              <p className="text-sm text-muted-foreground">
                Based on historical data and environmental factors
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
                      className={`text-sm font-semibold text-disaster-${result.color}`}
                    >
                      {result.probability}% Risk
                    </span>
                  </div>
                  
                  <Progress 
                    value={result.probability} 
                    className={`h-2 bg-muted`}
                  />
                  
                  <p className="text-xs text-muted-foreground">
                    Risk Level: <span className={`text-disaster-${result.color} font-medium`}>{result.riskLevel}</span>
                  </p>
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
