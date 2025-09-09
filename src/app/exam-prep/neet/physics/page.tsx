
'use client';

import Link from 'next/link';
import { ArrowLeft, BookOpen, Atom, GraduationCap, Link2, ShieldCheck, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { neetContent } from '@/lib/neet/content-loader';
import { Separator } from '@/components/ui/separator';

const chapterGroups = {
    core: [
        { id: 'physical-world', title: 'Physical World' },
        { id: 'units-and-measurements', title: 'Units and Measurements' },
        { id: 'motion-in-a-straight-line', title: 'Motion in a Straight Line' },
        { id: 'laws-of-motion', title: 'Laws of Motion' },
        { id: 'work-energy-and-power', title: 'Work, Energy and Power' },
        { id: 'thermodynamics', title: 'Thermodynamics' },
        { id: 'electrostatics', title: 'Electrostatics' },
        { id: 'current-electricity', title: 'Current Electricity' },
        { id: 'ray-optics-and-optical-instruments', title: 'Ray Optics and Optical Instruments' },
        { id: 'atoms', title: 'Atoms' },
        { id: 'nuclei', title: 'Nuclei' },
    ],
    bridge: [
        { id: 'motion-in-a-plane', title: 'Motion in a Plane' },
        { id: 'system-of-particles-and-rotational-motion', title: 'System of Particles and Rotational Motion' },
        { id: 'gravitation', title: 'Gravitation' },
        { id: 'moving-charges-and-magnetism', title: 'Moving Charges and Magnetism' },
        { id: 'magnetism-and-matter', title: 'Magnetism and Matter' },
        { id: 'electromagnetic-induction', title: 'Electromagnetic Induction' },
        { id: 'alternating-current', title: 'Alternating Current' },
        { id: 'electromagnetic-waves', title: 'Electromagnetic Waves' },
        { id: 'wave-optics', title: 'Wave Optics' },
        { id: 'dual-nature-of-radiation-and-matter', title: 'Dual Nature of Radiation and Matter' },
        { id: 'semiconductor-electronics', title: 'Semiconductor Electronics' },
    ],
    foundation: [
        { id: 'mechanical-properties-of-solids', title: 'Mechanical Properties of Solids' },
        { id: 'mechanical-properties-of-fluids', title: 'Mechanical Properties of Fluids' },
        { id: 'thermal-properties-of-matter', title: 'Thermal Properties of Matter' },
        { id: 'kinetic-theory-of-gases', title: 'Kinetic Theory of Gases' },
        { id: 'oscillations', title: 'Oscillations' },
        { id: 'waves', title: 'Waves' },
        { id: 'communication-systems', title: 'Communication Systems' },
    ]
}

const groupInfo = {
    core: {
        title: 'Core Chapters (High-Yield + TN Board Overlap)',
        description: 'These are heavily tested and align well with TN Board curriculum. Prioritize bilingual clarity, worked examples, and MCQ mastery here.',
        icon: GraduationCap
    },
    bridge: {
        title: 'Bridge Chapters (NEET-heavy but TN-light)',
        description: 'These need extra scaffolding and analogies to bridge gaps for TN students.',
        icon: Link2
    },
    foundation: {
        title: 'Foundation Chapters (Conceptual but less weightage)',
        description: 'Still important for dimensional analysis, units, and linking ideas across chapters.',
        icon: ShieldCheck
    }
}


export default function NeetPhysicsPage() {
  let chapterCounter = 0;
  const totalChapters = Object.values(chapterGroups).flat().length;

  return (
    <div className="container mx-auto space-y-8">
      <header className="flex items-center gap-4">
        <Link href="/exam-prep/neet">
            <Button variant="ghost" size="icon" aria-label="Back to NEET Prep">
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
                    Master fundamental concepts and problem-solving
                </p>
            </div>
        </div>
      </header>

      <Card className="bg-primary/10 border-primary/20 shadow-lg hover:shadow-primary/20 transition-shadow">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-primary text-xl">
            <Star className="h-6 w-6"/>
            NEET Physics Strategy Guide
          </CardTitle>
        </CardHeader>
        <CardContent className="card-padding-lg">
          <p className="text-muted-foreground mb-4">
            A special module focusing on common mistakes, rare concepts, and strategic tricks to boost your score across all physics topics.
          </p>
          <Link href="/exam-prep/neet/physics/strategy-guide">
            <Button>Open Strategy Guide</Button>
          </Link>
        </CardContent>
      </Card>
      
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
                        chapterCounter++;
                        const content = neetContent[item.id];
                        if (!content) return null;
                        const mappingDescription = content.syllabusMapping?.[0]?.tnBoardChapter || 'Mapping not available.';
                        return (
                            <Link href={`/exam-prep/neet/physics/${item.id}`} key={item.id}>
                                <Card className="hover:border-primary transition-colors h-full flex flex-col">
                                    <CardContent className="card-padding-lg space-y-4 flex-grow">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-bold font-headline pr-4">{item.title}</h3>
                                            <Badge variant="secondary">Chapter {chapterCounter}</Badge>
                                        </div>
                                        <div className="mt-auto bg-primary/5 border-primary/20 card-padding-sm rounded-md">
                                            <div className="flex items-center gap-2 text-primary/80 text-xs">
                                              <BookOpen className="h-4 w-4" />
                                              <span>TN Board Mapping: {mappingDescription}</span>
                                            </div>
                                        </div>
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
