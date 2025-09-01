
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const examModules = [
  {
    title: 'SSC CGL: Rajbhasha Synonyms & Antonyms',
    description: 'Master essential Hindi vocabulary for the Staff Selection Commission Combined Graduate Level exam.',
    href: '/exam-prep/ssc-cgl'
  },
  {
    title: 'UPSC Prelims: Hindi Comprehension & Vocabulary',
    description: 'Build a strong foundation in Hindi vocabulary and idioms for the UPSC Civil Services Preliminary Exam.',
    href: '/exam-prep/upsc'
  },
  {
    title: 'State PSC: Hindi Proverbs & Sayings',
    description: 'Understand and learn to use common Hindi proverbs for various state-level public service commission exams.',
    href: '/exam-prep/psc'
  }
];

export default function ExamPrepLandingPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Exam Preparation Modules</h1>
        <p className="text-muted-foreground">
          Select a module to start preparing for your competitive exams.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {examModules.map((module) => (
          <Card key={module.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{module.title}</CardTitle>
              <CardDescription>{module.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <div className="p-6 pt-0">
              <Link href={module.href}>
                <Button className="w-full">
                  Start Module <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
