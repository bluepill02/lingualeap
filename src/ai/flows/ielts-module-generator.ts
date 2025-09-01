
'use server';
/**
 * @fileOverview IELTS Exam Module Generator. This flow uses AI to generate a full exam prep module based on user specifications.
 *
 * - generateIeltsModule - A function to generate the IELTS module.
 * - GenerateIeltsModuleInput - The input type for the generateIeltsModule function.
 * - GenerateIeltsModuleOutput - The return type for the generateIeltsModule function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateIeltsModuleInputSchema = z.object({
  variant: z.enum(['Academic', 'General Training']).describe("The IELTS exam variant for which to generate the module."),
});
export type GenerateIeltsModuleInput = z.infer<typeof GenerateIeltsModuleInputSchema>;

const GenerateIeltsModuleOutputSchema = z.object({
    markdownContent: z.string().describe("The full IELTS module content in Markdown format.")
});
export type GenerateIeltsModuleOutput = z.infer<typeof GenerateIeltsModuleOutputSchema>;


export async function generateIeltsModule(input: GenerateIeltsModuleInput): Promise<GenerateIeltsModuleOutput> {
  return ieltsModuleGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'ieltsModulePrompt',
  input: {schema: GenerateIeltsModuleInputSchema},
  output: {schema: GenerateIeltsModuleOutputSchema},
  prompt: `You are an expert English exam-prep content creator. Focus on the IELTS {{variant}} exam. Generate structured, exam-ready vocabulary modules in Markdown.

For the IELTS {{variant}} exam, produce these modules:

1. Synonyms & Antonyms (100 entries)
2. One-Word Substitutions (80 entries)
3. Idioms & Phrases (60 entries)
4. Proverbs & Sayings (20 entries)
5. Collocations & Common Usage (80 entries)
6. Fill-in-the-Blank Bank (15 sentences)
7. Sentence Correction Exercises (15 sentences)
8. Quiz 1: 10 multiple-choice questions (Modules 1–3)
9. Quiz 2: 10 fill-in-the-blank questions (Modules 5–6)

Formatting Requirements:
- Use Markdown tables for modules 1–5 with the requested columns.
- Use numbered lists for modules 6–7 and for quizzes.
- Group each module under its own "##" heading.
- Add a horizontal divider ("---") between major sections for readability.

Return the entire response as a single markdown string in the 'markdownContent' field.
`,
});

const ieltsModuleGeneratorFlow = ai.defineFlow(
  {
    name: 'ieltsModuleGeneratorFlow',
    inputSchema: GenerateIeltsModuleInputSchema,
    outputSchema: GenerateIeltsModuleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
