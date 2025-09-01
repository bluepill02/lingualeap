
'use client';

import {
  Coffee,
  Briefcase,
  Phone,
  BookOpen,
  Clock,
  Play,
  Lightbulb,
  ArrowLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { allLessonDecks } from '@/lib/data';

export default function BusinessHindiPage() {
  const decks = allLessonDecks.filter(deck => deck.id.startsWith('deck-bh-'));

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <Link href="/language-selection" className="flex items-center gap-2 text-primary mb-4">
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Languages</span>
      </Link>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold font-headline">Business Hindi</h1>
        <p className="text-muted-foreground mt-2">
          Select a deck to start learning
        </p>
      </div>
      <div className="space-y-4">
        {decks.map((deck) => (
          <Card key={deck.id} className="bg-card/50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Briefcase className="w-8 h-8 text-primary mt-1" />
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-bold text-lg">{deck.title}</h2>
                      <p className="text-muted-foreground text-sm">
                        {deck.description}
                      </p>
                    </div>
                    <Badge variant="outline">Deck {decks.indexOf(deck) + 1}</Badge>
                  </div>
                  {deck.lessons.map((lesson) => (
                     <div key={lesson.id} className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4" />
                                <span>{lesson.title}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="w-4 h-4" />
                                <span>{lesson.duration}</span>
                            </div>
                        </div>
                        <Link href={`/lessons/${lesson.id}`} passHref>
                            <Button size="sm">
                                <Play className="w-4 h-4 mr-2" />
                                Start
                            </Button>
                        </Link>
                     </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        <Card className="bg-card/50">
          <CardContent className="p-4">
            <p className="text-sm font-medium mb-2">Your Progress</p>
            <div className="flex items-center gap-4">
              <Progress value={0} className="h-2 flex-1" />
              <span className="text-sm text-muted-foreground">
                0 of {decks.length} decks completed
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
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
