
import type { NeetModule } from '@/lib/types';

export const propertiesOfSolidsAndLiquidsModule: NeetModule = {
    id: 'neet-physics-properties-of-solids-and-liquids',
    title: 'Physics - Properties of Solids and Liquids (திண்மங்கள் மற்றும் பாய்மங்களின் பண்புகள்)',
    chapter: 'Properties of Solids and Liquids',
    subject: 'Physics',
    learningObjectives: [
        "Understand the elastic behavior of solids, including stress, strain, and Hooke's Law.",
        "Analyze the properties of fluids at rest, including pressure, Pascal's law, and Archimedes' principle.",
        "Describe fluid dynamics, including viscosity, Stokes' law, and the equation of continuity.",
        "Apply Bernoulli's theorem to various fluid flow scenarios.",
        "Understand surface tension, surface energy, and phenomena like capillary action."
    ],
    prerequisites: [
        "Newton's Laws of Motion",
        "Concepts of Force and Pressure",
        "Work, Energy, and Power principles"
    ],
    conceptOverview: "This chapter explores the mechanical properties of matter in its three main states: solid, liquid, and gas. We begin with solids, investigating how they deform under external forces (elasticity). Then, we move to fluids (liquids and gases), first studying their properties at rest (hydrostatics) and then their properties in motion (hydrodynamics). Concepts like pressure, buoyancy, viscosity, and surface tension, which govern everything from why ships float to why raindrops are spherical, are introduced. This chapter is rich in real-world applications and forms a bridge between classical mechanics and the properties of bulk matter.",
    tamilConnection: "பண்டைய தமிழகத்தில், அணைகள் மற்றும் நீர்ப்பாசன அமைப்புகளைக் கட்டுவதில் பாய்மங்களின் அழுத்தம் மற்றும் ஓட்டம் பற்றிய உள்ளுணர்வுப் புரிதல் அவசியமாக இருந்தது. அதேபோல், உலோகவியல் மற்றும் சிற்பக்கலையில் திண்மங்களின் மீட்சிப் பண்புகள் பற்றிய அறிவு தேவைப்பட்டது. இந்தப் பாடம் அந்த உள்ளுணர்வு அறிவிற்கு அறிவியல் அடிப்படையை வழங்குகிறது.",
    culturalContext: "Think of the surface tension that allows a small insect to walk on the surface of a temple pond (குளம்). Or consider the immense pressure at the bottom of the ocean that ancient Tamil mariners wrote about. These are manifestations of the properties of liquids that this chapter explains in detail.",
    syllabusMapping: [
         {
            topic: 'Mechanical Properties of Solids & Fluids, Thermal Properties',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 7: Properties of Matter',
            ncertReference: 'Class 11 Physics - Part 2, Chapters 9 (Solids) & 10 (Fluids)',
            notes: 'This is a large unit. Elasticity (Young\'s Modulus), pressure, Bernoulli\'s theorem, and surface tension are high-yield topics. Ensure you understand the application of these principles.',
            mappingDescription: '11th Std Physics - Vol 2, Chapter 7 maps to NEET Physics Unit 7'
        }
    ],
    conceptNotes: `### Part A: Mechanical Properties of Solids (திண்மங்களின் இயந்திரப் பண்புகள்)

#### 1. Elasticity (மீட்சிப் பண்பு)
Elasticity is the property of a body by virtue of which it tends to regain its original size and shape after the removal of a deforming force.

*   **Stress (தகைவு, σ):** The restoring force per unit area. Its unit is N/m² or Pascal (Pa).
    $$ \\sigma = \\frac{\\text{Force}}{\\text{Area}} = \\frac{F}{A} $$
*   **Strain (திரிபு, ε):** The fractional change in dimension. It is a dimensionless quantity.
    $$ \\epsilon = \\frac{\\text{Change in dimension}}{\\text{Original dimension}} $$
*   **Hooke's Law (ஹூக் விதி):** Within the elastic limit, stress is directly proportional to strain.
    $$ \\text{Stress} \\propto \\text{Strain} \\implies \\frac{\\text{Stress}}{\\text{Strain}} = E $$
    where E is the **Modulus of Elasticity (மீட்சிக் குணகம்)**.

#### 2. Types of Modulus of Elasticity
1.  **Young's Modulus (யங் குணகம், Y):** Ratio of longitudinal stress to longitudinal strain.
    $$ Y = \\frac{F/A}{\\Delta L/L} $$
2.  **Bulk Modulus (பருமக் குணகம், K):** Ratio of volume stress (pressure) to volume strain.
    $$ K = \\frac{-P}{\\Delta V/V} $$
    The reciprocal of Bulk Modulus is **compressibility (அமுக்கத்தன்மை)**.
3.  **Shear Modulus or Modulus of Rigidity (சறுக்குப் பெயர்ச்சிக் குணகம், G or η):** Ratio of shearing stress to shearing strain.
    $$ G = \\frac{F_{tangential}/A}{\\theta} $$

### Part B: Mechanical Properties of Fluids (பாய்மங்களின் இயந்திரப் பண்புகள்)

#### 1. Pressure (அழுத்தம்)
Pressure is the normal force exerted by a fluid per unit area.
$$ P = \\frac{F}{A} $$
*   **Pressure in a liquid at depth h:** $P = P_a + h\\rho g$, where $P_a$ is atmospheric pressure, $\\rho$ is the density of the liquid.
*   **Gauge Pressure (அளவி அழுத்தம்):** The excess pressure above atmospheric pressure, $P - P_a = h\\rho g$.
*   **Pascal's Law (பாஸ்கல் விதி):** Pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and the walls of the containing vessel. This is the principle behind hydraulic lifts.

#### 2. Buoyancy and Archimedes' Principle (மிதப்பு விசை மற்றும் ஆர்க்கிமிடிஸ் தத்துவம்)
When a body is immersed fully or partially in a fluid, it experiences an upward force called **buoyant force (மிதப்பு விசை)**, which is equal to the weight of the fluid displaced by the body.
$$ F_B = V_{submerged} \\rho_{fluid} g $$

#### 3. Fluid Dynamics (பாய்ம இயக்கவியல்)
*   **Equation of Continuity (தொடர் சமன்பாடு):** For an incompressible fluid in streamline flow, the product of the area of cross-section (A) and the speed of the fluid (v) is constant.
    $$ A_1 v_1 = A_2 v_2 $$
    This is based on the conservation of mass.

*   **Bernoulli's Theorem (பெர்னோலியின் தேற்றம்):** For the streamline flow of an ideal (incompressible, non-viscous) fluid, the sum of pressure energy, kinetic energy, and potential energy per unit volume is constant.
    $$ P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant} $$
    This is based on the conservation of energy.

#### 4. Viscosity (பாகியல்)
Viscosity is the property of a fluid by virtue of which it opposes the relative motion between its different layers. It is like friction in fluids.
*   **Stokes' Law (ஸ்டோக்ஸ் விதி):** The viscous drag force on a spherical body of radius r moving with velocity v in a fluid of viscosity η is:
    $$ F_v = 6\\pi\\eta rv $$
*   **Terminal Velocity (முற்றுத் திசைவேகம்):** The constant maximum velocity acquired by a body falling through a viscous fluid. It is reached when the viscous force plus buoyant force equals the gravitational force.

#### 5. Surface Tension (பரப்பு இழுவிசை)
Surface tension is the property of a liquid by virtue of which its free surface behaves like a stretched elastic membrane and tends to occupy the minimum possible surface area.
*   **Surface Energy (பரப்பு ஆற்றல்):** Work done to increase the surface area of a liquid. Work Done = Surface Tension × Increase in Area.
*   **Angle of Contact (தொடு கோணம்):** The angle between the tangent to the liquid surface at the point of contact and the solid surface inside the liquid.
*   **Capillary Rise (நுண்புழை ஏற்றம்):** The rise or fall of a liquid in a narrow tube (capillary). The height 'h' is given by:
    $$ h = \\frac{2T \\cos\\theta}{r\\rho g} $$
    where T is surface tension, θ is the angle of contact, r is the radius of the capillary tube.`,
    workedExamples: [
        {
            title: "NEET Level: Young's Modulus",
            titleTamil: "நீட் நிலை: யங் குணகம்",
            difficulty: 'Medium',
            problem: "A steel wire of length 4.7 m and cross-sectional area 3.0 x 10⁻⁵ m² stretches by the same amount as a copper wire of length 3.5 m and cross-sectional area 4.0 x 10⁻⁵ m² under a given load. What is the ratio of the Young's modulus of steel to that of copper?",
            problemTamil: "4.7 மீ நீளம் மற்றும் 3.0 x 10⁻⁵ மீ² குறுக்குவெட்டுப் பரப்பு கொண்ட ஒரு எஃகு கம்பி, கொடுக்கப்பட்ட சுமையின் கீழ் 3.5 மீ நீளம் மற்றும் 4.0 x 10⁻⁵ மீ² குறுக்குவெட்டுப் பரப்பு கொண்ட ஒரு செப்புக் கம்பியின் அதே அளவு நீட்சியடைகிறது. எஃகின் யங் குணகத்திற்கும் செப்பின் யங் குணகத்திற்கும் உள்ள விகிதம் என்ன?",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Write down the formula for Young's Modulus (Y) and rearrange it for the change in length (ΔL).",
                    explanationTamil: "யங் குணகத்திற்கான (Y) சூத்திரத்தை எழுதி, நீளத்தில் ஏற்படும் மாற்றத்திற்காக (ΔL) அதை மாற்றியமைக்கவும்.",
                    calculation: "Y = \\frac{F/A}{\\Delta L/L} \\implies \\Delta L = \\frac{FL}{AY}"
                },
                {
                    step: 2,
                    explanation: "Set up the condition given in the problem: the change in length is the same for both wires (ΔL_steel = ΔL_copper). The load (F) is also the same.",
                    explanationTamil: "கணக்கில் கொடுக்கப்பட்டுள்ள நிபந்தனையை அமைக்கவும்: இரண்டு கம்பிகளுக்கும் நீள மாற்றம் சமம் (ΔL_steel = ΔL_copper). சுமையும் (F) சமம்."
                },
                {
                    step: 3,
                    explanation: "Equate the expressions for ΔL for both materials.",
                    calculation: "\\frac{F L_s}{A_s Y_s} = \\frac{F L_c}{A_c Y_c}"
                },
                {
                    step: 4,
                    explanation: "Rearrange the equation to find the required ratio Y_s / Y_c.",
                    calculation: "\\frac{Y_s}{Y_c} = \\frac{L_s}{A_s} \\times \\frac{A_c}{L_c}"
                },
                {
                    step: 5,
                    explanation: "Substitute the given values and calculate the final ratio.",
                    calculation: "\\frac{Y_s}{Y_c} = \\frac{4.7}{3.0 \\times 10^{-5}} \\times \\frac{4.0 \\times 10^{-5}}{3.5} = \\frac{4.7 \\times 4.0}{3.0 \\times 3.5} \\approx 1.79"
                }
            ],
            neetHack: "When comparing two scenarios, setting up a ratio is always faster than calculating individual values. Here, you could directly write Y ∝ L/A for constant F and ΔL.",
            neetHackTamil: "இரண்டு சூழ்நிலைகளை ஒப்பிடும்போது, தனிப்பட்ட மதிப்புகளைக் கணக்கிடுவதை விட ஒரு விகிதத்தை அமைப்பது எப்போதும் வேகமானது. இங்கு, மாறா F மற்றும் ΔL-க்கு Y ∝ L/A என நேரடியாக எழுதலாம்."
        },
        {
            title: "JEE Level: Bernoulli's Theorem Application",
            titleTamil: "ஜே.இ.இ நிலை: பெர்னோலியின் தேற்றம் பயன்பாடு",
            difficulty: 'Hard',
            problem: "Water flows through a horizontal pipe of varying cross-section. At a point where the pressure is P and velocity is v, the pressure is P/2 at another point where the velocity is 2v. Find the velocity v.",
            problemTamil: "மாறும் குறுக்குவெட்டுப் பரப்பு கொண்ட ஒரு கிடைமட்ட குழாய் வழியாக நீர் பாய்கிறது. அழுத்தம் P மற்றும் திசைவேகம் v உள்ள ஒரு புள்ளியில், திசைவேகம் 2v உள்ள மற்றொரு புள்ளியில் அழுத்தம் P/2 ஆகும். திசைவேகம் v-ஐக் கண்டறியவும்.",
            solutionSteps: [
                {
                    step: 1,
                    explanation: "Apply Bernoulli's theorem for a horizontal pipe. Since the pipe is horizontal, the potential energy term (ρgh) is the same on both sides and can be cancelled.",
                    calculation: "P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2"
                },
                {
                    step: 2,
                    explanation: "Substitute the given values from the problem into the equation. P₁=P, v₁=v, P₂=P/2, v₂=2v.",
                    calculation: "P + \\frac{1}{2}\\rho v^2 = \\frac{P}{2} + \\frac{1}{2}\\rho (2v)^2"
                },
                {
                    step: 3,
                    explanation: "Simplify the equation and group the pressure terms on one side and the velocity terms on the other.",
                    calculation: "P - \\frac{P}{2} = \\frac{1}{2}\\rho (4v^2) - \\frac{1}{2}\\rho v^2 \\implies \\frac{P}{2} = \\frac{1}{2}\\rho (3v^2)"
                },
                {
                    step: 4,
                    explanation: "Solve for the velocity v.",
                    calculation: "P = 3\\rho v^2 \\implies v = \\sqrt{\\frac{P}{3\\rho}}"
                }
            ],
            neetHack: "In Bernoulli's problems, remember the inverse relationship between pressure and velocity for horizontal flow. Where the pipe is narrower, velocity is higher, and pressure is lower.",
            neetHackTamil: "பெர்னோலி கணக்குகளில், கிடைமட்ட ஓட்டத்திற்கு அழுத்தம் மற்றும் திசைவேகத்திற்கு இடையிலான தலைகீழ் உறவை நினைவில் கொள்க. குழாய் குறுகலாக இருக்கும் இடத்தில், திசைவேகம் அதிகமாகவும், அழுத்தம் குறைவாகவும் இருக்கும்."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "Y = \\frac{F/A}{\\Delta L/L}",
                description: "Young's Modulus"
            },
            {
                formula: "P_1 + \\frac{1}{2}\\rho v_1^2 + \\rho gh_1 = P_2 + \\frac{1}{2}\\rho v_2^2 + \\rho gh_2",
                description: "Bernoulli's Equation"
            },
            {
                formula: "F_B = V_{submerged} \\rho_{fluid} g",
                description: "Buoyant Force (Archimedes' Principle)"
            },
            {
                formula: "h = \\frac{2T \\cos\\theta}{r\\rho g}",
                description: "Capillary Rise"
            }
        ],
        diagrams: []
    },
    mcqs: [
        { question: "The property of a body to regain its original configuration after the removal of a deforming force is known as:", options: ["A. Plasticity", "B. Elasticity", "C. Ductility", "D. Rigidity"], answer: "B. Elasticity", explanation: "Elasticity is the defining property for a material to return to its original shape.", neetFrequency: 2 },
        { question: "Hooke's law states that within the elastic limit:", options: ["A. Stress = Strain", "B. Stress ∝ Strain", "C. Stress ∝ 1/Strain", "D. Stress = Strain²"], answer: "B. Stress ∝ Strain", explanation: "Hooke's law establishes the direct proportionality between stress and strain within the elastic limit.", neetFrequency: 4 },
        { question: "The SI unit of pressure is:", options: ["A. N/m", "B. Joule", "C. Watt", "D. Pascal"], answer: "D. Pascal", explanation: "Pressure is Force/Area, which is N/m². This unit is named Pascal (Pa).", neetFrequency: 1 },
        { question: "Bernoulli's theorem is based on the conservation of:", options: ["A. Mass", "B. Momentum", "C. Energy", "D. Charge"], answer: "C. Energy", explanation: "Bernoulli's theorem is a statement of the conservation of energy principle for a fluid in motion.", neetFrequency: 5 },
        { question: "A liquid does not wet the surface of a solid if the angle of contact is:", options: ["A. Acute", "B. Obtuse", "C. Zero", "D. 90 degrees"], answer: "B. Obtuse", explanation: "An obtuse angle of contact (>90°) indicates that cohesive forces within the liquid are stronger than adhesive forces with the solid, causing the liquid to not wet the surface (e.g., mercury on glass).", neetFrequency: 4 },
        { question: "The working of a hydraulic lift is based on:", options: ["A. Archimedes' Principle", "B. Pascal's Law", "C. Bernoulli's Theorem", "D. Stokes' Law"], answer: "B. Pascal's Law", explanation: "Pascal's law states that pressure is transmitted equally, which is the principle behind hydraulic systems.", neetFrequency: 3 },
        { question: "Raindrops are spherical in shape due to:", options: ["A. Viscosity", "B. Gravity", "C. Surface Tension", "D. Air resistance"], answer: "C. Surface Tension", explanation: "Surface tension causes liquids to minimize their surface area, and for a given volume, a sphere has the minimum surface area.", neetFrequency: 5 },
        { question: "Equation of continuity is a consequence of the conservation of:", options: ["A. Energy", "B. Mass", "C. Momentum", "D. Charge"], answer: "B. Mass", explanation: "The equation A₁v₁ = A₂v₂ states that the mass of fluid entering a pipe section per unit time must equal the mass leaving it.", neetFrequency: 3 },
        { question: "The dimensions of stress are the same as that of:", options: ["A. Work", "B. Force", "C. Pressure", "D. Power"], answer: "C. Pressure", explanation: "Both stress and pressure are defined as Force/Area, so they have the same dimensions [ML⁻¹T⁻²].", neetFrequency: 2 },
        { question: "When a fluid flows through a pipe of varying cross-section, its velocity is higher:", options: ["A. Where the pressure is higher", "B. Where the pipe is wider", "C. Where the pipe is narrower", "D. At the entrance"], answer: "C. Where the pipe is narrower", explanation: "From the equation of continuity (A₁v₁ = A₂v₂), if the area A decreases, the velocity v must increase.", neetFrequency: 4 },
        { question: "The excess pressure inside a soap bubble of radius R is:", options: ["A. 2T/R", "B. 4T/R", "C. T/R", "D. T/2R"], answer: "B. 4T/R", explanation: "A soap bubble has two free surfaces (inner and outer), so the excess pressure is twice that of a liquid drop. P_excess = 2 * (2T/R) = 4T/R.", neetFrequency: 5 },
        { question: "If the radius of a capillary tube is doubled, the height of capillary rise will be:", options: ["A. Doubled", "B. Halved", "C. Four times", "D. One-fourth"], answer: "B. Halved", explanation: "Capillary rise h is inversely proportional to the radius r (h ∝ 1/r). If r is doubled, h becomes half.", neetFrequency: 4 },
        { question: "The reciprocal of Bulk Modulus is known as:", options: ["A. Compressibility", "B. Rigidity", "C. Elasticity", "D. Ductility"], answer: "A. Compressibility", explanation: "Compressibility measures how much a material can be compressed, so it is the inverse of the bulk modulus, which measures resistance to compression.", neetFrequency: 2 },
        { question: "Two wires A and B are of the same material. The length of A is twice that of B and the diameter of A is twice that of B. If they are stretched by the same force, the ratio of elongation of A to B will be:", options: ["A. 1:1", "B. 1:2", "C. 2:1", "D. 4:1"], answer: "B. 1:2", explanation: "Elongation ΔL = FL/AY = FL/(π(d/2)²Y) ∝ L/d². So ΔL_A/ΔL_B = (L_A/L_B) * (d_B/d_A)² = (2/1) * (1/2)² = 2 * 1/4 = 1/2.", neetFrequency: 4 },
        { question: "The viscous force on a small sphere falling through a medium is proportional to its:", options: ["A. Radius", "B. Square of radius", "C. Square root of radius", "D. Cube of radius"], answer: "A. Radius", explanation: "According to Stokes' Law, the viscous force F = 6πηrv, which is directly proportional to the radius r.", neetFrequency: 3 },
        { question: "According to Archimedes' principle, the loss of weight of a body immersed in a liquid is equal to:", options: ["A. The weight of the body", "B. The weight of the liquid displaced", "C. The density of the liquid", "D. The volume of the body"], answer: "B. The weight of the liquid displaced", explanation: "This is the definition of Archimedes' principle. The buoyant force equals the weight of the displaced fluid.", neetFrequency: 2 },
        { question: "The velocity of efflux (speed of water flowing from a hole) from a tank at a depth h is given by:", options: ["A. 2gh", "B. √(2gh)", "C. gh", "D. h/g"], answer: "B. √(2gh)", explanation: "This is Torricelli's law, a direct application of Bernoulli's theorem. It is the same as the speed of a freely falling body from height h.", neetFrequency: 3 },
        { question: "Which of the following is not a unit of viscosity?", options: ["A. Poise", "B. Pascal-second", "C. Ns/m²", "D. N/m"], answer: "D. N/m", explanation: "Poise is the CGS unit. Pascal-second (Pa·s) or N·s/m² is the SI unit. N/m is the unit of surface tension.", neetFrequency: 2 },
        { question: "When a liquid is heated, its surface tension generally:", options: ["A. Increases", "B. Decreases", "C. Remains the same", "D. First increases then decreases"], answer: "B. Decreases", explanation: "Heating increases the kinetic energy of molecules, weakening the intermolecular cohesive forces, which in turn decreases surface tension.", neetFrequency: 3 },
        { question: "The breaking stress of a wire depends upon:", options: ["A. Length of the wire", "B. Radius of the wire", "C. Material of the wire", "D. Shape of the cross-section"], answer: "C. Material of the wire", explanation: "Breaking stress is an intrinsic property of the material, not its dimensions.", neetFrequency: 4 },
        { question: "Dynamic lift on an airplane wing is an application of:", options: ["A. Pascal's Law", "B. Archimedes' Principle", "C. Equation of Continuity", "D. Bernoulli's Theorem"], answer: "D. Bernoulli's Theorem", explanation: "The shape of the wing (airfoil) makes air travel faster over the top surface, creating lower pressure compared to the bottom, resulting in a net upward force (lift).", neetFrequency: 4 },
        { question: "The property by virtue of which a liquid opposes relative motion between its different layers is called:", options: ["A. Surface tension", "B. Viscosity", "C. Elasticity", "D. Capillarity"], answer: "B. Viscosity", explanation: "This is the definition of viscosity.", neetFrequency: 1 },
        { question: "If the pressure at half the depth of a lake is equal to 2/3 the pressure at the bottom of the lake, then the depth of the lake is:", options: ["A. 10 m", "B. 20 m", "C. 60 m", "D. 30 m"], answer: "B. 20 m", explanation: "Let depth be H and atmospheric pressure be P₀. P(H/2) = P₀ + (H/2)ρg. P(H) = P₀ + Hρg. Given P(H/2) = (2/3)P(H). P₀ + Hρg/2 = (2/3)(P₀ + Hρg). Let P₀=H₀ρg where H₀=10m. H₀ + H/2 = (2/3)(H₀+H). 3H₀ + 1.5H = 2H₀ + 2H => H₀ = 0.5H => H = 2H₀ = 20m.", neetFrequency: 4 },
        { question: "A large number of water drops, each of radius r, combine to form a big drop of radius R. The ratio of the final surface energy to the initial surface energy is:", options: ["A. R:r", "B. r:R", "C. √R:√r", "D. R²:r²"], answer: "B. r:R", explanation: "Volume is conserved: n(4/3)πr³ = (4/3)πR³ => n = (R/r)³. Initial Area A_i = n(4πr²) = (R/r)³ * 4πr² = 4πR³r⁻¹. Final Area A_f = 4πR². Ratio of Energy (Area) = A_f/A_i = (4πR²) / (4πR³r⁻¹) = r/R.", neetFrequency: 3 },
        { question: "The elastic energy stored per unit volume in a stretched wire is:", options: ["A. (1/2) Stress x Strain", "B. Stress x Strain", "C. Stress / Strain", "D. Stress² x Strain"], answer: "A. (1/2) Stress x Strain", explanation: "Energy density u = (1/2) * Y * (Strain)² = (1/2) * (Stress/Strain) * Strain² = (1/2) * Stress * Strain.", neetFrequency: 3 }
    ],
    assertionReasons: [
        { assertion: "The stretching of a coil spring is determined by its shear modulus.", reason: "When a coil spring is stretched, the wire is subjected to a shearing strain.", answer: "A", explanation: "Assertion is true. Reason is also true and is the correct explanation. The stretching of a spring is a result of the twisting (shearing) of the wire material." },
        { assertion: "The velocity of a fluid increases where the pressure is low.", reason: "This is according to the Bernoulli's theorem.", answer: "A", explanation: "For a horizontal flow, P + (1/2)ρv² = constant. If P decreases, v must increase to keep the sum constant. The reason correctly identifies the principle.", neetFrequency: 4 },
        { assertion: "A needle placed carefully on the surface of water may float.", reason: "The buoyant force from the water balances the weight of the needle.", answer: "C", explanation: "Assertion is true. However, the reason is false. The needle floats due to surface tension, not buoyancy. The weight of the water displaced by the thin needle is negligible compared to the needle's weight.", neetFrequency: 3 },
        { assertion: "In streamline flow, the velocity of every particle at a particular point is the same.", reason: "The path taken by a fluid particle in streamline flow is a streamline.", answer: "B", explanation: "Both assertion and reason are true statements defining streamline flow. However, the reason describes the path, while the assertion describes the velocity at a point. They are both definitions, but one is not an explanation for the other.", neetFrequency: 2 },
        { assertion: "Stress is a scalar quantity.", reason: "Stress is defined as force per unit area.", answer: "D", explanation: "Assertion is false. Stress is a tensor quantity. While we often use its magnitude, it has directionality. The reason is a true statement but does not make the assertion true.", neetFrequency: 1 }
    ],
    matchTheColumns: [
        { column1: ["(a) Bernoulli's Principle", "(b) Stokes' Law", "(c) Pascal's Law", "(d) Hooke's Law"], column2: ["(p) Elasticity", "(q) Hydraulic Lift", "(r) Viscosity", "(s) Aeroplane Lift"], answer: "a-s, b-r, c-q, d-p", explanation: "Matching principles to their applications or related concepts." },
        { column1: ["(a) Surface Tension", "(b) Viscosity", "(c) Pressure", "(d) Strain"], column2: ["(p) Dimensionless", "(q) [ML⁻¹T⁻²]", "(r) [ML⁻¹T⁻¹]", "(s) [MT⁻²]"], answer: "a-s, b-r, c-q, d-p", explanation: "Matching physical quantities with their dimensional formulas." },
        { column1: ["(a) Ideal Fluid", "(b) Streamline Flow", "(c) Turbulent Flow", "(d) Capillarity"], column2: ["(p) Reynolds number is high", "(q) Incompressible and non-viscous", "(r) Angle of Contact", "(s) Velocity at a point is constant"], answer: "a-q, b-s, c-p, d-r", explanation: "Matching terms with their defining characteristics." },
        { column1: ["(a) Young's Modulus", "(b) Bulk Modulus", "(c) Shear Modulus", "(d) Compressibility"], column2: ["(p) Change in shape", "(q) Change in volume", "(r) Change in length", "(s) Reciprocal of Bulk Modulus"], answer: "a-r, b-q, c-p, d-s", explanation: "Matching moduli of elasticity with the type of deformation they resist." },
        { column1: ["(a) Barometer", "(b) Hydrometer", "(c) Venturimeter", "(d) Sphygmomanometer"], column2: ["(p) Blood Pressure", "(q) Atmospheric Pressure", "(r) Density of liquids", "(s) Fluid flow rate"], answer: "a-q, b-r, c-s, d-p", explanation: "Matching instruments with the quantities they measure." }
    ]
};
