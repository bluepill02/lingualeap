import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockUser } from '@/lib/data';
import {
  Trophy,
  BrainCircuit,
  Target,
  Clock,
  Settings,
  LogOut,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

const stats = [
  {
    icon: Trophy,
    value: mockUser.streak,
    label: 'Day Streak',
    color: 'text-yellow-400',
  },
  {
    icon: BrainCircuit,
    value: 0,
    label: 'Words Mastered',
    color: 'text-purple-400',
  },
  {
    icon: Target,
    value: 'A1',
    label: 'CEFR Level',
    color: 'text-green-400',
  },
  {
    icon: Clock,
    value: 0,
    label: 'Due Today',
    color: 'text-blue-400',
  },
];

export default function DashboardPage() {
  return (
    <div className="max-w-md mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">
          Good afternoon, {mockUser.name}!
        </h1>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-card/50 text-center">
            <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6 bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Sparkles className="text-primary h-5 w-5" />
            Smart Study Plan
          </CardTitle>
          <CardDescription>
            Personalized recommendations based on your progress
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between text-center mb-4">
            <div>
              <p className="text-muted-foreground text-sm">Focus Areas</p>
              <p className="font-bold">0 words</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Suggested Time</p>
              <p className="font-bold">5 min</p>
            </div>
          </div>
          <div className="bg-primary/10 text-primary-foreground p-3 rounded-lg flex items-center gap-3 text-sm mb-4">
            <Lightbulb className="h-5 w-5 text-yellow-400" />
            <span>You've learned 0 words so far!</span>
          </div>
          <Button className="w-full" size="lg">
            Start Smart Session
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
