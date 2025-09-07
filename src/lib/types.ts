
import { z } from 'genkit';

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  streak: number;
  xp: number;
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
    mappingDescription: string;
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
    titleTamil?: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    problem: string;
    problemTamil?: string;
fbd?: FBDstep[];
    solutionSteps: {
        step: number;
        explanation: string;
        explanationTamil?: string;
        calculation?: string;
    }[];
    neetHack?: string;
    neetHackTamil?: string;
    commonPitfall?: string;
    commonPitfallTamil?: string;
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
    neetFrequency?: number;
}

export interface MatchTheColumns {
    column1: string[];
    column2: string[];
    answer: string;
    explanation?: string;
    neetFrequency?: number;
}

export interface KeyFormula {
    formula: string;
    description: string;
    descriptionTamil?: string;
}

export interface KeyDiagram {
    title: string;
    description: string;
    diagram?: string;
fbd?: FBDstep;
}

export interface BilingualContent {
    english: string;
    tamil?: string;
}

export interface ConceptNote {
    heading: BilingualContent;
    content: (BilingualContent | string)[];
}


export interface ValidationReport {
  check: string;
  status: 'pass' | 'fail';
  message: string;
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
    
    // Subject-specific learning content
    conceptNotes?: (ConceptNote | { english: string; tamil?: string; })[]; // For Physics/Chem
    stateBoardGaps?: string[];      // For Bio
    extraNeetConcepts?: string[];   // For Bio
    ncertReadingGuide?: string[];   // For Bio

    workedExamples: WorkedExample[];
    mcqs: MCQ[];
    assertionReasons: AssertionReason[];
    matchTheColumns: MatchTheColumns[];
    keyFormulasAndDiagrams?: {
        formulas: KeyFormula[];
        diagrams: KeyDiagram[];
    };
    keyTakeaways?: string[];
    mnemonics?: { text: string; tamil: string }[];
    neetTips?: { text: string; tamil: string }[];
    nextChapter?: { title: string; titleTamil: string; };
    studentTip?: { english: string; tamil: string; };
    peerDiscussion?: { english: string; tamil: string; };
    validationReport?: ValidationReport[];
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

export interface LessonPlanWeek {
  week: number;
  topic: string;
  status: 'locked' | 'in-progress' | 'completed';
  tasks: {
    id: 'learn' | 'practice' | 'reflect';
    label: string;
    completed: boolean;
  }[];
}

export interface CompanionCircle {
    id: string;
    name: string;
    nameTamil: string;
    description: string;
    memberCount: number;
    posts?: number;
    resources?: number;
    type: 'Mentor-led' | 'Peer Study';
    subject: string;
    difficulty: 'Foundation' | 'Bridge' | 'Core';
    format: 'Chat' | 'Live Session' | 'Resource Hub';
    language: 'English' | 'Tamil' | 'Multi Language';
    members: {
        id: string;
        name: string;
        avatarUrl: string;
    }[];
    groupNorms?: string[];
    upcomingEvents?: string[];
    lessonPlan?: LessonPlanWeek[];
}

export interface PostComment {
    id: string;
    authorId: string;
    authorName: string;
    authorAvatarUrl: string;
    content: string;
    createdAt: string; // ISO string
}

export type ReactionType = 'madeMeSmile' | 'helpful' | 'interesting' | 'mentorApproved';

export interface CirclePost {
    id: string;
    circleId: string;
    authorId: string;
    authorName: string;
    authorAvatarUrl: string;
    content: string;
    createdAt: string; // ISO string
    isPinned?: boolean;
    reactions: {
        madeMeSmile: string[];
        helpful: string[];
        interesting: string[];
        mentorApproved?: string[];
    };
    comments: PostComment[];
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

export interface CalendarEvent {
    id: string;
    title: string;
    date: Date;
    type: 'peer-study' | 'mentor-session' | 'live-class' | 'deadline';
    group?: string;
}


export const AnalyzeImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of an object, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  targetLanguage: z.string().describe('The language to translate the object name into.'),
});
export type AnalyzeImageInput = z.infer<typeof AnalyzeImageInputSchema>;

export const AnalyzeImageOutputSchema = z.object({
    objectName: z.string().describe('The name of the identified object in English.'),
    translatedWord: z.string().describe('The translated name of the object in the target language.'),
    romanization: z.string().describe('A romanized (phonetic) spelling of the translated word.'),
    quiz: z.object({
        question: z.string().describe('A simple multiple-choice question about the object.'),
        options: z.array(z.string()).min(4).max(4).describe('An array of exactly four options.'),
        answer: z.string().describe('The correct answer from the options.'),
    }),
    mnemonic: z.string().describe('A clever mnemonic or short sentence to help remember the translated word.'),
});
export type AnalyzeImageOutput = z.infer<typeof AnalyzeImageOutputSchema>;

