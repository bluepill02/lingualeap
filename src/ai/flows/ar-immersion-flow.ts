
'use server';
/**
 * @fileOverview An AI flow for the AR Immersion feature. It identifies an object in a photo and generates related educational content.
 *
 * - analyzeImageForLearning - A function that handles the image analysis and content generation.
 */

import { ai } from '@/ai/genkit';
import { AnalyzeImageInput, AnalyzeImageOutput } from '@/lib/types';
import { AnalyzeImageInputSchema, AnalyzeImageOutputSchema } from '@/lib/server-types';


export async function analyzeImageForLearning(input: AnalyzeImageInput): Promise<AnalyzeImageOutput> {
  return analyzeImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'arImmersionPrompt',
  input: { schema: AnalyzeImageInputSchema },
  output: { schema: AnalyzeImageOutputSchema },
  prompt: `You are an expert language tutor creating a real-world learning experience.
  
You have been given a photo of an object and a target language. Your task is to:
1. Identify the primary object in the photo.
2. Translate the object's name into the target language: {{{targetLanguage}}}.
3. Provide a romanized (phonetic) version of the translation.
4. Create a simple, relevant multiple-choice quiz question about the object.
5. Generate a clever mnemonic to help the user remember the translated word.

Example:
If the image shows a "book" and the target language is "Hindi":
- Object Name: Book
- Translated Word: किताब
- Romanization: Kitaab
- Quiz: { question: "What is a 'kitaab' typically used for?", options: ["Eating", "Reading", "Playing", "Driving"], answer: "Reading" }
- Mnemonic: "You keep a 'kit' of books in a bag."

Analyze the following image and generate the required content.

Photo: {{media url=photoDataUri}}
Target Language: {{{targetLanguage}}}
`,
});

const analyzeImageFlow = ai.defineFlow(
  {
    name: 'analyzeImageFlow',
    inputSchema: AnalyzeImageInputSchema,
    outputSchema: AnalyzeImageOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

    