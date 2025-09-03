
import type { NeetModule } from '@/lib/types';

export const optics: NeetModule = {
  metadata: {
    id: 'physics-optics',
    title: 'Optics (ஒளியியல்)',
    chapter: 'Unit 16: Optics',
    subject: 'Physics',
    glossary: [
      { English: 'Reflection', தமிழ்: 'ஒளி எதிரொளிப்பு' },
      { English: 'Refraction', தமிழ்: 'ஒளிவிலகல்' },
      { English: 'Interference', தமிழ்: 'குறுக்கீட்டு விளைவு' },
      { English: 'Diffraction', தமிழ்: 'விளிம்பு விளைவு' },
      { English: 'Polarisation', தமிழ்: 'தளவிளைவு' }
    ],
    learningObjectives: [
      "Apply mirror and lens formulas to solve problems involving image formation.",
      "Explain total internal reflection and its applications like optical fibers.",
      "Analyze the interference pattern in Young's double-slit experiment and calculate fringe width.",
      "Describe diffraction and polarisation as evidence for the wave nature of light."
    ],
    prerequisites: [
      "Basic geometry and trigonometry.",
      "Understanding of waves and their properties (wavelength, frequency).",
      "Familiarity with the concept of the electromagnetic spectrum."
    ],
    conceptOverview: "From the stunning sculptures in Mahabalipuram (மாமல்லபுரம்) that we see with our eyes, to the vibrant kolams (கோலம்) drawn with rice flour, our world is defined by **light**. This extensive chapter, **Optics** (ஒளியியல்), explores the behavior and properties of light. We will study **Ray Optics**, which treats light as straight lines to explain how mirrors and lenses form images, and **Wave Optics**, which treats light as a wave to explain beautiful phenomena like the iridescent colors on a peacock's feather (interference) and the bending of light around corners (diffraction).",
    tnBoardMapping: "This unit covers two large chapters from the Tamil Nadu State Board Class 12 Physics Volume 2: Chapter 6 ('Ray Optics') and Chapter 7 ('Wave Optics'). Both are extremely important for NEET. Sign convention for ray optics and formulas for interference/diffraction are high-yield areas.",
    studyTips: [
      {
        tip: "Sign convention is the most critical part of Ray Optics. Strictly follow the convention that all distances are measured from the pole (for mirrors) or optical center (for lenses), and distances in the direction of incident light are positive.",
        NEET_Hack: "For combination of lenses, find the power of each lens (P = 1/f) and add them algebraically (P_eq = P₁ + P₂). This is much faster than using the lens formula multiple times. Remember to use focal length in meters."
      },
      {
        tip: "In Wave Optics, clearly differentiate the conditions for constructive and destructive interference (path difference = nλ vs (n+1/2)λ) from the conditions for diffraction minima and maxima.",
        NEET_Hack: "The fringe width in YDSE (β = λD/d) is directly proportional to wavelength (λ). This means red light produces wider fringes than blue light. Many conceptual questions are based on this simple relationship."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Optics (இயற்பியல் - ஒளியியல்)

# 2. Learning Objectives
1.  After this, you will be able to apply mirror and lens formulas to solve problems involving image formation.
2.  After this, you will be able to explain total internal reflection and its applications like optical fibers.
3.  After this, you will be able to analyze the interference pattern in Young's double-slit experiment and calculate fringe width.
4.  After this, you will be able to describe diffraction and polarisation as evidence for the wave nature of light.

# 3. Prerequisites
– Basic geometry and trigonometry.
– Understanding of waves and their properties (wavelength, frequency).
– Familiarity with the concept of the electromagnetic spectrum.

# 4. Concept Overview
From the stunning sculptures in Mahabalipuram (மாமல்லபுரம்) that we see with our eyes, to the vibrant kolams (கோலம்) drawn with rice flour, our world is defined by **light**. This extensive chapter, **Optics** (ஒளியியல்), explores the behavior and properties of light. We will study **Ray Optics**, which treats light as straight lines to explain how mirrors and lenses form images, and **Wave Optics**, which treats light as a wave to explain beautiful phenomena like the iridescent colors on a peacock's feather (interference) and the bending of light around corners (diffraction).

# 5. Detailed Explanation
This unit covers chapters **6 ('Ray Optics') and 7 ('Wave Optics')** from the **Tamil Nadu State Board Class 12 Physics Volume 2**.

### 5.1 Ray Optics and Optical Instruments (கதிர் ஒளியியல்)
*   **Reflection of light:** The bouncing back of light. For **spherical mirrors**, we use the **mirror formula** and magnification formula.
    \\[ \\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} \\quad \\text{and} \\quad m = -\\frac{v}{u} \\]
*   **Refraction of light (ஒளிவிலகல்):** The bending of light as it passes from one medium to another.
    *   **Total Internal Reflection (TIR) (முழு அக எதிரொளிப்பு):** When light travels from a denser to a rarer medium at an angle greater than the critical angle, it is completely reflected back. This is used in **optical fibers**.
*   **Refraction at spherical surfaces and by lenses:**
    *   **Lens Maker's Formula:** Relates focal length to the refractive index and radii of curvature.
    *   **Thin Lens Formula:** \\(\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}\\).
*   **Power of a Lens (P):** The ability to converge or diverge light rays. \\(P = 1/f\\), measured in dioptres.
*   **Combination of thin lenses in contact:** The equivalent power is the algebraic sum of individual powers, \\(P = P_1 + P_2\\).
*   **Refraction of light through a prism:** Causes dispersion, the splitting of white light into its constituent colors.
*   **Optical Instruments:**
    *   **Microscope:** Used to view magnified images of small objects.
    *   **Astronomical Telescope (reflecting and refracting):** Used to view distant objects. We study their magnifying powers.

### 5.2 Wave Optics (அலை ஒளியியல்)
*   **Wavefront and Huygens' principle:** A wavefront is a locus of points having the same phase. Huygens' principle states that every point on a wavefront is a source of new secondary wavelets. This principle can be used to prove the laws of reflection and refraction.
*   **Interference (குறுக்கீட்டு விளைவு):** The modification in the distribution of light intensity due to the superposition of two or more coherent waves.
    *   **Young's double-slit experiment (YDSE):** The classic experiment demonstrating interference.
    *   **Expression for fringe width (β):** The distance between two consecutive bright or dark fringes is given by \\( \\beta = \\frac{\\lambda D}{d} \\), where λ is the wavelength, D is the distance to the screen, and d is the slit separation.
*   **Diffraction (விளிம்பு விளைவு):** The bending of light waves around the sharp corners of an obstacle.
    *   **Diffraction due to a single slit:** Produces a central bright maximum which is much wider than the other secondary maxima.
*   **Polarisation (தளவிளைவு):** The phenomenon of restricting the vibrations of light waves to a particular direction. It proves the transverse nature of light.
    *   **Plane-polarized light and Brewster's law:** Brewster's law (\\(n = \\tan(i_p)\\)) gives the polarizing angle at which reflected light is completely polarized.
    *   **Uses of Polaroid:** To produce and analyze polarized light, used in sunglasses and camera filters.

# 6. Worked Examples

**1. Easy:** An object is placed 10 cm in front of a concave mirror of focal length 15 cm. Find the position, nature, and magnification of the image.
*   **Solution:**
    *   Given: u = -10 cm, f = -15 cm.
    *   Using mirror formula: \\(\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u} \\implies \\frac{1}{-15} = \\frac{1}{v} + \\frac{1}{-10}\\).
    *   \\(\\frac{1}{v} = \\frac{1}{10} - \\frac{1}{15} = \\frac{3-2}{30} = \\frac{1}{30}\\). So, v = +30 cm.
    *   Magnification \\(m = -\\frac{v}{u} = -\\frac{30}{-10} = +3\\).
    *   **Nature:** Since v is positive, the image is formed behind the mirror and is **virtual**. Since m is positive and > 1, the image is **erect and magnified**.

**2. Medium:** In a Young's double-slit experiment, the slits are separated by 0.28 mm and the screen is placed 1.4 m away. The distance between the central bright fringe and the fourth bright fringe is 1.2 cm. Determine the wavelength of light used.
*   **Solution:**
    1.  The distance of the nth bright fringe is \\(y_n = \\frac{n\\lambda D}{d}\\).
    2.  For the 4th bright fringe, n=4. So, \\(y_4 = \\frac{4\\lambda D}{d}\\).
    3.  Given: \\(y_4 = 1.2 \\text{ cm} = 0.012 \\text{ m}\\), \\(d = 0.28 \\text{ mm} = 0.28 \\times 10^{-3} \\text{ m}\\), \\(D = 1.4 \\text{ m}\\).
    4.  \\(\\lambda = \\frac{y_4 d}{4D} = \\frac{0.012 \\times (0.28 \\times 10^{-3})}{4 \\times 1.4} = \\frac{0.00336 \\times 10^{-3}}{5.6} = 0.0006 \\times 10^{-3} \\text{ m} = 600 \\times 10^{-9} \\text{ m} = 600 \\text{ nm}\\).

**3. Must-Practice:** The refractive index of glass is 1.5. A light ray is incident from air to glass. At what angle of incidence will the light reflected from the glass be completely polarized?
*   **Solution:**
    *   This is a direct application of Brewster's Law.
    *   Brewster's Law states that when light is incident at the polarizing angle (i_p), the reflected light is completely polarized. The law is given by \\(n = \\tan(i_p)\\), where n is the refractive index of the medium.
    *   Given n = 1.5.
    *   \\(\\tan(i_p) = 1.5\\).
    *   \\(i_p = \\tan^{-1}(1.5) \\approx 56.3°\\).

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( \\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u} \\) | Thin Lens Formula (மெல்லிய லென்சு சமன்பாடு) |
| \\( \\beta = \\frac{\\lambda D}{d} \\) | Fringe Width in YDSE (பட்டை அகலம்) |
| \\( n = \\frac{1}{\\sin{C}} \\) | Critical Angle and Refractive Index (மாறுநிலை கோணம்) |
| \\( n = \\tan(i_p) \\) | Brewster's Law (புரூஸ்டர் விதி) |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Young's Double Slit Experiment</text>
    <text x="150" y="35" font-family="Verdana" font-size="10" text-anchor="middle" fill="gray">(யங்கின் இரட்டைப் பிளவு சோதனை)</text>
    <line x1="50" y1="50" x2="50" y2="150" stroke="black" stroke-width="3"/>
    <line x1="48" y1="80" x2="52" y2="80" stroke="white" stroke-width="4"/>
    <text x="30" y="85">S₁</text>
    <line x1="48" y1="120" x2="52" y2="120" stroke="white" stroke-width="4"/>
    <text x="30" y="125">S₂</text>
    <line x1="250" y1="50" x2="250" y2="150" stroke="gray" stroke-width="2"/>
    <text x="260" y="105">Screen (திரை)</text>
    <path d="M 50 80 C 100 80, 200 90, 250 100" stroke="blue" stroke-width="1" fill="none" stroke-dasharray="2,2"/>
    <path d="M 50 120 C 100 120, 200 110, 250 100" stroke="red" stroke-width="1" fill="none" stroke-dasharray="2,2"/>
    <circle cx="250" cy="100" r="3" fill="yellow" stroke="black"/>
    <text x="220" y="95">Central Max (மையப் பொலிவு)</text>
