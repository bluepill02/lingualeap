
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
    { id: 'history', name: 'History & Culture', nameTamil: 'வரலாறு & பண்பாடு', icon: Landmark, color: 'bg-amber-500' },
    { id: 'polity', name: 'Indian Polity', nameTamil: 'இந்திய அரசியல்', icon: Scale, color: 'bg-blue-500' },
    { id: 'geography', name: 'Geography', nameTamil: 'புவியியல்', icon: Mountain, color: 'bg-green-500' },
    { id: 'economy', name: 'Economy', nameTamil: 'பொருளாதாரம்', icon: BarChart3, color: 'bg-rose-500' },
    { id: 'science', name: 'General Science', nameTamil: 'பொது அறிவியல்', icon: FlaskConical, color: 'bg-indigo-500' },
    { id: 'aptitude', name: 'Aptitude', nameTamil: 'திறனறிவு', icon: Calculator, color: 'bg-purple-500' },
    { id: 'current-affairs', name: 'Current Affairs', nameTamil: 'நடப்பு நிகழ்வுகள்', icon: Newspaper, color: 'bg-cyan-500' },
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
              <h1 className="text-3xl">TNPSC Preparation</h1>
              <h2 className="text-muted-foreground text-lg">தேர்வுக்குத் தயாராகுங்கள்</h2>
              <div className="flex items-center gap-4 mt-2">
                <Badge variant="secondary">
                  <Calendar className="h-4 w-4 mr-1" />
                  Streak: {studyStreak} days
                </Badge>
                {isOfflineMode && (
                  <Badge variant="destructive">
                    <Download className="h-4 w-4 mr-1" />
                    Offline Ready
                  </Badge>
                )}
              </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredModules().map((module) => {
            const progress = userProgress[module.id] || 0
            const subjectInfo = subjects.find(s => s.id === module.subject)
            
            return (
              <Link href={`/exam-prep/tnpsc/${module.id}`} key={module.id}>
                <Card className="hover:border-primary transition-all cursor-pointer group h-full flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className={`${subjectInfo?.color} text-white`}>
                            {subjectInfo && <subjectInfo.icon className="h-3 w-3 mr-1" />}
                            {subjectInfo?.name}
                          </Badge>
                          <Badge variant={module.difficultyLevel === 'Foundation' ? 'success' : 
                                            module.difficultyLevel === 'Intermediate' ? 'warning' : 'destructive'}>
                            {module.difficultyLevel}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {module.title}
                        </CardTitle>
                        <CardDescription className="text-primary/80 text-sm mt-1">
                          {module.titleTamil}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl text-primary font-bold">{module.weightage}%</div>
                        <div className="text-xs text-muted-foreground">weightage</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 flex-grow flex flex-col justify-end">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progress</span>
                          <span>{progress.toFixed(0)}%</span>
                        </div>
                        <Progress value={progress} />
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
