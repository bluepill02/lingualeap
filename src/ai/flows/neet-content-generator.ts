
'use server';
/**
 * @fileOverview An AI flow for generating comprehensive, high-quality educational modules for NEET physics preparation, tailored for Tamil Nadu students.
 *
 * - generateNeetContent - A function that handles the content generation for a given chapter.
 * - NeetContentGeneratorInput - The input type for the function.
 * - NeetContentGeneratorOutput - The return type for the function, which is the full markdown content of the module.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { qaChecklist } from '@/lib/physics-checklist';

export const NeetContentGeneratorInputSchema = z.object({
  subject: z.string().describe('The subject, e.g., "Physics".'),
  chapter: z.string().describe('The name of the chapter, e.g., "Laws of Motion".'),
  category: z.string().optional().describe('The strategic category of the chapter (Core, Bridge, or Foundation).'),
  previousErrors: z.array(z.string()).optional().describe('A list of validation errors from a previous attempt to fix.'),
});
export type NeetContentGeneratorInput = z.infer<typeof NeetContentGeneratorInputSchema>;

export const NeetContentGeneratorOutputSchema = z.object({
  markdownContent: z.string().describe("The full, final markdown content for the specified NEET chapter module. This should be a single, complete file's content."),
});
export type NeetContentGeneratorOutput = z.infer<typeof NeetContentGeneratorOutputSchema>;

export async function generateNeetContent(input: NeetContentGeneratorInput): Promise<NeetContentGeneratorOutput> {
  return neetContentGeneratorFlow(input);
}

// Convert checklist to a formatted string for the prompt
const checklistString = qaChecklist.map(item => `- **${item.check}:** ${item.details}`).join('\n');

const prompt = ai.definePrompt({
    name: 'neetContentGeneratorPrompt',
    input: { schema: NeetContentGeneratorInputSchema },
    output: { schema: NeetContentGeneratorOutputSchema },
    prompt: `You are an expert in Physics pedagogy and content creation, specializing in preparing students from Tamil Nadu for the NEET exam. Your task is to generate a complete, high-quality educational module for the given chapter.

**Chapter:** {{{chapter}}}
**Subject:** {{{subject}}}
{{#if category}}
**Category:** {{{category}}}
{{/if}}

You must generate the content as a single, complete TypeScript file containing a \`NeetModule\` object. The output must be enclosed in a single markdown code block (e.g., \`\`\`ts ... \`\`\`).

{{#if previousErrors}}
**IMPORTANT: This is a second attempt. The previous generation failed validation with the following errors. You MUST correct these specific errors in this new version.**
**Previous Errors:**
{{#each previousErrors}}
- {{{this}}}
{{/each}}
{{/if}}

**CRITICAL: ADHERENCE TO THE QUALITY CHECKLIST**
The generated module MUST strictly adhere to every single item on the following Quality Assurance (QA) checklist. This is not optional.

---
**LinguaLeap Physics Module QA Checklist:**
${checklistString}
---

Now, generate the complete TypeScript module file content for the chapter "{{{chapter}}}" based on these rigorous instructions. Ensure all previous errors are fixed.
`,
});


const neetContentGeneratorFlow = ai.defineFlow(
  {
    name: 'neetContentGeneratorFlow',
    inputSchema: NeetContentGeneratorInputSchema,
    outputSchema: NeetContentGeneratorOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    
    // Handle cases where the model returns null or invalid output
    if (!output?.markdownContent) {
        console.warn(`[Genkit Warning] Model returned null or invalid output for chapter: ${input.chapter}. Returning empty content.`);
        return { markdownContent: '' };
    }
    
    // Clean up the markdown code block fences if the model includes them
    const cleanedContent = output.markdownContent.replace(/^```(ts|typescript)\n?/, '').replace(/```$/, '');
    return { markdownContent: cleanedContent };
  }
);
