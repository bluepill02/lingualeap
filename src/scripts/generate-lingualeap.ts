
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { generateNeetContent } from '../ai/flows/neet-content-generator';
import { fixNeetContent } from '../ai/flows/neet-content-fixer';
import { validateModule } from './validate-module';
import type { NeetModule } from '../lib/types';


// Define a specific type for the subjects and categories
type Subject = 'physics' | 'chemistry' | 'biology';
type Category = 'core' | 'bridge' | 'foundation';

const MAX_RETRIES = 3;

// NEET UG 2025 syllabus based on strategic categorization
const neetSyllabus: {
  physics: Record<Category, string[]>;
  chemistry: Record<Category, string[]>;
  biology: Record<Category, string[]>;
} = {
  physics: {
    core: [
      'Laws of Motion',
      'Work, Energy & Power',
      'Motion in a Straight Line',
      'Thermodynamics',
      'Ray Optics & Optical Instruments',
      'Current Electricity',
      'Electrostatics',
      'Atoms',
      'Nuclei',
      'Semiconductor Electronics'
    ],
    bridge: [
      'Electromagnetic Waves',
      'Wave Optics',
      'Moving Charges and Magnetism',
      'Magnetism and Matter',
      'Electromagnetic Induction',
      'Dual Nature of Radiation and Matter'
    ],
    foundation: [
      'Physical World',
      'Units and Measurements',
      'Kinetic Theory of Gases',
      'System of Particles and Rotational Motion',
      'Gravitation',
      'Mechanical Properties of Solids',
      'Mechanical Properties of Fluids',
      'Thermal Properties of Matter',
      'Oscillations',
      'Waves',
      'Alternating Current',
      'Communication Systems'
    ],
  },
  chemistry: {
    foundation: [
        "Some Basic Concepts in Chemistry",
        "Classification of Elements and Periodicity in Properties",
        "Atomic Structure",
        "Chemical Bonding and Molecular Structure",
        "Purification and Characterisation of Organic Compounds",
        "Some Basic Principles of Organic Chemistry"
    ],
    bridge: [
        "Chemical Thermodynamics",
        "Solutions",
        "Equilibrium",
        "Redox Reactions and Electrochemistry",
        "Chemical Kinetics"
    ],
    core: [
        "p-Block Elements",
        "d- and f-Block Elements",
        "Coordination Compounds",
        "Hydrocarbons",
        "Organic Compounds Containing Halogens",
        "Organic Compounds Containing Oxygen",
        "Organic Compounds Containing Nitrogen",
        "Biomolecules",
        "Principles Related to Practical Chemistry"
    ]
  },
  biology: {
    foundation: [
        "Diversity in Living World",
        "Structural Organisation in Animals and Plants",
        "Cell Structure and Function"
    ],
    bridge: [
        "Plant Physiology",
        "Human Physiology"
    ],
    core: [
        "Reproduction",
        "Genetics and Evolution",
        "Biology and Human Welfare",
        "Biotechnology and Its Applications",
        "Ecology and Environment"
    ]
  }
};

// Batch-generate lessons
async function run() {
  const subjects: Subject[] = ['physics', 'chemistry', 'biology'];

  for (const subject of subjects) {
    for (const category of Object.keys(neetSyllabus[subject]) as Category[]) {
      const chapters = neetSyllabus[subject][category];
      for (const chapter of chapters) {
          let lastErrors: string[] = [];
          let success = false;
          let currentContent: string | null = null;

          for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
              try {
                  const subjectTitleCase = subject.charAt(0).toUpperCase() + subject.slice(1);
                  if (currentContent === null) {
                      console.log(`🚀 [Attempt ${attempt}/${MAX_RETRIES}] Generating ${subjectTitleCase} > ${category} > ${chapter}...`);
                      const result = await generateNeetContent({ 
                          subject: subjectTitleCase as 'Physics' | 'Chemistry' | 'Biology', 
                          chapter, 
                          category,
                          previousErrors: lastErrors,
                      });
                      currentContent = result.markdownContent;
                  } else {
                      console.log(`FIXING... 🛠️ [Attempt ${attempt}/${MAX_RETRIES}] Fixing ${subjectTitleCase} > ${category} > ${chapter}...`);
                      const result = await fixNeetContent({
                          brokenMarkdown: currentContent,
                          validationErrors: lastErrors,
                      });
                      currentContent = result.fixedMarkdownContent;
                  }

                  if (!currentContent) {
                      throw new Error("AI returned empty content.");
                  }
                  
                  console.log(`🔍 Validating module for ${chapter}...`);
                  const { isValid, errors } = await validateModule(currentContent, chapter);

                  if (!isValid) {
                      console.error(`❌ Validation failed for ${chapter} on attempt ${attempt}:`);
                      errors.forEach(error => console.error(` - ${error}`));
                      lastErrors = errors;
                      if (attempt === MAX_RETRIES) {
                          console.error(`❌ All ${MAX_RETRIES} attempts failed for ${chapter}. Moving on.`);
                      }
                      continue; 
                  }

                  console.log(`✅ Validation passed for ${chapter} on attempt ${attempt}.`);
                  
                  const safeName = chapter.replace(/[\/&,]/g, '').replace(/\s+/g, '-').toLowerCase();
                  const filePath = path.resolve(__dirname, `../../content/neet/${subject}`, `${safeName}.ts`);
                  
                  fs.mkdirSync(path.dirname(filePath), { recursive: true });
                  fs.writeFileSync(filePath, currentContent);

                  console.log(`📝 Successfully generated and saved ${subjectTitleCase} > ${category} > ${chapter}`);
                  success = true;
                  break;
              } catch (error: any) {
                  console.error(`❌ An unexpected error occurred during attempt ${attempt} for ${chapter}:`, error.message || error);
                  lastErrors = [String(error.message || error)];
                  currentContent = null;
              }
          }
      }
    }
  }
}

run().catch(console.error);
