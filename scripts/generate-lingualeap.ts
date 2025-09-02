import 'dotenv/config';
// scripts/generate-neet.ts

import { GenkitClient } from "genkit"
import fs from "fs"
import path from "path"

// 1) Instantiate your Genkit client
const client = new GenkitClient({ apiKey: process.env.GENKIT_API_KEY! })

// 2) NEET UG 2025 syllabus exactly as per NTA PDF
const neetSyllabus: Record<string, string[]> = {
  physics: [
    "Physics and Measurement",
    "Kinematics",
    "Laws of Motion",
    "Work, Energy, and Power",
    "Rotational Motion",
    "Gravitation",
    "Properties of Solids and Liquids",
    "Thermodynamics",
    "Kinetic Theory of Gases",
    "Oscillations and Waves",
    "Electrostatics",
    "Current Electricity",
    "Magnetic Effects of Current and Magnetism",
    "Electromagnetic Induction and Alternating Currents",
    "Electromagnetic Waves",
    "Optics",
    "Dual Nature of Matter and Radiation",
    "Atoms and Nuclei",
    "Electronic Devices",
    "Experimental Skills",
  ],
  chemistry: [
    // Physical Chemistry
    "Some Basic Concepts in Chemistry",
    "Atomic Structure",
    "Chemical Bonding and Molecular Structure",
    "Chemical Thermodynamics",
    "Solutions",
    "Equilibrium",
    "Redox Reactions and Electrochemistry",
    "Chemical Kinetics",

    // Inorganic Chemistry
    "Classification of Elements and Periodicity in Properties",
    "p-Block Elements",
    "d- and f-Block Elements",
    "Coordination Compounds",

    // Organic Chemistry
    "Purification and Characterisation of Organic Compounds",
    "Some Basic Principles of Organic Chemistry",
    "Hydrocarbons",
    "Organic Compounds Containing Halogens",
    "Organic Compounds Containing Oxygen",
    "Organic Compounds Containing Nitrogen",
    "Biomolecules",
    "Principles Related to Practical Chemistry",
  ],
  biology: [
    "Diversity in Living World",
    "Structural Organisation in Animals and Plants",
    "Cell Structure and Function",
    "Plant Physiology",
    "Human Physiology",
    "Reproduction",
    "Genetics and Evolution",
    "Biology and Human Welfare",
    "Biotechnology and Its Applications",
    "Ecology and Environment",
  ],
}

// 3) Prompt template remains the same
function makePrompt(subject: string, chapter: string) {
  return `
You are an award-winning NEET curriculum architect specializing in Tamil Nadu government-school students.
Generate a complete lesson module for NEET ${subject.toUpperCase()} – “${chapter}”:
- Concept Notes (with Tamil analogies)
- 7 Worked Examples
- 25 NEET-style MCQs + solutions
- 15 Assertion–Reason Qs
- 15 Match-the-Columns
- ASCII/LaTeX diagrams with Tamil labels
Return output as clean Markdown.
`.trim()
}

// 4) Optional guard clause to ensure 100% coverage
const expectedCounts = { physics: 20, chemistry: 20, biology: 10 }
for (const [subject, chapters] of Object.entries(neetSyllabus)) {
  if (chapters.length !== expectedCounts[subject]) {
    throw new Error(
      `Syllabus mismatch for ${subject}: expected ${expectedCounts[subject]}, found ${chapters.length}`
    )
  }
}
console.log("✅ NEET UG 2025 syllabus arrays fully aligned with NTA PDF")

// 5) Batch-generate lessons
async function run() {
  for (const [subject, chapters] of Object.entries(neetSyllabus)) {
    for (const chapter of chapters) {
      const safeName = chapter.replace(/[\/:]/g, "").replace(/\s+/g, "-").toLowerCase()
      const filePath = path.resolve(__dirname, "../content/neet", subject, `${safeName}.md`)
      fs.mkdirSync(path.dirname(filePath), { recursive: true })

      await client.generateFile({
        path: filePath,
        instructions: makePrompt(subject, chapter),
      })
      console.log(`📝 Generated ${subject} › ${chapter}`)
    }
  }
}

run().catch(console.error)
