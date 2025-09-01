
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Briefcase, Globe, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';

const LanguageIcon = ({ letter }: { letter: string }) => (
  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-lg">
    {letter}
  </div>
);

const languages = [
    {
        icon: () => <LanguageIcon letter="অ" />,
        title: 'Assamese',
        description: 'Discover the official language of Assam',
        lessons: 1,
        href: '/language/assamese',
    },
    {
        icon: () => <LanguageIcon letter="ব" />,
        title: 'Bengali',
        description: 'Learn the sweet language of Bengal',
        lessons: 1,
        href: '/language/bengali',
    },
    {
        icon: () => <LanguageIcon letter="ब" />,
        title: 'Bodo',
        description: 'Explore the Tibeto-Burman language from Northeast India',
        lessons: 1,
        href: '/language/bodo',
    },
    {
        icon: () => <LanguageIcon letter="ड" />,
        title: 'Dogri',
        description: 'Learn the Indo-Aryan language spoken in Jammu and Kashmir',
        lessons: 1,
        href: '/language/dogri',
    },
    {
        icon: () => <LanguageIcon letter="ગ" />,
        title: 'Gujarati',
        description: 'Learn the language of the vibrant state of Gujarat',
        lessons: 1,
        href: '/language/gujarati',
    },
    {
        icon: () => <LanguageIcon letter="ह" />,
        title: 'Hindi',
        description: 'The most widely spoken language in India',
        lessons: 1,
        href: '/language/hindi',
    },
    {
        icon: () => <LanguageIcon letter="ह" />,
        title: 'Business Hindi',
        description: 'Professional Hindi for workplace communication',
        lessons: 3,
        href: '/language/business-hindi',
    },
    {
        icon: () => <LanguageIcon letter="ಕ" />,
        title: 'Kannada',
        description: 'Delve into a Dravidian language of Karnataka',
        lessons: 1,
        href: '/language/kannada',
    },
    {
        icon: () => <LanguageIcon letter="ک" />,
        title: 'Kashmiri',
        description: 'Experience the Dardic language of the Kashmir Valley',
        lessons: 1,
        href: '/language/kashmiri',
    },
    {
        icon: () => <LanguageIcon letter="क" />,
        title: 'Konkani',
        description: 'Learn the language of the Goan coast',
        lessons: 1,
        href: '/language/konkani',
    },
    {
        icon: () => <LanguageIcon letter="म" />,
        title: 'Maithili',
        description: 'Discover the Indo-Aryan language of Bihar and Jharkhand',
        lessons: 1,
        href: '/language/maithili',
    },
    {
        icon: () => <LanguageIcon letter="മ" />,
        title: 'Malayalam',
        description: 'Explore the Dravidian language of Kerala',
        lessons: 1,
        href: '/language/malayalam',
    },
    {
        icon: () => <LanguageIcon letter="ম" />,
        title: 'Manipuri (Meitei)',
        description: 'Learn the primary language of Manipur',
        lessons: 1,
        href: '/language/manipuri',
    },
    {
        icon: () => <LanguageIcon letter="म" />,
        title: 'Marathi',
        description: 'Start your journey into the language of Maharashtra',
        lessons: 1,
        href: '/language/marathi',
    },
    {
        icon: () => <LanguageIcon letter="न" />,
        title: 'Nepali',
        description: 'The lingua franca of Nepal, also spoken in parts of India',
        lessons: 1,
        href: '/language/nepali',
    },
    {
        icon: () => <LanguageIcon letter="ଓ" />,
        title: 'Odia',
        description: 'Learn the official language of Odisha',
        lessons: 1,
        href: '/language/odia',
    },
    {
        icon: () => <LanguageIcon letter="ਪ" />,
        title: 'Punjabi',
        description: 'The language of the Punjab region',
        lessons: 1,
        href: '/language/punjabi',
    },
    {
        icon: () => <LanguageIcon letter="स" />,
        title: 'Sanskrit',
        description: 'Explore the classical language of ancient India',
        lessons: 1,
        href: '/language/sanskrit',
    },
    {
        icon: () => <LanguageIcon letter="ᱥ" />,
        title: 'Santali',
        description: 'A Munda language spoken by the Santal people',
        lessons: 1,
        href: '/language/santali',
    },
    {
        icon: () => <LanguageIcon letter="س" />,
        title: 'Sindhi',
        description: 'The language of the Sindhi people',
        lessons: 1,
        href: '/language/sindhi',
    },
    {
        icon: () => <LanguageIcon letter="த" />,
        title: 'Tamil',
        description: "Explore one of the world's oldest languages",
        lessons: 1,
        href: '/language/tamil',
    },
    {
        icon: () => <LanguageIcon letter="త" />,
        title: 'Telugu',
        description: 'Discover the "Italian of the East"',
        lessons: 1,
        href: '/language/telugu',
    },
    {
        icon: () => <LanguageIcon letter="ا" />,
        title: 'Urdu',
        description: 'Learn the poetic language with Perso-Arabic script',
        lessons: 1,
        href: '/language/urdu',
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
        {languages.sort((a, b) => a.title.localeCompare(b.title)).map((lang, index) => (
          <Card key={index} className="bg-card/50">
            <CardContent className="p-6 flex items-center gap-6">
              <lang.icon />
              <div className="flex-grow">
                <h2 className="font-bold text-lg">{lang.title}</h2>
                <p className="text-muted-foreground text-sm">{lang.description}</p>
                <p className="text-muted-foreground text-xs mt-2">
                  {lang.lessons > 0 ? `${lang.lessons} lesson deck${lang.lessons > 1 ? 's' : ''} available` : 'Coming Soon'}
                </p>
              </div>
              <Link href={lang.href}>
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
