
import { AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-3 shadow-lg">
            <AlertTriangle className="h-6 w-6 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-red-500">
              DisasterLens
            </span>
            <p className="text-xs text-muted-foreground">Early warning system</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3 text-blue-800">About DisasterLens</h3>
            <p className="text-sm text-muted-foreground">
              DisasterLens provides early warnings and predictions for natural disasters using advanced machine learning algorithms and real-time data analysis.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-blue-800">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/alerts" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Live Alerts
                </Link>
              </li>
              <li>
                <Link to="/knowledge" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link to="/predict" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Predict Disasters
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3 text-blue-800">Emergency Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Global Disaster API
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Emergency Contacts
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors">
                  Aid Organizations
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6 bg-blue-100" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DisasterLens. All rights reserved.</p>
          <p className="mt-1">
            DisasterLens is an educational platform for disaster awareness and preparedness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
