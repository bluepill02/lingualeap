
'use client';

import * as React from 'react';
import { MarkdownRenderer } from './markdown-renderer';
import { cn } from '@/lib/utils';

interface BilingualTextProps {
  english: string;
  tamil?: string;
  className?: string;
}

export const BilingualText: React.FC<BilingualTextProps> = ({ english, tamil, className }) => {
  // Combine English and Tamil text into a single string for inline rendering
  const combinedText = tamil 
    ? `${english} <span class="text-accent ml-2">*(${tamil})*</span>` 
    : english;

  return (
    <div className={cn('prose dark:prose-invert max-w-none text-foreground [&>p]:inline', className)}>
      <MarkdownRenderer>{combinedText}</MarkdownRenderer>
    </div>
  );
};
