
'use server';
/**
 * @fileOverview An AI flow for generating a mock interview question based on a job role.
 *
 * - generateInterviewQuestion - A function that creates a relevant question.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { InterviewQuestionInputSchema, InterviewQuestionOutputSchema } from '@/lib/server-types';
import { InterviewQuestionInput, InterviewQuestionOutput } from '@/lib/types';


export async function generateInterviewQuestion(input: InterviewQuestionInput): Promise<InterviewQuestionOutput> {
  return interviewQuestionFlow(input);
}

const prompt = ai.definePrompt({
    name: 'interviewQuestionPrompt',
    input: { schema: InterviewQuestionInputSchema },
    output: { schema: InterviewQuestionOutputSchema },
    prompt: `You are an expert interviewer. Generate a single, common, but insightful behavioral interview question for a candidate applying for the role of '{{{jobRole}}}'.
    
    The question should prompt the candidate to provide a specific example from their past experience. Avoid simple "yes/no" questions.

    For example, for "Software Engineer", a good question would be "Tell me about a time you had a disagreement with a colleague on a technical decision. How did you handle it?".
`,
});


const interviewQuestionFlow = ai.defineFlow(
  {
    name: 'interviewQuestionFlow',
    inputSchema: InterviewQuestionInputSchema,
    outputSchema: InterviewQuestionOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate interview question.');
    }
    return output;
  }
);
    
