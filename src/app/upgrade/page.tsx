import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Start your language journey for free.",
    features: [
      "Access to first 3 lessons",
      "Basic flashcard review",
      "Community access",
    ],
    cta: "Your Current Plan",
    isCurrent: true,
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "Unlock all features and learn faster.",
    features: [
      "Unlimited access to all lessons",
      "AI-powered Smart Scheduler",
      "Advanced audio comparison",
      "Detailed progress tracking",
      "No ads",
    ],
    cta: "Upgrade to Pro",
    isCurrent: false,
    isFeatured: true,
  },
];

export default function UpgradePage() {
  return (
    <div className="flex flex-col items-center">
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
              <Button className="w-full" size="lg" disabled={plan.isCurrent}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
