
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
  // Use an inline style to force the color override. The HSL value corresponds to the theme's teal color.
  const combinedText = tamil 
    ? `${english} <span style="color: hsl(164 52% 52%)" class="ml-2">*(${tamil})*</span>` 
    : english;

  return (
    <div className={cn('prose dark:prose-invert max-w-none [&>p]:inline', className)}>
      <MarkdownRenderer>{combinedText}</MarkdownRenderer>
    </div>
  );
};
