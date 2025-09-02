
import type { NeetModule } from '@/lib/types';

export const dualNatureOfMatterAndRadiation: NeetModule = {
  id: 'physics-dual-nature-of-matter-and-radiation',
  title: 'Dual Nature of Matter and Radiation',
  chapter: 'Dual Nature of Matter and Radiation',
  subject: 'Physics',
  conceptNotes: `
### 1. Photoelectric Effect (ஒளிமின் விளைவு)
*   The emission of electrons when light of a suitable frequency strikes a metal surface.
*   **Laws of Photoelectric Emission:**
    1.  Emission is instantaneous.
    2.  For a given metal, there is a certain minimum frequency called the **threshold frequency (பயன் தொடக்க அதிர்வெண்)** below which no emission occurs.
    3.  The number of photoelectrons emitted per second is proportional to the intensity of incident light.
    4.  The maximum kinetic energy of the photoelectrons is directly proportional to the frequency of incident light and is independent of its intensity.

### 2. Einstein's Photoelectric Equation (ஐன்ஸ்டீனின் ஒளிமின் சமன்பாடு)
*   Based on Planck's quantum theory. Light consists of packets of energy called photons. Energy of a photon, E = hν.
*   The equation is: hν = Φ + K.E._max, where hν is the energy of the incident photon, Φ is the **work function (வெளியேற்று ஆற்றல்)** of the metal, and K.E._max is the maximum kinetic energy of the emitted electron.
*   Φ = hν₀, where ν₀ is the threshold frequency.

### 3. Wave Nature of Matter (பொருளின் அலை இயல்பு)
*   **de Broglie Hypothesis:** Matter, like radiation, exhibits dual nature (wave and particle).
*   A moving particle of momentum p is associated with a wave of wavelength λ.
*   **de Broglie Wavelength (டி பிராய் அலைநீளம்):** λ = h/p = h/mv, where h is Planck's constant.

### 4. Davisson and Germer Experiment (டேவிசன்-ஜெர்மர் சோதனை)
*   This experiment confirmed the wave nature of electrons.
*   It showed that a beam of electrons could be diffracted by a nickel crystal, which is a characteristic property of waves.

### 5. Heisenberg's Uncertainty Principle (ஹைசன்பர்க்கின் நிச்சயமற்ற கோட்பாடு)
*   It is impossible to measure both the position (Δx) and the momentum (Δp) of a particle simultaneously with absolute accuracy.
*   Δx * Δp ≥ h/4π. (ஒரு துகளின் இருப்பிடத்தையும் உந்தத்தையும் ஒரே நேரத்தில் துல்லியமாகக் கண்டறிய முடியாது).
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
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
