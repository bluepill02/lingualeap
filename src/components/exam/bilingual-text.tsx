
'use client';

import * as React from 'react';
import { MarkdownRenderer } from './markdown-renderer';

interface BilingualTextProps {
  english: string;
  tamil?: string;
  className?: string;
}

export const BilingualText: React.FC<BilingualTextProps> = ({ english, tamil, className }) => {
  return (
    <div className={className}>
      <MarkdownRenderer>{english}</MarkdownRenderer>
      {tamil && (
        <div className="text-accent italic text-sm mt-1">
            <MarkdownRenderer>{`(${tamil})`}</MarkdownRenderer>
        </div>
      )}
    </div>
  );
};
