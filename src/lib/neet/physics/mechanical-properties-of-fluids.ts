
import type { NeetModule } from '@/lib/types';

export const mechanicalPropertiesOfFluidsModule: NeetModule = {
    id: 'neet-physics-mechanical-properties-of-fluids',
    title: 'Physics - Mechanical Properties of Fluids (பாய்மங்களின் இயந்திரப் பண்புகள்)',
    chapter: 'Mechanical Properties of Fluids',
    subject: 'Physics',
    learningObjectives: [
        "Define pressure and understand its variation with depth (Pascal's Law).",
        "Understand the concept of buoyancy and Archimedes' principle.",
        "Differentiate between streamline and turbulent flow, and understand the equation of continuity.",
        "Apply Bernoulli's principle to various situations involving fluid dynamics.",
        "Define viscosity and understand Stoke's law and terminal velocity.",
        "Explain surface tension, surface energy, and phenomena like capillary action."
    ],
    prerequisites: [
        "Newton's Laws of Motion.",
        "Work, Energy, and Power.",
        "Basic concepts of pressure and density."
    ],
    conceptOverview: "This chapter explores the mechanics of fluids—substances that can flow (liquids and gases). It is divided into two main parts: fluid statics (fluids at rest) and fluid dynamics (fluids in motion). In statics, we explore concepts like pressure, buoyancy (Archimedes' principle), and Pascal's law, which explains how hydraulic lifts work. In dynamics, we introduce Bernoulli's principle, a fundamental law based on energy conservation for flowing fluids, which explains everything from the lift on an airplane wing to the swing of a cricket ball. We also delve into real-world fluid properties like viscosity (fluid friction) and surface tension (the skin-like property of liquid surfaces).",
    tamilConnection: "ஆறுகளில் ஓடும் நீர், காற்றில் பறக்கும் பறவை, கப்பல் மிதப்பது - இவை அனைத்தும் பாய்மங்களின் இயக்கவியல் விதிகளுக்கு உட்பட்டவை. பாஸ்கல் விதி, ஆர்க்கிமிடிஸ் தத்துவம் மற்றும் பெர்னூலியின் தத்துவம் ஆகியவை இந்த நிகழ்வுகளின் பின்னால் உள்ள அறிவியலை விளக்குகின்றன.",
    culturalContext: "Consider the massive temple tanks (தெப்பக்குளம்) in Tamil Nadu, like the one at the Madurai Meenakshi Amman Temple. The pressure at the bottom is immense, a concept explained by fluid statics. The floating of the 'theppam' (raft) during festivals is a direct demonstration of Archimedes' principle and buoyancy. This chapter unpacks the physics governing these familiar sights.",
    syllabusMapping: [
         {
            topic: 'Mechanical Properties of Fluids',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 7: Properties of Matter',
            ncertReference: 'Class 11 Physics - Part 2, Chapter 10: Mechanical Properties of Fluids',
            notes: 'A comprehensive chapter with many important concepts. Bernoulli\'s principle and the equation of continuity are very frequently tested. Problems on terminal velocity (Stoke\'s Law) and excess pressure in bubbles are also high-yield.',
            mappingDescription: '11th Std Physics - Vol 2, Chapter 7 maps to NEET Physics Unit 7'
        }
    ],
    conceptNotes: [
        {
            english: `### 1. Pressure and Pascal's Law (அழுத்தம் மற்றும் பாஸ்கல் விதி)
*   **Pressure (P):** The normal force exerted by a fluid per unit area. $P = F/A$. It is a scalar quantity. SI unit is Pascal (Pa) or N/m².
*   **Pressure variation with depth:** For a fluid of density ρ, the pressure at a depth h below the surface is $P = P_a + h\\rho g$, where $P_a$ is the atmospheric pressure. The pressure difference between two points separated by a height h is $h\\rho g$. This is the reason why deep-sea divers need pressurized suits.
*   **Pascal's Law:** Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel. This is the principle behind hydraulic lifts and brakes. $\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$.`
        },
        {
            english: `### 2. Archimedes' Principle and Buoyancy (ஆர்க்கிமிடிஸ் தத்துவம் மற்றும் மிதப்பு விசை)
*   **Buoyant Force (F_B):** When a body is immersed in a fluid, an upward force acts on it. This is the buoyant force.
*   **Archimedes' Principle:** The buoyant force on an immersed body is equal to the weight of the fluid displaced by it. $F_B = V_{submerged} \\rho_{fluid} g$.
*   **Law of Floatation:** A body floats in a liquid if the weight of the liquid displaced by its immersed part is equal to its own weight.`
        },
        {
            english: `### 3. Fluid Dynamics: Equation of Continuity and Bernoulli's Principle (பாய்ம இயக்கவியல்: தொடர்ச்சிச் சமன்பாடு மற்றும் பெர்னூலியின் தத்துவம்)
*   **Streamline Flow (வரிச்சீர் ஓட்டம்):** A flow in which the velocity of fluid particles at any point does not change with time.
*   **Turbulent Flow (சுழற்சி ஓட்டம்):** A disorderly flow with eddies and vortices.
*   **Equation of Continuity:** For an incompressible, non-viscous fluid in streamline flow, the product of the area of cross-section (A) and the velocity of flow (v) is constant. This is a statement of conservation of mass.
$$ A_1 v_1 = A_2 v_2 $$
    This is why water flows faster from a narrower pipe.
*   **Bernoulli's Principle:** For an incompressible, non-viscous fluid in streamline flow, the sum of pressure energy, kinetic energy, and potential energy per unit volume is constant. This is a statement of conservation of energy for a flowing fluid.
$$ P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant} $$`
        },
        {
            english: `### 4. Viscosity and Surface Tension (பாகுநிலை மற்றும் பரப்பு இழுவிசை)
*   **Viscosity (பாகுநிலை, η):** The property of a fluid by virtue of which it opposes relative motion between its different layers. It is like friction for fluids.
*   **Stoke's Law:** The viscous drag force on a spherical body of radius r moving with velocity v in a fluid of viscosity η is $F_v = 6\\pi\\eta rv$.
*   **Terminal Velocity (முற்றுத் திசைவேகம்):** The constant maximum velocity acquired by a body falling through a viscous fluid.
*   **Surface Tension (T) (பரப்பு இழுவிசை):** The property of a liquid by virtue of which its free surface behaves like a stretched elastic membrane. It is defined as the force per unit length. $T = F/l$.
*   **Surface Energy:** Work done to increase the surface area of a liquid.
*   **Excess Pressure:** Pressure inside a liquid drop or bubble is greater than the outside pressure.
    *   For a liquid drop: $\\Delta P = 2T/R$
    *   For a soap bubble (two surfaces): $\\Delta P = 4T/R$
*   **Capillarity (நுண்புழை ஏற்றம்):** The rise or fall of a liquid in a narrow tube (capillary tube).`
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Bernoulli's Principle",
            titleTamil: "நீட் நிலை: பெர்னூலியின் தத்துவம்",
            difficulty: 'Medium',
            problem: "Water flows through a horizontal pipe of varying cross-section. At a point where the pressure is 10⁵ Pa, the velocity is 2 m/s. What is the pressure at another point where the velocity is 10 m/s? (Density of water = 1000 kg/m³)",
            problemTamil: "மாறும் குறுக்குவெட்டு கொண்ட ஒரு கிடைமட்ட குழாய் வழியாக நீர் பாய்கிறது. அழுத்தம் 10⁵ Pa ஆக இருக்கும் ஒரு புள்ளியில், திசைவேகம் 2 மீ/வி ஆகும். திசைவேகம் 10 மீ/வி ஆக இருக்கும் மற்றொரு புள்ளியில் அழுத்தம் என்ன? (நீரின் அடர்த்தி = 1000 kg/m³)",
            solutionSteps: [
                { step: 1, explanation: "Since the pipe is horizontal, the height is constant (h₁ = h₂), so the potential energy term (ρgh) can be ignored in Bernoulli's equation.", explanationTamil: "குழாய் கிடைமட்டமாக இருப்பதால், உயரம் மாறிலி (h₁ = h₂), எனவே பெர்னூலியின் சமன்பாட்டில் நிலை ஆற்றல் உறுப்பை (ρgh) புறக்கணிக்கலாம்." },
                { step: 2, explanation: "Write Bernoulli's principle for the two points: P₁ + (1/2)ρv₁² = P₂ + (1/2)ρv₂².", explanationTamil: "இரண்டு புள்ளிகளுக்கும் பெர்னூலியின் தத்துவத்தை எழுதவும்: P₁ + (1/2)ρv₁² = P₂ + (1/2)ρv₂²." },
                { step: 3, explanation: "Rearrange the formula to solve for P₂.", calculation: "P₂ = P₁ + (1/2)ρ(v₁² - v₂²)" },
                { step: 4, explanation: "Substitute the given values: P₁ = 10⁵ Pa, ρ = 1000 kg/m³, v₁ = 2 m/s, v₂ = 10 m/s.", calculation: "P₂ = 10⁵ + (1/2)(1000)(2² - 10²) = 100000 + 500(4 - 100) = 100000 - 48000" },
                { step: 5, explanation: "Calculate the final pressure.", calculation: "P₂ = 52000 Pa = 5.2 × 10⁴ Pa" }
            ],
            neetHack: "Bernoulli's principle essentially says 'where speed is high, pressure is low'. Since the velocity increased from 2 to 10 m/s, you should expect the pressure to decrease. This helps check if your answer is reasonable.",
            neetHackTamil: "பெர்னூலியின் தத்துவம் அடிப்படையில் 'வேகம் அதிகம் உள்ள இடத்தில், அழுத்தம் குறைவு' என்று கூறுகிறது. திசைவேகம் 2-லிருந்து 10 மீ/வி ஆக அதிகரித்துள்ளதால், அழுத்தம் குறையும் என்று நீங்கள் எதிர்பார்க்க வேண்டும். இது உங்கள் விடை நியாயமானதா என்பதைச் சரிபார்க்க உதவுகிறது."
        },
        {
            title: "JEE Level: Terminal Velocity",
            titleTamil: "ஜே.இ.இ நிலை: முற்றுத் திசைவேகம்",
            difficulty: "Medium",
            problem: "A spherical steel ball of radius 1 mm is falling through glycerine. Given density of steel = 8 g/cm³, density of glycerine = 1.3 g/cm³, and viscosity of glycerine = 0.83 Pa·s. Find the terminal velocity. (g=9.8 m/s²)",
            problemTamil: "1 மிமீ ஆரம் கொண்ட ஒரு கோள வடிவ எஃகு பந்து கிளிசரின் வழியாக கீழே விழுகிறது. எஃகின் அடர்த்தி = 8 கி/செமீ³, கிளிசரின் அடர்த்தி = 1.3 கி/செமீ³, மற்றும் கிளிசரின் பாகுநிலை = 0.83 Pa·s எனில், முற்றுத் திசைவேகத்தைக் கண்டறியவும். (g=9.8 மீ/வி²)",
            solutionSteps: [
                { step: 1, explanation: "At terminal velocity, the net force is zero. The downward gravitational force is balanced by the upward buoyant force and viscous drag force. F_gravity = F_buoyant + F_viscous.", explanationTamil: "முற்றுத் திசைவேகத்தில், நிகர விசை சுழியாகும். கீழ்நோக்கிய ஈர்ப்பு விசை மேல்நோக்கிய மிதப்பு விசை மற்றும் பாகுநிலை இழுவிசையால் சமன் செய்யப்படுகிறது." },
                { step: 2, explanation: "Write the expressions for each force. Let σ be the density of the sphere and ρ be the density of the fluid. Weight W = mg = (4/3)πr³σg. Buoyant force F_B = (4/3)πr³ρg. Viscous force F_v = 6πηrv.", explanationTamil: "ஒவ்வொரு விசைக்குமான கோவைகளை எழுதவும்." },
                { step: 3, explanation: "Equate the forces: (4/3)πr³σg = (4/3)πr³ρg + 6πηrv_t.", explanationTamil: "விசைகளை சமன்படுத்தவும்." },
                { step: 4, explanation: "Rearrange to solve for the terminal velocity v_t.", calculation: "v_t = \\frac{2r^2(\\sigma - \\rho)g}{9\\eta}" },
                { step: 5, explanation: "Convert all units to SI: r=1mm=10⁻³m, σ=8000 kg/m³, ρ=1300 kg/m³.", explanationTamil: "அனைத்து அலகுகளையும் SI முறைக்கு மாற்றவும்." },
                { step: 6, explanation: "Substitute the values and calculate.", calculation: "v_t = \\frac{2(10^{-3})^2(8000-1300)(9.8)}{9(0.83)} = \\frac{2(10^{-6})(6700)(9.8)}{7.47} \\approx 1.75 \\times 10^{-2} \\text{ m/s}" }
            ],
            commonPitfall: "Unit conversions are the biggest source of error. Ensure all quantities are in SI units (meters, kg, seconds) before substituting them into the formula.",
            commonPitfallTamil: "அலகு மாற்றங்கள் தான் பிழையின் மிகப்பெரிய மூலமாகும். சூத்திரத்தில் பிரதியிடும் முன் அனைத்து அளவுகளும் SI அலகுகளில் (மீட்டர், கிகி, வினாடி) உள்ளதா என்பதை உறுதிப்படுத்தவும்."
        },
        {
            title: "NEET Level: Excess Pressure",
            titleTamil: "நீட் நிலை: மிகை அழுத்தம்",
            difficulty: "Easy",
            problem: "The excess pressure inside a soap bubble is three times the excess pressure inside another soap bubble. What is the ratio of the volume of the first bubble to the second bubble?",
            problemTamil: "ஒரு சோப்புக் குமிழியின் உள்ளே உள்ள மிகை அழுத்தம் மற்றொரு சோப்புக் குமிழியின் உள்ளே உள்ள மிகை அழுத்தத்தை விட மூன்று மடங்கு அதிகம். முதல் குமிழியின் கனஅளவுக்கும் இரண்டாவது குமிழியின் கனஅளவுக்கும் உள்ள விகிதம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "For a soap bubble, the excess pressure is ΔP = 4T/R.", explanationTamil: "ஒரு சோப்புக் குமிழிக்கு, மிகை அழுத்தம் ΔP = 4T/R ஆகும்." },
                { step: 2, explanation: "Given ΔP₁ = 3 * ΔP₂. Therefore, 4T/R₁ = 3 * (4T/R₂).", explanationTamil: "ΔP₁ = 3 * ΔP₂ என கொடுக்கப்பட்டுள்ளது. எனவே, 4T/R₁ = 3 * (4T/R₂)." },
                { step: 3, explanation: "Find the ratio of the radii. 1/R₁ = 3/R₂ => R₂ = 3R₁ => R₁/R₂ = 1/3.", explanationTamil: "ஆரங்களின் விகிதத்தைக் கண்டறியவும். R₁/R₂ = 1/3." },
                { step: 4, explanation: "The volume of a sphere is V = (4/3)πR³. The ratio of volumes is V₁/V₂ = (R₁/R₂)³.", explanationTamil: "ஒரு கோளத்தின் கனஅளவு V = (4/3)πR³. கனஅளவுகளின் விகிதம் V₁/V₂ = (R₁/R₂)³ ஆகும்." },
                { step: 5, explanation: "Calculate the final ratio.", calculation: "V₁/V₂ = (1/3)³ = 1/27" }
            ],
            neetHack: "Recognize the inverse relationship. Since ΔP ∝ 1/R, if pressure ratio is 3:1, radius ratio is 1:3. Since V ∝ R³, volume ratio is (1/3)³ = 1:27.",
            commonPitfall: "Using the formula for a liquid drop (2T/R) instead of a soap bubble (4T/R). A bubble has two surfaces (inner and outer)."
        },
        {
            title: "JEE Level: Hydraulic Lift",
            titleTamil: "ஜே.இ.இ நிலை: நீரியல் உயர்த்தி",
            difficulty: "Medium",
            problem: "In a hydraulic lift, the radii of the two pistons are 5 cm and 20 cm. What force must be applied on the smaller piston to lift a car of mass 1000 kg on the larger piston? (g=10 m/s²)",
            problemTamil: "ஒரு நீரியல் உயர்த்தியில், இரண்டு பிஸ்டன்களின் ஆரங்கள் 5 செ.மீ மற்றும் 20 செ.மீ ஆகும். பெரிய பிஸ்டனில் உள்ள 1000 கிகி நிறையுள்ள ஒரு காரை உயர்த்த சிறிய பிஸ்டனில் என்ன விசை செலுத்தப்பட வேண்டும்?",
            solutionSteps: [
                { step: 1, explanation: "According to Pascal's Law, the pressure is transmitted equally: P₁ = P₂.", calculation: "F₁/A₁ = F₂/A₂" },
                { step: 2, explanation: "The force on the larger piston (F₂) is the weight of the car, F₂ = mg = 1000 * 10 = 10000 N.", explanationTamil: "பெரிய பிஸ்டன் மீதான விசை (F₂) காரின் எடை ஆகும்." },
                { step: 3, explanation: "Calculate the areas of the pistons. A = πr². A₁ = π(0.05)², A₂ = π(0.20)².", explanationTamil: "பிஸ்டன்களின் பரப்பளவைக் கணக்கிடவும்." },
                { step: 4, explanation: "Rearrange Pascal's law to solve for the applied force F₁.", calculation: "F₁ = F₂ * (A₁/A₂) = F₂ * (πr₁²/πr₂²) = F₂ * (r₁/r₂)²" },
                { step: 5, explanation: "Substitute the values and calculate F₁.", calculation: "F₁ = 10000 * (5/20)² = 10000 * (1/4)² = 10000 / 16 = 625 N" }
            ],
            neetHack: "The force multiplication factor is the ratio of the areas, which is the square of the ratio of the radii. (A₂/A₁) = (r₂/r₁)² = (20/5)² = 16. So the output force is 16 times the input force, or F_in = F_out / 16.",
            commonPitfall: "Forgetting to square the ratio of the radii when using it to find the ratio of areas."
        },
        {
            title: "NEET Level: Equation of Continuity",
            titleTamil: "நீட் நிலை: தொடர்ச்சிச் சமன்பாடு",
            difficulty: 'Easy',
            problem: "Water is flowing through a pipe of diameter 2 cm with a velocity of 5 m/s. The pipe tapers and the diameter becomes 1 cm. What is the velocity of water at the narrower end?",
            problemTamil: "2 செ.மீ விட்டம் கொண்ட ஒரு குழாய் வழியாக 5 மீ/வி திசைவேகத்தில் நீர் பாய்கிறது. குழாய் குறுகி, விட்டம் 1 செ.மீ ஆகிறது. குறுகிய முனையில் நீரின் திசைவேகம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Apply the equation of continuity: A₁v₁ = A₂v₂.", explanationTamil: "தொடர்ச்சிச் சமன்பாட்டைப் பயன்படுத்தவும்: A₁v₁ = A₂v₂." },
                { step: 2, explanation: "The area of a circular pipe is A = πr² = π(d/2)². So, A is proportional to d².", explanationTamil: "ஒரு வட்டக் குழாயின் பரப்பு A = πr² = π(d/2)². எனவே, A ஆனது d² க்கு விகிதாசாரமாகும்." },
                { step: 3, explanation: "The relation becomes d₁²v₁ = d₂²v₂.", calculation: "v₂ = v₁ * (d₁/d₂)²" },
                { step: 4, explanation: "Substitute the given values.", calculation: "v₂ = 5 m/s * (2 cm / 1 cm)² = 5 * 2² = 5 * 4 = 20 m/s" }
            ],
            neetHack: "Velocity is inversely proportional to the square of the diameter (or radius). If the diameter is halved, the area becomes 1/4th, so the velocity must become 4 times to keep the flow rate constant."
        }
    ],
    mcqs: [],
    assertionReasons: [],
    matchTheColumns: []
};
