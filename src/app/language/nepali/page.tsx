
'use client';

import {
  Briefcase,
  BookOpen,
  Clock,
  Play,
  Lightbulb,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { allLessonDecks } from '@/lib/data';
import { getLessonProgress } from '@/services/lesson-progress';
import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function NepaliPage() {
  const allDecks = allLessonDecks.filter(deck => deck.id.startsWith('deck-nepali-'));
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  
  useEffect(() => {
    setCompletedLessons(getLessonProgress());
  }, []);

  const decksByLevel = {
    Foundations: allDecks.filter(d => d.level === 'Foundations'),
    Intermediate: allDecks.filter(d => d.level === 'Intermediate'),
    Advanced: allDecks.filter(d => d.level === 'Advanced'),
  };

  const totalLessons = allDecks.reduce((sum, deck) => sum + deck.lessons.length, 0);
  const completedCount = allDecks.flatMap(deck => deck.lessons).filter(lesson => completedLessons.includes(lesson.id)).length;
  const progressPercentage = totalLessons > 0 ? (completedCount / totalLessons) * 100 : 0;

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <Link href="/language-selection" className="flex items-center gap-2 text-primary mb-4">
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Languages</span>
      </Link>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold font-headline">Nepali Course</h1>
        <p className="text-muted-foreground mt-2">
          Select a lesson deck to start your learning journey.
        </p>
      </div>
      
      <Accordion type="multiple" defaultValue={['Foundations', 'Intermediate', 'Advanced']} className="w-full space-y-4">
        {Object.entries(decksByLevel).map(([level, decks]) => decks.length > 0 && (
          <AccordionItem value={level} key={level}>
            <AccordionTrigger className="text-xl font-bold font-headline px-4 bg-muted/50 rounded-md hover:bg-muted/80">
              {level}
            </AccordionTrigger>
            <AccordionContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {decks.map((deck) => (
                  <Card key={deck.id} className="flex flex-col">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <Briefcase className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <CardTitle className="font-headline text-xl">{deck.title}</CardTitle>
                                <Badge variant="secondary" className="mt-1">{deck.level}</Badge>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground text-sm">{deck.description}</p>
                    </CardContent>
                    <CardFooter>
                        <Link href={`/lessons/${deck.lessons[0].id}`} className="w-full">
                            <Button className="w-full">
                                <Play className="w-4 h-4 mr-2" />
                                Start Deck
                            </Button>
                        </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>


      <div className="mt-8 space-y-4">
        <Card className="bg-card/50">
          <CardContent className="p-4">
            <p className="text-sm font-medium mb-2">Your Progress</p>
            <div className="flex items-center gap-4">
              <Progress value={progressPercentage} className="h-2 flex-1" />
              <span className="text-sm text-muted-foreground">
                {completedCount} of {totalLessons} lessons completed
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50">
          <CardContent className="p-4 flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-yellow-400 mt-1" />
            <div>
              <p className="text-sm font-medium">Learning Tips</p>
              <ul className="list-disc list-inside text-xs text-muted-foreground mt-1">
                <li>Complete lessons daily for best results</li>
                 <li>Practice speaking with the AI Tutor feature.</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