export const PersonalTutorInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })),
  message: z.string().describe("The user's latest message."),
  language: z.string().describe('The language the user is learning.'),
});
export type PersonalTutorInput = z.infer<typeof PersonalTutorInputSchema>;

export const PersonalTutorOutputSchema = z.object({
  response: z.string(),
});
export type PersonalTutorOutput = z.infer<typeof PersonalTutorOutputSchema>;

export const PronunciationAnalysisInputSchema = z.object({
  audioDataUri: z.string().describe("The user's pronunciation of a word, as a data URI."),
  correctWord: z.string().describe('The correct word the user was trying to pronounce.'),
  language: z.string().describe('The language of the word.'),
});
export type PronunciationAnalysisInput = z.infer<typeof PronunciationAnalysisInputSchema>;

export const PronunciationAnalysisOutputSchema = z.object({
    transcribedText: z.string().describe("The text transcribed from the user's audio."),
    isCorrect: z.boolean().describe('Whether the transcription exactly matches the correct word (case-insensitive).'),
    feedback: z.string().describe('Short, encouraging, and helpful feedback for the user.'),
});
export type PronunciationAnalysisOutput = z.infer<typeof PronunciationAnalysisOutputSchema>;

export const MissionSubmissionInputSchema = z.object({
    concept: z.string(),
    script: z.string(),
    diagramDescription: z.string(),
    mcqs: z.array(z.object({
        question: z.string(),
        options: z.array(z.string()),
        correctAnswer: z.string()
    }))
});
export type MissionSubmissionInput = z.infer<typeof MissionSubmissionInputSchema>;

export const MissionFeedbackOutputSchema = z.object({
    clarityFeedback: z.string(),
    accuracyFeedback: z.string(),
    analogySuggestion: z.string(),
    teachingStars: z.number().min(0).max(5)
});
export type MissionFeedbackOutput = z.infer<typeof MissionFeedbackOutputSchema>;

// AI Related types
export const NeetQuizQuestionSchema = z.object({
  question: z.string().describe('The quiz question, formatted with LaTeX for equations if necessary.'),
  options: z.array(z.string()).min(4).max(4).describe('An array of exactly four options for the quiz.'),
  answer: z.string().describe('The correct answer from the options.'),
  explanation: z.string().describe('A detailed step-by-step explanation for the correct answer.'),
});

export const NeetQuizGeneratorInputSchema = z.object({
  subject: z.enum(['Physics', 'Chemistry', 'Biology']).describe('The subject for the quiz.'),
  chapter: z.string().describe('The specific chapter or topic for the questions.'),
  numQuestions: z.number().min(1).max(10).describe('The number of questions to generate.'),
  difficulty: z.enum(['Easy', 'Medium', 'Hard']).describe('The desired difficulty level of the questions.'),
  language: z.enum(['English', 'Tamil']).describe('The language for the generated quiz.'),
});
export type NeetQuizGeneratorInput = z.infer<typeof NeetQuizGeneratorInputSchema>;

export const NeetQuizGeneratorOutputSchema = z.object({
    quizzes: z.array(NeetQuizQuestionSchema),
});
export type NeetQuizGeneratorOutput = z.infer<typeof NeetQuizGeneratorOutputSchema>;

export const TnpscQuizGeneratorInputSchema = NeetQuizGeneratorInputSchema.extend({
    subject: z.enum(['History', 'Polity', 'Geography', 'Economy', 'General Science', 'Aptitude', 'Current Affairs', 'Language']),
});
export type TnpscQuizGeneratorInput = z.infer<typeof TnpscQuizGeneratorInputSchema>;

export const FlashcardSchema = z.object({
  front: z.string().describe('The front of the flashcard, containing a key term, concept, or question. Should be concise.'),
  back: z.string().describe('The back of the flashcard, containing the definition, explanation, or answer. Should be clear and detailed.'),
});

export const NeetFlashcardGeneratorInputSchema = NeetQuizGeneratorInputSchema.extend({
    numFlashcards: z.number().min(1).max(10).describe('The number of flashcards to generate.'),
}).omit({ numQuestions: true });

export type NeetFlashcardGeneratorInput = z.infer<typeof NeetFlashcardGeneratorInputSchema>;

export const NeetFlashcardGeneratorOutputSchema = z.object({
    flashcards: z.array(FlashcardSchema),
});
export type NeetFlashcardGeneratorOutput = z.infer<typeof NeetFlashcardGeneratorOutputSchema>;

    
