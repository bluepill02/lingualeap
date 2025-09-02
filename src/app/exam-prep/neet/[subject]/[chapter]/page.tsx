
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, AlertTriangle, BookCheck, BrainCircuit, Lightbulb } from 'lucide-react';
import { Input } from '@/components/ui/input';
import type { ExamModule } from '@/lib/types';
import { SyllabusMappingCard, WorkedExamplesCard } from '@/components/exam/exam-components';

// This function generates static paths for all subject/chapter combinations
export async function generateStaticParams() {
  const subjects = ['physics', 'chemistry', 'biology'];
  const allParams = [];

  for (const subject of subjects) {
    const contentDir = path.join(process.cwd(), 'content', 'neet', subject);
    try {
      const filenames = fs.readdirSync(contentDir);
      for (const filename of filenames) {
        if (path.extname(filename) === '.md') {
            allParams.push({
                subject: subject,
                chapter: path.basename(filename, '.md'),
            });
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read directory for subject: ${subject}`);
    }
  }

  return allParams;
}

// Function to get the content for a specific chapter
// In a real app, this would fetch from a database, but here we read from markdown files
const getChapterContent = (subject: string, chapter: string): ExamModule | null => {
    const filePath = path.join(process.cwd(), 'content', 'neet', subject, `${chapter}.md`);
    if (!fs.existsSync(filePath)) {
        return null;
    }
    const content = fs.readFileSync(filePath, 'utf8');
    
    // This is a very basic parser. A real-world scenario would use a robust markdown-to-JSON library.
    // We will simulate that this function returns a structured ExamModule object.
    // For this demonstration, we'll return a placeholder structure.
    // The actual content rendering will be faked in the component.
    // Let's assume we have a library that can parse the markdown into our ExamModule type.
    // Since we don't have that library, we'll just return a mock object for now
    // and focus on building the UI that *would* render it.

    // A more realistic implementation would look something like this:
    // import { parseNeetMarkdown } from '@/lib/markdown-parser';
    // return parseNeetMarkdown(content);

    // For now, let's just return a placeholder:
    const mockModule: ExamModule = {
        id: `exam-neet-${subject}-${chapter}`,
        title: chapter.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        examName: 'NEET',
        language: 'Tamil',
        category: subject.charAt(0).toUpperCase() + subject.slice(1),
        vocabulary: [],
        quizzes: [],
        errorAnalysis: [],
    };
    return mockModule;
};

// NOTE: This is a placeholder for a real markdown rendering solution.
function SimpleMarkdown({ content }: { content: string }) {
    const htmlContent = content
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold font-headline my-4">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold font-headline mt-6 mb-3">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
      .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mt-3 mb-1">$1</h4>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/```([\s\S]*?)```/gim, '<pre class="bg-muted p-4 rounded-md overflow-x-auto text-sm font-mono"><code>$1</code></pre>')
      .replace(/`([^`]+)`/gim, '<code class="bg-muted px-1 rounded-sm font-mono text-sm">$1</code>')
      .replace(/^- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
      .replace(/\n/g, '<br />');
  
    return <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  }

export default function NeetChapterPage({ params }: { params: { subject: string; chapter: string } }) {
  const { subject, chapter } = params;
  const content = getChapterContent(subject, chapter);

  if (!content) {
    notFound();
  }
  
  const title = chapter.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 md:p-0">
       <header>
        <h1 className="text-4xl font-bold font-headline">{title}</h1>
        <p className="text-muted-foreground capitalize">
          NEET Preparation Module | {subject}
        </p>
      </header>
      <Card>
        <CardContent className="p-6 md:p-8">
            <SimpleMarkdown content={fs.readFileSync(path.join(process.cwd(), 'content', 'neet', subject, `${chapter}.md`), 'utf8')} />
        </CardContent>
      </Card>
    </div>
  );
}
