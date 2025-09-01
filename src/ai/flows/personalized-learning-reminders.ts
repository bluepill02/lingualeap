'use server';
/**
 * @fileOverview Personalized Learning Reminders flow. This flow uses AI to schedule flashcard review reminders based on user performance and learning patterns.
 *
 * - scheduleReminder - A function to schedule a personalized learning reminder.
 * - ScheduleReminderInput - The input type for the scheduleReminder function.
 * - ScheduleReminderOutput - The return type for the scheduleReminder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { calculateNextReview } from '@/services/fsrs';

const ScheduleReminderInputSchema = z.object({
  userId: z.string().describe('The ID of the user.'),
  flashcardId: z.string().describe('The ID of the flashcard.'),
  stability: z.number().describe('The stability of the flashcard.'),
  difficulty: z.number().describe('The difficulty of the flashcard.'),
  interval: z.number().describe('The interval for the flashcard.'),
  lastReviewed: z.string().describe('The last time the flashcard was reviewed in ISO format.'),
  usageData: z.string().describe('Historical usage data for the user, as a JSON string.'),
});
export type ScheduleReminderInput = z.infer<typeof ScheduleReminderInputSchema>;

const ScheduleReminderOutputSchema = z.object({
  reminderTime: z.string().describe('The time the reminder should be sent in ISO format.'),
  reasoning: z.string().describe('The AI reasoning for the scheduled reminder time.'),
});
export type ScheduleReminderOutput = z.infer<typeof ScheduleReminderOutputSchema>;

export async function scheduleReminder(input: ScheduleReminderInput): Promise<ScheduleReminderOutput> {
  return scheduleReminderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'scheduleReminderPrompt',
  input: {schema: ScheduleReminderInputSchema},
  output: {schema: ScheduleReminderOutputSchema},
  prompt: `You are an AI assistant that schedules personalized learning reminders for language learners. You take into account the user's flashcard performance, learning patterns, and the FSRS spaced repetition algorithm to determine the optimal time to send a reminder.

You are provided with the following information:
- User ID: {{{userId}}}
- Flashcard ID: {{{flashcardId}}}
- Stability: {{{stability}}}
- Difficulty: {{{difficulty}}}
- Interval: {{{interval}}}
- Last Reviewed: {{{lastReviewed}}}
- Usage Data: {{{usageData}}}

Based on this information, and taking into account the flashcard's stability, difficulty, and interval, and when it was last reviewed, combined with historical user data, determine the optimal time to send a reminder to the user to review the flashcard. The goal is to maximize the likelihood of the user engaging with the app and reinforcing their learning.

Return the reminder time in ISO format, and a brief explanation of your reasoning.

Here's the calculated next review time from the FSRS algorithm: {{nextReviewTime}}

Consider if the next review time should be earlier or later based on their usage data.
`,
});

const scheduleReminderFlow = ai.defineFlow(
  {
    name: 'scheduleReminderFlow',
    inputSchema: ScheduleReminderInputSchema,
    outputSchema: ScheduleReminderOutputSchema,
  },
  async input => {
    // Calculate next review time from FSRS
    const nextReviewTime = calculateNextReview({
      stability: input.stability,
      difficulty: input.difficulty,
      interval: input.interval,
      lastReviewed: input.lastReviewed
    });

    const {output} = await prompt({...input, nextReviewTime});
    return output!;
  }
);
