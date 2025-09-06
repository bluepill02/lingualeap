
'use client';

import * as React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { MCQ } from '@/lib/types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AlertCircle, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

interface PracticeAnalyticsProps {
  mcqs: MCQ[];
}

export function PracticeAnalytics({ mcqs }: PracticeAnalyticsProps) {
  if (!mcqs || mcqs.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Practice Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No questions available for analysis.</p>
        </CardContent>
      </Card>
    );
  }

  const frequencyData = mcqs.reduce((acc, mcq) => {
    const freq = mcq.neetFrequency || 0;
    const existing = acc.find(item => item.frequency === freq);
    if (existing) {
      existing.count += 1;
    } else {
      acc.push({ frequency: freq, count: 1, name: `${freq} Stars` });
    }
    return acc;
  }, [] as { frequency: number; count: number, name: string }[]).sort((a, b) => a.frequency - b.frequency);

  return (
    <Card className="bg-card/50">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <TrendingUp className="text-primary"/>
                Question Difficulty Analytics
            </CardTitle>
            <CardDescription>
                Distribution of questions based on their NEET frequency rating.
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            <Alert variant="info">
                <AlertCircle className="h-4 w-4"/>
                <AlertTitle>What does this mean?</AlertTitle>
                <AlertDescription>
                    The 'NEET Frequency' star rating indicates how often concepts related to a question have appeared in previous NEET exams. Questions with more stars cover higher-yield topics.
                </AlertDescription>
            </Alert>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={frequencyData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="hsl(var(--primary))" name="Number of Questions" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </CardContent>
    </Card>
  );
}
