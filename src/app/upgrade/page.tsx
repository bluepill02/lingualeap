
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Crown, Sparkles, Users, Bot, Briefcase, FileQuestion, Loader2 } from 'lucide-react';
import { useUser } from '@/context/user-context';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Script from 'next/script';

const proFeatures = [
    { icon: Bot, text: "Unlimited AI Personal Tutor conversations" },
    { icon: Briefcase, text: "AI Mock Interview Simulator with detailed feedback" },
    { icon: FileQuestion, text: "On-Demand AI Practice Generator for custom quizzes" },
    { icon: Users, text: "Create and lead your own Companion Circles" },
    { icon: Sparkles, text: "Access to all new premium features" },
];

declare global {
    interface Window {
        Razorpay: any;
    }
}

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
            const response = await fetch('/api/create-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: 9900 }), // Amount in paise (99 INR)
            });

            if (!response.ok) {
                const errorBody = await response.json();
                throw new Error(errorBody.error?.message || 'Failed to create Razorpay order.');
            }

            const order = await response.json();

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: order.amount,
                currency: order.currency,
                name: 'LinguaLeap Pro',
                description: 'Unlock all premium AI features.',
                image: '/logo.png', // Add a logo to your public folder
                order_id: order.id,
                handler: async function (response: any) {
                    try {
                        const verificationResponse = await fetch('/api/verify-payment', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                userId: user.id
                            }),
                        });
                        
                        const result = await verificationResponse.json();
                        
                        if(result.success) {
                            toast({ title: 'Payment Successful!', description: "You're now a Pro member. Welcome!" });
                            router.push('/dashboard');
                        } else {
                             toast({ variant: 'destructive', title: 'Payment Verification Failed', description: result.error || 'Please contact support.' });
                        }
                    } catch (error) {
                        toast({ variant: 'destructive', title: 'Verification Error', description: 'Could not verify your payment. Please contact support.' });
                    }
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                },
                theme: {
                    color: '#6A1B9A' // Your primary color
                }
            };
            
            const rzp = new window.Razorpay(options);
            rzp.open();

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
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
                strategy="lazyOnload"
            />
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
        </>
    );
}
