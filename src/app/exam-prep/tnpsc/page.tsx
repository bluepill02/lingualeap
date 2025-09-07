
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
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [isOfflineMode, setIsOfflineMode] = useState(false)
  const [userProgress, setUserProgress] = useState<Record<string, number>>({})
  const [studyStreak, setStudyStreak] = useState(0)

  useEffect(() => {
    const savedProgress = localStorage.getItem('tnpsc-progress')
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress))
    }

    const savedStreak = localStorage.getItem('tnpsc-streak')
    if (savedStreak) {
      setStudyStreak(parseInt(savedStreak))
    }

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

  const getFilteredModules = (): TnpscModule[] => {
    let modules = Object.values(TnpscContentDatabase)
    
    if (selectedSubject !== 'all') {
      modules = modules.filter(module => module.subject === selectedSubject)
    }
    
    if (selectedDifficulty !== 'all') {
      modules = modules.filter(module => module.difficultyLevel === selectedDifficulty)
    }
    
    return modules.sort((a, b) => b.weightage - a.weightage)
  }
  
   const filteredModules = getFilteredModules();

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

        <div className="flex flex-wrap gap-2">
            {subjects.map(s => (
                <Button key={s.id} variant={selectedSubject === s.id ? "default" : "outline"} onClick={() => setSelectedSubject(s.id)}>
                    <s.icon className="h-4 w-4 mr-2" />
                    {s.name}
                </Button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => {
            const subjectInfo = subjects.find(s => s.id === module.subject)
            
            return (
              <Link href={`/exam-prep/tnpsc/${module.id}`} key={module.id} className="group">
                <Card className="hover:border-primary transition-all h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      {subjectInfo && <Badge variant="secondary" className="bg-opacity-20 text-foreground">
                        <subjectInfo.icon className="h-3 w-3 mr-1.5" style={{ color: subjectInfo.color }} />
                        {subjectInfo.name}
                      </Badge>}
                       <Badge variant={module.difficultyLevel === 'Foundation' ? 'success' : 
                                        module.difficultyLevel === 'Intermediate' ? 'warning' : 'destructive'}>
                        {module.difficultyLevel}
                      </Badge>
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
            )
          })}
        </div>
    </div>
  )
}
