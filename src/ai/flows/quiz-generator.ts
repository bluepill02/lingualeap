
'use server';
/**
 * @fileOverview An AI flow for generating quizzes on demand based on a user's prompt.
 *
 * - generateQuiz - A function that handles the quiz generation.
 * - QuizGeneratorInput - The input type for the function.
 * - QuizGeneratorOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const QuizQuestionSchema = z.object({
  question: z.string().describe('The quiz question.'),
  options: z.array(z.string()).min(4).max(4).describe('An array of exactly four options for the quiz.'),
  answer: z.string().describe('The correct answer from the options.'),
});

export const QuizGeneratorInputSchema = z.object({
  prompt: z
    .string()
    .describe(
      "The user's request for a quiz, e.g., '10 NEET-physics problems on optics' or '5 questions on the Mughal empire for a history exam'."
    ),
});
export type QuizGeneratorInput = z.infer<typeof QuizGeneratorInputSchema>;

export const QuizGeneratorOutputSchema = z.object({
    title: z.string().describe("A suitable title for the generated quiz."),
    quizzes: z.array(QuizQuestionSchema),
});
export type QuizGeneratorOutput = z.infer<typeof QuizGeneratorOutputSchema>;

export async function generateQuiz(input: QuizGeneratorInput): Promise<QuizGeneratorOutput> {
  return quizGeneratorFlow(input);
}

const prompt = ai.definePrompt({
    name: 'quizGeneratorPrompt',
    input: { schema: QuizGeneratorInputSchema },
    output: { schema: QuizGeneratorOutputSchema },
    prompt: `You are an expert quiz creator for competitive exams and language learning.
A user has requested a quiz based on the following prompt: "{{{prompt}}}"

Your task is to:
1. Generate a set of high-quality, multiple-choice questions based on the user's prompt.
2. For each question, provide exactly four distinct options.
3. For each question, clearly identify the single correct answer.
4. Create a suitable title for the quiz based on the prompt.
5. Ensure the questions and options are accurate and relevant to the user's request.

Generate the quiz now.
`,
});


const quizGeneratorFlow = ai.defineFlow(
  {
    name: 'quizGeneratorFlow',
    inputSchema: QuizGeneratorInputSchema,
    outputSchema: QuizGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate quiz.');
    }
    return output;
  }
);
