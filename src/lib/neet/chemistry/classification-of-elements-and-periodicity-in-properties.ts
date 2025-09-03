
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
  mcqs: [
    {
        "question": "The element with atomic number 35 belongs to which block of the periodic table?",
        "options": ["s-block", "p-block", "d-block", "f-block"],
        "answer": "p-block",
        "explanation": "The electronic configuration of Z=35 (Bromine) is [Ar] 3d¹⁰ 4s² 4p⁵. The last electron enters the p-orbital, so it belongs to the p-block."
    },
    {
        "question": "Which of the following has the smallest atomic radius?",
        "options": ["Na", "Mg", "Si", "Cl"],
        "answer": "Cl",
        "explanation": "Atomic radius decreases across a period from left to right due to increasing effective nuclear charge. All these elements are in the 3rd period, so Cl will be the smallest."
    },
    {
        "question": "The first ionization enthalpy of Nitrogen is higher than that of Oxygen because:",
        "options": ["Nitrogen is smaller than Oxygen", "Nitrogen has a half-filled p-orbital", "Oxygen has a higher nuclear charge", "Oxygen is more electronegative"],
        "answer": "Nitrogen has a half-filled p-orbital",
        "explanation": "Nitrogen has a stable, half-filled p-orbital (2p³), which requires more energy to disturb by removing an electron compared to Oxygen (2p⁴)."
    },
    {
        "question": "Which of the following has the most negative electron gain enthalpy?",
        "options": ["F", "Cl", "Br", "I"],
        "answer": "Cl",
        "explanation": "Chlorine has the most negative electron gain enthalpy in the periodic table due to its optimal size and high effective nuclear charge. The value for Fluorine is less negative due to strong inter-electronic repulsions in its small 2p orbital."
    },
    {
        "question": "Which of the following sets of ions are isoelectronic?",
        "options": ["Na⁺, Mg²⁺, F⁻, O²⁻", "K⁺, Ca²⁺, Cl⁻, S³⁻", "Li⁺, Na⁺, K⁺, Rb⁺", "N, O, F, Ne"],
        "answer": "Na⁺, Mg²⁺, F⁻, O²⁻",
        "explanation": "All ions in this set have 10 electrons (Na⁺: 11-1=10; Mg²⁺: 12-2=10; F⁻: 9+1=10; O²⁻: 8+2=10)."
    }
],
  assertionReasons: [
    {
        "assertion": "The atomic radius decreases across a period.",
        "reason": "Across a period, the effective nuclear charge increases while the principal quantum number remains the same.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The increasing pull from the nucleus on the same electron shell causes the radius to contract."
    },
    {
        "assertion": "The second ionization enthalpy of an element is always higher than the first ionization enthalpy.",
        "reason": "It is more difficult to remove an electron from a positive ion than from a neutral atom.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. After one electron is removed, the effective nuclear charge per remaining electron increases, making it harder to remove the second electron."
    },
    {
        "assertion": "Noble gases have large positive electron gain enthalpies.",
        "reason": "The added electron has to enter the next higher principal quantum level.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Noble gases have stable, completely filled electron shells. The next electron must enter a new, higher-energy shell, which is an energetically unfavorable process, requiring energy input (positive ΔegH)."
    },
    {
        "assertion": "Anions are larger in size than their parent atoms.",
        "reason": "The addition of one or more electrons results in increased repulsion among the electrons and a decrease in effective nuclear charge.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The added electron increases inter-electronic repulsion, causing the electron cloud to expand, and the effective nuclear charge felt by each electron decreases."
    },
    {
        "assertion": "The Pauling scale is used to measure electronegativity.",
        "reason": "Fluorine is the most electronegative element.",
        "answer": "B",
        "explanation": "Both statements are true facts, but the fact that fluorine is the most electronegative is a result of the scale, not the reason why the scale is used. They are not a cause-and-effect pair."
    }
],
  matchTheColumns: [
    {
        "column1": ["a) Highest Ionization Enthalpy", "b) Highest Electron Gain Enthalpy", "c) Highest Electronegativity", "d) Largest Atomic Radius (in its period)"],
        "column2": ["i) Chlorine", "ii) Fluorine", "iii) Helium", "iv) Alkali Metal"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) s-block", "b) p-block", "c) d-block", "d) f-block"],
        "column2": ["i) Inner transition elements", "ii) Representative elements", "iii) Transition elements", "iv) Alkali and Alkaline earth metals"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": ["a) Diagonal relationship", "b) Inert Pair Effect", "c) Lanthanoid Contraction", "d) Periodicity"],
        "column2": ["i) Repetition of properties after regular intervals", "ii) Similarity between Li and Mg", "iii) Reluctance of s-electrons to participate in bonding", "iv) Similar size of Zr and Hf"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) Isoelectronic", "b) Isotopes", "c) Isobars", "d) Isotones"],
        "column2": ["i) Same number of neutrons", "ii) Same mass number", "iii) Same number of electrons", "iv) Same atomic number"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) Group 1", "b) Group 2", "c) Group 17", "d) Group 18"],
        "column2": ["i) Noble Gases", "ii) Halogens", "iii) Alkali Metals", "iv) Alkaline Earth Metals"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    }
  ]
};
