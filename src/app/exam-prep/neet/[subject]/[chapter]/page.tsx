
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';

// This function generates static paths for all subject/chapter combinations
export async function generateStaticParams() {
  const subjects = ['physics', 'chemistry', 'biology'];
  const allParams = [];

  for (const subject of subjects) {
    const contentDir = path.join(process.cwd(), 'content', 'neet', subject);
    try {
      const filenames = fs.readdirSync(contentDir);
      for (const filename of filenames) {
        allParams.push({
          subject: subject,
          chapter: path.basename(filename, '.md'),
        });
      }
    } catch (error) {
      // Directory for a subject might not exist yet, ignore error
      console.warn(`Warning: Could not read directory for subject: ${subject}`);
    }
  }

  return allParams;
}

// Function to get the content for a specific chapter
const getChapterContent = (subject: string, chapter: string) => {
  const filePath = path.join(process.cwd(), 'content', 'neet', subject, `${chapter}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  return content;
};

// This is a simple markdown parser. In a real app, you'd use a more robust library like 'marked' or 'react-markdown'.
function SimpleMarkdown({ content }: { content: string }) {
  // Simple regex to handle markdown-like syntax for now
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
    .replace(/\n/g, '<br />'); // Replace newlines with <br> for spacing

  return <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default function NeetChapterPage({ params }: { params: { subject: string; chapter: string } }) {
  const { subject, chapter } = params;
  const content = getChapterContent(subject, chapter);

  if (!content) {
    notFound();
  }
  
  const title = chapter.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

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
            <SimpleMarkdown content={content} />
        </CardContent>
      </Card>
    </div>
  );
}
