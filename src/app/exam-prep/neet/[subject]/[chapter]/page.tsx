
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import React from 'react';

// Simplified and more robust markdown-to-React element renderer
function renderMarkdownToReact(markdown: string) {
    if (!markdown) {
        return null;
    }

    const sections = markdown.split(/^(?=##\s)/m); // Split by ## headings

    return sections.map((section, index) => {
        if (section.trim() === '') return null;

        const lines = section.trim().split('\n');
        const titleLine = lines[0];
        const contentLines = lines.slice(1);

        const title = titleLine.replace(/^##\s*/, '').trim();

        const content = contentLines.join('\n');

        return (
            <Card key={index} className="mb-8">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none">
                    {content.split('\n').map((line, lineIndex) => {
                        if (line.startsWith('```')) {
                            // This is a simple way to handle code blocks, more complex parsing can be added.
                            return <pre key={lineIndex} className="bg-muted p-4 rounded-md text-sm whitespace-pre-wrap font-mono my-2">{line.replace(/`/g, '')}</pre>;
                        }
                        if (line.match(/^\s{0,3}- /)) {
                             return <li key={lineIndex} className="ml-4 list-disc">{line.substring(line.indexOf('- ') + 2)}</li>;
                        }
                        if (line.match(/^\s{0,3}\*/)) {
                            return <li key={lineIndex} className="ml-4 list-disc font-semibold">{line.substring(line.indexOf('*') + 1)}</li>;
                        }
                        if (line.match(/^\d+\./)) {
                            return <p key={lineIndex} className="my-2">{line}</p>;
                        }
                        if (line.match(/^[A-Z]\)/i)) {
                            return <p key={lineIndex} className="ml-4 my-1 text-muted-foreground">{line}</p>;
                        }
                         if (line.toLowerCase().startsWith('**solution:**') || line.toLowerCase().startsWith('**விடை:**')) {
                            return <p key={lineIndex} className="mt-2 text-primary font-semibold">{line}</p>;
                        }
                        if (line.trim() === '') {
                            return <br key={lineIndex} />;
                        }
                        return <p key={lineIndex} className="my-2">{line}</p>;
                    })}
                </CardContent>
            </Card>
        );
    });
}


export default function NeetChapterPage({ params }: { params: { subject: string; chapter: string } }) {
  const { subject, chapter } = params;
  
  const filePath = path.join(process.cwd(), 'content', 'neet', subject, `${chapter}.md`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  const title = chapter.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 md:p-0">
       <header>
        <h1 className="text-4xl font-bold font-headline">{title}</h1>
        <p className="text-muted-foreground capitalize">
          NEET Preparation Module | {subject}
        </p>
      </header>
      
      <div>
        {renderMarkdownToReact(fileContent)}
      </div>

    </div>
  );
}
