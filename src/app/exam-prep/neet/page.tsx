
'use client';

import Link from 'next/link';
import { ArrowLeft, ChevronRight, Atom, FlaskConical, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const subjects = [
    {
      title: 'Physics',
      description: 'Master fundamental concepts and problem-solving (20 Chapters)',
      chapters: 2,
      icon: Atom,
      color: 'bg-blue-500/20 text-blue-400',
      href: '/exam-prep/neet/physics',
    },
    {
      title: 'Chemistry',
      description: 'Understand molecular world and chemical reactions (20 Chapters)',
      chapters: 0,
      icon: FlaskConical,
      color: 'bg-green-500/20 text-green-400',
      href: '/exam-prep/neet/chemistry',
    },
    {
      title: 'Biology',
      description: 'Explore life sciences and biological processes (10 Chapters)',
      chapters: 0,
      icon: BookOpen,
      color: 'bg-teal-500/20 text-teal-400',
      href: '/exam-prep/neet/biology',
    },
];

const studyTips = [
    'Follow the structured learning path with clear objectives',
    'Practice MCQs regularly to improve speed and accuracy',
    'Use Tamil mnemonics to remember complex concepts',
    'Review key formulas and diagrams before exams'
];

export default function NeetPrepPage() {
  return (
    <div className="container mx-auto space-y-8">
      <Link href="/exam-prep" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Exam Modules</span>
      </Link>
      <div>
        <h1 className="text-3xl font-bold font-headline">NEET Preparation</h1>
        <p className="text-muted-foreground">
          Complete study materials for Tamil Nadu students
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <Link href={subject.href} key={subject.title}>
            <Card className="hover:border-primary transition-colors h-full">
              <CardContent className="card-padding-lg space-y-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${subject.color}`}>
                  <subject.icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold font-headline">{subject.title}</h2>
                <p className="text-muted-foreground text-sm">{subject.description}</p>
                <div className="flex justify-between items-center text-sm pt-4">
                    <p>{subject.chapters} Chapters</p>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <Card>
        <CardContent className="card-padding-lg">
            <h2 className="text-xl font-bold font-headline mb-4">Study Tips for NEET Success</h2>
            <ul className="space-y-3">
                {studyTips.map((tip, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                        <div className={`w-2 h-2 rounded-full ${['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-500'][index % 4]}`}></div>
                        <span>{tip}</span>
                    </li>
                ))}
            </ul>
        </CardContent>
      </Card>
    </div>
  );
}
