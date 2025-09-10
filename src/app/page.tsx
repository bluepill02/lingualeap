
'use client';
import { ArrowRight, Bot, GraduationCap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LinguaLeapLogo } from '@/components/icons';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Bot,
    title: "AI-Powered Learning",
    description: "Utilize our AI Tutor for personalized guidance and the AR Immersion feature to learn from the world around you."
  },
  {
    icon: GraduationCap,
    title: "Gamified Lessons",
    description: "Stay motivated with points, streaks, and levels. Master new languages and exam topics through engaging, bite-sized lessons."
  },
  {
    icon: Users,
    title: "Companion Circles",
    description: "Join peer study groups or mentor-led circles to collaborate, discuss topics, and learn together."
  }
];

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
          <Link href="/auth" aria-label="Log In">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link href="/auth" aria-label="Get Started Free">
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
                    src="https://picsum.photos/seed/language-learning/1200/800"
                    alt="An abstract, vibrant image representing a diverse and collaborative learning environment for language and exams."
                    data-ai-hint="collaborative learning"
                    fill
                    sizes="100vw"
                    className="object-cover opacity-5"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto flex flex-col items-center px-4">
                <h1 className="text-5xl font-extrabold tracking-tight font-headline lg:text-7xl">
                    Your Personal Learning Universe
                </h1>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                    Master new languages, ace competitive exams, and connect with peers in collaborative study circles. Your complete learning journey starts here.
                </p>
                <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
                    <Link href="/auth">
                        <Button size="lg" className="w-full sm:w-auto">
                            Start Your Journey <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                    <Link href="/dashboard">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto">
                            Explore Features
                        </Button>
                    </Link>
                </div>
            </div>
        </section>

        <section className="container mx-auto px-4 py-16 sm:py-24">
           <div className="text-center">
             <h2 className="text-3xl font-bold font-headline">A Smarter Way to Learn</h2>
             <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                LinguaLeap combines cutting-edge AI with proven learning techniques to create a personalized and effective educational experience.
             </p>
           </div>
           <div className="mt-12 grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardHeader className="items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-2">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-muted-foreground">
                  {feature.description}
                </CardContent>
              </Card>
            ))}
           </div>
        </section>
      </main>
    </div>
  );
}
