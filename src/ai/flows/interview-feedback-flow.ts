
'use server';
/**
 * @fileOverview An AI flow for providing feedback on a user's answers in a mock interview session.
 *
 * - provideInterviewFeedback - A function that analyzes a user's responses and provides constructive feedback.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { InterviewFeedbackInput, InterviewFeedbackOutput } from '@/lib/types';
import { InterviewFeedbackInputSchema, InterviewFeedbackOutputSchema } from '@/lib/server-types';


export async function provideInterviewFeedback(input: InterviewFeedbackInput): Promise<InterviewFeedbackOutput> {
  return interviewFeedbackFlow(input);
}

// Custom Handlebars helper to add 1 to the index for display
const addHelper = (a: number, b: number) => a + b;

const prompt = ai.definePrompt({
    name: 'interviewFeedbackPrompt',
    input: { schema: InterviewFeedbackInputSchema },
    output: { schema: InterviewFeedbackOutputSchema },
    prompt: `You are an expert career coach and interview trainer. Your client is preparing for a '{{{jobRole}}}' interview.

The client's learning persona is '{{{userPersona}}}'. You MUST tailor the TONE and FOCUS of your feedback to this persona.
- If they are a 'Career Climber', be direct, professional, and focus on ROI and impact.
- If they are a 'Cultural Explorer' or 'Social Connector', be more encouraging, and focus on storytelling and connection.
- If they are an 'Exam Ace', be structured and analytical.

Your task is to provide expert, constructive feedback in two parts:

**Part 1: Overall Session Feedback**
Analyze all the answers together to identify patterns.
- **Summary**: Write a brief overview in a tone appropriate for the user's persona.
- **Strengths**: Identify 2-3 key strengths they showed consistently.
- **Areas for Improvement**: Pinpoint the 2-3 most important areas they should work on based on recurring weaknesses.

**Part 2: Detailed Question-by-Question Feedback**
For EACH question and answer pair in the session history, provide a detailed analysis:
1.  **STAR Analysis**:
    *   Carefully analyze the user's answer. For each part of STAR (Situation, Task, Action, Result), extract the EXACT corresponding sentence or phrase from their answer. If a part is missing, leave the corresponding field empty.
    *   For each part, provide concise feedback on its effectiveness. If it's missing, state that clearly in the feedback.
2.  **Keyword Feedback**:
    *   Analyze the language used. Did they use strong action verbs? Did they use keywords relevant to a '{{{jobRole}}}'? Provide suggestions for more impactful language.
3.  **Confidence Score**:
    *   Rate the confidence of the answer on a scale of 1 to 10, where 1 is not confident and 10 is very confident. Base this on clarity, directness, and assertive language.

Here is the full interview session:
{{#each sessionHistory}}
---
**Question {{add @index 1}}**: "{{this.question}}"

**User's Answer**: "{{this.answer}}"
---
{{/each}}

Provide your complete, structured feedback now, keeping the user's persona ('{{{userPersona}}}') in mind.
`,
    helpers: { add: addHelper }
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
