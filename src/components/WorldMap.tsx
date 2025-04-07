
import { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';

interface Disaster {
  id: number;
  type: string;
  location: string;
  coordinates: [number, number];
  severity: 'high' | 'medium' | 'low';
  date: string;
}

const recentDisasters: Disaster[] = [
  {
    id: 1,
    type: 'Earthquake',
    location: 'Tokyo, Japan',
    coordinates: [139.6917, 35.6895],
    severity: 'medium',
    date: '2025-04-02'
  },
  {
    id: 2,
    type: 'Hurricane',
    location: 'Miami, USA',
    coordinates: [-80.1918, 25.7617],
    severity: 'high',
    date: '2025-03-28'
  },
  {
    id: 3,
    type: 'Flood',
    location: 'Bangladesh',
    coordinates: [90.3563, 23.6850],
    severity: 'high',
    date: '2025-04-05'
  },
  {
    id: 4,
    type: 'Wildfire',
    location: 'California, USA',
    coordinates: [-119.4179, 36.7783],
    severity: 'high',
    date: '2025-03-20'
  },
  {
    id: 5,
    type: 'Volcanic Eruption',
    location: 'Indonesia',
    coordinates: [106.8456, -6.2088],
    severity: 'medium',
    date: '2025-02-15'
  },
  {
    id: 6,
    type: 'Tsunami',
    location: 'Chile',
    coordinates: [-70.6693, -33.4489],
    severity: 'medium',
    date: '2025-01-30'
  }
];

const WorldMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We're using a setTimeout to simulate the loading of the map library
    // In a real application, you would load the actual map library here
    const timer = setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.innerHTML = '<div class="flex items-center justify-center h-full"><div class="text-center"><p class="text-lg font-medium mb-2">Interactive World Map</p><p class="text-sm text-muted-foreground">(Map visualization would be displayed here with the disasters marked)</p></div></div>';
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Live Disaster Map</h2>
        <Badge variant="outline" className="animate-pulse-slow">Live Updates</Badge>
      </div>
      
      <div ref={mapRef} className="map-container bg-muted flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 w-36 bg-muted-foreground/20 rounded mx-auto mb-4"></div>
          <div className="h-4 w-64 bg-muted-foreground/20 rounded mx-auto"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {recentDisasters.map((disaster) => (
          <div key={disaster.id} className="disaster-card hover-lift">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{disaster.type}</h3>
                <p className="text-sm text-muted-foreground">{disaster.location}</p>
              </div>
              <Badge
                variant="outline"
                className={
                  disaster.severity === 'high'
                    ? 'bg-disaster-red/10 text-disaster-red border-disaster-red/20'
                    : disaster.severity === 'medium'
                    ? 'bg-disaster-orange/10 text-disaster-orange border-disaster-orange/20'
                    : 'bg-disaster-teal/10 text-disaster-teal border-disaster-teal/20'
                }
              >
                {disaster.severity}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Reported: {disaster.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldMap;
