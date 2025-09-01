
export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  streak: number;
  language: string;
  timezone: string;
  isPro: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  flashcardIds: string[];
}

export interface Flashcard {
  id: string;
  word: string;
  translation: string;
  phonetic: string;
  audioUrl: string;
  imageUrl: string;
  // FSRS-like parameters
  stability: number;
  difficulty: number;
  interval: number;
  lastReviewed: string;
  nextDue: string;
  lessonId: string;
}

export interface ReviewLog {
  id: string;
  userId: string;
  flashcardId: string;
  rating: 'forgot' | 'hard' | 'good' | 'easy';
  reviewedAt: string;
}

export interface LessonDeck {
    id: string;
    title: string;
    description: string;
    lessons: { id: string; title: string; duration: string }[];
}

export interface MicroLesson {
    id: string;
    title: string;
    deckId: string;
    vocabulary: {
        word: string;
        romanization: string;
        definition: string;
        ipa: string;
    }[];
    dialogue: {
        speaker: 'Customer' | 'Server';
        line: string;
    }[];
    culturalTip: string;
    quizzes: (MultipleChoiceQuiz | FillInTheBlankQuiz)[];
    followUp: string;
}

interface BaseQuiz {
    type: 'multiple-choice' | 'fill-in-the-blank';
    question: string;
}

export interface MultipleChoiceQuiz extends BaseQuiz {
    type: 'multiple-choice';
    options: string[];
    answer: string;
}

export interface FillInTheBlankQuiz extends BaseQuiz {
    type: 'fill-in-the-blank';
    answer: string;
}

// Exam Prep Types
export interface VocabEntry {
    word: string;
    romanization: string;
    definition: string;
    partOfSpeech: string;
    sentence: string;
    sentenceRoman: string;
    sentenceTranslation: string;
}

export interface ExamQuizQuestion {
    question: string;
    options?: string[];
    answer: string;
    type: 'multiple-choice' | 'fill-in-the-blank';
}

export interface ErrorAnalysisItem {
    pitfall: string;
    tip: string;
}

export interface ExamModule {
    id: string;
    title: string;
    examName: string;
    language: string;
    category: string;
    vocabulary: VocabEntry[];
    quizzes: ExamQuizQuestion[];
    errorAnalysis: ErrorAnalysisItem[];
}

export interface CompanionCircle {
    id: string;
    members: {
        id: string;
        name: string;
        avatarUrl: string;
    }[];
    leaderId: string;
}
