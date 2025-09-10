
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
  
You have been given a photo. Your task is to:
1. Identify the single, primary object in the photo. If no clear object is present (e.g., a blurry image, a landscape with no focal point), set 'isObjectFound' to false and return immediately.
2. If an object is found, set 'isObjectFound' to true.
3. Translate the object's name into the target language: {{{targetLanguage}}}.
4. Provide a romanized (phonetic) version of the translation.
5. Create a simple, relevant multiple-choice quiz question about the object.
6. Generate a clever mnemonic to help the user remember the translated word.

Example (if object is found):
If the image shows a "book" and the target language is "Hindi":
- isObjectFound: true
- objectName: "Book"
- translatedWord: "किताब"
- romanization: "Kitaab"
- quiz: { question: "What is a 'kitaab' typically used for?", options: ["Eating", "Reading", "Playing", "Driving"], answer: "Reading" }
- mnemonic: "You keep a 'kit' of books in a bag."

Example (if no object is found):
- isObjectFound: false

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
