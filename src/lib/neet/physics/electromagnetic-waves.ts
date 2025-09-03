
import type { NeetModule } from '@/lib/types';

export const electromagneticWaves: NeetModule = {
  metadata: {
    id: 'physics-electromagnetic-waves',
    title: 'Electromagnetic Waves (மின்காந்த அலைகள்)',
    chapter: 'Unit 15: Electromagnetic Waves',
    subject: 'Physics',
    glossary: [
      { English: 'Displacement Current', தமிழ்: 'இடப்பெயர்ச்சி மின்னோட்டம்' },
      { English: 'EM Spectrum', தமிழ்: 'மின்காந்த நிறமாலை' },
      { English: 'Transverse Wave', தமிழ்: 'குறுக்கலை' },
      { English: 'Wavelength', தமிழ்: 'அலைநீளம்' },
      { English: 'Frequency', தமிழ்: 'அதிர்வெண்' }
    ],
    learningObjectives: [
      "Understand the concept of displacement current and its role in Maxwell's equations.",
      "Describe the characteristics of electromagnetic waves, including their transverse nature and speed in a vacuum.",
      "List the main parts of the electromagnetic spectrum in order of wavelength.",
      "Recall one important application for each type of electromagnetic wave."
    ],
    prerequisites: [
      "Basic concepts of electric and magnetic fields.",
      "Understanding of Faraday's Law and Ampere's Law.",
      "Knowledge of basic wave properties like wavelength, frequency, and speed."
    ],
    conceptOverview: "From the radio waves that bring music to our cars on the East Coast Road (ECR) to the X-rays used in hospitals, we are surrounded by invisible waves of energy. These are all forms of **Electromagnetic (EM) Waves** (மின்காந்த அலைகள்). This chapter unveils the final piece of classical electromagnetism, showing how a changing electric field creates a magnetic field and vice versa, leading to self-propagating waves of energy that travel at the speed of light. We will explore the complete spectrum of these waves and their diverse applications that define modern technology.",
    tnBoardMapping: "This unit corresponds to the Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 5: 'Electromagnetic Waves'. This is a relatively short and conceptual chapter for NEET, but questions are frequently asked about the properties and order of the EM spectrum and the concept of displacement current.",
    studyTips: [
      {
        tip: "The direction of propagation of an EM wave is given by the cross product E × B. Use the right-hand rule to determine the orientation of the three vectors (E, B, and direction of travel), which are always mutually perpendicular.",
        NEET_Hack: "Memorize the electromagnetic spectrum in order of increasing wavelength (or decreasing frequency/energy): Gamma rays → X-rays → UV → Visible → Infrared → Microwaves → Radio waves. A mnemonic like 'Good Xylophones Use Very Interesting Musical Rhythms' can be very helpful."
      },
      {
        tip: "Remember that the speed of all EM waves in a vacuum is the same: the speed of light, 'c'. The relationship E = cB is fundamental and often used to find the magnitude of one field if the other is known.",
        NEET_Hack: "The energy of a photon is E = hν. The intensity of an EM wave is related to the amplitude squared (I ∝ E₀²). NEET questions often try to confuse these two concepts. Intensity is about the number of photons (brightness), while energy/frequency is about the 'quality' or 'color' of the light."
      }
    ]
  },
  content: `
# 1. Module Title
– Physics – Electromagnetic Waves (இயற்பியல் - மின்காந்த அலைகள்)

# 2. Learning Objectives
1.  After this, you will be able to understand the concept of displacement current and its role in Maxwell's equations.
2.  After this, you will be able to describe the characteristics of electromagnetic waves, including their transverse nature and speed in a vacuum.
3.  After this, you will be able to list the main parts of the electromagnetic spectrum in order of wavelength.
4.  After this, you will be able to recall one important application for each type of electromagnetic wave.

# 3. Prerequisites
– Basic concepts of electric and magnetic fields.
– Understanding of Faraday's Law and Ampere's Law.
– Knowledge of basic wave properties like wavelength, frequency, and speed.

# 4. Concept Overview
From the radio waves that bring music to our cars on the East Coast Road (ECR) to the X-rays used in hospitals, we are surrounded by invisible waves of energy. These are all forms of **Electromagnetic (EM) Waves** (மின்காந்த அலைகள்). This chapter unveils the final piece of classical electromagnetism, showing how a changing electric field creates a magnetic field and vice versa, leading to self-propagating waves of energy that travel at the speed of light. We will explore the complete spectrum of these waves and their diverse applications that define modern technology.

# 5. Detailed Explanation
This unit corresponds to the **Tamil Nadu State Board Class 12 Physics Volume 1, Chapter 5: 'Electromagnetic Waves'**.

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

# 6. Worked Examples

**1. Easy:** A plane electromagnetic wave of frequency 25 MHz travels in free space along the x-direction. At a particular point in space and time, the electric field is \\(\\vec{E} = 6.3 \\hat{j} \\text{ V/m}\\). What is the magnetic field \\(\\vec{B}\\) at this point?
*   **Solution:**
    1.  The magnitude of the magnetic field is \\(B = \\frac{E}{c}\\).
    2.  \\(B = \\frac{6.3 \\text{ V/m}}{3 \\times 10^8 \\text{ m/s}} = 2.1 \\times 10^{-8} \\text{ T}\\).
    3.  The direction of propagation is along +x (\\(\\hat{i}\\)), and the electric field is along +y (\\(\\hat{j}\\)). Since the direction of propagation is given by \\(\\vec{E} \\times \\vec{B}\\), \\(\\hat{j} \\times \\vec{B}\\) must be in the \\(\\hat{i}\\) direction. This is only possible if \\(\\vec{B}\\) is in the +z direction (\\(\\hat{k}\\)), because \\(\\hat{j} \\times \\hat{k} = \\hat{i}\\).
    4.  So, \\(\\vec{B} = 2.1 \\times 10^{-8} \\hat{k} \\text{ T}\\).

**2. Medium:** The magnetic field in a plane electromagnetic wave is given by Bᵧ = (2 × 10⁻⁷) sin(0.5 × 10³x + 1.5 × 10¹¹t) T. What is the wavelength and frequency of the wave?
*   **Solution:**
    1.  The standard equation is \\(B_y = B_0 \\sin(kx + \\omega t)\\).
    2.  Compare the given equation with the standard form:
        *   Wave number, \\(k = 0.5 \\times 10^3 \\text{ rad/m}\\).
        *   Angular frequency, \\(\\omega = 1.5 \\times 10^{11} \\text{ rad/s}\\).
    3.  Wavelength \\(\\lambda = \\frac{2\\pi}{k} = \\frac{2\\pi}{0.5 \\times 10^3} = 4\\pi \\times 10^{-3} \\text{ m} \\approx 1.26 \\text{ cm}\\).
    4.  Frequency \\(\\nu = \\frac{\\omega}{2\\pi} = \\frac{1.5 \\times 10^{11}}{2\\pi} \\approx 2.39 \\times 10^{10} \\text{ Hz} = 23.9 \\text{ GHz}\\).

**3. Must-Practice:** A capacitor of capacitance 'C' is being charged by a DC source. Let the instantaneous charge be q. The displacement current through the space between the plates is equal to?
*   **Solution:**
    1.  Displacement current \\(I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt}\\).
    2.  The electric field between the plates is \\(E = \\frac{q}{A\\epsilon_0}\\).
    3.  The flux is \\(\\Phi_E = EA = \\frac{q}{\\epsilon_0}\\).
    4.  Substituting this into the displacement current formula: \\(I_d = \\epsilon_0 \\frac{d}{dt} (\\frac{q}{\\epsilon_0}) = \\epsilon_0 (\\frac{1}{\\epsilon_0}) \\frac{dq}{dt} = \\frac{dq}{dt}\\).
    5.  The rate of change of charge \\(\\frac{dq}{dt}\\) is the conduction current (I_c) flowing into the capacitor plate.
    6.  Therefore, the displacement current between the plates is exactly equal to the conduction current in the wires.

# 7. Key Formulas & Diagrams

| Formula | Description (விளக்கம்) |
| :--- | :--- |
| \\( I_d = \\epsilon_0 \\frac{d\\Phi_E}{dt} \\) | Displacement Current (இடப்பெயர்ச்சி மின்னோட்டம்) |
| \\( c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} \\) | Speed of EM wave in vacuum (வெற்றிடத்தில் வேகம்) |
| \\( E/B = c \\) | Ratio of Electric to Magnetic Field |
| \\( c = \\nu\\lambda \\) | Wave Speed, Frequency, Wavelength Relation |

<br>

<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="300" height="200" style="fill:white;stroke-width:1;stroke:black" />
    <text x="150" y="20" font-family="Verdana" font-size="14" text-anchor="middle" fill="black">Transverse EM Wave (குறுக்கலை)</text>
    <line x1="10" y1="100" x2="290" y2="100" stroke="black" marker-end="url(#arrow)" />
    <text x="285" y="95" font-size="12">x (Propagation)</text>
    <path d="M 10 100 C 50 40, 100 160, 150 100 S 250 40, 290 100" stroke="blue" stroke-width="2" fill="none"/>
    <text x="90" y="55" font-size="12" fill="blue">E (z-axis)</text>
    <path d="M 10,100 a 40,40 0 0,1 40,-40 l 10,20 a 40,40 0 0,0 40,40 l -10,-20 a 40,40 0 0,1 40,-40 l 10,20 a 40,40 0 0,0 40,40 l -10,-20 a 40,40 0 0,1 40,-40 l 10,20 a 40,40 0 0,0 40,40" stroke="red" stroke-width="2" fill="none" transform="matrix(1 0 0.5 0.5 -10 50)"/>
    <text x="40" y="150" font-size="12" fill="red">B (y-axis)</text>
</svg>

\`\`\`
DIAGRAM: Transverse EM Wave (குறுக்கலை)
Shows an electromagnetic wave propagating along the x-axis.
The electric field (E) oscillates along the z-axis (vertically).
The magnetic field (B) oscillates along the y-axis (into/out of the page, shown perspectively).
This illustrates that E, B, and the direction of propagation are all mutually perpendicular.
\`\`\`

# 8. Downloadable Summary & Mnemonics
> **Tamil Mnemonic:** நிறமாலையை (spectrum) நினைவில் கொள்ள: "**கா**ந்தி **X**-ray **U**niversity-ல் **V**isual **I**nformation **M**icro **R**esearch செய்தார்." (Gandhi did Visual Information Micro Research in X-ray University). This covers **Ga**mma, **X**-ray, **U**V, **V**isible, **I**nfrared, **M**icrowave, **R**adio.

> **NEET Hack:** Any question asking about the source of EM waves has a simple answer: an **accelerated charge**. A stationary charge creates only an E-field. A charge moving at a constant velocity creates both E and B fields, but does not radiate waves. Only acceleration produces EM waves.

[Download PDF Summary of Electromagnetic Waves](/downloads/em-waves-summary.pdf)

# 9. Quiz Yourself
1.  What is the fundamental difference between a conduction current and a displacement current?
2.  If you are listening to a radio station broadcasting at 93.5 MHz, what is the wavelength of the radio waves?
3.  Why are microwaves used in radar?

> **Student Tip (மாணவர் கருத்து):** மின்காந்த அலைகளின் பண்புகள் எளிதாக இருந்தாலும், அதன் பயன்பாடுகளை நினைவில் வைப்பது கடினமாக உள்ளதா? ஒவ்வொரு அலை வகைக்கும் ஒரு முக்கிய பயன்பாட்டை ஒரு படத்துடன் தொடர்புபடுத்திப் படித்துப் பாருங்கள்.

# 10. Next Steps & Community Discussion
– **Next Module:** Optics (ஒளியியல்). Now that we know light is an electromagnetic wave, we will study its behavior in detail, including reflection, refraction, interference, and diffraction.

– **உறுதிப்பெற பறவை! (Discuss & Soar!):** The sun radiates enormous energy towards the Earth. Do these light waves exert a pressure on the Earth? Could we use this "radiation pressure" to propel spacecraft? Discuss the possibilities on our forum.
`
  
}
