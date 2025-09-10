
'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useUser } from '@/context/user-context';
import { updateUserSettings } from '@/services/user';
import { useToast } from '@/hooks/use-toast';
import { Check, Loader2, Sparkles, Star, Users, Lock, Bot, Camera, FileQuestion, Megaphone, Radio, ShieldCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { getUserSettings } from '@/services/user';
import { getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase';
import Link from 'next/link';
import { cn } from '@/lib/utils';


export default function UpgradePage() {
  const { user: authUser, loading: authLoading } = useUser();
  const [userProfile, setUserProfile] = React.useState<any>(null);
  const [isProfileLoading, setIsProfileLoading] = React.useState(true);
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    async function loadUser() {
      if (authUser) {
        try {
          const profile = await getUserSettings(authUser.uid);
          setUserProfile(profile);
        } catch (error) {
          console.error('Failed to load user profile on upgrade page', error);
          setUserProfile(null);
        }
      }
      setIsProfileLoading(false);
    }
    if (!authLoading) {
      loadUser();
    }
  }, [authUser, authLoading]);

  const handleUpgrade = async () => {
    if (!authUser) {
      toast({
        variant: 'destructive',
        title: "You're not logged in",
        description: 'Please log in to upgrade your account.',
      });
      return router.push('/auth');
    }
    setIsSubmitting(true);
    try {
      await updateUserSettings(authUser.uid, { isPro: true });
      setUserProfile((prev: any) => ({ ...prev, isPro: true }));
      toast({
        title: 'Upgrade Successful!',
        description: 'Welcome to LinguaLeap Pro! All features are now unlocked.',
      });
    } catch (error) {
      console.error('Upgrade failed:', error);
      toast({
        variant: 'destructive',
        title: 'Upgrade Failed',
        description: "We couldn't process your upgrade. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDowngrade = async () => {
    if (!authUser) return;
    setIsSubmitting(true);
    try {
      await updateUserSettings(authUser.uid, { isPro: false });
      setUserProfile((prev: any) => ({ ...prev, isPro: false }));
      toast({
        title: 'Plan Changed',
        description: 'You have been switched to the Free plan.',
      });
    } catch (error) {
      console.error('Downgrade failed:', error);
      toast({
        variant: 'destructive',
        title: 'Downgrade Failed',
        description: 'Could not switch plans. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (authLoading || isProfileLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    );
  }

  const isPro = userProfile?.isPro || false;

  const freeFeatures = [
      { icon: Users, text: 'Peer-to-Peer Study Circles' },
      { icon: FileQuestion, text: 'On-Demand Quiz Generator' },
      { icon: Camera, text: 'AR Immersion Tool' },
      { icon: Bot, text: 'AI Personal Tutor (Limited)' },
      { icon: Megaphone, text: 'Peer-Teaching Missions' },
      { icon: Radio, text: 'Limited Live Classes' },
  ];

  const proFeatures = [
      { icon: Sparkles, text: 'All Features from Free Plan' },
      { icon: Check, text: 'Ad-Free Experience' },
      { icon: ShieldCheck, text: 'Mentor-led & Specialized Circles' },
      { icon: Bot, text: 'Unlimited AI Personal Tutor' },
      { icon: Megaphone, text: 'AI-Powered Mission Feedback' },
      { icon: Radio, text: 'Access to All Live Classes' },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold font-headline">Choose Your Plan</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Unlock your full potential with LinguaLeap Pro or get started for
          free.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl w-full">
        {/* Free Plan Card */}
        <Card className={cn('flex flex-col border-2', !isPro && 'border-primary')}>
          <CardHeader className="text-left">
            <CardTitle className="text-2xl font-headline">Free</CardTitle>
            <CardDescription>
              Access essential features to kickstart your learning, supported by ads.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="my-4">
              <span className="text-5xl font-bold">₹0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 text-sm">
                {freeFeatures.map(feat => (
                     <li key={feat.text} className="flex items-center gap-3">
                        <feat.icon className="h-5 w-5 text-green-500" />
                        <span>{feat.text}</span>
                    </li>
                ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              size="lg"
              variant="outline"
              disabled={isSubmitting || !isPro}
              onClick={handleDowngrade}
            >
              {isSubmitting && isPro ? (
                <Loader2 className="mr-2 animate-spin" />
              ) : null}
              {isPro ? 'Downgrade to Free' : 'Your Current Plan'}
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan Card */}
        <Card className="flex flex-col border-2 border-primary ring-4 ring-primary/20 relative">
          <div className="absolute top-0 right-4 -translate-y-1/2">
            <Badge variant="warning" className="text-base py-1 px-3">
              <Star className="mr-2" />
              Most Popular
            </Badge>
          </div>
          <CardHeader className="text-left">
            <CardTitle className="text-2xl font-headline">Pro</CardTitle>
            <CardDescription>
              Unlock all features and get an ad-free experience.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="my-4">
              <span className="text-5xl font-bold">₹99</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="space-y-4 text-sm">
                 {proFeatures.map(feat => (
                     <li key={feat.text} className="flex items-center gap-3 font-medium">
                        <feat.icon className="h-5 w-5 text-primary" />
                        <span>{feat.text}</span>
                    </li>
                ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full"
              size="lg"
              disabled={isSubmitting || isPro}
              onClick={handleUpgrade}
            >
              {isSubmitting && !isPro ? (
                <Loader2 className="mr-2 animate-spin" />
              ) : null}
              {isPro ? "You're a Pro!" : 'Upgrade to Pro'}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
