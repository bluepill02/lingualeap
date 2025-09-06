
'use server';
/**
 * @fileOverview An AI flow for generating NEET-specific practice questions on demand.
 *
 * - generateNeetQuiz - A function that handles the quiz generation.
 * - NeetQuizGeneratorInput - The input type for the function.
 * - NeetQuizGeneratorOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const NeetQuizQuestionSchema = z.object({
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

export async function generateNeetQuiz(input: NeetQuizGeneratorInput): Promise<NeetQuizGeneratorOutput> {
  return neetQuizGeneratorFlow(input);
}

const prompt = ai.definePrompt({
    name: 'neetQuizGeneratorPrompt',
    input: { schema: NeetQuizGeneratorInputSchema },
    output: { schema: NeetQuizGeneratorOutputSchema },
    prompt: `You are an expert content creator for the NEET competitive exam in India, specializing in the subject of {{{subject}}}.
Your task is to generate a set of high-quality multiple-choice questions (MCQs) based on the user's request.

**Instructions:**
1.  **Language**: The entire quiz (question, options, answer, and explanation) MUST be generated in the following language: **{{{language}}}**.
2.  **Topic**: The questions must be strictly based on the chapter: **"{{{chapter}}}"**.
3.  **Quantity**: Generate exactly **{{{numQuestions}}}** questions.
4.  **Difficulty**: The questions should be of **{{{difficulty}}}** difficulty level, suitable for NEET aspirants.
5.  **Format**: For each question, provide:
    *   A clear and unambiguous question. Use LaTeX for all mathematical formulas and symbols.
    *   Exactly four distinct options.
    *   The single correct answer.
    *   A detailed, step-by-step explanation for the solution.

Generate the quiz now.
`,
});


const neetQuizGeneratorFlow = ai.defineFlow(
  {
    name: 'neetQuizGeneratorFlow',
    inputSchema: NeetQuizGeneratorInputSchema,
    outputSchema: NeetQuizGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate NEET quiz.');
    }
    return output;
  }
);
