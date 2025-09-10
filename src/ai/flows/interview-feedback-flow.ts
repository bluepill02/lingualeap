
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
  jobRole: z.string().optional().describe("The specific job role the user is preparing for, e.g., 'Software Engineer'."),
});
export type InterviewFeedbackInput = z.infer<typeof InterviewFeedbackInputSchema>;

const STARAnalysisSchema = z.object({
  situation: z.string().optional().describe("The specific part of the user's answer that describes the 'Situation'. This should be an exact quote from the user's answer."),
  task: z.string().optional().describe("The specific part of the user's answer that describes the 'Task'. This should be an exact quote from the user's answer."),
  action: z.string().optional().describe("The specific part of the user's answer that describes the 'Action'. This should be an exact quote from the user's answer."),
  result: z.string().optional().describe("The specific part of the user's answer that describes the 'Result'. This should be an exact quote from the user's answer."),
  situationFeedback: z.string().describe("Feedback on how well the user established the context."),
  taskFeedback: z.string().describe("Feedback on how well the user explained their specific responsibility."),
  actionFeedback: z.string().describe("Feedback on the description of the actions taken. Were they specific and impactful?"),
  resultFeedback: z.string().describe("Feedback on the outcome. Was it quantified? Did it show impact?"),
});

export const InterviewFeedbackOutputSchema = z.object({
  starAnalysis: STARAnalysisSchema,
  keywordFeedback: z.string().describe("Analyzes the use of keywords relevant to the job role. Suggests powerful action verbs and industry-specific terms."),
  actionableTips: z.array(z.string()).describe("A list of 3-4 concrete, actionable tips for the user to improve their answer next time."),
  confidenceScore: z.number().min(1).max(10).describe("A score from 1 to 10 representing the perceived confidence of the answer, based on clarity, pace, and conviction."),
});
export type InterviewFeedbackOutput = z.infer<typeof InterviewFeedbackOutputSchema>;


export async function provideInterviewFeedback(input: InterviewFeedbackInput): Promise<InterviewFeedbackOutput> {
  return interviewFeedbackFlow(input);
}

const prompt = ai.definePrompt({
    name: 'interviewFeedbackPrompt',
    input: { schema: InterviewFeedbackInputSchema },
    output: { schema: InterviewFeedbackOutputSchema },
    prompt: `You are an expert career coach and interview trainer for the role of: '{{{jobRole}}}'. A user is practicing for a job interview.

They were asked the following question:
"{{{question}}}"

They gave the following answer:
"{{{answer}}}"

Your task is to provide expert, constructive feedback based on the STAR method (Situation, Task, Action, Result).

1.  **STAR Analysis**:
    *   Carefully analyze the user's answer. For each part of STAR (situation, task, action, result), extract the EXACT corresponding sentence or phrase from their answer. If a part is missing, leave the corresponding field empty.
    *   For each part, provide concise feedback on its effectiveness. If it's missing, state that clearly in the feedback.

2.  **Keyword Feedback**:
    *   Analyze the language used. Did they use strong action verbs? Did they use keywords relevant to a '{{{jobRole}}}'? Provide suggestions for more impactful language.

3.  **Actionable Tips**:
    *   Provide a short, bulleted list of 3-4 of the most important, actionable tips for improving this specific answer.

4.  **Confidence Score**:
    *   Rate the confidence of the answer on a scale of 1 to 10, where 1 is not confident and 10 is very confident. Base this on clarity, directness, and assertive language.

Provide your feedback now in the required structured format.
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
