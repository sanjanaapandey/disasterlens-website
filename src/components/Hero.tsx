
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden py-20 sm:py-32">
      {/* Background pattern/decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-pastel-blue blur-3xl"></div>
        <div className="absolute left-20 bottom-20 h-64 w-64 rounded-full bg-pastel-pink blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pastel-purple blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center bg-pastel-pink text-pink-800 px-5 py-2.5 rounded-full mb-8 animate-pulse-slow shadow-md">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium tracking-wide">Early Warning System</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 drop-shadow-sm">
              Predict
            </span>{" "}
            &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500 drop-shadow-sm">
              Prepare
            </span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl text-purple-800 opacity-80">for Natural Disasters</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-10 leading-relaxed">
            DisasterLens uses advanced algorithms to predict natural disaster risks in your area, 
            keeping you informed and prepared before disaster strikes. Our mission is to create 
            a safer world through technology and awareness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 animate-pulse-slow shadow-lg px-8 py-6 text-base" asChild>
              <Link to="/predict">
                Check Your Risk
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-800 hover:bg-purple-50 shadow-md px-8 py-6 text-base" asChild>
              <Link to="/knowledge">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-24">
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
                <div className={`w-16 h-16 mb-3 rounded-full flex items-center justify-center bg-pastel-${disaster.color} text-${disaster.color}-700 shadow-lg animate-float`} style={{ animationDelay: `${disaster.delay}s` }}>
                  <span className="text-xl font-bold">{disaster.name.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{disaster.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
