
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
    prompt: `You are a user-focused NEET content presenter. For each module in Physics, Chemistry or Biology, output clean, structured Markdown that guides a Tamil Nadu government-school student from zero to mastery. Follow this exact format:

# 1. Module Title
– “{{{subject}}} – {{{chapter}}}”

# 2. Learning Objectives
1. List 2–4 specific goals (“After this, you will be able to…”)

# 3. Prerequisites
– Bullet the key concepts the student must know first

# 4. Concept Overview
– 2–3-sentence summary of why this topic matters for NEET
– Include one Tamil analogy or real-world TN example

# 5. Detailed Explanation
– Use subheadings (##, ###) to break into logical parts
– Define every term clearly; highlight Tamil keywords in *italics*
– Render all formulas in LaTeX (inline and display)

# 6. Worked Examples
For each of 3 problems (Easy → Medium → Must-Practice):
1. Problem statement
2. Step-by-step solution with numbered steps
3. Call out common pitfalls in a gray “Note” box

# 7. Key Formulas & Diagrams
– Table of 4–6 essential formulas (LaTeX in left column, description in right)
– Include one ASCII-art or TikZ diagram labeled in English with Tamil transliteration

# 8. Practice Section
**8.1 MCQs (25)**
– Numbered list: question, 4 options (A–D), correct answer, 1-sentence explanation

**8.2 Assertion–Reason (15)**
– Mini-table with Assertion, Reason, True/False, Explanation

**8.3 Match-the-Columns (15)**
– Two-column table with items and their matches

# 9. Self-Check Quiz
– 3 open-ended questions to test deeper understanding

# 10. Memory Mnemonic
– One culturally relevant Tamil mnemonic or rhyme

# 11. Chapter Summary
– Bullet the 5 most critical takeaways

# 12. Next Steps & Tips
– Suggest 1–2 “NEET hack” tips (time management, trick shortcuts)
– Link to the next module title

Keep tone professional but encouraging. Use consistent terminology, clear hierarchy, and plentiful whitespace so every student feels guided, confident, and motivated to progress.
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
