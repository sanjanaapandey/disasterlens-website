
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32">
      {/* Background pattern/decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute left-20 bottom-20 h-64 w-64 rounded-full bg-pink-200 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-200 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6 animate-pulse-slow shadow-sm">
            <AlertTriangle className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Early Warning System</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Predict
            </span>{" "}
            &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-rose-400">
              Prepare
            </span>
            <br />
            for Natural Disasters
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            DisasterLens uses advanced algorithms to predict natural disaster risks in your area, keeping you informed and prepared before disaster strikes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 animate-pulse-slow shadow-md" asChild>
              <Link to="/predict">
                Check Your Risk
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 shadow-sm" asChild>
              <Link to="/knowledge">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-20">
            {[
              { name: 'Floods', color: 'blue', delay: 0 },
              { name: 'Earthquakes', color: 'red', delay: 0.1 },
              { name: 'Hurricanes', color: 'teal', delay: 0.2 },
              { name: 'Wildfires', color: 'orange', delay: 0.3 },
              { name: 'Volcanoes', color: 'red', delay: 0.4 },
              { name: 'Tsunamis', color: 'blue', delay: 0.5 }
            ].map((disaster, index) => (
              <div 
                key={disaster.name} 
                className="flex flex-col items-center" 
                style={{ 
                  animationDelay: `${disaster.delay}s` 
                }}
              >
                <div className={`w-16 h-16 mb-3 rounded-full flex items-center justify-center bg-${disaster.color}-100 text-${disaster.color}-700 shadow-md animate-float`} style={{ animationDelay: `${disaster.delay}s` }}>
                  <span className="text-xl font-bold">{disaster.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium">{disaster.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
