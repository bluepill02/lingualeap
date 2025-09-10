
'use server';
/**
 * @fileOverview An AI-powered flow to suggest a single study buddy for a user within a circle.
 *
 * - findStudyBuddy - A function that takes a user and a list of potential buddies and finds the best match.
 * - StudyBuddyInput - The input type for the matchmaking function.
 * - StudyBuddyOutput - The return type for the matchmaking function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { learnerPersonas } from '@/lib/personas';

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatarUrl: z.string(),
  persona: z.string(),
  // In a real app, you'd include more data like progress, active times, etc.
});
export type UserForBuddyFinder = z.infer<typeof UserSchema>;

export const StudyBuddyInputSchema = z.object({
  currentUser: UserSchema,
  otherMembers: z.array(UserSchema),
});
export type StudyBuddyInput = z.infer<typeof StudyBuddyInputSchema>;

export const StudyBuddyOutputSchema = z.object({
  bestMatch: z.object({
      id: z.string(),
      name: z.string(),
      avatarUrl: z.string(),
      reason: z.string().describe("A short, friendly explanation for why this user is a good match."),
  }).optional(),
});
export type StudyBuddyOutput = z.infer<typeof StudyBuddyOutputSchema>;


export async function findStudyBuddy(input: StudyBuddyInput): Promise<StudyBuddyOutput> {
  return studyBuddyFlow(input);
}

const prompt = ai.definePrompt({
  name: 'studyBuddyPrompt',
  input: { schema: StudyBuddyInputSchema },
  output: { schema: StudyBuddyOutputSchema },
  prompt: `You are an expert community manager, skilled at connecting people for collaborative learning. Your task is to find the single best study buddy for a user from a list of other members in their 'Companion Circle'.

Analyze the "Current User" and compare them against the list of "Other Members". Consider the following factors:
1.  **Complementary Personas:** Match users with personas that complement each other. For example, a 'Mentor' persona is a great match for a 'Casual Traveler'. A 'Career Climber' could benefit from an 'Exam Ace'.
2.  **Avoid Identical Personas:** Don't just match identical personas. Diversity can lead to better learning.

Here are the available learner personas to consider:
${learnerPersonas.map(p => `- **${p.type}:** ${p.description}`).join('\n')}

**Current User:**
- ID: {{{currentUser.id}}}, Name: {{{currentUser.name}}}, Persona: {{{currentUser.persona}}}

**Other Members available for matching:**
{{#each otherMembers}}
- ID: {{{id}}}, Name: {{{name}}}, Persona: {{{persona}}}
{{/each}}

Based on your analysis, select the single best match and provide a brief, friendly reason for your choice. If no suitable match is found from the list, you can return an empty bestMatch field.
`,
});

const studyBuddyFlow = ai.defineFlow(
  {
    name: 'studyBuddyFlow',
    inputSchema: StudyBuddyInputSchema,
    outputSchema: StudyBuddyOutputSchema,
  },
  async (input) => {
    // In a real app, you might filter out users who have recently declined matches, etc.
    if (input.otherMembers.length === 0) {
        return { bestMatch: undefined };
    }
    const { output } = await prompt(input);
    return output!;
  }
);
