
import type { NeetModule } from '@/lib/types';

export const plantPhysiology: NeetModule = {
  id: 'biology-plant-physiology',
  title: 'Plant Physiology',
  chapter: 'Plant Physiology',
  subject: 'Biology',
  conceptNotes: `
### 1. Transport in Plants (தாவரங்களில் கடத்துதல்)

*   **Means of Transport (கடத்துதல் முறைகள்):**
    *   **Diffusion (பரவல்):** Movement of substances from high to low concentration. A slow, passive process.
    *   **Facilitated Diffusion (வசதி செய்யப்பட்ட பரவல்):** Diffusion aided by membrane proteins (channels/carriers). No energy required.
    *   **Active Transport (செயல்மிகு கடத்துதல்):** Movement against a concentration gradient, requiring energy (ATP) and membrane proteins (pumps). (குறைந்த இடத்திலிருந்து அதிக இடத்திற்குப் பொருளைத் தள்ளுவது போல, ஆற்றல் தேவை).
*   **Water Potential (நீர் ஆற்றல் - Ψw):** The potential energy of water. Pure water has the highest water potential (zero). Adding solutes lowers it (negative value). Ψw = Ψs + Ψp (Solute potential + Pressure potential).
*   **Osmosis (சவ்வூடுபரவல்):** Movement of water across a semipermeable membrane from high water potential to low water potential.
*   **Plasmolysis (பிளாஸ்மோசிஸ்):** Shrinkage of protoplasm from the cell wall when a cell is placed in a hypertonic solution.
*   **Ascent of Sap (சாறு ஏறுதல்):** Upward movement of water from roots to leaves. Best explained by the **Cohesion-Tension-Transpiration Pull Model**. Water forms a continuous column due to cohesion (attraction between water molecules) and adhesion (attraction to xylem walls), and is pulled up by the tension created by transpiration.

### 2. Mineral Nutrition (கனிம ஊட்டச்சத்து)

*   **Essential Mineral Elements (அத்தியாவசிய கனிமத் தனிமங்கள்):** Macronutrients (C, H, O, N, P, K, Ca, Mg, S) and Micronutrients (Fe, Mn, Cu, Mo, Zn, B, Cl, Ni).
*   **Role and Deficiency Symptoms:** Each element has specific roles. Deficiency of any essential element leads to specific symptoms (e.g., Chlorosis - yellowing of leaves due to lack of N, K, Mg, S, Fe, Mn, Zn, Mo).
*   **Nitrogen Cycle (நைட்ரஜன் சுழற்சி):** The process of converting atmospheric nitrogen into a usable form for plants. Key steps: Nitrogen fixation (by bacteria like *Rhizobium*), Ammonification, Nitrification, and Denitrification.

### 3. Photosynthesis in Higher Plants (உயர்தரத் தாவரங்களில் ஒளிச்சேர்க்கை)

*   **Site of Photosynthesis:** Chloroplasts in the mesophyll cells of leaves.
*   **Photosynthetic Pigments:** Chlorophyll a (chief pigment), Chlorophyll b, Xanthophylls, Carotenoids.
*   **Two Phases of Photosynthesis:**
    *   **Light-Dependent Reactions (ஒளி சார்ந்த வினைகள்):** Occur in the grana. Involve light absorption, water splitting (photolysis), oxygen release, and formation of ATP and NADPH. Includes two photosystems: PS I and PS II.
    *   **Light-Independent Reactions (ஒளி சாரா வினைகள்) / Calvin Cycle (கால்வின் சுழற்சி):** Occur in the stroma. Uses ATP and NADPH from light reactions to fix CO₂ into carbohydrates (sugar). The first step is **carbon fixation** catalyzed by the enzyme RuBisCO.
*   **C4 Pathway (C4 பாதை):** An adaptation for plants in dry tropical regions (e.g., maize, sugarcane). They have Kranz anatomy. The first CO₂ fixation product is a 4-carbon compound (oxaloacetic acid). They are more efficient at photosynthesis in high temperatures and light.

### 4. Respiration in Plants (தாவரங்களில் சுவாசம்)

*   **Cellular Respiration:** The breakdown of glucose to release energy (ATP).
*   **Glycolysis (கிளைகாஸிஸ்):** The initial breakdown of glucose into two molecules of pyruvic acid. Occurs in the cytoplasm. Common to both aerobic and anaerobic respiration.
*   **Aerobic Respiration (காற்றுள்ள சுவாசம்):** Occurs in the presence of oxygen.
    *   **Krebs Cycle (கிரெப்ஸ் சுழற்சி) / Citric Acid Cycle:** Occurs in the mitochondrial matrix. Pyruvic acid is completely oxidized.
    *   **Electron Transport System (ETS) & Oxidative Phosphorylation:** Occurs on the inner mitochondrial membrane. Electrons are passed down a chain of carriers, releasing energy to synthesize ATP. Oxygen is the final electron acceptor.
*   **Anaerobic Respiration / Fermentation (காற்றில்லா சுவாசம் / நொதித்தல்):** Occurs in the absence of oxygen. Incomplete oxidation of glucose. e.g., Alcoholic fermentation (in yeast), Lactic acid fermentation.

### 5. Plant Growth and Development (தாவர வளர்ச்சி மற்றும் விருத்தி)

*   **Growth (வளர்ச்சி):** Irreversible permanent increase in size.
*   **Phases of Growth:** Meristematic, Elongation, Maturation.
*   **Plant Growth Regulators (தாவர வளர்ச்சி சீராக்கிகள்) / Phytohormones:**
    *   **Growth Promoters:**
        *   **Auxins:** Cell elongation, apical dominance, rooting in stem cuttings.
        *   **Gibberellins:** Stem elongation, break seed dormancy.
        *   **Cytokinins:** Promote cell division, overcome apical dominance.
    *   **Growth Inhibitors:**
        *   **Abscisic Acid (ABA):** Stress hormone, promotes dormancy and abscission (உதிர்தல்).
        *   **Ethylene:** Gaseous hormone, promotes fruit ripening.
*   **Photoperiodism (ஒளிக்காலத்துவம்):** The response of plants to periods of day/night. Categorized as Long-Day Plants, Short-Day Plants, and Day-Neutral Plants.
*   **Vernalisation (வசந்தமயமாக்கல்):** Promotion of flowering by a period of low temperature.
  `,
  workedExamples: [
    {
        problem: 'A plant cell with a solute potential (Ψs) of -0.7 MPa is placed in a solution with a water potential (Ψw) of -0.5 MPa. In which direction will water move?',
        solution: 'Water always moves from a region of higher water potential to a region of lower water potential. \n- **Water potential of the solution (outside):** Ψw = -0.5 MPa \n- **Water potential of the cell (inside):** Initially, assuming the cell has no turgor pressure, its water potential is equal to its solute potential, Ψw = Ψs = -0.7 MPa. \nSince -0.5 MPa is higher (less negative) than -0.7 MPa, water will move **from the solution into the cell**. (நீர் எப்போதும అధిక நீர் ஆற்றல் உள்ள இடத்திலிருந்து குறைந்த நீர் ஆற்றல் உள்ள இடத்திற்கு நகரும். எனவே, நீர் கரைசலிலிருந்து செல்லுக்குள் செல்லும்.)'
    },
    {
        problem: 'Differentiate between C3 and C4 plants based on their primary CO2 acceptor and the first stable product of carbon fixation.',
        solution: '| Feature | C3 Plants | C4 Plants |\n| :--- | :--- | :--- |\n| **Primary CO₂ acceptor** | RuBP (Ribulose-1,5-bisphosphate) - a 5-carbon compound. | PEP (Phosphoenolpyruvate) - a 3-carbon compound. |\n| **First stable product** | PGA (3-Phosphoglyceric acid) - a 3-carbon compound. | OAA (Oxaloacetic acid) - a 4-carbon compound. |\n\n(C3 தாவரங்களில் முதல் CO₂ ஏற்பி RuBP மற்றும் முதல் நிலையான பொருள் PGA (3C) ஆகும். C4 தாவரங்களில், முதல் CO₂ ஏற்பி PEP மற்றும் முதல் நிலையான பொருள் OAA (4C) ஆகும்.)'
    },
    {
        problem: 'A farmer wants to ripen a batch of green bananas quickly. Which plant growth regulator should he use and why?',
        solution: 'The farmer should use **Ethylene**. Ethylene is a gaseous plant hormone that plays a major role in the ripening of fruits, especially climacteric fruits like bananas. Applying ethylene gas (or a compound that releases ethylene, like Ethephon) will trigger and accelerate the ripening process, causing the bananas to turn yellow, soften, and become sweet more quickly. (எத்திலின் என்பது பழங்களைப் பழுக்க வைக்கும் ஒரு வாயு ஹார்மோன் ஆகும். எனவே, வாழைப்பழங்களை விரைவில் பழுக்க வைக்க எத்திலினைப் பயன்படுத்த வேண்டும்.)'
    }
  ],
  mcqs: [
    {
      question: 'The movement of water from a region of higher water potential to lower water potential through a semi-permeable membrane is called:',
      options: ['Diffusion', 'Active Transport', 'Imbibition', 'Osmosis'],
      answer: 'Osmosis',
      explanation: 'Osmosis is the specific term for the movement of water across a selectively permeable membrane down a water potential gradient.'
    },
    {
      question: 'Which of the following is NOT a macronutrient for plants?',
      options: ['Nitrogen', 'Phosphorus', 'Iron', 'Potassium'],
      answer: 'Iron',
      explanation: 'Iron (Fe) is an essential element but is required in smaller quantities, making it a micronutrient. N, P, and K are macronutrients.'
    },
    {
      question: 'The primary CO₂ acceptor in the C3 cycle is:',
      options: ['PEP (Phosphoenolpyruvate)', 'RuBP (Ribulose-1,5-bisphosphate)', 'PGA (3-Phosphoglyceric acid)', 'OAA (Oxaloacetic acid)'],
      answer: 'RuBP (Ribulose-1,5-bisphosphate)',
      explanation: 'In the Calvin cycle (C3 pathway), CO₂ is fixed by combining with RuBP, a 5-carbon compound, catalyzed by the enzyme RuBisCO.'
    },
    {
      question: 'Which of the following plant hormones is known as the "stress hormone"?',
      options: ['Auxin', 'Gibberellin', 'Cytokinin', 'Abscisic Acid (ABA)'],
      answer: 'Abscisic Acid (ABA)',
      explanation: 'ABA plays a crucial role in helping plants respond to environmental stresses like drought by inducing stomatal closure.'
    },
    {
      question: 'The final electron acceptor in the mitochondrial electron transport system is:',
      options: ['Hydrogen', 'Water', 'NAD+', 'Oxygen'],
      answer: 'Oxygen',
      explanation: 'Oxygen is the terminal electron acceptor in aerobic respiration. It combines with electrons and protons to form water.'
    },
  ],
  assertionReasons: [
    {
      assertion: 'Active transport uses energy to pump molecules against a concentration gradient.',
      reason: 'Active transport is carried out by membrane proteins.',
      answer: 'B',
      explanation: 'Both statements are true. Active transport does require energy and is mediated by proteins (pumps). However, the fact that proteins are involved does not, by itself, explain why energy is needed. The energy is needed because the movement is against the gradient.'
    },
    {
      assertion: 'In C4 plants, photorespiration does not occur.',
      reason: 'C4 plants have a mechanism that increases the concentration of CO₂ at the enzyme site.',
      answer: 'A',
      explanation: 'The reason is the correct explanation for the assertion. The C4 pathway effectively pumps CO₂ into the bundle sheath cells, ensuring that RuBisCO has a high concentration of CO₂ and a low concentration of O₂, thus preventing photorespiration.'
    }
  ],
  matchTheColumns: [
    {
      column1: ['a) Auxin', 'b) Gibberellin', 'c) Cytokinin', 'd) Ethylene'],
      column2: ['i) Promotes fruit ripening', 'ii) Promotes cell division', 'iii) Promotes stem elongation (bolting)', 'iv) Apical dominance'],
      answer: 'a-iv, b-iii, c-ii, d-i'
    },
    {
      column1: ['a) Glycolysis', 'b) Krebs Cycle', 'c) ETS', 'd) Fermentation'],
      column2: ['i) Inner mitochondrial membrane', 'ii) Cytoplasm, anaerobic', 'iii) Mitochondrial matrix', 'iv) Cytoplasm, common pathway'],
      answer: 'a-iv, b-iii, c-i, d-ii'
    }
  ],
};
