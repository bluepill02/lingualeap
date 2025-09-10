
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Link as LinkIcon, AlertTriangle, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import type { ExamModule } from '@/lib/types';
import { getCommunityModules } from '@/services/missions';


const officialModules = [
  {
    title: 'On-Demand Quiz Generator',
    description: 'Generate a custom quiz on any topic instantly using AI. Perfect for hyper-personalized learning.',
    href: '/exam-prep/on-demand',
    isNew: true,
  },
  {
    title: 'NEET Preparation',
    description: 'Complete study materials for Physics, Chemistry, and Biology tailored for Tamil Nadu students.',
    href: '/exam-prep/neet',
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

export default function ExamPrepClientPage() {
    const [communityModules, setCommunityModules] = useState<ExamModule[]>([]);
    const [isCommunityLoading, setIsCommunityLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        async function loadCommunityModules() {
            try {
                setIsCommunityLoading(true);
                const modules = await getCommunityModules();
                setCommunityModules(modules);
            } catch (error) {
                console.error("Could not load community modules:", error);
                toast({
                    variant: 'destructive',
                    title: 'Error',
                    description: 'Failed to load community-created modules.'
                })
            } finally {
                setIsCommunityLoading(false);
            }
        }
        loadCommunityModules();
    }, [toast]);


  return (
    <div className="container mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Exam Preparation Modules</h1>
        <p className="text-muted-foreground">
          Select a module to start preparing for your competitive exams. Explore resources for <Link href="/exam-prep/neet" className="text-primary hover:underline">NEET</Link>, <Link href="/exam-prep/tnpsc" className="text-primary hover:underline">TNPSC</Link>, <Link href="/exam-prep/upsc" className="text-primary hover:underline">UPSC</Link>, and more.
        </p>
      </div>

       <div className="space-y-4">
        <h2 className="text-2xl font-bold font-headline">Official Modules</h2>
         <div className="responsive-card-grid">
            {officialModules.sort((a,b) => {
                if (a.isNew && !b.isNew) return -1;
                if (!a.isNew && b.isNew) return 1;
                return a.title.localeCompare(b.title);
            }).map((module) => (
            <Card key={module.title} className={`flex flex-col ${module.isNew ? 'border-primary ring-2 ring-primary' : ''}`}>
                <CardHeader className="card-padding-lg">
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
      
      <div className="space-y-4">
        <h2 className="text-2xl font-bold font-headline">Community Modules</h2>
        
        {isCommunityLoading ? (
            <div className="flex items-center justify-center h-24">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <p className="ml-2 text-muted-foreground">Loading community modules...</p>
            </div>
        ) : communityModules.length === 0 ? (
            <Card>
                <CardContent className="p-6 text-center text-muted-foreground">
                    <p>No community modules have been published yet.</p>
                    <p className="text-sm">Be the first to create one via the <Link href="/peer-teaching" className="text-primary hover:underline">Peer-Teaching Mission</Link> page!</p>
                </CardContent>
            </Card>
        ) : (
            <div className="responsive-card-grid">
                {communityModules.map((module) => (
                    <Card key={module.id} className="flex flex-col border-dashed border-amber-500/50">
                        <CardHeader className="card-padding-lg">
                             <div className="flex items-start justify-between">
                                <CardTitle>{module.title}</CardTitle>
                                <div className="flex items-center gap-1 text-amber-500" title="Community Module">
                                    <AlertTriangle className="h-4 w-4" />
                                    <span className="text-xs font-bold">USER</span>
                                </div>
                            </div>
                           <CardDescription>{module.category} for {module.examName}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <p className="text-xs text-muted-foreground p-2 bg-muted rounded-md">
                                <strong>Warning:</strong> This is a community-provided module. Content has not been officially verified and this feature is for demonstration only.
                            </p>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Link href={`/exam-prep/community/${module.id}`}>
                                <Button className="w-full" variant="secondary">
                                    View Module
                                </Button>
                            </Link>
                        </div>
                    </Card>
                ))}
            </div>
        )}
      </div>

    </div>
  );
}
