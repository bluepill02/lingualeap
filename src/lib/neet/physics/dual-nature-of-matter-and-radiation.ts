
import type { NeetModule } from '@/lib/types';

export const dualNatureOfMatterAndRadiation: NeetModule = {
  id: 'physics-dual-nature-of-matter-and-radiation',
  title: 'Dual Nature of Matter and Radiation',
  chapter: 'Dual Nature of Matter and Radiation',
  subject: 'Physics',
  conceptNotes: `
### 1. Dual Nature of Radiation (கதிர்வீச்சின் இருமைப் பண்பு)
*   Light exhibits both wave-like (interference, diffraction) and particle-like properties.

### 2. Photoelectric Effect (ஒளிமின் விளைவு)
*   **Hertz and Lenard's observations:** Key experimental findings that challenged the wave theory of light.
*   **Einstein's photoelectric equation:** Based on the particle nature of light (photons). K.E._max = hν - Φ₀.
    *   **K.E._max:** Maximum kinetic energy of photoelectrons.
    *   **hν:** Energy of the incident photon.
    *   **Φ₀:** Work function of the metal surface.
*   **Particle nature of light:** The photoelectric effect provides strong evidence for the quantization of light energy into packets called photons.

### 3. Matter Waves (பருப்பொருள் அலைகள்)
*   **Wave nature of particles (de Broglie relation):** Louis de Broglie proposed that all moving particles have an associated wave.
*   **de Broglie Wavelength (டி பிராய் அலைநீளம்):** The wavelength associated with a particle of momentum p is given by λ = h/p.
`,
  workedExamples: [
    {
        problem: "Calculate the de Broglie wavelength of an electron moving with a velocity of 10⁶ m/s. (mass of electron = 9.1 x 10⁻³¹ kg, h = 6.63 x 10⁻³⁴ J s)",
        solution: "The de Broglie wavelength is given by λ = h / mv. λ = (6.63 x 10⁻³⁴ J s) / ((9.1 x 10⁻³¹ kg) * (10⁶ m/s)) = (6.63 / 9.1) * 10⁻⁹ m ≈ 0.728 nm."
    },
    {
        problem: "The work function of a metal is 2.1 eV. Light of wavelength 400 nm is incident on it. Calculate the maximum kinetic energy of the emitted photoelectrons.",
        solution: "First, find the energy of the incident photon (E). E = hc/λ. E = (6.63 x 10⁻³⁴ J s * 3 x 10⁸ m/s) / (400 x 10⁻⁹ m) ≈ 4.97 x 10⁻¹⁹ J. Convert this to eV: E = (4.97 x 10⁻¹⁹) / (1.6 x 10⁻¹⁹) eV ≈ 3.1 eV. The work function Φ = 2.1 eV. From Einstein's equation, K.E._max = E - Φ = 3.1 eV - 2.1 eV = 1.0 eV."
    },
    {
        problem: "If the uncertainty in the position of a particle is equal to its de Broglie wavelength, what is the uncertainty in its velocity?",
        solution: "According to the uncertainty principle, Δx * Δp ≥ h/4π. Given Δx = λ = h/p. Substituting this in the uncertainty principle: (h/p) * Δp ≥ h/4π. This simplifies to Δp/p ≥ 1/4π. The uncertainty in momentum is at least a fraction of the momentum itself. Since p = mv, Δp = mΔv. So, (mΔv)/mv ≥ 1/4π, which gives Δv/v ≥ 1/4π. The uncertainty in velocity is proportional to the velocity itself."
    }
  ],
  mcqs: [
    {
        "question": "The photoelectric effect demonstrates the:",
        "options": ["Wave nature of light", "Particle nature of light", "Wave nature of electrons", "Diffraction of light"],
        "answer": "Particle nature of light",
        "explanation": "The photoelectric effect can only be explained by assuming that light consists of discrete energy packets (quanta) called photons, which demonstrates its particle nature."
    },
    {
        "question": "The de Broglie wavelength of a particle is inversely proportional to its:",
        "options": ["Energy", "Charge", "Velocity", "Momentum"],
        "answer": "Momentum",
        "explanation": "The de Broglie wavelength is given by λ = h/p, where p is the momentum of the particle."
    },
    {
        "question": "The work function of a metal is the:",
        "options": ["Minimum energy required to eject an electron", "Kinetic energy of the ejected electron", "Energy of the incident photon", "Charge of the electron"],
        "answer": "Minimum energy required to eject an electron",
        "explanation": "The work function (Φ) is the minimum amount of energy needed to remove an electron from the surface of a metal."
    },
    {
        "question": "The Davisson and Germer experiment confirmed the:",
        "options": ["Particle nature of light", "Wave nature of electrons", "Quantization of charge", "Existence of photons"],
        "answer": "Wave nature of electrons",
        "explanation": "The experiment showed that electrons undergo diffraction, which is a characteristic property of waves."
    },
    {
        "question": "According to Einstein's photoelectric equation, the maximum kinetic energy of photoelectrons is proportional to the:",
        "options": ["Intensity of light", "Frequency of light", "Wavelength of light", "Speed of light"],
        "answer": "Frequency of light",
        "explanation": "K.E._max = hν - Φ. The maximum kinetic energy is linearly dependent on the frequency (ν) of the incident light."
    },
    {
        "question": "If the frequency of incident light on a metal surface is doubled, the kinetic energy of the emitted photoelectrons will be:",
        "options": ["Doubled", "Halved", "More than doubled", "Unchanged"],
        "answer": "More than doubled",
        "explanation": "Let the initial K.E. be K₁ = hν - Φ. The new K.E. is K₂ = h(2ν) - Φ = 2hν - Φ = 2(K₁ + Φ) - Φ = 2K₁ + Φ. Since Φ is positive, K₂ > 2K₁."
    },
    {
        "question": "Photons are:",
        "options": ["Positively charged particles", "Negatively charged particles", "Packets of energy", "Particles with mass"],
        "answer": "Packets of energy",
        "explanation": "According to quantum theory, light consists of discrete packets or quanta of energy called photons."
    },
    {
        "question": "The momentum of a photon of wavelength λ is:",
        "options": ["hλ", "h/λ", "hc/λ", "λ/h"],
        "answer": "h/λ",
        "explanation": "From the de Broglie relation p = h/λ."
    },
    {
        "question": "The slope of the graph between stopping potential and frequency of incident light is:",
        "options": ["h", "e", "h/e", "e/h"],
        "answer": "h/e",
        "explanation": "From the photoelectric equation, eV_s = hν - Φ. So, V_s = (h/e)ν - Φ/e. This is a linear equation (y=mx+c) for V_s vs ν, with slope m = h/e."
    },
    {
        "question": "Which of the following has the smallest de Broglie wavelength, if all are moving with the same velocity?",
        "options": ["An electron", "A proton", "A neutron", "An alpha particle"],
        "answer": "An alpha particle",
        "explanation": "λ = h/mv. For the same velocity, λ is inversely proportional to the mass. The alpha particle has the largest mass among the given options, so it will have the smallest wavelength."
    },
    {
        "question": "The rest mass of a photon is:",
        "options": ["Infinite", "Zero", "Equal to an electron's mass", "Depends on its frequency"],
        "answer": "Zero",
        "explanation": "Photons are particles of light that always travel at the speed of light and have zero rest mass."
    },
    {
        "question": "Threshold frequency is the minimum frequency of incident radiation which can cause:",
        "options": ["Refraction", "Diffraction", "Interference", "Photoelectric emission"],
        "answer": "Photoelectric emission",
        "explanation": "This is the definition of threshold frequency in the context of the photoelectric effect."
    },
    {
        "question": "Heisenberg's Uncertainty Principle applies to:",
        "options": ["Macroscopic particles only", "Microscopic particles only", "Both", "Stationary particles only"],
        "answer": "Microscopic particles only",
        "explanation": "The uncertainty is significant only for microscopic particles like electrons and is negligible for large-scale objects."
    },
    {
        "question": "The energy of a photon is given by E = hν. Here ν is:",
        "options": ["Wavelength", "Frequency", "Velocity", "Amplitude"],
        "answer": "Frequency",
        "explanation": "In the equation E = hν, E is energy, h is Planck's constant, and ν is the frequency of the radiation."
    },
    {
        "question": "In the photoelectric effect, if the intensity of incident light is increased:",
        "options": ["The kinetic energy of emitted electrons increases", "The stopping potential increases", "The work function increases", "The number of emitted electrons increases"],
        "answer": "The number of emitted electrons increases",
        "explanation": "Intensity is related to the number of photons per unit area per unit time. Increasing intensity increases the number of incident photons, which in turn increases the number of emitted photoelectrons (photocurrent)."
    },
    {
        "question": "The wave nature of matter is not apparent in our daily observations because:",
        "options": ["The de Broglie wavelength is very large", "The de Broglie wavelength is very small", "The objects are very small", "The objects move very slowly"],
        "answer": "The de Broglie wavelength is very small",
        "explanation": "For macroscopic objects, the mass (m) is large, so the de Broglie wavelength (λ = h/mv) is extremely small and cannot be detected."
    },
    {
        "question": "The unit of work function is:",
        "options": ["Joule", "Watt", "Newton", "Pascal"],
        "answer": "Joule",
        "explanation": "Work function is a measure of energy, so its SI unit is the Joule (J). It is often expressed in electron-volts (eV) as well."
    },
    {
        "question": "What is the de Broglie wavelength of a ball of mass 0.1 kg moving with a speed of 60 m/s?",
        "options": ["1.1 x 10⁻³⁴ m", "1.1 x 10⁻³² m", "2.2 x 10⁻³⁴ m", "2.2 x 10⁻³² m"],
        "answer": "1.1 x 10⁻³⁴ m",
        "explanation": "λ = h/mv = (6.6 x 10⁻³⁴) / (0.1 * 60) = 6.6 x 10⁻³⁴ / 6 = 1.1 x 10⁻³⁴ m."
    },
    {
        "question": "Stopping potential is a measure of:",
        "options": ["The work function of the metal", "The frequency of incident light", "The intensity of incident light", "The maximum kinetic energy of photoelectrons"],
        "answer": "The maximum kinetic energy of photoelectrons",
        "explanation": "The stopping potential (V_s) is the retarding potential required to stop the most energetic photoelectrons. K.E._max = eV_s."
    },
    {
        "question": "Which of the following is not an evidence of the particle nature of light?",
        "options": ["Photoelectric effect", "Compton effect", "Interference", "Blackbody radiation"],
        "answer": "Interference",
        "explanation": "Interference is a phenomenon that can only be explained by the wave nature of light."
    },
    {
        "question": "If an electron and a proton have the same de Broglie wavelength, then:",
        "options": ["Their kinetic energies are equal", "Their momenta are equal", "Their velocities are equal", "Their energies are equal"],
        "answer": "Their momenta are equal",
        "explanation": "Since λ = h/p, if their wavelengths are equal, their momenta (p) must also be equal."
    },
    {
        "question": "The relationship between frequency (ν) and wavelength (λ) of an EM wave is:",
        "options": ["c = νλ", "ν = cλ", "λ = cν", "c = ν/λ"],
        "answer": "c = νλ",
        "explanation": "The speed of light (c) is equal to the product of its frequency and wavelength."
    },
    {
        "question": "An electron, an alpha particle, and a proton have the same kinetic energy. Which of these particles has the shortest de Broglie wavelength?",
        "options": ["Electron", "Alpha particle", "Proton", "All have the same wavelength"],
        "answer": "Alpha particle",
        "explanation": "λ = h/p = h/√(2mK.E.). For the same K.E., λ is inversely proportional to the square root of the mass. The alpha particle has the largest mass, so it has the shortest wavelength."
    },
    {
        "question": "The concept of 'matter waves' was proposed by:",
        "options": ["Einstein", "Planck", "de Broglie", "Heisenberg"],
        "answer": "de Broglie",
        "explanation": "Louis de Broglie proposed the hypothesis that all matter has wave-like properties."
    },
    {
        "question": "What happens to the stopping potential when the intensity of incident light is increased?",
        "options": ["Increases", "Decreases", "Remains unchanged", "Becomes zero"],
        "answer": "Remains unchanged",
        "explanation": "Stopping potential depends on the maximum kinetic energy of photoelectrons, which in turn depends on the frequency of the light, not its intensity."
    }
  ],
  assertionReasons: [
    {
        "assertion": "The photoelectric effect demonstrates the particle nature of light.",
        "reason": "In the photoelectric effect, there is no time lag between the incidence of light and the emission of electrons.",
        "answer": "B",
        "explanation": "Both statements are true. The instantaneous nature of the effect supports the particle model, but the core reason it demonstrates particle nature is that the energy transfer is quantized (one photon ejects one electron)."
    },
    {
        "assertion": "The de Broglie wavelength of a proton is greater than that of an electron, if both are moving with the same velocity.",
        "reason": "de Broglie wavelength is inversely proportional to the mass of the particle.",
        "answer": "D",
        "explanation": "The assertion is false. Since a proton is much more massive than an electron, its wavelength will be smaller. The reason is true."
    },
    {
        "assertion": "A photon has no rest mass, yet it has momentum.",
        "reason": "Momentum of a photon is given by p = h/λ.",
        "answer": "B",
        "explanation": "Both statements are true facts about photons, but the formula for momentum (reason) does not explain the concept of zero rest mass (assertion). They are both fundamental properties."
    },
    {
        "assertion": "The work function of a metal is a characteristic property of that metal.",
        "reason": "It depends on the number of electrons present in the metal.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false. The work function depends on the forces binding the electrons within the metal, not simply the number of electrons."
    },
    {
        "assertion": "Not all photons in incident light are capable of causing photoelectric emission.",
        "reason": "The energy of the incident photon must be greater than or equal to the work function of the metal.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. If the photon's energy (hν) is less than the work function (Φ), no electron will be emitted."
    },
    {
        "assertion": "The wave nature of matter is not observed in daily life for macroscopic objects.",
        "reason": "The de Broglie wavelength associated with macroscopic objects is too small to be detected.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Due to the large mass of macroscopic objects, their de Broglie wavelength is extremely small."
    },
    {
        "assertion": "The maximum kinetic energy of photoelectrons is independent of the intensity of incident light.",
        "reason": "Intensity of light is a measure of the number of photons incident per second.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Increasing intensity increases the number of photons, leading to more ejected electrons, but the energy of each individual photon (which determines the K.E.) remains the same."
    },
    {
        "assertion": "The Davisson and Germer experiment showed that electrons can be diffracted.",
        "reason": "Diffraction is a property of waves.",
        "answer": "A",
        "explanation": "The reason correctly explains why the experimental result (diffraction of electrons) is evidence for the wave nature of matter. The experiment confirmed the de Broglie hypothesis."
    },
    {
        "assertion": "The stopping potential is directly proportional to the frequency of incident radiation.",
        "reason": "According to Einstein's photoelectric equation, K.E._max = hν - Φ.",
        "answer": "B",
        "explanation": "Both statements are related but not a perfect cause-effect for this format. The assertion is slightly inaccurate; it's a linear relationship, not direct proportionality (V_s = (h/e)ν - Φ/e). The reason is the correct equation."
    },
    {
        "assertion": "X-rays have a shorter wavelength than radio waves.",
        "reason": "X-rays are more energetic than radio waves.",
        "answer": "A",
        "explanation": "The energy of a photon is given by E = hc/λ. A higher energy (reason) corresponds to a shorter wavelength (assertion). The reason correctly explains the assertion."
    },
    {
        "assertion": "A metal surface will not emit photoelectrons if the incident light frequency is below the threshold frequency.",
        "reason": "The work function is the maximum energy required to eject an electron.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false; the work function is the *minimum* energy required."
    },
    {
        "assertion": "Heisenberg's Uncertainty Principle is a consequence of the dual nature of matter.",
        "reason": "It is impossible to observe a particle as a particle and a wave simultaneously.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The very act of measuring a particle's position (particle-like property) disturbs its momentum (related to its wave-like property), leading to the uncertainty."
    },
    {
        "assertion": "The de Broglie wavelength of a moving cricket ball is very large.",
        "reason": "The mass of the cricket ball is very large.",
        "answer": "D",
        "explanation": "The assertion is false; the wavelength is extremely small. The reason is true and is the cause for the wavelength being so small (λ ∝ 1/m)."
    },
    {
        "assertion": "In the photoelectric effect, the photocurrent increases with increasing intensity of light.",
        "reason": "A higher intensity means more photons are striking the surface per second, leading to more electrons being ejected per second.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Photocurrent is the rate of flow of photoelectrons."
    },
    {
        "assertion": "Matter waves are electromagnetic waves.",
        "reason": "Matter waves are associated with moving particles.",
        "answer": "D",
        "explanation": "The assertion is false. Matter waves are not electromagnetic. The reason is true."
    }
  ],
  matchTheColumns: [
    {
        "column1": ["a) Photoelectric effect", "b) de Broglie wavelength", "c) Work function", "d) Stopping potential"],
        "column2": ["i) h/p", "ii) hν = Φ + K.E._max", "iii) Measure of K.E._max", "iv) Minimum energy to eject e⁻"],
        "answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        "column1": ["a) Einstein", "b) de Broglie", "c) Davisson and Germer", "d) Planck"],
        "column2": ["i) Wave nature of matter", "ii) Quantum theory of radiation", "iii) Particle nature of light", "iv) Experimental verification of matter waves"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Momentum of photon", "b) Energy of photon", "c) K.E. of electron", "d) Uncertainty principle"],
        "column2": ["i) hν", "ii) ½mv²", "iii) Δx ⋅ Δp ≥ h/4π", "iv) h/λ"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Intensity", "b) Frequency", "c) Work Function", "d) Stopping Potential"],
        "column2": ["i) Depends on nature of metal", "ii) Depends on K.E._max", "iii) Affects photocurrent", "iv) Affects K.E._max"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Electron", "b) Proton", "c) Neutron", "d) Photon"],
        "column2": ["i) No charge, has mass", "ii) Positive charge, has mass", "iii) Negative charge, has mass", "iv) No charge, no rest mass"],
        "answer": "a-iii, b-ii, c-i, d-iv"
    },
    {
        "column1": ["a) Millikan's oil drop experiment", "b) Rutherford's scattering", "c) Thomson's experiment", "d) Davisson-Germer experiment"],
        "column2": ["i) Charge of electron", "ii) Discovery of nucleus", "iii) e/m ratio of electron", "iv) Wave nature of electron"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    },
    {
        "column1": ["a) λ ∝ 1/√V", "b) K.E. ∝ ν", "c) I_photo ∝ Intensity", "d) V_s ∝ ν"],
        "column2": ["i) Electron wavelength", "ii) Not directly proportional, but linear", "iii) Photocurrent", "iv) Not directly proportional, but linear"],
        "answer": "a-i, b-ii, c-iii, d-iv"
    },
    {
        "column1": ["a) Threshold frequency", "b) Threshold wavelength", "c) Stopping potential", "d) Saturation current"],
        "column2": ["i) Depends on intensity", "ii) Maximum wavelength for emission", "iii) Minimum frequency for emission", "iv) Depends on frequency"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Ultraviolet Catastrophe", "b) Hertz's Observations", "c) Lenard's Observations", "d) Heisenberg"],
        "column2": ["i) K.E. depends on frequency, not intensity", "ii) Quantum Mechanics", "iii) Failure of classical wave theory", "iv) Sparking was enhanced by UV light"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Wave property", "b) Particle property", "c) Dual nature", "d) Quantization"],
        "column2": ["i) Momentum", "ii) Interference", "iii) Energy levels in an atom", "iv) Compton effect"],
        "answer": "a-ii, b-iv, c-i, d-iii"
    },
    {
        "column1": ["a) λ = h/mv", "b) E = mc²", "c) E = hν", "d) hν = Φ + eV_s"],
        "column2": ["i) Mass-energy equivalence", "ii) Planck's equation", "iii) Einstein's photoelectric equation", "iv) de Broglie relation"],
        "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
        "column1": ["a) Unit of h", "b) Unit of Φ", "c) Unit of λ", "d) Unit of p"],
        "column2": ["i) meter", "ii) kg⋅m/s", "iii) Joule-second", "iv) Joule or eV"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Cathode", "b) Anode", "c) Photon", "d) Electron"],
        "column2": ["i) Emits electrons in photoelectric effect", "ii) Particle of light", "iii) Emitted particle", "iv) Collects electrons"],
        "answer": "a-i, b-iv, c-ii, d-iii"
    },
    {
        "column1": ["a) Red light", "b) Blue light", "c) Infrared radiation", "d) Ultraviolet radiation"],
        "column2": ["i) λ ≈ 400 nm", "ii) Wavelength > 700 nm", "iii) λ ≈ 650 nm", "iv) Wavelength < 400 nm"],
        "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
        "column1": ["a) Compton Wavelength", "b) Bohr radius", "c) Rydberg constant", "d) Fine-structure constant"],
        "column2": ["i) Atomic physics", "ii) Quantum electrodynamics", "iii) Quantum mechanics", "iv) High-energy physics"],
        "answer": "a-iv, b-i, c-i, d-ii"
    }
  ]
};
