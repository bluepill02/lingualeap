

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  streak: number;
  language: string;
  timezone: string;
  isPro: boolean;
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced';
  goals: string[];
  persona: string;
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
  id:string;
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
    level: 'Foundations' | 'Intermediate' | 'Advanced';
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
    sentenceRoman?: string;
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

export interface SyllabusMapping {
    topic: string;
    tnBoardChapter: string;
    ncertReference: string;
    notes: string;
}

export interface FBDstep {
    body: string;
    forces: { 
        name: string, 
        direction: 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right' | 'inward' | 'outward',
        showComponents?: boolean 
    }[];
    isAngled?: boolean;
    context?: string;
}


export interface WorkedExample {
    title: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    problem: string;
    fbd?: FBDstep[];
    solutionSteps: {
        step: number;
        explanation: string;
        calculation?: string;
    }[];
    neetHack: string;
    commonPitfall: string;
}


export interface MCQ {
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    neetFrequency?: number; // 1 (low) to 5 (high)
}

export interface AssertionReason {
    assertion: string;
    reason: string;
    answer: 'A' | 'B' | 'C' | 'D' | 'E';
    explanation: string;
}

export interface MatchTheColumns {
    column1: string[];
    column2: string[];
    answer: string;
    explanation?: string;
}

export interface KeyFormula {
    formula: string;
    description: string;
}

export interface KeyDiagram {
    title: string;
    description: string;
    diagram?: string;
    fbd?: FBDstep;
}

export interface NeetModule {
    id: string;
    title: string;
    chapter: string;
    subject: 'Physics' | 'Chemistry' | 'Biology';
    learningObjectives: string[];
    prerequisites: string[];
    syllabusMapping?: SyllabusMapping[];
    conceptOverview?: string;
    tamilConnection?: string;
    culturalContext?: string;
    conceptNotes: string;
    workedExamples: WorkedExample[];
    mcqs: MCQ[];
    assertionReasons: AssertionReason[];
    matchTheColumns: MatchTheColumns[];
    keyFormulasAndDiagrams?: {
        formulas: KeyFormula[];
        diagrams: KeyDiagram[];
    };
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
    syllabusMapping?: SyllabusMapping[];
    workedExamples?: {
        problem: string;
        steps: {
            step: number;
            explanation: string;
            calculation?: string;
        }[];
        answer: string;
        tip: string;
    }[];
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

export interface LiveClass {
  id: string;
  topic: string;
  description: string;
  instructor: string;
  instructorAvatar: string;
  startTime: string;
  endTime: string;
}

    
