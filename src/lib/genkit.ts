import { genkit } from 'genkit';
import { GoogleGenerativeAI } from '@genkit-ai/google-genai';

const googleAIPlugin = new GoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export function getGoogleModel(modelType: "flash" | "pro" = "flash") {
  const modelName = modelType === "pro" ? "gemini-1.5-pro-0514" : "gemini-1.5-flash-0514";
  return googleAIPlugin.getGenerativeModel({ model: modelName });
}

export const ai = genkit({
  plugins: [googleAIPlugin],
  defaultModel: () => getGoogleModel("flash")
});