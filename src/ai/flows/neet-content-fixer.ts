
'use server';
/**
 * @fileOverview An AI flow for correcting validation errors in a previously generated NEET module.
 *
 * - fixNeetContent - A function that takes broken markdown and a list of errors, and attempts to fix it.
 * - NeetContentFixerInput - The input type for the function.
 * - NeetContentFixerOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { qaChecklist } from '@/lib/qa-checklist';

export const NeetContentFixerInputSchema = z.object({
  brokenMarkdown: z.string().describe("The full markdown content of the module that failed validation."),
  validationErrors: z.array(z.string()).describe('A list of validation errors that were found.'),
});
export type NeetContentFixerInput = z.infer<typeof NeetContentFixerInputSchema>;

export const NeetContentFixerOutputSchema = z.object({
  fixedMarkdownContent: z.string().describe("The full, corrected markdown content for the module. This should be a single, complete file's content."),
});
export type NeetContentFixerOutput = z.infer<typeof NeetContentFixerOutputSchema>;

export async function fixNeetContent(input: NeetContentFixerInput): Promise<NeetContentFixerOutput> {
  return neetContentFixerFlow(input);
}

// Convert checklist to a formatted string for the prompt
const checklistString = qaChecklist.map(item => `- **${item.check}:** ${item.details}`).join('\n');

const prompt = ai.definePrompt({
    name: 'neetContentFixerPrompt',
    input: { schema: NeetContentFixerInputSchema },
    output: { schema: NeetContentFixerOutputSchema },
    prompt: `You are an expert AI code corrector specializing in fixing TypeScript objects for an ed-tech platform.

You will be given a block of TypeScript code that has failed validation, along with a specific list of errors. Your ONLY task is to fix the specified errors and output the complete, syntactically correct TypeScript file.

**CRITICAL INSTRUCTIONS:**
1.  **Focus on the Fix:** Do NOT regenerate the content from scratch. Analyze the provided code and the errors, and make targeted corrections.
2.  **Preserve Content:** Do not add or remove content unless it is absolutely necessary to fix a syntax error (e.g., adding a missing comma or bracket).
3.  **Adhere to the QA Checklist:** The final output must be valid according to the rules.
4.  **Output Format:** The output MUST be a single, complete TypeScript file containing a \`NeetModule\` object, enclosed in a markdown code block (e.g., \`\`\`ts ... \`\`\`).

---
**Quality Assurance (QA) Checklist for reference:**
${checklistString}
---

**THE ERRORS YOU MUST FIX ARE:**
{{#each validationErrors}}
- {{{this}}}
{{/each}}

**THE BROKEN CODE YOU MUST CORRECT IS:**
\`\`\`typescript
{{{brokenMarkdown}}}
\`\`\`

Now, provide the complete, corrected TypeScript file content.
`,
});


const neetContentFixerFlow = ai.defineFlow(
  {
    name: 'neetContentFixerFlow',
    inputSchema: NeetContentFixerInputSchema,
    outputSchema: NeetContentFixerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    
    // Handle cases where the model returns null or invalid output
    if (!output?.fixedMarkdownContent) {
        console.warn(`[Genkit Warning] Fixer model returned null. Returning original broken markdown.`);
        return { fixedMarkdownContent: input.brokenMarkdown }; // Return original content to avoid crash
    }
    
    // Clean up the markdown code block fences if the model includes them
    const cleanedContent = output.fixedMarkdownContent.replace(/^```(ts|typescript)\n?/, '').replace(/```$/, '');
    return { fixedMarkdownContent: cleanedContent };
  }
);
