
'use client';

import Link from 'next/link';
import { ArrowLeft, Clock, BookOpen, ChevronRight, Atom } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { getNeetContent } from '@/lib/neet/content-loader';


const physicsChapters = [
    {
        id: 'physical-world',
        chapter: 1,
        title: 'Physics - Physical World (பௌதிக உலகம்)',
        difficulty: 'Easy',
        estimatedTime: '20-30 min',
    },
    {
        id: 'units-and-measurements',
        chapter: 2,
        title: 'Physics - Units and Measurements (அலகுகளும் அளவீட்டியலும்)',
        difficulty: 'Medium',
        estimatedTime: '45-60 min',
    },
    {
        id: 'laws-of-motion',
        chapter: 3,
        title: 'Physics - Laws of Motion (இயக்க விதிகள்)',
        difficulty: 'Hard',
        estimatedTime: '60-90 min',
    }
]

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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {physicsChapters.sort((a,b) => a.chapter - b.chapter).map((item) => {
            const content = getNeetContent(item.id);
            const mappingDescription = content?.syllabusMapping?.[0]?.mappingDescription || 'Mapping not available.';
            return (
                <Link href={`/exam-prep/neet/physics/${item.id}`} key={item.id}>
                    <Card className="hover:border-primary transition-colors h-full flex flex-col">
                        <CardContent className="p-6 space-y-4 flex-grow">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Badge variant="outline">Ch. {item.chapter}</Badge>
                                    <Badge variant="secondary">{item.difficulty}</Badge>
                                </div>
                                <ChevronRight className="w-5 h-5 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-bold font-headline">{item.title}</h3>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>Estimated time: {item.estimatedTime}</span>
                            </div>
                            <Alert className="bg-primary/5 border-primary/20">
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
