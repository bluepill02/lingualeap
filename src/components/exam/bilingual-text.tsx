
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
  const bilingualContent = `${english}${tamil ? ` <span class="text-accent">*(${tamil})*</span>` : ''}`;

  return (
    <div className={cn('prose dark:prose-invert max-w-none text-foreground', className)}>
      <MarkdownRenderer>{bilingualContent}</MarkdownRenderer>
    </div>
  );
};
