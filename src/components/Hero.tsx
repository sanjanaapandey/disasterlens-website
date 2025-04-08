
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center">
      {/* Mountain background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/6dbf220b-d0a1-40d9-b739-178628884716.png')] bg-cover bg-center z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/70 to-blue-700/70 z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-lg">
            Predict Disaster Risks
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Assess the risk of disasters happening by selecting a country and region.
          </p>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            asChild
          >
            <Link to="/predict">
              Get Started
            </Link>
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 bg-cream-100 rounded-2xl overflow-hidden">
            <div className="p-8 flex flex-col items-center">
              <div className="mb-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-blue-600">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Disaster Knowledge</h2>
              <p className="text-center text-gray-700">
                Learn about different types of disasters and how to mitigate their impact.
              </p>
            </div>
            
            <div className="p-8 flex flex-col items-center border-l border-gray-200">
              <div className="mb-4 w-16 h-16 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-blue-600">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Risk Map</h2>
              <p className="text-center text-gray-700">
                View a map displaying regions with high risk of specific disasters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
