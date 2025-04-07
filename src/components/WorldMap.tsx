
import { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertTriangle, Map as MapIcon, Info } from 'lucide-react';

interface Disaster {
  id: number;
  type: string;
  location: string;
  coordinates: [number, number];
  severity: 'high' | 'medium' | 'low';
  date: string;
  details?: string;
}

const recentDisasters: Disaster[] = [
  {
    id: 1,
    type: 'Earthquake',
    location: 'Tokyo, Japan',
    coordinates: [139.6917, 35.6895],
    severity: 'medium',
    date: '2025-04-02',
    details: 'Magnitude 5.8 earthquake detected 30km offshore from Tokyo Bay. No tsunami warning issued. Minor damage reported in coastal areas with some disruption to train services.'
  },
  {
    id: 2,
    type: 'Hurricane',
    location: 'Miami, USA',
    coordinates: [-80.1918, 25.7617],
    severity: 'high',
    date: '2025-03-28',
    details: 'Hurricane Diana (Category 3) with sustained winds of 120mph. Storm surge warnings in effect for coastal areas. Mandatory evacuations ordered for vulnerable zones.'
  },
  {
    id: 3,
    type: 'Flood',
    location: 'Bangladesh',
    coordinates: [90.3563, 23.6850],
    severity: 'high',
    date: '2025-04-05',
    details: 'Severe flooding in central regions following heavy monsoon rainfall. Major rivers above danger levels. Over 100,000 people displaced from low-lying areas. Emergency shelters activated.'
  },
  {
    id: 4,
    type: 'Wildfire',
    location: 'California, USA',
    coordinates: [-119.4179, 36.7783],
    severity: 'high',
    date: '2025-03-20',
    details: 'Rapidly spreading wildfire covering over 25,000 acres with only 15% containment. Driven by strong winds and dry conditions. Multiple communities under evacuation orders.'
  },
  {
    id: 5,
    type: 'Volcanic Eruption',
    location: 'Indonesia',
    coordinates: [106.8456, -6.2088],
    severity: 'medium',
    date: '2025-02-15',
    details: 'Increased activity at Mount Merapi with intermittent ash emissions reaching 3,000m. Exclusion zone established at 5km radius. Monitoring systems detecting increased seismic activity.'
  },
  {
    id: 6,
    type: 'Tsunami',
    location: 'Chile',
    coordinates: [-70.6693, -33.4489],
    severity: 'medium',
    date: '2025-01-30',
    details: 'Tsunami warning issued following 7.4 magnitude offshore earthquake. Wave heights of 1.5-2m observed along central coastal areas. Coastal evacuation completed successfully.'
  }
];

const WorldMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedDisaster, setSelectedDisaster] = useState<Disaster | null>(null);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    // We're using a setTimeout to simulate the loading of the map library
    // In a real application, you would load the actual map library here
    const timer = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div class="relative w-full h-full bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden rounded-xl">
            <div class="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                <path d="M207,142 C231,157 247,190 225,214 C203,238 142,238 126,206 C110,174 128,133 170,132 C212,131 183,127 207,142 Z" fill="#E6F4F1" />
                <path d="M607,242 C631,257 647,290 625,314 C603,338 542,338 526,306 C510,274 528,233 570,232 C612,231 583,227 607,242 Z" fill="#E6F4F1" />
                <path d="M357,342 C381,357 397,390 375,414 C353,438 292,438 276,406 C260,374 278,333 320,332 C362,331 333,327 357,342 Z" fill="#E6F4F1" />
                <path d="M137,332 C161,347 177,380 155,404 C133,428 72,428 56,396 C40,364 58,323 100,322 C142,321 113,317 137,332 Z" fill="#E6F4F1" />
                <path d="M457,242 C481,257 497,290 475,314 C453,338 392,338 376,306 C360,274 378,233 420,232 C462,231 433,227 457,242 Z" fill="#E6F4F1" />
              </svg>
            </div>
            
            <div class="relative w-4/5 h-3/5 border-2 border-blue-200 rounded-full overflow-hidden">
              <div class="absolute inset-0 bg-blue-100/50"></div>
              <div class="absolute inset-0">
                <svg width="100%" height="100%" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M169,186 C321,146 466,187 633,186 C687,186 723,234 723,292 C723,350 686,369 633,369 C532,369 355,420 220,369 C85,318 65,276 65,229 C65,182 17,226 169,186 Z" fill="#AFD5F0" />
                </svg>
              </div>
              
              ${recentDisasters.map(disaster => {
                // Convert coordinates to relative position within the map container
                // This is a simplified example, real maps would use proper projection
                const x = ((disaster.coordinates[0] + 180) / 360) * 100;
                const y = ((90 - disaster.coordinates[1]) / 180) * 100;
                
                const color = disaster.severity === 'high' 
                  ? '#FCA5A5' // red-300
                  : disaster.severity === 'medium'
                  ? '#FCD34D' // yellow-300
                  : '#6EE7B7'; // green-300
                
                return `
                  <div class="absolute animate-pulse" style="left: ${x}%; top: ${y}%; transform: translate(-50%, -50%);">
                    <div class="w-3 h-3 rounded-full bg-white"></div>
                    <div class="absolute inset-0 w-3 h-3 rounded-full ${disaster.severity === 'high' ? 'bg-red-400' : disaster.severity === 'medium' ? 'bg-amber-400' : 'bg-teal-400'} animate-ping opacity-75"></div>
                  </div>
                `;
              }).join('')}
            </div>
            
            <div class="absolute bottom-4 left-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
              Interactive World Map (Simplified View)
            </div>
          </div>
        `;
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Live Disaster Map</h2>
        <Badge variant="outline" className="animate-pulse-slow bg-pink-50 text-pink-700 border-pink-200">Live Updates</Badge>
      </div>
      
      <div ref={mapRef} className="map-container bg-blue-50 flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 w-36 bg-blue-200/50 rounded mx-auto mb-4"></div>
          <div className="h-4 w-64 bg-blue-200/50 rounded mx-auto"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {recentDisasters.map((disaster) => (
          <div 
            key={disaster.id} 
            className="pastel-card rounded-xl shadow hover:shadow-md transition-all hover-lift p-4 cursor-pointer"
            onClick={() => setSelectedDisaster(disaster)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{disaster.type}</h3>
                <p className="text-sm text-muted-foreground">{disaster.location}</p>
              </div>
              <Badge
                variant="outline"
                className={
                  disaster.severity === 'high'
                    ? 'bg-red-100 text-red-700 border-red-200'
                    : disaster.severity === 'medium'
                    ? 'bg-amber-100 text-amber-700 border-amber-200'
                    : 'bg-teal-100 text-teal-700 border-teal-200'
                }
              >
                {disaster.severity}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Reported: {disaster.date}</p>
            <div className="flex justify-end mt-2">
              <button 
                className="flex items-center text-xs text-sky-600 hover:text-sky-800 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedDisaster(disaster);
                  setShowMap(true);
                }}
              >
                <MapIcon className="h-3 w-3 mr-1" /> View on map
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Disaster Details Dialog */}
      <Dialog open={selectedDisaster !== null} onOpenChange={(open) => !open && setSelectedDisaster(null)}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-blue-50">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-amber-500" />
              {selectedDisaster?.type} in {selectedDisaster?.location}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm">{selectedDisaster?.details}</p>
            </div>
            <div>
              <Badge
                variant="outline"
                className={
                  selectedDisaster?.severity === 'high'
                    ? 'bg-red-100 text-red-700 border-red-200'
                    : selectedDisaster?.severity === 'medium'
                    ? 'bg-amber-100 text-amber-700 border-amber-200'
                    : 'bg-teal-100 text-teal-700 border-teal-200'
                }
              >
                Severity: {selectedDisaster?.severity}
              </Badge>
              <p className="text-xs text-muted-foreground mt-2">Reported: {selectedDisaster?.date}</p>
            </div>
            <button 
              className="pastel-button w-full py-2 px-4 rounded-lg flex items-center justify-center"
              onClick={() => setShowMap(true)}
            >
              <MapIcon className="h-4 w-4 mr-2" /> View on World Map
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Map View Dialog */}
      <Dialog open={showMap} onOpenChange={setShowMap}>
        <DialogContent className="sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] max-h-[90vh] overflow-hidden bg-gradient-to-br from-white to-blue-50">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <MapIcon className="h-5 w-5 mr-2 text-sky-500" />
              World Disaster Map
              {selectedDisaster && (
                <Badge className="ml-2 bg-blue-100 text-blue-700">
                  Viewing: {selectedDisaster.type} in {selectedDisaster.location}
                </Badge>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="relative h-[70vh] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden">
            <div className="absolute inset-0">
              <svg width="100%" height="100%" viewBox="0 0 1000 600" xmlns="http://www.w3.org/2000/svg">
                <path d="M169,186 C321,146 466,187 633,186 C687,186 723,234 723,292 C723,350 686,369 633,369 C532,369 355,420 220,369 C85,318 65,276 65,229 C65,182 17,226 169,186 Z" fill="#AFD5F0" />
                <path d="M207,142 C231,157 247,190 225,214 C203,238 142,238 126,206 C110,174 128,133 170,132 C212,131 183,127 207,142 Z" fill="#E6F4F1" />
                <path d="M607,242 C631,257 647,290 625,314 C603,338 542,338 526,306 C510,274 528,233 570,232 C612,231 583,227 607,242 Z" fill="#E6F4F1" />
                <path d="M357,342 C381,357 397,390 375,414 C353,438 292,438 276,406 C260,374 278,333 320,332 C362,331 333,327 357,342 Z" fill="#E6F4F1" />
              </svg>
            </div>
            
            {recentDisasters.map(disaster => {
              // Convert coordinates to relative position within the map container
              const x = ((disaster.coordinates[0] + 180) / 360) * 100;
              const y = ((90 - disaster.coordinates[1]) / 180) * 100;
              
              const isSelected = selectedDisaster?.id === disaster.id;
              const size = isSelected ? 'w-5 h-5' : 'w-3 h-3';
              const pulseClass = isSelected ? 'animate-pulse' : '';
              
              return (
                <div 
                  key={disaster.id}
                  className={`absolute ${pulseClass}`}
                  style={{left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)'}}
                  onClick={() => setSelectedDisaster(disaster)}
                >
                  <div className={`${size} rounded-full ${isSelected ? 'bg-white' : disaster.severity === 'high' ? 'bg-red-400' : disaster.severity === 'medium' ? 'bg-amber-400' : 'bg-teal-400'}`}></div>
                  {isSelected && (
                    <div className="absolute -inset-1 rounded-full bg-white/50 animate-ping"></div>
                  )}
                  {isSelected && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-2 bg-white/90 px-2 py-1 rounded text-xs whitespace-nowrap">
                      {disaster.type} in {disaster.location}
                    </div>
                  )}
                </div>
              );
            })}
            
            <div className="absolute bottom-4 right-4 flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <span className="text-xs">High</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <span className="text-xs">Medium</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                <span className="text-xs">Low</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 p-2 bg-white/80 rounded-lg">
              <Info className="h-4 w-4 text-gray-500 inline mr-1" />
              <span className="text-xs text-gray-700">Interactive World Map (Simplified View)</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WorldMap;
