
'use server';
/**
 * @fileOverview An AI flow for generating NEET-specific flashcards on demand.
 *
 * - generateNeetFlashcards - A function that handles the flashcard generation.
 */

import { ai } from '@/ai/genkit';
import type {
    NeetFlashcardGeneratorInput,
    NeetFlashcardGeneratorOutput
} from '@/lib/types';
import {
    NeetFlashcardGeneratorInputSchema,
    NeetFlashcardGeneratorOutputSchema
} from '@/lib/server-types';


export async function generateNeetFlashcards(input: NeetFlashcardGeneratorInput): Promise<NeetFlashcardGeneratorOutput> {
  return neetFlashcardGeneratorFlow(input);
}

const prompt = ai.definePrompt({
    name: 'neetFlashcardGeneratorPrompt',
    input: { schema: NeetFlashcardGeneratorInputSchema },
    output: { schema: NeetFlashcardGeneratorOutputSchema },
    prompt: `You are an expert content creator for the NEET competitive exam in India, specializing in the subject of {{{subject}}}.
Your task is to generate a set of high-quality flashcards to help students study.

**Instructions:**
1.  **Language**: The entire flashcard content (front and back) MUST be generated in the following language: **{{{language}}}**.
2.  **Topic**: The flashcards must be strictly based on the chapter: **"{{{chapter}}}"**.
3.  **Quantity**: Generate exactly **{{{numFlashcards}}}** flashcards.
4.  **Difficulty**: The concepts should be of **{{{difficulty}}}** difficulty level, suitable for NEET aspirants.
5.  **Format**: For each flashcard, provide:
    *   A 'front' side with a concise term, concept, or question.
    *   A 'back' side with a clear, detailed definition or explanation. Use LaTeX for all mathematical formulas and symbols.

Generate the flashcards now.
`,
});


const neetFlashcardGeneratorFlow = ai.defineFlow(
  {
    name: 'neetFlashcardGeneratorFlow',
    inputSchema: NeetFlashcardGeneratorInputSchema,
    outputSchema: NeetFlashcardGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate NEET flashcards.');
    }
    return output;
  }
);

    