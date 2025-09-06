
'use client';

import Link from 'next/link';
import { ArrowLeft, FlaskConical, GraduationCap, Link2, ShieldCheck } from 'lucide-react';
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
      "Biomolecules"
  ]
};

const groupInfo = {
    core: {
        title: 'Core Chapters',
        icon: GraduationCap,
        color: 'text-red-400'
    },
    bridge: {
        title: 'Bridge Chapters',
        icon: Link2,
        color: 'text-yellow-400'
    },
    foundation: {
        title: 'Foundation Chapters',
        icon: ShieldCheck,
        color: 'text-green-400'
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
      
      {Object.entries(chapterGroups).map(([key, chapters]) => {
          const group = groupInfo[key as keyof typeof groupInfo];
          if (chapters.length === 0) return null;
          return (
          <div key={key} className="space-y-4">
            <div className="flex items-center gap-3">
                <group.icon className={`w-6 h-6 ${group.color}`}/>
                <div>
                    <h2 className="text-2xl font-bold font-headline">{group.title}</h2>
                </div>
            </div>
            <Separator/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {chapters.map((chapter) => {
                    chapterCounter++;
                    const slug = getSlug(chapter);
                    const content = neetContent[slug];
                    if (!content) return null;
                    return (
                        <Link href={`/exam-prep/neet/chemistry/${slug}`} key={slug}>
                            <Card className="hover:border-primary transition-colors h-full flex flex-col">
                                <CardContent className="p-6 space-y-4 flex-grow">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg font-bold font-headline pr-4">{chapter}</h3>
                                        <Badge variant="secondary">Chapter {chapterCounter}</Badge>
                                    </div>
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
        <CardContent className="grid grid-cols-3 divide-x divide-border text-center">
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
