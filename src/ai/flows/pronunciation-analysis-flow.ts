
'use server';
/**
 * @fileOverview An AI flow for analyzing a user's pronunciation of a word.
 *
 * - analyzePronunciation - A function that handles the audio analysis and provides feedback.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { PronunciationAnalysisInputSchema, PronunciationAnalysisOutputSchema, PronunciationAnalysisInput, PronunciationAnalysisOutput } from '@/lib/types';


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
