
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Crown, Sparkles, Users, Bot, Briefcase, FileQuestion, Loader2 } from 'lucide-react';
import { useUser } from '@/context/user-context';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';

const proFeatures = [
    { icon: Bot, text: "Unlimited AI Personal Tutor conversations" },
    { icon: Briefcase, text: "AI Mock Interview Simulator with detailed feedback" },
    { icon: FileQuestion, text: "On-Demand AI Practice Generator for custom quizzes" },
    { icon: Users, text: "Create and lead your own Companion Circles" },
    { icon: Sparkles, text: "Access to all new premium features" },
];

export default function UpgradePage() {
    const { user, isLoading: isUserLoading } = useUser();
    const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
    const router = useRouter();
    const { toast } = useToast();

    const handleUpgrade = async () => {
        if (!user) {
            toast({ variant: 'destructive', title: 'Not Logged In', description: 'You must be logged in to upgrade.' });
            return router.push('/auth');
        }

        setIsCheckoutLoading(true);
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId: user.id }),
            });

            if (!response.ok) {
                const errorBody = await response.json();
                throw new Error(errorBody.error?.message || 'Failed to create checkout session.');
            }

            const { sessionId } = await response.json();
            
            // The stripe library and session redirection will be handled by the browser.
            // In a real scenario, you'd use the Stripe.js library to redirect.
            // For this simulation, we'll assume the redirection happens and log it.
            console.log(`Redirecting to Stripe Checkout with session ID: ${sessionId}`);
            toast({ title: 'Redirecting to Payment', description: 'Please complete your payment to upgrade to Pro.'});
            
            // This is a placeholder for the actual redirection
            // window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
            
        } catch (error: any) {
            console.error(error);
            toast({
                variant: 'destructive',
                title: 'Upgrade Failed',
                description: error.message,
            });
        } finally {
            setIsCheckoutLoading(false);
        }
    };

    return (
        <div className="container mx-auto max-w-2xl py-8">
            <Card className="border-2 border-primary shadow-lg">
                <CardHeader className="text-center p-8 bg-primary/5">
                    <Crown className="w-12 h-12 mx-auto text-primary animate-pulse" />
                    <CardTitle className="text-3xl font-bold font-headline mt-4">Go Pro with LinguaLeap</CardTitle>
                    <CardDescription className="text-lg">
                        Unlock your full learning potential with our most powerful AI features.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                    <div className="space-y-4">
                        {proFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="bg-green-500/20 text-green-700 dark:text-green-400 rounded-full p-1.5">
                                    <Check className="w-4 h-4" />
                                </div>
                                <span className="flex-1 text-muted-foreground">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex-col p-8 bg-muted/50 border-t">
                    <div className="text-center mb-4">
                        <p className="text-4xl font-bold font-headline">₹99 <span className="text-base font-normal text-muted-foreground">/ month</span></p>
                    </div>
                    <Button 
                        size="lg" 
                        className="w-full font-bold text-lg" 
                        onClick={handleUpgrade}
                        disabled={isUserLoading || isCheckoutLoading}
                    >
                        {isCheckoutLoading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                        Upgrade to Pro
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
