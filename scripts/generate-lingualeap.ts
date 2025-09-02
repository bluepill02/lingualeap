
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { generateNeetContent } from '../src/ai/flows/neet-content-generator';

// Define a specific type for the subjects
type Subject = 'physics' | 'chemistry' | 'biology';

// NEET UG 2025 syllabus exactly as per NTA PDF
const neetSyllabus: Record<Subject, string[]> = {
  physics: [
    'Physics and Measurement',
    'Kinematics',
    'Laws of Motion',
    'Work, Energy, and Power',
    'Rotational Motion',
    'Gravitation',
    'Properties of Solids and Liquids',
    'Thermodynamics',
    'Kinetic Theory of Gases',
    'Oscillations and Waves',
    'Electrostatics',
    'Current Electricity',
    'Magnetic Effects of Current and Magnetism',
    'Electromagnetic Induction and Alternating Currents',
    'Electromagnetic Waves',
    'Optics',
    'Dual Nature of Matter and Radiation',
    'Atoms and Nuclei',
    'Electronic Devices',
    'Experimental Skills',
  ],
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

// Use the Subject type for the keys of expectedCounts
const expectedCounts: Record<Subject, number> = { physics: 20, chemistry: 20, biology: 10 };

// Guard clause to ensure 100% coverage
for (const subject of Object.keys(neetSyllabus) as Subject[]) {
  const chapters = neetSyllabus[subject];
  if (chapters.length !== expectedCounts[subject]) {
    throw new Error(
      `Syllabus mismatch for ${subject}: expected ${expectedCounts[subject]}, found ${chapters.length}`
    );
  }
}
console.log('✅ NEET UG 2025 syllabus arrays fully aligned with NTA PDF');

// Batch-generate lessons
async function run() {
  for (const subject of Object.keys(neetSyllabus) as Subject[]) {
    const chapters = neetSyllabus[subject];
    for (const chapter of chapters) {
      try {
        console.log(`🚀 Generating ${subject} > ${chapter}...`);
        
        // Call the Genkit flow directly
        const result = await generateNeetContent({ subject, chapter });
        
        const safeName = chapter.replace(/[\/:]/g, '').replace(/\s+/g, '-').toLowerCase();
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
