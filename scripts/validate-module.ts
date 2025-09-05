
/**
 * @fileOverview This script contains the validation logic for NEET Physics modules.
 * It programmatically checks the generated content against the QA checklist.
 */

import { qaChecklist } from '../lib/physics-checklist';
import type { NeetModule } from '../lib/types';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Recursively checks an object for placeholder strings.
 * @param obj The object or value to check.
 * @param path The current path for error reporting.
 * @returns An array of error strings found.
 */
function checkForPlaceholders(obj: any, path: string = 'module'): string[] {
    let errors: string[] = [];
    if (obj === null || obj === undefined) return errors;

    if (typeof obj === 'string') {
        const lowerCaseObj = obj.toLowerCase();
        if (lowerCaseObj.includes('placeholder') || lowerCaseObj.includes('to be filled')) {
            errors.push(`Placeholder Content: Found placeholder text in '${path}': "${obj.substring(0, 50)}..."`);
        }
    } else if (Array.isArray(obj)) {
        obj.forEach((item, index) => {
            errors = errors.concat(checkForPlaceholders(item, `${path}[${index}]`));
        });
    } else if (typeof obj === 'object') {
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                errors = errors.concat(checkForPlaceholders(obj[key], `${path}.${key}`));
            }
        }
    }
    return errors;
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
    // More robust parsing: find the object literal and use a safer eval method.
    // This looks for the first '{' and the last '}' to isolate the object.
    const objectStringMatch = content.match(/=\s*({[\s\S]*})/);
    if (!objectStringMatch) {
      throw new Error("Could not find a JavaScript object literal in the content.");
    }
    let objectString = objectStringMatch[1];
    
    // Clean up potential trailing commas which are valid in JS but not in JSON
    objectString = objectString.replace(/,\s*([}\]])/g, '$1');

    moduleObject = (new Function(`return ${objectString}`))();
  } catch (e: any) {
    return {
      isValid: false,
      errors: [`Failed to parse the generated module content into a valid object. Check for syntax errors: ${e.message}`],
    };
  }

  // Check 2: Verify content completeness - ALL keys are now required.
  const requiredKeys: (keyof NeetModule)[] = [
      'id', 'title', 'chapter', 'subject', 'learningObjectives', 'prerequisites', 
      'conceptOverview', 'tamilConnection', 'culturalContext', 'conceptNotes', 
      'workedExamples', 'mcqs', 'assertionReasons', 'matchTheColumns', 
      'keyFormulasAndDiagrams', 'keyTakeaways', 'mnemonics', 'neetTips',
      'studentTip', 'peerDiscussion', 'syllabusMapping', 'nextChapter',
      'validationReport'
    ];
  for (const key of requiredKeys) {
    const value = moduleObject[key];
    if (value === undefined || value === null || (Array.isArray(value) && value.length === 0) || (typeof value === 'string' && !value.trim()) || (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) ) {
        // Special check for keyFormulasAndDiagrams which can be an object with empty arrays
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
  if(moduleObject.mcqs?.length < 25) errors.push(`Question Quotas: Expected 25 MCQs, but found ${moduleObject.mcqs?.length || 0}.`);
  if(moduleObject.assertionReasons?.length < 5) errors.push(`Question Quotas: Expected 5 Assertion-Reason questions, but found ${moduleObject.assertionReasons?.length || 0}.`);
  if(moduleObject.matchTheColumns?.length < 5) errors.push(`Question Quotas: Expected 5 Match-the-Columns questions, but found ${moduleObject.matchTheColumns?.length || 0}.`);
  
  // Stricter check for Worked Examples, must have at least a few comprehensive ones
  if(moduleObject.workedExamples?.length < 3) errors.push(`Question Quotas: Expected 3+ comprehensive Worked Examples, but found ${moduleObject.workedExamples?.length || 0}.`);


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

  // Check 5: Placeholder Content Check
  const placeholderErrors = checkForPlaceholders(moduleObject);
  if (placeholderErrors.length > 0) {
      errors.push(...placeholderErrors);
  }

  // Final result
  return {
    isValid: errors.length === 0,
    errors,
  };
}
