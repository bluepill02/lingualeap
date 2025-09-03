
import type { NeetModule } from '@/lib/types';

export const electromagneticWaves: NeetModule = {
  id: 'physics-electromagnetic-waves',
  title: 'Electromagnetic Waves (மின்காந்த அலைகள்)',
  chapter: 'Unit 15: Electromagnetic Waves',
  subject: 'Physics',
  conceptNotes: `
### 5.1 Displacement Current (இடப்பெயர்ச்சி மின்னோட்டம்)
*   **The need for it:** Maxwell found that Ampere's circuital law was logically inconsistent when applied to a charging capacitor. To fix this, he proposed the existence of a **displacement current**.
*   **Definition:** This is not a current due to flowing charges. It is a current that exists whenever the electric field or electric flux changes with time.
    \\[ I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt} \\]
*   **Maxwell's Equations:** With the inclusion of displacement current, Ampere's law became the Ampere-Maxwell law. This, along with Gauss's laws for E & B fields and Faraday's law, forms the complete set of Maxwell's equations, the foundation of all classical electromagnetism.

### 5.2 Electromagnetic Waves and their Characteristics
*   **Source:** EM waves are produced by **accelerated charges**. An oscillating charge is the most common source.
*   **Characteristics:**
    1.  They do not require a material medium for propagation and can travel through a vacuum.
    2.  They are **transverse waves (குறுக்கலைகள்)**: The electric field vector (E), magnetic field vector (B), and the direction of propagation (k) are mutually perpendicular. The direction of propagation is given by \\(\\vec{E} \\times \\vec{B}\\).
    3.  The electric and magnetic fields oscillate in the same phase.
    4.  They travel with the speed of light (c) in a vacuum, where \\(c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\approx 3 \\times 10^8 \\text{ m/s}\\).
    5.  The ratio of the magnitudes of the electric and magnetic fields is constant and equal to the speed of light: \\(\\frac{E}{B} = c\\).

### 5.3 Electromagnetic Spectrum (மின்காந்த நிறமாலை)
*   The classification of EM waves according to their frequency (or wavelength) is called the electromagnetic spectrum. There is no sharp division between one kind of wave and the next.
*   **Order (increasing wavelength):** Gamma rays < X-rays < Ultraviolet (UV) < Visible < Infrared (IR) < Microwaves < Radio waves.
*   **Applications:**
    *   **Radio waves:** Radio and television communication.
    *   **Microwaves:** Radar, microwave ovens.
    *   **Infrared (IR):** Remote controls, thermal imaging ('night vision').
    *   **Visible light:** Vision, photography.
    *   **Ultraviolet (UV):** Sterilization, detection of forged documents.
    *   **X-rays:** Medical imaging (detecting fractures), crystallography.
    *   **Gamma rays:** Radiotherapy (cancer treatment), sterilization of medical equipment.
`,
  workedExamples: [
    {
        problem: "A plane electromagnetic wave of frequency 25 MHz travels in free space along the x-direction. At a particular point in space and time, the electric field is \\(\\vec{E} = 6.3 \\hat{j} \\text{ V/m}\\). What is the magnetic field \\(\\vec{B}\\) at this point?",
        solution: "1.  The magnitude of the magnetic field is \\(B = \\frac{E}{c}\\). 2.  \\(B = \\frac{6.3 \\text{ V/m}}{3 \\times 10^8 \\text{ m/s}} = 2.1 \\times 10^{-8} \\text{ T}\\). 3.  The direction of propagation is along +x (\\(\\hat{i}\\)), and the electric field is along +y (\\(\\hat{j}\\)). Since the direction of propagation is given by \\(\\vec{E} \\times \\vec{B}\\), \\(\\hat{j} \\times \\vec{B}\\) must be in the \\(\\hat{i}\\) direction. This is only possible if \\(\\vec{B}\\) is in the +z direction (\\(\\hat{k}\\)), because \\(\\hat{j} \\times \\hat{k} = \\hat{i}\\). 4.  So, \\(\\vec{B} = 2.1 \\times 10^{-8} \\hat{k} \\text{ T}\\)."
    },
    {
        problem: "The magnetic field in a plane electromagnetic wave is given by Bᵧ = (2 × 10⁻⁷) sin(0.5 × 10³x + 1.5 × 10¹¹t) T. What is the wavelength and frequency of the wave?",
        solution: "1.  The standard equation is \\(B_y = B_0 \\sin(kx + \\omega t)\\). 2.  Compare the given equation with the standard form: Wave number, \\(k = 0.5 \\times 10^3 \\text{ rad/m}\\). Angular frequency, \\(\\omega = 1.5 \\times 10^{11} \\text{ rad/s}\\). 3.  Wavelength \\(\\lambda = \\frac{2\\pi}{k} = \\frac{2\\pi}{0.5 \\times 10^3} = 4\\pi \\times 10^{-3} \\text{ m} \\approx 1.26 \\text{ cm}\\). 4.  Frequency \\(\\nu = \\frac{\\omega}{2\\pi} = \\frac{1.5 \\times 10^{11}}{2\\pi} \\approx 2.39 \\times 10^{10} \\text{ Hz} = 23.9 \\text{ GHz}\\)."
    },
    {
        problem: "A capacitor of capacitance 'C' is being charged by a DC source. Let the instantaneous charge be q. The displacement current through the space between the plates is equal to?",
        solution: "1.  Displacement current \\(I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}\\). 2.  The electric field between the plates is \\(E = \\frac{q}{A\\epsilon_0}\\). 3.  The flux is \\(\\Phi_E = EA = \\frac{q}{\\epsilon_0}\\). 4.  Substituting this into the displacement current formula: \\(I_d = \\epsilon_0 \\frac{d}{dt} (\\frac{q}{\\epsilon_0}) = \\epsilon_0 (\\frac{1}{\\epsilon_0}) \\frac{dq}{dt} = \\frac{dq}{dt}\\). 5.  The rate of change of charge \\(\\frac{dq}{dt}\\) is the conduction current (I_c) flowing into the capacitor plate. 6.  Therefore, the displacement current between the plates is exactly equal to the conduction current in the wires."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
