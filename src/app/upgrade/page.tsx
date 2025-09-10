
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/context/user-context';
import { updateUserSettings } from '@/services/user';
import { useToast } from '@/hooks/use-toast';
import { Check, Loader2, Sparkles, Star, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const freeFeatures = [
    { text: "Access to 'Foundations' lessons" },
    { text: 'Basic flashcard review' },
    { text: 'Peer-to-Peer study circles' },
    { text: 'Standard support', unavailable: true },
    { text: 'AI Personal Tutor', unavailable: true },
    { text: 'AR Immersion vocabulary', unavailable: true },
    { text: 'On-Demand quiz generator', unavailable: true },
];

const proFeatures = [
    { text: 'Unlimited access to ALL lessons' },
    { text: 'Advanced flashcard statistics' },
    { text: 'Mentor-led & specialized circles' },
    { text: 'Priority support' },
    { text: 'AI Personal Tutor' },
    { text: 'AR Immersion vocabulary' },
    { text: 'On-Demand quiz generator' },
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
          Unlock your full potential with LinguaLeap Pro. Get unlimited access to all features and accelerate your learning.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-5xl">
        {/* Free Plan Card */}
        <Card className="flex flex-col border-2">
            <CardHeader className="text-left">
              <CardTitle className="text-2xl font-headline">Free</CardTitle>
              <CardDescription>Start your language journey, completely free.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="my-4">
                    <span className="text-5xl font-bold">₹0</span>
                    <span className="text-muted-foreground">/forever</span>
                </div>
                <ul className="space-y-4">
                    {freeFeatures.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-3 ${feature.unavailable ? 'text-muted-foreground' : ''}`}>
                       {feature.unavailable ? <X className="h-5 w-5" /> : <Check className="h-5 w-5 text-primary" />}
                        <span>{feature.text}</span>
                    </li>
                    ))}
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
              <CardDescription>Unlock all features and learn faster with AI.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="my-4">
                    <span className="text-5xl font-bold">₹850</span>
                    <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4">
                    {proFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature.text}</span>
                    </li>
                    ))}
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
