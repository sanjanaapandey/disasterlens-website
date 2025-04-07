
import { AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <AlertTriangle className="h-5 w-5 text-disaster-red mr-2" />
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-disaster-red to-disaster-orange">
            DisasterLens
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">About DisasterLens</h3>
            <p className="text-sm text-muted-foreground">
              DisasterLens provides early warnings and predictions for natural disasters using advanced machine learning algorithms and real-time data analysis.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/alerts" className="text-muted-foreground hover:text-foreground transition-colors">
                  Live Alerts
                </a>
              </li>
              <li>
                <a href="/knowledge" className="text-muted-foreground hover:text-foreground transition-colors">
                  Knowledge Base
                </a>
              </li>
              <li>
                <a href="/predict" className="text-muted-foreground hover:text-foreground transition-colors">
                  Predict Disasters
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Emergency Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Disaster Preparedness Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Emergency Contacts
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Aid Organizations
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-6" />
        
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
