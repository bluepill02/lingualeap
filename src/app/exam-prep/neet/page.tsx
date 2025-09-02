
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Atom, Dna } from 'lucide-react';
import Link from 'next/link';

const neetSubjects = [
  {
    title: 'Physics',
    description: 'Master the fundamental principles of the physical world, from classical mechanics to modern physics.',
    href: '/exam-prep/neet/physics',
    icon: Atom,
  },
  {
    title: 'Chemistry',
    description: 'Explore chemical reactions, structures, and properties with comprehensive study modules.',
    href: '/exam-prep/neet/chemistry',
    icon: Book,
  },
  {
    title: 'Biology',
    description: 'Dive deep into the study of life, from cellular functions to complex ecosystems.',
    href: '/exam-prep/neet/biology',
    icon: Dna,
  },
];

export default function NeetLandingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">NEET Preparation Hub</h1>
        <p className="text-muted-foreground">
          Select a subject to view all the available chapters and start your preparation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {neetSubjects.map((subject) => (
          <Card key={subject.title} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <subject.icon className="text-primary h-6 w-6" />
                {subject.title}
              </CardTitle>
              <CardDescription>{subject.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <div className="p-6 pt-0">
              <Link href={subject.href}>
                <Button className="w-full">
                  View Chapters <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
