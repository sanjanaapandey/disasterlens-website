
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, AlertTriangle, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-white/70 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-2 rounded-full border border-purple-100 shadow-sm group-hover:shadow-lg transition-all duration-300">
                <Shield className="h-6 w-6 text-gradient-to-r from-pink-500 to-purple-600" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                DisasterLens
              </span>
              <span className="text-xs text-purple-500 opacity-80">Early Alert System</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" label="Home" />
            <NavLink to="/alerts" label="Live Alerts" />
            <NavLink to="/knowledge" label="Knowledge Base" />
            <NavLink to="/predict" label="Predict" />
            <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg">Get Alerts</Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground bg-white/80 p-2 rounded-full backdrop-blur-sm shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-3 overflow-hidden backdrop-blur-md bg-white/90 mt-3 rounded-xl shadow-lg"
            >
              <div className="flex flex-col space-y-3 p-4">
                <MobileNavLink to="/" label="Home" />
                <MobileNavLink to="/alerts" label="Live Alerts" />
                <MobileNavLink to="/knowledge" label="Knowledge Base" />
                <MobileNavLink to="/predict" label="Predict" />
                <Button 
                  size="sm" 
                  className="w-full mt-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Alerts
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

// Desktop navigation link with animations
const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className="relative px-2 py-1 text-sm font-medium transition-colors"
    >
      {label}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 scale-x-0 transition-transform duration-300 origin-bottom-left hover:scale-x-100">
        <div className={`absolute inset-0 ${isActive ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300 bg-gradient-to-r from-purple-500 to-pink-500`}></div>
      </div>
    </Link>
  );
};

// Mobile navigation link with animations
const MobileNavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium py-2 px-3 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700' 
          : 'hover:bg-gray-100'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
