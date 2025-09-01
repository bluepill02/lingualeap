'use client';

import { useState, useCallback } from 'react';
import { generateIeltsModule } from '@/ai/flows/ielts-module-generator';

export function useExamModuleGenerator() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string>('');

  const generate = useCallback(
    async (variant: 'Academic' | 'General Training') => {
      setLoading(true);
      setError(null);
      try {
        const { markdownContent } = await generateIeltsModule({ variant });
        setResult(markdownContent);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { loading, error, result, generate };
}
