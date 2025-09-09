
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
  const combinedText = tamil 
    ? `${english} <span class="tamil-text">(${tamil})</span>` 
    : english;

  return (
    <div className={cn('prose dark:prose-invert max-w-none [&>p]:inline', className)}>
      <MarkdownRenderer>{combinedText}</MarkdownRenderer>
    </div>
  );
};
