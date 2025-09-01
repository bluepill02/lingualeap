
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Briefcase, Globe, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

const languages = [
  {
    icon: Briefcase,
    title: 'Business Hindi',
    description: 'Professional Hindi for workplace communication',
    lessons: 3,
    href: '/language/business-hindi',
  },
  {
    icon: Globe,
    title: 'Bengali',
    description: 'Learn the sweet language of Bengal',
    lessons: 0,
    href: '#',
  },
  {
    icon: Users,
    title: 'Marathi',
    description: 'Start your journey into the language of Maharashtra',
    lessons: 0,
    href: '#',
  },
  {
    icon: BookOpen,
    title: 'Tamil',
    description: 'Explore one of the world\'s oldest languages',
    lessons: 0,
    href: '#',
  },
  {
    icon: Globe,
    title: 'Telugu',
    description: 'Discover the "Italian of the East"',
    lessons: 0,
    href: '#',
  },
  {
    icon: Users,
    title: 'Gujarati',
    description: 'Learn the language of the vibrant state of Gujarat',
    lessons: 0,
    href: '#',
  },
];

export default function LanguageSelectionPage() {
  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Link href="/dashboard" className="flex items-center gap-2 text-primary mb-4">
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </Link>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold font-headline">Choose Your Language</h1>
        <p className="text-muted-foreground mt-2">
          Select a language to start learning with bite-sized lessons
        </p>
      </div>
      <div className="space-y-4">
        {languages.map((lang, index) => (
          <Card key={index} className="bg-card/50">
            <CardContent className="p-6 flex items-center gap-6">
              <lang.icon className="w-8 h-8 text-primary" />
              <div className="flex-grow">
                <h2 className="font-bold text-lg">{lang.title}</h2>
                <p className="text-muted-foreground text-sm">{lang.description}</p>
                <p className="text-muted-foreground text-xs mt-2">
                  {lang.lessons > 0 ? `${lang.lessons} lesson decks available` : 'Coming Soon'}
                </p>
              </div>
              <Link href={lang.href} passHref>
                <Button variant="outline" disabled={lang.lessons === 0}>Start Learning</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
        <Card className="bg-card/50 border-dashed">
          <CardContent className="p-6 text-center">
            <Globe className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <h2 className="font-bold text-lg">More Languages Coming Soon</h2>
            <p className="text-muted-foreground text-sm">
              We are working on adding more Indian languages, and other languages from around the world.
            </p>
            <p className="text-muted-foreground text-xs mt-2">Stay tuned for updates!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
