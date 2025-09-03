
import type { NeetModule } from '@/lib/types';

export const dualNatureOfMatterAndRadiation: NeetModule = {
  id: 'physics-dual-nature-of-matter-and-radiation',
  title: 'Dual Nature of Matter & Radiation (பருப்பொருள் மற்றும் கதிர்வீச்சின் இருமைப் பண்பு)',
  chapter: 'Unit 17: Dual Nature of Matter and Radiation',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Dual Nature of Radiation & Photoelectric Effect (கதிர்வீச்சின் இருமைப் பண்பு & ஒளிமின் விளைவு)
*   **Dual Nature:** Radiation (like light) exhibits both wave-like properties (interference, diffraction) and particle-like properties depending on the experiment.
*   **Photoelectric Effect:** The phenomenon of emission of electrons from a metal surface when light of suitable frequency is incident on it.
    *   **Hertz and Lenard's observations:** Key experimental findings:
        1.  It is an instantaneous process.
        2.  For each metal, there is a minimum frequency called **threshold frequency (ν₀)** below which no emission occurs.
        3.  The kinetic energy of the emitted photoelectrons increases with the frequency of incident light but is independent of its intensity.
        4.  The photoelectric current is directly proportional to the intensity of incident light.
*   **Einstein's Photoelectric Equation:** This equation explains the observations by postulating that light consists of energy packets called **photons (ஃபோட்டான்கள்)**. The energy of a photon is E = hν.
    \\[ K.E._{max} = h\\nu - \\Phi_0 \\]
    where \\(K.E._{max}\\) is the maximum kinetic energy of the photoelectron, \\(h\\nu\\) is the energy of the incident photon, and \\(\\Phi_0\\) is the **work function (வெளியேற்று ஆற்றல்)** of the metal (minimum energy required to eject an electron).
*   **Particle Nature of Light:** The photoelectric effect provides compelling evidence that light behaves as a stream of particles (photons).

### 5.2 Matter Waves (பருப்பொருள் அலைகள்)
*   **Wave Nature of Particles:** In 1924, Louis **de Broglie** proposed that all moving matter, from electrons to cricket balls, has an associated wave, called a matter wave.
*   **de Broglie Relation (டி பிராய் சமன்பாடு):** The wavelength (λ) associated with a particle of momentum (p) is given by:
    \\[ \\lambda = \\frac{h}{p} = \\frac{h}{mv} \\]
    where h is Planck's constant, m is the mass, and v is the velocity of the particle.
*   The wave nature of macroscopic objects is not observable because their large mass results in an extremely small de Broglie wavelength. However, for microscopic particles like electrons, the wavelength is significant and can be detected experimentally (e.g., in the Davisson and Germer experiment, which showed electron diffraction).
`,
  workedExamples: [
    {
        problem: "Calculate the de Broglie wavelength of an electron moving with a velocity of 10⁶ m/s. (mass of electron = 9.1 x 10⁻³¹ kg, h = 6.63 x 10⁻³⁴ J s).",
        solution: "The de Broglie wavelength is given by \\(\\lambda = \\frac{h}{mv}\\). \\(\\lambda = \\frac{6.63 \\times 10^{-34}}{(9.1 \\times 10^{-31}) \\times (10^6)} = \\frac{6.63}{9.1} \\times 10^{-9} \\text{ m} \\approx 0.728 \\times 10^{-9} \\text{ m} = 0.728 \\text{ nm}\\)."
    },
    {
        problem: "The work function of a metal is 2.1 eV. Light of wavelength 400 nm is incident on it. Calculate the maximum kinetic energy of the emitted photoelectrons in Joules.",
        solution: "1.  Energy of the incident photon \\(E = \\frac{hc}{\\lambda} = \\frac{(6.63 \\times 10^{-34}) \\times (3 \\times 10^8)}{400 \\times 10^{-9}} \\approx 4.97 \\times 10^{-19} \\text{ J}\\). 2.  Work function \\(\\Phi_0 = 2.1 \\text{ eV} = 2.1 \\times (1.6 \\times 10^{-19}) \\text{ J} = 3.36 \\times 10^{-19} \\text{ J}\\). 3.  From Einstein's equation, \\(K.E._{max} = E - \\Phi_0\\). 4.  \\(K.E._{max} = (4.97 \\times 10^{-19}) - (3.36 \\times 10^{-19}) = 1.61 \\times 10^{-19} \\text{ J}\\)."
    },
    {
        problem: "An electron and an alpha particle have the same kinetic energy. Which of the two has the shorter de Broglie wavelength? Give the ratio of their wavelengths.",
        solution: "1.  The de Broglie wavelength can be related to kinetic energy (K.E.) by \\(\\lambda = \\frac{h}{\\sqrt{2m(K.E.)}}\\). 2.  Since h and K.E. are the same for both, \\(\\lambda \\propto \\frac{1}{\\sqrt{m}}\\). The particle with the larger mass will have the shorter wavelength. 3.  An alpha particle (He nucleus) is much more massive than an electron (m_α ≈ 4 × m_p ≈ 4 × 1836 × m_e). 4.  Therefore, the **alpha particle has the shorter de Broglie wavelength**. 5.  The ratio \\(\\frac{\\lambda_e}{\\lambda_\\alpha} = \\frac{1/\\sqrt{m_e}}{1/\\sqrt{m_\\alpha}} = \\sqrt{\\frac{m_\\alpha}{m_e}} = \\sqrt{\\frac{4 \\times 1836 m_e}{m_e}} = \\sqrt{7344} \\approx 85.7\\). The electron's wavelength is about 85.7 times larger."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
