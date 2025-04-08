
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Bell, Mail, Phone, Shield, CheckCircle } from 'lucide-react';

interface AlertPreference {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const alertPreferences: AlertPreference[] = [
  {
    id: 'earthquakes',
    label: 'Earthquakes',
    description: 'Get alerts for seismic activity in your area',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m14.5 4.5-5 3 5 3-5 3 5 3-5 3"></path></svg>,
  },
  {
    id: 'floods',
    label: 'Floods',
    description: 'Receive warnings about potential flooding',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M20 16h2"></path><path d="M10 16h4"></path><path d="M2 16h4"></path><path d="M17 12h2"></path><path d="M13 12h2"></path><path d="M9 12h2"></path><path d="M5 12h2"></path><path d="M3 8h2"></path><path d="M19 8h2"></path><path d="M15 8h2"></path><path d="M11 8h2"></path><path d="M7 8h2"></path></svg>,
  },
  {
    id: 'hurricanes',
    label: 'Hurricanes',
    description: 'Stay informed about tropical storms and hurricanes',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M17.997 18.5a8 8 0 1 0-13.995-8"></path><path d="M11 18a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"></path><path d="M12 22c-3.373 0-6.75-2.421-7.64-5"></path><path d="M5 12 2 14"></path></svg>,
  },
  {
    id: 'wildfires',
    label: 'Wildfires',
    description: 'Be notified about nearby wildfires and evacuations',
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>,
  },
];

const AlertSignup = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [selectedAlerts, setSelectedAlerts] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleAlertToggle = (id: string) => {
    setSelectedAlerts(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to receive alerts.",
        variant: "destructive"
      });
      return;
    }
    
    if (!location.trim()) {
      toast({
        title: "Location Required",
        description: "Please specify your location for targeted alerts.",
        variant: "destructive"
      });
      return;
    }
    
    if (selectedAlerts.length === 0) {
      toast({
        title: "Alert Selection Required",
        description: "Please select at least one type of alert to receive.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      toast({
        title: "Successfully Subscribed!",
        description: "You will now receive alerts for your selected disaster types.",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setEmail('');
        setPhone('');
        setLocation('');
        setSelectedAlerts([]);
      }, 3000);
    }, 1500);
  };
  
  if (isSuccess) {
    return (
      <Card className="w-full">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-xl">Alert Subscription Successful!</CardTitle>
            <CardDescription>
              You've successfully signed up to receive disaster alerts. We'll send notifications to your provided contact methods when relevant warnings are issued for your area.
            </CardDescription>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <CardTitle>Sign Up for Disaster Alerts</CardTitle>
        </div>
        <CardDescription>
          Get timely notifications about potential disasters in your area
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> Phone Number (Optional)
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M12 21c5.523 0 10-4.477 10-10S17.523 1 12 1 2 5.477 2 11s4.477 10 10 10z"></path><path d="m14 8-5 8.5V14l5-2v-4z"></path></svg>
                Your Location
              </Label>
              <Input
                id="location"
                type="text"
                placeholder="City, State/Province, Country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                We'll use this to send you targeted alerts for your specific area
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <Label className="flex items-center gap-2">
              <Shield className="h-4 w-4" /> Select Alert Types
            </Label>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {alertPreferences.map((preference) => (
                <div 
                  key={preference.id}
                  className={`flex items-start space-x-3 p-3 rounded-md border ${
                    selectedAlerts.includes(preference.id) ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                >
                  <Checkbox
                    id={preference.id}
                    checked={selectedAlerts.includes(preference.id)}
                    onCheckedChange={() => handleAlertToggle(preference.id)}
                    className="mt-1"
                  />
                  <div>
                    <Label 
                      htmlFor={preference.id}
                      className="text-sm font-medium flex items-center gap-2 cursor-pointer"
                    >
                      {preference.icon}
                      {preference.label}
                    </Label>
                    <p className="text-xs text-muted-foreground mt-1">
                      {preference.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </CardContent>
      
      <CardFooter className="flex justify-end">
        <Button 
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? "Processing..." : "Sign Up for Alerts"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AlertSignup;
