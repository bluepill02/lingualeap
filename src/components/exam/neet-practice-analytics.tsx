

'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { MCQ } from '@/lib/types';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { AlertCircle, TrendingUp, Check, X, HelpCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface PracticeAnalyticsProps {
  mcqs: MCQ[];
  answers: (string | null)[];
  submitted: boolean;
}

const COLORS = {
  correct: 'hsl(var(--success))',
  incorrect: 'hsl(var(--destructive))',
  unanswered: 'hsl(var(--muted-foreground))',
};

export function PracticeAnalytics({ mcqs, answers, submitted }: PracticeAnalyticsProps) {
  if (!mcqs || mcqs.length === 0) {
    return (
      <Card>
        <CardHeader className="card-padding-lg">
          <CardTitle>Practice Analytics</CardTitle>
        </CardHeader>
        <CardContent className="card-padding-lg">
          <p>No questions available for analysis.</p>
        </CardContent>
      </Card>
    );
  }

  if (!submitted) {
    return (
         <Alert variant="info">
            <AlertCircle className="h-4 w-4"/>
            <AlertTitle>Complete the Practice Mode!</AlertTitle>
            <AlertDescription>
                Once you submit your answers in the 'Practice Mode' tab, your performance analytics will appear here.
            </AlertDescription>
        </Alert>
    )
  }

  const totalQuestions = mcqs.length;
  const correctCount = mcqs.filter((mcq, index) => answers[index] === mcq.answer).length;
  const incorrectCount = mcqs.filter((mcq, index) => answers[index] !== null && answers[index] !== mcq.answer).length;
  const unansweredCount = answers.filter(answer => answer === null).length;

  const data = [
    { name: 'Correct', value: correctCount, fill: COLORS.correct },
    { name: 'Incorrect', value: incorrectCount, fill: COLORS.incorrect },
    { name: 'Unanswered', value: unansweredCount, fill: COLORS.unanswered },
  ];

  return (
    <Card className="bg-card/50">
        <CardHeader className="card-padding-lg">
            <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-primary"/>
                Your Performance Report
            </CardTitle>
            <CardDescription>
                An overview of your accuracy in this practice session.
            </CardDescription>
        </CardHeader>
        <CardContent className="card-padding-lg space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div style={{ width: '100%', height: 250 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
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
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 card-padding-md">
                            <CardTitle className="text-sm font-medium">Total Questions</CardTitle>
                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="card-padding-md">
                             <div className="text-2xl font-bold">{totalQuestions}</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 card-padding-md">
                            <CardTitle className="text-sm font-medium">Correct Answers</CardTitle>
                            <Check className="h-4 w-4 text-success" />
                        </CardHeader>
                        <CardContent className="card-padding-md">
                             <div className="text-2xl font-bold">{correctCount}</div>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 card-padding-md">
                            <CardTitle className="text-sm font-medium">Incorrect Answers</CardTitle>
                            <X className="h-4 w-4 text-destructive" />
                        </CardHeader>
                        <CardContent className="card-padding-md">
                             <div className="text-2xl font-bold">{incorrectCount}</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </CardContent>
    </Card>
  );
}
