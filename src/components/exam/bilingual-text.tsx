
'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { cn } from '@/lib/utils';
import { MarkdownRenderer } from './markdown-renderer';

interface BilingualTextProps {
  english?: string | null;
  tamil?: string | null;
  wrapperClass?: string;
  englishClass?: string;
  tamilClass?: string;
}

export const BilingualText: React.FC<BilingualTextProps> = ({
  english,
  tamil,
  wrapperClass,
  englishClass,
  tamilClass,
}) => {
  if (!english && !tamil) return null;

  return (
    <div className={wrapperClass}>
      {english && (
        <div className={englishClass}>
          <MarkdownRenderer>{english}</MarkdownRenderer>
        </div>
      )}
      {tamil && (
        <div className={cn('text-yellow-400/90 italic text-sm mt-1', tamilClass)}>
          <MarkdownRenderer>{tamil}</MarkdownRenderer>
        </div>
      )}
    </div>
  );
};
