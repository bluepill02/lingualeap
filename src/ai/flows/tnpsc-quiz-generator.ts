
'use server';
/**
 * @fileOverview An AI flow for generating TNPSC-specific practice questions.
 * This is similar to the NEET generator but tailored for TNPSC's syllabus and question patterns.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { NeetQuizGeneratorInputSchema, NeetQuizGeneratorOutputSchema, NeetQuizGeneratorInput, NeetQuizGeneratorOutput } from '@/lib/types';

// We can reuse the NEET schemas for input and output as they are structurally identical.
// The real difference will be in the prompt content.
export const TnpscQuizGeneratorInputSchema = NeetQuizGeneratorInputSchema.extend({
    subject: z.enum(['History', 'Polity', 'Geography', 'Economy', 'General Science']),
});
export type TnpscQuizGeneratorInput = z.infer<typeof TnpscQuizGeneratorInputSchema>;


export async function generateTnpscQuiz(input: TnpscQuizGeneratorInput): Promise<NeetQuizGeneratorOutput> {
  return tnpscQuizGeneratorFlow(input);
}

const prompt = ai.definePrompt({
    name: 'tnpscQuizGeneratorPrompt',
    input: { schema: TnpscQuizGeneratorInputSchema },
    output: { schema: NeetQuizGeneratorOutputSchema },
    prompt: `You are an expert content creator for the Tamil Nadu Public Service Commission (TNPSC) competitive exams, specializing in the subject of {{{subject}}}.
Your task is to generate a set of high-quality multiple-choice questions (MCQs) based on the user's request.

**Instructions:**
1.  **Language**: The entire quiz (question, options, answer, and explanation) MUST be generated in the following language: **{{{language}}}**.
2.  **Topic**: The questions must be strictly based on the chapter or topic: **"{{{chapter}}}"**. The questions should reflect the depth and style commonly found in TNPSC Group 1 and Group 2 exams.
3.  **Quantity**: Generate exactly **{{{numQuestions}}}** questions.
4.  **Difficulty**: The questions should be of **{{{difficulty}}}** difficulty level, suitable for TNPSC aspirants.
5.  **Format**: For each question, provide:
    *   A clear and unambiguous question.
    *   Exactly four distinct options.
    *   The single correct answer.
    *   A detailed, step-by-step explanation for the solution, referencing concepts relevant to the TNPSC syllabus.

Generate the quiz now.
`,
});


const tnpscQuizGeneratorFlow = ai.defineFlow(
  {
    name: 'tnpscQuizGeneratorFlow',
    inputSchema: TnpscQuizGeneratorInputSchema,
    outputSchema: NeetQuizGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate TNPSC quiz.');
    }
    return output;
  }
);
