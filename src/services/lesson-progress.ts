
'use client';

const PROGRESS_KEY = 'lingualeap_lesson_progress';

// Helper function to get progress from localStorage
export function getLessonProgress(): string[] {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const savedProgress = window.localStorage.getItem(PROGRESS_KEY);
    return savedProgress ? JSON.parse(savedProgress) : [];
  } catch (error) {
    console.error("Failed to parse lesson progress from localStorage:", error);
    return [];
  }
}

// Helper function to save progress to localStorage
export function saveLessonProgress(completedLessonId: string): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    const currentProgress = getLessonProgress();
    if (!currentProgress.includes(completedLessonId)) {
      const newProgress = [...currentProgress, completedLessonId];
      window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(newProgress));
    }
  } catch (error) {
    console.error("Failed to save lesson progress to localStorage:", error);
  }
}
