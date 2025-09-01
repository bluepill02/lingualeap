
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
    title: 'Assamese',
    description: 'Discover the official language of Assam',
    lessons: 0,
    href: '#',
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
    title: 'Bodo',
    description: 'Explore the Tibeto-Burman language from Northeast India',
    lessons: 0,
    href: '#',
  },
  {
    icon: BookOpen,
    title: 'Dogri',
    description: 'Learn the Indo-Aryan language spoken in Jammu and Kashmir',
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
  {
    icon: BookOpen,
    title: 'Kannada',
    description: 'Delve into a Dravidian language of Karnataka',
    lessons: 0,
    href: '#',
  },
  {
    icon: Globe,
    title: 'Kashmiri',
    description: 'Experience the Dardic language of the Kashmir Valley',
    lessons: 0,
    href: '#',
  },
  {
    icon: Users,
    title: 'Konkani',
    description: 'Learn the language of the Goan coast',
    lessons: 0,
    href: '#',
  },
  {
    icon: Globe,
    title: 'Maithili',
    description: 'Discover the Indo-Aryan language of Bihar and Jharkhand',
    lessons: 0,
    href: '#',
  },
  {
    icon: BookOpen,
    title: 'Malayalam',
    description: 'Explore the Dravidian language of Kerala',
    lessons: 0,
    href: '#',
  },
  {
    icon: Users,
    title: 'Manipuri (Meitei)',
    description: 'Learn the primary language of Manipur',
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
    icon: Globe,
    title: 'Nepali',
    description: 'The lingua franca of Nepal, also spoken in parts of India',
    lessons: 0,
    href: '#',
  },
  {
    icon: BookOpen,
    title: 'Odia',
    description: 'Learn the official language of Odisha',
    lessons: 0,
    href: '#',
  },
  {
    icon: Users,
    title: 'Punjabi',
    description: 'The language of the Punjab region',
    lessons: 0,
    href: '#',
  },
  {
    icon: BookOpen,
    title: 'Sanskrit',
    description: 'Explore the classical language of ancient India',
    lessons: 0,
    href: '#',
  },
  {
    icon: Globe,
    title: 'Santali',
    description: 'A Munda language spoken by the Santal people',
    lessons: 0,
    href: '#',
  },
  {
    icon: Users,
    title: 'Sindhi',
    description: 'The language of the Sindhi people',
    lessons: 0,
    href: '#',
  },
  {
    icon: BookOpen,
    title: 'Tamil',
    description: "Explore one of the world's oldest languages",
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
    icon: BookOpen,
    title: 'Urdu',
    description: 'Learn the poetic language with Perso-Arabic script',
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
              We are working on adding even more languages from around the world.
            </p>
            <p className="text-muted-foreground text-xs mt-2">Stay tuned for updates!</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
