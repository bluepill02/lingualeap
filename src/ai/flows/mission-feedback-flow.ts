
'use server';
/**
 * @fileOverview An AI flow for providing feedback on a user's peer-teaching mission submission.
 *
 * - provideMissionFeedback - A function that acts as an "AI Editor" for user-created micro-lessons.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import type { MissionSubmissionInput, MissionFeedbackOutput } from '@/lib/types';
import { MissionSubmissionInputSchema, MissionFeedbackOutputSchema } from '@/lib/server-types';


export async function provideMissionFeedback(input: MissionSubmissionInput): Promise<MissionFeedbackOutput> {
  return missionFeedbackFlow(input);
}

const prompt = ai.definePrompt({
    name: 'missionFeedbackPrompt',
    input: { schema: MissionSubmissionInputSchema },
    output: { schema: MissionFeedbackOutputSchema },
    prompt: `You are an expert Physics Editor for an ed-tech platform in Tamil Nadu, India. Your role is to provide constructive feedback on a "Peer-Teaching Mission" submitted by a student. The student was tasked with explaining the concept of '{{{concept}}}'.

Analyze the student's submission below based on the following criteria:
1.  **Clarity & Language:** Is the script clear, concise, and under one minute? Does it effectively use both English and Tamil terms where appropriate? Is the language simple enough for a peer to understand?
2.  **Conceptual Accuracy:** Is the explanation of '{{{concept}}}' in the script, diagram, and MCQs scientifically correct? Do the MCQs effectively test for common misconceptions or edge cases?
3.  **Analogy & Cultural Relevance:** Is the analogy used effective? Suggest one alternative, more culturally relevant analogy for a student in Tamil Nadu. For example, instead of a generic rocket, suggest an analogy involving Jallikattu, a temple chariot festival, or something similar from the region.
4.  **Overall Quality:** Based on the above, provide a "Teaching Stars" rating from 0 (very poor) to 5 (excellent, ready to share).

**Student's Submission:**

**Concept:** {{{concept}}}

**Micro-Lesson Script:**
{{{script}}}

**Diagram Description:**
{{{diagramDescription}}}

**Multiple-Choice Questions:**
1. Q: {{{mcqs.[0].question}}}
   Options: {{{mcqs.[0].options}}}
   Correct Answer: {{{mcqs.[0].correctAnswer}}}
2. Q: {{{mcqs.[1].question}}}
   Options: {{{mcqs.[1].options}}}
   Correct Answer: {{{mcqs.[1].correctAnswer}}}

Provide your feedback now in the required format.
`,
});


const missionFeedbackFlow = ai.defineFlow(
  {
    name: 'missionFeedbackFlow',
    inputSchema: MissionSubmissionInputSchema,
    outputSchema: MissionFeedbackOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate mission feedback.');
    }
    return output;
  }
);

    