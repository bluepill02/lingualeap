'use client';
import { Book, Headphones, Globe, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LinguaLeapLogo } from '@/components/icons';

const features = [
  {
    icon: Book,
    name: 'Smart Cards',
  },
  {
    icon: Headphones,
    name: 'Audio Learning',
  },
  {
    icon: Globe,
    name: 'Real Situations',
  },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center text-foreground">
      <div className="flex max-w-md flex-col items-center">
        <div className="relative mb-4">
          <Globe className="h-16 w-16 text-white" />
          <Headphones className="absolute bottom-0 right-0 h-6 w-6 text-blue-400" />
        </div>
        <h1 className="text-5xl font-bold text-white">Bite-Size Lingo</h1>
        <p className="mb-6 text-lg text-blue-300">Tutor</p>
        <p className="mb-10 text-lg text-gray-300">
          Master languages in just 2-3 minutes daily with AI-powered
          flashcards, audio lessons, and smart spaced repetition.
        </p>

        <div className="mb-12 flex justify-center gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <feature.icon className="h-8 w-8 text-blue-300" />
              <span className="text-white">{feature.name}</span>
            </div>
          ))}
        </div>

        <Link href="/dashboard" className="w-full">
          <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <p className="mt-4 text-sm text-gray-400">
          Free trial • Premium ₹99/month
        </p>
      </div>
    </div>
  );
}
