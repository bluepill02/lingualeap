
import type { NeetModule } from '@/lib/types';

export const kineticTheoryOfGases: NeetModule = {
  id: 'physics-kinetic-theory-of-gases',
  title: 'Kinetic Theory of Gases',
  chapter: 'Kinetic Theory of Gases',
  subject: 'Physics',
  conceptNotes: `
### 1. Equation of State of a Perfect Gas (நல்லியல்பு வாயுச் சமன்பாடு)
*   The relationship between pressure (P), volume (V), and absolute temperature (T) for a given mass of gas.
*   **Ideal Gas Equation:** PV = nRT, where n is the number of moles and R is the universal gas constant. It can also be written as PV = NkT, where N is the number of molecules and k is the Boltzmann constant.
*   **Work done on compressing a gas:** Work done by the gas is W = ∫ P dV.

### 2. Kinetic Theory of Gases (வாயுக்களின் இயக்கவியற் கொள்கை)
*   **Assumptions:**
    1.  A gas consists of a large number of identical, tiny, spherical particles (atoms/molecules) which are in constant, random motion.
    2.  The volume of the molecules is negligible compared to the total volume of the gas.
    3.  There are no intermolecular forces of attraction or repulsion.
    4.  Collisions between molecules and with the walls of the container are perfectly elastic.
*   **Concept of Pressure:** The pressure exerted by a gas is the result of the continuous collisions of its molecules with the walls of the container. The formula derived is P = (1/3)ρv_rms², where ρ is the density and v_rms is the root mean square speed.

### 3. Kinetic Interpretation of Temperature (வெப்பநிலையின் இயக்கவியல் விளக்கம்)
*   The absolute temperature of a gas is directly proportional to the average translational kinetic energy of its molecules.
*   Average K.E. per molecule = (3/2)kT.

### 4. Degrees of Freedom and Law of Equipartition of Energy (சுதந்திர இயக்கக்கூறுகள் மற்றும் ஆற்றல் சமபங்கீட்டு விதி)
*   **Degrees of Freedom (f):** The total number of independent coordinates required to describe the position and configuration of a system completely.
    *   Monatomic gas: f = 3 (translational).
    *   Diatomic gas: f = 5 (3 translational + 2 rotational) at normal temperatures.
*   **Law of Equipartition of Energy:** For a system in thermal equilibrium, the total energy is distributed equally among all its degrees of freedom, and the energy associated with each degree of freedom per molecule is ½kT.
*   **Applications to Specific Heat Capacities of Gases:** This law helps in calculating the specific heats.
    *   Internal Energy U = (f/2)nRT
    *   Molar Specific Heat at Constant Volume C_v = (f/2)R
    *   Molar Specific Heat at Constant Pressure C_p = C_v + R = ((f/2)+1)R
    *   Ratio of Specific Heats γ = C_p / C_v = 1 + 2/f.

### 5. Mean Free Path and Avogadro's Number (சராசரி மோதலிடைத் தூரம் மற்றும் அவகாட்ரோ எண்)
*   **Mean Free Path (λ):** The average distance travelled by a gas molecule between two successive collisions.
*   **Avogadro's Number (Nₐ):** The number of constituent particles (usually atoms or molecules) that are contained in one mole of a substance. Nₐ ≈ 6.022 x 10²³.
`,
  workedExamples: [
    {
        problem: "Calculate the root mean square speed of oxygen molecules at 27 °C. (Molar mass of O₂ = 32 g/mol, R = 8.314 J/mol·K)",
        solution: "First, convert the temperature to Kelvin: T = 27 + 273 = 300 K. Convert molar mass to kg/mol: M = 32 g/mol = 0.032 kg/mol. The formula for rms speed is v_rms = √(3RT/M). v_rms = √[3 * (8.314) * (300) / (0.032)] = √[7482.6 / 0.032] = √233831 ≈ 483.6 m/s."
    },
    {
        problem: "A cylinder contains helium at 2.5 atm and nitrogen at 1.2 atm at room temperature. If the cylinder is leaking, which gas will leak faster?",
        solution: "According to Graham's law of diffusion, the rate of diffusion is inversely proportional to the square root of the molar mass. Rate ∝ 1/√M. Molar mass of Helium (He) = 4 g/mol. Molar mass of Nitrogen (N₂) = 28 g/mol. Since Helium has a much lower molar mass, it will have a higher rate of diffusion and will leak faster."
    },
    {
        problem: "Calculate the value of γ (ratio of specific heats) for a diatomic gas. Assume the molecules have 5 degrees of freedom.",
        solution: "The number of degrees of freedom (f) for a diatomic gas is 5. The ratio of specific heats is given by γ = 1 + 2/f. γ = 1 + 2/5 = 1 + 0.4 = 1.4."
    }
  ],
  mcqs: [
    {
        "question": "According to the kinetic theory of gases, the pressure exerted by a gas is proportional to:",
        "options": ["The average speed of the molecules", "The root mean square speed of the molecules", "The square of the root mean square speed of the molecules", "The average kinetic energy of the molecules"],
        "answer": "The square of the root mean square speed of the molecules",
        "explanation": "The pressure P = (1/3)ρv_rms², so it is proportional to the square of the RMS speed."
    },
    {
        "question": "The absolute temperature of an ideal gas is directly proportional to:",
        "options": ["The potential energy of the molecules", "The total energy of the molecules", "The average kinetic energy of the molecules", "The rms speed of the molecules"],
        "answer": "The average kinetic energy of the molecules",
        "explanation": "The fundamental result of kinetic theory is that the average kinetic energy per molecule is (3/2)kT."
    },
    {
        "question": "The value of the universal gas constant (R) is:",
        "options": ["8.314 J/mol·K", "1.38 x 10⁻²³ J/K", "6.022 x 10²³ /mol", "9.8 m/s²"],
        "answer": "8.314 J/mol·K",
        "explanation": "R is the universal gas constant, approximately 8.314 J/mol·K. k is the Boltzmann constant."
    },
    {
        "question": "A diatomic gas like oxygen has how many degrees of freedom at moderate temperatures?",
        "options": ["3", "5", "6", "7"],
        "answer": "5",
        "explanation": "A diatomic molecule has 3 translational and 2 rotational degrees of freedom at moderate temperatures."
    },
    {
        "question": "The ratio of specific heats (γ) for a monatomic gas is:",
        "options": ["1.67 (5/3)", "1.4 (7/5)", "1.33 (4/3)", "1.5"],
        "answer": "1.67 (5/3)",
        "explanation": "For a monatomic gas, f=3. γ = 1 + 2/f = 1 + 2/3 = 5/3 ≈ 1.67."
    },
    {
        "question": "The root mean square speed of gas molecules is given by:",
        "options": ["√(2RT/M)", "√(3RT/M)", "√(RT/M)", "√(8RT/πM)"],
        "answer": "√(3RT/M)",
        "explanation": "This is the standard formula for RMS speed."
    },
    {
        "question": "According to the law of equipartition of energy, the energy associated with each degree of freedom per molecule is:",
        "options": ["kT", "½kT", "3/2 kT", "RT"],
        "answer": "½kT",
        "explanation": "This is the fundamental statement of the law of equipartition of energy."
    },
    {
        "question": "If the temperature of a gas is doubled, its RMS speed becomes:",
        "options": ["Doubled", "Halved", "√2 times", "1/√2 times"],
        "answer": "√2 times",
        "explanation": "v_rms ∝ √T. If T is doubled, v_rms will increase by a factor of √2."
    },
    {
        "question": "The ideal gas equation is:",
        "options": ["P/V = nRT", "PV = nRT", "PT = nRV", "V/T = nRP"],
        "answer": "PV = nRT",
        "explanation": "The ideal gas law combines Boyle's, Charles's, and Avogadro's laws into the equation PV = nRT."
    },
    {
        "question": "Which of the following is an assumption of the kinetic theory of gases?",
        "options": ["Molecules have considerable volume", "There are strong intermolecular forces", "Collisions are inelastic", "Collisions with the walls are perfectly elastic"],
        "answer": "Collisions with the walls are perfectly elastic",
        "explanation": "The kinetic theory assumes that there is no loss of kinetic energy during collisions."
    },
    {
        "question": "The internal energy of n moles of an ideal gas is given by:",
        "options": ["U = (3/2)nRT", "U = (5/2)nRT", "U = (f/2)nRT", "U = nRT"],
        "answer": "U = (f/2)nRT",
        "explanation": "The total internal energy depends on the number of degrees of freedom (f) of the gas molecules."
    },
    {
        "question": "The relationship between molar specific heats is given by:",
        "options": ["C_p - C_v = R", "C_v - C_p = R", "C_p * C_v = R", "C_p / C_v = R"],
        "answer": "C_p - C_v = R",
        "explanation": "This is known as Mayer's relation for an ideal gas."
    },
    {
        "question": "What is the average kinetic energy of 1 mole of a monatomic gas at 300 K?",
        "options": ["(3/2)R * 300", "(5/2)R * 300", "(1/2)R * 300", "R * 300"],
        "answer": "(3/2)R * 300",
        "explanation": "Average K.E. per molecule = (3/2)kT. For 1 mole (Nₐ molecules), Total K.E. = Nₐ * (3/2)kT = (3/2)(Nₐk)T = (3/2)RT."
    },
    {
        "question": "The pressure of an ideal gas is doubled while keeping the temperature constant. The volume of the gas will be:",
        "options": ["Doubled", "Halved", "Remain the same", "Four times"],
        "answer": "Halved",
        "explanation": "According to Boyle's Law (P₁V₁ = P₂V₂), if pressure is doubled, volume must be halved to keep the product constant."
    },
    {
        "question": "Which of the following gases will have the highest RMS speed at the same temperature?",
        "options": ["O₂", "N₂", "H₂", "CO₂"],
        "answer": "H₂",
        "explanation": "v_rms = √(3RT/M). At the same temperature, the gas with the lowest molar mass (M) will have the highest RMS speed. H₂ has the lowest molar mass (2 g/mol)."
    },
    {
        "question": "The degrees of freedom for a water molecule (H₂O), which is non-linear, are:",
        "options": ["3", "5", "6", "7"],
        "answer": "6",
        "explanation": "A non-linear triatomic molecule has 3 translational and 3 rotational degrees of freedom, totaling 6."
    },
    {
        "question": "The Boltzmann constant (k) is the ratio of:",
        "options": ["R/Nₐ", "Nₐ/R", "R*Nₐ", "R*T"],
        "answer": "R/Nₐ",
        "explanation": "The Boltzmann constant is the gas constant per molecule (k = R/Nₐ)."
    },
    {
        "question": "At absolute zero temperature, the kinetic energy of gas molecules is:",
        "options": ["Infinite", "Maximum", "Zero", "Depends on the gas"],
        "answer": "Zero",
        "explanation": "Since average K.E. is proportional to absolute temperature (T), at T=0 K, the kinetic energy is zero."
    },
    {
        "question": "The most probable speed (v_p), average speed (v_avg), and root mean square speed (v_rms) are related as:",
        "options": ["v_p > v_avg > v_rms", "v_rms > v_avg > v_p", "v_avg > v_rms > v_p", "v_rms > v_p > v_avg"],
        "answer": "v_rms > v_avg > v_p",
        "explanation": "The ratio is approximately v_rms : v_avg : v_p ≈ 1.732 : 1.60 : 1.414."
    },
    {
        "question": "The phenomenon of Brownian motion provides evidence for:",
        "options": ["The wave nature of matter", "The law of gravitation", "The atomic/molecular nature of matter", "The conservation of energy"],
        "answer": "The atomic/molecular nature of matter",
        "explanation": "The random, zigzag motion of suspended particles (Brownian motion) is due to the constant, random collisions by the invisible molecules of the fluid, providing direct evidence for the kinetic theory."
    },
    {
        "question": "The internal energy of an ideal diatomic gas is given by:",
        "options": ["(3/2)nRT", "(5/2)nRT", "nRT", "(7/2)nRT"],
        "answer": "(5/2)nRT",
        "explanation": "For a diatomic gas, f=5. So, U = (f/2)nRT = (5/2)nRT."
    },
    {
        "question": "According to Charles's law, if the temperature of a gas is increased from 0°C to 273°C at constant pressure, its volume will be:",
        "options": ["Halved", "Doubled", "Unchanged", "Four times"],
        "answer": "Doubled",
        "explanation": "V ∝ T (in Kelvin). T₁ = 0°C = 273 K. T₂ = 273°C = 546 K. Since T₂ = 2T₁, the volume V₂ = 2V₁."
    },
    {
        "question": "The perfect gas equation can be written as:",
        "options": ["P = kNT", "PV = NkT", "V = kNT", "P = NVT"],
        "answer": "PV = NkT",
        "explanation": "PV = nRT. Since n = N/Nₐ and R = Nₐk, we have PV = (N/Nₐ)(Nₐk)T = NkT, where N is the total number of molecules."
    },
    {
        "question": "The value of γ for a polyatomic gas with 'f' degrees of freedom is:",
        "options": ["1 + f/2", "1 - 2/f", "1 + 2/f", "f/2"],
        "answer": "1 + 2/f",
        "explanation": "γ = C_p/C_v = ((f/2+1)R) / ((f/2)R) = 1 + 2/f."
    },
    {
        "question": "If the pressure of a gas is constant, the graph between V and T (in °C) is a straight line that:",
        "options": ["Passes through the origin", "Intercepts the V-axis", "Intercepts the T-axis at -273.15 °C", "Is parallel to the T-axis"],
        "answer": "Intercepts the T-axis at -273.15 °C",
        "explanation": "According to Charles's Law (V ∝ T in Kelvin), V = k(t+273.15) where t is in Celsius. This is a straight line that, when extrapolated, gives V=0 at t = -273.15°C."
    }
  ],
  assertionReasons: [
    {
        "assertion": "The average kinetic energy of gas molecules is directly proportional to the absolute temperature.",
        "reason": "Temperature is a measure of the average kinetic energy of the molecules of the substance.",
        "answer": "A",
        "explanation": "The reason correctly provides the physical interpretation of temperature according to the kinetic theory, which explains the assertion."
    },
    {
        "assertion": "At the same temperature, hydrogen gas has a higher RMS speed than oxygen gas.",
        "reason": "The molar mass of hydrogen is less than that of oxygen.",
        "answer": "A",
        "explanation": "v_rms = √(3RT/M). The reason correctly states that hydrogen has a lower molar mass, which, according to the formula, leads to a higher RMS speed at the same temperature."
    },
    {
        "assertion": "The ratio of specific heats (γ) is always greater than 1.",
        "reason": "C_p is always greater than C_v.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since C_p = C_v + R, C_p is always greater than C_v, making their ratio γ always greater than 1."
    },
    {
        "assertion": "An ideal gas cannot be liquefied.",
        "reason": "The kinetic theory of gases assumes that there are no intermolecular forces of attraction between the gas molecules.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Liquefaction requires attractive forces to hold the molecules together in a liquid state. Since ideal gases are assumed to have no such forces, they cannot be liquefied."
    },
    {
        "assertion": "The internal energy of an ideal gas depends only on its temperature.",
        "reason": "For an ideal gas, there are no intermolecular forces, so there is no potential energy associated with these forces.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since there are no intermolecular forces, the internal energy is purely the kinetic energy of the molecules, which is a function of temperature."
    },
    {
        "assertion": "The pressure of a gas is due to the collisions of its molecules with the walls of the container.",
        "reason": "The collisions of the molecules with the walls are perfectly elastic.",
        "answer": "B",
        "explanation": "Both statements are true postulates of the kinetic theory. However, the elastic nature of collisions (reason) ensures that kinetic energy is conserved, it doesn't, by itself, explain why these collisions cause pressure. The pressure is due to the change in momentum during the collisions."
    },
    {
        "assertion": "The number of degrees of freedom for a monatomic gas is 3.",
        "reason": "Monatomic gas molecules can only have translational motion.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. A point-like monatomic gas molecule can move independently along the x, y, and z axes, giving it 3 translational degrees of freedom."
    },
    {
        "assertion": "The ideal gas equation is not applicable at very high pressures and low temperatures.",
        "reason": "At high pressures and low temperatures, the intermolecular forces and the volume of the molecules become significant.",
        "answer": "A",
        "explanation": "The reason correctly states the conditions under which the two main assumptions of the kinetic theory (negligible volume and no intermolecular forces) break down, thus explaining why the ideal gas law fails."
    },
    {
        "assertion": "According to the law of equipartition of energy, the internal energy of a diatomic gas at moderate temperature is (5/2)nRT.",
        "reason": "A diatomic gas has 3 translational and 2 rotational degrees of freedom.",
        "answer": "A",
        "explanation": "The reason correctly states the number of degrees of freedom (f=5). The internal energy is U = (f/2)nRT, which becomes (5/2)nRT. The reason explains the assertion."
    },
    {
        "assertion": "The C_p/C_v ratio for a polyatomic gas is less than that for a diatomic gas.",
        "reason": "Polyatomic gases have more degrees of freedom than diatomic gases.",
        "answer": "A",
        "explanation": "γ = 1 + 2/f. A polyatomic gas has more degrees of freedom (f>5) than a diatomic gas (f=5). A larger value of 'f' in the denominator leads to a smaller value of γ. The reason explains the assertion."
    },
    {
        "assertion": "The pressure of a gas is halved if its volume is doubled at constant temperature.",
        "reason": "This is a statement of Boyle's Law.",
        "answer": "A",
        "explanation": "The reason correctly identifies the law that governs the relationship described in the assertion."
    },
    {
        "assertion": "Mean free path is the average distance travelled by a molecule between two successive collisions.",
        "reason": "Mean free path is inversely proportional to the density of the gas.",
        "answer": "B",
        "explanation": "Both statements are true. However, the second statement is a property of the mean free path, not the reason for its definition."
    },
    {
        "assertion": "Real gases behave like ideal gases at high temperatures and low pressures.",
        "reason": "At high temperatures and low pressures, the intermolecular forces are negligible.",
        "answer": "A",
        "explanation": "The reason correctly states the conditions under which the assumptions of the ideal gas model become valid for real gases."
    },
    {
        "assertion": "The total translational kinetic energy for one mole of an ideal gas is (3/2)RT.",
        "reason": "The energy associated with each translational degree of freedom is ½kT.",
        "answer": "A",
        "explanation": "The reason states the law of equipartition of energy for translational motion. Since there are 3 translational degrees of freedom, the average energy per molecule is 3(½kT). For one mole, it is Nₐ(3/2)kT = (3/2)RT."
    },
    {
        "assertion": "The value of the gas constant R is the same for all gases.",
        "reason": "R is a universal constant.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. R is called the universal gas constant because it is independent of the nature of the gas."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) Boyle's Law", "b) Charles's Law", "c) Gay-Lussac's Law", "d) Avogadro's Law"],
        "column2": ["i) V ∝ n", "ii) V ∝ T", "iii) P ∝ T", "iv) P ∝ 1/V"],
        "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
        "column1": ["a) RMS Speed (v_rms)", "b) Average Speed (v_avg)", "c) Most Probable Speed (v_p)", "d) Internal Energy (U)"],
        "column2": ["i) √(2RT/M)", "ii) (f/2)nRT", "iii) √(3RT/M)", "iv) √(8RT/πM)"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Monatomic Gas", "b) Diatomic Gas", "c) Non-linear Triatomic Gas", "d) Solid"],
        "column2": ["i) f=6", "ii) f=5", "iii) f=3", "iv) f=6"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) C_v for monatomic gas", "b) C_p for monatomic gas", "c) C_v for diatomic gas", "d) C_p for diatomic gas"],
        "column2": ["i) (7/2)R", "ii) (5/2)R", "iii) (3/2)R", "iv) (5/2)R"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) γ for monatomic gas", "b) γ for diatomic gas", "c) γ for polyatomic gas", "d) Mayer's Relation"],
        "column2": ["i) 1.4", "ii) 1.33", "iii) 1.67", "iv) C_p - C_v = R"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Pressure", "b) Temperature", "c) Volume", "d) No. of moles"],
        "column2": ["i) Kelvin", "ii) Pascal", "iii) m³", "iv) mol"],
        "answer": "a-ii, b-i, c-iii, d-iv"
    },
    {
        "column1": ["a) Ideal Gas Equation", "b) Real Gas Equation", "c) Kinetic Energy of molecule", "d) Mean Free Path (λ)"],
        "column2": ["i) 1/√2 πnd²", "ii) (3/2)kT", "iii) (P + an²/V²)(V-nb) = nRT", "iv) PV = nRT"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) Translational KE", "b) Rotational KE", "c) Vibrational KE", "d) Total Internal Energy"],
        "column2": ["i) At very high temperatures", "ii) Sum of all energies", "iii) Only for polyatomic molecules", "iv) Present in all gases"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Universal Gas Constant (R)", "b) Boltzmann Constant (k)", "c) Avogadro's Number (Nₐ)", "d) Degrees of freedom (f)"],
        "column2": ["i) R/Nₐ", "ii) Number of independent motions", "iii) 8.314 J/mol·K", "iv) 6.022 x 10²³ /mol"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Brownian Motion", "b) Diffusion", "c) Elastic Collision", "d) Pressure"],
        "column2": ["i) Force per unit area", "ii) KE is conserved", "iii) Random motion of suspended particles", "iv) Intermixing of gases"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) V ∝ 1/P", "b) V ∝ T", "c) P ∝ T", "d) V ∝ n"],
        "column2": ["i) Constant V", "ii) Constant P", "iii) Constant T", "iv) Constant T, P"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) v_rms > v_avg", "b) v_avg > v_p", "c) C_p > C_v", "d) γ > 1"],
        "column2": ["i) Always true", "ii) Always true", "iii) Always true", "iv) Always true"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    },
    {
        "column1": ["a) Molar mass (M)", "b) Molecular mass (m)", "c) Number of moles (n)", "d) Number of molecules (N)"],
        "column2": ["i) m * Nₐ", "ii) Mass / Molar mass", "iii) n * Nₐ", "iv) Mass of one molecule"],
        "answer": "a-i, b-iv, c-ii, d-iii"
    },
    {
        "column1": ["a) Pressure law", "b) Boyle's law", "c) Charles' law", "d) Kinetic theory"],
        "column2": ["i) Explains gas laws", "ii) Relates V and T", "iii) Relates P and T", "iv) Relates P and V"],
        "answer": "a-iii, b-iv, c-ii, d-i"
    },
    {
        "column1": ["a) C_v", "b) C_p", "c) U", "d) P"],
        "column2": ["i) (1/3)ρv_rms²", "ii) (f/2)R", "iii) (f/2+1)R", "iv) (f/2)nRT"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    }
  ]
};


    