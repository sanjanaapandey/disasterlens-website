
import { Users, AlertTriangle, LifeBuoy, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="hover-lift">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-disaster-red/10 text-disaster-red p-2">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg">Active Alerts</h3>
          </div>
          
          <div className="mt-4">
            <p className="text-3xl font-bold">24</p>
            <p className="text-sm text-muted-foreground mt-1">Disasters monitored worldwide</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover-lift">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-disaster-blue/10 text-disaster-blue p-2">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg">People Protected</h3>
          </div>
          
          <div className="mt-4">
            <p className="text-3xl font-bold">2.5M+</p>
            <p className="text-sm text-muted-foreground mt-1">Users receiving alerts</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover-lift">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-disaster-teal/10 text-disaster-teal p-2">
              <LifeBuoy className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg">Safety Guides</h3>
          </div>
          
          <div className="mt-4">
            <p className="text-3xl font-bold">150+</p>
            <p className="text-sm text-muted-foreground mt-1">Region-specific guides</p>
          </div>
        </CardContent>
      </Card>
      
      <Card className="hover-lift">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-disaster-orange/10 text-disaster-orange p-2">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-lg">Early Warning</h3>
          </div>
          
          <div className="mt-4">
            <p className="text-3xl font-bold">12-48 hrs</p>
            <p className="text-sm text-muted-foreground mt-1">Average advance warning</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatCards;
