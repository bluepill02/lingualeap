
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
import { Calendar } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-8">
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
              <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
              <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <Button variant="outline">Change Avatar</Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue={mockUser.name} />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={mockUser.email} />
            </div>
          </div>
          <Button>Save Profile</Button>
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
                <Button variant="outline">Connect</Button>
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
              <Select defaultValue={mockUser.language}>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue={mockUser.timezone}>
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
                   <SelectItem value="Asia/Tokyo">
                    (GMT+9) Tokyo
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button>Save Preferences</Button>
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
                <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <h3 className="font-semibold">Smart Scheduling via Calendar</h3>
                    <p className="text-sm text-muted-foreground">Automatically find time in your calendar for micro-sessions.</p>
                </div>
                <Switch />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                    <h3 className="font-semibold">Promotional Emails</h3>
                    <p className="text-sm text-muted-foreground">Receive updates on new features and special offers.</p>
                </div>
                <Switch />
            </div>
            <Button>Save Notifications</Button>
        </CardContent>
      </Card>
    </div>
  );
}
