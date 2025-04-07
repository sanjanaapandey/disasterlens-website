
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32">
      {/* Background pattern/decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-disaster-teal blur-3xl"></div>
        <div className="absolute left-20 bottom-20 h-64 w-64 rounded-full bg-disaster-red blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center bg-disaster-red/10 text-disaster-red px-4 py-2 rounded-full mb-6 animate-pulse-slow">
            <AlertTriangle className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Early Warning System</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-disaster-blue to-disaster-teal">
              Predict
            </span>{" "}
            &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-disaster-orange to-disaster-red">
              Prepare
            </span>
            <br />
            for Natural Disasters
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
            DisasterLens uses advanced algorithms to predict natural disaster risks in your area, keeping you informed and prepared before disaster strikes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="animate-pulse-slow">
              <Link to="/predict">
                Check Your Risk
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/knowledge">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-20">
            {['Floods', 'Earthquakes', 'Hurricanes', 'Wildfires', 'Volcanoes', 'Tsunamis'].map((disaster, index) => (
              <div 
                key={disaster} 
                className="flex flex-col items-center" 
                style={{ 
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <div className={`w-16 h-16 mb-3 rounded-full flex items-center justify-center bg-disaster-${index % 2 === 0 ? 'blue' : 'red'}/10 text-disaster-${index % 2 === 0 ? 'blue' : 'red'} animate-float`} style={{ animationDelay: `${index * 0.2}s` }}>
                  <span className="text-xl font-bold">{disaster.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium">{disaster}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
