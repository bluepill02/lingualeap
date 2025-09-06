
/**
 * @fileOverview This script contains the validation logic for NEET Physics modules.
 * It programmatically checks the generated content against the QA checklist.
 */

import { qaChecklist } from '@/lib/qa-checklist';
import type { NeetModule } from '../lib/types';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validates a generated NEET module against a set of predefined quality checks.
 * @param content The string content of the generated module file.
 * @param chapterName The name of the chapter for context in error messages.
 * @returns A promise that resolves to a ValidationResult object.
 */
export async function validateModule(content: string, chapterName: string): Promise<ValidationResult> {
  const errors: string[] = [];
  let moduleObject: NeetModule;

  // Check 1: Parse the content into a TypeScript object
  try {
    const objectStringMatch = content.match(/=\s*({[\s\S]*})/);
    if (!objectStringMatch) {
      throw new Error("Could not find a JavaScript object literal in the content.");
    }
    let objectString = objectStringMatch[1];
    objectString = objectString.replace(/,\s*([}\]])/g, '$1');
    moduleObject = (new Function(`return ${objectString}`))();
  } catch (e: any) {
    return {
      isValid: false,
      errors: [`Failed to parse the generated module content into a valid object. Check for syntax errors: ${e.message}`],
    };
  }

  // Check 2: Verify content completeness
  const baseRequiredKeys: (keyof NeetModule)[] = [
      'id', 'title', 'chapter', 'subject', 'learningObjectives', 'prerequisites', 
      'conceptOverview', 'tamilConnection', 'culturalContext', 
      'workedExamples', 'mcqs', 'assertionReasons', 'matchTheColumns', 
      'keyFormulasAndDiagrams', 'keyTakeaways', 'mnemonics', 'neetTips',
      'studentTip', 'peerDiscussion', 'syllabusMapping', 'nextChapter',
      'validationReport'
  ];

  let requiredKeys = [...baseRequiredKeys];
  
  if (moduleObject.subject === 'Biology') {
      requiredKeys.push('stateBoardGaps', 'extraNeetConcepts', 'ncertReadingGuide');
  } else {
      requiredKeys.push('conceptNotes');
  }

  for (const key of requiredKeys) {
    const value = moduleObject[key];
    if (value === undefined || value === null || (Array.isArray(value) && value.length === 0) || (typeof value === 'string' && !value.trim()) || (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) ) {
        if (key === 'keyFormulasAndDiagrams') {
            const kd = value as any;
            if (!kd || (!kd.formulas?.length && !kd.diagrams?.length)) {
                 errors.push(`ContentCompleteness: The '${key}' section is missing or empty.`);
            }
            continue;
        }
      errors.push(`ContentCompleteness: The '${key}' section is missing or empty.`);
    }
  }
  
  // Check 3: Verify Practice Question Quotas
  const expectedMcqs = moduleObject.subject === 'Biology' ? 50 : 25;
  if(moduleObject.mcqs?.length < expectedMcqs) errors.push(`Question Quotas: Expected ${expectedMcqs} MCQs for ${moduleObject.subject}, but found ${moduleObject.mcqs?.length || 0}.`);
  if(moduleObject.assertionReasons?.length < 5) errors.push(`Question Quotas: Expected 5 Assertion-Reason questions, but found ${moduleObject.assertionReasons?.length || 0}.`);
  if(moduleObject.matchTheColumns?.length < 5) errors.push(`Question Quotas: Expected 5 Match-the-Columns questions, but found ${moduleObject.matchTheColumns?.length || 0}.`);
  if(moduleObject.workedExamples?.length < 3) errors.push(`Question Quotas: Expected 3+ comprehensive Worked Examples, but found ${moduleObject.workedExamples?.length || 0}.`);

  // Check 4: LaTeX error check
  const latexRegex = /\\\[(.*?)\\]|\\\((.*?)\\\)|\$\$(.*?)\$\$|\$(.*?)\$/gs;
  let match;
  while((match = latexRegex.exec(content)) !== null) {
      const latexContent = match[1] || match[2] || match[3] || match[4];
      if (latexContent && latexContent.match(/(?<!\\)\\(?![\\{}])/)) {
          errors.push(`LaTeX Errors: Found a potential unescaped backslash in a LaTeX block: ${latexContent.substring(0, 30)}...`);
      }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
