
import { useEffect, useRef } from 'react';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const parallaxElements = heroRef.current.querySelectorAll('.parallax');
        
        parallaxElements.forEach((element, index) => {
          const speed = 0.1 * (index + 1);
          if (element instanceof HTMLElement) {
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative overflow-hidden py-28 sm:py-36">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-pastel-pink opacity-60 blur-3xl parallax"></div>
        <div className="absolute -left-20 top-40 h-96 w-96 rounded-full bg-pastel-blue opacity-60 blur-3xl parallax"></div>
        <div className="absolute right-20 bottom-20 h-80 w-80 rounded-full bg-pastel-yellow opacity-60 blur-3xl parallax"></div>
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pastel-purple opacity-50 blur-3xl parallax"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-6 h-6 rounded-full bg-pastel-pink animate-float"></div>
        <div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-pastel-blue animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-10 left-1/4 w-8 h-8 rounded-full bg-pastel-yellow animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center bg-pastel-pink/70 backdrop-blur-sm text-pink-800 px-6 py-3 rounded-full mb-10 animate-pulse-slow shadow-lg">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium tracking-wide">Early Warning System</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 leading-tight animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 drop-shadow-sm">
              Predict
            </span>{" "}
            &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-pink-500 to-rose-500 drop-shadow-sm">
              Prepare
            </span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl text-purple-800 opacity-90 mt-4 block">
              for Natural Disasters
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-12 leading-relaxed animate-fade-in opacity-90 backdrop-blur-sm bg-white/20 p-6 rounded-2xl shadow-sm">
            DisasterLens uses advanced algorithms to predict natural disaster risks in your area, 
            keeping you informed and prepared before disaster strikes. Our mission is to create 
            a safer world through technology and awareness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 animate-pulse-slow shadow-lg px-8 py-6 text-base transition-all duration-300 hover:scale-105" asChild>
              <Link to="/predict" className="transition-transform duration-300">
                Check Your Risk
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-purple-300 text-purple-800 hover:bg-purple-50 shadow-md px-8 py-6 text-base backdrop-blur-sm transition-all duration-300 hover:scale-105" asChild>
              <Link to="/knowledge" className="transition-transform duration-300">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mt-24 animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
                className="flex flex-col items-center hover-lift" 
                style={{ 
                  animationDelay: `${disaster.delay}s` 
                }}
              >
                <div className={`w-16 h-16 mb-3 rounded-full flex items-center justify-center bg-pastel-${disaster.color} text-${disaster.color}-700 shadow-lg animate-float backdrop-blur-sm`} style={{ animationDelay: `${disaster.delay}s` }}>
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
