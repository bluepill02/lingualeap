
'use client';

import * as React from 'react';
import { MarkdownRenderer } from './markdown-renderer';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

interface BilingualTextProps {
  english: string;
  tamil?: string;
  className?: string;
  as?: 'p' | 'span';
}

export const BilingualText: React.FC<BilingualTextProps> = ({ english, tamil, className, as = 'p' }) => {
  const combinedText = tamil 
    ? `${english} <span class="tamil-text">(${tamil})</span>` 
    : english;

  const Comp = as === 'span' ? 'span' : 'div';

  return (
    <Comp className={cn('prose dark:prose-invert max-w-none [&>p]:inline [&>span]:inline', className)}>
      <MarkdownRenderer as={as}>{combinedText}</MarkdownRenderer>
    </Comp>
  );
};
