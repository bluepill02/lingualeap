
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const examModules = [
  {
    title: 'On-Demand Quiz Generator',
    description: 'Generate a custom quiz on any topic instantly using AI. Perfect for hyper-personalized learning.',
    href: '/exam-prep/on-demand',
    isNew: true,
  },
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
  },
  {
    title: 'BPSC: Modern History Terminology',
    description: 'Key historical terms and concepts in Hindi for the Bihar Public Service Commission exam.',
    href: '/exam-prep/bpsc'
  },
  {
    title: 'MPSC: Marathi Idioms & Phrases',
    description: 'Master important Marathi idioms (वाक्प्रचार) and proverbs (म्हणी) for the MPSC Rajyaseva exam.',
    href: '/exam-prep/mpsc'
  },
  {
    title: 'GPSC: Gujarati Proverbs & Sayings',
    description: 'Learn key proverbs (કહેવતો) for the Gujarat Public Service Commission exams.',
    href: '/exam-prep/gpsc'
  },
  {
    title: 'RPSC: Rajasthani Vocabulary & Idioms',
    description: 'Essential vocabulary and idioms for the Rajasthan Public Service Commission exams.',
    href: '/exam-prep/rpsc'
  },
  {
    title: 'UPPCS: Hindi Letter Writing & Vocabulary',
    description: 'Formal vocabulary and phrasing for the Uttar Pradesh Public Service Commission Main exam.',
    href: '/exam-prep/uppcs'
  },
  {
    title: 'TNPSC: General Tamil Vocabulary',
    description: 'Crucial vocabulary, idioms, and proverbs for the TNPSC Group 1-4 exams.',
    href: '/exam-prep/tnpsc'
  },
  {
    title: 'Tamil Nadu TET: Pedagogy & Grammar',
    description: 'Key concepts in teaching methodology and grammar for the Teacher Eligibility Test.',
    href: '/exam-prep/tet'
  },
  {
    title: 'WBPSC: Bengali One-Word Substitutions',
    description: 'Learn essential one-word substitutions for the West Bengal Public Service Commission exams.',
    href: '/exam-prep/wbpsc'
  },
  {
    title: 'WBCS: Bengali Synonyms & Antonyms',
    description: 'Master Bengali সমার্থক ও বিপরীতার্থক শব্দ for the West Bengal Civil Service exam.',
    href: '/exam-prep/wbcs'
  },
  {
    title: 'Banking Clerical: Gujarati Proverbs',
    description: 'Essential Gujarati proverbs and their usage for banking clerical exams.',
    href: '/exam-prep/banking-clerical'
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examModules.sort((a,b) => {
            if (a.isNew && !b.isNew) return -1;
            if (!a.isNew && b.isNew) return 1;
            return a.title.localeCompare(b.title);
        }).map((module) => (
          <Card key={module.title} className={`flex flex-col ${module.isNew ? 'border-primary ring-2 ring-primary' : ''}`}>
            <CardHeader>
              <CardTitle className='flex items-center gap-2'>
                {module.isNew && <Sparkles className="text-primary h-5 w-5" />}
                {module.title}
                </CardTitle>
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
