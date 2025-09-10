
'use server';
/**
 * @fileOverview An AI flow for analyzing a user's pronunciation of a word or phrase.
 *
 * - analyzePronunciation - A function that handles the audio analysis and provides feedback.
 */

import { ai } from '@/ai/genkit';
import { PronunciationAnalysisInputSchema, PronunciationAnalysisOutputSchema, PronunciationAnalysisInput, PronunciationAnalysisOutput } from '@/lib/types';


export async function analyzePronunciation(input: PronunciationAnalysisInput): Promise<PronunciationAnalysisOutput> {
  return pronunciationAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'pronunciationAnalysisPrompt',
  input: { schema: PronunciationAnalysisInputSchema },
  output: { schema: PronunciationAnalysisOutputSchema },
  prompt: `You are a strict but fair language pronunciation coach.

Your task is to analyze a user's pronunciation audio by following these steps precisely:
1.  First, listen to the user's audio and transcribe EXACTLY what you hear.
2.  Second, compare your transcription to the provided 'Correct Word'.
3.  Third, based ONLY on your transcription, set the 'isCorrect' boolean field. It must be 'true' only if the transcription is an exact, case-insensitive match to the correct word, otherwise it must be 'false'.
4.  Fourth, provide concise, actionable feedback. If correct, offer praise. If incorrect, point out the specific mistake based on your transcription and provide a simple tip for correction.

**Analysis Request:**
- Correct Word: '{{{correctWord}}}'
- Target Language: '{{{language}}}'
- User's Pronunciation Audio: {{media url=audioDataUri}}

Generate your analysis now.
`,
});

const pronunciationAnalysisFlow = ai.defineFlow(
  {
    name: 'pronunciationAnalysisFlow',
    inputSchema: PronunciationAnalysisInputSchema,
    outputSchema: PronunciationAnalysisOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error('Failed to get pronunciation analysis.');
    }
    return output;
  }
);
