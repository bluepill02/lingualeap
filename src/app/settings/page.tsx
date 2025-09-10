
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
import { Separator } from '../ui/separator';
import { Calendar, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { getUserSettings, updateUserSettings } from '@/services/user';
import type { User } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

function SettingsSkeleton() {
    return (
        <div className="space-y-8">
             <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                        <Skeleton className="h-20 w-20 rounded-full" />
                        <Skeleton className="h-10 w-24" />
                    </div>
                     <Skeleton className="h-10 w-full" />
                     <Skeleton className="h-10 w-24" />
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent className="space-y-6">
                     <Skeleton className="h-12 w-full" />
                     <Skeleton className="h-10 w-32" />
                </CardContent>
            </Card>
        </div>
    );
}


export default function SettingsPage() {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userSettings, setUserSettings] = useState<Partial<User>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        try {
            const settings = await getUserSettings(user.uid);
            setUserSettings(settings || { name: user.displayName, email: user.email });
        } catch(error) {
            console.error("Failed to load user settings", error);
            toast({ variant: 'destructive', title: 'Error', description: 'Could not load your settings.' });
        } finally {
            setIsLoading(false);
        }
      } else {
        setCurrentUser(null);
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, [toast]);

  const handleFieldChange = (field: keyof User, value: any) => {
    setUserSettings(prev => ({...prev, [field]: value}));
  }

  const handleSave = async (section: string) => {
    if (!currentUser) {
        toast({ variant: 'destructive', title: 'Not Authenticated', description: 'You must be logged in to save settings.'});
        return;
    }
    setIsSaving(true);
    try {
        await updateUserSettings(currentUser.uid, userSettings);
        toast({
            title: 'Settings Saved',
            description: `Your ${section} preferences have been updated.`,
        });
    } catch (error) {
        console.error(`Failed to save ${section}`, error);
        toast({ variant: 'destructive', title: 'Save Failed', description: 'Could not save your settings.' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
      return <SettingsSkeleton />
  }

  if (!currentUser) {
      return (
        <Card>
            <CardHeader>
                <CardTitle>Access Denied</CardTitle>
                <CardDescription>Please log in to view and manage your settings.</CardDescription>
            </CardHeader>
        </Card>
      );
  }

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
              <AvatarImage src={userSettings.avatarUrl || currentUser.photoURL || undefined} alt={userSettings.name} />
              <AvatarFallback>{userSettings.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <Button variant="outline" disabled>Change Avatar</Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={userSettings.name || ''} onChange={(e) => handleFieldChange('name', e.target.value)} disabled={isSaving} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={userSettings.email || ''} onChange={(e) => handleFieldChange('email', e.target.value)} disabled={isSaving || !!currentUser.email}/>
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
              <Select value={userSettings.language || ''} onValueChange={(value) => handleFieldChange('language', value)} disabled={isSaving}>
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
              <Select value={userSettings.timezone || ''} onValueChange={(value) => handleFieldChange('timezone', value)} disabled={isSaving}>
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
            {/* Placeholder UI - In a real app, these would come from userSettings */}
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <h3 className="font-semibold">Daily Reminders</h3>
                    <p className="text-sm text-muted-foreground">Get reminded of due flashcards and upcoming streak expiry.</p>
                </div>
                <Switch 
                  defaultChecked
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
