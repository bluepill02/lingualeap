
'use server';
/**
 * @fileOverview A Genkit flow for an AI-powered personal language tutor.
 *
 * - personalTutor - A function that handles conversational tutoring.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { languageMap, type Language, type PersonalTutorInput, type PersonalTutorOutput, type Message } from '@/lib/types';
import { PersonalTutorInputSchema, PersonalTutorOutputSchema } from '@/lib/server-types';


export async function personalTutor(input: PersonalTutorInput): Promise<PersonalTutorOutput> {
  const fullLanguageName = languageMap[input.language as Language] || input.language;

  // Create a new input object that conforms to the schema expected by the prompt.
  const promptInput = {
    ...input,
    language: fullLanguageName,
  };

  return personalTutorFlow(promptInput);
}

const prompt = ai.definePrompt({
  name: 'personalTutorPrompt',
  input: { schema: z.object({
      history: z.array(z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })),
      message: z.string(),
      language: z.string(),
  }) },
  output: { schema: PersonalTutorOutputSchema },
  prompt: `You are LinguaLeap's AI Personal Tutor, a friendly and expert language guide. Your primary goal is to help the user master the language they have chosen: {{{language}}}. All of your responses, explanations, and examples should be tailored to teaching this specific language. Be patient, encouraging, and clear in your explanations.

You can answer questions about grammar, vocabulary, culture, or provide practice sentences in the {{{language}}} language. Keep your answers concise but informative. If a user asks a question unrelated to learning {{{language}}}, gently guide them back to the topic.

Here is the conversation history:
{{#each history}}
{{#if this.user}}User: {{this.user}}{{/if}}
{{#if this.model}}Tutor: {{this.model}}{{/if}}
{{/each}}

Now, respond to the user's latest message:
User: {{{message}}}
`,
});


const personalTutorFlow = ai.defineFlow(
  {
    name: 'personalTutorFlow',
    inputSchema: z.object({
      history: z.array(z.object({
        role: z.enum(['user', 'model']),
        content: z.string(),
      })),
      message: z.string(),
      language: z.string(),
    }),
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

    const { output } = await prompt({
        ...input,
        history: historyForPrompt
    });

    if (!output) {
      return { response: "I'm not sure how to respond to that. Could you ask in a different way?" };
    }
    return output;
  }
);
