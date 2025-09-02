
'use server';
/**
 * @fileOverview A Genkit flow for generating NEET lesson modules.
 * 
 * - generateNeetContent - Generates a lesson module as a markdown string.
 * - GenerateNeetContentInput - The input type for the flow.
 * - GenerateNeetContentOutput - The return type for the flow.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateNeetContentInputSchema = z.object({
    subject: z.string().describe('The subject for the lesson module (e.g., Physics, Chemistry).'),
    chapter: z.string().describe('The chapter title for the lesson module.'),
});
export type GenerateNeetContentInput = z.infer<typeof GenerateNeetContentInputSchema>;

const GenerateNeetContentOutputSchema = z.object({
    markdownContent: z.string().describe('The complete lesson module in Markdown format.'),
});
export type GenerateNeetContentOutput = z.infer<typeof GenerateNeetContentOutputSchema>;


export async function generateNeetContent(input: GenerateNeetContentInput): Promise<GenerateNeetContentOutput> {
    return generateNeetContentFlow(input);
}


const prompt = ai.definePrompt({
    name: 'neetContentPrompt',
    input: { schema: GenerateNeetContentInputSchema },
    output: { schema: GenerateNeetContentOutputSchema },
    prompt: `You are an award-winning NEET curriculum architect specializing in Tamil Nadu government-school students.
Generate a complete lesson module for NEET {{{subject}}} – “{{{chapter}}}”:
- Concept Notes (with Tamil analogies)
- 7 Worked Examples
- 25 NEET-style MCQs + solutions
- 15 Assertion–Reason Qs
- 15 Match-the-Columns
- ASCII/LaTeX diagrams with Tamil labels
Return output as clean Markdown.
`,
});


const generateNeetContentFlow = ai.defineFlow(
    {
        name: 'generateNeetContentFlow',
        inputSchema: GenerateNeetContentInputSchema,
        outputSchema: GenerateNeetContentOutputSchema,
    },
    async ({ subject, chapter }) => {
        const { output } = await prompt({ subject, chapter });
        if (!output) {
            throw new Error('Failed to generate NEET content.');
        }
        return output;
    }
);
