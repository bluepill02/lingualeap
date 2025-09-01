'use server';
/**
 * @fileOverview An AI flow for generating custom IELTS exam preparation modules.
 *
 * - generateIeltsModule - A function that creates a markdown-based study guide.
 * - GenerateIeltsModuleInput - The input type for the function.
 * - GenerateIeltsModuleOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const GenerateIeltsModuleInputSchema = z.object({
  variant: z.enum(['Academic', 'General Training']),
});
export type GenerateIeltsModuleInput = z.infer<typeof GenerateIeltsModuleInputSchema>;

export const GenerateIeltsModuleOutputSchema = z.object({
  markdownContent: z.string().describe('The complete IELTS study module in Markdown format.'),
});
export type GenerateIeltsModuleOutput = z.infer<typeof GenerateIeltsModuleOutputSchema>;


export async function generateIeltsModule(input: GenerateIeltsModuleInput): Promise<GenerateIeltsModuleOutput> {
  return generateIeltsModuleFlow(input);
}


const prompt = ai.definePrompt({
  name: 'ieltsModuleGeneratorPrompt',
  input: { schema: GenerateIeltsModuleInputSchema },
  output: { schema: GenerateIeltsModuleOutputSchema },
  prompt: `You are an expert IELTS tutor. Your task is to generate a comprehensive, well-structured, and helpful study module in Markdown format for a student preparing for the IELTS exam.

The module should be tailored to the specified exam variant: **{{{variant}}}**.

Please include the following sections in the Markdown output:

1.  **Title:** A clear title, like "IELTS {{{variant}}} Preparation Module".
2.  **Introduction:** A brief overview of the {{{variant}}} test.
3.  **Vocabulary List:**
    *   A table with 5-7 essential vocabulary words relevant to the {{{variant}}} test.
    *   Columns: Word, Part of Speech, Definition, and a Sample Sentence.
4.  **Practice Quiz:**
    *   Create a short quiz with 3-5 questions to test the vocabulary.
    *   Include a mix of multiple-choice and fill-in-the-blank questions.
    *   Provide an answer key at the end of the quiz section.
5.  **Key Strategies:**
    *   Provide 2-3 actionable tips or strategies for a specific part of the test (e.g., Reading, Writing Task 1, Speaking Part 2). Make them relevant to the {{{variant}}}.
6.  **Error Analysis:**
    *   Describe 1-2 common pitfalls or mistakes students make in the {{{variant}}} test.
    *   For each pitfall, provide a concrete tip on how to avoid it.

Ensure the entire output is a single, valid Markdown string.
`,
});

const generateIeltsModuleFlow = ai.defineFlow(
    {
      name: 'generateIeltsModuleFlow',
      inputSchema: GenerateIeltsModuleInputSchema,
      outputSchema: GenerateIeltsModuleOutputSchema,
    },
    async (input) => {
        const { output } = await prompt(input);
        return output!;
    }
);
