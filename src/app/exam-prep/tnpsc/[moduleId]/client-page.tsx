'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import 'katex/dist/katex.min.css'
import { 
  ArrowLeft, 
  Globe,
  Users,
  BookOpen,
  Target,
  Trophy,
  Lightbulb,
  CheckCircle,
  Flag,
  Calendar,
  TrendingUp,
  Download,
  Share2,
  Bookmark
} from 'lucide-react';
import { type TnpscModule } from '@/lib/exam-data-tnpsc';
import { useRouter } from 'next/navigation';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';


export default function TnpscContentViewer({ module }: { module: TnpscModule }) {
  const router = useRouter();
  const { id: moduleId } = module;

  const [currentTab, setCurrentTab] = useState('overview');
  const [language, setLanguage] = useState<'english' | 'tamil'>('english');
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [bookmarked, setBookmarked] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    const savedProgress = localStorage.getItem(`tnpsc-progress-${moduleId}`);
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setCompletedSections(new Set(progress.completedSections));
    }
  }, [moduleId]);
  
  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div>Loading module...</div>
      </div>
    );
  }

  const markSectionCompleted = (sectionId: string) => {
    const newCompleted = new Set([...completedSections, sectionId]);
    setCompletedSections(newCompleted);
    
    localStorage.setItem(`tnpsc-progress-${moduleId}`, JSON.stringify({
      completedSections: Array.from(newCompleted),
      lastAccessed: Date.now()
    }));
  };

  const calculateScore = () => {
    if (!module) return 0;
    const mcqs = module.practice.mcqs;
    const correct = mcqs.reduce((count, mcq, index) => {
      return selectedAnswers[index] === mcq.correct ? count + 1 : count;
    }, 0);
    return Math.round((correct / mcqs.length) * 100);
  };
  
  const progressPercentage = (completedSections.size / 6) * 100;

  return (
    <div className="container mx-auto space-y-8">
        <header className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Button
                variant="ghost"
                size="icon"
                onClick={() => router.push('/exam-prep/tnpsc')}
                >
                <ArrowLeft className="h-6 w-6" />
                </Button>
                <div>
                <h1 className="text-2xl">
                    {language === 'english' ? module.title : module.titleTamil}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground text-sm mt-2">
                    <Badge>
                    Weightage: {module.weightage}%
                    </Badge>
                    <Badge variant={module.difficultyLevel === 'Foundation' ? 'success' : 
                                    module.difficultyLevel === 'Intermediate' ? 'warning' : 'destructive'}>
                    {module.difficultyLevel}
                    </Badge>
                </div>
                </div>
            </div>
          
            <div className="flex items-center gap-2">
                <div className="flex bg-muted rounded-lg p-1">
                <Button
                    size="sm"
                    variant={language === 'english' ? 'secondary' : 'ghost'}
                    onClick={() => setLanguage('english')}
                >
                    EN
                </Button>
                <Button
                    size="sm"
                    variant={language === 'tamil' ? 'secondary' : 'ghost'}
                    onClick={() => setLanguage('tamil')}
                >
                    தமிழ்
                </Button>
                </div>
            </div>
        </header>

        <Progress value={progressPercentage} />

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="practice">Practice</TabsTrigger>
            <TabsTrigger value="context">Context</TabsTrigger>
            <TabsTrigger value="engagement">Activities</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{language === 'english' ? 'Module Overview' : 'பாட மேலோட்டம்'}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="leading-relaxed">
                  {language === 'english' ? module.overview.summary : module.overview.summaryTamil}
                </p>
                <Alert variant="info">
                  <Target className="h-4 w-4" />
                  <AlertTitle>{language === 'english' ? 'Exam Relevance' : 'தேர்வு சம்பந்தம்'}</AlertTitle>
                  <AlertDescription>{module.overview.relevanceToExam}</AlertDescription>
                </Alert>
                <div>
                  <h4 className="font-semibold mb-2">{language === 'english' ? 'Recent Year Questions' : 'சமீபத்திய ஆண்டு கேள்விகள்'}</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {module.overview.lastYearQuestions.map((q, i) => <li key={i}>{q}</li>)}
                  </ul>
                </div>
                <Button onClick={() => markSectionCompleted('overview')} disabled={completedSections.has('overview')}>
                  {completedSections.has('overview') ? 'Completed' : 'Mark as Completed'}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="practice" className="mt-4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{language === 'english' ? 'Practice Questions' : 'பயிற்சி கேள்விகள்'}</span>
                  {showAnswers && <Badge>Score: {calculateScore()}%</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {module.practice.mcqs.map((mcq, index) => (
                  <div key={index} className="space-y-3 p-4 border rounded-lg">
                    <p className="font-semibold">
                      Q{index + 1}. {language === 'english' ? mcq.question : mcq.questionTamil}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {(language === 'english' ? mcq.options : mcq.optionsTamil).map((option, oIndex) => (
                        <Button
                          key={oIndex}
                          variant="outline"
                          onClick={() => !showAnswers && setSelectedAnswers(p => ({...p, [index]: oIndex}))}
                          className={`justify-start text-left h-auto ${
                            selectedAnswers[index] === oIndex && !showAnswers ? 'border-primary' : ''
                          } ${
                            showAnswers && (oIndex === mcq.correct ? 'bg-success/20 border-success' : selectedAnswers[index] === oIndex ? 'bg-destructive/20 border-destructive' : '')
                          }`}
                        >
                          {String.fromCharCode(65 + oIndex)}. {option}
                        </Button>
                      ))}
                    </div>
                    {showAnswers && (
                      <Alert variant={selectedAnswers[index] === mcq.correct ? "success" : "destructive"}>
                        <AlertTitle>Explanation</AlertTitle>
                        <AlertDescription>{language === 'english' ? mcq.explanation : mcq.explanationTamil}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                ))}
                <div className="flex gap-4 justify-center">
                    <Button onClick={() => setShowAnswers(!showAnswers)}>
                    {showAnswers ? 'Hide Answers' : 'Submit & Show Answers'}
                    </Button>
                    <Button onClick={() => markSectionCompleted('practice')} disabled={completedSections.has('practice')}>
                        Mark Practice as Done
                    </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="mt-4 space-y-6">
             {module.sections.map((section) => (
                <Card key={section.id}>
                    <CardHeader>
                        <CardTitle>{language === 'english' ? section.title : section.titleTamil}</CardTitle>
                    </CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none">
                         <MarkdownRenderer>{language === 'english' ? section.content : section.contentTamil}</MarkdownRenderer>
                    </CardContent>
                </Card>
             ))}
             <Button onClick={() => markSectionCompleted('content')} disabled={completedSections.has('content')}>
                {completedSections.has('content') ? 'Completed' : 'Mark Content as Read'}
              </Button>
          </TabsContent>
        </Tabs>
    </div>
  );
}
