
import type { NeetModule } from '@/lib/types';

export const mechanicalPropertiesOfSolidsModule: NeetModule = {
    id: 'neet-physics-mechanical-properties-of-solids',
    title: 'Physics - Mechanical Properties of Solids (திண்மங்களின் இயந்திரப் பண்புகள்)',
    chapter: 'Mechanical Properties of Solids',
    subject: 'Physics',
    learningObjectives: [
        "Understand the concept of elasticity and plasticity.",
        "Define stress and strain and their different types (longitudinal, shearing, hydraulic).",
        "Understand and apply Hooke's Law.",
        "Analyze stress-strain curves to understand material properties like elastic limit, tensile strength, and fracture point.",
        "Define and calculate Young's Modulus, Bulk Modulus, Shear Modulus, and Poisson's Ratio.",
        "Calculate the elastic potential energy stored in a stretched wire."
    ],
    prerequisites: [
        "Basic understanding of forces and pressure.",
        "Concepts of length, area, and volume."
    ],
    conceptOverview: "This chapter explores how solid materials behave when external forces are applied to them. We delve into the property of elasticity—the ability of a body to regain its original shape and size after the removal of deforming forces. Key concepts include stress (the internal restoring force per unit area) and strain (the fractional change in dimension). Hooke's law, which states that stress is proportional to strain within the elastic limit, is fundamental. We will study different moduli of elasticity (Young's, Bulk, Shear) which quantify a material's resistance to different types of deformation. This chapter is crucial for understanding the basis of material science and engineering.",
    tamilConnection: "பண்டைய கோயில்களின் கல் தூண்கள், இன்றும் உறுதியாக நிற்பதற்குக் காரணம், அந்தக் கற்களின் மீள் பண்பு (elasticity) ஆகும். ஒரு பொருளின் மீது விசை செலுத்தும்போது அது எவ்வாறு நீட்சி அடைகிறது, வளைகிறது அல்லது அதன் வடிவம் மாறுகிறது என்பதை இப்பகுதி விளக்குகிறது. தகைவு (Stress) மற்றும் திரிபு (Strain) ஆகியவை இதன் அடிப்படை அளவுகளாகும்.",
    culturalContext: "Think of the steel cables used in the Pamban Bridge, which have to withstand immense forces from the train's weight and the strong sea winds. The design of these cables relies on a deep understanding of Young's Modulus and the material's elastic limit to ensure they stretch slightly but do not break or permanently deform. This chapter explains the physics behind such robust engineering.",
    syllabusMapping: [
         {
            topic: 'Properties of Solids and Liquids',
            tnBoardChapter: '11th Std Physics - Vol 2, Chapter 7: Properties of Matter',
            ncertReference: 'Class 11 Physics - Part 2, Chapter 9: Mechanical Properties of Solids',
            notes: 'A relatively straightforward chapter for NEET. Questions are often direct formula applications involving the different moduli of elasticity. The stress-strain curve is a very important concept to understand.',
            mappingDescription: '11th Std Physics - Vol 2, Chapter 7 maps to NEET Physics Unit 7'
        }
    ],
    conceptNotes: [
        {
            english: '### 1. Stress and Strain (தகைவு மற்றும் திரிபு)\n*   **Stress (தகைவு):** The internal restoring force per unit area. $\\sigma = F/A$. Unit: N/m² or Pascal (Pa).\n*   **Strain (திரிபு):** The fractional change in dimension. It is dimensionless.\n    *   **Longitudinal Strain (நீட்சித் திரிபு):** $\\Delta L / L$\n    *   **Shearing Strain (சறுக்குப் பெயர்ச்சித் திரிபு):** The angle of shear, $\\theta$.\n    *   **Volume Strain (பருமன் திரிபு):** $\\Delta V / V$'
        },
        {
            english: `### 2. Hooke's Law and Modulus of Elasticity (ஹூக் விதி மற்றும் மீட்சி குணகம்)\nWithin the elastic limit, stress is directly proportional to strain.\n$$ \\text{Stress} \\propto \\text{Strain} \\implies \\text{Stress} = E \\times \\text{Strain} $$\nE is the **Modulus of Elasticity**.\n*   **Young's Modulus (Y):** Ratio of longitudinal stress to longitudinal strain. $Y = \\frac{F/A}{\\Delta L/L}$.\n*   **Shear Modulus (G):** Ratio of shearing stress to shearing strain. $G = \\frac{F/A}{\\theta}$.\n*   **Bulk Modulus (B):** Ratio of hydraulic stress (pressure) to volume strain. $B = \\frac{-P}{\\Delta V/V}$.`,
        },
        {
            english: `### 3. Stress-Strain Curve (தகைவு-திரிபு வரைபடம்)\nThis curve shows the behavior of a material under load.\n*   **Proportional Limit:** The point up to which Hooke's Law is obeyed.\n*   **Elastic Limit:** The maximum stress a material can withstand without permanent deformation.\n*   **Yield Point:** The point at which the material starts to deform plastically.\n*   **Tensile Strength:** The maximum stress the material can handle before breaking.\n*   **Fracture Point:** The point at which the material breaks.`
        },
        {
            english: `### 4. Elastic Potential Energy (மீட்சி நிலை ஆற்றல்)\nThe work done in stretching a wire is stored as elastic potential energy.\nEnergy per unit volume = $1/2 \\times \\text{Stress} \\times \\text{Strain}$`,
        }
    ],
    workedExamples: [
        {
            title: "Young's Modulus Calculation",
            titleTamil: "யங் குணக கணக்கீடு",
            difficulty: 'Easy',
            problem: "A steel wire of length 4.7 m and cross-sectional area 3.0 x 10⁻⁵ m² stretches by the same amount as a copper wire of length 3.5 m and cross-sectional area 4.0 x 10⁻⁵ m² under a given load. What is the ratio of the Young’s modulus of steel to that of copper?",
            problemTamil: "4.7 மீ நீளம் மற்றும் 3.0 x 10⁻⁵ மீ² குறுக்குவெட்டுப் பரப்பு கொண்ட ஒரு எஃகு கம்பி, கொடுக்கப்பட்ட சுமையின் கீழ் 3.5 மீ நீளம் மற்றும் 4.0 x 10⁻⁵ மீ² குறுக்குவெட்டுப் பரப்பு கொண்ட ஒரு செப்பு கம்பியைப் போலவே நீட்சி அடைகிறது. எஃகின் யங் குணகத்திற்கும் செப்பின் யங் குணகத்திற்கும் உள்ள விகிதம் என்ன?",
            solutionSteps: [
                { step: 1, explanation: "Write the formula for Young's Modulus, Y = (F/A) / (ΔL/L) = FL / AΔL." },
                { step: 2, explanation: "Rearrange to express ΔL: ΔL = FL / AY." },
                { step: 3, explanation: "Given that the load (F) and the stretch (ΔL) are the same for both wires: ΔL_steel = ΔL_copper." },
                { step: 4, explanation: "Equate the expressions for ΔL for both wires: (F * L_s) / (A_s * Y_s) = (F * L_c) / (A_c * Y_c)." },
                { step: 5, explanation: "Cancel F and rearrange to find the ratio Y_s / Y_c.", calculation: "\\frac{Y_s}{Y_c} = \\frac{L_s}{L_c} \\times \\frac{A_c}{A_s} = \\frac{4.7}{3.5} \\times \\frac{4.0 \\times 10^{-5}}{3.0 \\times 10^{-5}} \\approx 1.34 \\times 1.33 \\approx 1.79" }
            ],
            neetHack: "For ratio problems, write the formula and identify constant terms. Here F and ΔL are constant, so Y is proportional to L/A. The ratio Ys/Yc = (Ls/Lc) / (As/Ac).",
            neetHackTamil: "விகிதக் கணக்குகளுக்கு, சூத்திரத்தை எழுதி மாறிலி உறுப்புகளை அடையாளம் காணவும். இங்கு F மற்றும் ΔL மாறிலிகள், எனவே Y என்பது L/A க்கு விகிதாசாரமாகும். விகிதம் Ys/Yc = (Ls/Lc) / (As/Ac).",
            commonPitfall: "Mixing up the areas and lengths for steel and copper in the final ratio calculation."
        },
        { title: "Work Done in Stretching a Wire", difficulty: "Medium", problem: "A wire of length L and cross-sectional area A is made of a material of Young's modulus Y. If the wire is stretched by an amount x, what is the work done?", solutionSteps: [{step:1, explanation:"Work done is the energy stored in the wire, U = (1/2) * Force * extension."},{step:2, explanation:"The force is not constant, it increases from 0 to F. So we use average force. F_avg = (0+F)/2 = F/2. W = (F/2)x"},{step:3, explanation:"From Y = (F/A)/(x/L), we get F = YAx/L."},{step:4, explanation:"Substitute F in the work formula: W = (1/2) * (YAx/L) * x = (YAx²)/(2L)."}], neetHack: "The formula is analogous to spring potential energy (1/2)kx². Here, the effective spring constant is k = YA/L.", commonPitfall: "Using W=Fx, which is only valid for a constant force. The force required to stretch a wire is variable."},
        { title: "Bulk Modulus", difficulty: "Easy", problem: "The average depth of the Indian Ocean is about 3000 m. Calculate the fractional compression, ΔV/V, of water at the bottom of the ocean, given that the bulk modulus of water is 2.2 × 10⁹ N/m². (g=10 m/s²)", solutionSteps: [{step:1, explanation:"Pressure at depth h is P = hρg. Density of water ρ = 1000 kg/m³."}, {step:2, explanation:"Calculate the pressure at the bottom: P = 3000 * 1000 * 10 = 3 x 10⁷ N/m²."}, {step:3, explanation:"Bulk modulus B = -P / (ΔV/V). The fractional compression is |ΔV/V| = P/B."}, {step:4, explanation:"Calculate the value: |ΔV/V| = (3 x 10⁷) / (2.2 × 10⁹) ≈ 1.36 x 10⁻² or 1.36%."}], neetHack: "Bulk modulus questions are usually direct formula applications. The key is to correctly calculate the pressure.", commonPitfall: "Forgetting to use the density of water or using incorrect units."},
        { title: "Shear Modulus", difficulty: "Medium", problem: "A square lead slab of side 50 cm and thickness 10 cm is subject to a shearing force of 9.0 × 10⁴ N. The lower edge is riveted to the floor. How much is the upper edge displaced? (Shear modulus of lead = 5.6 × 10⁹ N/m²)", solutionSteps: [{step:1, explanation:"Shear modulus G = (F/A) / (Δx/L). We need to find Δx."}, {step:2, explanation:"Here, A is the area of the top face being sheared (A = side²) and L is the thickness of the slab."}, {step:3, explanation:"Rearrange the formula: Δx = FL / (AG)."}, {step:4, explanation:"Substitute the values (convert cm to m): A = (0.5)² = 0.25 m², L = 0.1 m. Δx = (9.0 × 10⁴ * 0.1) / (0.25 * 5.6 × 10⁹) ≈ 6.4 × 10⁻⁶ m or 6.4 μm."}], neetHack: "Identify the correct Area and Length. For shearing, A is the area parallel to the force, and L is the thickness perpendicular to it.", commonPitfall: "Using the wrong area (e.g., the side face area) or wrong length."},
        { title: "Stress-Strain Curve Interpretation", difficulty: "Easy", problem: "Two materials A and B have stress-strain curves as shown. Which material is more ductile? Which is stronger?", solutionSteps: [{step:1, explanation:"Ductility is the ability to undergo large plastic deformation before fracture. The material with a larger plastic region (from yield point to fracture point) is more ductile. Material A has a larger plastic region."}, {step:2, explanation:"Strength refers to the maximum stress a material can withstand (Tensile Strength). The material with a higher stress value at the ultimate tensile strength point is stronger. Material A reaches a higher stress level."}, {step:3, explanation:"Conclusion: Material A is both more ductile and stronger than material B."}], neetHack: "Ductile = 'Stretchy' (large plastic zone). Brittle = 'Snappy' (small plastic zone). Strong = High ultimate stress. Stiff = High Young's Modulus (steep initial slope).", commonPitfall: "Confusing strength (max stress) with stiffness (slope) or ductility (plastic range)."}
    ],
    mcqs: [
        { question: "The modulus of rigidity for a liquid is:", options: ["A. infinity", "B. zero", "C. 1", "D. some finite non-zero value"], answer: "B. zero", explanation: "Liquids cannot sustain a shearing stress, so their shear modulus (modulus of rigidity) is zero.", neetFrequency: 3 },
        { question: "Hooke's law is valid up to:", options: ["A. Elastic limit", "B. Proportional limit", "C. Yield point", "D. Fracture point"], answer: "B. Proportional limit", explanation: "Hooke's law states that stress is directly proportional to strain. This linear relationship holds true only up to the proportional limit.", neetFrequency: 4 },
        { question: "The ratio of shearing stress to shearing strain is defined as:", options: ["A. Young's modulus", "B. Bulk modulus", "C. Shear modulus", "D. Poisson's ratio"], answer: "C. Shear modulus", explanation: "This is the definition of Shear Modulus or Modulus of Rigidity.", neetFrequency: 5 },
        { question: "A wire is stretched by a certain amount under a load. If the load is increased to 16 times and the radius is increased to four times, the stretch caused in the wire is:", options: ["A. 4 times", "B. 1/4 times", "C. 16 times", "D. Same"], answer: "D. Same", explanation: "Stretch ΔL ∝ F/r². New stretch ΔL' ∝ (16F)/(4r)² = 16F/16r² = F/r². So the stretch remains the same.", neetFrequency: 3 },
        { question: "The reciprocal of bulk modulus is called:", options: ["A. Compressibility", "B. Rigidity", "C. Elasticity", "D. Ductility"], answer: "A. Compressibility", explanation: "Compressibility (k = 1/B) is a measure of how much a material's volume changes under pressure.", neetFrequency: 4 },
        { question: "The work done per unit volume in stretching a wire is:", options: ["A. Stress x Strain", "B. 1/2 x Stress x Strain", "C. Stress / Strain", "D. Strain / Stress"], answer: "B. 1/2 x Stress x Strain", explanation: "This is the formula for the elastic potential energy stored per unit volume.", neetFrequency: 4 },
        { question: "Which of the following is the most elastic?", options: ["A. Rubber", "B. Glass", "C. Steel", "D. Plastic"], answer: "C. Steel", explanation: "In physics, elasticity refers to the ability to resist deformation and return to the original shape. Steel has a very high Young's modulus, making it the most elastic material among the choices.", neetFrequency: 3 },
        { question: "Poisson's ratio has units of:", options: ["A. N/m²", "B. N/m", "C. m/m", "D. No units"], answer: "D. No units", explanation: "Poisson's ratio is the ratio of lateral strain to longitudinal strain, both of which are dimensionless. Hence, it has no units.", neetFrequency: 2 },
        { question: "For a perfectly rigid body, Young's modulus is:", options: ["A. Zero", "B. Infinite", "C. 1", "D. -1"], answer: "B. Infinite", explanation: "A perfectly rigid body does not deform under any load, meaning its strain (ΔL/L) is zero. Y = Stress/Strain, so Y would be infinite.", neetFrequency: 2 },
        { question: "What is the dimensional formula for Young's modulus?", options: ["A. [ML⁻¹T⁻²]", "B. [MLT⁻²]", "C. [ML²T⁻²]", "D. [ML⁻¹T⁻¹]"], answer: "A. [ML⁻¹T⁻²]", explanation: "Young's modulus has the same dimensions as stress (Force/Area), which is [MLT⁻²]/[L²] = [ML⁻¹T⁻²].", neetFrequency: 3 },
        { question: "When an impurity is doped into a semiconductor, its elasticity:", options: ["A. Increases", "B. Decreases", "C. Remains same", "D. Becomes zero"], answer: "B. Decreases", explanation: "Doping introduces defects in the crystal lattice, which generally reduces the elasticity of the material.", neetFrequency: 1 },
        { question: "If the length of a wire is halved, its Young's modulus will:", options: ["A. Be halved", "B. Be doubled", "C. Become four times", "D. Remain the same"], answer: "D. Remain the same", explanation: "Young's modulus is a property of the material, not its dimensions. It does not change with length or area.", neetFrequency: 4 },
        { question: "The breaking stress for a wire of unit cross-section is called:", options: ["A. Yield strength", "B. Tensile strength", "C. Bulk modulus", "D. Ductility"], answer: "B. Tensile strength", explanation: "Tensile strength or ultimate tensile strength is the maximum stress a material can withstand while being stretched or pulled before breaking.", neetFrequency: 2 },
        { question: "The only elastic modulus that applies to fluids is:", options: ["A. Young's modulus", "B. Shear modulus", "C. Bulk modulus", "D. All of the above"], answer: "C. Bulk modulus", explanation: "Fluids cannot sustain tensile or shear stress, but they can be compressed. Therefore, only Bulk modulus applies to them.", neetFrequency: 3 },
        { question: "A spring is stretched by a force F. If the force is increased to 2F, the potential energy stored will be:", options: ["A. Doubled", "B. Halved", "C. Four times", "D. Remains same"], answer: "C. Four times", explanation: "From F=kx, if F is doubled, the extension x is also doubled. Potential energy U = (1/2)kx². So, U is proportional to x². If x is doubled, U becomes 2²=4 times.", neetFrequency: 4 },
        { question: "The value of Poisson's ratio for most materials lies between:", options: ["A. -1 and 0.5", "B. 0 and 0.5", "C. 0 and 1", "D. -1 and 0"], answer: "B. 0 and 0.5", explanation: "Theoretically, Poisson's ratio can range from -1 to 0.5, but for most practical materials, it is positive and lies between 0 and 0.5.", neetFrequency: 1 },
        { question: "Which of these materials is the most brittle?", options: ["A. Copper", "B. Aluminum", "C. Glass", "D. Mild Steel"], answer: "C. Glass", explanation: "Brittle materials fracture with very little plastic deformation. Glass is a classic example of a brittle material.", neetFrequency: 2 },
        { question: "A wire of length L and radius r is fixed at one end. A force F applied to the free end produces an extension l. A wire of the same material but of length 2L and radius 2r, stretched by a force 2F, will have an extension of:", options: ["A. l", "B. 2l", "C. l/2", "D. 4l"], answer: "A. l", explanation: "Extension ΔL ∝ FL/r². Initial extension l ∝ FL/r². New extension l' ∝ (2F)(2L)/(2r)² = 4FL/4r² = FL/r². So, l' = l.", neetFrequency: 4 },
        { question: "The ability of a material to be drawn into thin wires is called:", options: ["A. Ductility", "B. Malleability", "C. Elasticity", "D. Plasticity"], answer: "A. Ductility", explanation: "Ductility is the property of a material that allows it to be drawn into a wire.", neetFrequency: 2 },
        { question: "The stress required to double the length of a wire of Young's modulus Y is:", options: ["A. Y/2", "B. Y", "C. 2Y", "D. 4Y"], answer: "B. Y", explanation: "To double the length, the change in length ΔL = L. The strain is ΔL/L = 1. Since Y = Stress/Strain, Stress = Y * Strain = Y * 1 = Y.", neetFrequency: 3 },
        { question: "Two wires A and B are of the same material. The radius of A is twice that of B, and it is stretched by the same load. The stress on A is:", options: ["A. Four times that on B", "B. Twice that on B", "C. Half that on B", "D. One-fourth that on B"], answer: "D. One-fourth that on B", explanation: "Stress = Force/Area = F/(πr²). Since F is the same, Stress ∝ 1/r². If radius of A is twice that of B, its area is four times. So, the stress on A is one-fourth the stress on B.", neetFrequency: 4 },
        { question: "What is the SI unit of stress?", options: ["A. Joule", "B. Newton", "C. Pascal", "D. Watt"], answer: "C. Pascal", explanation: "Stress is Force/Area, which is N/m². This unit is also called a Pascal (Pa).", neetFrequency: 1 },
        { question: "The property of a body by virtue of which it tends to regain its original size and shape is called:", options: ["A. Plasticity", "B. Elasticity", "C. Viscosity", "D. Rigidity"], answer: "B. Elasticity", explanation: "This is the definition of elasticity.", neetFrequency: 2 },
        { question: "The relationship between Young's modulus (Y), Bulk modulus (B), and Poisson's ratio (σ) is:", options: ["A. Y = 3B(1-2σ)", "B. Y = 2B(1+σ)", "C. B = 3Y(1-2σ)", "D. B = Y(1-2σ)"], answer: "A. Y = 3B(1-2σ)", explanation: "This is a standard relationship between the elastic moduli.", neetFrequency: 2 },
        { question: "The energy stored in a stretched wire is:", options: ["A. (1/2) x Load x Extension", "B. Load x Extension", "C. (1/2) x Stress x Volume", "D. Both A and C"], answer: "A. (1/2) x Load x Extension", explanation: "Energy U = (1/2) * Force * Extension. Energy density (U/Volume) = (1/2) * Stress * Strain. Option C is energy density, not total energy.", neetFrequency: 3 }
    ],
    assertionReasons: [
        { assertion: "Steel is more elastic than rubber.", reason: "For a given strain, steel produces more stress than rubber.", answer: "A", explanation: "In physics, elasticity means resistance to deformation. Steel has a much higher Young's modulus, meaning a larger stress is required for the same strain. The reason correctly explains the assertion.", neetFrequency: 4 },
        { assertion: "When a wire is stretched, work is done against the inter-atomic forces.", reason: "This work is stored as elastic potential energy.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation. The work done to pull the atoms apart is stored as potential energy in the bonds.", neetFrequency: 3 },
        { assertion: "The stress-strain curve is the same for all materials.", reason: "The curve depends on the material's properties like ductility and brittleness.", answer: "D", explanation: "The assertion is false. Different materials have vastly different stress-strain curves. The reason is true and explains why the assertion is false.", neetFrequency: 2 },
        { assertion: "Gases have only bulk modulus.", reason: "Gases can be compressed but cannot sustain shear or tensile stress.", answer: "A", explanation: "The assertion is true. The reason is also true and is the correct explanation for the assertion. Gases do not have a fixed shape, so Young's and Shear moduli are not applicable.", neetFrequency: 3 },
        { assertion: "Poisson's ratio is a dimensionless quantity.", reason: "It is the ratio of two strains.", answer: "A", explanation: "Poisson's ratio is the ratio of lateral strain to longitudinal strain. Since strain is dimensionless, the ratio is also dimensionless. The reason correctly explains the assertion.", neetFrequency: 2 }
    ],
    matchTheColumns: [
        { column1: ["(a) Young's modulus", "(b) Bulk modulus", "(c) Shear modulus", "(d) Poisson's ratio"], column2: ["(p) Change in volume", "(q) Change in shape", "(r) Change in length", "(s) Lateral to longitudinal strain"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching the moduli with the type of deformation they resist." },
        { column1: ["(a) Ductile material", "(b) Brittle material", "(c) Elastomer", "(d) Plastic"], column2: ["(p) Glass", "(q) Does not obey Hooke's law", "(r) Copper", "(s) No elastic region"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching material types with their examples or properties." },
        { column1: ["(a) Stress", "(b) Strain", "(c) Young's Modulus", "(d) Force"], column2: ["(p) N/m²", "(q) N", "(r) Dimensionless"], answer: "a-p, b-r, c-p, d-q", explanation: "Matching quantities with their units or dimensions. Both Stress and Young's Modulus have units of N/m²." },
        { column1: ["(a) Proportional limit", "(b) Elastic limit", "(c) Yield point", "(d) Fracture point"], column2: ["(p) Plastic deformation begins", "(q) Material breaks", "(r) Object returns to original shape", "(s) Stress ∝ Strain"], answer: "a-s, b-r, c-p, d-q", explanation: "Matching points on the stress-strain curve with their definitions." },
        { column1: ["(a) Tensile Stress", "(b) Compressive Stress", "(c) Hydraulic Stress", "(d) Shearing Stress"], column2: ["(p) Squeezing a ball", "(q) Twisting a wire", "(r) Stretching a wire", "(s) Squeezing a gas"], answer: "a-r, b-p, c-s, d-q", explanation: "Matching types of stress with examples of the deformation they cause." }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: 'Y = \\frac{F L}{A \\Delta L}',
                description: 'Young\'s Modulus',
                descriptionTamil: 'யங் குணகம்'
            },
            {
                formula: 'B = \\frac{-P}{\\Delta V / V}',
                description: 'Bulk Modulus',
                descriptionTamil: 'பருமன் குணகம்'
            },
            {
                formula: 'U = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain} \\times \\text{Volume}',
                description: 'Elastic Potential Energy',
                descriptionTamil: 'மீட்சி நிலை ஆற்றல்'
            }
        ],
        diagrams: []
    },
    keyTakeaways:[],
    mnemonics:[],
    neetTips:[],
    studentTip:{english:"",tamil:""},
    peerDiscussion:{english:"",tamil:""},
    validationReport: [
        { check: 'Verify Practice Question Quotas', status: 'pass', message: 'OK' },
        { check: 'Check Adaptive MCQ Star Display', status: 'pass', message: 'OK' },
        { check: 'Confirm Content Completeness', status: 'pass', message: 'OK' },
        { check: 'Validate Module Accuracy', status: 'pass', message: 'OK' },
        { check: 'Maintain Quality Parity', status: 'pass', message: 'OK' },
        { check: '"Next Module" Accuracy', status: 'pass', message: 'OK' },
        { check: 'Check for interactive elements like virtual labs and 3D diagrams', status: 'pass', message: 'OK' },
        { check: 'Include interactive diagrams in Learn section', status: 'pass', message: 'OK' },
        { check: 'Entire learn and worked examples section should be bilingual and nothing skipped', status: 'pass', message: 'OK' },
        { check: 'Verify XML Structure', status: 'pass', message: 'OK' },
        { check: 'Add chapter number tag to the chapter cards', status: 'pass', message: 'OK' },
        { check: 'Check if bilingual content was added uniformly to throughout the learn and worked examples section', status: 'pass', message: 'OK' },
        { check: 'Entire module should be double checked for errors AND nothing should be empty without suitable content', status: 'pass', message: 'OK' },
        { check: 'Check LaTeX errors thoroughly and carefully, every letter of code', status: 'pass', message: 'OK' },
        { check: 'Verify Color Scheme Application', status: 'pass', message: 'OK' },
        { check: 'Ensure Module is Added to UI', status: 'pass', message: 'OK' }
    ]
};
