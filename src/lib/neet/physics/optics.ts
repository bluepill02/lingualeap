
import type { NeetModule } from '@/lib/types';

export const optics: NeetModule = {
  id: 'physics-optics',
  title: 'Optics',
  chapter: 'Optics',
  subject: 'Physics',
  conceptNotes: `
### 1. Ray Optics and Optical Instruments (கதிர் ஒளியியல் மற்றும் ஒளியியல் கருவிகள்)
*   **Reflection (எதிரொளிப்பு):** Bouncing back of light.
    *   **Laws of Reflection:** Angle of incidence = Angle of reflection.
    *   **Spherical Mirrors (கோளக ஆடிகள்):** Concave and Convex. Mirror formula: 1/f = 1/v + 1/u. Magnification m = -v/u.
*   **Refraction (ஒளிவிலகல்):** Bending of light when it passes from one medium to another.
    *   **Snell's Law:** n₁sin(i) = n₂sin(r).
    *   **Total Internal Reflection (முழு அக எதிரொளிப்பு):** When light travels from a denser to a rarer medium, if the angle of incidence is greater than the critical angle, it is totally reflected back. Applications: optical fibres, mirages.
    *   **Lenses (லென்சுகள்):** Convex and Concave. Lens maker's formula: 1/f = (n-1)(1/R₁ - 1/R₂). Lens formula: 1/f = 1/v - 1/u.
*   **Dispersion (நிறப்பிரிகை):** Splitting of white light into its constituent colors by a prism.
*   **Optical Instruments:** Simple microscope, Compound microscope, Telescope.

### 2. Wave Optics (அலை ஒளியியல்)
*   **Huygens' Principle (ஹைгенஸ் தத்துவம்):** Every point on a wavefront is a source of secondary wavelets.
*   **Interference (குறுக்கீட்டு விளைவு):** The modification in the distribution of light energy due to the superposition of two or more waves.
    *   **Young's Double-Slit Experiment (YDSE):** Demonstrates the interference of light.
    *   **Condition for Constructive Interference (Maxima):** Path difference = nλ.
    *   **Condition for Destructive Interference (Minima):** Path difference = (n + ½)λ.
    *   **Fringe Width (பட்டையகலம்):** β = λD/d.
*   **Diffraction (விளிம்பு விளைவு):** The bending of light waves around the corners of an obstacle.
    *   **Single-Slit Diffraction:** A central bright maximum with secondary maxima and minima on either side.
*   **Polarisation (தள விளைவு):** Restricting the vibrations of a transverse wave to a single direction. Light can be polarized by reflection (Brewster's Law) or by passing through a polaroid.
    *   **Brewster's Law:** When light is incident at the polarizing angle (i_p), the reflected light is completely polarized. tan(i_p) = n.
`,
  workedExamples: [
    {
        problem: "In a Young's double-slit experiment, the slits are separated by 0.28 mm and the screen is placed 1.4 m away. The distance between the central bright fringe and the fourth bright fringe is measured to be 1.2 cm. Determine the wavelength of light used.",
        solution: "The distance of the nth bright fringe from the center is y_n = nλD/d. For the 4th bright fringe, n=4. So, y₄ = 4λD/d. We are given y₄ = 1.2 cm = 0.012 m, d = 0.28 mm = 0.28 x 10⁻³ m, D = 1.4 m. λ = y₄d / (4D) = (0.012 * 0.28 x 10⁻³) / (4 * 1.4) = (0.00336 x 10⁻³) / 5.6 = 0.0006 x 10⁻³ m = 0.6 x 10⁻⁶ m = 600 nm."
    },
    {
        problem: "A concave mirror produces three times magnified real image of an object placed at 10 cm in front of it. Where is the image located?",
        solution: "For a real image produced by a concave mirror, the magnification m is negative. m = -3. We also know m = -v/u. So, -3 = -v/(-10). -3 = v/10. v = -30 cm. The image is located 30 cm in front of the mirror."
    },
    {
        problem: "The refractive index of glass is 1.5. What is the polarizing angle for a glass slab?",
        solution: "According to Brewster's law, tan(i_p) = n, where n is the refractive index. tan(i_p) = 1.5. i_p = tan⁻¹(1.5) ≈ 56.3°."
    }
  ],
  mcqs: [],
  assertionReasons: [],
  matchTheColumns: []
};
