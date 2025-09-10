
'use client';

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUser } from '@/lib/data';
import { Separator } from '../ui/separator';
import { Calendar, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase';

export default function SettingsPage() {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [name, setName] = useState(mockUser.name);
  const [email, setEmail] = useState(mockUser.email);
  const [language, setLanguage] = useState(mockUser.language);
  const [timezone, setTimezone] = useState(mockUser.timezone);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  // State for notifications
  const [dailyReminders, setDailyReminders] = useState(true);
  const [smartScheduling, setSmartScheduling] = useState(false);
  const [promotionalEmails, setPromotionalEmails] = useState(false);
  
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        // In a real app, you would fetch user settings from a database here
        // For now, we'll use mock data and local state
        setName(user.displayName || mockUser.name);
        setEmail(user.email || mockUser.email);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSave = (section: string) => {
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: 'Settings Saved',
        description: `Your ${section} preferences have been updated.`,
      });
    }, 1000);
  };

  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and preferences.
        </p>
      </div>
      
      <Separator />

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Profile</CardTitle>
          <CardDescription>
            This information will be displayed on your profile.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={currentUser?.photoURL || mockUser.avatarUrl} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button variant="outline" disabled={isSaving}>Change Avatar</Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} disabled={isSaving} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={isSaving || !!currentUser?.email}/>
            </div>
          </div>
          <Button onClick={() => handleSave('Profile')} disabled={isSaving}>
            {isSaving && <Loader2 className="mr-2 animate-spin" />}
            Save Profile
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Connected Accounts</CardTitle>
          <CardDescription>
            Link your calendar to enable smart scheduling.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <Card className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    <Calendar className="text-primary"/>
                    <div>
                        <h3 className="font-semibold">Google Calendar</h3>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                    </div>
                </div>
                <Button variant="outline" disabled>Connect</Button>
            </Card>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Preferences</CardTitle>
          <CardDescription>
            Customize your learning experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="language">Learning Language</Label>
              <Select value={language} onValueChange={(value) => setLanguage(value)} disabled={isSaving}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Hindi">Hindi</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Select value={timezone} onValueChange={(value) => setTimezone(value)} disabled={isSaving}>
                <SelectTrigger id="timezone">
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="America/New_York">
                    (GMT-4) Eastern Time
                  </SelectItem>
                  <SelectItem value="Europe/London">
                    (GMT+1) London
                  </SelectItem>
                   <SelectItem value="Asia/Kolkata">
                    (GMT+5:30) India Standard Time
                  </SelectItem>
                   <SelectItem value="Asia/Tokyo">
                    (GMT+9) Tokyo
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={() => handleSave('Preferences')} disabled={isSaving}>
             {isSaving && <Loader2 className="mr-2 animate-spin" />}
            Save Preferences
            </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Notifications</CardTitle>
          <CardDescription>
            Manage how you receive notifications from us.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <h3 className="font-semibold">Daily Reminders</h3>
                    <p className="text-sm text-muted-foreground">Get reminded of due flashcards and upcoming streak expiry.</p>
                </div>
                <Switch 
                  checked={dailyReminders} 
                  onCheckedChange={setDailyReminders} 
                  disabled={isSaving} 
                  aria-label="Toggle daily reminders"
                />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <h3 className="font-semibold">Smart Scheduling via Calendar</h3>
                    <p className="text-sm text-muted-foreground">Automatically find time in your calendar for micro-sessions.</p>
                </div>
                 <Switch 
                  checked={smartScheduling} 
                  onCheckedChange={setSmartScheduling} 
                  disabled 
                  aria-label="Toggle smart scheduling"
                />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <h3 className="font-semibold">Promotional Emails</h3>
                    <p className="text-sm text-muted-foreground">Receive updates on new features and special offers.</p>
                </div>
                 <Switch 
                  checked={promotionalEmails} 
                  onCheckedChange={setPromotionalEmails} 
                  disabled={isSaving} 
                  aria-label="Toggle promotional emails"
                />
            </div>
            <Button onClick={() => handleSave('Notifications')} disabled={isSaving}>
                 {isSaving && <Loader2 className="mr-2 animate-spin" />}
                Save Notifications
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
