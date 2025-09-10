'use server';
/**
 * @fileOverview An AI flow for providing feedback on a user's answer to a mock interview question.
 *
 * - provideInterviewFeedback - A function that analyzes a user's response and provides constructive feedback.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

export const InterviewFeedbackInputSchema = z.object({
  question: z.string().describe('The interview question that was asked.'),
  answer: z.string().describe("The user's spoken answer to the question."),
});
export type InterviewFeedbackInput = z.infer<typeof InterviewFeedbackInputSchema>;

export const InterviewFeedbackOutputSchema = z.object({
  contentFeedback: z.string().describe("Feedback on the substance and structure of the answer. Does it follow the STAR method? Is it relevant?"),
  clarityFeedback: z.string().describe("Feedback on the clarity, conciseness, and confidence of the delivery."),
  exampleAnswer: z.string().describe("An improved, example answer that the user can learn from."),
  confidenceScore: z.number().min(1).max(10).describe("A score from 1 to 10 representing the perceived confidence of the answer."),
});
export type InterviewFeedbackOutput = z.infer<typeof InterviewFeedbackOutputSchema>;


export async function provideInterviewFeedback(input: InterviewFeedbackInput): Promise<InterviewFeedbackOutput> {
  return interviewFeedbackFlow(input);
}

const prompt = ai.definePrompt({
    name: 'interviewFeedbackPrompt',
    input: { schema: InterviewFeedbackInputSchema },
    output: { schema: InterviewFeedbackOutputSchema },
    prompt: `You are an expert career coach and interview trainer. A user is practicing for a job interview.
They were asked the following question:
"{{{question}}}"

They gave the following answer:
"{{{answer}}}"

Your task is to provide constructive feedback.
1.  **Content Feedback**: Analyze the answer's structure and content. Is it well-structured (like the STAR method)? Is it concise? Does it directly answer the question?
2.  **Clarity Feedback**: Comment on the perceived clarity and confidence of the answer based on the language used.
3.  **Example Answer**: Provide a well-structured, improved example answer that effectively demonstrates how to answer the question.
4.  **Confidence Score**: Rate the confidence of the answer on a scale of 1 to 10, where 1 is not confident and 10 is very confident.

Provide your feedback now in the required format.
`,
});


const interviewFeedbackFlow = ai.defineFlow(
  {
    name: 'interviewFeedbackFlow',
    inputSchema: InterviewFeedbackInputSchema,
    outputSchema: InterviewFeedbackOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate interview feedback.');
    }
    return output;
  }
);
