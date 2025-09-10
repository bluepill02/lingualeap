
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
