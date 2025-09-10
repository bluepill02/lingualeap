
'use server';
/**
 * @fileOverview A Genkit flow for an AI-powered personal language tutor.
 *
 * - personalTutor - A function that handles conversational tutoring.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { PersonalTutorInputSchema, PersonalTutorOutputSchema, PersonalTutorInput, PersonalTutorOutput } from '@/lib/types';


export async function personalTutor(input: PersonalTutorInput): Promise<PersonalTutorOutput> {
  return personalTutorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalTutorPrompt',
  input: { schema: PersonalTutorInputSchema },
  output: { schema: z.string() }, // Output is just the string response
  prompt: `You are LinguaLeap's AI Personal Tutor, a friendly and expert language guide. Your goal is to help users master the {{{language}}} language. Be patient, encouraging, and clear in your explanations.

You can answer questions about grammar, vocabulary, culture, or provide practice sentences. Keep your answers concise but informative. If a user asks a question unrelated to language learning, gently guide them back to the topic.

Here is the conversation history:
{{#each history}}
{{#if user}}User: {{user}}{{/if}}
{{#if model}}Tutor: {{model}}{{/if}}
{{/each}}

Now, respond to the user's latest message:
User: {{{message}}}
Tutor:`,
});


const personalTutorFlow = ai.defineFlow(
  {
    name: 'personalTutorFlow',
    inputSchema: PersonalTutorInputSchema,
    outputSchema: PersonalTutorOutputSchema,
  },
  async (input) => {
    // Rework the history to be compatible with Handlebars' #if helper
    const historyForPrompt = input.history.map(message => {
        if (message.role === 'user') {
            return { user: message.content };
        } else {
            return { model: message.content };
        }
    });
    
    const llmResponse = await prompt({
        ...input,
        history: historyForPrompt
    });

    const responseText = llmResponse.output || "I'm not sure how to respond to that. Could you ask in a different way?";
    return { response: responseText };
  }
);
