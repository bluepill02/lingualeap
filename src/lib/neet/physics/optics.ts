
import type { NeetModule } from '@/lib/types';

export const optics: NeetModule = {
  id: 'physics-optics',
  title: 'Optics',
  chapter: 'Optics',
  subject: 'Physics',
  conceptNotes: `
### 1. Ray Optics and Optical Instruments (கதிர் ஒளியியல் மற்றும் ஒளியியல் கருவிகள்)
*   **Reflection of light, spherical mirrors, mirror formula:** Reflection at plane and spherical surfaces. The mirror formula 1/f = 1/v + 1/u relates focal length, image distance, and object distance.
*   **Refraction of light at plane and spherical surfaces, thin lens formula and lens maker formula:** Refraction of light, total internal reflection and its applications, optical fibres. Lens Formula: 1/f = 1/v - 1/u. Lens Maker's Formula: 1/f = (n-1)(1/R₁ - 1/R₂).
*   **Magnification. Power of a Lens. Combination of thin lenses in contact:** Magnification m = v/u for lenses. Power P = 1/f. For lenses in contact, P = P₁ + P₂.
*   **Refraction of light through a prism.**
*   **Microscope and Astronomical Telescope (reflecting and refracting) and their magnifying powers.**

### 2. Wave Optics (அலை ஒளியியல்)
*   **Wavefront and Huygens' principle:** Every point on a wavefront is a source of secondary wavelets.
*   **Laws of reflection and refraction using Huygens principle.**
*   **Interference, Young's double-slit experiment and expression for fringe width (β = λD/d), coherent sources, and sustained interference of light.**
*   **Diffraction due to a single slit, width of central maximum.**
*   **Polarisation, plane-polarized light: Brewster's law, uses of plane-polarized light and Polaroid.**
`,
  workedExamples: [
    {
        problem: "In a Young's double-slit experiment, the slits are separated by 0.28 mm and the screen is placed 1.4 m away. The distance between the central bright fringe and the fourth bright fringe is measured to be 1.2 cm. Determine the wavelength of light used.",
        solution: "The distance of the nth bright fringe from the center is y_n = nλD/d. For the 4th bright fringe, n=4. So, y₄ = 4λD/d. We are given y₄ = 1.2 cm = 0.012 m, d = 0.28 mm = 0.28 x 10⁻³ m, D = 1.4 m. λ = y₄d / (4D) = (0.012 * 0.28 x 10⁻³) / (4 * 1.4) = (0.00336 x 10⁻³) / 5.6 = 0.0006 x 10⁻³ m = 600 nm."
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
  mcqs: [
    {
        question: "The phenomenon of light bending around the corners of an obstacle is called:",
        options: ["Reflection", "Refraction", "Interference", "Diffraction"],
        answer: "Diffraction",
        explanation: "Diffraction is the bending of waves as they pass around an obstacle or through an aperture."
    },
    {
        question: "In Young's double-slit experiment, the condition for constructive interference is that the path difference should be:",
        options: ["nλ", "(n+1/2)λ", "nλ/2", "(2n+1)λ"],
        answer: "nλ",
        explanation: "For constructive interference (bright fringes), the path difference must be an integral multiple of the wavelength."
    },
    {
        question: "A convex lens is used to correct which vision defect?",
        options: ["Myopia", "Hypermetropia", "Astigmatism", "Presbyopia"],
        answer: "Hypermetropia",
        explanation: "Hypermetropia (farsightedness) is corrected using a convex lens to converge light rays onto the retina."
    },
    {
        question: "Total internal reflection occurs when light travels from:",
        options: ["A rarer to a denser medium", "A denser to a rarer medium", "The same medium", "Any medium to another"],
        answer: "A denser to a rarer medium",
        explanation: "TIR can only occur when light goes from a denser medium to a rarer medium and the angle of incidence is greater than the critical angle."
    },
    {
        question: "The splitting of white light into its constituent colors is known as:",
        options: ["Dispersion", "Scattering", "Interference", "Polarisation"],
        answer: "Dispersion",
        explanation: "Dispersion is caused by the refractive index of the medium being different for different wavelengths of light."
    },
    {
        question: "The power of a lens is +2.5 D. Its focal length is:",
        options: ["+40 cm", "+2.5 m", "-40 cm", "-2.5 m"],
        answer: "+40 cm",
        explanation: "Focal length f = 1/Power. f = 1/2.5 m = 0.4 m = 40 cm. Since the power is positive, it's a convex lens."
    },
    {
        question: "The mirror formula is:",
        options: ["1/f = 1/v - 1/u", "1/f = 1/v + 1/u", "n = c/v", "m = -v/u"],
        answer: "1/f = 1/v + 1/u",
        explanation: "This is the standard mirror equation relating object distance (u), image distance (v), and focal length (f)."
    },
    {
        question: "Which phenomenon proves that light waves are transverse?",
        options: ["Interference", "Diffraction", "Reflection", "Polarisation"],
        answer: "Polarisation",
        explanation: "Only transverse waves can be polarized, as polarization involves restricting the direction of oscillation."
    },
    {
        question: "The width of the fringes in a Young's double-slit experiment depends on:",
        options: ["Wavelength of light", "Distance between slits", "Distance to the screen", "All of the above"],
        answer: "All of the above",
        explanation: "The fringe width β = λD/d, so it depends on wavelength (λ), screen distance (D), and slit separation (d)."
    },
    {
        question: "A mirage is a phenomenon due to:",
        options: ["Reflection of light", "Refraction and total internal reflection of light", "Dispersion of light", "Diffraction of light"],
        answer: "Refraction and total internal reflection of light",
        explanation: "Mirages are caused by the bending (refraction) of light rays in air layers of different densities, leading to total internal reflection."
    },
    {
        question: "The resolving power of a microscope can be increased by:",
        options: ["Increasing the wavelength of light", "Decreasing the diameter of the objective lens", "Increasing the refractive index of the medium", "Decreasing the focal length of the eyepiece"],
        answer: "Increasing the refractive index of the medium",
        explanation: "Resolving power is proportional to 2n sinθ / λ. It can be increased by increasing the refractive index (n) (e.g., using oil immersion) or by decreasing the wavelength (λ)."
    },
    {
        question: "According to Huygens' principle, each point on a wavefront acts as a:",
        options: ["Source of secondary wavelets", "Point of destructive interference", "Point of constructive interference", "Center of reflection"],
        answer: "Source of secondary wavelets",
        explanation: "This is the fundamental statement of Huygens' principle."
    },
    {
        question: "Brewster's law is related to:",
        options: ["Interference", "Diffraction", "Dispersion", "Polarisation"],
        answer: "Polarisation",
        explanation: "Brewster's law (tan i_p = n) gives the polarizing angle at which light reflected from a surface is completely plane-polarized."
    },
    {
        question: "The magnifying power of a simple microscope is given by:",
        options: ["1 + D/f", "1 - D/f", "D/f", "f/D"],
        answer: "1 + D/f",
        explanation: "This is the formula for the magnifying power when the final image is formed at the near point (D)."
    },
    {
        question: "The blue color of the sky is due to:",
        options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
        answer: "Scattering",
        explanation: "The blue color of the sky is due to the scattering of sunlight by the molecules of the air (Rayleigh scattering), which scatters blue light more effectively than red light."
    },
    {
        question: "The focal length of a plane mirror is:",
        options: ["Zero", "Infinite", "Positive", "Negative"],
        answer: "Infinite",
        explanation: "A plane mirror can be considered as a spherical mirror with an infinite radius of curvature, and hence an infinite focal length."
    },
    {
        question: "For a real, inverted image of the same size as the object, the object should be placed in front of a convex lens at:",
        options: ["F", "2F", "Between F and 2F", "Infinity"],
        answer: "2F",
        explanation: "When an object is placed at 2F, a real, inverted image of the same size is formed at 2F on the other side of the lens."
    },
    {
        question: "The critical angle for a material is C. The refractive index of the material is:",
        options: ["sin(C)", "1/sin(C)", "tan(C)", "cos(C)"],
        answer: "1/sin(C)",
        explanation: "By Snell's law at the critical angle, n sin(C) = 1 * sin(90°). So, n = 1/sin(C)."
    },
    {
        question": "In a compound microscope, the final image formed is:",
        "options": ["Real and inverted", "Virtual and inverted", "Real and erect", "Virtual and erect"],
        "answer": "Virtual and inverted",
        "explanation": "The objective lens forms a real, inverted, and magnified image. The eyepiece acts as a simple microscope and forms a final virtual, inverted, and further magnified image."
    },
    {
        "question": "The condition for the first minimum in the diffraction pattern due to a single slit of width 'a' is:",
        "options": ["a sinθ = nλ", "a sinθ = (n+1/2)λ", "d sinθ = nλ", "a sinθ = λ"],
        "answer": "a sinθ = λ",
        "explanation": "The general condition for minima in single-slit diffraction is a sinθ = nλ, where n = 1, 2, 3, ... For the first minimum, n=1, so a sinθ = λ."
    },
    {
        "question": "The power of two lenses +2D and -4D are placed in contact. The power of the combination is:",
        "options": ["+2 D", "-2 D", "+6 D", "-6 D"],
        "answer": "-2 D",
        "explanation": "The power of lenses in contact adds algebraically. P = P₁ + P₂ = +2 + (-4) = -2 D."
    },
    {
        "question": "Which color of light undergoes the maximum deviation when passing through a prism?",
        "options": ["Red", "Yellow", "Green", "Violet"],
        "answer": "Violet",
        "explanation": "The refractive index is highest for violet light, so it bends the most and has the maximum deviation."
    },
    {
        "question": "Two coherent monochromatic light beams of intensities I and 4I are superimposed. The maximum and minimum possible intensities in the resulting beam are:",
        "options": ["5I and I", "5I and 3I", "9I and I", "9I and 3I"],
        "answer": "9I and I",
        "explanation": "I_max = (√I₁ + √I₂)² = (√I + √4I)² = (√I + 2√I)² = (3√I)² = 9I. I_min = (√I₁ - √I₂)² = (√I - 2√I)² = (-√I)² = I."
    },
    {
        "question": "An optical fiber works on the principle of:",
        "options": ["Scattering", "Interference", "Total internal reflection", "Diffraction"],
        "answer": "Total internal reflection",
        "explanation": "Light is guided through the core of an optical fiber by undergoing repeated total internal reflection at the core-cladding interface."
    },
    {
        "question": "The ratio of the resolving powers of an optical microscope for two wavelengths λ₁ = 4000 Å and λ₂ = 6000 Å is:",
        "options": ["3:2", "16:81", "8:27", "2:3"],
        "answer": "3:2",
        "explanation": "Resolving power is inversely proportional to wavelength (RP ∝ 1/λ). So, RP₁/RP₂ = λ₂/λ₁ = 6000/4000 = 3/2."
    }
  ],
  assertionReasons: [
    {
        "assertion": "A diamond shines brightly.",
        "reason": "The critical angle for diamond is very small, which facilitates total internal reflection.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Diamond's high refractive index gives it a small critical angle, causing most light entering it to be totally internally reflected multiple times before exiting, which gives it its sparkle."
    },
    {
        "assertion": "The sky appears blue.",
        "reason": "This is due to the scattering of light by air molecules.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. According to Rayleigh scattering, shorter wavelengths (blue light) are scattered more strongly than longer wavelengths (red light)."
    },
    {
        "assertion": "A convex lens is used as a magnifying glass.",
        "reason": "When an object is placed between the optical center and the focus of a convex lens, a virtual, erect, and magnified image is formed.",
        "answer": "A",
        "explanation": "The reason correctly describes the principle of a simple microscope (magnifying glass), thus explaining the assertion."
    },
    {
        "assertion": "Interference is observed for two coherent sources.",
        "reason": "Coherent sources have a constant phase difference.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. A stable and observable interference pattern requires the sources to have a constant phase relationship."
    },
    {
        "assertion": "A concave mirror is used as a shaving mirror.",
        "reason": "It forms a magnified, virtual, and erect image when the object is placed between the pole and the focus.",
        "answer": "A",
        "explanation": "The reason correctly explains why a concave mirror is suitable for shaving, as it provides a magnified, upright view of the face."
    },
    {
        "assertion": "The fringe width in a Young's double-slit experiment increases when the screen is moved further away from the slits.",
        "reason": "Fringe width is directly proportional to the distance between the slits and the screen (D).",
        "answer": "A",
        "explanation": "The reason (β ∝ D from the formula β = λD/d) correctly explains the assertion."
    },
    {
        "assertion": "Two independent sources of light cannot be coherent.",
        "reason": "The phase difference between the waves from two independent sources changes rapidly and randomly.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Coherence requires a constant phase relationship, which is not possible for two separate, independent light sources."
    },
    {
        "assertion": "Dispersion of light occurs because the refractive index of a medium is different for different wavelengths.",
        "reason": "The speed of light in a medium depends on its wavelength.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since n = c/v, and v depends on wavelength in a dispersive medium, the refractive index 'n' also depends on wavelength, causing different colors to bend by different amounts."
    },
    {
        "assertion": "The resolving power of a telescope increases when the aperture of the objective lens is increased.",
        "reason": "Resolving power is proportional to the diameter of the objective lens.",
        "answer": "A",
        "explanation": "The reason (Resolving Power ∝ D) correctly explains the assertion. A larger aperture collects more light and reduces diffraction effects, allowing finer details to be resolved."
    },
    {
        "assertion": "Light can be polarized, but sound cannot.",
        "reason": "Light waves are transverse, while sound waves are longitudinal.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Polarization is a property exclusive to transverse waves."
    },
    {
        "assertion": "A red object appears red in white light.",
        "reason": "The object reflects red light and absorbs all other colors.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The perceived color of an opaque object is the color of the light it reflects."
    },
    {
        "assertion": "When a light wave is reflected from a denser medium, its phase changes by π.",
        "reason": "The reflected wave and the incident wave are in the same phase.",
        "answer": "C",
        "explanation": "The assertion is true. The reason is false; they are out of phase by π or 180°."
    },
    {
        "assertion": "The focal length of a lens changes when it is immersed in water.",
        "reason": "The refractive index of the lens relative to the surrounding medium changes.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The Lens Maker's formula depends on the refractive index of the lens with respect to the medium, which changes from (n_g/n_air) to (n_g/n_water)."
    },
    {
        "assertion": "A single lens can suffer from chromatic and spherical aberrations.",
        "reason": "Chromatic aberration is due to the variation of focal length with wavelength, and spherical aberration is due to the spherical shape of the lens.",
        "answer": "A",
        "explanation": "The reason correctly defines both types of aberrations, which are inherent defects in a single lens, thus explaining the assertion."
    },
    {
        "assertion": "The diffraction pattern becomes wider if the slit width is decreased.",
        "reason": "The width of the central maximum is inversely proportional to the slit width.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. The angular width of the central maximum is approximately 2λ/a. As the slit width 'a' decreases, the diffraction pattern spreads out."
    }
  ],
  matchTheColumns: [
    {
        column1: ["a) Interference", "b) Diffraction", "c) Polarisation", "d) Dispersion"],
        column2: ["i) Bending of light", "ii) Splitting of white light", "iii) Superposition of waves", "iv) Transverse nature of light"],
        answer: "a-iii, b-i, c-iv, d-ii"
    },
    {
        column1: ["a) Simple Microscope", "b) Compound Microscope", "c) Telescope", "d) Human Eye"],
        column2: ["i) To view distant objects", "ii) Retina acts as screen", "iii) To view very small objects", "iv) Single convex lens"],
        answer: "a-iv, b-iii, c-i, d-ii"
    },
    {
        column1: ["a) Myopia", "b) Hypermetropia", "c) Presbyopia", "d) Astigmatism"],
        column2: ["i) Cylindrical lens", "ii) Convex lens", "iii) Bifocal lens", "iv) Concave lens"],
        answer: "a-iv, b-ii, c-iii, d-i"
    },
    {
        column1: ["a) Young's Experiment", "b) Brewster's Law", "c) Snell's Law", "d) Huygens' Principle"],
        column2": ["i) Refraction", "ii) Wavefronts", "iii) Interference", "iv) Polarisation"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Concave Mirror", "b) Convex Mirror", "c) Concave Lens", "d) Convex Lens"],
        "column2": ["i) Converging lens", "ii) Diverging mirror", "iii) Converging mirror", "iv) Diverging lens"],
        "answer": "a-iii, b-ii, c-iv, d-i"
    },
    {
        "column1": ["a) Fringe Width (β)", "b) Magnifying Power (M)", "c) Refractive Index (n)", "d) Power of Lens (P)"],
        "column2": ["i) 1/f", "ii) λD/d", "iii) c/v", "iv) 1 + D/f"],
        "answer": "a-ii, b-iv, c-iii, d-i"
    },
    {
        "column1": ["a) Total Internal Reflection", "b) Scattering", "c) Dispersion", "d) Refraction"],
        "column2": ["i) Rainbow", "ii) Twinkling of stars", "iii) Blue color of sky", "iv) Optical fiber"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Real Image", "b) Virtual Image", "c) Magnification > 1", "d) Magnification < 1"],
        "column2": ["i) Cannot be taken on screen", "ii) Can be taken on screen", "iii) Diminished", "iv) Enlarged"],
        "answer": "a-ii, b-i, c-iv, d-iii"
    },
    {
        "column1": ["a) Mirror Formula", "b) Lens Formula", "c) Lens Maker's Formula", "d) Magnification (Lens)"],
        "column2": ["i) 1/f = (n-1)(1/R₁ - 1/R₂)", "ii) m = v/u", "iii) 1/f = 1/v - 1/u", "iv) 1/f = 1/v + 1/u"],
        "answer": "a-iv, b-iii, c-i, d-ii"
    },
    {
        "column1": ["a) Constructive Interference", "b) Destructive Interference", "c) First Diffraction Minimum", "d) Polarising Angle"],
        "column2": ["i) Path difference = (n+1/2)λ", "ii) tan(i_p) = n", "iii) Path difference = nλ", "iv) a sinθ = λ"],
        "answer": "a-iii, b-i, c-iv, d-ii"
    },
    {
        "column1": ["a) Red light", "b) Violet light", "c) White light", "d) Coherent light"],
        "column2": ["i) Constant phase difference", "ii) Minimum deviation in prism", "iii) Maximum deviation in prism", "iv) Combination of VIBGYOR"],
        "answer": "a-ii, b-iii, c-iv, d-i"
    },
    {
        "column1": ["a) Polaroid", "b) Prism", "c) Grating", "d) Biprism"],
        "column2": ["i) Produces interference", "ii) Produces diffraction", "iii) Produces dispersion", "iv) Produces polarized light"],
        "answer": "a-iv, b-iii, c-ii, d-i"
    },
    {
        "column1": ["a) Resolving Power of Telescope", "b) Resolving Power of Microscope", "c) Magnifying Power of Telescope", "d) Magnifying Power of Microscope"],
        "column2": ["i) D/1.22λ", "ii) 2nsinθ/λ", "iii) D/f", "iv) f₀/fₑ"],
        "answer": "a-i, b-ii, c-iv, d-iii"
    },
    {
        "column1": ["a) Coherent sources", "b) Incoherent sources", "c) Monochromatic source", "d) Point source"],
        "column2": ["i) Single wavelength", "ii) Spherical wavefront", "iii) Constant phase difference", "iv) Random phase difference"],
        "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
        "column1": ["a) Chromatic aberration", "b) Spherical aberration", "c) Astigmatism", "d) Coma"],
        "column2": ["i) Different focal lengths for different corneal curvatures", "ii) Variation of focal length with wavelength", "iii) Off-axis aberration", "iv) Rays from different zones focus at different points"],
        "answer": "a-ii, b-iv, c-i, d-iii"
    }
  ]
};
