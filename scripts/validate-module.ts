
/**
 * @fileOverview This script contains the validation logic for NEET Physics modules.
 * It programmatically checks the generated content against the QA checklist.
 */

import { qaChecklist } from '../src/lib/physics-checklist';
import type { NeetModule } from '../src/lib/types';

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
    // This is a simplified and somewhat unsafe way to parse the object.
    // In a real production environment, a safer parser or sandbox would be used.
    // The content is expected to be a string representation of a JS object.
    const objectString = content.substring(content.indexOf('{'), content.lastIndexOf('}') + 1);
    moduleObject = (new Function(`return ${objectString}`))();
  } catch (e: any) {
    return {
      isValid: false,
      errors: [`Failed to parse the generated module content into a valid object. Check for syntax errors: ${e.message}`],
    };
  }

  // Check 2: Verify content completeness
  const requiredKeys: (keyof NeetModule)[] = [
      'id', 'title', 'chapter', 'subject', 'learningObjectives', 'prerequisites', 
      'conceptOverview', 'tamilConnection', 'culturalContext', 'conceptNotes', 
      'workedExamples', 'mcqs', 'assertionReasons', 'matchTheColumns', 
      'keyFormulasAndDiagrams', 'keyTakeaways', 'mnemonics', 'neetTips'
    ];
  for (const key of requiredKeys) {
    const value = moduleObject[key];
    if (value === undefined || value === null || (Array.isArray(value) && value.length === 0) || (typeof value === 'string' && !value.trim())) {
      errors.push(`ContentCompleteness: The '${key}' section is missing or empty.`);
    }
  }
  
  // Check 3: Verify Practice Question Quotas
  if(moduleObject.workedExamples?.length < 5) errors.push(`Question Quotas: Expected 5+ Worked Examples, but found ${moduleObject.workedExamples?.length || 0}.`);
  if(moduleObject.mcqs?.length < 25) errors.push(`Question Quotas: Expected 25 MCQs, but found ${moduleObject.mcqs?.length || 0}.`);
  if(moduleObject.assertionReasons?.length < 5) errors.push(`Question Quotas: Expected 5 Assertion-Reason questions, but found ${moduleObject.assertionReasons?.length || 0}.`);
  if(moduleObject.matchTheColumns?.length < 5) errors.push(`Question Quotas: Expected 5 Match-the-Columns questions, but found ${moduleObject.matchTheColumns?.length || 0}.`);

  // Check 4: LaTeX error check (simple regex for unescaped single backslashes in math mode)
  // This is a heuristic and might not catch all errors.
  const latexRegex = /\\\[(.*?)\\]|\\\((.*?)\\\)|\$\$(.*?)\$\$|\$(.*?)\$/gs;
  let match;
  while((match = latexRegex.exec(content)) !== null) {
      const latexContent = match[1] || match[2] || match[3] || match[4];
      if (latexContent && latexContent.match(/(?<!\\)\\(?![\\{}])/)) {
          errors.push(`LaTeX Errors: Found a potential unescaped backslash in a LaTeX block: ${latexContent.substring(0, 30)}...`);
      }
  }

  // Final result
  return {
    isValid: errors.length === 0,
    errors,
  };
}
