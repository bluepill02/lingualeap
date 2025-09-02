
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// NOTE: This is a placeholder for a real markdown rendering solution.
function SimpleMarkdown({ content }: { content: string }) {
    // This is a basic parser. A real app would use a more robust library
    // like 'marked' or 'react-markdown' with plugins.
    const sections = content.split(/^(?=## |### )/m);

    const parseSection = (section: string) => {
        if (section.startsWith('### 5. NEET-Style Multiple Choice Questions (MCQs)')) {
            const lines = section.split('\n').filter(line => line.trim() !== '');
            const title = lines.shift();
            const questions: { question: string; solution: string }[] = [];
            
            for (let i = 0; i < lines.length; i++) {
                if (lines[i].match(/^\d+\./)) {
                    const question = lines[i];
                    let solution = '';
                    if (i + 1 < lines.length && lines[i+1].startsWith('**Solution:**')) {
                        solution = lines[i+1];
                        i++; // Skip the solution line in the next iteration
                    }
                    questions.push({ question, solution });
                }
            }

            return (
                <div key={title}>
                    <h3 className="text-xl font-bold mt-4 mb-2">{title?.replace('###', '').trim()}</h3>
                    <ul className="space-y-4">
                        {questions.map((q, index) => (
                            <li key={index} className="p-3 bg-muted/50 rounded-md">
                                <p className="font-medium">{q.question}</p>
                                <p className="text-sm text-green-400">{q.solution}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        const htmlContent = section
            .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold font-headline my-4">$1</h1>')
            .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold font-headline mt-6 mb-3">$1</h2>')
            .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>')
            .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mt-3 mb-1">$1</h4>')
            .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
            .replace(/\*(.*)\*/gim, '<em>$1</em>')
            .replace(/```([\s\S]*?)```/gim, '<pre class="bg-muted p-4 rounded-md overflow-x-auto text-sm font-mono my-4"><code>$1</code></pre>')
            .replace(/`([^`]+)`/gim, '<code class="bg-muted px-1 rounded-sm font-mono text-sm">$1</code>')
            .replace(/^- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
            .replace(/\n/g, '<br />');

        return <div key={section.substring(0, 20)} className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    };

    return (
        <div>
            {sections.map(parseSection)}
        </div>
    );
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
      <Card>
        <CardContent className="p-6 md:p-8">
            <SimpleMarkdown content={fileContent} />
        </CardContent>
      </Card>
    </div>
  );
}
