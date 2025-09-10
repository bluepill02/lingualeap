
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/context/user-context';
import { updateUserSettings } from '@/services/user';
import { useToast } from '@/hooks/use-toast';
import { Check, Loader2, Sparkles, Star, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const features = [
    'Unlimited Access to All Lessons',
    'Basic & Advanced Flashcard Review',
    'Peer-to-Peer & Mentor-led Circles',
    'AI Personal Tutor for Conversational Practice',
    'AR Immersion for Vocabulary',
    'On-Demand Quiz Generator',
    'Live Classes with Tutors',
    'AI-Powered Mission Feedback',
];

export default function UpgradePage() {
  const { user, loading } = useUser();
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleUpgrade = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "You're not logged in",
        description: "Please log in to upgrade your account.",
      });
      return router.push('/auth');
    }
    setIsLoading(true);
    try {
      await updateUserSettings(user.uid, { isPro: true });
      toast({
        title: "Upgrade Successful!",
        description: "Welcome to LinguaLeap Pro! All features are now unlocked.",
      });
      // The user context will automatically update, re-rendering the page
    } catch (error) {
      console.error("Upgrade failed:", error);
      toast({
        variant: "destructive",
        title: "Upgrade Failed",
        description: "We couldn't process your upgrade. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="w-12 h-12 animate-spin text-primary" />
      </div>
    )
  }

  const isPro = user?.isPro || false;

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold font-headline">Choose Your Plan</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Unlock your full potential with LinguaLeap Pro for an ad-free experience, or enjoy all our features for free with ads.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
        {/* Free Plan Card */}
        <Card className="flex flex-col border-2">
            <CardHeader className="text-left">
              <CardTitle className="text-2xl font-headline">Free</CardTitle>
              <CardDescription>Access all features, supported by ads.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="my-4">
                    <span className="text-5xl font-bold">₹0</span>
                    <span className="text-muted-foreground">/forever</span>
                </div>
                <ul className="space-y-4">
                    {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                       <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                    </li>
                    ))}
                    <li className="flex items-center gap-3 text-muted-foreground">
                        <X className="h-5 w-5"/>
                        <span>Ad-Free Experience</span>
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" variant="outline" disabled={!isPro} onClick={() => {
                if (user) {
                  updateUserSettings(user.uid, { isPro: false });
                  toast({ title: 'Plan Changed', description: 'You have been switched to the Free plan.' });
                }
              }}>
                {isPro ? 'Downgrade to Free' : 'Your Current Plan'}
              </Button>
            </CardFooter>
        </Card>

         {/* Pro Plan Card */}
        <Card className="flex flex-col border-2 border-primary ring-4 ring-primary/20 relative">
            <div className="absolute top-0 right-4 -translate-y-1/2">
                <Badge variant="warning" className="text-base py-1 px-3"><Star className="mr-2"/>Most Popular</Badge>
            </div>
            <CardHeader className="text-left">
              <CardTitle className="text-2xl font-headline">Pro</CardTitle>
              <CardDescription>Support the app and enjoy an ad-free experience.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="my-4">
                    <span className="text-5xl font-bold">₹99</span>
                    <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4">
                    {features.map((feature, i) => (
                     <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                    </li>
                    ))}
                     <li className="flex items-center gap-3 font-bold text-primary">
                        <Sparkles className="h-5 w-5"/>
                        <span>Ad-Free Experience</span>
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" disabled={isPro || isLoading} onClick={handleUpgrade}>
                {isLoading ? <Loader2 className="mr-2 animate-spin" /> : null}
                {isPro ? "You're a Pro!" : 'Upgrade to Pro'}
              </Button>
            </CardFooter>
        </Card>
      </div>
    </div>
  );
}
