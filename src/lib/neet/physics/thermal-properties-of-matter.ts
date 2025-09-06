
import type { NeetModule } from '@/lib/types';

export const thermalPropertiesOfMatterModule: NeetModule = {
    id: 'neet-physics-thermal-properties-of-matter',
    title: 'Physics - Thermal Properties of Matter (பருப்பொருளின் வெப்பப் பண்புகள்)',
    chapter: 'Thermal Properties of Matter',
    subject: 'Physics',
    learningObjectives: [
        "Define temperature and heat and understand different temperature scales.",
        "Analyze thermal expansion in solids, liquids, and gases.",
        "Define specific heat capacity, molar specific heat capacity, and latent heat.",
        "Apply the principles of calorimetry.",
        "Understand the different modes of heat transfer: conduction, convection, and radiation.",
        "Understand Newton's law of cooling and Kirchhoff's law of thermal radiation."
    ],
    prerequisites: [
        "Basic understanding of temperature.",
        "Concepts of mass and volume."
    ],
    conceptOverview: "This chapter explores how matter responds to heat. We'll start by defining temperature and heat more formally and look at how materials expand when heated (thermal expansion). A central part of the chapter is calorimetry, which deals with the measurement of heat. We'll define specific heat (a measure of how much heat is needed to raise a substance's temperature) and latent heat (the heat required for a phase change, like melting ice or boiling water). Finally, we'll study the three ways heat can travel from one place to another: conduction (through direct contact), convection (through the movement of fluids), and radiation (through electromagnetic waves).",
    tamilConnection: "கோடை காலத்தில் இரும்புப் பொருட்கள் தொட்டால் சுடுவதும், வெந்நீர் வைக்கும்போது பாத்திரம் சூடாவதும் வெப்பக் கடத்தல் (conduction) முறையால் நடக்கிறது. காற்று சூடாகி மேலே செல்வது வெப்பச்சலனம் (convection). சூரியனிலிருந்து வெப்பம் நம்மை அடைவது வெப்பக் கதிர்வீச்சு (radiation). இந்த அத்தியாயம், வெப்பம் பரவும் இந்த மூன்று முறைகளையும் விளக்குகிறது.",
    culturalContext: "Think of the traditional Pongal pot ('pongal paanai'). The clay pot is designed to handle thermal expansion. Heat from the fire is transferred to the pot by radiation and convection, and then through the pot to the water by conduction. The boiling of rice and milk involves the concepts of specific heat and latent heat. The entire festival cooking process is a beautiful demonstration of thermal physics.",
    syllabusMapping: [
         {
            topic: 'Thermal Properties of Matter',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 8: Heat and Thermodynamics',
            ncertReference: 'Class 11 Physics - Part 2, Chapter 11: Thermal Properties of Matter',
            notes: 'An important chapter for NEET. Calorimetry problems (mixing substances at different temperatures) and heat transfer (especially conduction through compound rods and radiation) are frequently asked.',
            mappingDescription: '11th Std Physics - Vol 2, Chapter 8 maps to NEET Physics Unit 8'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. Temperature and Heat',
                tamil: '1. வெப்பநிலை மற்றும் வெப்பம்'
            },
            content: [
                {
                    english: `**Temperature:** A measure of the degree of hotness or coldness of a body. It determines the direction of heat flow.
*   **Heat:** The form of energy transferred between two systems by virtue of a temperature difference.
*   **Temperature Scales:** Celsius (°C), Fahrenheit (°F), Kelvin (K). The SI unit is Kelvin. $K = °C + 273.15$.`,
                    tamil: `**வெப்பநிலை:** ஒரு பொருளின் சூடு அல்லது குளிர்ச்சியின் அளவீடு. இது வெப்ப ஓட்டத்தின் திசையை தீர்மானிக்கிறது.
*   **வெப்பம்:** வெப்பநிலை வேறுபாட்டின் காரணமாக இரண்டு அமைப்புகளுக்கு இடையில் மாற்றப்படும் ஆற்றலின் வடிவம்.
*   **வெப்பநிலை அளவீடுகள்:** செல்சியஸ் (°C), ஃபாரன்ஹீட் (°F), கெல்வின் (K). SI அலகு கெல்வின் ஆகும். $K = °C + 273.15$.`
                }
            ]
        },
        {
            heading: {
                english: '2. Thermal Expansion',
                tamil: '2. வெப்ப விரிவு'
            },
            content: [
                {
                    english: `The increase in the dimensions of a body due to an increase in its temperature.
*   **Linear Expansion:** $\\Delta L = L \\alpha \\Delta T$, where α is the coefficient of linear expansion.
*   **Area Expansion:** $\\Delta A = A \\beta \\Delta T$, where β is the coefficient of area expansion. (β ≈ 2α)
*   **Volume Expansion:** $\\Delta V = V \\gamma \\Delta T$, where γ is the coefficient of volume expansion. (γ ≈ 3α)`,
                    tamil: `ஒரு பொருளின் வெப்பநிலையை அதிகரிப்பதால் அதன் பரிமாணங்களில் ஏற்படும் அதிகரிப்பு.
*   **நீள் விரிவு:** $\\Delta L = L \\alpha \\Delta T$, இங்கு α நீள் விரிவுக் குணகம்.
*   **பரப்பு விரிவு:** $\\Delta A = A \\beta \\Delta T$, இங்கு β பரப்பு விரிவுக் குணகம். (β ≈ 2α)
*   **பரும விரிவு:** $\\Delta V = V \\gamma \\Delta T$, இங்கு γ பரும விரிவுக் குணகம். (γ ≈ 3α)`
                }
            ]
        },
        {
            heading: {
                english: '3. Calorimetry',
                tamil: '3. வெப்பஅளவியல்'
            },
            content: [
                {
                    english: `*   **Specific Heat Capacity (s or c):** The amount of heat required to raise the temperature of a unit mass of a substance by one degree Celsius or one Kelvin. $Q = ms\\Delta T$.
*   **Latent Heat (L):** The amount of heat required to change the state of a unit mass of a substance without any change in its temperature. $Q = mL$.
    *   **Latent Heat of Fusion:** For melting/freezing.
    *   **Latent Heat of Vaporization:** For boiling/condensation.
*   **Principle of Calorimetry:** Heat Lost = Heat Gained.`,
                    tamil: `*   **தன்வெப்ப ஏற்புத்திறன் (s or c):** ஒரு அலகு நிறையுள்ள பொருளின் வெப்பநிலையை ஒரு டிகிரி செல்சியஸ் அல்லது ஒரு கெல்வின் உயர்த்தத் தேவையான வெப்பத்தின் அளவு. $Q = ms\\Delta T$.
*   **உள்ளுறை வெப்பம் (L):** ஒரு பொருளின் வெப்பநிலையில் எந்த மாற்றமும் இல்லாமல், அதன் நிலையை மாற்றத் தேவையான வெப்பத்தின் அளவு. $Q = mL$.
    *   **உருகுதலின் உள்ளுறை வெப்பம்:** உருகுதல்/உறைதலுக்கு.
    *   **ஆவியாதலின் உள்ளுறை வெப்பம்:** கொதித்தல்/ஒடுங்குதலுக்கு.
*   **வெப்பஅளவியல் தத்துவம்:** இழந்த வெப்பம் = பெறப்பட்ட வெப்பம்.`
                }
            ]
        },
        {
            heading: {
                english: '4. Heat Transfer',
                tamil: '4. வெப்பப் பரிமாற்றம்'
            },
            content: [
                {
                    english: `*   **Conduction (வெப்பக் கடத்தல்):** Heat transfer through a material medium without any actual movement of the particles. Rate of heat flow: $\\frac{dQ}{dt} = -kA\\frac{dT}{dx}$, where k is the thermal conductivity.
*   **Convection (வெப்பச்சலனம்):** Heat transfer through the actual movement of matter. Occurs in fluids (liquids and gases).
*   **Radiation (வெப்பக் கதிர்வீச்சு):** Heat transfer through electromagnetic waves, which does not require a medium.
    *   **Stefan-Boltzmann Law:** The rate at which an object radiates energy is proportional to the fourth power of its absolute temperature. $P = \\sigma \\epsilon A T^4$.
    *   **Wien's Displacement Law:** The wavelength of maximum emission is inversely proportional to the absolute temperature. $\\lambda_m T = \\text{constant}$.`,
                    tamil: `*   **வெப்பக் கடத்தல்:** துகள்களின் உண்மையான இயக்கம் இல்லாமல் ஒரு பொருள் ஊடகத்தின் வழியாக வெப்பப் பரிமாற்றம். வெப்பப் பாய்வு வீதம்: $\\frac{dQ}{dt} = -kA\\frac{dT}{dx}$, இங்கு k என்பது வெப்பக் கடத்துத்திறன்.
*   **வெப்பச்சலனம்:** பொருளின் உண்மையான இயக்கத்தின் மூலம் வெப்பப் பரிமாற்றம். பாய்மங்களில் (திரவங்கள் மற்றும் வாயுக்கள்) நிகழ்கிறது.
*   **வெப்பக் கதிர்வீச்சு:** ஊடகம் தேவைப்படாத மின்காந்த அலைகள் மூலம் வெப்பப் பரிமாற்றம்.
    *   **ஸ்டீபன்-போல்ட்ஸ்மேன் விதி:** ஒரு பொருள் ஆற்றலைக் கதிர்வீசும் வீதம் அதன் தனி வெப்பநிலையின் நான்காவது அடுக்குக்கு நேர்விகிதத்தில் இருக்கும். $P = \\sigma \\epsilon A T^4$.
    *   **வியன் இடப்பெயர்ச்சி விதி:** பெரும உமிழ்வின் அலைநீளம் தனி வெப்பநிலைக்கு எதிர்விகிதத்தில் இருக்கும். $\\lambda_m T = \\text{மாறிலி}$.`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Calorimetry",
            titleTamil: "நீட் நிலை: வெப்பஅளவியல்",
            difficulty: 'Medium',
            problem: "10 g of ice at 0°C is mixed with 100 g of water at 50°C. What is the final temperature of the mixture? (Latent heat of fusion of ice L = 80 cal/g, Specific heat of water s = 1 cal/g°C)",
            problemTamil: "0°C வெப்பநிலையில் உள்ள 10 கி பனிக்கட்டி, 50°C வெப்பநிலையில் உள்ள 100 கி நீருடன் கலக்கப்படுகிறது. கலவையின் இறுதி வெப்பநிலை என்ன? (பனிக்கட்டியின் உருகுதலின் உள்ளுறை வெப்பம் L = 80 cal/g, நீரின் தன்வெப்ப ஏற்புத்திறன் s = 1 cal/g°C)",
            solutionSteps: [
                { step: 1, explanation: "First, calculate the heat required to melt the ice completely at 0°C.", calculation: "Q₁ = mL = 10 g × 80 cal/g = 800 cal" },
                { step: 2, explanation: "Next, calculate the maximum heat the water can lose to cool down from 50°C to 0°C.", calculation: "Q₂ = msΔT = 100 g × 1 cal/g°C × (50 - 0)°C = 5000 cal" },
                { step: 3, explanation: "Compare the heat available (Q₂) with the heat required (Q₁). Since Q₂ > Q₁, all the ice will melt.", explanationTamil: "கிடைக்கும் வெப்பத்தை (Q₂) தேவையான வெப்பத்துடன் (Q₁) ஒப்பிடவும். Q₂ > Q₁ என்பதால், அனைத்து பனிக்கட்டியும் உருகிவிடும்." },
                { step: 4, explanation: "Now apply the principle of calorimetry: Heat Lost by hot water = Heat Gained by ice. Let T_f be the final temperature.", calculation: "Heat Lost = 100 × 1 × (50 - T_f)" },
                { step: 5, explanation: "Heat Gained = (Heat to melt ice) + (Heat to raise temperature of melted ice water from 0°C to T_f).", calculation: "Heat Gained = 800 + (10 × 1 × (T_f - 0))" },
                { step: 6, explanation: "Equate the two and solve for T_f.", calculation: "100(50 - T_f) = 800 + 10T_f \\implies 5000 - 100T_f = 800 + 10T_f \\implies 4200 = 110T_f \\implies T_f = 4200 / 110 \\approx 38.2°C" }
            ],
            commonPitfall: "Assuming the final temperature without checking if all the ice melts or all the steam condenses. Always check the heat required for the phase change first.",
            neetHackTamil: "நிலை மாற்றத்திற்குத் தேவையான வெப்பத்தை முதலில் சரிபார்க்காமல் இறுதி வெப்பநிலையை ஊகிப்பது. எப்போதும் முதலில் நிலை மாற்றத்திற்கான வெப்பத் தேவையை சரிபார்க்கவும்."
        },
        {
            title: "JEE Level: Conduction through Compound Rods",
            titleTamil: "ஜே.இ.இ நிலை: கூட்டுத் தண்டுகளின் வழியே வெப்பக்கடத்தல்",
            difficulty: "Medium",
            problem: "Two rods A and B of different materials are welded together as shown. Their thermal conductivities are k₁ and k₂. The thermal conductivity of the composite rod will be:",
            problemTamil: "வெவ்வேறு பொருட்களால் ஆன இரண்டு தண்டுகள் A மற்றும் B படத்தில் காட்டப்பட்டுள்ளபடி ஒன்றாக பற்றவைக்கப்பட்டுள்ளன. அவற்றின் வெப்பக் கடத்துத்திறன்கள் k₁ மற்றும் k₂. கூட்டுத் தண்டின் வெப்பக் கடத்துத்திறன் என்னவாக இருக்கும்?",
            solutionSteps: [
                { step: 1, explanation: "This is a series combination of conductors. The thermal resistance is analogous to electrical resistance.", calculation: "R_thermal = L / kA" },
                { step: 2, explanation: "In a series combination, the total thermal resistance is the sum of individual resistances: R_total = R₁ + R₂.", explanationTamil: "தொடர் இணைப்பில், மொத்த வெப்பத்தடை தனிப்பட்ட தடைகளின் கூடுதலாகும்." },
                { step: 3, explanation: "Let the length of each rod be L and area be A. The total length is 2L.", calculation: "\\frac{2L}{k_{eff}A} = \\frac{L}{k_1 A} + \\frac{L}{k_2 A}" },
                { step: 4, explanation: "Cancel out L and A from all terms.", calculation: "\\frac{2}{k_{eff}} = \\frac{1}{k_1} + \\frac{1}{k_2}" },
                { step: 5, explanation: "Solve for the effective thermal conductivity, k_eff.", calculation: "\\frac{2}{k_{eff}} = \\frac{k_1+k_2}{k_1 k_2} \\implies k_{eff} = \\frac{2k_1 k_2}{k_1 + k_2}" }
            ],
            neetHack: "The effective thermal conductivity for two rods of equal length in series is their harmonic mean. For parallel connection, it would be the arithmetic mean: (k₁+k₂)/2.",
            commonPitfall: "Confusing the formulas for series and parallel combinations of thermal resistances."
        },
        {
            title: "NEET Level: Newton's Law of Cooling",
            titleTamil: "நீட் நிலை: நியூட்டனின் குளிர்ச்சி விதி",
            difficulty: 'Easy',
            problem: "A body cools from 80°C to 50°C in 5 minutes. Calculate the time it takes to cool from 60°C to 30°C. The temperature of the surroundings is 20°C.",
            problemTamil: "ஒரு பொருள் 80°C இலிருந்து 50°C க்கு 5 நிமிடங்களில் குளிர்ச்சியடைகிறது. அது 60°C இலிருந்து 30°C க்கு குளிர்ச்சியடைய எடுத்துக்கொள்ளும் நேரத்தைக் கணக்கிடுக. சூழலின் வெப்பநிலை 20°C ஆகும்.",
            solutionSteps: [
                { step: 1, explanation: "Use Newton's Law of Cooling approximation: (T₁ - T₂) / t = K * [(T₁ + T₂)/2 - T_s], where T_s is the surrounding temperature.", explanationTamil: "நியூட்டனின் குளிர்ச்சி விதியின் தோராயத்தைப் பயன்படுத்தவும்." },
                { step: 2, explanation: "Apply the formula for the first case to find the constant K.", calculation: "(80 - 50) / 5 = K * [(80+50)/2 - 20] => 6 = K * [65 - 20] = 45K => K = 6/45 = 2/15" },
                { step: 3, explanation: "Now apply the formula for the second case using the value of K.", calculation: "(60 - 30) / t = (2/15) * [(60+30)/2 - 20]" },
                { step: 4, explanation: "Solve for t.", calculation: "30 / t = (2/15) * [45 - 20] = (2/15) * 25 = 10/3 => t = 30 * 3 / 10 = 9 minutes" }
            ],
            commonPitfall: "Using Celsius in radiation laws like Stefan-Boltzmann's law (which requires Kelvin). Newton's law of cooling works with Celsius or Kelvin as it deals with temperature differences.",
            neetHackTamil: "ஸ்டீபன்-போல்ட்ஸ்மேன் விதி போன்ற கதிர்வீச்சு விதிகளில் செல்டியஸைப் பயன்படுத்துதல் (கெல்வின் தேவை). நியூட்டனின் குளிர்ச்சி விதி வெப்பநிலை வேறுபாடுகளைக் கையாள்வதால் செல்சியஸ் அல்லது கெல்வின் உடன் வேலை செய்கிறது."
        },
        {
            title: "JEE Level: Wien's Displacement Law",
            titleTamil: "ஜே.இ.இ நிலை: வியன் இடப்பெயர்ச்சி விதி",
            difficulty: "Medium",
            problem: "The spectral energy distribution of the sun has a maximum at 4753 Å. If the temperature of the sun is 6050 K, what is the temperature of a star for which this maximum is at 9506 Å?",
            problemTamil: "சூரியனின் நிறமாலை ஆற்றல் பரவல் 4753 Å இல் பெருமத்தைக் கொண்டுள்ளது. சூரியனின் வெப்பநிலை 6050 K எனில், 9506 Å இல் இந்த பெருமத்தைக் கொண்ட ஒரு நட்சத்திரத்தின் வெப்பநிலை என்ன?",
            solutionSteps: [
                { step: 1, explanation: "State Wien's Displacement Law: λ_m * T = constant (b).", explanationTamil: "வியன் இடப்பெயர்ச்சி விதியைக் கூறவும்: λ_m * T = மாறிலி (b)." },
                { step: 2, explanation: "This means that for two different stars (or the sun and a star), λ₁T₁ = λ₂T₂.", explanationTamil: "அதாவது, இரண்டு வெவ்வேறு நட்சத்திரங்களுக்கு, λ₁T₁ = λ₂T₂." },
                { step: 3, explanation: "Substitute the given values for the sun (1) and the star (2).", calculation: "(4753 Å) * (6050 K) = (9506 Å) * T₂" },
                { step: 4, explanation: "Solve for the temperature of the star, T₂.", calculation: "T₂ = (4753 * 6050) / 9506 = (4753 * 6050) / (2 * 4753) = 6050 / 2 = 3025 K" }
            ],
            neetHack: "Look for simple ratios. Here, the wavelength is doubled (9506 = 2 * 4753). Since λ and T are inversely proportional, if the wavelength doubles, the temperature must be halved.",
            commonPitfall: "Forgetting that Wien's law relates to the wavelength of *maximum* emission, not the total energy radiated."
        },
        {
            title: "NEET Level: Thermal Expansion",
            titleTamil: "நீட் நிலை: வெப்ப விரிவு",
            difficulty: 'Easy',
            problem: "A steel tape gives the correct measurement at 20°C. A piece of wood is being measured with the steel tape at 0°C. The reading is 25 cm on the tape. What is the real length of the wood? (α_steel = 1.2 x 10⁻⁵ /°C)",
            problemTamil: "ஒரு எஃகு நாடா 20°C இல் சரியான அளவீட்டைக் கொடுக்கிறது. ஒரு மரத்துண்டு 0°C இல் அந்த எஃகு நாடாவால் அளவிடப்படுகிறது. நாடாவின் வாசிப்பு 25 செ.மீ ஆகும். மரத்தின் உண்மையான நீளம் என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "At 0°C, the steel tape has contracted because the temperature is lower than its calibration temperature.",
                    explanationTamil: "0°C இல், வெப்பநிலை அதன் அளவுத்திருத்த வெப்பநிலையை விட குறைவாக இருப்பதால் எஃகு நாடா சுருங்கியுள்ளது."
                },
                {
                    step: 2,
                    explanation: "The measured length (25 cm) is less than the true length because the scale markings are closer together.",
                    explanationTamil: "அளவுகோல் குறிகள் நெருக்கமாக இருப்பதால், அளவிடப்பட்ட நீளம் (25 செ.மீ) உண்மையான நீளத்தை விட குறைவாக உள்ளது."
                },
                {
                    step: 3,
                    explanation: "Use the formula L = L₀(1 + αΔT), where L is the true length and L₀ is the measured length (reading).",
                    explanationTamil: "L = L₀(1 + αΔT) என்ற சூத்திரத்தைப் பயன்படுத்தவும், இங்கு L என்பது உண்மையான நீளம் மற்றும் L₀ என்பது அளவிடப்பட்ட நீளம்."
                },
                {
                    step: 4,
                    explanation: "Here, L₀ = 25 cm. ΔT = (Final Temp - Calibration Temp) = 0°C - 20°C = -20°C. Note: We use the temperature of measurement for the tape's final state.",
                    calculation: "L = 25 (1 + (1.2 \\times 10^{-5})(-20))"
                },
                {
                    step: 5,
                    explanation: "Calculate the value.",
                    calculation: "L = 25 (1 - 2.4 \\times 10^{-4}) = 25 - 0.006 = 24.994 \\text{ cm}"
                },
                {
                    step: 6,
                    explanation: "The true length of the wood is slightly less than the reading, which makes sense as the tape contracted.",
                    explanationTamil: "மரத்தின் உண்மையான நீளம் வாசிப்பை விட சற்றே குறைவாக உள்ளது, இது நாடா சுருங்கியதால் அர்த்தமுள்ளதாக இருக்கிறது."
                }
            ]
        }
    ],
    mcqs: [
        { question: "The SI unit of specific heat capacity is:", options: ["A. J kg⁻¹", "B. J K⁻¹", "C. J kg⁻¹ K⁻¹", "D. J mol⁻¹ K⁻¹"], answer: "C. J kg⁻¹ K⁻¹", explanation: "Specific heat capacity is the heat per unit mass per unit change in temperature.", neetFrequency: 2 },
        { question: "A bimetallic strip is made of steel and brass. When heated, it will:", options: ["A. Bend with brass on the convex side", "B. Bend with steel on the convex side", "C. Not bend at all", "D. Bend with brass on the concave side"], answer: "B. Bend with steel on the convex side", explanation: "The coefficient of thermal expansion for brass is greater than for steel. So, when heated, brass expands more and will be on the outer (convex) side of the bend.", neetFrequency: 4 },
        { question: "In which mode of heat transfer is the medium not required?", options: ["A. Conduction", "B. Convection", "C. Radiation", "D. All of the above"], answer: "C. Radiation", explanation: "Radiation involves electromagnetic waves which can travel through a vacuum.", neetFrequency: 5 },
        { question: "According to Wien's displacement law, λ_m T = constant. A star which appears bluish will be:", options: ["A. Hotter than a star which appears reddish", "B. Colder than a star which appears reddish", "C. Of the same temperature as a reddish star", "D. Information insufficient"], answer: "A. Hotter than a star which appears reddish", explanation: "Blue light has a shorter wavelength (λ) than red light. Since λ_m is inversely proportional to T, a shorter wavelength corresponds to a higher temperature.", neetFrequency: 4 },
        { question: "Two rods of the same length and area, but different thermal conductivities k₁ and k₂ are joined in series. The equivalent thermal conductivity is:", options: ["A. (k₁+k₂)/2", "B. k₁+k₂", "C. 2k₁k₂/(k₁+k₂)", "D. √(k₁k₂)"], answer: "C. 2k₁k₂/(k₁+k₂)", explanation: "For series combination, the equivalent thermal resistance is R=R₁+R₂ which leads to the harmonic mean for conductivity.", neetFrequency: 5 },
        { question: "A cup of tea cools from 80°C to 60°C in one minute. The ambient temperature is 30°C. In cooling from 60°C to 50°C it will take:", options: ["A. Less than 1 minute", "B. More than 1 minute", "C. Exactly 1 minute", "D. 50 seconds"], answer: "B. More than 1 minute", explanation: "According to Newton's law of cooling, the rate of cooling is proportional to the temperature difference with the surroundings. As the tea cools, this difference decreases, so the rate of cooling also decreases, meaning it takes more time to cool the next interval.", neetFrequency: 3 },
        { question: "Water has its maximum density at:", options: ["A. 0°C", "B. 100°C", "C. 4°C", "D. -4°C"], answer: "C. 4°C", explanation: "Water exhibits anomalous expansion. It contracts when heated from 0°C to 4°C, and thus has its maximum density at 4°C.", neetFrequency: 2 },
        { question: "The process of heat transfer in which heat is transferred from one particle to another without the actual movement of particles is called:", options: ["A. Conduction", "B. Convection", "C. Radiation", "D. All of these"], answer: "A. Conduction", explanation: "This is the definition of conduction, which primarily occurs in solids.", neetFrequency: 3 },
        { question: "A good absorber of heat is a:", options: ["A. Poor emitter", "B. Good emitter", "C. Non-emitter", "D. Highly polished body"], answer: "B. Good emitter", explanation: "This is according to Kirchhoff's law of thermal radiation, which states that for a body in thermal equilibrium, the emissivity is equal to its absorptivity.", neetFrequency: 4 },
        { question: "When water is heated from 0°C to 10°C, its volume:", options: ["A. Increases steadily", "B. Decreases steadily", "C. First decreases, then increases", "D. First increases, then decreases"], answer: "C. First decreases, then increases", explanation: "Due to anomalous expansion, water contracts from 0°C to 4°C (volume decreases), and then expands from 4°C to 10°C (volume increases).", neetFrequency: 3 },
        { question: "The amount of heat required to change the state of 1 kg of a substance is called its:", options: ["A. Specific heat", "B. Latent heat", "C. Thermal capacity", "D. Water equivalent"], answer: "B. Latent heat", explanation: "Latent heat is the heat absorbed or released during a phase change at constant temperature.", neetFrequency: 2 },
        { question: "On a cold morning, a metal surface feels colder than a wooden surface because:", options: ["A. Metal has higher specific heat", "B. Metal has higher thermal conductivity", "C. Metal has lower specific heat", "D. Metal has lower thermal conductivity"], answer: "B. Metal has higher thermal conductivity", explanation: "Metal is a better conductor of heat, so it conducts heat away from your hand faster, making it feel colder.", neetFrequency: 4 },
        { question: "The SI unit of thermal conductivity is:", options: ["A. J m⁻¹ K⁻¹", "B. W m⁻¹ K⁻¹", "C. W m K⁻¹", "D. J m K⁻¹"], answer: "B. W m⁻¹ K⁻¹", explanation: "From dQ/dt = kA(dT/dx), k = (dQ/dt) * dx / (A*dT). Unit is (J/s) * m / (m² * K) = W m⁻¹ K⁻¹.", neetFrequency: 1 },
        { question: "If the temperature of a black body is doubled, the rate of energy radiated will be:", options: ["A. 2 times", "B. 4 times", "C. 8 times", "D. 16 times"], answer: "D. 16 times", explanation: "According to the Stefan-Boltzmann law, the radiated power is proportional to T⁴. If T is doubled, the power becomes (2T)⁴ = 16T⁴, i.e., 16 times.", neetFrequency: 5 },
        { question: "At the same temperature, which of the following is the fastest mode of heat transfer?", options: ["A. Conduction in solids", "B. Convection in liquids", "C. Convection in gases", "D. Radiation"], answer: "D. Radiation", explanation: "Radiation travels at the speed of light and does not require a medium, making it the fastest mode of heat transfer.", neetFrequency: 2 },
        { question: "What is the value of the coefficient of linear expansion (α) for a material with coefficient of volume expansion (γ) = 3.6 x 10⁻⁵ /°C?", options: ["A. 1.2 x 10⁻⁵ /°C", "B. 3.6 x 10⁻⁵ /°C", "C. 7.2 x 10⁻⁵ /°C", "D. 10.8 x 10⁻⁵ /°C"], answer: "A. 1.2 x 10⁻⁵ /°C", explanation: "For isotropic solids, the approximate relation is γ = 3α. So, α = γ/3 = (3.6 x 10⁻⁵)/3 = 1.2 x 10⁻⁵ /°C.", neetFrequency: 3 },
        { question: "A block of ice at -10°C is slowly heated and converted to steam at 100°C. Which of the following curves represents the phenomenon qualitatively?", options: ["A. A straight line with a positive slope", "B. A curve with an increasing slope", "C. A graph with two horizontal plateaus", "D. A graph with one horizontal plateau"], answer: "C. A graph with two horizontal plateaus", explanation: "The graph will have sloped sections where the temperature of ice, water, and steam rises, and two horizontal sections (plateaus) where the phase changes occur at constant temperature (melting at 0°C and boiling at 100°C).", neetFrequency: 4 },
        { question: "The thermal resistance of a conductor is:", options: ["A. Directly proportional to its thermal conductivity", "B. Inversely proportional to its thermal conductivity", "C. Directly proportional to its area", "D. Inversely proportional to its length"], answer: "B. Inversely proportional to its thermal conductivity", explanation: "Thermal resistance R = L/(kA). It is inversely proportional to thermal conductivity (k) and area (A), and directly proportional to length (L).", neetFrequency: 3 },
        { question: "The boiling point of water on mountains is:", options: ["A. Lower than 100°C", "B. Higher than 100°C", "C. Exactly 100°C", "D. Zero"], answer: "A. Lower than 100°C", explanation: "At higher altitudes, the atmospheric pressure is lower. A liquid boils when its vapor pressure equals the external pressure, so water boils at a lower temperature on mountains.", neetFrequency: 2 },
        { question: "The water equivalent of a body is measured in:", options: ["A. Kelvin", "B. Calorie", "C. Joule", "D. gram"], answer: "D. gram", explanation: "Water equivalent is defined as the mass of water that would absorb or release the same amount of heat as the body for the same temperature change. It is expressed in units of mass, typically grams.", neetFrequency: 1 },
        { question: "If the temperature of a body is increased, the wavelength of the emitted radiation of maximum intensity:", options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. May increase or decrease"], answer: "B. Decreases", explanation: "According to Wien's displacement law, λ_m * T = constant. So, if T increases, λ_m must decrease.", neetFrequency: 4 },
        { question: "Two spheres of the same material have radii in the ratio 1:2. The ratio of their heat capacities is:", options: ["A. 1:2", "B. 1:4", "C. 1:8", "D. 1:1"], answer: "C. 1:8", explanation: "Heat capacity = mass × specific heat = (Volume × density) × specific heat. Since material is the same, heat capacity ∝ Volume ∝ R³. So the ratio is (1/2)³ = 1:8.", neetFrequency: 3 },
        { question: "Which of the following is not a unit of heat?", options: ["A. Calorie", "B. Joule", "C. Kelvin", "D. B.T.U."], answer: "C. Kelvin", explanation: "Kelvin is the SI unit of temperature. Calorie, Joule, and British Thermal Unit (B.T.U.) are all units of heat energy.", neetFrequency: 1 },
        { question: "In natural convection, the flow of fluid is caused by:", options: ["A. Gravity and density differences", "B. A pump or a fan", "C. Surface tension", "D. Viscosity"], answer: "A. Gravity and density differences", explanation: "Natural convection occurs when a fluid is heated, becomes less dense, and rises due to buoyant forces, while cooler, denser fluid sinks. This circulation is driven by gravity acting on density differences.", neetFrequency: 2 },
        { question: "One calorie is defined as the heat required to raise the temperature of:", options: ["A. 1 g of water from 14.5°C to 15.5°C", "B. 1 kg of water by 1°C", "C. 1 g of copper by 1°C", "D. 1 kg of iron by 1°C"], answer: "A. 1 g of water from 14.5°C to 15.5°C", explanation: "This is the precise definition of the 15-degree calorie.", neetFrequency: 2 }
    ],
    assertionReasons: [
        {
            assertion: "A brass tumbler feels much colder than a wooden tray on a chilly day.",
            reason: "Brass has a higher thermal conductivity than wood.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct explanation. Brass conducts heat away from your hand much faster than wood, making it feel colder, even though both are at the same temperature.",
            neetFrequency: 4
        },
        {
            assertion: "Water is used as a coolant in automobile radiators.",
            reason: "Water has a high specific heat capacity.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct explanation. Water's high specific heat capacity allows it to absorb a large amount of heat from the engine without a large increase in its own temperature.",
            neetFrequency: 3
        },
        {
            assertion: "The temperature of a body can be negative on the Celsius scale but not on the Kelvin scale.",
            reason: "The Kelvin scale is the absolute temperature scale.",
            answer: "A",
            explanation: "The assertion is true (-10°C is possible, -10 K is not). The reason is also true and is the correct explanation. The Kelvin scale starts from absolute zero (0 K), the lowest possible temperature, so it has no negative values.",
            neetFrequency: 2
        },
        {
            assertion: "Good absorbers of radiation are also good emitters.",
            reason: "The emissivity of a body is equal to its absorptivity for all wavelengths.",
            answer: "A",
            explanation: "The assertion is true. The reason is a statement of Kirchhoff's Law of thermal radiation and is the correct explanation for the assertion.",
            neetFrequency: 3
        },
        {
            assertion: "The coefficient of linear expansion has the unit K⁻¹ or °C⁻¹.",
            reason: "It is the fractional change in length per unit change in temperature.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct explanation. α = (ΔL/L)/ΔT. Since ΔL/L is dimensionless, the unit of α is the inverse of the unit of temperature change.",
            neetFrequency: 1
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Conduction", "(b) Convection", "(c) Radiation", "(d) Calorimetry"],
            column2: ["(p) Movement of fluid", "(q) No medium required", "(r) Principle of mixtures", "(s) Transfer through solids"],
            answer: "a-s, b-p, c-q, d-r",
            explanation: "Matching the thermal concepts with their descriptions."
        },
        {
            column1: ["(a) Specific Heat", "(b) Latent Heat", "(c) Thermal Conductivity", "(d) Coefficient of Linear Expansion"],
            column2: ["(p) J/kg", "(q) K⁻¹", "(r) W m⁻¹ K⁻¹", "(s) J kg⁻¹ K⁻¹"],
            answer: "a-s, b-p, c-r, d-q",
            explanation: "Matching the physical quantities with their SI units."
        },
        {
            column1: ["(a) Stefan's Law", "(b) Wien's Law", "(c) Newton's Law of Cooling", "(d) Pascal's Law"],
            column2: ["(p) λ_m T = constant", "(q) Rate ∝ (T-T₀)", "(r) P ∝ T⁴", "(s) Pressure transmission"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "Matching the laws with their mathematical relations. Pascal's law is from fluids but often related."
        },
        {
            column1: ["(a) Melting", "(b) Boiling", "(c) Heating of water", "(d) Thermal Expansion"],
            column2: ["(p) Specific Heat", "(q) Latent Heat of Fusion", "(r) Coefficient of Expansion", "(s) Latent Heat of Vaporization"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "Matching the physical processes with the relevant property."
        },
        {
            column1: ["(a) Black body", "(b) White body", "(c) Thermos flask", "(d) Bimetallic strip"],
            column2: ["(p) Differential expansion", "(q) Prevents all heat transfer", "(r) Good reflector", "(s) Perfect absorber"],
            answer: "a-s, b-r, c-q, d-p",
            explanation: "Matching the objects with their key thermal property or application."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: 'Q = mc\\Delta T',
                description: 'Heat Transfer (Specific Heat)',
                descriptionTamil: 'வெப்பப் பரிமாற்றம் (தன்வெப்ப ஏற்புத்திறன்)'
            },
            {
                formula: 'Q = mL',
                description: 'Heat Transfer (Latent Heat)',
                descriptionTamil: 'வெப்பப் பரிமாற்றம் (உள்ளுறை வெப்பம்)'
            },
            {
                formula: '\\frac{dQ}{dt} = kA\\frac{T_1-T_2}{L}',
                description: 'Heat Conduction through a rod',
                descriptionTamil: 'ஒரு தண்டு வழியாக வெப்பக் கடத்தல்'
            },
            {
                formula: 'P = \\sigma \\epsilon A T^4',
                description: 'Stefan-Boltzmann Law of Radiation',
                descriptionTamil: 'ஸ்டீபன்-போல்ட்ஸ்மேன் கதிர்வீச்சு விதி'
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Heat is energy in transit due to a temperature difference.",
        "Materials expand on heating and transfer heat via conduction, convection, and radiation.",
        "During a phase change, the temperature of a substance remains constant as it absorbs or releases latent heat.",
        "Good absorbers of heat are also good emitters of heat."
    ],
    mnemonics: [
        {
            text: "Remember the modes of heat transfer: Conduction (needs contact), Convection (needs current/flow), Radiation (can travel through a vacuum).",
            tamil: "வெப்பப் பரிமாற்ற முறைகளை நினைவில் கொள்க: கடத்தல் (தொடுதல் தேவை), சலனம் (ஓட்டம் தேவை), கதிர்வீச்சு (வெற்றிடத்தில் பயணிக்க முடியும்)."
        }
    ],
    neetTips: [
        {
            text: "Calorimetry problems are all about careful accounting. Write 'Heat Gained by cold bodies = Heat Lost by hot bodies' and list down every term (mcΔT for temperature change, mL for phase change) for each body.",
            tamil: "வெப்பஅளவியல் கணக்குகள் அனைத்தும் கவனமான கணக்கீட்டைப் பற்றியது. 'குளிர்ந்த பொருட்களால் பெறப்பட்ட வெப்பம் = சூடான பொருட்களால் இழந்த வெப்பம்' என்று எழுதி, ஒவ்வொரு பொருளுக்கும் ஒவ்வொரு உறுப்பையும் (வெப்பநிலை மாற்றத்திற்கு mcΔT, நிலை மாற்றத்திற்கு mL) பட்டியலிடுங்கள்."
        },
        {
            text: "For series and parallel combinations of rods in heat conduction, the formulas are analogous to electrical circuits: For series, R_thermal adds up. For parallel, 1/R_thermal adds up. Remember that thermal resistance R = L/(kA).",
            tamil: "வெப்பக் கடத்தலில் தண்டுகளின் தொடர் மற்றும் பக்க இணைப்புகளுக்கு, சூத்திரங்கள் மின்சுற்றுக்களைப் போன்றவை: தொடரிணைப்பிற்கு, R_வெப்பம் கூட்டப்படும். பக்க இணைப்பிற்கு, 1/R_வெப்பம் கூட்டப்படும். வெப்பத்தடை R = L/(kA) என்பதை நினைவில் கொள்க."
        }
    ],
    studentTip: {
        english: "Try to observe these phenomena in daily life. Notice how a metal spoon gets hot in a cup of tea (conduction), how water boils in a pot (convection), and how you feel the warmth of a fire from a distance (radiation).",
        tamil: "இந்த நிகழ்வுகளை அன்றாட வாழ்வில் கவனிக்க முயற்சிக்கவும். ஒரு தேநீர் கோப்பையில் ஒரு உலோகக் கரண்டி எப்படி சூடாகிறது (கடத்தல்), ஒரு பாத்திரத்தில் தண்ணீர் எப்படி கொதிக்கிறது (சலனம்), மற்றும் தூரத்திலிருந்து ஒரு நெருப்பின் வெப்பத்தை நீங்கள் எப்படி உணர்கிறீர்கள் (கதிர்வீச்சு) என்பதைக் கவனியுங்கள்."
    },
    peerDiscussion: {
        english: "Discuss with a friend why wearing multiple thin layers of clothing is warmer than wearing a single thick layer of the same total thickness. What role does conduction and convection play here?",
        tamil: "ஒரே மொத்த தடிமன் கொண்ட ஒரு தடிமனான அடுக்கை அணிவதை விட, பல மெல்லிய அடுக்குகளை அணிவது ஏன் வெப்பமாக இருக்கிறது என்று உங்கள் நண்பருடன் விவாதிக்கவும். இங்கு கடத்தல் மற்றும் சலனம் என்ன பங்கு வகிக்கின்றன?"
    },
    nextChapter: {
        title: "Thermodynamics",
        titleTamil: "வெப்ப இயக்கவியல்"
    },
    validationReport: []
};
