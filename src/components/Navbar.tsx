
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled || location.pathname !== '/' ? 'bg-blue-900/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white text-3xl font-bold tracking-wider">
            DisasterLens
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/knowledge" label="About" />
            <NavLink to="/predict" label="Predict Disaster" />
          </div>
          
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" />
            <MobileNavLink to="/knowledge" label="About" />
            <MobileNavLink to="/predict" label="Predict Disaster" />
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

// Desktop navigation link
const NavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={`text-white font-medium hover:text-white/80 transition-colors ${
        isActive ? 'text-white' : 'text-white/80'
      }`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="navbar-underline"
          className="h-0.5 bg-white mt-1"
          transition={{ type: "spring", duration: 0.5 }}
        />
      )}
    </Link>
  );
};

// Mobile navigation link
const MobileNavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`px-4 py-2 text-white text-lg ${
        isActive ? 'font-bold' : 'font-normal'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;
