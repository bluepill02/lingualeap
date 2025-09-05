
import type { NeetModule } from '@/lib/types';

export const dualNatureOfRadiationAndMatterModule: NeetModule = {
    id: 'neet-physics-dual-nature-of-radiation-and-matter',
    title: 'Physics - Dual Nature of Radiation and Matter (கதிர்வீச்சு மற்றும் பருப்பொருளின் இருமைப் பண்பு)',
    chapter: 'Dual Nature of Radiation and Matter',
    subject: 'Physics',
    learningObjectives: [
        "Understand the concept of electron emission and the different types (thermionic, photoelectric, etc.).",
        "Describe the experimental setup for studying the photoelectric effect and analyze its key observations.",
        "Understand Einstein's photoelectric equation and its ability to explain the observations of the photoelectric effect.",
        "Define work function, threshold frequency, and stopping potential.",
        "Understand the particle nature of light (photons) and its properties.",
        "Grasp the concept of the dual nature of matter and de Broglie's hypothesis.",
        "Apply the de Broglie wavelength formula to different particles."
    ],
    prerequisites: [
        "Basic concepts of waves (frequency, wavelength).",
        "Understanding of energy and momentum from mechanics.",
        "Basic ideas about electric potential and kinetic energy."
    ],
    conceptOverview: "This chapter marks a significant departure from classical physics and introduces the foundational ideas of quantum mechanics. It explores the fascinating concept that light (radiation), which we typically think of as a wave, can also behave like a particle (a photon). This is demonstrated by the photoelectric effect, where light can knock electrons out of a metal surface. We then explore the even more radical idea proposed by de Broglie: that matter (like electrons), which we think of as particles, can also exhibit wave-like properties. This 'dual nature' is a cornerstone of modern physics and fundamentally changed our understanding of the universe at the microscopic level.",
    tamilConnection: "ஒளி என்பது அலையா அல்லது துகளா? இந்த கேள்வி இயற்பியலில் ஒரு பெரிய புரட்சியை ஏற்படுத்தியது. சில நிகழ்வுகளில் ஒளி அலை போலவும் (குறுக்கீட்டு விளைவு), சில நிகழ்வுகளில் துகள் போலவும் (ஒளிமின் விளைவு) செயல்படுகிறது. இதேபோல், எலக்ட்ரான் போன்ற துகள்களும் அலைப் பண்புகளைக் கொண்டுள்ளன. இந்த இருமைப் பண்பு, குவாண்டம் இயக்கவியலின் அடிப்படை ஆகும்.",
    culturalContext: "Think of solar panels working on a rooftop in Tamil Nadu. They function based on the photoelectric effect. Light particles (photons) from the sun strike the solar panel material and transfer their energy to electrons, creating an electric current. This chapter explains the fundamental physics that makes solar energy possible.",
    syllabusMapping: [
         {
            topic: 'Dual Nature of Radiation and Matter',
            tnBoardChapter: '12th Std Physics - Vol 2, Chapter 8: Atomic and Nuclear Physics (discusses quantum concepts)',
            ncertReference: 'Class 12 Physics - Part 2, Chapter 11: Dual Nature of Radiation and Matter',
            notes: 'A very important and high-scoring chapter. Questions are often formula-based, revolving around Einstein\'s photoelectric equation and the de Broglie wavelength. Understanding the graphs related to the photoelectric effect is crucial.',
            mappingDescription: '12th Std Physics - Vol 2, Chapter 8 maps to NEET Physics Unit 17'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Photoelectric Effect (ஒளிமின் விளைவு)
The phenomenon of emission of electrons from a metal surface when light of suitable frequency is incident on it. The emitted electrons are called photoelectrons.
#### Key Observations:
1.  **Instantaneous Process:** Electron emission is instantaneous, with no time lag.
2.  **Threshold Frequency ($ν_0$):** For a given metal, there exists a certain minimum frequency of incident radiation below which no photoemission occurs, however high the intensity.
3.  **Intensity Effect:** For $ν > ν_0$, the number of photoelectrons emitted per second (photocurrent) is directly proportional to the intensity of incident radiation.
4.  **Kinetic Energy:** For $ν > ν_0$, the maximum kinetic energy of the photoelectrons depends on the frequency of the incident light, not its intensity.`
        },
        {
            english: `### 2. Einstein's Photoelectric Equation
Einstein explained the photoelectric effect by proposing that light consists of discrete packets of energy called photons. The energy of a photon is E = hν.
When a photon of energy hν strikes a metal surface, a part of its energy is used to overcome the binding force of the electron, called the **work function ($\\phi_0$)**, and the rest is given to the electron as kinetic energy.
$$
K_{max} = h\\nu - \\phi_0
$$
*   This is the cornerstone equation of this chapter.
*   **Work Function ($\\phi_0$):** The minimum energy required to liberate an electron from a metal surface. $\\phi_0 = h\\nu_0$.
*   **Stopping Potential ($V_0$):** The minimum negative (retarding) potential applied to the anode for which the photocurrent becomes zero. At this point, the work done by the retarding potential just stops the most energetic electrons.
    $$ e V_0 = K_{max} $$
Combining these, we get the full equation:
$$ e V_0 = h\\nu - h\\nu_0 $$`
        },
        {
            english: `### 3. Particle Nature of Light: The Photon
*   **Energy of a photon:** $E = h\\nu = \\frac{hc}{\\lambda}$
*   **Momentum of a photon:** $p = \\frac{E}{c} = \\frac{h\\nu}{c} = \\frac{h}{\\lambda}$
*   Photons are electrically neutral and are not deflected by electric or magnetic fields.
*   The rest mass of a photon is zero.`
        },
        {
            english: `### 4. Wave Nature of Matter: de Broglie Hypothesis
Louis de Broglie proposed that matter, like radiation, has a dual nature. Every moving particle has a wave associated with it. The wavelength of this matter wave is given by:
$$
\\lambda = \\frac{h}{p} = \\frac{h}{mv}
$$
where p=mv is the momentum of the particle.
*   **de Broglie wavelength of an electron accelerated through a potential V:**
$$ \\lambda = \\frac{h}{\\sqrt{2meV}} \\approx \\frac{12.27}{\\sqrt{V}} \\text{ Å} $$`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Photoelectric Equation",
            titleTamil: "நீட் நிலை: ஒளிமின் சமன்பாடு",
            difficulty: 'Medium',
            problem: "The work function of a metal is 2.1 eV. If light of wavelength 400 nm is incident on the metal, find the maximum kinetic energy of the emitted electrons. (h = 6.63 x 10⁻³⁴ Js, c = 3 x 10⁸ m/s, 1 eV = 1.6 x 10⁻¹⁹ J)",
            problemTamil: "ஒரு உலோகத்தின் வெளியேற்று ஆற்றல் 2.1 eV. 400 nm அலைநீளம் கொண்ட ஒளி அந்த உலோகத்தின் மீது விழுந்தால், வெளிப்படும் எலக்ட்ரான்களின் பெரும இயக்க ஆற்றலைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "First, calculate the energy of the incident photon (E) in Joules.", calculation: "E = hc/λ = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (400 × 10⁻⁹) = 4.97 × 10⁻¹⁹ J" },
                { step: 2, explanation: "Convert the photon energy from Joules to electron-volts (eV).", calculation: "E (eV) = (4.97 × 10⁻¹⁹ J) / (1.6 × 10⁻¹⁹ J/eV) ≈ 3.1 eV" },
                { step: 3, explanation: "A useful shortcut for this calculation is E(eV) ≈ 12400 / λ(Å). λ = 400 nm = 4000 Å.", calculation: "E(eV) = 12400 / 4000 = 3.1 eV" },
                { step: 4, explanation: "Apply Einstein's photoelectric equation: K_max = E - φ₀.", calculation: "K_max = 3.1 eV - 2.1 eV = 1.0 eV" }
            ],
            neetHack: "Always use the shortcut E(eV) = 1240 / λ(nm) or E(eV) = 12400 / λ(Å) to save time in calculations involving photon energy.",
            commonPitfall: "Mixing units. If the work function is in eV, make sure the photon energy is also calculated in or converted to eV before subtracting."
        },
        {
            title: "JEE Level: de Broglie Wavelength",
            titleTamil: "ஜே.இ.இ நிலை: டி பிராய் அலைநீளம்",
            difficulty: 'Medium',
            problem: "Find the ratio of the de Broglie wavelengths of a proton and an alpha particle which have been accelerated through the same potential difference.",
            problemTamil: "ஒரே மின்னழுத்த வேறுபாட்டின் மூலம் முடுக்கிவிடப்பட்ட ஒரு புரோட்டான் மற்றும் ஒரு ஆல்பா துகளின் டி பிராய் அலைநீளங்களின் விகிதத்தைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "Use the formula for de Broglie wavelength of a particle accelerated through potential V: λ = h / √(2mqV).", explanationTamil: "V மின்னழுத்த வேறுபாட்டின் மூலம் முடுக்கிவிடப்பட்ட ஒரு துகளின் டி பிராய் அலைநீளத்திற்கான சூத்திரத்தைப் பயன்படுத்தவும்." },
                { step: 2, explanation: "Since h, V, and the constant 2 are the same for both particles, λ is inversely proportional to √(mq).", calculation: "λ ∝ 1/√(mq)" },
                { step: 3, explanation: "Set up the ratio: λ_p / λ_α = √(m_α q_α) / √(m_p q_p).", calculation: "λ_p / λ_α = \\sqrt{\\frac{m_{\\alpha}q_{\\alpha}}{m_p q_p}}" },
                { step: 4, explanation: "Recall the properties: m_α = 4m_p and q_α = 2q_p.", explanationTamil: "பண்புகளை நினைவுகூர்க: m_α = 4m_p மற்றும் q_α = 2q_p." },
                { step: 5, explanation: "Substitute and solve.", calculation: "\\frac{\\lambda_p}{\\lambda_{\\alpha}} = \\sqrt{\\frac{(4m_p)(2q_p)}{m_p q_p}} = \\sqrt{8} = 2\\sqrt{2}" }
            ],
            commonPitfall: "Forgetting the square root in the proportionality. λ ∝ 1/√m and λ ∝ 1/√q."
        },
        {
            title: "NEET Level: Stopping Potential",
            titleTamil: "நீட் நிலை: நிறுத்து மின்னழுத்தம்",
            difficulty: 'Easy',
            problem: "The work function for a metal is 4.2 eV. If light of frequency 2 x 10¹⁵ Hz is incident on it, what is the stopping potential?",
            problemTamil: "ஒரு உலோகத்திற்கான வெளியேற்று ஆற்றல் 4.2 eV ஆகும். 2 x 10¹⁵ Hz அதிர்வெண் கொண்ட ஒளி அதன் மீது விழுந்தால், நிறுத்து மின்னழுத்தம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Calculate the energy of the incident photon E = hν. It's often easier to work in eV.", calculation: "E = (6.63 × 10⁻³⁴)(2 × 10¹⁵) J = 13.26 × 10⁻¹⁹ J" },
                { step: 2, explanation: "Convert photon energy to eV.", calculation: "E(eV) = (13.26 × 10⁻¹⁹) / (1.6 × 10⁻¹⁹) ≈ 8.29 eV" },
                { step: 3, explanation: "Use Einstein's equation: K_max = E - φ₀.", calculation: "K_max = 8.29 eV - 4.2 eV = 4.09 eV" },
                { step: 4, explanation: "The stopping potential V₀ is related to K_max by K_max = eV₀. Therefore, the stopping potential in Volts is numerically equal to the kinetic energy in eV.", calculation: "V₀ = 4.09 V" }
            ]
        },
        {
            title: "JEE Level: Photon Flux",
            titleTamil: "ஜே.இ.இ நிலை: ஃபோட்டான் பாயம்",
            difficulty: 'Hard',
            problem: "A 100 W sodium lamp radiates energy uniformly in all directions. The lamp is located at the center of a large sphere that absorbs all the sodium light which is incident on it. The wavelength of the sodium light is 589 nm. What is the number of photons arriving per second on a small area of 1 cm² at a distance of 5 m from the source?",
            problemTamil: "ஒரு 100 W சோடியம் விளக்கு அனைத்து திசைகளிலும் ஆற்றலை சீராக கதிர்வீசுகிறது. இந்த விளக்கு ஒரு பெரிய கோளத்தின் மையத்தில் அமைந்துள்ளது, அது தன் மீது விழும் அனைத்து சோடியம் ஒளியையும் உறிஞ்சுகிறது. சோடியம் ஒளியின் அலைநீளம் 589 nm ஆகும். மூலத்திலிருந்து 5 மீ தொலைவில் உள்ள 1 செமீ² சிறிய பரப்பில் ஒரு வினாடிக்கு வந்து சேரும் ஃபோட்டான்களின் எண்ணிக்கை என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Calculate the energy of a single photon.", calculation: "E_photon = hc/λ = (6.63 × 10⁻³⁴ × 3 × 10⁸) / (589 × 10⁻⁹) ≈ 3.37 × 10⁻¹⁹ J" },
                { step: 2, explanation: "Calculate the total number of photons emitted per second (N) by the 100 W lamp.", calculation: "N = Power / E_photon = 100 J/s / (3.37 × 10⁻¹⁹ J/photon) ≈ 2.96 × 10²⁰ photons/s" },
                { step: 3, explanation: "These photons are distributed uniformly over the surface of a sphere of radius 5 m. Calculate the surface area of this sphere.", calculation: "Area = 4πr² = 4π(5)² = 100π m² ≈ 314 m²" },
                { step: 4, explanation: "Calculate the photon flux (number of photons per unit area per second) at this distance.", calculation: "Flux = N / Area = (2.96 × 10²⁰) / 314 ≈ 9.43 × 10¹⁷ photons/m²s" },
                { step: 5, explanation: "Finally, calculate the number of photons arriving on the given area (1 cm² = 10⁻⁴ m²).", calculation: "Photons on area = Flux × Area_small = (9.43 × 10¹⁷) × (10⁻⁴) ≈ 9.43 × 10¹³ photons/s" }
            ]
        },
        {
            title: "NEET Level: Graphical Analysis",
            titleTamil: "நீட் நிலை: வரைபட பகுப்பாய்வு",
            difficulty: 'Medium',
            problem: "The stopping potential V₀ as a function of frequency ν for a certain photoelectric surface is plotted. The slope of this V₀ vs ν graph is found to be 4.12 x 10⁻¹⁵ V s. Calculate the value of Planck's constant.",
            problemTamil: "ஒரு குறிப்பிட்ட ஒளிமின் பரப்பிற்கான நிறுத்து மின்னழுத்தம் V₀ மற்றும் அதிர்வெண் ν ஆகியவற்றின் வரைபடம் வரையப்பட்டுள்ளது. இந்த V₀ vs ν வரைபடத்தின் சாய்வு 4.12 x 10⁻¹⁵ V s என கண்டறியப்பட்டுள்ளது. பிளாங்கின் மாறிலியின் மதிப்பைக் கணக்கிடுக.",
            solutionSteps: [
                { step: 1, explanation: "Start with the photoelectric equation relating stopping potential and frequency: eV₀ = hν - φ₀.", explanationTamil: "நிறுத்து மின்னழுத்தம் மற்றும் அதிர்வெண்ணைத் தொடர்புபடுத்தும் ஒளிமின் சமன்பாட்டுடன் தொடங்கவும்." },
                { step: 2, explanation: "Rearrange this equation into the form of a straight line, y = mx + c. Here, y=V₀ and x=ν.", calculation: "V₀ = (h/e)ν - (φ₀/e)" },
                { step: 3, explanation: "By comparing with y = mx + c, we can see that the slope of the V₀ vs ν graph is m = h/e.", explanationTamil: "y = mx + c உடன் ஒப்பிடுவதன் மூலம், V₀ vs ν வரைபடத்தின் சாய்வு m = h/e என்பதை நாம் காணலாம்." },
                { step: 4, explanation: "Use the given slope to find Planck's constant, h.", calculation: "h = slope × e = (4.12 × 10⁻¹⁵ V s) × (1.6 × 10⁻¹⁹ C) ≈ 6.59 × 10⁻³⁴ J s" }
            ],
            neetHack: "The slope of the Stopping Potential vs Frequency graph is always h/e, a universal constant. The y-intercept is -φ₀/e and the x-intercept is the threshold frequency ν₀.",
            commonPitfall: "Forgetting the 'e' in the slope. The slope is not h, but h/e."
        }
    ],
    mcqs: [
        { question: "The phenomenon of photoelectric effect was explained by:", options: ["A. Hertz", "B. Planck", "C. Einstein", "D. Huygens"], answer: "C. Einstein", explanation: "While Hertz discovered the effect, it was Einstein who provided the correct theoretical explanation using Planck's quantum hypothesis.", neetFrequency: 4 },
        { question: "The de Broglie wavelength of a particle is inversely proportional to its:", options: ["A. Mass", "B. Velocity", "C. Energy", "D. Momentum"], answer: "D. Momentum", explanation: "The de Broglie wavelength is given by λ = h/p, where p is the momentum.", neetFrequency: 5 },
        { question: "The rest mass of a photon is:", options: ["A. Infinite", "B. Zero", "C. Equal to an electron's mass", "D. 9.1 x 10⁻³¹ kg"], answer: "B. Zero", explanation: "Photons are packets of energy that have zero rest mass. They only exist while moving at the speed of light.", neetFrequency: 3 },
        { question: "In the photoelectric effect, the maximum kinetic energy of the emitted photoelectrons depends on:", options: ["A. Intensity of light", "B. Frequency of light", "C. Time of exposure", "D. Angle of incidence"], answer: "B. Frequency of light", explanation: "From K_max = hν - φ₀, the maximum kinetic energy is linearly dependent on the frequency (ν) of the incident light.", neetFrequency: 5 },
        { question: "If the kinetic energy of a particle is doubled, its de Broglie wavelength becomes:", options: ["A. 2 times", "B. 1/2 times", "C. √2 times", "D. 1/√2 times"], answer: "D. 1/√2 times", explanation: "λ = h/√(2mK). If K becomes 2K, the new wavelength becomes λ/√2.", neetFrequency: 4 },
        { question: "The work function of a metal is the:", options: ["A. Minimum energy required to emit an electron", "B. Maximum energy of an emitted electron", "C. Average energy of an emitted electron", "D. Total energy of the metal"], answer: "A. Minimum energy required to emit an electron", explanation: "This is the definition of work function (φ₀).", neetFrequency: 3 },
        { question: "Which of the following particles has the shortest de Broglie wavelength, if all are moving with the same velocity?", options: ["A. Electron", "B. Proton", "C. Neutron", "D. Alpha particle"], answer: "D. Alpha particle", explanation: "λ = h/mv. For the same velocity, wavelength is inversely proportional to mass. The alpha particle is the most massive among the options, so it will have the shortest wavelength.", neetFrequency: 4 },
        { question: "The slope of the stopping potential versus frequency graph is:", options: ["A. h", "B. e/h", "C. h/e", "D. e"], answer: "C. h/e", explanation: "From eV₀ = hν - φ₀, we get V₀ = (h/e)ν - φ₀/e. The slope of the V₀ vs ν graph is h/e.", neetFrequency: 4 },
        { question: "The momentum of a photon of wavelength λ is:", options: ["A. hc/λ", "B. hλ/c", "C. h/λ", "D. λ/h"], answer: "C. h/λ", explanation: "p = E/c = (hc/λ)/c = h/λ.", neetFrequency: 3 },
        { question: "An increase in the intensity of incident light in a photoelectric experiment leads to:", options: ["A. An increase in kinetic energy of electrons", "B. An increase in the number of emitted electrons", "C. A decrease in the work function", "D. An increase in the threshold frequency"], answer: "B. An increase in the number of emitted electrons", explanation: "Higher intensity means more photons arriving per second, which leads to more electrons being emitted per second (a higher photocurrent), provided ν > ν₀.", neetFrequency: 5 },
        { question: "The de Broglie wavelength associated with an electron accelerated through a potential difference of 100 V is approximately:", options: ["A. 1.227 Å", "B. 12.27 Å", "C. 0.1227 Å", "D. 122.7 Å"], answer: "A. 1.227 Å", explanation: "Using the shortcut λ ≈ 12.27/√V Å = 12.27/√100 = 12.27/10 = 1.227 Å.", neetFrequency: 4 },
        { question: "Photons are deflected by:", options: ["A. Electric fields only", "B. Magnetic fields only", "C. Both electric and magnetic fields", "D. Neither electric nor magnetic fields"], answer: "D. Neither electric nor magnetic fields", explanation: "Photons are electrically neutral particles and are not deflected by electric or magnetic fields.", neetFrequency: 2 },
        { question: "The threshold frequency for a metal is ν₀. If light of frequency 2ν₀ is incident on it, the maximum kinetic energy of the photoelectrons is:", options: ["A. hν₀", "B. 2hν₀", "C. hν₀/2", "D. 3hν₀"], answer: "A. hν₀", explanation: "K_max = hν - φ₀ = h(2ν₀) - hν₀ = hν₀.", neetFrequency: 5 },
        { question: "Which experiment confirms the particle nature of light?", options: ["A. Interference", "B. Diffraction", "C. Polarization", "D. Photoelectric effect"], answer: "D. Photoelectric effect", explanation: "The photoelectric effect's observations can only be explained by considering light as consisting of particles (photons).", neetFrequency: 3 },
        { question: "Which of the following has the same dimensions as Planck's constant?", options: ["A. Force", "B. Energy", "C. Linear Momentum", "D. Angular Momentum"], answer: "D. Angular Momentum", explanation: "The dimensions of both Planck's constant and angular momentum are [ML²T⁻¹].", neetFrequency: 2 },
        { question: "An electron, an alpha particle, and a proton have the same kinetic energy. Which of these particles has the shortest de Broglie wavelength?", options: ["A. Electron", "B. Alpha particle", "C. Proton", "D. All have the same wavelength"], answer: "B. Alpha particle", explanation: "λ = h/√(2mK). For the same K, λ is inversely proportional to √m. The alpha particle has the largest mass, so it has the shortest wavelength.", neetFrequency: 4 },
        { question: "If the stopping potential is 3 V, the maximum kinetic energy of the photoelectron is:", options: ["A. 3 J", "B. 3 eV", "C. 3 W", "D. 3 N"], answer: "B. 3 eV", explanation: "K_max = eV₀. If V₀ = 3 V, then K_max is 3 electron-volts (eV).", neetFrequency: 3 },
        { question: "The work function of a substance is 4.0 eV. The longest wavelength of light that can cause photoemission from this substance is approximately:", options: ["A. 540 nm", "B. 400 nm", "C. 310 nm", "D. 220 nm"], answer: "C. 310 nm", explanation: "For emission, the photon energy must be at least equal to the work function. E = φ₀. hc/λ_max = φ₀. λ_max = hc/φ₀ = 1240 eV·nm / 4.0 eV = 310 nm.", neetFrequency: 4 },
        { question: "The concept of 'matter waves' was proposed by:", options: ["A. Einstein", "B. de Broglie", "C. Heisenberg", "D. Schrödinger"], answer: "B. de Broglie", explanation: "Louis de Broglie proposed the hypothesis that all matter has wave-like properties.", neetFrequency: 1 },
        { question: "TheDavisson-Germer experiment confirmed:", options: ["A. The particle nature of light", "B. The wave nature of electrons", "C. The existence of the nucleus", "D. The quantization of charge"], answer: "B. The wave nature of electrons", explanation: "The Davisson-Germer experiment showed that electrons could be diffracted by a crystal, which is a wave property, thus confirming the de Broglie hypothesis.", neetFrequency: 2 },
        { question: "If the momentum of a particle is doubled, its de Broglie wavelength will be:", options: ["A. Halved", "B. Doubled", "C. Four times", "D. Unchanged"], answer: "A. Halved", explanation: "λ = h/p. Wavelength is inversely proportional to momentum. If p is doubled, λ is halved.", neetFrequency: 3 },
        { question: "The energy of a photon of frequency ν is E. If the frequency is doubled, the energy becomes:", options: ["A. E/2", "B. E", "C. 2E", "D. 4E"], answer: "C. 2E", explanation: "E = hν. Energy is directly proportional to frequency. If ν becomes 2ν, energy becomes 2E.", neetFrequency: 2 },
        { question: "Stopping potential in a photoelectric experiment is a measure of:", options: ["A. The intensity of light", "B. The number of photoelectrons", "C. The maximum kinetic energy of photoelectrons", "D. The work function of the metal"], answer: "C. The maximum kinetic energy of photoelectrons", explanation: "The stopping potential is the potential required to stop the most energetic electrons, so eV₀ = K_max.", neetFrequency: 3 },
        { question: "The slope of the K_max vs ν graph for the photoelectric effect gives:", options: ["A. h", "B. h/e", "C. e/h", "D. φ₀"], answer: "A. h", explanation: "From K_max = hν - φ₀, which is in the form y = mx + c, the slope 'm' is clearly Planck's constant 'h'.", neetFrequency: 4 },
        { question: "The idea that light has a dual nature, meaning it can behave as both a wave and a particle, is known as:", options: ["A. The uncertainty principle", "B. Wave-particle duality", "C. The photoelectric effect", "D. Compton scattering"], answer: "B. Wave-particle duality", explanation: "This is the definition of wave-particle duality.", neetFrequency: 1 }
    ],
    assertionReasons: [
        { assertion: "The photoelectric effect demonstrates the particle nature of light.", reason: "The number of photoelectrons emitted is proportional to the frequency of incident light.", answer: "C", explanation: "Assertion is true. The reason is false. The number of photoelectrons is proportional to the *intensity* of light, not the frequency.", neetFrequency: 4 },
        { assertion: "A photon has no mass, yet it exerts pressure.", reason: "Momentum of a photon is given by p = h/λ.", answer: "B", explanation: "Both assertion and reason are true. A photon has momentum, and a change in momentum results in a force (and thus pressure). However, the reason doesn't directly explain the assertion; it just states the formula for momentum.", neetFrequency: 3 },
        { assertion: "The de Broglie wavelength of a proton is smaller than that of an electron if they have the same kinetic energy.", reason: "A proton is more massive than an electron.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. From λ = h/√(2mK), for the same K, λ is inversely proportional to √m. Since a proton is more massive, its wavelength is smaller.", neetFrequency: 4 },
        { assertion: "In a photoelectric experiment, the stopping potential is independent of the intensity of the incident light.", reason: "The maximum kinetic energy of photoelectrons depends only on the frequency and the work function.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. Since K_max = eV₀ and K_max depends on frequency, V₀ also depends on frequency, not intensity.", neetFrequency: 3 },
        { assertion: "The de Broglie wavelength of a moving object is often not observable in daily life.", reason: "The value of Planck's constant (h) is very small.", answer: "A", explanation: "Assertion is true. The reason is also true and is the correct explanation. For macroscopic objects with large mass (m), the wavelength λ=h/mv is extremely small and undetectable.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Einstein", "(b) de Broglie", "(c) Hertz", "(d) Davisson & Germer"], column2: ["(p) Wave nature of electrons", "(q) Discovery of photoelectric effect", "(r) Explanation of photoelectric effect", "(s) Matter waves hypothesis"], answer: "a-r, b-s, c-q, d-p", explanation: "Matching scientists with their key contributions to this field." },
        { column1: ["(a) Photoelectric effect", "(b) Compton effect", "(c) Interference", "(d) Polarization"], column2: ["(p) Wave nature of light", "(q) Particle nature of light", "(r) Transverse wave nature of light"], answer: "a-q, b-q, c-p, d-r", explanation: "Matching phenomena with the nature of light they demonstrate." },
        { column1: ["(a) Slope of V₀ vs ν graph", "(b) y-intercept of V₀ vs ν graph", "(c) x-intercept of V₀ vs ν graph", "(d) Slope of K_max vs ν graph"], column2: ["(p) Threshold frequency (ν₀)", "(q) h/e", "(r) -φ₀/e", "(s) h"], answer: "a-q, b-r, c-p, d-s", explanation: "Matching features of photoelectric effect graphs with their physical significance." },
        { column1: ["(a) Work function", "(b) Photon energy", "(c) Stopping potential", "(d) de Broglie wavelength"], column2: ["(p) hν", "(q) h/p", "(r) K_max/e", "(s) hν₀"], answer: "a-s, b-p, c-r, d-q", explanation: "Matching physical quantities with their defining formulas." },
        { column1: ["(a) Same K.E.", "(b) Same velocity", "(c) Same momentum", "(d) Same accelerating potential"], column2: ["(p) λ ∝ 1/√m", "(q) λ ∝ 1/m", "(r) λ is same for all", "(s) λ ∝ 1/√mq"], answer: "a-p, b-q, c-r, d-s", explanation: "Matching conditions with the resulting dependence of de Broglie wavelength on mass (m) and charge (q)." }
    ],
    keyTakeaways: [
        "Light and matter exhibit wave-particle duality. Which nature is observed depends on the experiment being performed.",
        "The photoelectric effect is evidence for the particle nature of light (photons), where energy is transferred in discrete packets (E=hν).",
        "The de Broglie hypothesis states that all moving matter has an associated wavelength (λ=h/p).",
        "Einstein's photoelectric equation (K_max = hν - φ₀) is the key formula for solving most problems in this chapter."
    ],
    mnemonics: [
        { text: "Remember `eV` is energy, `V` is potential. K_max = eV₀. So if K_max is 2 eV, the stopping potential V₀ is 2 Volts.", tamil: "`eV` என்பது ஆற்றல், `V` என்பது மின்னழுத்தம். K_max = eV₀. எனவே K_max 2 eV என்றால், நிறுத்து மின்னழுத்தம் V₀ 2 வோல்ட் ஆகும்." }
    ],
    neetTips: [
        { text: "Be very comfortable with unit conversions, especially between Joules and electron-volts (eV). 1 eV = 1.6 x 10⁻¹⁹ J.", tamil: "ஜூல் மற்றும் எலக்ட்ரான்-வோல்ட் (eV) ஆகியவற்றுக்கு இடையேயான அலகு மாற்றங்களில் மிகவும் தேர்ச்சி பெற்றிருங்கள். 1 eV = 1.6 x 10⁻¹⁹ J." },
        { text: "Memorize the formula λ ≈ 12.27/√V Å for the de Broglie wavelength of an electron. It is a huge time-saver.", tamil: "ஒரு எலக்ட்ரானின் டி பிராய் அலைநீளத்திற்கான λ ≈ 12.27/√V Å என்ற சூத்திரத்தை மனப்பாடம் செய்யுங்கள். இது ஒரு பெரிய நேர சேமிப்பாகும்." }
    ]
};
