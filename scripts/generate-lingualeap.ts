
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { generateNeetContent } from '../src/ai/flows/neet-content-generator';
import { fixNeetContent } from '../src/ai/flows/neet-content-fixer';
import { validateModule } from './validate-module';
import type { NeetModule } from '../src/lib/types';


// Define a specific type for the subjects and categories
type Subject = 'physics' | 'chemistry' | 'biology';
type PhysicsCategory = 'core' | 'bridge' | 'foundation';

const MAX_RETRIES = 3;

// NEET UG 2025 syllabus based on strategic categorization
const neetSyllabus: {
  physics: Record<PhysicsCategory, string[]>;
  chemistry: string[];
  biology: string[];
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
  chemistry: [
    // Physical Chemistry
    'Some Basic Concepts in Chemistry',
    'Atomic Structure',
    'Chemical Bonding and Molecular Structure',
    'Chemical Thermodynamics',
    'Solutions',
    'Equilibrium',
    'Redox Reactions and Electrochemistry',
    'Chemical Kinetics',

    // Inorganic Chemistry
    'Classification of Elements and Periodicity in Properties',
    'p-Block Elements',
    'd- and f-Block Elements',
    'Coordination Compounds',

    // Organic Chemistry
    'Purification and Characterisation of Organic Compounds',
    'Some Basic Principles of Organic Chemistry',
    'Hydrocarbons',
    'Organic Compounds Containing Halogens',
    'Organic Compounds Containing Oxygen',
    'Organic Compounds Containing Nitrogen',
    'Biomolecules',
    'Principles Related to Practical Chemistry',
  ],
  biology: [
    'Diversity in Living World',
    'Structural Organisation in Animals and Plants',
    'Cell Structure and Function',
    'Plant Physiology',
    'Human Physiology',
    'Reproduction',
    'Genetics and Evolution',
    'Biology and Human Welfare',
    'Biotechnology and Its Applications',
    'Ecology and Environment',
  ],
};

// Batch-generate lessons
async function run() {
  // Generate Physics content by category
  for (const category of Object.keys(neetSyllabus.physics) as PhysicsCategory[]) {
    const chapters = neetSyllabus.physics[category];
    for (const chapter of chapters) {
        let lastErrors: string[] = [];
        let success = false;
        let currentContent = '';

        for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
            try {
                if (attempt === 1) {
                    console.log(`🚀 [Attempt 1/${MAX_RETRIES}] Generating Physics > ${category} > ${chapter}...`);
                    const result = await generateNeetContent({ 
                        subject: 'Physics', 
                        chapter, 
                        category,
                    });
                    currentContent = result.markdownContent;
                } else {
                    console.log(`FIXING... 🛠️ [Attempt ${attempt}/${MAX_RETRIES}] Fixing Physics > ${category} > ${chapter}...`);
                    const result = await fixNeetContent({
                        brokenMarkdown: currentContent,
                        validationErrors: lastErrors,
                    });
                    currentContent = result.fixedMarkdownContent;
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
                const filePath = path.resolve(__dirname, '../content/neet/physics', `${safeName}.md`);
                
                fs.mkdirSync(path.dirname(filePath), { recursive: true });
                fs.writeFileSync(filePath, currentContent);

                console.log(`📝 Successfully generated and saved Physics > ${category} > ${chapter}`);
                success = true;
                break; // Exit the retry loop on success
            } catch (error) {
                console.error(`❌ An unexpected error occurred during attempt ${attempt} for ${chapter}:`, error);
                lastErrors = [String(error)];
            }
        }
    }
  }

  // Generate for other subjects (unchanged)
  const otherSubjects: Subject[] = ['chemistry', 'biology'];
  for (const subject of otherSubjects) {
    const chapters = neetSyllabus[subject];
    for (const chapter of chapters) {
       try {
        console.log(`🚀 Generating ${subject} > ${chapter}...`);
        
        const result = await generateNeetContent({ subject, chapter });
        
        const safeName = chapter.replace(/[\/&,]/g, '').replace(/\s+/g, '-').toLowerCase();
        const filePath = path.resolve(__dirname, '../content/neet', subject, `${safeName}.md`);
        
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, result.markdownContent);

        console.log(`📝 Successfully generated ${subject} > ${chapter}`);
      } catch (error) {
        console.error(`❌ Failed to generate ${subject} > ${chapter}:`, error);
      }
    }
  }
}

run().catch(console.error);
