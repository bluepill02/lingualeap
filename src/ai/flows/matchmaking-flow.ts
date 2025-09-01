
'use server';
/**
 * @fileOverview An AI-powered flow to match learners into companion circles.
 *
 * - matchLearnersIntoCircles - A function that takes a list of users and groups them into optimal cohorts.
 * - MatchmakingInput - The input type for the matchmaking function.
 * - MatchmakingOutput - The return type for the matchmaking function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { learnerPersonas } from '@/lib/personas';

const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatarUrl: z.string(),
  timezone: z.string(),
  proficiency: z.enum(['Beginner', 'Intermediate', 'Advanced']),
  goals: z.array(z.string()),
  persona: z.string(),
});
export type UserForMatchmaking = z.infer<typeof UserSchema>;

const CompanionCircleSchema = z.object({
  id: z.string(),
  members: z.array(z.object({
      id: z.string(),
      name: z.string(),
      avatarUrl: z.string(),
  })),
  leaderId: z.string(),
});

const MatchmakingInputSchema = z.object({
  users: z.array(UserSchema),
});
export type MatchmakingInput = z.infer<typeof MatchmakingInputSchema>;

const MatchmakingOutputSchema = z.object({
  circles: z.array(CompanionCircleSchema),
});
export type MatchmakingOutput = z.infer<typeof MatchmakingOutputSchema>;

export async function matchLearnersIntoCircles(input: MatchmakingInput): Promise<MatchmakingOutput> {
  return matchmakingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'matchmakingPrompt',
  input: { schema: MatchmakingInputSchema },
  output: { schema: MatchmakingOutputSchema },
  prompt: `You are an expert community manager for a language learning app. Your task is to form 'Companion Circles' of 3-5 learners.

Analyze the provided list of users, considering the following factors for creating balanced and effective groups:
1.  **Similar Proficiency:** Group users with similar proficiency levels (e.g., Beginners with Beginners).
2.  **Compatible Time Zones:** Group users in reasonably similar time zones to facilitate interaction.
3.  **Shared Goals & Personas:** Match users with complementary learning goals and personas. A good mix of personas can be beneficial.
4.  **Group Size:** Aim for groups of 3 to 5 members.

Here are the available learner personas to consider:
${learnerPersonas.map(p => `- **${p.type}:** ${p.description}`).join('\n')}

For each created circle, assign a unique ID (e.g., 'circle-1', 'circle-2') and designate one member as the initial leader. The leader should ideally be a slightly more experienced or motivated user (e.g., higher proficiency, or a 'Mentor' or 'Career Climber' persona).

Now, analyze the following list of users and group them into optimal companion circles.

Users:
{{#each users}}
- ID: {{{id}}}, Name: {{{name}}}, Proficiency: {{{proficiency}}}, Timezone: {{{timezone}}}, Goals: {{#each goals}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}, Persona: {{{persona}}}
{{/each}}
`,
});

const matchmakingFlow = ai.defineFlow(
  {
    name: 'matchmakingFlow',
    inputSchema: MatchmakingInputSchema,
    outputSchema: MatchmakingOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
