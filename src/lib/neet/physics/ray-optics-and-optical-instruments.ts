
import type { NeetModule } from '@/lib/types';

export const rayOpticsAndOpticalInstrumentsModule: NeetModule = {
    id: 'neet-physics-ray-optics-and-optical-instruments',
    title: 'Physics - Ray Optics and Optical Instruments (கதிர் ஒளியியல் மற்றும் ஒளியியல் கருவிகள்)',
    chapter: 'Ray Optics and Optical Instruments',
    subject: 'Physics',
    learningObjectives: [
        "Understand reflection and refraction at plane and spherical surfaces.",
        "Apply the mirror formula and lens maker's formula to solve problems.",
        "Understand total internal reflection and its applications (e.g., optical fibers).",
        "Analyze the dispersion of light through a prism.",
        "Describe the working principles, and calculate the magnification of, optical instruments like simple and compound microscopes and telescopes."
    ],
    prerequisites: [
        "Basic geometry and trigonometry.",
        "Understanding that light travels in straight lines (rectilinear propagation)."
    ],
    conceptOverview: "Ray Optics, or Geometrical Optics, treats light as rays that travel in straight lines. This powerful simplification allows us to understand the formation of images by mirrors and lenses. We will explore the laws of reflection and refraction, which govern how light interacts with surfaces. Key formulas, such as the mirror formula and the lens maker's formula, will be used to analyze spherical mirrors and thin lenses. The chapter also covers important phenomena like total internal reflection, the principle behind optical fibers, and dispersion, which explains how a prism creates a rainbow. Finally, we apply these principles to understand the workings of essential optical instruments like microscopes and telescopes.",
    tamilConnection: "கானல் நீர் (mirage) தோன்றுவது முதல், வானவில் உருவாவது வரை, ஒளியின் பண்புகளே காரணம். சமதள மற்றும் கோளக ஆடிகளில் பிம்பங்கள் எவ்வாறு உருவாகின்றன, லென்சுகள் எவ்வாறு ஒளியை குவிக்கின்றன அல்லது விரிக்கின்றன என்பதை இப்பகுதி விளக்குகிறது. நுண்ணோக்கிகள் மற்றும் தொலைநோக்கிகள் போன்ற கருவிகளின் செயல்பாட்டிற்கும் இதுவே அடிப்படை.",
    culturalContext: "Think of the intricate arrangement of mirrors used to bring sunlight into the 'garbhagriha' (sanctum sanctorum) of some ancient temples. This required a precise understanding of the laws of reflection. Similarly, the spectacles used by our elders are a direct application of the lens formula to correct vision defects. This chapter explains the science behind these everyday applications of optics.",
    syllabusMapping: [
         {
            topic: 'Ray Optics & Optical Instruments',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 6: Ray Optics',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 9: Ray Optics and Optical Instruments',
            notes: 'A very high-yield chapter for NEET. Problems involving lens maker\'s formula, combination of lenses, prism, and magnification of microscopes/telescopes are extremely common. Mastering sign conventions is critical.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 6 maps to NEET Physics Unit 14'
        }
    ],
    conceptNotes: [
      {
        english: `### 1. Reflection of Light (ஒளி எதிரொளிப்பு)
*   **Laws of Reflection:**
    1.  The angle of incidence (i) is equal to the angle of reflection (r).  $\\angle i = \\angle r$.
    2.  The incident ray, the reflected ray, and the normal to the surface all lie in the same plane.
*   **Spherical Mirrors (கோளக ஆடிகள்):**
    *   **Mirror Formula:** Relates object distance (u), image distance (v), and focal length (f).
        $$ \\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} $$
    *   **Focal Length:** $f = R/2$, where R is the radius of curvature.
    *   **Magnification (உருப்பெருக்கம்):** $m = \\frac{h_i}{h_o} = -\\frac{v}{u}$.
*   **Sign Convention (குறியீட்டு மரபு):** All distances are measured from the pole. Distances in the direction of incident light are positive. Heights above the principal axis are positive.`
      },
      {
        english: `### 2. Refraction of Light (ஒளி விலகல்)
*   **Snell's Law:** When light travels from a medium with refractive index n₁ to a medium with n₂, the relationship between the angle of incidence (i) and angle of refraction (r) is:
    $$ n_1 \\sin i = n_2 \\sin r $$
*   **Refraction at a Spherical Surface:**
    $$ \\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R} $$
*   **Lens Maker's Formula:** For a thin lens with radii of curvature R₁ and R₂.
    $$ \\frac{1}{f} = (n-1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right) $$
*   **Thin Lens Formula:** Same as the mirror formula but with a minus sign.
    $$ \\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} $$
*   **Power of a Lens (லென்சின் திறன்):** $P = 1/f$ (in meters). Unit: Dioptre (D).`
      },
      {
        english: `### 3. Total Internal Reflection (TIR) (முழு அக எதிரொளிப்பு)
When light travels from a denser medium to a rarer medium, if the angle of incidence is greater than a certain **critical angle** (c), the light is totally reflected back into the denser medium.
*   **Condition for TIR:**
    1.  Light must travel from a denser to a rarer medium.
    2.  Angle of incidence must be greater than the critical angle ($i > c$).
*   **Critical Angle:** $\\sin c = \\frac{n_{rarer}}{n_{denser}}$.
*   **Applications:** Brilliance of diamonds, mirages, optical fibers.`
      },
      {
        english: `### 4. Dispersion through a Prism (முப்பட்டகத்தின் வழியே நிறப்பிரிகை)
Dispersion is the splitting of white light into its constituent colors (VIBGYOR). This happens because the refractive index (n) of the material is slightly different for different wavelengths (colors).
*   **Prism Formula:**
    *   Angle of deviation: $\\delta = i + e - A$
    *   Refractive index: $n = \\frac{\\sin((A+D_m)/2)}{\\sin(A/2)}$, where $D_m$ is the angle of minimum deviation.
*   **Angular Dispersion:** $\\theta = \\delta_V - \\delta_R = (n_V - n_R)A$.
*   **Dispersive Power:** $\\omega = \\frac{n_V - n_R}{n_Y - 1}$, where $n_Y$ is the mean refractive index.`
      },
      {
        english: `### 5. Optical Instruments (ஒளியியல் கருவிகள்)
*   **Simple Microscope (எளிய நுண்ணோக்கி):** A single convex lens. Magnifying power $M = 1 + D/f$.
*   **Compound Microscope (கூட்டு நுண்ணோக்கி):** Uses two lenses: objective and eyepiece.
    *   Magnifying power (for image at infinity): $M = (L/f_o) \\times (D/f_e)$.
*   **Astronomical Telescope (வானியல் தொலைநோக்கி):**
    *   Magnifying power (normal adjustment): $M = -f_o/f_e$.
    *   Length of the telescope tube: $L = f_o + f_e$.`
      }
    ],
    workedExamples: [
        {
            title: "NEET Level: Lens Maker's Formula",
            titleTamil: "நீட் நிலை: லென்ஸ் உருவாக்குபவர் சூத்திரம்",
            difficulty: 'Medium',
            problem: "A biconvex lens has radii of curvature 20 cm and 30 cm. If the refractive index of the lens material is 1.5, what is its focal length?",
            problemTamil: "ஒரு இருகுவி லென்சின் வளைவு ஆரங்கள் 20 செ.மீ மற்றும் 30 செ.மீ ஆகும். லென்ஸ் பொருளின் ஒளிவிலகல் எண் 1.5 எனில், அதன் குவியத் தூரம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Apply the sign convention. For a biconvex lens, R₁ is positive and R₂ is negative.", calculation: "R₁ = +20 cm, R₂ = -30 cm, n = 1.5" },
                { step: 2, explanation: "Use the Lens Maker's Formula.", calculation: "1/f = (n-1)(1/R₁ - 1/R₂)" },
                { step: 3, explanation: "Substitute the values.", calculation: "1/f = (1.5 - 1) * (1/20 - 1/(-30)) = 0.5 * (1/20 + 1/30)" },
                { step: 4, explanation: "Simplify the expression.", calculation: "1/f = 0.5 * ((3+2)/60) = 0.5 * (5/60) = 0.5 * (1/12) = 1/24" },
                { step: 5, explanation: "The focal length is f = 24 cm.", calculation: "f = 24 cm" }
            ],
            neetHack: "Sign convention is everything. Remember for biconvex R₁>0, R₂<0. For biconcave R₁<0, R₂>0.",
            commonPitfall: "Making a mistake in the sign convention for R₁ and R₂."
        },
        {
            title: "JEE Level: Combination of Lenses",
            titleTamil: "ஜே.இ.இ நிலை: லென்சுகளின் இணைப்பு",
            difficulty: 'Medium',
            problem: "A convex lens of focal length 20 cm is placed in contact with a concave lens of focal length 10 cm. What is the power and nature of the combination?",
            problemTamil: "20 செ.மீ குவியத் தூரம் கொண்ட ஒரு குவி லென்ஸ், 10 செ.மீ குவியத் தூரம் கொண்ட ஒரு குழி லென்சுடன் தொடர்பில் வைக்கப்பட்டுள்ளது. இணைப்பின் திறன் மற்றும் தன்மை என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Assign signs to the focal lengths. Convex lens f₁ = +20 cm = +0.2 m. Concave lens f₂ = -10 cm = -0.1 m.", explanationTamil: "குவியத் தூரங்களுக்கு குறியீடுகளை ஒதுக்கவும்." },
                { step: 2, explanation: "The equivalent focal length (F) for lenses in contact is 1/F = 1/f₁ + 1/f₂.", explanationTamil: "தொடர்பில் உள்ள லென்சுகளுக்கான சமமான குவியத் தூரம் (F) 1/F = 1/f₁ + 1/f₂." },
                { step: 3, explanation: "Calculate the equivalent power P = P₁ + P₂. P₁ = 1/f₁ = 1/0.2 = +5 D. P₂ = 1/f₂ = 1/(-0.1) = -10 D.", calculation: "P = 5 D + (-10 D) = -5 D" },
                { step: 4, explanation: "The power of the combination is -5 D.", explanationTamil: "இணைப்பின் திறன் -5 D." },
                { step: 5, explanation: "Since the power is negative, the combination behaves like a concave (diverging) lens.", explanationTamil: "திறன் எதிர்மறையாக இருப்பதால், இணைப்பு ஒரு குழி (விரிக்கும்) லென்ஸைப் போல செயல்படுகிறது." }
            ],
            neetHack: "Always convert focal lengths to meters before calculating power in Dioptres.",
            commonPitfall: "Forgetting to convert focal lengths from cm to meters when calculating power in Dioptres."
        },
        {
            title: "NEET Level: Prism Deviation",
            titleTamil: "நீட் நிலை: முப்பட்டக விலகல்",
            difficulty: 'Medium',
            problem: "A ray of light passing through an equilateral prism (A=60°) suffers minimum deviation. If the refractive index of the prism is √2, find the angle of minimum deviation.",
            problemTamil: "ஒரு சமபக்க முப்பட்டகத்தின் (A=60°) வழியே செல்லும் ஒரு ஒளிக்கதிர் சிறும விலக்கத்தை அடைகிறது. முப்பட்டகத்தின் ஒளிவிலகல் எண் √2 எனில், சிறும விலக்கக் கோணத்தைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "Use the prism formula: n = sin((A+Dm)/2) / sin(A/2).", calculation: "\\sqrt{2} = \\frac{\\sin((60^\\circ+D_m)/2)}{\\sin(60^\\circ/2)} = \\frac{\\sin(30^\\circ + D_m/2)}{\\sin(30^\\circ)}" },
                { step: 2, explanation: "Substitute sin(30°) = 1/2.", calculation: "\\sqrt{2} = \\frac{\\sin(30^\\circ + D_m/2)}{1/2}" },
                { step: 3, explanation: "Solve for the sine term.", calculation: "\\sin(30^\\circ + D_m/2) = \\sqrt{2} \\times \\frac{1}{2} = \\frac{1}{\\sqrt{2}}" },
                { step: 4, explanation: "We know that sin(45°) = 1/√2.", calculation: "30^\\circ + D_m/2 = 45^\\circ" },
                { step: 5, explanation: "Solve for D_m.", calculation: "D_m/2 = 15^\\circ \\implies D_m = 30^\\circ" }
            ],
            neetHack: "For equilateral prisms, A=60°, so sin(A/2) is always sin(30°) = 1/2. This simplifies the prism formula significantly.",
            commonPitfall: "Forgetting to divide the angles by 2 inside the sine functions."
        },
        {
            title: "JEE Level: Microscope Magnification",
            titleTamil: "ஜே.இ.இ நிலை: நுண்ணோக்கி உருப்பெருக்கம்",
            difficulty: 'Medium',
            problem: "A compound microscope has an objective lens of focal length 2.0 cm and an eyepiece of focal length 6.25 cm separated by a distance of 15 cm. How far from the objective should an object be placed to form the final image at the near point (25 cm)?",
            problemTamil: "ஒரு கூட்டு நுண்ணோக்கியில் 2.0 செ.மீ குவியத் தூரம் கொண்ட ஒரு பொருள்குறி லென்ஸும், 6.25 செ.மீ குவியத் தூரம் கொண்ட ஒரு கண்ணருகு லென்ஸும் 15 செ.மீ தூரத்தில் பிரிக்கப்பட்டுள்ளன. இறுதி பிம்பத்தை அண்மைப் புள்ளியில் (25 செ.மீ) உருவாக்க, பொருளை பொருள்குறி லென்ஸிலிருந்து எவ்வளவு தூரத்தில் வைக்க வேண்டும்?",
            solutionSteps: [
                { step: 1, explanation: "First, consider the eyepiece. The final image is formed at v_e = -25 cm (near point). Use the lens formula to find u_e.", calculation: "\\frac{1}{f_e} = \\frac{1}{v_e} - \\frac{1}{u_e} \\implies \\frac{1}{6.25} = \\frac{1}{-25} - \\frac{1}{u_e}" },
                { step: 2, explanation: "Solve for u_e.", calculation: "\\frac{1}{u_e} = -\\frac{1}{25} - \\frac{1}{6.25} = -\\frac{1+4}{25} = -\\frac{5}{25} \\implies u_e = -5 \\text{ cm}" },
                { step: 3, explanation: "The image formed by the objective acts as the object for the eyepiece. The distance between lenses is L = |v_o| + |u_e|.", calculation: "15 = v_o + 5 \\implies v_o = 10 \\text{ cm}" },
                { step: 4, explanation: "Now, consider the objective lens. We have v_o = +10 cm and f_o = +2.0 cm. Use the lens formula to find u_o.", calculation: "\\frac{1}{f_o} = \\frac{1}{v_o} - \\frac{1}{u_o} \\implies \\frac{1}{2} = \\frac{1}{10} - \\frac{1}{u_o}" },
                { step: 5, explanation: "Solve for u_o.", calculation: "\\frac{1}{u_o} = \\frac{1}{10} - \\frac{1}{2} = \\frac{1-5}{10} = -\\frac{4}{10} \\implies u_o = -2.5 \\text{ cm}" }
            ],
            neetHack: "For microscope problems, always start with the eyepiece and work backwards to the objective.",
            commonPitfall: "Incorrectly applying the sign convention for the eyepiece image distance (v_e is negative as it's a virtual image on the same side as the object for the eyepiece)."
        },
        {
            title: "NEET Level: Total Internal Reflection",
            titleTamil: "நீட் நிலை: முழு அக எதிரொளிப்பு",
            difficulty: 'Easy',
            problem: "The refractive index of water is 4/3 and that of glass is 3/2. What is the critical angle for a ray of light entering water from glass?",
            problemTamil: "நீரின் ஒளிவிலகல் எண் 4/3 மற்றும் கண்ணாடியின் ஒளிவிலகல் எண் 3/2 ஆகும். கண்ணாடியிலிருந்து నీருக்குள் நுழையும் ஒரு ஒளிக்கதிரின் மாறுநிலை கோணம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Light travels from denser medium (glass, n_g=1.5) to rarer medium (water, n_w=1.33).", explanationTamil: "ஒளி அடர்மிகு ஊடகத்திலிருந்து (கண்ணாடி, n_g=1.5) அடர்குறை ஊடகத்திற்கு (நீர், n_w=1.33) பயணிக்கிறது." },
                { step: 2, explanation: "Use the formula for critical angle: sin(c) = n_rarer / n_denser.", calculation: "\\sin(c) = n_w / n_g = (4/3) / (3/2) = 4/3 \\times 2/3 = 8/9" },
                { step: 3, explanation: "The critical angle is c = sin⁻¹(8/9).", calculation: "c = \\sin^{-1}(8/9)" }
            ],
            neetHack: "Critical angle only exists when light goes from Denser to Rarer (Remember 'D to R').",
            commonPitfall: "Calculating sin(c) as n_denser / n_rarer, which would give a value greater than 1."
        }
    ],
    mcqs: [
        { question: "A convex lens is dipped in a liquid whose refractive index is equal to the refractive index of the lens. Then its focal length will:", options: ["A. Become zero", "B. Become infinite", "C. Remain unchanged", "D. Become small, but non-zero"], answer: "B. Become infinite", explanation: "From lens maker's formula, 1/f = (n_lens/n_medium - 1)(...). If n_lens = n_medium, the term (n_lens/n_medium - 1) becomes 0, so 1/f = 0, which means f is infinite. The lens will behave like a plane glass plate.", neetFrequency: 5 },
        { question: "The phenomenon of mirage is due to:", options: ["A. Reflection of light", "B. Refraction of light", "C. Total internal reflection", "D. Diffraction of light"], answer: "C. Total internal reflection", explanation: "Mirage is caused by the bending of light rays due to varying refractive indices of air layers and total internal reflection.", neetFrequency: 4 },
        { question: "A red flower kept in green light will appear:", options: ["A. Red", "B. Green", "C. Yellow", "D. Black"], answer: "D. Black", explanation: "A red flower reflects red light and absorbs other colors. When only green light falls on it, it absorbs the green light and reflects nothing, so it appears black.", neetFrequency: 3 },
        { question: "The magnifying power of an astronomical telescope in normal adjustment is:", options: ["A. f_o + f_e", "B. f_o / f_e", "C. f_e / f_o", "D. f_o * f_e"], answer: "B. f_o / f_e", explanation: "For normal adjustment (final image at infinity), the magnifying power is the ratio of the focal length of the objective to the focal length of the eyepiece.", neetFrequency: 5 },
        { question: "The cause of dispersion of light is:", options: ["A. Different wavelengths have different speeds in a medium", "B. Light is a transverse wave", "C. Light is an electromagnetic wave", "D. Light travels in straight lines"], answer: "A. Different wavelengths have different speeds in a medium", explanation: "Dispersion occurs because the refractive index of a medium (like glass) is slightly different for each color (wavelength), causing them to bend at slightly different angles.", neetFrequency: 4 },
        { question: "An object is placed between two parallel plane mirrors. The number of images formed is:", options: ["A. 2", "B. 1", "C. 4", "D. Infinite"], answer: "D. Infinite", explanation: "Parallel plane mirrors form an infinite number of images due to multiple reflections.", neetFrequency: 2 },
        { question: "For a real image, the magnification of a concave mirror is:", options: ["A. Positive", "B. Negative", "C. Always greater than 1", "D. Always less than 1"], answer: "B. Negative", explanation: "Real images formed by a single concave mirror are always inverted, so the magnification m = -v/u is negative.", neetFrequency: 3 },
        { question: "A bubble in water shines because of:", options: ["A. Dispersion", "B. Interference", "C. Diffraction", "D. Total Internal Reflection"], answer: "D. Total Internal Reflection", explanation: "Light traveling from water (denser) to air (rarer) inside the bubble can undergo total internal reflection if the angle of incidence is greater than the critical angle, making the bubble appear shiny.", neetFrequency: 4 },
        { question: "The power of a lens is -2D. What is its focal length and nature?", options: ["A. -50 cm, Concave", "B. +50 cm, Convex", "C. -20 cm, Concave", "D. +20 cm, Convex"], answer: "A. -50 cm, Concave", explanation: "f = 1/P = 1/(-2) = -0.5 m = -50 cm. A negative focal length indicates a concave (diverging) lens.", neetFrequency: 5 },
        { question: "In a compound microscope, the final image formed is:", options: ["A. Real and inverted", "B. Virtual and erect", "C. Real and erect", "D. Virtual and inverted"], answer: "D. Virtual and inverted", explanation: "The objective lens forms a real, inverted image. The eyepiece then acts as a simple microscope to form a final, magnified virtual image which is still inverted with respect to the original object.", neetFrequency: 4 },
        { question: "Critical angle for light going from glass (n=1.5) to air (n=1) is:", options: ["A. sin⁻¹(1/1.5)", "B. sin⁻¹(1.5)", "C. tan⁻¹(1.5)", "D. 90°"], answer: "A. sin⁻¹(1/1.5)", explanation: "sin(c) = n_rarer / n_denser = 1 / 1.5.", neetFrequency: 3 },
        { question: "A convex lens acts as a diverging lens if:", options: ["A. It is placed in water", "B. It is placed in a medium with a higher refractive index", "C. It is placed in a medium with a lower refractive index", "D. It is never possible"], answer: "B. It is placed in a medium with a higher refractive index", explanation: "From the lens maker's formula, if the lens (n_l) is placed in a medium (n_m) where n_m > n_l, the term (n_l/n_m - 1) becomes negative, reversing the nature of the lens.", neetFrequency: 3 },
        { question: "The length of an astronomical telescope for normal adjustment is:", options: ["A. f_o - f_e", "B. f_o + f_e", "C. f_o * f_e", "D. f_o / f_e"], answer: "B. f_o + f_e", explanation: "In normal adjustment, the final image is at infinity. The image from the objective is at its focus (f_o) and this must coincide with the focus of the eyepiece (f_e). So, the length L = f_o + f_e.", neetFrequency: 2 },
        { question: "The formula 1/f = 1/v - 1/u is valid for:", options: ["A. Concave lens only", "B. Convex lens only", "C. Both concave and convex lenses", "D. Mirrors only"], answer: "C. Both concave and convex lenses", explanation: "This is the thin lens formula and is applicable to both types of lenses, provided the sign convention is used correctly.", neetFrequency: 1 },
        { question: "A prism splits white light into its constituent colors. This phenomenon is called:", options: ["A. Reflection", "B. Refraction", "C. Diffraction", "D. Dispersion"], answer: "D. Dispersion", explanation: "Dispersion is the splitting of white light into its spectrum of colors.", neetFrequency: 2 },
        { question: "An object is placed 20 cm from a convex mirror of radius of curvature 40 cm. The image formed is at:", options: ["A. 10 cm behind the mirror", "B. 10 cm in front of the mirror", "C. 20 cm behind the mirror", "D. 20 cm in front of the mirror"], answer: "A. 10 cm behind the mirror", explanation: "R=+40cm, so f=+20cm. u=-20cm. 1/f = 1/v + 1/u => 1/20 = 1/v + 1/(-20) => 1/v = 1/20 + 1/20 = 2/20 = 1/10. v = +10 cm. Positive v means behind the mirror.", neetFrequency: 4 },
        { question: "The resolving power of an optical instrument depends on:", options: ["A. The focal length", "B. The magnification", "C. The wavelength of light used", "D. The intensity of light"], answer: "C. The wavelength of light used", explanation: "Resolving power is inversely proportional to the wavelength of light (RP ∝ 1/λ). Using shorter wavelengths (like blue light) improves resolution.", neetFrequency: 3 },
        { question: "In a compound microscope, the focal length of the objective lens compared to the eyepiece is:", options: ["A. Larger", "B. Smaller", "C. Equal", "D. Can be larger or smaller"], answer: "B. Smaller", explanation: "To achieve high magnification, the objective lens must have a very short focal length to form a highly magnified intermediate image.", neetFrequency: 2 },
        { question: "Rainbow is formed due to:", options: ["A. Dispersion and reflection", "B. Dispersion and total internal reflection", "C. Refraction and scattering", "D. Dispersion, refraction, and total internal reflection"], answer: "D. Dispersion, refraction, and total internal reflection", explanation: "A rainbow is a complex phenomenon involving refraction of light entering the raindrop, dispersion of colors, total internal reflection inside the drop, and refraction as it exits.", neetFrequency: 3 },
        { question: "Two thin lenses of power +5D and -3D are in contact. The focal length of the combination is:", options: ["A. +50 cm", "B. -50 cm", "C. +20 cm", "D. -20 cm"], answer: "A. +50 cm", explanation: "Equivalent power P = P₁ + P₂ = 5 - 3 = +2 D. Equivalent focal length F = 1/P = 1/2 = +0.5 m = +50 cm.", neetFrequency: 5 },
        { question: "An air bubble in glass slab (n=1.5) appears to be at 6 cm from one side and 4 cm from the other side. The thickness of the slab is:", options: ["A. 10 cm", "B. 6.67 cm", "C. 15 cm", "D. 12 cm"], answer: "C. 15 cm", explanation: "Apparent depth = Real depth / n. Real depth₁ = 6 * 1.5 = 9 cm. Real depth₂ = 4 * 1.5 = 6 cm. Total thickness = 9 + 6 = 15 cm.", neetFrequency: 3 },
        { question: "A microscope is focused on a mark on a piece of paper and then a slab of glass of thickness 3 cm and refractive index 1.5 is placed over the mark. How should the microscope be moved to get the mark in focus again?", options: ["A. 1 cm upward", "B. 1 cm downward", "C. 2 cm upward", "D. 2 cm downward"], answer: "A. 1 cm upward", explanation: "The apparent shift = t(1 - 1/n) = 3(1 - 1/1.5) = 3(1 - 2/3) = 3(1/3) = 1 cm. The image shifts up, so the microscope must be moved up by 1 cm.", neetFrequency: 4 },
        { question: "The sky appears blue because:", options: ["A. The atmosphere absorbs blue light", "B. The atmosphere scatters blue light more than red light", "C. The sun primarily emits blue light", "D. Our eyes are more sensitive to blue"], answer: "B. The atmosphere scatters blue light more than red light", explanation: "This is due to Rayleigh scattering, where the amount of scattering is inversely proportional to the fourth power of the wavelength (1/λ⁴). Blue light has a shorter wavelength, so it is scattered much more.", neetFrequency: 2 },
        { question: "A convex lens is used to form a real image which is twice the size of the object. If the focal length is 20 cm, the object distance is:", options: ["A. -10 cm", "B. -20 cm", "C. -30 cm", "D. -60 cm"], answer: "C. -30 cm", explanation: "Magnification for a real image m = -2. m = v/u. So, v = -2u. Using lens formula 1/f = 1/v - 1/u => 1/20 = 1/(-2u) - 1/u = (-1-2)/2u = -3/2u. 2u = -60 => u = -30 cm.", neetFrequency: 4 },
        { question: "The power of a plane glass plate is:", options: ["A. Zero", "B. Infinite", "C. 1 D", "D. Depends on thickness"], answer: "A. Zero", explanation: "A plane glass plate has an infinite focal length, so its power P = 1/f is zero.", neetFrequency: 1 }
    ],
    assertionReasons: [
        { assertion: "A concave mirror is used as a shaving mirror.", reason: "When an object is placed between the pole and focus of a concave mirror, it forms a magnified, erect, and virtual image.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation for its use as a shaving/makeup mirror.", neetFrequency: 3 },
        { assertion: "The refractive index of a diamond is high, and this is the reason for its brilliance.", reason: "A high refractive index leads to a small critical angle, causing most light to undergo total internal reflection.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. The trapped light undergoing multiple TIRs gives a diamond its sparkle.", neetFrequency: 4 },
        { assertion: "A convex mirror cannot form a real image for a real object.", reason: "A convex mirror always forms a virtual, erect, and diminished image.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation for the assertion.", neetFrequency: 3 },
        { assertion: "The resolving power of a telescope increases when the aperture of the objective lens is increased.", reason: "The resolving power is proportional to the diameter of the objective lens.", answer: "A", explanation: "Both statements are true and the reason correctly explains the assertion. Resolving power is given by D/(1.22λ).", neetFrequency: 2 },
        { assertion: "An empty test tube dipped in water in a beaker appears silvery when viewed from a suitable direction.", reason: "This is due to the phenomenon of dispersion.", answer: "C", explanation: "The assertion is true. The silvery appearance is due to total internal reflection of light at the glass-air interface inside the test tube. The reason is false.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Simple Microscope", "(b) Compound Microscope", "(c) Astronomical Telescope", "(d) Myopia"], column2: ["(p) To see distant objects", "(q) Concave lens", "(r) To see small, nearby objects", "(s) Two convex lenses (objective with short focal length)"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching optical instruments/defects with their purpose or key component.", neetFrequency: 5 },
        { column1: ["(a) Reflection", "(b) Refraction", "(c) Dispersion", "(d) Total Internal Reflection"], column2: ["(p) Prism", "(q) Optical Fiber", "(r) Mirror", "(s) Lens"], answer: "a-r, b-s, c-p, d-q", explanation: "Matching optical phenomena with the primary device or example associated with it.", neetFrequency: 4 },
        { column1: ["(a) Power of lens", "(b) Magnification", "(c) Refractive index", "(d) Critical angle"], column2: ["(p) Dimensionless", "(q) Dioptre", "(r) Meter"], answer: "a-q, b-p, c-p, d-p", explanation: "Matching physical quantities with their units or dimensional nature. M, n, and c are all dimensionless ratios.", neetFrequency: 3 },
        { column1: ["(a) Mirage", "(b) Rainbow", "(c) Blue sky", "(d) Twinkling of stars"], column2: ["(p) Scattering", "(q) Atmospheric Refraction", "(r) Dispersion", "(s) Total Internal Reflection"], answer: "a-s, b-r, c-p, d-q", explanation: "Matching natural phenomena with the primary optical principle responsible.", neetFrequency: 4 },
        { column1: ["(a) Convex Lens", "(b) Concave Lens", "(c) Convex Mirror", "(d) Concave Mirror"], column2: ["(p) Can form magnified virtual image", "(q) Always forms diminished virtual image"], answer: "a-p, b-q, c-q, d-p", explanation: "Concave mirrors and convex lenses can form magnified virtual images (e.g., shaving mirror, magnifier). Concave lenses and convex mirrors always form diminished virtual images.", neetFrequency: 3 }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            { formula: "\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}", description: "Thin Lens Formula" },
            { formula: "\\frac{1}{f} = (n-1) (\\frac{1}{R_1} - \\frac{1}{R_2})", description: "Lens Maker's Formula" },
            { formula: "n_1 \\sin i = n_2 \\sin r", description: "Snell's Law" },
            { formula: "M = -f_o/f_e", description: "Magnifying Power of Telescope (Normal Adjustment)" }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Sign convention is the most critical part of solving problems with mirrors and lenses.",
        "Total internal reflection occurs only when light goes from a denser to a rarer medium.",
        "Dispersion happens because the speed of light in a medium depends on its wavelength.",
        "The magnification of microscopes and telescopes depends on the focal lengths of their objective and eyepiece lenses."
    ],
    mnemonics: [
        { text: "For lens/mirror formula: 'If I can see YOU, the image is virtual and positive.' (v is positive for virtual images in some conventions, be careful! Stick to one convention). A better one: Concave mirrors/lenses can form 'RID' (Real, Inverted, Diminished) images, convex mirrors form 'VUD' (Virtual, Upright, Diminished) images.", tamil: "குவி ஆடிகள் 'VUD' (மெய்நிகர், நேரான, சிறிய) பிம்பங்களையும், குழி ஆடிகள்/லென்சுகள் 'RID' (உண்மை, தலைகீழ், சிறிய) பிம்பங்களையும் உருவாக்கும்." }
    ],
    neetTips: [
        { text: "Problems combining multiple lenses or a lens and a mirror are common. Solve them step-by-step: the image from the first element becomes the object for the second.", tamil: "பல லென்சுகள் அல்லது ஒரு லென்ஸ் மற்றும் ஆடியை இணைக்கும் கணக்குகள் பொதுவானவை. அவற்றை படிப்படியாக தீர்க்கவும்: முதல் உறுப்பின் பிம்பம் இரண்டாவது உறுப்பின் பொருளாக மாறும்." },
        { text: "Master the ray diagrams for all types of mirrors and lenses for different object positions. This helps in quickly predicting the nature of the image.", tamil: "அனைத்து வகையான ஆடிகள் மற்றும் லென்சுகளுக்கான கதிர் வரைபடங்களை வெவ்வேறு பொருள் நிலைகளுக்கு வரைந்து தேர்ச்சி பெறவும். இது பிம்பத்தின் தன்மையை விரைவாகக் கணிக்க உதவுகிறது." }
    ],
    studentTip: {
        english: "Practice sign convention relentlessly. Almost 50% of errors in this chapter are due to incorrect signs.",
        tamil: "குறியீட்டு மரபை இடைவிடாமல் பயிற்சி செய்யுங்கள். இந்த அத்தியாயத்தில் உள்ள பிழைகளில் கிட்டத்தட்ட 50% தவறான குறிகளால் ஏற்படுகின்றன."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why is the secondary rainbow fainter and inverted compared to the primary rainbow? This involves two total internal reflections.",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: முதன்மை வானவில்லுடன் ஒப்பிடும்போது இரண்டாம் நிலை வானவில் ஏன் மங்கலாகவும் தலைகீழாகவும் உள்ளது? இது இரண்டு முழு அக எதிரொளிப்புகளை உள்ளடக்கியது."
    },
    nextChapter: {
        title: "Wave Optics",
        titleTamil: "அலை ஒளியியல்"
    },
    validationReport: []
};
