
'use client';

import Link from 'next/link';
import { ArrowLeft, FlaskConical, GraduationCap, Link2, ShieldCheck, BookOpen, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { neetContent } from '@/lib/neet/content-loader';
import { Separator } from '@/components/ui/separator';

const chapterGroups = {
  foundation: [
      "Some Basic Concepts in Chemistry",
      "Classification of Elements and Periodicity in Properties",
      "Atomic Structure",
      "Chemical Bonding and Molecular Structure",
      "Purification and Characterisation of Organic Compounds",
      "Some Basic Principles of Organic Chemistry"
  ],
  bridge: [
      "Chemical Thermodynamics",
      "Solutions",
      "Equilibrium",
      "Redox Reactions and Electrochemistry",
      "Chemical Kinetics"
  ],
  core: [
      "p-Block Elements",
      "d- and f-Block Elements",
      "Coordination Compounds",
      "Hydrocarbons",
      "Organic Compounds Containing Halogens",
      "Organic Compounds Containing Oxygen",
      "Organic Compounds Containing Nitrogen",
      "Biomolecules",
      "Principles Related to Practical Chemistry"
  ]
};

const groupInfo = {
    foundation: {
        title: 'Foundation Chapters',
        description: 'Building the fundamental blocks of chemistry.',
        icon: ShieldCheck,
        color: 'text-green-400',
        bg: 'bg-green-500/10'
    },
    bridge: {
        title: 'Bridge Chapters',
        description: 'Connecting concepts across physical chemistry.',
        icon: Link2,
        color: 'text-yellow-400',
        bg: 'bg-yellow-500/10'
    },
    core: {
        title: 'Core Chapters',
        description: 'High-yield topics for advanced and organic chemistry.',
        icon: GraduationCap,
        color: 'text-red-400',
        bg: 'bg-red-500/10'
    }
}


export default function NeetChemistryPage() {
  let chapterCounter = 0;
  const totalChapters = Object.values(chapterGroups).flat().length;
  
  const getSlug = (chapterName: string) => chapterName.replace(/[\/&,]/g, '').replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="space-y-8">
      <header className="flex items-center gap-4">
        <Link href="/exam-prep/neet">
            <Button variant="ghost" size="icon" aria-label="Back to NEET Prep">
                <ArrowLeft className="w-5 h-5" />
            </Button>
        </Link>
        <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-green-500/20 text-green-400">
                <FlaskConical className="w-6 h-6" />
            </div>
            <div>
                <h1 className="text-2xl font-bold font-headline">Chemistry</h1>
                <p className="text-muted-foreground">
                    Understand the molecular world and chemical reactions
                </p>
            </div>
        </div>
      </header>

      <Card className="bg-primary/10 border-primary/20 shadow-lg hover:shadow-primary/20 transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-primary text-xl">
            <Star className="h-6 w-6"/>
            NEET Chemistry Strategy Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="card-padding-lg">
          <p className="text-muted-foreground mb-4">
            A special module focusing on common mistakes, rare concepts, and strategic tricks to boost your score across all chemistry topics.
          </p>
          <Link href="/exam-prep/neet/chemistry/strategy-guide">
            <Button>Open Strategy Guide</Button>
          </Link>
        </CardContent>
      </Card>
      
      {Object.entries(chapterGroups).map(([key, chapters]) => {
          const group = groupInfo[key as keyof typeof groupInfo];
          if (chapters.length === 0) return null;
          return (
          <div key={key} className="space-y-4">
            <div className={`flex items-center gap-4 card-padding-md rounded-t-lg ${group.bg}`}>
                <group.icon className={`w-8 h-8 ${group.color}`}/>
                <div>
                    <h2 className={`text-2xl font-bold font-headline ${group.color}`}>{group.title}</h2>
                    <p className="text-muted-foreground text-sm">{group.description}</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {chapters.map((chapter) => {
                    chapterCounter++;
                    const slug = getSlug(chapter);
                    const content = neetContent[slug];
                    if (!content) return null;
                    const mappingDescription = content.syllabusMapping?.[0]?.tnBoardChapter || 'Mapping not available.';

                    return (
                        <Link href={`/exam-prep/neet/chemistry/${slug}`} key={slug} className="group">
                            <Card className="hover:border-primary hover:shadow-md transition-all h-full flex flex-col justify-between">
                                <CardContent className="card-padding-lg space-y-3">
                                    <div className="flex justify-between items-center">
                                      <Badge variant="secondary">Chapter {chapterCounter}</Badge>
                                      <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                    <h3 className="text-base font-bold font-headline pr-4 h-16">{chapter}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    )
                })}
            </div>
          </div>
      )})}

       <Card>
        <CardHeader>
            <CardTitle>Progress Overview</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-3 divide-x divide-border text-center card-padding-lg">
            <div>
                <p className="text-2xl font-bold">0</p>
                <p className="text-sm text-muted-foreground">Completed</p>
            </div>
            <div>
                <p className="text-2xl font-bold">{totalChapters}</p>
                <p className="text-sm text-muted-foreground">Total Chapters</p>
            </div>
             <div>
                <p className="text-2xl font-bold">0%</p>
                <p className="text-sm text-muted-foreground">Progress</p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
