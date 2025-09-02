
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

// A more robust function to parse and render markdown content
function renderMarkdownToReact(markdown: string) {
    if (!markdown) {
        return null;
    }

    const elements = [];
    const lines = markdown.split('\n');
    let inCodeBlock = false;
    let codeBlockContent = '';
    let language = '';

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        if (line.startsWith('```')) {
            if (inCodeBlock) {
                // End of a code block
                elements.push(
                    <pre key={`code-${i}`} className="bg-muted p-4 rounded-md text-sm whitespace-pre-wrap font-mono my-4 overflow-x-auto">
                        <code>{codeBlockContent}</code>
                    </pre>
                );
                codeBlockContent = '';
                inCodeBlock = false;
            } else {
                // Start of a new code block
                language = line.substring(3).trim();
                inCodeBlock = true;
            }
            continue;
        }

        if (inCodeBlock) {
            codeBlockContent += line + '\n';
            continue;
        }

        // Regex to find inline and block math
        const mathRegex = /(\${1,2})(.+?)\1/g;
        const parts = line.split(mathRegex);
        const lineElements = [];

        for (let j = 0; j < parts.length; j++) {
            if (j % 3 === 1) { // This is the delimiter ($ or $$)
                const isBlock = parts[j] === '$$';
                const mathContent = parts[j + 1];
                if (isBlock) {
                    lineElements.push(<BlockMath key={`${i}-${j}`}>{mathContent}</BlockMath>);
                } else {
                    lineElements.push(<InlineMath key={`${i}-${j}`}>{mathContent}</InlineMath>);
                }
                j += 1; // Skip the math content part
            } else if (parts[j]) {
                lineElements.push(parts[j]);
            }
        }
        
        const renderedLine = <React.Fragment key={i}>{lineElements}</React.Fragment>;

        if (line.startsWith('## ')) {
            elements.push(<h2 key={i} className="text-2xl font-bold mt-6 mb-4 border-b pb-2">{line.substring(3)}</h2>);
        } else if (line.startsWith('### ')) {
            elements.push(<h3 key={i} className="text-xl font-semibold mt-4 mb-2">{line.substring(4)}</h3>);
        } else if (line.startsWith('# ')) {
             elements.push(<h1 key={i} className="text-3xl font-bold mt-8 mb-6 border-b pb-2">{line.substring(2)}</h1>);
        } else if (line.match(/^\s{0,3}- /) || line.match(/^\s{0,3}\* /)) {
            elements.push(<li key={i} className="ml-5 list-disc my-1">{line.substring(line.search(/[-*]/) + 2)}</li>);
        } else if (line.match(/^\d+\./)) {
            elements.push(<p key={i} className="my-2">{renderedLine}</p>);
        } else if (line.match(/^[A-Z]\)/i)) {
            elements.push(<p key={i} className="ml-4 my-1 text-muted-foreground">{renderedLine}</p>);
        } else if (line.toLowerCase().startsWith('**solution:**') || line.toLowerCase().startsWith('**விடை:**')) {
            elements.push(<p key={i} className="mt-2 text-primary font-semibold">{renderedLine}</p>);
        } else if (line.trim() === '') {
            elements.push(<div key={i} className="h-4" />);
        } else {
            elements.push(<p key={i} className="my-2 leading-relaxed">{renderedLine}</p>);
        }
    }

     if (inCodeBlock) {
        elements.push(
            <pre key="code-end" className="bg-muted p-4 rounded-md text-sm whitespace-pre font-mono my-2 overflow-x-auto">
                <code>{codeBlockContent}</code>
            </pre>
        );
    }

    return elements;
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
      
      <div className="prose dark:prose-invert max-w-none">
        {renderMarkdownToReact(fileContent)}
      </div>

    </div>
  );
}
