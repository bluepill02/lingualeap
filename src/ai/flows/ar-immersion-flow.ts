'use server';
/**
 * @fileOverview An AI flow for the AR Immersion feature. It identifies an object in a photo and generates related educational content.
 *
 * - analyzeImageForLearning - A function that handles the image analysis and content generation.
 * - AnalyzeImageInput - The input type for the analyzeImageForLearning function.
 * - AnalyzeImageOutput - The return type for the analyzeImageForLearning function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of an object, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  targetLanguage: z.string().describe('The language the user wants to learn (e.g., Hindi, Tamil).'),
});
export type AnalyzeImageInput = z.infer<typeof AnalyzeImageInputSchema>;

const AnalyzeImageOutputSchema = z.object({
  objectName: z.string().describe('The name of the identified object in English.'),
  translatedWord: z.string().describe('The translation of the object name in the target language.'),
  romanization: z.string().describe('The romanized (phonetic) spelling of the translated word.'),
  quiz: z.object({
    question: z.string().describe('A simple multiple-choice question about the object.'),
    options: z.array(z.string()).describe('An array of four options for the quiz.'),
    answer: z.string().describe('The correct answer from the options.'),
  }),
  mnemonic: z.string().describe('A short, clever mnemonic to help remember the translated word.'),
});
export type AnalyzeImageOutput = z.infer<typeof AnalyzeImageOutputSchema>;

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
