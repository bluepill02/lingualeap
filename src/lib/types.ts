

import { FieldValue } from 'firebase/firestore';

// --- Plain TypeScript Types (Safe for Client & Server) ---

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
  createdAt?: any;
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
    mappingDescription?: string;
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
    answer: string;
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
    fbd?: Fbdstep;
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

    workedExamples?: WorkedExample[];
    mcqs?: MCQ[];
    assertionReasons?: AssertionReason[];
    matchTheColumns?: MatchTheColumns[];
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
    createdAt: string | FieldValue;
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
    circleId?: string;
    liveClassId?: string;
    missionId?: string;
    userIds?: string[];
}

export interface DashboardData {
    userData: User;
    flashcardStats: {
        mastered: number;
        dueToday: number;
        total: number;
    };
    lessons: Lesson[];
    companionCircle: CompanionCircle | null;
    myCirclesCount: number;
}

export type Language = 'en' | 'ta' | 'hi' | 'ml' | 'kn' | 'te';

export const languageMap: Record<Language, string> = {
    en: 'English',
    ta: 'Tamil',
    hi: 'Hindi',
    ml: 'Malayalam',
    kn: 'Kannada',
    te: 'Telugu',
};

export interface Message {
  role: 'user' | 'model';
  content: string;
}

export interface PersonalTutorInput {
  history: Message[];
  message: string;
  language: Language;
}

export interface PersonalTutorOutput {
  response: string;
}
export interface MissionSubmissionInput {
    concept: string;
    script: string;
    diagramDescription: string;
    mcqs: {
        question: string;
        options: string[];
        correctAnswer: string;
    }[];
}

export interface MissionFeedbackOutput {
    clarityFeedback: string;
    accuracyFeedback: string;
    analogySuggestion: string;
    teachingStars: number;
}
export interface NeetQuizGeneratorInput {
  subject: 'Physics' | 'Chemistry' | 'Biology';
  chapter: string;
  numQuestions: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  language: 'English' | 'Tamil';
}

export interface NeetQuizQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface NeetQuizGeneratorOutput {
    title?: string;
    quizzes: NeetQuizQuestion[];
}

export interface TnpscQuizGeneratorInput {
    subject: 'History' | 'Polity' | 'Geography' | 'Economy' | 'General Science' | 'Aptitude' | 'Current Affairs' | 'Language';
    chapter: string;
    numQuestions: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    language: 'English' | 'Tamil';
}
export interface FlashcardSchema {
  front: string;
  back: string;
}

export interface NeetFlashcardGeneratorInput extends Omit<NeetQuizGeneratorInput, 'numQuestions'> {
    numFlashcards: number;
}
export interface NeetFlashcardGeneratorOutput {
    flashcards: FlashcardSchema[];
}

export type SpeakInput = string;

export interface SpeakOutput {
  media: string;
}

export interface AnalyzeImageInput {
  photoDataUri: string;
  targetLanguage: string;
}

export interface AnalyzeImageOutput {
    isObjectFound: boolean;
    objectName?: string;
    translatedWord?: string;
    romanization?: string;
    quiz?: {
        question: string;
        options: string[];
        answer: string;
    };
    mnemonic?: string;
}

export interface InterviewQuestionInput {
    jobRole: string;
}

export interface InterviewQuestionOutput {
    question: string;
}

export interface AnswerRecord {
    question: string;
    answer: string;
}

export interface InterviewFeedbackInput {
  jobRole?: string;
  userPersona?: string;
  sessionHistory: AnswerRecord[];
}

export interface STARAnalysis {
  situation?: string;
  task?: string;
  action?: string;
  result?: string;
  situationFeedback: string;
  taskFeedback: string;
  actionFeedback: string;
  resultFeedback: string;
}

export interface IndividualFeedback {
    question: string;
    starAnalysis: STARAnalysis;
    keywordFeedback: string;
    confidenceScore: number;
}

export interface OverallFeedback {
    summary: string;
    strengths: string;
    areasForImprovement: string;
}

export interface InterviewFeedbackOutput {
  overallFeedback: OverallFeedback;
  detailedFeedback: IndividualFeedback[];
}

export interface StudyBuddyInput {
    currentUser: User;
    otherMembers: User[];
}

export interface StudyBuddyOutput {
    bestMatch?: {
        id: string;
        name: string;
        avatarUrl: string;
        reason: string;
    };
}
