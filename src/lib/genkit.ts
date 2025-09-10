import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GOOGLE_API_KEY,
    }),
  ],
});

export function getGoogleModel(modelType: "flash" | "pro" = "flash") {
  return modelType === "pro" ? "gemini-1.5-pro-0514" : "gemini-1.5-flash-0514";
}
