
'use client';

import React from 'react';
import { useExamModuleGenerator } from '@/hooks/use-ielts-generator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function IeltsGeneratorPage() {
  const { loading, error, result, generate } = useExamModuleGenerator();

  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>IELTS Module Generator</CardTitle>
          <CardDescription>
            Select the exam variant to generate a complete vocabulary module using AI.
            Please note that generation may take a minute or two.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-4">
            <Button onClick={() => generate('Academic')} disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate Academic Module
            </Button>
            <Button onClick={() => generate('General Training')} disabled={loading}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Generate General Training Module
            </Button>
          </div>

          {loading && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Generating modules... Please wait.</span>
            </div>
          )}

          {error && <p className="text-destructive">{error}</p>}

        </CardContent>
      </Card>
      
      {result && (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Generated Module</CardTitle>
            </CardHeader>
            <CardContent>
                 <div className="prose prose-sm dark:prose-invert max-w-none">
                    <ReactMarkdown>{result}</ReactMarkdown>
                </div>
            </CardContent>
        </Card>
      )}
    </div>
  );
}
