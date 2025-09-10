
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Briefcase, Globe, Users, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { allLessonDecks } from '@/lib/data';

const LanguageIcon = ({ letter }: { letter: string }) => (
  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary font-bold text-lg">
    {letter}
  </div>
);

const languages = [
    {
        icon: () => <LanguageIcon letter="অ" />,
        title: 'Assamese',
        id: 'assamese',
        description: 'Discover the official language of Assam',
        href: '/language/assamese',
    },
    {
        icon: () => <LanguageIcon letter="ব" />,
        title: 'Bengali',
        id: 'bengali',
        description: 'Learn the sweet language of Bengal',
        href: '/language/bengali',
    },
    {
        icon: () => <LanguageIcon letter="ब" />,
        title: 'Bodo',
        id: 'bodo',
        description: 'Explore the Tibeto-Burman language from Northeast India',
        href: '/language/bodo',
    },
    {
        icon: () => <LanguageIcon letter="ह" />,
        title: 'Business Hindi',
        id: 'bh',
        description: 'Professional Hindi for workplace communication',
        href: '/language/business-hindi',
    },
    {
        icon: () => <LanguageIcon letter="ड" />,
        title: 'Dogri',
        id: 'dogri',
        description: 'Learn the Indo-Aryan language spoken in Jammu and Kashmir',
        href: '/language/dogri',
    },
    {
        icon: () => <LanguageIcon letter="ગ" />,
        title: 'Gujarati',
        id: 'gujarati',
        description: 'Learn the language of the vibrant state of Gujarat',
        href: '/language/gujarati',
    },
    {
        icon: () => <LanguageIcon letter="ह" />,
        title: 'Hindi',
        id: 'hindi',
        description: 'The most widely spoken language in India',
        href: '/language/hindi',
    },
    {
        icon: () => <LanguageIcon letter="ಕ" />,
        title: 'Kannada',
        id: 'kannada',
        description: 'Delve into a Dravidian language of Karnataka',
        href: '/language/kannada',
    },
    {
        icon: () => <LanguageIcon letter="ک" />,
        title: 'Kashmiri',
        id: 'kashmiri',
        description: 'Experience the Dardic language of the Kashmir Valley',
        href: '/language/kashmiri',
    },
    {
        icon: () => <LanguageIcon letter="क" />,
        title: 'Konkani',
        id: 'konkani',
        description: 'Learn the language of the Goan coast',
        href: '/language/konkani',
    },
    {
        icon: () => <LanguageIcon letter="म" />,
        title: 'Maithili',
        id: 'maithili',
        description: 'Discover the Indo-Aryan language of Bihar and Jharkhand',
        href: '/language/maithili',
    },
    {
        icon: () => <LanguageIcon letter="മ" />,
        title: 'Malayalam',
        id: 'malayalam',
        description: 'Explore the Dravidian language of Kerala',
        href: '/language/malayalam',
    },
    {
        icon: () => <LanguageIcon letter="ম" />,
        title: 'Manipuri (Meitei)',
        id: 'manipuri',
        description: 'Learn the primary language of Manipur',
        href: '/language/manipuri',
    },
    {
        icon: () => <LanguageIcon letter="म" />,
        title: 'Marathi',
        id: 'marathi',
        description: 'Start your journey into the language of Maharashtra',
        href: '/language/marathi',
    },
    {
        icon: () => <LanguageIcon letter="न" />,
        title: 'Nepali',
        id: 'nepali',
        description: 'The lingua franca of Nepal, also spoken in parts of India',
        href: '/language/nepali',
    },
    {
        icon: () => <LanguageIcon letter="ଓ" />,
        title: 'Odia',
        id: 'odia',
        description: 'Learn the official language of Odisha',
        href: '/language/odia',
    },
    {
        icon: () => <LanguageIcon letter="ਪ" />,
        title: 'Punjabi',
        id: 'punjabi',
        description: 'The language of the Punjab region',
        href: '/language/punjabi',
    },
    {
        icon: () => <LanguageIcon letter="स" />,
        title: 'Sanskrit',
        id: 'sanskrit',
        description: 'Explore the classical language of ancient India',
        href: '/language/sanskrit',
    },
    {
        icon: () => <LanguageIcon letter="ᱥ" />,
        title: 'Santali',
        id: 'santali',
        description: 'A Munda language spoken by the Santal people',
        href: '/language/santali',
    },
    {
        icon: () => <LanguageIcon letter="س" />,
        title: 'Sindhi',
        id: 'sindhi',
        description: 'The language of the Sindhi people',
        href: '/language/sindhi',
    },
    {
        icon: () => <LanguageIcon letter="த" />,
        title: 'Tamil',
        id: 'tamil',
        description: "Explore one of the world's oldest languages",
        href: '/language/tamil',
    },
    {
        icon: () => <LanguageIcon letter="త" />,
        title: 'Telugu',
        id: 'telugu',
        description: 'Discover the "Italian of the East"',
        href: '/language/telugu',
    },
    {
        icon: () => <LanguageIcon letter="ا" />,
        title: 'Urdu',
        id: 'urdu',
        description: 'Learn the poetic language with Perso-Arabic script',
        href: '/language/urdu',
    },
];

export default function LanguageSelectionPage() {

  const languageDecks = languages.map(lang => {
    const deckCount = allLessonDecks.filter(deck => deck.id.startsWith(`deck-${lang.id}-`)).length;
    return { ...lang, lessons: deckCount };
  });

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 md:px-8">
      <Link href="/dashboard" className="flex items-center gap-2 text-primary mb-4" aria-label="Back to Dashboard">
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </Link>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold font-headline">Choose Your Language</h1>
        <p className="text-muted-foreground mt-2">
          Select a language to start learning with bite-sized lessons
        </p>
      </div>
      <div className="space-y-4 max-w-2xl mx-auto">
        {languageDecks.sort((a, b) => a.title.localeCompare(b.title)).map((lang, index) => (
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
              <Link href={lang.href} aria-label={`Start learning ${lang.title}`}>
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
