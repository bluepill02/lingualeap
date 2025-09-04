
'use client';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LinguaLeapLogo } from '@/components/icons';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <LinguaLeapLogo className="size-8 text-primary" />
          <h1 className="text-xl font-bold font-headline text-foreground">
            LinguaLeap
          </h1>
        </div>
        <nav className="flex items-center gap-4">
          <Link href="/auth">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link href="/dashboard">
            <Button>
              Get Started Free
            </Button>
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="relative flex items-center justify-center h-[calc(100vh-80px)] text-center">
            <div className="absolute inset-0 z-0">
                <Image 
                    src="https://picsum.photos/1200/800"
                    alt="Abstract background"
                    data-ai-hint="professional learning"
                    fill
                    className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto flex flex-col items-center px-4">
                <h1 className="text-5xl font-extrabold tracking-tight font-headline lg:text-7xl">
                    Master Indian Languages with Confidence
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                    Our platform combines proven learning science with AI-powered tools to create a professional and effective path to fluency.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                    <Link href="/dashboard">
                        <Button size="lg" className="w-full sm:w-auto">
                            Start Your Journey <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        Explore Courses
                    </Button>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
