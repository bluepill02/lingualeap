
import type { NeetModule } from '@/lib/types';

export const purificationAndCharacterisationOfOrganicCompounds: NeetModule = {
  id: 'chemistry-purification-and-characterisation-of-organic-compounds',
  title: 'Purification and Characterisation of Organic Compounds',
  chapter: 'Purification and Characterisation of Organic Compounds',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Purification Methods (தூய்மையாக்கல் முறைகள்)
*   **Crystallisation (படிகமாக்கல்):** Based on the difference in the solubilities of the compound and the impurities in a suitable solvent.
*   **Sublimation (பதங்கமாதல்):** For solids that sublime (pass directly from solid to gas), to separate them from non-volatile impurities.
*   **Distillation (காய்ச்சி வடித்தல்):** To separate volatile liquids from non-volatile impurities, or liquids having a sufficient difference in boiling points.
*   **Chromatography (நாற்கூறு பிரிகை முறை):** A powerful technique used to separate mixtures. Based on the differential adsorption of components of a mixture on an adsorbent.

### 2. Qualitative Analysis (பண்பறிப் பகுப்பாய்வு)
*   **Detection of Carbon and Hydrogen:** Heating the compound with copper(II) oxide. Carbon is oxidized to CO₂ (turns lime water milky), and hydrogen to H₂O (turns anhydrous copper sulphate blue).
*   **Lassaigne's Test for Nitrogen, Sulphur, and Halogens:** The organic compound is fused with sodium metal to convert these elements into ionic forms (NaCN, Na₂S, NaX).
    *   **Nitrogen:** Treated with FeSO₄, forms Prussian blue color (ferric ferrocyanide).
    *   **Sulphur:** With sodium nitroprusside gives a violet color.
    *   **Halogens:** Acidified with HNO₃ and treated with AgNO₃. White ppt (AgCl), pale yellow ppt (AgBr), yellow ppt (AgI).

### 3. Quantitative Analysis (அளவறிப் பகுப்பாய்வு)
*   **Carbon and Hydrogen (Liebig's Method):** The compound is burnt in excess oxygen and the amounts of CO₂ and H₂O produced are measured.
*   **Nitrogen (Dumas Method & Kjeldahl's Method):**
    *   **Dumas Method:** The nitrogen-containing compound is heated with copper oxide, and the volume of N₂ gas evolved is measured.
    *   **Kjeldahl's Method:** The compound is heated with concentrated H₂SO₄. The nitrogen is converted to (NH₄)₂SO₄, which is then treated with excess alkali to liberate ammonia. The ammonia is then titrated.
*   **Halogens (Carius Method):** The compound is heated with fuming HNO₃ and AgNO₃. The halogen is precipitated as silver halide (AgX), which is then weighed.
`,
  workedExamples: [
    {
        problem: "In the Lassaigne's test for nitrogen in an organic compound, the Prussian blue colour is obtained due to the formation of which compound?",
        solution: "The Prussian blue colour is due to the formation of Ferric ferrocyanide, Fe₄[Fe(CN)₆]₃. The reaction sequence involves the formation of sodium cyanide (NaCN) from the organic compound, which then reacts with ferrous sulphate to form sodium ferrocyanide. Ferric ions (from the oxidation of some ferrous ions) then react with sodium ferrocyanide to give the deep blue precipitate."
    },
    {
        problem: "0.25 g of an organic compound gave 0.35 g of CO₂ and 0.20 g of H₂O on complete combustion. Calculate the percentage of carbon and hydrogen in the compound.",
        solution: "Mass of C in 0.35 g CO₂ = (12/44) * 0.35 g = 0.0955 g. % of C = (0.0955 / 0.25) * 100 = 38.2%. Mass of H in 0.20 g H₂O = (2/18) * 0.20 g = 0.0222 g. % of H = (0.0222 / 0.25) * 100 = 8.88%."
    },
    {
        problem: "Why is Kjeldahl's method not applicable for compounds containing nitrogen in nitro and azo groups and nitrogen present in the ring (e.g., pyridine)?",
        solution: "In Kjeldahl's method, the nitrogen in the organic compound must be quantitatively converted into ammonium sulphate upon heating with concentrated H₂SO₄. The nitrogen atoms in nitro (-NO₂) and azo (-N=N-) groups, and in heterocyclic rings like pyridine, are not completely converted to ammonium sulphate under these conditions. Therefore, this method cannot be used for these types of compounds."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
