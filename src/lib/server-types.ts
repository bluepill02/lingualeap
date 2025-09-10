
import { z } from 'genkit';
import { languageMap } from './types';

// This file contains Zod schemas that are strictly for server-side validation.
// They depend on Genkit's Zod instance and should not be imported into client components.

export const PersonalTutorInputSchema = z.object({
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })),
  message: z.string().describe("The user's latest message."),
  language: z.nativeEnum(languageMap),
});

export const PersonalTutorOutputSchema = z.object({
  response: z.string(),
});

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

export const MissionFeedbackOutputSchema = z.object({
    clarityFeedback: z.string(),
    accuracyFeedback: z.string(),
    analogySuggestion: z.string(),
    teachingStars: z.number().min(0).max(5)
});

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

export const NeetQuizGeneratorOutputSchema = z.object({
    title: z.string().optional().describe("A suitable title for the generated quiz."),
    quizzes: z.array(NeetQuizQuestionSchema),
});

export const TnpscQuizGeneratorInputSchema = NeetQuizGeneratorInputSchema.extend({
    subject: z.enum(['History', 'Polity', 'Geography', 'Economy', 'General Science', 'Aptitude', 'Current Affairs', 'Language']),
});

export const FlashcardSchema = z.object({
  front: z.string().describe('The front of the flashcard, containing a key term, concept, or question. Should be concise.'),
  back: z.string().describe('The back of the flashcard, containing the definition, explanation, or answer. Should be clear and detailed.'),
});

export const NeetFlashcardGeneratorInputSchema = NeetQuizGeneratorInputSchema.extend({
    numFlashcards: z.number().min(1).max(10).describe('The number of flashcards to generate.'),
}).omit({ numQuestions: true });

export const NeetFlashcardGeneratorOutputSchema = z.object({
    flashcards: z.array(FlashcardSchema),
});

export const SpeakInputSchema = z.string();

export const SpeakOutputSchema = z.object({
  media: z.string().describe('The generated audio as a data URI.'),
});

export const AnalyzeImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of an object, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  targetLanguage: z.string().describe('The language to translate the object name into.'),
});

export const AnalyzeImageOutputSchema = z.object({
    isObjectFound: z.boolean().describe("Set to true if a specific object was identified, false otherwise."),
    objectName: z.string().optional().describe('The name of the identified object in English.'),
    translatedWord: z.string().optional().describe('The translated name of the object in the target language.'),
    romanization: z.string().optional().describe('A romanized (phonetic) spelling of the translated word.'),
    quiz: z.object({
        question: z.string().describe('A simple multiple-choice question about the object.'),
        options: z.array(z.string()).min(4).max(4).describe('An array of exactly four options.'),
        answer: z.string().describe('The correct answer from the options.'),
    }).optional(),
    mnemonic: z.string().optional().describe('A clever mnemonic or short sentence to help remember the translated word.'),
});


export const InterviewQuestionInputSchema = z.object({
  jobRole: z.string().describe('The job role the user is preparing for, e.g., "Software Engineer".'),
});

export const InterviewQuestionOutputSchema = z.object({
  question: z.string().describe("A single, common, but insightful behavioral interview question for the specified job role. It should be a question that is likely to be asked in a real interview."),
});


const AnswerRecordSchema = z.object({
    question: z.string().describe('The interview question that was asked.'),
    answer: z.string().describe("The user's spoken answer to the question."),
});

export const InterviewFeedbackInputSchema = z.object({
  jobRole: z.string().optional().describe("The specific job role the user is preparing for, e.g., 'Software Engineer'."),
  userPersona: z.string().optional().describe("The user's learning persona, e.g., 'The Career Climber'. This should guide the tone of the feedback."),
  sessionHistory: z.array(AnswerRecordSchema).describe("An array of all questions asked and the user's answers for the entire session.")
});

const STARAnalysisSchema = z.object({
  situation: z.string().optional().describe("The specific part of the user's answer that describes the 'Situation'. This should be an EXACT quote from the user's answer, if present."),
  task: z.string().optional().describe("The specific part of the user's answer that describes the 'Task'. This should be an EXACT quote from the user's answer, if present."),
  action: z.string().optional().describe("The specific part of the user's answer that describes the 'Action'. This should be an EXACT quote from the user's answer, if present."),
  result: z.string().optional().describe("The specific part of the user's answer that describes the 'Result'. This should be an EXACT quote from the user's answer, if present."),
  situationFeedback: z.string().describe("Feedback on how well the user established the context."),
  taskFeedback: z.string().describe("Feedback on how well the user explained their specific responsibility."),
  actionFeedback: z.string().describe("Feedback on the description of the actions taken. Were they specific and impactful?"),
  resultFeedback: z.string().describe("Feedback on the outcome. Was it quantified? Did it show impact?"),
});

const IndividualFeedbackSchema = z.object({
    question: z.string().describe("The original question this feedback pertains to."),
    starAnalysis: STARAnalysisSchema,
    keywordFeedback: z.string().describe("Analyzes the use of keywords relevant to the job role. Suggests powerful action verbs and industry-specific terms."),
    confidenceScore: z.number().min(1).max(10).describe("A score from 1 to 10 representing the perceived confidence of the answer, based on clarity, pace, and conviction."),
});

const OverallFeedbackSchema = z.object({
    summary: z.string().describe("A brief, encouraging overview of the user's performance across the entire session."),
    strengths: z.string().describe("Two to three key strengths the user demonstrated consistently across their answers."),
    areasForImprovement: z.string().describe("The two or three most critical areas the user should focus on for improvement, based on patterns observed across all answers."),
});

export const InterviewFeedbackOutputSchema = z.object({
  overallFeedback: OverallFeedbackSchema,
  detailedFeedback: z.array(IndividualFeedbackSchema),
});