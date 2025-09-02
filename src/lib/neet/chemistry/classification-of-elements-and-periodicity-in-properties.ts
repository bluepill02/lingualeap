
import type { NeetModule } from '@/lib/types';

export const classificationOfElementsAndPeriodicityInProperties: NeetModule = {
  id: 'chemistry-classification-of-elements-and-periodicity-in-properties',
  title: 'Classification of Elements and Periodicity in Properties',
  chapter: 'Classification of Elements and Periodicity in Properties',
  subject: 'Chemistry',
  conceptNotes: `
### 1. Need for Classification (வகைப்பாட்டின் தேவை)
*   To systematically study the properties of a large number of elements.

### 2. Historical Development (வரலாற்று வளர்ச்சி)
*   **Dobereiner's Triads:** Groups of three elements where the atomic weight of the middle element is the average of the other two.
*   **Newlands' Law of Octaves:** When elements are arranged by increasing atomic weight, every eighth element has properties similar to the first.
*   **Mendeleev's Periodic Law:** The properties of elements are a periodic function of their atomic masses. He left gaps for undiscovered elements.
*   **Modern Periodic Law (நவீன ஆவர்த்தன விதி):** The physical and chemical properties of the elements are periodic functions of their atomic numbers.

### 3. Modern Periodic Table (நவீன ஆவர்த்தன அட்டவணை)
*   **Periods (தொடர்கள்):** 7 horizontal rows.
*   **Groups (தொகுதிகள்):** 18 vertical columns.
*   **Blocks (தொகுதிகள்):** s, p, d, f blocks based on the orbital into which the last electron enters.

### 4. Periodic Trends in Properties (பண்புகளில் ஆவர்த்தனப் போக்கு)
*   **Atomic Radius (அணு ஆரம்):**
    *   Decreases across a period (left to right) due to an increase in effective nuclear charge.
    *   Increases down a group due to the addition of new shells.
*   **Ionic Radius (அயனி ஆரம்):** Cations are smaller and anions are larger than their parent atoms.
*   **Ionization Enthalpy (அயனியாக்கும் ஆற்றல்):** The energy required to remove an electron from an isolated gaseous atom.
    *   Increases across a period.
    *   Decreases down a group.
*   **Electron Gain Enthalpy (எலக்ட்ரான் நாட்டம்):** The enthalpy change when an electron is added to an isolated gaseous atom.
    *   Generally becomes more negative across a period. Halogens have the most negative values.
*   **Electronegativity (எலக்ட்ரான் கவர்தன்மை):** The ability of an atom in a chemical compound to attract a shared pair of electrons.
    *   Increases across a period.
    *   Decreases down a group.
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
