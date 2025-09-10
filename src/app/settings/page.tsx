
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
import { Separator } from '@/components/ui/separator';
import { Calendar, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { updateUserSettings } from '@/services/user';
import type { User } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';
import { useUser } from '@/context/user-context';

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
  const { user, isLoading, reloadUser } = useUser();
  const [userSettings, setUserSettings] = useState<Partial<User>>({});
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    if (user) {
      setUserSettings(user);
    }
  }, [user]);

  const handleFieldChange = (field: keyof User, value: any) => {
    setUserSettings(prev => ({...prev, [field]: value}));
  }

  const handleSave = async (section: string) => {
    if (!user) {
        toast({ variant: 'destructive', title: 'Not Authenticated', description: 'You must be logged in to save settings.'});
        return;
    }
    setIsSaving(true);
    try {
        await updateUserSettings(user.id, userSettings);
        await reloadUser(); // Reload the user context
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

  if (!user) {
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
              <AvatarImage src={userSettings.avatarUrl || user.avatarUrl || undefined} alt={userSettings.name} />
              <AvatarFallback>{userSettings.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
             <p className="text-sm text-muted-foreground">Avatar change is coming soon.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={userSettings.name || ''} onChange={(e) => handleFieldChange('name' as keyof User, e.target.value)} disabled={isSaving} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={userSettings.email || ''} disabled={true}/>
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
                        <p className="text-sm text-muted-foreground">Calendar integration is coming soon.</p>
                    </div>
                </div>
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
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="language">Learning Language</Label>
              <Select value={userSettings.language || ''} onValueChange={(value) => handleFieldChange('language' as keyof User, value)} disabled={isSaving}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Assamese">Assamese</SelectItem>
                  <SelectItem value="Bengali">Bengali</SelectItem>
                  <SelectItem value="Bodo">Bodo</SelectItem>
                  <SelectItem value="Business Hindi">Business Hindi</SelectItem>
                  <SelectItem value="Dogri">Dogri</SelectItem>
                  <SelectItem value="Gujarati">Gujarati</SelectItem>
                  <SelectItem value="Hindi">Hindi</SelectItem>
                  <SelectItem value="Kannada">Kannada</SelectItem>
                  <SelectItem value="Kashmiri">Kashmiri</SelectItem>
                  <SelectItem value="Konkani">Konkani</SelectItem>
                  <SelectItem value="Maithili">Maithili</SelectItem>
                  <SelectItem value="Malayalam">Malayalam</SelectItem>
                  <SelectItem value="Manipuri">Manipuri</SelectItem>
                  <SelectItem value="Marathi">Marathi</SelectItem>
                  <SelectItem value="Nepali">Nepali</SelectItem>
                  <SelectItem value="Odia">Odia</SelectItem>
                  <SelectItem value="Punjabi">Punjabi</SelectItem>
                  <SelectItem value="Sanskrit">Sanskrit</SelectItem>
                  <SelectItem value="Santali">Santali</SelectItem>
                  <SelectItem value="Sindhi">Sindhi</SelectItem>
                  <SelectItem value="Tamil">Tamil</SelectItem>
                  <SelectItem value="Telugu">Telugu</SelectItem>
                  <SelectItem value="Urdu">Urdu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Select value={userSettings.timezone || ''} onValueChange={(value) => handleFieldChange('timezone' as keyof User, value)} disabled={isSaving}>
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
                  checked={(userSettings as any).dailyReminders || false}
                  onCheckedChange={(checked) => handleFieldChange('dailyReminders' as keyof User, checked)}
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
                  checked={(userSettings as any).promotionalEmails || false}
                  onCheckedChange={(checked) => handleFieldChange('promotionalEmails' as keyof User, checked)}
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
