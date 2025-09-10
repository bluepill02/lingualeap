
'use server';
/**
 * @fileOverview A Genkit flow for converting text to speech.
 * - speak - Converts text into an audio data URI.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import wav from 'wav';

export const SpeakInputSchema = z.string();
export type SpeakInput = z.infer<typeof SpeakInputSchema>;

export const SpeakOutputSchema = z.object({
  media: z.string().describe('The generated audio as a data URI.'),
});
export type SpeakOutput = z.infer<typeof SpeakOutputSchema>;

// This function converts raw PCM audio data from Gemini into a standard WAV format
// that can be played in a browser. It returns the WAV data as a Base64 string.
async function toWav(
  pcmData: Buffer,
  channels = 1,
  rate = 24000,
  sampleWidth = 2
): Promise<string> {
  return new Promise((resolve, reject) => {
    const writer = new wav.Writer({
      channels,
      sampleRate: rate,
      bitDepth: sampleWidth * 8,
    });

    const bufs: any[] = [];
    writer.on('error', reject);
    writer.on('data', (d) => bufs.push(d));
    writer.on('end', () => resolve(Buffer.concat(bufs).toString('base64')));

    writer.write(pcmData);
    writer.end();
  });
}

const speakFlow = ai.defineFlow(
  {
    name: 'speakFlow',
    inputSchema: SpeakInputSchema,
    outputSchema: SpeakOutputSchema,
  },
  async (text) => {
    // Generate raw PCM audio data using the Gemini TTS model.
    const { media } = await ai.generate({
      model: 'googleai/gemini-2.5-flash-preview-tts',
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Algenib' }, // Choose a voice
          },
        },
      },
      prompt: text,
    });

    if (!media?.url) {
      throw new Error('No audio media returned from the model.');
    }

    // The model returns a data URI with base64 encoded raw PCM data.
    // We need to extract the base64 part and convert it to a WAV file.
    const audioBuffer = Buffer.from(
      media.url.substring(media.url.indexOf(',') + 1),
      'base64'
    );
    
    const wavBase64 = await toWav(audioBuffer);

    // Return the audio as a playable WAV data URI.
    return {
      media: 'data:audio/wav;base64,' + wavBase64,
    };
  }
);


export async function speak(text: SpeakInput): Promise<SpeakOutput> {
    return speakFlow(text);
}

    