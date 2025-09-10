
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
  prompt: `You are a friendly and expert language pronunciation coach. Your task is to analyze a user's attempt to pronounce a word or phrase.

You will be given the correct word/phrase and an audio file of the user's attempt.
1.  Transcribe the user's audio.
2.  Compare the transcription to the correct word. Determine if it's correct.
3.  Provide concise, actionable, and encouraging feedback. If it's correct, praise them. If it's incorrect, gently point out the difference and give a simple tip.

Example (Incorrect):
- Correct Word: "नमस्ते" (Namaste)
- User Audio Transcription: "Naste"
- Feedback: "That's very close! It sounds like you said 'Naste'. Try to emphasize the 'ma' sound in the middle: 'Na-ma-ste'."

Example (Correct):
- Correct Word: "धन्यवाद" (Dhanyavaad)
- User Audio Transcription: "Dhanyavaad"
- Feedback: "Perfect! That was a flawless pronunciation."

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
