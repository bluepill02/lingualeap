'use server';
/**
 * @fileOverview An AI flow for analyzing a user's pronunciation of a word.
 *
 * - analyzePronunciation - A function that handles the audio analysis and provides feedback.
 * - PronunciationAnalysisInput - The input type for the function.
 * - PronunciationAnalysisOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const PronunciationAnalysisInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      "The user's spoken audio, as a data URI that must include a MIME type (e.g., 'audio/webm') and use Base64 encoding."
    ),
  correctWord: z.string().describe('The word the user was trying to pronounce.'),
  language: z.string().describe('The language of the word (e.g., "Hindi").'),
});
export type PronunciationAnalysisInput = z.infer<typeof PronunciationAnalysisInputSchema>;

export const PronunciationAnalysisOutputSchema = z.object({
  transcribedText: z.string().describe('The text transcribed from the user\'s audio.'),
  isCorrect: z.boolean().describe('Whether the transcribed text exactly matches the correct word (case-insensitive).'),
  feedback: z.string().describe('Constructive, friendly feedback for the user on their pronunciation.'),
});
export type PronunciationAnalysisOutput = z.infer<typeof PronunciationAnalysisOutputSchema>;


export async function analyzePronunciation(input: PronunciationAnalysisInput): Promise<PronunciationAnalysisOutput> {
  return pronunciationAnalysisFlow(input);
}

const prompt = ai.definePrompt({
    name: 'pronunciationFeedbackPrompt',
    input: { schema: z.object({ transcribedText: z.string(), correctWord: z.string(), language: z.string() }) },
    output: { schema: z.object({ feedback: z.string() }) },
    prompt: `You are a friendly language tutor. A user learning {{{language}}} attempted to pronounce the word '{{{correctWord}}}', but the speech-to-text model transcribed it as '{{{transcribedText}}}'.

Based on this transcription, provide one short, encouraging, and helpful sentence of feedback. 
- If the transcription matches the word, congratulate the user.
- If it's slightly off, gently point out the difference and offer a tip. For example, "That's very close! Try to make the 'a' sound longer, like in 'father'."
- If it's very different, encourage them to listen to the original audio again and try once more. For example, "That's a good first try. Listen to the audio again to catch the nuance and give it another shot!"

Keep the feedback positive and focused on a single, actionable tip.

User's Transcription: {{{transcribedText}}}
Correct Word: {{{correctWord}}}
Language: {{{language}}}
`,
});


const pronunciationAnalysisFlow = ai.defineFlow(
  {
    name: 'pronunciationAnalysisFlow',
    inputSchema: PronunciationAnalysisInputSchema,
    outputSchema: PronunciationAnalysisOutputSchema,
  },
  async ({ audioDataUri, correctWord, language }) => {
    // 1. Transcribe the audio
    const { text: transcribedText } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-speech-to-text-en', // Note: Using a generic speech model
      prompt: [{ media: { url: audioDataUri } }],
    });

    if (!transcribedText) {
        return {
            transcribedText: '',
            isCorrect: false,
            feedback: "Sorry, I couldn't understand that. Could you please try speaking a bit more clearly?",
        };
    }

    const isCorrect = transcribedText.trim().toLowerCase() === correctWord.toLowerCase();

    // 2. Generate feedback based on transcription
    const { output } = await prompt({
        transcribedText,
        correctWord,
        language,
    });
    
    return {
        transcribedText,
        isCorrect,
        feedback: output?.feedback || "Great job! Keep practicing.",
    };
  }
);
