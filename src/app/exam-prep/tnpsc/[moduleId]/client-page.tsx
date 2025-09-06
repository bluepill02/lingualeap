
'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import 'katex/dist/katex.min.css'
import { motion, AnimatePresence } from "framer-motion";
import { cn } from '@/lib/utils';

import { 
  ArrowLeft, 
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
  Bookmark,
  AlertCircle,
  Key,
  Landmark,
  Megaphone,
  BarChart3,
  Activity,
  ClipboardList,
  Layers3,
  BrainCircuit,
  Link2,
  Star,
} from 'lucide-react';
import { type TnpscModule } from '@/lib/exam-data-tnpsc';
import { useRouter } from 'next/navigation';
import { MarkdownRenderer } from '@/components/exam/markdown-renderer';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { XCircle } from 'lucide-react';

const COLORS = {
  correct: 'hsl(var(--success))',
  incorrect: 'hsl(var(--destructive))',
  unanswered: 'hsl(var(--muted-foreground))',
};

export default function TnpscContentViewer({ module }: { module: TnpscModule }) {
  const router = useRouter();
  const { id: moduleId } = module;

  const [currentTab, setCurrentTab] = useState('overview');
  const [language, setLanguage] = useState<'english' | 'tamil'>('english');
  const [completedSections, setCompletedSections] = useState<Set<string>>(new Set());
  const [bookmarked, setBookmarked] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

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
  
  const progressPercentage = (completedSections.size / 7) * 100;

  const StrategicFocusCard = () => {
    let recommendation = '';
    if (module.difficultyLevel === 'Advanced' && module.weightage > 20) {
        recommendation = "This is a high-weightage, Advanced module. We recommend allocating at least 3 study sessions. Focus heavily on understanding the nuances of the socio-political movements, as questions are often analytical.";
    } else if (module.difficultyLevel === 'Intermediate' && module.weightage > 15) {
        recommendation = "This Intermediate module has significant weightage. Ensure you master the key terms from the 'Context' tab and aim for over 80% in the 'Practice' section.";
    } else {
        recommendation = "This is a Foundation module. A strong understanding here is crucial for more advanced topics. Focus on mastering all the flashcards in the Spaced Repetition section.";
    }

    return (
        <Alert variant="info" className="bg-primary/10 border-primary/30">
            <Target className="h-4 w-4 text-primary" />
            <AlertTitle className="font-bold text-primary">Strategic Focus</AlertTitle>
            <AlertDescription>
                {recommendation}
            </AlertDescription>
        </Alert>
    );
}

  const AnalyticsTabContent = () => {
    if (!showAnswers) {
        return (
            <Alert variant="info">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Complete the Practice Section!</AlertTitle>
                <AlertDescription>
                    Your performance analytics will appear here after you submit your answers in the 'Practice' tab.
                </AlertDescription>
            </Alert>
        )
    }

    const totalQuestions = module.practice.mcqs.length;
    const correctCount = module.practice.mcqs.filter((mcq, index) => selectedAnswers[index] === mcq.correct).length;
    const incorrectCount = module.practice.mcqs.filter((mcq, index) => selectedAnswers[index] !== undefined && selectedAnswers[index] !== mcq.correct).length;
    const unansweredCount = totalQuestions - correctCount - incorrectCount;
    
    const chartData = [
      { name: 'Correct', value: correctCount, fill: COLORS.correct },
      { name: 'Incorrect', value: incorrectCount, fill: COLORS.incorrect },
      { name: 'Unanswered', value: unansweredCount, fill: COLORS.unanswered },
    ];
    
    const incorrectAnswers = module.practice.mcqs.filter((mcq, index) => selectedAnswers[index] !== undefined && selectedAnswers[index] !== mcq.correct);
    const improvementTopics = [...new Set(incorrectAnswers.map(mcq => mcq.context))];


    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    {language === 'english' ? 'Practice Performance' : 'பயிற்சி செயல்திறன்'}
                </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div style={{ width: '100%', height: 250 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                dataKey="value"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    background: "hsl(var(--background) / 0.8)",
                                    borderColor: "hsl(var(--border))",
                                    color: "hsl(var(--foreground))"
                                }}
                            />
                            <Legend iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                 <div className="space-y-4">
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                            <CardTitle className="text-sm font-medium">Correct</CardTitle>
                            <CheckCircle className="h-4 w-4 text-green-500" />
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                             <div className="text-2xl font-bold text-green-500">{correctCount}</div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                            <CardTitle className="text-sm font-medium">Incorrect</CardTitle>
                            <XCircle className="h-4 w-4 text-destructive" />
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                             <div className="text-2xl font-bold text-destructive">{incorrectCount}</div>
                        </CardContent>
                    </Card>
                </div>
                {improvementTopics.length > 0 && (
                <div className="md:col-span-2">
                     <Alert variant="warning">
                        <Lightbulb className="h-4 w-4"/>
                        <AlertTitle>Actionable Feedback: Focus Areas</AlertTitle>
                        <AlertDescription>
                            <p>You seem to be facing challenges in the following areas. We recommend reviewing these sections:</p>
                            <ul className="list-disc list-inside mt-2">
                                {improvementTopics.map(topicId => {
                                    const section = module.sections.find(s => s.id === topicId);
                                    return (
                                        <li key={topicId}>
                                            <Button variant="link" className="p-0 h-auto" onClick={() => {
                                                const contentTab = document.querySelector('button[data-radix-collection-item][value=content]') as HTMLButtonElement | null;
                                                if(contentTab) contentTab.click();
                                            }}>
                                                {language === 'english' ? section?.title : section?.titleTamil}
                                            </Button>
                                        </li>
                                    );
                                })}
                            </ul>
                        </AlertDescription>
                    </Alert>
                </div>
                )}
            </CardContent>
        </Card>
    );
  }

  const EngagementTabContent = () => {
    const trendData = module.practice.mcqs
      .flatMap(mcq => mcq.yearAsked)
      .reduce((acc, year) => {
        acc[year] = (acc[year] || 0) + 1;
        return acc;
      }, {} as Record<number, number>);

    const lastTenYears = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).reverse();
    
    const chartData = lastTenYears.map(year => ({
      year: year.toString(),
      count: trendData[year] || 0,
    }));

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5" />
                        {language === 'english' ? 'Topic Trends in Past Exams' : 'கடந்த தேர்வுகளில் தலைப்பு போக்குகள்'}
                    </CardTitle>
                    <CardDescription>
                        {language === 'english' ? 'Number of questions from this module that appeared in recent years.' : 'சமீபத்திய ஆண்டுகளில் இந்த பாடத்திலிருந்து தோன்றிய கேள்விகளின் எண்ணிக்கை.'}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                   <div style={{ width: '100%', height: 300 }}>
                     <ResponsiveContainer>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis allowDecimals={false} />
                            <Tooltip
                                contentStyle={{
                                    background: "hsl(var(--background) / 0.8)",
                                    borderColor: "hsl(var(--border))",
                                    color: "hsl(var(--foreground))"
                                }}
                            />
                            <Bar dataKey="count" fill="hsl(var(--primary))" name="Questions" />
                        </BarChart>
                    </ResponsiveContainer>
                   </div>
                </CardContent>
            </Card>

            {module.engagement.peerTeaching.map((activity, index) => (
                <Card key={`peer-${index}`}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Megaphone className="h-5 w-5 text-primary" />
                            {language === 'english' ? 'Peer-Teaching Challenge' : 'சக மாணவர் கற்பித்தல் சவால்'}
                        </CardTitle>
                        <CardDescription>{language === 'english' ? `Topic: ${activity.topic}` : `தலைப்பு: ${activity.topic}`}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">{language === 'english' ? activity.prompt : activity.promptTamil}</p>
                        <div className="text-sm text-muted-foreground">
                            <strong>{language === 'english' ? 'Criteria:' : 'மதிப்பீட்டு அளவுகோல்கள்:'}</strong>
                            <ul className="list-disc list-inside ml-4">
                                {activity.criteria.map((c, i) => <li key={i}>{c}</li>)}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            ))}

            {module.engagement.practicalActivities.map((activity, index) => (
                <Card key={`practical-${index}`}>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Activity className="h-5 w-5 text-accent" />
                            {language === 'english' ? 'Practical Activity' : 'செயல்முறை செயல்பாடு'}
                        </CardTitle>
                        <CardDescription>{activity.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <strong>{language === 'english' ? 'Tasks:' : 'பணிகள்:'}</strong>
                            <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
                                {activity.activities.map((a, i) => <li key={i}>{a}</li>)}
                            </ol>
                        </div>
                        <div className="mt-4">
                            <strong>{language === 'english' ? 'Expected Output:' : 'எதிர்பார்க்கப்படும் வெளியீடு:'}</strong>
                            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                {activity.outputs.map((o, i) => <li key={i}>{o}</li>)}
                            </ul>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
  }

  const handleNextFlashcard = (knewIt: boolean) => {
    setIsFlipped(false);
    setTimeout(() => {
        setCurrentFlashcardIndex((prevIndex) => (prevIndex + 1) % module.spacedRepetition.flashcards.length);
    }, 300); // Allow time for flip-back animation
  };

  const flashcards = module.spacedRepetition.flashcards;
  const currentFlashcard = flashcards[currentFlashcardIndex];

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
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 h-auto flex-wrap">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="srs">SRS</TabsTrigger>
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
                <StrategicFocusCard />
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
                     <div className="flex justify-between items-start">
                        <p className="font-semibold flex-1 pr-4">
                          Q{index + 1}. {language === 'english' ? mcq.question : mcq.questionTamil}
                        </p>
                        <div className="flex" title={`Frequency: ${mcq.tnpscFrequency}/5`}>
                           {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className={cn('h-4 w-4', (mcq.tnpscFrequency || 0) > i ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30')} />
                            ))}
                        </div>
                    </div>
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
          <TabsContent value="srs" className="mt-4 space-y-6">
              <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Layers3/>Spaced Repetition Flashcards</CardTitle>
                    <CardDescription>Review key concepts for long-term memory retention.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                     <div className="w-full max-w-md h-64 [perspective:1000px]">
                        <motion.div
                             key={currentFlashcardIndex}
                             className="relative w-full h-full [transform-style:preserve-3d]"
                             initial={{ rotateY: 0 }}
                             animate={{ rotateY: isFlipped ? 180 : 0 }}
                             transition={{ duration: 0.6 }}
                             onClick={() => setIsFlipped(!isFlipped)}
                        >
                            {/* Front */}
                            <div className="absolute w-full h-full [backface-visibility:hidden] flex items-center justify-center p-6 bg-secondary rounded-lg cursor-pointer">
                                <p className="text-xl text-center font-semibold">{language === 'english' ? currentFlashcard.front : currentFlashcard.frontTamil}</p>
                            </div>
                            {/* Back */}
                            <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-6 bg-primary/20 rounded-lg cursor-pointer">
                                <p className="text-lg text-center">{language === 'english' ? currentFlashcard.back : currentFlashcard.backTamil}</p>
                                <Badge variant="outline" className="mt-4">{currentFlashcard.category}</Badge>
                            </div>
                        </motion.div>
                     </div>
                     {isFlipped && (
                         <div className="flex gap-4">
                            <Button variant="destructive" onClick={() => handleNextFlashcard(false)}>Didn't Know</Button>
                            <Button variant="success" onClick={() => handleNextFlashcard(true)}>Knew It</Button>
                         </div>
                     )}
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
          <TabsContent value="context" className="mt-4 space-y-6">
              <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Key className="h-5 w-5" /> {language === 'english' ? 'Key Terms' : 'முக்கிய சொற்கள்'}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        {module.specificData.keyTerms.map((term, i) => <li key={i}>{term}</li>)}
                    </ul>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" /> {language === 'english' ? 'Important Figures' : 'முக்கிய ஆளுமைகள்'}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        {module.specificData.importantFigures.map((figure, i) => <li key={i}>{figure}</li>)}
                    </ul>
                </CardContent>
              </Card>
               <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Megaphone className="h-5 w-5" /> {language === 'english' ? 'Significant Events' : 'குறிப்பிடத்தக்க நிகழ்வுகள்'}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        {module.specificData.significantEvents.map((event, i) => <li key={i}>{event}</li>)}
                    </ul>
                </CardContent>
              </Card>
              {module.specificData.institutions && (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Landmark className="h-5 w-5" /> {language === 'english' ? 'Relevant Institutions' : 'தொடர்புடைய நிறுவனங்கள்'}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            {module.specificData.institutions.map((inst, i) => <li key={i}>{inst}</li>)}
                        </ul>
                    </CardContent>
                </Card>
              )}
               <div className="text-center">
                    <Button onClick={() => markSectionCompleted('context')} disabled={completedSections.has('context')}>
                        {completedSections.has('context') ? 'Completed' : 'Mark as Completed'}
                    </Button>
                </div>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4 space-y-6">
            <AnalyticsTabContent />
             <div className="text-center">
                <Button onClick={() => markSectionCompleted('analytics')} disabled={completedSections.has('analytics')}>
                    {completedSections.has('analytics') ? 'Analytics Reviewed' : 'Mark Analytics as Reviewed'}
                </Button>
            </div>
          </TabsContent>
          <TabsContent value="engagement" className="mt-4 space-y-6">
            <EngagementTabContent />
             <div className="text-center mt-6">
                <Button onClick={() => markSectionCompleted('engagement')} disabled={completedSections.has('engagement')}>
                    {completedSections.has('engagement') ? 'Activities Reviewed' : 'Mark Activities as Reviewed'}
                </Button>
            </div>
          </TabsContent>
        </Tabs>
    </div>
  );
}
