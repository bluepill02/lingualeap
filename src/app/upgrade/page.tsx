
'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useUser } from '@/context/user-context';
import { updateUserSettings } from '@/services/user';
import { useToast } from '@/hooks/use-toast';
import { Check, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UpgradePage() {
  const { user } = useUser();
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
      return;
    }
    setIsLoading(true);
    try {
      await updateUserSettings(user.uid, { isPro: true });
      toast({
        title: "Upgrade Successful!",
        description: "Welcome to LinguaLeap Pro! All features are now unlocked.",
      });
      // Optionally, refresh the page or user context to reflect the change
      router.refresh(); 
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

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Start your language journey for free.",
    features: [
      "Access to first 3 lesson decks",
      "Basic flashcard review",
      "Community access",
    ],
    cta: "Your Current Plan",
    isCurrent: !user?.isPro,
    action: () => {},
    disabled: true,
  },
  {
    name: "Pro",
    price: "₹850",
    description: "Unlock all features and learn faster.",
    features: [
      "Unlimited access to all lessons",
      "AI-powered Smart Scheduler (Coming Soon)",
      "Advanced audio comparison (Coming Soon)",
      "Detailed progress tracking (Coming Soon)",
      "No ads",
    ],
    cta: "Upgrade to Pro",
    isCurrent: user?.isPro,
    action: handleUpgrade,
    disabled: isLoading || user?.isPro,
    isFeatured: true,
  },
];


  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold font-headline">Choose Your Plan</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Unlock your full potential with LinguaLeap Pro. Get unlimited access to all features and accelerate your learning.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:max-w-4xl">
        {plans.map((plan) => (
          <Card key={plan.name} className={`flex flex-col ${plan.isFeatured ? 'border-primary ring-2 ring-primary' : ''}`}>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <div className="text-center my-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-4">
                    {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                    </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg" disabled={plan.disabled} onClick={plan.action}>
                 {isLoading && !plan.isCurrent ? <Loader2 className="mr-2 animate-spin" /> : null}
                {plan.isCurrent ? "Your Current Plan" : plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
