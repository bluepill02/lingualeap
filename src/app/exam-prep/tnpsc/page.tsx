
'use client';

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  ArrowLeft, 
  BookOpen, 
  Users, 
  Trophy, 
  Clock, 
  Target,
  Zap,
  Download,
  Calendar,
  BarChart3,
  Flag,
  Landmark,
  Scale,
  Mountain,
  FlaskConical,
  Calculator,
  Newspaper,
  Languages,
  ChevronRight,
  FileQuestion,
} from 'lucide-react'
import { TnpscContentDatabase, getTnpscModulesBySubject, TnpscModule } from '@/lib/exam-data-tnpsc'
import Link from 'next/link';

export default function TnpscContentScreen() {
  const [selectedSubject, setSelectedSubject] = useState<string>('all')
  const [isOfflineMode, setIsOfflineMode] = useState(false)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      setIsOfflineMode(navigator.onLine === false)
    }
  }, [])

  const subjects = [
    { id: 'all', name: 'All Subjects', nameTamil: 'அனைத்து பாடங்கள்', icon: BookOpen, color: 'bg-primary' },
    { id: 'history', name: 'History & Culture', nameTamil: 'வரலாறு & பண்பாடு', icon: Landmark, color: 'bg-amber-500' },
    { id: 'polity', name: 'Indian Polity', nameTamil: 'இந்திய அரசியல்', icon: Scale, color: 'bg-blue-500' },
    { id: 'geography', name: 'Geography', nameTamil: 'புவியியல்', icon: Mountain, color: 'bg-green-500' },
    { id: 'economy', name: 'Economy', nameTamil: 'பொருளாதாரம்', icon: BarChart3, color: 'bg-rose-500' },
    { id: 'science', name: 'General Science', nameTamil: 'பொது அறிவியல்', icon: FlaskConical, color: 'bg-indigo-500' },
    { id: 'aptitude', name: 'Aptitude', nameTamil: 'திறனறிவு', icon: Calculator, color: 'bg-purple-500' },
    { id: 'current-affairs', name: 'Current Affairs', nameTamil: 'நடப்பு நிகழ்வுகள்', icon: Newspaper, color: 'bg-cyan-500' },
    { id: 'language', name: 'Language Papers', nameTamil: 'மொழித் தாள்கள்', icon: Languages, color: 'bg-orange-500' },
  ];

  const getFilteredModules = (): Record<string, TnpscModule[]> => {
    const allModules = Object.values(TnpscContentDatabase);
    const modulesBySubject: Record<string, TnpscModule[]> = {};

    subjects.forEach(subject => {
      if (subject.id !== 'all') {
        const filtered = allModules
          .filter(module => module.subject === subject.id)
          .sort((a, b) => b.weightage - a.weightage);
        if (filtered.length > 0) {
          modulesBySubject[subject.id] = filtered;
        }
      }
    });
    
    return modulesBySubject;
  }
  
  const filteredModulesBySubject = getFilteredModules();
  
  const subjectOrder = ['history', 'polity', 'geography', 'economy', 'science', 'aptitude', 'current-affairs', 'language'];


  const handleDownloadOfflineContent = async () => {
    try {
      localStorage.setItem('tnpsc-offline-content', JSON.stringify(TnpscContentDatabase))
      setIsOfflineMode(true)
      alert('Content downloaded for offline access!')
    } catch (error) {
      alert('Download failed. Please try again.')
    }
  };

  return (
    <div className="container mx-auto space-y-8">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
             <Link href="/exam-prep" aria-label="Back to Exam Modules">
                <Button
                variant="ghost"
                size="icon"
                >
                <ArrowLeft className="h-6 w-6" />
                </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold font-headline">TNPSC Preparation</h1>
              <h2 className="text-muted-foreground text-lg">தேர்வுக்குத் தயாராகுங்கள்</h2>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button
              onClick={handleDownloadOfflineContent}
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Offline
            </Button>
          </div>
        </header>

        {subjectOrder.map(subjectId => {
          const subjectInfo = subjects.find(s => s.id === subjectId);
          const modules = filteredModulesBySubject[subjectId];

          if (!subjectInfo || !modules) return null;

          return (
            <div key={subjectId} className="space-y-4">
               <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${subjectInfo.color}`}>
                    <subjectInfo.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-headline">{subjectInfo.name}</h2>
                    <p className="text-muted-foreground">{subjectInfo.nameTamil}</p>
                  </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((module) => (
                  <Link href={`/exam-prep/tnpsc/${module.id}`} key={module.id} className="group">
                    <Card className="hover:border-primary transition-all h-full flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant={module.difficultyLevel === 'Foundation' ? 'success' : 
                                            module.difficultyLevel === 'Intermediate' ? 'warning' : 'destructive'}>
                            {module.difficultyLevel}
                          </Badge>
                          <Badge variant="secondary">Weightage: {module.weightage}%</Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors h-16">
                          {module.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="pt-0 flex-grow flex flex-col justify-end">
                         <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                            <div className="flex items-center gap-1.5">
                                <FileQuestion className="h-4 w-4"/>
                                <span>{module.examPattern.mcqCount} MCQs</span>
                            </div>
                             <div className="flex items-center gap-1.5">
                                <span>Start Learning</span>
                                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform"/>
                            </div>
                         </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
               </div>
            </div>
          )
        })}
    </div>
  )
}
