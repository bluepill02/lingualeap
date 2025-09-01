
'use server';
/**
 * @fileOverview A Genkit flow that generates a short story snippet for a given word to make learning more engaging.
 *
 * - generateStory - A function to generate a narrative for a flashcard word.
 * - GenerateStoryInput - The input type for the generateStory function.
 * - GenerateStoryOutput - The return type for the generateStory function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateStoryInputSchema = z.object({
  word: z.string().describe('The word to create a story about.'),
  definition: z.string().describe('The definition of the word.'),
});
export type GenerateStoryInput = z.infer<typeof GenerateStoryInputSchema>;

const GenerateStoryOutputSchema = z.object({
  story: z.
    string()
    .describe('A short, epic, third-person story snippet (2-3 sentences) involving the user\'s avatar and the provided word. The story should be a chapter in the "Cosmic Chronicle."'),
});
export type GenerateStoryOutput = z.infer<typeof GenerateStoryOutputSchema>;

export async function generateStory(input: GenerateStoryInput): Promise<GenerateStoryOutput> {
  return generateStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'storyGeneratorPrompt',
  input: { schema: GenerateStoryInputSchema },
  output: { schema: GenerateStoryOutputSchema },
  prompt: `You are a master storyteller for a language learning app. Your task is to weave a short, epic narrative around a vocabulary word. This narrative is a chapter in the user's personal "Cosmic Chronicle."

The story must feature the user's avatar, a brave cosmic explorer, on their journey.
The story must creatively and correctly incorporate the meaning of the word: '{{{word}}}' which means '{{{definition}}}'.
The tone should be epic, imaginative, and brief (2-3 sentences).

Example:
Word: ' diligent'
Definition: 'showing care and conscientiousness in one\'s work'
Story: "The Archivist of Nebula-9 watched as the cosmic explorer, with diligent care, deciphered the ancient star-charts. Each symbol was a key, and they turned each one with unwavering focus, unlocking a path to the lost celestial city."

Now, generate a story for the following word:
Word: '{{{word}}}'
Definition: '{{{definition}}}'`,
});


const generateStoryFlow = ai.defineFlow(
  {
    name: 'generateStoryFlow',
    inputSchema: GenerateStoryInputSchema,
    outputSchema: GenerateStoryOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
