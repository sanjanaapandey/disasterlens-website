
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <AlertTriangle className="h-6 w-6 text-disaster-red" />
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-disaster-red to-disaster-orange">
              DisasterLens
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/alerts" className="text-sm font-medium hover:text-primary transition-colors">
              Live Alerts
            </Link>
            <Link to="/knowledge" className="text-sm font-medium hover:text-primary transition-colors">
              Knowledge Base
            </Link>
            <Link to="/predict" className="text-sm font-medium hover:text-primary transition-colors">
              Predict
            </Link>
            <Button size="sm">Get Alerts</Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/alerts" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Live Alerts
              </Link>
              <Link 
                to="/knowledge" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Knowledge Base
              </Link>
              <Link 
                to="/predict" 
                className="text-sm font-medium hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Predict
              </Link>
              <Button 
                size="sm" 
                className="w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Alerts
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