</svg>

\`\`\`
DIAGRAM: Young's Double Slit Experiment (யங்கின் இரட்டைப் பிளவு சோதனை)
Shows two slits, S₁ and S₂, on a barrier.
Light waves from the slits travel to a screen, interfering with each other.
They form a central bright fringe (Central Maxima) where the path difference is zero.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** குழி ஆடி, குவி லென்சு இரண்டும் குவிக்கும் (converging). குவி ஆடி, குழி லென்சு இரண்டும் விரிக்கும் (diverging). (Concave mirror and convex lens both converge light. Convex mirror and concave lens both diverge light.)

> **NEET Hack:** In interference and diffraction problems, the fringe width (β) is directly proportional to wavelength (λ). This means red light produces wider fringes than blue light. So, if the whole setup is immersed in water (refractive index n), the wavelength becomes λ/n, and the fringe width also becomes β/n.

[Download PDF Summary of Optics](/downloads/optics-summary.pdf)

# 9. Quiz Yourself
1.  Why is the sky red during sunrise and sunset?
2.  A convex lens of glass (n=1.5) is immersed in water (n=1.33). How will its focal length and power change?
3.  Can two independent light sources, like two light bulbs, produce an interference pattern? Why or why not?

> **Student Tip (மாணவர் கருத்து):** ஒளியியல் கருவிகளின் (Optical Instruments) உருப்பெருக்கச் சமன்பாடுகளை (magnification formulas) நினைவில் வைப்பது கடினமாக உள்ளதா? ஒவ்வொரு கருவிக்கும் ஒரு எளிய வரைபடம் வரைந்து பயிற்சி செய்யுங்கள்.

# 10. Next Steps & Community Discussion
– **Next Module:** Dual Nature of Matter and Radiation (பருப்பொருள் மற்றும் கதிர்வீச்சின் இருமைப் பண்பு). We will challenge the classical view of light and discover that it behaves both as a wave and a particle.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** We see interference patterns with light (YDSE). Sound is also a wave. Can you think of a real-life example where you have experienced or could create an interference pattern with sound waves? Discuss on our forum.
`
  
}
