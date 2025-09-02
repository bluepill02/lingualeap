
import type { NeetModule } from '@/lib/types';

export const classificationOfElementsAndPeriodicityInProperties: NeetModule = {
  id: 'chemistry-classification-of-elements-and-periodicity-in-properties',
  title: 'Classification of Elements and Periodicity in Properties',
  chapter: 'Classification of Elements and Periodicity in Properties',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Need for Classification & Historical Development
*   **Why Classify?** To systematically study the properties of a large number of elements.
*   **Modem periodic law and present form of the periodic table:** The physical and chemical properties of the elements are periodic functions of their atomic numbers. The modern periodic table consists of 7 periods (horizontal rows) and 18 groups (vertical columns).

### 2. s, p, d and f block elements
*   Elements are classified into four blocks based on the type of atomic orbital into which the last differentiating electron enters.
    *   **s-Block:** Last electron enters the s-orbital. Groups 1 and 2.
    *   **p-Block:** Last electron enters the p-orbital. Groups 13 to 18.
    *   **d-Block (Transition Elements):** Last electron enters the d-orbital. Groups 3 to 12.
    *   **f-Block (Inner Transition Elements):** Last electron enters the f-orbital. Lanthanoids and Actinoids.

### 3. Periodic trends in properties of elements
*   **Atomic and Ionic Radii:**
    *   **Atomic Radius:** Decreases across a period (due to increased effective nuclear charge) and increases down a group (due to addition of new shells).
    *   **Ionic Radius:** A cation is smaller than its parent atom, while an anion is larger. For isoelectronic species, radius decreases as nuclear charge increases.
*   **Ionization Enthalpy (IE):** Energy required to remove an electron from an isolated gaseous atom.
    *   Increases across a period.
    *   Decreases down a group.
    *   Note exceptions due to stable half-filled and fully-filled electronic configurations.
*   **Electron Gain Enthalpy (ΔegH):** Enthalpy change when an electron is added to an isolated gaseous atom.
    *   Generally becomes more negative across a period.
    *   Generally becomes less negative down a group.
    *   Halogens have the most negative values. Noble gases have large positive values.
*   **Valence and Oxidation States:** Valence is the combining capacity of an element. Oxidation state is the charge an atom would have if all bonds were 100% ionic.
*   **Chemical Reactivity:** Trends in reactivity can be predicted based on the periodic trends in ionization enthalpy and electronegativity. For example, reactivity of metals increases down a group, while for non-metals it generally decreases.
`,
  workedExamples: [
    {
        problem: "Arrange the following in order of increasing ionic radius: N³⁻, O²⁻, F⁻, Na⁺, Mg²⁺.",
        solution: "These are isoelectronic species (all have 10 electrons). For isoelectronic species, the radius decreases as the nuclear charge (atomic number) increases. Atomic numbers are N(7), O(8), F(9), Na(11), Mg(12). Therefore, the order of increasing ionic radius is: Mg²⁺ < Na⁺ < F⁻ < O²⁻ < N³⁻."
    },
    {
        problem: "Why does the first ionization enthalpy of Boron (B) is slightly less than that of Beryllium (Be), even though B is to the right of Be in the periodic table?",
        solution: "Beryllium has the electronic configuration [He] 2s². Boron has [He] 2s² 2p¹. The electron to be removed from Beryllium is from a more stable, fully-filled 2s orbital. The electron to be removed from Boron is from a less stable, higher-energy 2p orbital. Removing an electron from the stable 2s orbital of Be requires more energy than removing an electron from the 2p orbital of B. Hence, the first ionization enthalpy of Be is higher than B."
    },
    {
        problem: "Explain why the electron gain enthalpy of Fluorine is less negative than that of Chlorine.",
        solution: "This is an exception to the general trend. Fluorine has a very small atomic size. The incoming electron experiences strong repulsion from the already present electrons in the small 2p orbital of Fluorine. In Chlorine, the atom is larger (electron enters the 3p orbital), so the electron-electron repulsion is less. Therefore, Chlorine has a greater attraction for the incoming electron, resulting in a more negative electron gain enthalpy."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
