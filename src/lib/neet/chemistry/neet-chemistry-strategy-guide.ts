
interface StrategyPoint {
  point: string;
  explanation: string;
}

interface StrategySection {
  title: string;
  type: 'mistake' | 'trick' | 'rare';
  points: StrategyPoint[];
}

interface ChapterStrategy {
  chapterName: string;
  sections: StrategySection[];
}

export const strategyGuideContent: ChapterStrategy[] = [
  {
    chapterName: 'Some Basic Concepts in Chemistry',
    sections: [
      {
        title: 'Common Mistakes & Doubts',
        type: 'mistake',
        points: [
          {
            point: 'Confusing Molarity and Molality',
            explanation: '**Mistake:** Using molarity in formulas that require a temperature-independent concentration (like colligative properties) or vice-versa.\n\n**How to Avoid:** Remember **Molarity** has an \'r\' like \'litre\', so it depends on volume (which changes with temperature). **Molality** has an \'l\' like \'kilogram\', so it depends on mass (which is constant). Always use molality for colligative property calculations unless specified otherwise.',
          },
          {
            point: 'Incorrectly Identifying the Limiting Reagent',
            explanation: '**Mistake:** Assuming the reactant with the smaller mass is the limiting reagent.\n\n**How to Avoid:** Always convert the mass of all reactants to **moles** first. Then, divide the moles of each reactant by its stoichiometric coefficient from the balanced equation. The reactant with the *smallest resulting ratio* is the limiting reagent.',
          },
        ],
      },
      {
        title: 'Tricks & Shortcuts',
        type: 'trick',
        points: [
          {
            point: 'Normality Equation for Titrations',
            explanation: 'For acid-base titrations, using the normality equation $N_1V_1 = N_2V_2$ is often much faster than using the molarity equation and balancing the reaction. Remember, Normality = Molarity × n-factor. For acids, n-factor is the basicity (number of H⁺ ions). For bases, it is the acidity (number of OH⁻ ions).',
          },
          {
            point: 'Average Atomic Mass Estimation',
            explanation: 'If an element has two isotopes, the average atomic mass will be closer to the mass of the more abundant isotope. Use this to quickly eliminate options in MCQ questions without doing the full calculation.',
          },
        ],
      },
    ],
  },
  {
    chapterName: 'Atomic Structure',
    sections: [
      {
        title: 'Common Mistakes & Doubts',
        type: 'mistake',
        points: [
          {
            point: 'Confusing Orbit and Orbital',
            explanation: '**Mistake:** Using the terms interchangeably. They represent completely different models.\n\n**How to Avoid:** An **orbit** (Bohr model) is a well-defined circular path. An **orbital** (Quantum model) is a 3D region of space where the probability of finding an electron is maximum. Orbit is a 2D concept of certainty; orbital is a 3D concept of probability.',
          },
          {
            point: 'Forgetting Exceptions to Aufbau Principle',
            explanation: '**Mistake:** Writing the configuration for Cr as [Ar]4s²3d⁴ or for Cu as [Ar]4s²3d⁹.\n\n**How to Avoid:** Memorize these two key exceptions. The extra stability of half-filled (d⁵) and fully-filled (d¹⁰) orbitals drives the promotion of a 4s electron. **Cr is [Ar]4s¹3d⁵** and **Cu is [Ar]4s¹3d¹⁰**.',
          },
        ],
      },
      {
        title: 'Rare Concepts & Problems',
        type: 'rare',
        points: [
          {
            point: 'Radial and Angular Nodes',
            explanation: 'Sometimes questions ask about the number of nodes. Remember these formulas:\n*   **Total Nodes:** n - 1\n*   **Angular Nodes (or nodal planes):** l\n*   **Radial Nodes:** n - l - 1\nFor example, a 3p orbital has n=3, l=1. Total nodes = 2, Angular nodes = 1 (the plane), Radial nodes = 3-1-1=1.',
          },
        ],
      },
      {
        title: 'Tricks & Shortcuts',
        type: 'trick',
        points: [
          {
            point: 'Energy of Photon Shortcut',
            explanation: 'To calculate photon energy quickly, use the formula:\n$$E (in~eV) = \\frac{12400}{\\lambda (in~Å)}$$\nOr, if wavelength is in nanometers:\n$$E (in~eV) = \\frac{1240}{\\lambda (in~nm)}$$\nThis is much faster than using E = hc/λ and converting from Joules to eV.',
          },
        ],
      },
    ],
  },
  {
    chapterName: 'Chemical Bonding and Molecular Structure',
    sections: [
      {
        title: 'Common Mistakes & Doubts',
        type: 'mistake',
        points: [
          {
            point: 'Confusing Geometry and Shape',
            explanation: '**Mistake:** Stating the geometry when the question asks for the shape.\n\n**How to Avoid:** **Geometry** describes the arrangement of *all electron pairs* (bonding and lone pairs). **Shape** describes the arrangement of *only the atoms* (bonding pairs). For example, in ammonia (NH₃), there are 4 electron pairs, so the geometry is tetrahedral. But due to one lone pair, the shape is trigonal pyramidal.',
          },
          {
            point: 'MOT Configuration Order',
            explanation: '**Mistake:** Using the same molecular orbital energy order for all diatomic molecules.\n\n**How to Avoid:** The order changes for molecules after N₂. \n*   **For B₂, C₂, N₂:**  ... (π2pₓ = π2pᵧ) (σ2p₂) ...\n*   **For O₂, F₂, Ne₂:** ... (σ2p₂) (π2pₓ = π2pᵧ) ...\nRemembering this switch is crucial for calculating bond order and magnetic properties correctly.',
          },
        ],
      },
      {
        title: 'Rare Concepts & Problems',
        type: 'rare',
        points: [
          {
            point: "Bent's Rule",
            explanation: "**Concept:** In molecules with different substituents, the central atom directs hybrid orbitals with more *s-character* towards more *electropositive* substituents, and orbitals with more *p-character* towards more *electronegative* substituents.\n\n**Application:** Explains why the bond angle in F₂O (103°) is smaller than in H₂O (104.5°), and why the C-F bond in CH₃F is shorter than expected.",
          },
        ],
      },
      {
        title: 'Tricks & Shortcuts',
        type: 'trick',
        points: [
          {
            point: 'Quick Hybridization Calculation',
            explanation: 'To find the hybridization of a central atom, calculate the steric number:\n**Steric Number = (Number of sigma bonds) + (Number of lone pairs)**\n*   2 -> sp\n*   3 -> sp²\n*   4 -> sp³\n*   5 -> sp³d\n*   6 -> sp³d²\nThis is much faster than drawing the full orbital diagram.',
          },
          {
            point: 'Bond Order from Electron Count (for diatomics)',
            explanation: 'For species with 14 to 20 electrons, remember this pattern:\n*   14 e⁻ (N₂) -> B.O. = 3\n*   15 e⁻ (O₂⁺) -> B.O. = 2.5\n*   16 e⁻ (O₂) -> B.O. = 2\n*   17 e⁻ (O₂⁻) -> B.O. = 1.5\n*   18 e⁻ (F₂) -> B.O. = 1\nThis allows you to quickly compare stability and bond length without writing the full MOT configuration.',
          },
        ],
      },
    ],
  },
];
