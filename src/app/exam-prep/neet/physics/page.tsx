
'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, ChevronRight, Atom, Lightbulb, GraduationCap, Link2, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { neetContent } from '@/lib/neet/content-loader';
import { Separator } from '@/components/ui/separator';

const chapterGroups = {
    foundation: [
        { id: 'physical-world', title: 'Physics - Physical World (பௌதிக உலகம்)', quirkyFact: "The universe's 'how' and 'why'!" },
        { id: 'units-and-measurements', title: 'Physics - Units and Measurements (அலகுகளும் அளவீட்டியலும்)', quirkyFact: "The secret grammar of physics." },
    ],
    core: [
        { id: 'laws-of-motion', title: 'Physics - Laws of Motion (இயக்க விதிகள்)', quirkyFact: "Why apples fall and rockets fly." }
    ],
    bridge: []
}

const groupInfo = {
    foundation: {
        title: 'Foundation Chapters',
        description: 'Build a rock-solid base. These chapters are the pillars of your physics knowledge.',
        icon: ShieldCheck
    },
    core: {
        title: 'Core Chapters',
        description: 'High-weightage topics that form the heart of the NEET syllabus. Master these for a top score.',
        icon: GraduationCap
    },
    bridge: {
        title: 'Bridge Chapters',
        description: 'Connect concepts and explore specialized topics. These chapters bridge different areas of physics.',
        icon: Link2
    }
}


export default function NeetPhysicsPage() {
  return (
    <div className="space-y-8">
      <header className="flex items-center gap-4">
        <Link href="/exam-prep/neet">
            <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
            </Button>
        </Link>
        <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-blue-500/20 text-blue-400">
                <Atom className="w-6 h-6" />
            </div>
            <div>
                <h1 className="text-2xl font-bold font-headline">Physics</h1>
                <p className="text-muted-foreground">
                    Master fundamental concepts and problem-solving (16 Chapters)
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
                    <group.icon className="w-6 h-6 text-primary"/>
                    <div>
                        <h2 className="text-2xl font-bold font-headline">{group.title}</h2>
                        <p className="text-muted-foreground text-sm">{group.description}</p>
                    </div>
                </div>
                <Separator/>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {chapters.map((item) => {
                        const content = neetContent[item.id];
                        if (!content) return null;
                        const mappingDescription = content.syllabusMapping?.[0]?.tnBoardChapter || 'Mapping not available.';
                        return (
                            <Link href={`/exam-prep/neet/physics/${item.id}`} key={item.id}>
                                <Card className="hover:border-primary transition-colors h-full flex flex-col">
                                    <CardContent className="p-6 space-y-4 flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-bold font-headline pr-4">{item.title}</h3>
                                            <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                        </div>
                                        <div className="text-sm text-accent flex items-center gap-2">
                                            <Lightbulb className="w-4 h-4" />
                                            <span>{item.quirkyFact}</span>
                                        </div>
                                        <Alert className="bg-primary/5 border-primary/20 mt-auto">
                                            <BookOpen className="h-4 w-4 text-primary/80" />
                                            <AlertDescription className="text-primary/80 text-xs">
                                                TN Board Mapping: {mappingDescription}
                                            </AlertDescription>
                                        </Alert>
                                    </CardContent>
                                </Card>
                            </Link>
                        )
                    })}
                </div>
            </div>
          )
      })}


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
                <p className="text-2xl font-bold">3</p>
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
