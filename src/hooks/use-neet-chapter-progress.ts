
'use client';

import { useState, useEffect, useCallback, useTransition } from 'react';
import { getNeetChapterProgress, saveNeetChapterProgress } from '@/services/neet-progress-service';

export function useNeetChapterProgress(userId: string, chapterId: string) {
    const [completedSections, setCompletedSections] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        if (userId && chapterId) {
            getNeetChapterProgress(userId, chapterId)
                .then(sections => {
                    setCompletedSections(sections);
                })
                .catch(error => {
                    console.error("Failed to load progress:", error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [userId, chapterId]);

    const saveProgress = useCallback((sections: string[]) => {
        startTransition(() => {
            saveNeetChapterProgress(userId, chapterId, sections)
                .catch(error => {
                    console.error("Failed to save progress:", error);
                    // Optionally, implement a retry mechanism or user notification
                });
        });
    }, [userId, chapterId]);


    const toggleSection = useCallback((section: string) => {
        setCompletedSections(prevSections => {
            const newSections = prevSections.includes(section)
                ? prevSections.filter(s => s !== section)
                : [...prevSections, section];
            
            saveProgress(newSections);
            return newSections;
        });
    }, [saveProgress]);

    return {
        completedSections,
        toggleSection,
        isLoading,
        isSaving: isPending
    };
}
