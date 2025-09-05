export interface NeetModule {
    title: string;
    subject: string;
    chapterNumber: number;
    nextModule: { title: string; link: string; };
    sections: ModuleSection[];
}

export interface ModuleSection {
    id: string;
    title: { en: string; ta: string; };
    type: 'learn' | 'worked-examples' | 'practice-questions' | 'virtual-lab' | '3d-diagram';
    content: SectionContent[];
}

export interface SectionContent {
    type: 'paragraph' | 'heading' | 'image' | 'formula' | 'list' | 'table' | 'interactive-diagram' | 'question' | 'worked-example' | 'tip';
    en?: string;
    ta?: string;
    src?: string;
    alt?: string;
    items?: { en: string; ta: string; }[];
    columns?: string[];
    rows?: string[][];
    question?: Question;
    example?: WorkedExample;
    formula?: string;
}

export interface WorkedExample {
    id: string;
    question: { en: string; ta: string; };
    solution: { en: string; ta: string; }[];
    explanation?: { en: string; ta: string; };
    tip?: { en: string; ta: string; };
}

export interface Question {
    id: string;
    type: 'mcq' | 'assertion-reason' | 'match-the-column';
    question: { en: string; ta: string; };
    options?: { en: string; ta: string; }[];
    optionA?: { en: string; ta: string; };
    optionR?: { en: string; ta: string; };
    columns?: {
        column1: { en: string; ta: string; }[];
        column2: { en: string; ta: string; }[];
    };
    matchPairs?: { [key: string]: string; };
    correctAnswer: string | number | string[];
    explanation: { en: string; ta: string; };
    neetFrequency?: number;
}

const neetModule: NeetModule = {
    title: "Solutions",
    subject: "chemistry",
    chapterNumber: 2,
    nextModule: {
        title: "Electrochemistry",
        link: "/neet/chemistry/electrochemistry"
    },
    sections: [
        {
            id: "learn",
            title: { en: "Learn Concepts", ta: "கருத்துக்களைக் கற்றுக்கொள்" },
            type: "learn",
            content: [
                {
                    type: "heading",
                    en: "1. Introduction to Solutions",
                    ta: "1. கரைசல்களின் அறிமுகம்"
                },
                {
                    type: "paragraph",
                    en: "A solution is a homogeneous mixture of two or more components. The component present in the largest quantity is known as the solvent, and the other components are known as solutes. Solutions can exist in solid, liquid, or gaseous states.",
                    ta: "கரைசல் என்பது இரண்டு அல்லது அதற்கு மேற்பட்ட கூறுகளின் ஒருபடித்தான கலவையாகும். அதிக அளவில் உள்ள கூறு கரைப்பான் என்றும், மற்ற கூறுகள் கரைபொருட்கள் என்றும் அழைக்கப்படுகின்றன. கரைசல்கள் திட, திரவ அல்லது வாயு நிலைகளில் இருக்கலாம்."
                },
                {
                    type: "list",
                    items: [
                        { en: "Solvent: The component that dissolves the other component(s).", ta: "கரைப்பான்: மற்ற கூறுகளைக் கரைக்கும் கூறு." },
                        { en: "Solute: The component(s) that get dissolved in the solvent.", ta: "கரைபொருள்: கரைப்பானில் கரையும் கூறு(கள்)." }
                    ]
                },
                {
                    type: "heading",
                    en: "2. Types of Solutions",
                    ta: "2. கரைசல்களின் வகைகள்"
                },
                {
                    type: "table",
                    columns: ["Type of Solution (Final State)", "Solvent", "Solute", "Example"],
                    rows: [
                        ["Gaseous Solution", "Gas", "Gas", "Air (mixture of O₂, N₂, etc.)"],
                        ["Gaseous Solution", "Gas", "Liquid", "Chloroform mixed with nitrogen gas"],
                        ["Gaseous Solution", "Gas", "Solid", "Camphor in nitrogen gas"],
                        ["Liquid Solution", "Liquid", "Gas", "Oxygen dissolved in water"],
                        ["Liquid Solution", "Liquid", "Liquid", "Ethanol dissolved in water"],
                        ["Liquid Solution", "Liquid", "Solid", "Sugar dissolved in water"],
                        ["Solid Solution", "Solid", "Gas", "Solution of hydrogen in palladium"],
                        ["Solid Solution", "Solid", "Liquid", "Amalgam of mercury with sodium"],
                        ["Solid Solution", "Solid", "Solid", "Copper dissolved in gold (alloys)"]
                    ]
                },
                {
                    type: "table",
                    columns: ["கரைசலின் வகை (இறுதி நிலை)", "கரைப்பான்", "கரைபொருள்", "எடுத்துக்காட்டு"],
                    rows: [
                        ["வாயு கரைசல்", "வாயு", "வாயு", "காற்று (O₂, N₂ கலவை)"],
                        ["வாயு கரைசல்", "வாயு", "திரவம்", "நைட்ரஜன் வாயுவுடன் கலந்த குளோரோஃபார்ம்"],
                        ["வாயு கரைசல்", "வாயு", "திட", "நைட்ரஜன் வாயுவில் உள்ள கற்பூரம்"],
                        ["திரவ கரைசல்", "திரவம்", "வாயு", "நீரில் கரைந்த ஆக்ஸிஜன்"],
                        ["திரவ கரைசல்", "திரவம்", "திரவம்", "நீரில் கரைந்த எத்தனால்"],
                        ["திரவ கரைசல்", "திரவம்", "திட", "நீரில் கரைந்த சர்க்கரை"],
                        ["திட கரைசல்", "திட", "வாயு", "பல்லேடியத்தில் ஹைட்ரஜன் கரைசல்"],
                        ["திட கரைசல்", "திட", "திரவம்", "சோடியத்துடன் மெர்குரி அமால்கம்"],
                        ["திட கரைசல்", "திட", "திட", "தங்கத்தில் கரைந்த தாமிரம் (உலோகக் கலவைகள்)"]
                    ]
                },
                {
                    type: "heading",
                    en: "3. Expressing Concentration of Solutions",
                    ta: "3. கரைசல்களின் செறிவை வெளிப்படுத்துதல்"
                },
                {
                    type: "paragraph",
                    en: "The concentration of a solution can be expressed in various ways, qualitatively and quantitatively.",
                    ta: "ஒரு கரைசலின் செறிவை பல்வேறு வழிகளில், பண்பு ரீதியாகவும், அளவு ரீதியாகவும் வெளிப்படுத்தலாம்."
                },
                {
                    type: "sub-heading",
                    en: "a) Mass Percentage (w/w %)",
                    ta: "அ) நிறை சதவீதம் (w/w %)"
                },
                {
                    type: "formula",
                    formula: "$$ \text{Mass percentage of component} = \frac{\text{Mass of component}}{\text{Total mass of solution}} \times 100 $$"
                },
                {
                    type: "sub-heading",
                    en: "b) Volume Percentage (v/v %)",
                    ta: "ஆ) பருமன் சதவீதம் (v/v %)"
                },
                {
                    type: "formula",
                    formula: "$$ \text{Volume percentage of component} = \frac{\text{Volume of component}}{\text{Total volume of solution}} \times 100 $$"
                },
                {
                    type: "sub-heading",
                    en: "c) Mass by Volume Percentage (w/v %)",
                    ta: "இ) நிறை-பருமன் சதவீதம் (w/v %)"
                },
                {
                    type: "formula",
                    formula: "$$ \text{Mass by volume percentage} = \frac{\text{Mass of solute (g)}}{\text{Volume of solution (mL)}} \times 100 $$"
                },
                {
                    type: "sub-heading",
                    en: "d) Parts per Million (ppm)",
                    ta: "ஈ) ஒரு மில்லியனில் பாகங்கள் (ppm)"
                },
                {
                    type: "paragraph",
                    en: "Used for very dilute solutions.",
                    ta: "மிகவும் நீர்த்த கரைசல்களுக்குப் பயன்படுத்தப்படுகிறது."
                },
                {
                    type: "formula",
                    formula: "$$ \text{ppm} = \frac{\text{Mass of component}}{\text{Total mass of solution}} \times 10^6 $$"
                },
                {
                    type: "sub-heading",
                    en: "e) Mole Fraction (\[\chi\])",
                    ta: "உ) மோல் பின்னம் (\[\chi\])"
                },
                {
                    type: "paragraph",
                    en: "The ratio of the number of moles of one component to the total number of moles of all components present in the solution.",
                    ta: "ஒரு கரைசலில் உள்ள ஒரு கூறின் மோல்களின் எண்ணிக்கைக்கும், கரைசலில் உள்ள அனைத்து கூறுகளின் மொத்த மோல்களின் எண்ணிக்கைக்கும் உள்ள விகிதம்."
                },
                {
                    type: "formula",
                    formula: "$$ \chi_A = \frac{n_A}{n_A + n_B} \quad ; \quad \chi_B = \frac{n_B}{n_A + n_B} \quad ; \quad \chi_A + \chi_B = 1 $$"
                },
                {
                    type: "sub-heading",
                    en: "f) Molarity (M)",
                    ta: "ஊ) மோலார் செறிமானம் (M)"
                },
                {
                    type: "paragraph",
                    en: "Number of moles of solute dissolved in one litre (or one cubic decimetre) of solution. It changes with temperature.",
                    ta: "ஒரு லிட்டர் (அல்லது ஒரு கன டெசிமீட்டர்) கரைசலில் கரைந்துள்ள கரைபொருளின் மோல்களின் எண்ணிக்கை. இது வெப்பநிலையுடன் மாறுபடும்."
                },
                {
                    type: "formula",
                    formula: "$$ M = \frac{\text{Moles of solute}}{\text{Volume of solution (L)}} $$"
                },
                {
                    type: "sub-heading",
                    en: "g) Molality (m)",
                    ta: "எ) மோலால் செறிமானம் (m)"
                },
                {
                    type: "paragraph",
                    en: "Number of moles of solute dissolved in one kilogram of solvent. It is independent of temperature.",
                    ta: "ஒரு கிலோகிராம் கரைப்பானில் கரைந்துள்ள கரைபொருளின் மோல்களின் எண்ணிக்கை. இது வெப்பநிலையைப் பொறுத்தது அல்ல."
                },
                {
                    type: "formula",
                    formula: "$$ m = \frac{\text{Moles of solute}}{\text{Mass of solvent (kg)}} $$"
                },
                {
                    type: "tip",
                    en: "Molarity is volume dependent, so it changes with temperature. Molality is mass dependent, so it is independent of temperature. Therefore, molality is preferred for studies involving temperature changes.",
                    ta: "மோலார் செறிமானம் பருமனைப் பொறுத்தது என்பதால், அது வெப்பநிலையுடன் மாறுபடும். மோலால் செறிமானம் நிறையைப் பொறுத்தது என்பதால், அது வெப்பநிலையைப் பொறுத்தது அல்ல. எனவே, வெப்பநிலை மாற்றங்களை உள்ளடக்கிய ஆய்வுகளுக்கு மோலால் செறிமானம் விரும்பப்படுகிறது."
                },
                {
                    type: "heading",
                    en: "4. Solubility",
                    ta: "4. கரைதிறன்"
                },
                {
                    type: "paragraph",
                    en: "Solubility is the maximum amount of solute that can be dissolved in a given amount of solvent at a specific temperature to form a saturated solution.",
                    ta: "கரைதிறன் என்பது ஒரு குறிப்பிட்ட வெப்பநிலையில் ஒரு குறிப்பிட்ட அளவு கரைப்பானில் கரைந்து ஒரு தெவிட்டிய கரைசலை உருவாக்கக்கூடிய அதிகபட்ச கரைபொருளின் அளவு."
                },
                {
                    type: "sub-heading",
                    en: "a) Solubility of a Solid in a Liquid",
                    ta: "அ) ஒரு திரவத்தில் திடப்பொருளின் கரைதிறன்"
                },
                {
                    type: "paragraph",
                    en: "Factors affecting solubility: nature of solute and solvent, and temperature.",
                    ta: "கரைதிறனைப் பாதிக்கும் காரணிகள்: கரைபொருள் மற்றும் கரைப்பானின் தன்மை, மற்றும் வெப்பநிலை."
                },
                {
                    type: "list",
                    items: [
                        { en: "'Like dissolves like' principle: Polar solutes dissolve in polar solvents, and non-polar solutes in non-polar solvents.", ta: "'ஒத்தவை ஒத்தவற்றை கரைக்கும்' கொள்கை: துருவ கரைபொருட்கள் துருவ கரைப்பான்களில் கரையும், துருவமற்ற கரைபொருட்கள் துருவமற்ற கரைப்பான்களில் கரையும்." },
                        { en: "Temperature: If dissolution is endothermic, solubility increases with temperature. If exothermic, solubility decreases.", ta: "வெப்பநிலை: கரைதல் வெப்பம் உறிஞ்சும் செயல் என்றால், வெப்பநிலையுடன் கரைதிறன் அதிகரிக்கும். வெப்பம் உமிழும் செயல் என்றால், கரைதிறன் குறையும்." }
                    ]
                },
                {
                    type: "sub-heading",
                    en: "b) Solubility of a Gas in a Liquid (Henry's Law)",
                    ta: "ஆ) ஒரு திரவத்தில் வாயுவின் கரைதிறன் (ஹென்றி விதி)"
                },
                {
                    type: "paragraph",
                    en: "Henry's Law states that the partial pressure of the gas in vapor phase (P) is proportional to the mole fraction of the gas (\[\chi\]) in the solution.",
                    ta: "ஹென்றி விதி கூறுவது யாதெனில், ஆவியின் நிலையில் உள்ள வாயுவின் பகுதி அழுத்தம் (P), கரைசலில் உள்ள வாயுவின் மோல் பின்னத்திற்கு (\[\chi\]) நேர் விகிதத்தில் இருக்கும்."
                },
                {
                    type: "formula",
                    formula: "$$ P = K_H \chi $$"
                },
                {
                    type: "paragraph",
                    en: "Where \(K_H\) is Henry's Law constant. Higher the value of \(K_H\), lower is the solubility of the gas.",
                    ta: "இங்கு \(K_H\) என்பது ஹென்றி விதி மாறிலி. \(K_H\) இன் மதிப்பு அதிகமாக இருந்தால், வாயுவின் கரைதிறன் குறைவாக இருக்கும்."
                },
                {
                    type: "list",
                    items: [
                        { en: "Effect of Temperature: Solubility of gases in liquids decreases with increasing temperature.", ta: "வெப்பநிலையின் விளைவு: திரவங்களில் வாயுக்களின் கரைதிறன் வெப்பநிலை அதிகரிக்கும்போது குறைகிறது." },
                        { en: "Effect of Pressure: Solubility of gases increases with increasing pressure (Henry's Law).", ta: "அழுத்தத்தின் விளைவு: அழுத்தம் அதிகரிக்கும்போது வாயுக்களின் கரைதிறன் அதிகரிக்கிறது (ஹென்றி விதி)." }
                    ]
                },
                {
                    type: "interactive-diagram",
                    src: "/path/to/henrys_law_interactive.png",
                    alt: "Interactive diagram showing Henry's Law",
                    en: "**Interactive Diagram: Henry's Law**\nThis interactive diagram illustrates how increasing pressure above a liquid increases the solubility of a gas. You can adjust the pressure and observe the change in the number of dissolved gas molecules, demonstrating Henry's Law visually.",
                    ta: "**ஊடாடும் வரைபடம்: ஹென்றி விதி**\nஇந்த ஊடாடும் வரைபடம், ஒரு திரவத்தின் மீது அழுத்தம் அதிகரிப்பது ஒரு வாயுவின் கரைதிறனை எவ்வாறு அதிகரிக்கிறது என்பதைக் காட்டுகிறது. நீங்கள் அழுத்தத்தைச் சரிசெய்து, கரைந்துள்ள வாயு மூலக்கூறுகளின் எண்ணிக்கையில் ஏற்படும் மாற்றத்தை உற்றுநோக்கி, ஹென்றி விதியைத் தெளிவாகக் கற்றுக்கொள்ளலாம்."
                },
                {
                    type: "heading",
                    en: "5. Vapour Pressure of Liquid Solutions and Raoult's Law",
                    ta: "5. திரவ கரைசல்களின் ஆவி அழுத்தம் மற்றும் ரவுல்ட் விதி"
                },
                {
                    type: "paragraph",
                    en: "The pressure exerted by the vapours of a liquid in equilibrium with the liquid phase at a given temperature is called its vapour pressure.",
                    ta: "ஒரு குறிப்பிட்ட வெப்பநிலையில், திரவ நிலையில் உள்ள ஒரு திரவத்துடன் சமநிலையில் அதன் ஆவிகளால் செலுத்தப்படும் அழுத்தம் அதன் ஆவி அழுத்தம் எனப்படும்."
                },
                {
                    type: "sub-heading",
                    en: "a) Raoult's Law for Volatile Components",
                    ta: "அ) ஆவியாகும் கூறுகளுக்கான ரவுல்ட் விதி"
                },
                {
                    type: "paragraph",
                    en: "For a solution of two volatile liquids, the partial vapour pressure of each component in the solution is directly proportional to its mole fraction present in the solution.",
                    ta: "இரண்டு ஆவியாகும் திரவங்களின் கரைசலுக்கு, கரைசலில் உள்ள ஒவ்வொரு கூறின் பகுதி ஆவி அழுத்தம், கரைசலில் உள்ள அதன் மோல் பின்னத்திற்கு நேர் விகிதத்தில் இருக்கும்."
                },
                {
                    type: "formula",
                    formula: "$$ P_A = P_A^0 \chi_A \quad ; \quad P_B = P_B^0 \chi_B $$"
                },
                {
                    type: "paragraph",
                    en: "Where \(P_A\) and \(P_B\) are partial vapour pressures, \(P_A^0\) and \(P_B^0\) are vapour pressures of pure components, and \(\chi_A\) and \(\chi_B\) are mole fractions.",
                    ta: "இங்கு \(P_A\) மற்றும் \(P_B\) என்பவை பகுதி ஆவி அழுத்தங்கள், \(P_A^0\) மற்றும் \(P_B^0\) என்பவை தூய கூறுகளின் ஆவி அழுத்தங்கள், மற்றும் \(\chi_A\) மற்றும் \(\chi_B\) என்பவை மோல் பின்னங்கள்."
                },
                {
                    type: "paragraph",
                    en: "Total vapour pressure \(P_{total} = P_A + P_B = P_A^0 \chi_A + P_B^0 \chi_B\).",
                    ta: "மொத்த ஆவி அழுத்தம் \(P_{total} = P_A + P_B = P_A^0 \chi_A + P_B^0 \chi_B\)."
                },
                {
                    type: "sub-heading",
                    en: "b) Raoult's Law for Non-Volatile Solute in a Volatile Solvent",
                    ta: "ஆ) ஆவியாகும் கரைப்பானில் ஆவியாகாத கரைபொருளுக்கான ரவுல்ட் விதி"
                },
                {
                    type: "paragraph",
                    en: "The relative lowering of vapour pressure of a solution containing a non-volatile solute is equal to the mole fraction of the solute.",
                    ta: "ஆவியாகாத கரைபொருள் கொண்ட ஒரு கரைசலின் ஆவி அழுத்தத்தின் சார்பு குறைவு, கரைபொருளின் மோல் பின்னத்திற்கு சமம்."
                },
                {
                    type: "formula",
                    formula: "$$ \frac{P^0 - P_s}{P^0} = \chi_{\text{solute}} $$"
                },
                {
                    type: "paragraph",
                    en: "Where \(P^0\) is the vapour pressure of pure solvent, and \(P_s\) is the vapour pressure of the solution.",
                    ta: "இங்கு \(P^0\) என்பது தூய கரைப்பானின் ஆவி அழுத்தம், மற்றும் \(P_s\) என்பது கரைசலின் ஆவி அழுத்தம்."
                },
                {
                    type: "heading",
                    en: "6. Ideal and Non-Ideal Solutions",
                    ta: "6. நல்லியல்பு மற்றும் நல்லியல்பு அல்லாத கரைசல்கள்"
                },
                {
                    type: "sub-heading",
                    en: "a) Ideal Solutions",
                    ta: "அ) நல்லியல்பு கரைசல்கள்"
                },
                {
                    type: "paragraph",
                    en: "Solutions that obey Raoult's law over the entire range of concentration are known as ideal solutions.",
                    ta: "செறிவு வரம்பு முழுவதும் ரவுல்ட் விதியைப் பின்பற்றும் கரைசல்கள் நல்லியல்பு கரைசல்கள் என அழைக்கப்படுகின்றன."
                },
                {
                    type: "list",
                    items: [
                        { en: "\(\Delta H_{mix} = 0\) (no heat absorbed or evolved)", ta: "\(\Delta H_{mix} = 0\) (வெப்பம் உறிஞ்சப்படவோ அல்லது வெளிப்படவோ இல்லை)" },
                        { en: "\(\Delta V_{mix} = 0\) (no change in volume on mixing)", ta: "\(\Delta V_{mix} = 0\) (கலக்கும்போது பருமனில் மாற்றம் இல்லை)" },
                        { en: "Intermolecular interactions between A-B are similar to A-A and B-B (e.g., n-hexane and n-heptane).", ta: "A-B க்கு இடையேயான மூலக்கூறிடை தொடர்புகள் A-A மற்றும் B-B போன்றே இருக்கும் (எ.கா., n-ஹெக்சேன் மற்றும் n-ஹெப்டேன்)." }
                    ]
                },
                {
                    type: "sub-heading",
                    en: "b) Non-Ideal Solutions",
                    ta: "ஆ) நல்லியல்பு அல்லாத கரைசல்கள்"
                },
                {
                    type: "paragraph",
                    en: "Solutions that do not obey Raoult's law over the entire range of concentration.",
                    ta: "செறிவு வரம்பு முழுவதும் ரவுல்ட் விதியைப் பின்பற்றாத கரைசல்கள்."
                },
                {
                    type: "list",
                    items: [
                        { en: "\(\Delta H_{mix} \neq 0\)", ta: "\(\Delta H_{mix} \neq 0\)" },
                        { en: "\(\Delta V_{mix} \neq 0\)", ta: "\(\Delta V_{mix} \neq 0\)" },
                        { en: "A-B interactions are different from A-A and B-B.", ta: "A-B தொடர்புகள் A-A மற்றும் B-B யிலிருந்து வேறுபடும்." }
                    ]
                },
                {
                    type: "sub-heading",
                    en: "i) Positive Deviation from Raoult's Law",
                    ta: "i) ரவுல்ட் விதியிலிருந்து நேர்மறை விலகல்"
                },
                {
                    type: "paragraph",
                    en: "\(P_A > P_A^0 \chi_A\) and \(P_B > P_B^0 \chi_B\). \(P_{total} > P_A^0 \chi_A + P_B^0 \chi_B\).",
                    ta: "\(P_A > P_A^0 \chi_A\) மற்றும் \(P_B > P_B^0 \chi_B\). \(P_{total} > P_A^0 \chi_A + P_B^0 \chi_B\)."
                },
                {
                    type: "list",
                    items: [
                        { en: "A-B interactions are weaker than A-A and B-B. This leads to increased escaping tendency, thus higher vapour pressure.", ta: "A-B தொடர்புகள் A-A மற்றும் B-B ஐ விட பலவீனமானவை. இது தப்பிக்கும் தன்மையை அதிகரிக்கிறது, இதனால் ஆவி அழுத்தம் அதிகமாகிறது." },
                        { en: "\(\Delta H_{mix} > 0\) (endothermic).", ta: "\(\Delta H_{mix} > 0\) (வெப்பம் உறிஞ்சும்)." },
                        { en: "\(\Delta V_{mix} > 0\) (volume expands).", ta: "\(\Delta V_{mix} > 0\) (பருமன் விரிகிறது)." },
                        { en: "Examples: Ethanol + Acetone, Carbon disulphide + Acetone.", ta: "எடுத்துக்காட்டுகள்: எத்தனால் + அசெட்டோன், கார்பன் டைசல்பைடு + அசெட்டோன்." }
                    ]
                },
                {
                    type: "sub-heading",
                    en: "ii) Negative Deviation from Raoult's Law",
                    ta: "ii) ரவுல்ட் விதியிலிருந்து எதிர்மறை விலகல்"
                },
                {
                    type: "paragraph",
                    en: "\(P_A < P_A^0 \chi_A\) and \(P_B < P_B^0 \chi_B\). \(P_{total} < P_A^0 \chi_A + P_B^0 \chi_B\).",
                    ta: "\(P_A < P_A^0 \chi_A\) மற்றும் \(P_B < P_B^0 \chi_B\). \(P_{total} < P_A^0 \chi_A + P_B^0 \chi_B\)."
                },
                {
                    type: "list",
                    items: [
                        { en: "A-B interactions are stronger than A-A and B-B. This leads to decreased escaping tendency, thus lower vapour pressure.", ta: "A-B தொடர்புகள் A-A மற்றும் B-B ஐ விட வலிமையானவை. இது தப்பிக்கும் தன்மையை குறைக்கிறது, இதனால் ஆவி அழுத்தம் குறைவாகிறது." },
                        { en: "\(\Delta H_{mix} < 0\) (exothermic).", ta: "\(\Delta H_{mix} < 0\) (வெப்பம் உமிழும்)." },
                        { en: "\(\Delta V_{mix} < 0\) (volume contracts).", ta: "\(\Delta V_{mix} < 0\) (பருமன் சுருங்குகிறது)." },
                        { en: "Examples: Phenol + Aniline, Chloroform + Acetone, Nitric acid + Water.", ta: "எடுத்துக்காட்டுகள்: ஃபீனால் + அனிலின், குளோரோஃபார்ம் + அசெட்டோன், நைட்ரிக் அமிலம் + நீர்." }
                    ]
                },
                {
                    type: "interactive-diagram",
                    src: "/path/to/ideal_nonideal_solutions.png",
                    alt: "Interactive diagram showing ideal vs non-ideal solutions",
                    en: "**Interactive Diagram: Ideal vs. Non-Ideal Solutions**\nThis interactive visualization compares the molecular interactions and vapor pressure curves for ideal solutions, and those showing positive and negative deviations from Raoult's Law. Manipulate the 'interaction strength' slider to observe changes.",
                    ta: "**ஊடாடும் வரைபடம்: நல்லியல்பு மற்றும் நல்லியல்பு அல்லாத கரைசல்கள்**\nஇந்த ஊடாடும் காட்சிப்படுத்தல் நல்லியல்பு கரைசல்கள் மற்றும் ரவுல்ட் விதியிலிருந்து நேர்மறை மற்றும் எதிர்மறை விலகல்களைக் காட்டும் கரைசல்களுக்கான மூலக்கூறிடை தொடர்புகள் மற்றும் ஆவி அழுத்த வளைவுகளை ஒப்பிடுகிறது. 'தொடர்பு வலிமை' ஸ்லைடரை சரிசெய்து மாற்றங்களைக் கவனியுங்கள்."
                },
                {
                    type: "sub-heading",
                    en: "c) Azeotropes",
                    ta: "இ) அசட்ரோப்கள்"
                },
                {
                    type: "paragraph",
                    en: "Binary mixtures having the same composition in liquid and vapour phases and boil at a constant temperature. They cannot be separated by fractional distillation.",
                    ta: "திரவ மற்றும் ஆவி நிலைகளில் ஒரே கலவையைக் கொண்ட மற்றும் நிலையான வெப்பநிலையில் கொதிக்கும் இரும கலவைகள். இவற்றை பின்னக் காய்ச்சிவடித்தல் மூலம் பிரிக்க முடியாது."
                },
                {
                    type: "list",
                    items: [
                        { en: "Minimum boiling azeotropes: Show large positive deviation (e.g., Ethanol-water mixture).", ta: "குறைந்த கொதிநிலை அசட்ரோப்கள்: பெரிய நேர்மறை விலகலைக் காட்டுகின்றன (எ.கா., எத்தனால்-நீர் கலவை)." },
                        { en: "Maximum boiling azeotropes: Show large negative deviation (e.g., Nitric acid-water mixture).", ta: "அதிகபட்ச கொதிநிலை அசட்ரோப்கள்: பெரிய எதிர்மறை விலகலைக் காட்டுகின்றன (எ.கா., நைட்ரிக் அமிலம்-நீர் கலவை)." }
                    ]
                },
                {
                    type: "heading",
                    en: "7. Colligative Properties",
                    ta: "7. பிணைப்புப் பண்புகள்"
                },
                {
                    type: "paragraph",
                    en: "Properties of solutions that depend only on the number of solute particles, not on their nature. These are applicable mainly to dilute solutions of non-volatile solutes.",
                    ta: "கரைபொருள் துகள்களின் எண்ணிக்கையை மட்டுமே சார்ந்துள்ள கரைசல்களின் பண்புகள், அவற்றின் தன்மையை அல்ல. இவை முக்கியமாக ஆவியாகாத கரைபொருட்களின் நீர்த்த கரைசல்களுக்குப் பொருந்தும்."
                },
                {
                    type: "sub-heading",
                    en: "a) Relative Lowering of Vapour Pressure (RLVP)",
                    ta: "அ) ஆவி அழுத்தத்தின் சார்பு குறைவு (RLVP)"
                },
                {
                    type: "formula",
                    formula: "$$ \frac{P^0 - P_s}{P^0} = \chi_B = \frac{n_B}{n_A + n_B} \approx \frac{n_B}{n_A} \quad \text{(for dilute solutions)} $$"
                },
                {
                    type: "sub-heading",
                    en: "b) Elevation in Boiling Point (\(\Delta T_b\))",
                    ta: "ஆ) கொதிநிலையில் உயர்வு (\(\Delta T_b\))"
                },
                {
                    type: "paragraph",
                    en: "The boiling point of a solution containing a non-volatile solute is always higher than that of the pure solvent.",
                    ta: "ஆவியாகாத கரைபொருள் கொண்ட ஒரு கரைசலின் கொதிநிலை எப்போதும் தூய கரைப்பானின் கொதிநிலையை விட அதிகமாக இருக்கும்."
                },
                {
                    type: "formula",
                    formula: "$$ \Delta T_b = T_b - T_b^0 = K_b m $$"
                },
                {
                    type: "paragraph",
                    en: "Where \(T_b\) is boiling point of solution, \(T_b^0\) is boiling point of pure solvent, \(K_b\) is molal elevation constant (ebullioscopic constant), and \(m\) is molality.",
                    ta: "இங்கு \(T_b\) என்பது கரைசலின் கொதிநிலை, \(T_b^0\) என்பது தூய கரைப்பானின் கொதிநிலை, \(K_b\) என்பது மோலால் உயர்வு மாறிலி (எபுலியோஸ்கோபிக் மாறிலி), மற்றும் \(m\) என்பது மோலால் செறிமானம்."
                },
                {
                    type: "sub-heading",
                    en: "c) Depression in Freezing Point (\(\Delta T_f\))",
                    ta: "இ) உறைநிலையில் தாழ்வு (\(\Delta T_f\))"
                },
                {
                    type: "paragraph",
                    en: "The freezing point of a solution containing a non-volatile solute is always lower than that of the pure solvent.",
                    ta: "ஆவியாகாத கரைபொருள் கொண்ட ஒரு கரைசலின் உறைநிலை எப்போதும் தூய கரைப்பானின் உறைநிலையை விட குறைவாக இருக்கும்."
                },
                {
                    type: "formula",
                    formula: "$$ \Delta T_f = T_f^0 - T_f = K_f m $$"
                },
                {
                    type: "paragraph",
                    en: "Where \(T_f\) is freezing point of solution, \(T_f^0\) is freezing point of pure solvent, \(K_f\) is molal depression constant (cryoscopic constant), and \(m\) is molality.",
                    ta: "இங்கு \(T_f\) என்பது கரைசலின் உறைநிலை, \(T_f^0\) என்பது தூய கரைப்பானின் உறைநிலை, \(K_f\) என்பது மோலால் தாழ்வு மாறிலி (கிரையோஸ்கோபிக் மாறிலி), மற்றும் \(m\) என்பது மோலால் செறிமானம்."
                },
                {
                    type: "sub-heading",
                    en: "d) Osmosis and Osmotic Pressure (\(\Pi\))",
                    ta: "ஈ) சவ்வூடுபரவல் மற்றும் சவ்வூடுபரவல் அழுத்தம் (\(\Pi\))"
                },
                {
                    type: "paragraph",
                    en: "**Osmosis**: The spontaneous net movement of solvent molecules through a selectively permeable membrane from a region of higher solvent concentration to a region of lower solvent concentration.",
                    ta: "**சவ்வூடுபரவல்**: ஒரு தேர்ந்தெடுத்து ஊடுருவும் சவ்வு வழியாக, அதிக கரைப்பான் செறிவுள்ள பகுதியிலிருந்து குறைந்த கரைப்பான் செறிவுள்ள பகுதிக்கு கரைப்பான் மூலக்கூறுகள் தன்னிச்சையாக நிகர நகர்வு."
                },
                {
                    type: "paragraph",
                    en: "**Osmotic Pressure**: The excess pressure that must be applied to a solution to prevent osmosis, i.e., to stop the net flow of solvent into the solution through a semipermeable membrane.",
                    ta: "**சவ்வூடுபரவல் அழுத்தம்**: சவ்வூடுபரவலைத் தடுக்க, அதாவது, அரை ஊடுருவும் சவ்வு வழியாக கரைப்பான் கரைசலுக்குள் நிகர ஓட்டத்தை நிறுத்த ஒரு கரைசலுக்குப் பயன்படுத்தப்பட வேண்டிய கூடுதல் அழுத்தம்."
                },
                {
                    type: "formula",
                    formula: "$$ \Pi = CRT $$"
                },
                {
                    type: "paragraph",
                    en: "Where \(\Pi\) is osmotic pressure, \(C\) is molar concentration (Molarity) of the solution, \(R\) is gas constant (0.0821 L atm \(\text{mol}^{-1}\text{K}^{-1}\) or 8.314 J \(\text{mol}^{-1}\text{K}^{-1}\)), and \(T\) is temperature in Kelvin.",
                    ta: "இங்கு \(\Pi\) என்பது சவ்வூடுபரவல் அழுத்தம், \(C\) என்பது கரைசலின் மோலார் செறிவு (மோலார் செறிமானம்), \(R\) என்பது வாயு மாறிலி (0.0821 L atm \(\text{mol}^{-1}\text{K}^{-1}\) அல்லது 8.314 J \(\text{mol}^{-1}\text{K}^{-1}\)), மற்றும் \(T\) என்பது கெல்வின் அலகில் உள்ள வெப்பநிலை."
                },
                {
                    type: "list",
                    items: [
                        { en: "Isotonic solutions: Have the same osmotic pressure at a given temperature.", ta: "சம அளவு அழுத்தம் கொண்ட கரைசல்கள்: ஒரு குறிப்பிட்ட வெப்பநிலையில் ஒரே சவ்வூடுபரவல் அழுத்தத்தைக் கொண்டிருக்கும்." },
                        { en: "Hypotonic solutions: Have lower osmotic pressure (causes cells to swell).", ta: "ஹைபோடோனிக் கரைசல்கள்: குறைந்த சவ்வூடுபரவல் அழுத்தத்தைக் கொண்டிருக்கும் (செல்கள் வீங்கச் செய்யும்)." },
                        { en: "Hypertonic solutions: Have higher osmotic pressure (causes cells to shrink).", ta: "ஹைபர்டோனிக் கரைசல்கள்: அதிக சவ்வூடுபரவல் அழுத்தத்தைக் கொண்டிருக்கும் (செல்கள் சுருங்கச் செய்யும்)." }
                    ]
                },
                {
                    type: "heading",
                    en: "8. Abnormal Molar Masses and van't Hoff Factor (i)",
                    ta: "8. ஒழுங்கற்ற மோலார் நிறைகள் மற்றும் வான்ட் ஹாஃப் காரணி (i)"
                },
                {
                    type: "paragraph",
                    en: "Colligative properties depend on the number of solute particles. If the solute undergoes association or dissociation in the solution, the number of particles changes, leading to abnormal colligative properties and thus abnormal molar masses.",
                    ta: "பிணைப்புப் பண்புகள் கரைபொருள் துகள்களின் எண்ணிக்கையைப் பொறுத்தது. கரைபொருள் கரைசலில் சேரும் அல்லது பிரியும் போது, துகள்களின் எண்ணிக்கை மாறி, அசாதாரண பிணைப்புப் பண்புகளுக்கும், அதன் விளைவாக அசாதாரண மோலார் நிறைகளுக்கும் வழிவகுக்கிறது."
                },
                {
                    type: "paragraph",
                    en: "The van't Hoff factor (i) is introduced to account for the extent of association or dissociation of a solute.",
                    ta: "கரைபொருளின் சேர்தல் அல்லது பிரிதல் அளவைக் கணக்கிட வான்ட் ஹாஃப் காரணி (i) அறிமுகப்படுத்தப்படுகிறது."
                },
                {
                    type: "formula",
                    formula: "$$ i = \frac{\text{Observed colligative property}}{\text{Calculated colligative property (assuming no association/dissociation)}} = \frac{\text{Normal molar mass}}{\text{Abnormal molar mass}} = \frac{\text{Total number of moles of particles after association/dissociation}}{\text{Number of moles of particles before association/dissociation}} $$"
                },
                {
                    type: "list",
                    items: [
                        { en: "For dissociation: \(i > 1\) (e.g., NaCl \(\rightarrow\) \(Na^+\) + \(Cl^-\) , i = 2)", ta: "பிரிதலுக்கு: \(i > 1\) (எ.கா., NaCl \(\rightarrow\) \(Na^+\) + \(Cl^-\) , i = 2)" },
                        { en: "For association: \(i < 1\) (e.g., Ethanoic acid in benzene forms a dimer, i = 0.5)", ta: "சேர்தலுக்கு: \(i < 1\) (எ.கா., பென்சீனில் உள்ள எத்தனோயிக் அமிலம் இரும மூலக்கூறாகிறது, i = 0.5)" },
                        { en: "For non-electrolytes (no association/dissociation): \(i = 1\) (e.g., Glucose, Urea)", ta: "மின்பகுளிகள் அல்லாதவற்றுக்கு (சேர்தல்/பிரிதல் இல்லை): \(i = 1\) (எ.கா., குளுக்கோஸ், யூரியா)" }
                    ]
                },
                {
                    type: "paragraph",
                    en: "Modified Colligative Property Equations with van't Hoff factor (i):",
                    ta: "வான்ட் ஹாஃப் காரணி (i) உடன் மாற்றியமைக்கப்பட்ட பிணைப்புப் பண்பு சமன்பாடுகள்:"
                },
                {
                    type: "list",
                    items: [
                        { en: "RLVP: \(\frac{P^0 - P_s}{P^0} = i \chi_B\)", ta: "RLVP: \(\frac{P^0 - P_s}{P^0} = i \chi_B\)" },
                        { en: "Elevation in Boiling Point: \(\Delta T_b = i K_b m\)", ta: "கொதிநிலையில் உயர்வு: \(\Delta T_b = i K_b m\)" },
                        { en: "Depression in Freezing Point: \(\Delta T_f = i K_f m\)", ta: "உறைநிலையில் தாழ்வு: \(\Delta T_f = i K_f m\)" },
                        { en: "Osmotic Pressure: \(\Pi = i CRT\)", ta: "சவ்வூடுபரவல் அழுத்தம்: \(\Pi = i CRT\)" }
                    ]
                }
            ]
        },
        {
            id: "worked-examples",
            title: { en: "Worked Examples", ta: "தீர்க்கப்பட்ட எடுத்துக்காட்டுகள்" },
            type: "worked-examples",
            content: [
                {
                    type: "worked-example",
                    example: {
                        id: "we1",
                        question: { en: "Calculate the mass percentage of benzene (\(C_6H_6\)) and carbon tetrachloride (\(CCl_4\)) if 22 g of benzene is dissolved in 122 g of carbon tetrachloride.", ta: "22 கிராம் பென்சீன் (\(C_6H_6\)) 122 கிராம் கார்பன் டெட்ராக்ளோரைடில் கரைந்திருந்தால், பென்சீன் மற்றும் கார்பன் டெட்ராக்ளோரைடின் நிறை சதவீதத்தைக் கணக்கிடுங்கள்."
                        },
                        solution: [
                            { en: "Mass of benzene = 22 g", ta: "பென்சீனின் நிறை = 22 கிராம்" },
                            { en: "Mass of carbon tetrachloride = 122 g", ta: "கார்பன் டெட்ராக்ளோரைடின் நிறை = 122 கிராம்" },
                            { en: "Total mass of solution = 22 g + 122 g = 144 g", ta: "கரைசலின் மொத்த நிறை = 22 கி + 122 கி = 144 கி" },
                            { en: "Mass percentage of benzene = \(\frac{22 \text{ g}}{144 \text{ g}} \times 100 = 15.28\%\)", ta: "பென்சீனின் நிறை சதவீதம் = \(\frac{22 \text{ கி}}{144 \text{ கி}} \times 100 = 15.28\%\)" },
                            { en: "Mass percentage of carbon tetrachloride = \(\frac{122 \text{ g}}{144 \text{ g}} \times 100 = 84.72\%\)", ta: "கார்பன் டெட்ராக்ளோரைடின் நிறை சதவீதம் = \(\frac{122 \text{ கி}}{144 \text{ கி}} \times 100 = 84.72\%\)" }
                        ]
                    }
                },
                {
                    type: "worked-example",
                    example: {
                        id: "we2",
                        question: { en: "The vapour pressure of pure benzene at a certain temperature is 0.850 bar. A non-volatile, non-electrolyte solid weighing 0.5 g when added to 39.0 g of benzene (Molar mass 78 g/mol). The vapour pressure of the solution is 0.845 bar. What is the molar mass of the solid substance?", ta: "ஒரு குறிப்பிட்ட வெப்பநிலையில் தூய பென்சீனின் ஆவி அழுத்தம் 0.850 பார். 0.5 கிராம் எடையுள்ள ஒரு ஆவியாகாத, மின்பகுளி அல்லாத திடப்பொருள் 39.0 கிராம் பென்சீனுடன் (மோலார் நிறை 78 கி/மோல்) சேர்க்கப்பட்டது. கரைசலின் ஆவி அழுத்தம் 0.845 பார். திடப்பொருளின் மோலார் நிறை என்ன?"
                        },
                        solution: [
                            { en: "Given: \(P^0 = 0.850\) bar, \(P_s = 0.845\) bar", ta: "கொடுக்கப்பட்டது: \(P^0 = 0.850\) பார், \(P_s = 0.845\) பார்" },
                            { en: "Mass of solute (\(w_B\)) = 0.5 g", ta: "கரைபொருளின் நிறை (\(w_B\)) = 0.5 கி" },
                            { en: "Mass of solvent (benzene, \(w_A\)) = 39.0 g", ta: "கரைப்பானின் நிறை (பென்சீன், \(w_A\)) = 39.0 கி" },
                            { en: "Molar mass of solvent (\(M_A\)) = 78 g/mol", ta: "கரைப்பானின் மோலார் நிறை (\(M_A\)) = 78 கி/மோல்" },
                            { en: "Using Raoult's Law for non-volatile solute: \(\frac{P^0 - P_s}{P^0} = \frac{w_B M_A}{M_B w_A}\)", ta: "ஆவியாகாத கரைபொருளுக்கான ரவுல்ட் விதியைப் பயன்படுத்துக: \(\frac{P^0 - P_s}{P^0} = \frac{w_B M_A}{M_B w_A}\)" },
                            { en: "\(\frac{0.850 - 0.845}{0.850} = \frac{0.5 \times 78}{M_B \times 39.0}\)", ta: "\(\frac{0.850 - 0.845}{0.850} = \frac{0.5 \times 78}{M_B \times 39.0}\)" },
                            { en: "\(\frac{0.005}{0.850} = \frac{39}{39 M_B}\)", ta: "\(\frac{0.005}{0.850} = \frac{39}{39 M_B}\)" },
                            { en: "\(0.005 M_B = 0.850\)", ta: "\(0.005 M_B = 0.850\)" },
                            { en: "\(M_B = \frac{0.850}{0.005} = 170\text{ g/mol}\)", ta: "\(M_B = \frac{0.850}{0.005} = 170\text{ கி/மோல்}\)" }
                        ],
                        tip: { en: "Remember to use the correct molar mass for the solvent when applying Raoult's Law for dilute solutions.", ta: "நீர்த்த கரைசல்களுக்கு ரவுல்ட் விதியைப் பயன்படுத்தும் போது கரைப்பானின் சரியான மோலார் நிறையைப் பயன்படுத்த நினைவில் கொள்ளுங்கள்." }
                    }
                },
                {
                    type: "worked-example",
                    example: {
                        id: "we3",
                        question: { en: "200 cm³ of an aqueous solution of a protein contains 1.26 g of protein. The osmotic pressure of such a solution at 300 K is found to be \(2.57 \times 10^{-3}\) bar. Calculate the molar mass of the protein. (\(R = 0.083 \text{ L bar mol}^{-1}\text{K}^{-1}\))", ta: "ஒரு புரதத்தின் 200 cm³ நீர்த்த கரைசலில் 1.26 கிராம் புரதம் உள்ளது. 300 K இல் அத்தகைய கரைசலின் சவ்வூடுபரவல் அழுத்தம் \(2.57 \times 10^{-3}\) பார் என கண்டறியப்பட்டுள்ளது. புரதத்தின் மோலார் நிறையை கணக்கிடுங்கள். (\(R = 0.083 \text{ L பார் மோல்}^{-1}\text{K}^{-1}\))"
                        },
                        solution: [
                            { en: "Given: Volume of solution (V) = 200 cm³ = 0.200 L", ta: "கொடுக்கப்பட்டது: கரைசலின் பருமன் (V) = 200 cm³ = 0.200 L" },
                            { en: "Mass of protein (\(w_B\)) = 1.26 g", ta: "புரதத்தின் நிறை (\(w_B\)) = 1.26 கி" },
                            { en: "Osmotic pressure (\(\Pi\)) = \(2.57 \times 10^{-3}\) bar", ta: "சவ்வூடுபரவல் அழுத்தம் (\(\Pi\)) = \(2.57 \times 10^{-3}\) பார்" },
                            { en: "Temperature (T) = 300 K", ta: "வெப்பநிலை (T) = 300 K" },
                            { en: "Gas constant (R) = \(0.083 \text{ L bar mol}^{-1}\text{K}^{-1}\)", ta: "வாயு மாறிலி (R) = \(0.083 \text{ L பார் மோல்}^{-1}\text{K}^{-1}\)" },
                            { en: "Using the osmotic pressure formula: \(\Pi = \frac{w_B}{M_B V} RT\)", ta: "சவ்வூடுபரவல் அழுத்த சூத்திரத்தைப் பயன்படுத்துக: \(\Pi = \frac{w_B}{M_B V} RT\)" },
                            { en: "Rearranging for \(M_B\): \(M_B = \frac{w_B RT}{\Pi V}\)", ta: "\(M_B\) க்காக மறுசீரமைத்தல்: \(M_B = \frac{w_B RT}{\Pi V}\)" },
                            { en: "\(M_B = \frac{1.26 \text{ g} \times 0.083 \text{ L bar mol}^{-1}\text{K}^{-1} \times 300 \text{ K}}{2.57 \times 10^{-3} \text{ bar} \times 0.200 \text{ L}}\) ", ta: "\(M_B = \frac{1.26 \text{ கி} \times 0.083 \text{ L பார் மோல்}^{-1}\text{K}^{-1} \times 300 \text{ K}}{2.57 \times 10^{-3} \text{ பார்} \times 0.200 \text{ L}}\) " },
                            { en: "\(M_B = \frac{31.374}{0.000514} \approx 61039 \text{ g/mol}\)", ta: "\(M_B = \frac{31.374}{0.000514} \approx 61039 \text{ கி/மோல்}\)" }
                        ],
                        tip: { en: "Ensure units are consistent (e.g., volume in Litres, pressure in bar if R is in L bar mol⁻¹K⁻¹).", ta: "அலகுகள் சீராக இருப்பதை உறுதிப்படுத்தவும் (எ.கா., R ஆனது L பார் மோல்⁻¹K⁻¹ இல் இருந்தால், பருமன் லிட்டரிலும், அழுத்தம் பாரிலும் இருக்க வேண்டும்)." }
                    }
                },
                {
                    type: "worked-example",
                    example: {
                        id: "we4",
                        question: { en: "An aqueous solution of 2% non-volatile solute exerts a pressure of 1.004 bar at the normal boiling point of the solvent. What is the molar mass of the solute? (Vapour pressure of water at normal boiling point is 1.013 bar)", ta: "2% ஆவியாகாத கரைபொருள் கொண்ட ஒரு நீர்த்த கரைசல், கரைப்பானின் இயல்பான கொதிநிலையில் 1.004 பார் அழுத்தத்தை செலுத்துகிறது. கரைபொருளின் மோலார் நிறை என்ன? (இயல்பான கொதிநிலையில் நீரின் ஆவி அழுத்தம் 1.013 பார்)"
                        },
                        solution: [
                            { en: "Given: \(w_B = 2\%\) means 2 g solute in 100 g solution, so 2 g solute in 98 g water (solvent).", ta: "கொடுக்கப்பட்டது: \(w_B = 2\%\) என்றால் 100 கிராம் கரைசலில் 2 கிராம் கரைபொருள், எனவே 98 கிராம் நீரில் (கரைப்பான்) 2 கிராம் கரைபொருள்." },
                            { en: "\(P^0 = 1.013\) bar (vapour pressure of pure water)", ta: "\(P^0 = 1.013\) பார் (தூய நீரின் ஆவி அழுத்தம்)" },
                            { en: "\(P_s = 1.004\) bar (vapour pressure of solution)", ta: "\(P_s = 1.004\) பார் (கரைசலின் ஆவி அழுத்தம்)" },
                            { en: "Molar mass of water (\(M_A\)) = 18 g/mol", ta: "நீரின் மோலார் நிறை (\(M_A\)) = 18 கி/மோல்" },
                            { en: "Using Raoult's Law: \(\frac{P^0 - P_s}{P^0} = \frac{w_B M_A}{M_B w_A}\)", ta: "ரவுல்ட் விதியைப் பயன்படுத்துக: \(\frac{P^0 - P_s}{P^0} = \frac{w_B M_A}{M_B w_A}\)" },
                            { en: "\(\frac{1.013 - 1.004}{1.013} = \frac{2 \times 18}{M_B \times 98}\)", ta: "\(\frac{1.013 - 1.004}{1.013} = \frac{2 \times 18}{M_B \times 98}\)" },
                            { en: "\(\frac{0.009}{1.013} = \frac{36}{98 M_B}\)", ta: "\(\frac{0.009}{1.013} = \frac{36}{98 M_B}\)" },
                            { en: "\(0.009 \times 98 M_B = 36 \times 1.013\)", ta: "\(0.009 \times 98 M_B = 36 \times 1.013\)" },
                            { en: "\(0.882 M_B = 36.468\)", ta: "\(0.882 M_B = 36.468\)" },
                            { en: "\(M_B = \frac{36.468}{0.882} \approx 41.35 \text{ g/mol}\)", ta: "\(M_B = \frac{36.468}{0.882} \approx 41.35 \text{ கி/மோல்}\)" }
                        ],
                        tip: { en: "For percentage solutions, assume 100 g or 100 mL of solution to simplify calculations.", ta: "சதவீத கரைசல்களுக்கு, கணக்கீடுகளை எளிதாக்க 100 கிராம் அல்லது 100 mL கரைசலை எடுத்துக்கொள்ளவும்." }
                    }
                },
                {
                    type: "worked-example",
                    example: {
                        id: "we5",
                        question: { en: "Calculate the freezing point of a solution containing 10.50 g of \(MgBr_2\) in 200 g of water. (Molar mass of \(MgBr_2 = 184.1 \text{ g/mol}\); \(K_f\) for water = \(1.86 \text{ K kg mol}^{-1}\)). Assume 100% dissociation.", ta: "200 கிராம் நீரில் 10.50 கிராம் \(MgBr_2\) கொண்ட ஒரு கரைசலின் உறைநிலையை கணக்கிடுங்கள். (\(MgBr_2\) இன் மோலார் நிறை = \(184.1 \text{ கி/மோல்}\); நீருக்கான \(K_f\) = \(1.86 \text{ K kg மோல்}^{-1}\)). 100% பிரிதலைக் கருதுக."
                        },
                        solution: [
                            { en: "Mass of solute (\(MgBr_2\), \(w_B\)) = 10.50 g", ta: "கரைபொருளின் நிறை (\(MgBr_2\), \(w_B\)) = 10.50 கி" },
                            { en: "Mass of solvent (water, \(w_A\)) = 200 g = 0.200 kg", ta: "கரைப்பானின் நிறை (நீர், \(w_A\)) = 200 கி = 0.200 கி.கி" },
                            { en: "Molar mass of \(MgBr_2\) (\(M_B\)) = \(184.1 \text{ g/mol}\)", ta: "\(MgBr_2\) இன் மோலார் நிறை (\(M_B\)) = \(184.1 \text{ கி/மோல்}\)" },
                            { en: "\(K_f\) for water = \(1.86 \text{ K kg mol}^{-1}\)", ta: "நீருக்கான \(K_f\) = \(1.86 \text{ K kg மோல்}^{-1}\)" },
                            { en: "\(MgBr_2\) dissociates as \(MgBr_2 \rightarrow Mg^{2+} + 2Br^-\), so \(i = 3\).", ta: "\(MgBr_2\) ஆனது \(MgBr_2 \rightarrow Mg^{2+} + 2Br^-\), என பிரிகிறது, எனவே \(i = 3\)." },
                            { en: "Moles of \(MgBr_2 = \frac{10.50 \text{ g}}{184.1 \text{ g/mol}} = 0.05703 \text{ mol}\)", ta: "\(MgBr_2\) மோல்கள் = \(\frac{10.50 \text{ கி}}{184.1 \text{ கி/மோல்}} = 0.05703 \text{ மோல்}\)" },
                            { en: "Molality (m) = \(\frac{\text{Moles of solute}}{\text{Mass of solvent (kg)}} = \frac{0.05703 \text{ mol}}{0.200 \text{ kg}} = 0.28515 \text{ m}\)", ta: "மோலால் செறிமானம் (m) = \(\frac{\text{கரைபொருளின் மோல்கள்}}{\text{கரைப்பானின் நிறை (கி.கி)}} = \frac{0.05703 \text{ மோல்}}{0.200 \text{ கி.கி}} = 0.28515 \text{ m}\)" },
                            { en: "Using the formula for depression in freezing point: \(\Delta T_f = i K_f m\)", ta: "உறைநிலையில் தாழ்விற்கான சூத்திரத்தைப் பயன்படுத்துக: \(\Delta T_f = i K_f m\)" },
                            { en: "\(\Delta T_f = 3 \times 1.86 \text{ K kg mol}^{-1} \times 0.28515 \text{ mol/kg} = 1.593 \text{ K}\)", ta: "\(\Delta T_f = 3 \times 1.86 \text{ K kg மோல்}^{-1} \times 0.28515 \text{ மோல்/கி.கி} = 1.593 \text{ K}\)" },
                            { en: "Freezing point of pure water (\(T_f^0\)) = 0°C = 273.15 K", ta: "தூய நீரின் உறைநிலை (\(T_f^0\)) = 0°C = 273.15 K" },
                            { en: "Freezing point of solution (\(T_f\)) = \(T_f^0 - \Delta T_f = 273.15 - 1.593 = 271.557 \text{ K} \approx -1.59°C\)", ta: "கரைசலின் உறைநிலை (\(T_f\)) = \(T_f^0 - \Delta T_f = 273.15 - 1.593 = 271.557 \text{ K} \approx -1.59°C\)" }
                        ],
                        tip: { en: "Always consider the van't Hoff factor (i) for electrolytic solutes as it affects the number of particles in solution.", ta: "மின்பகுளி கரைபொருள்களுக்கு எப்போதும் வான்ட் ஹாஃப் காரணி (i) ஐ கருத்தில் கொள்ளுங்கள், ஏனெனில் இது கரைசலில் உள்ள துகள்களின் எண்ணிக்கையை பாதிக்கிறது." }
                    }
                }
            ]
        },
        {
            id: "practice-questions",
            title: { en: "Practice Questions", ta: "பயிற்சி வினாக்கள்" },
            type: "practice-questions",
            content: [
                {
                    type: "heading",
                    en: "Multiple Choice Questions (MCQs)",
                    ta: "பல தேர்வு வினாக்கள் (MCQs)"
                },
                {
                    type: "question",
                    question: {
                        id: "mcq1",
                        type: "mcq",
                        question: { en: "Which of the following units is useful in relating concentration of solution with its vapour pressure lowering?", ta: "கரைசலின் செறிவை அதன் ஆவி அழுத்தக் குறைப்புடன் தொடர்புபடுத்துவதற்கு பின்வரும் அலகுகளில் எது பயனுள்ளதாக இருக்கும்?" },
                        options: [
                            { en: "Mole fraction", ta: "மோல் பின்னம்" },
                            { en: "Mass percentage", ta: "நிறை சதவீதம்" },
                            { en: "Molality", ta: "மோலால் செறிமானம்" },
                            { en: "Molarity", ta: "மோலார் செறிமானம்" }
                        ],
                        correctAnswer: "Mole fraction",
                        explanation: { en: "Raoult's Law states that the relative lowering of vapour pressure is equal to the mole fraction of the solute. So, mole fraction is directly related to vapour pressure lowering.", ta: "ரவுல்ட் விதி கூறுவதாவது, ஆவி அழுத்தத்தின் சார்பு குறைவு கரைபொருளின் மோல் பின்னத்திற்கு சமம். எனவே, மோல் பின்னம் ஆவி அழுத்தக் குறைப்புடன் நேரடியாக தொடர்புடையது." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq2",
                        type: "mcq",
                        question: { en: "For a dilute solution, Raoult's Law states that the lowering of vapour pressure is equal to the:", ta: "நீர்த்த கரைசலுக்கு, ரவுல்ட் விதி கூறுவதாவது, ஆவி அழுத்தத்தின் குறைவு இதற்கு சமம்:" },
                        options: [
                            { en: "Mole fraction of solvent", ta: "கரைப்பானின் மோல் பின்னம்" },
                            { en: "Mole fraction of solute", ta: "கரைபொருளின் மோல் பின்னம்" },
                            { en: "Molarity of solution", ta: "கரைசலின் மோலார் செறிமானம்" },
                            { en: "Molality of solution", ta: "கரைசலின் மோலால் செறிமானம்" }
                        ],
                        correctAnswer: "Mole fraction of solute",
                        explanation: { en: "According to Raoult's Law for a non-volatile solute, the relative lowering of vapour pressure is equal to the mole fraction of the solute.", ta: "ஆவியாகாத கரைபொருளுக்கான ரவுல்ட் விதியின்படி, ஆவி அழுத்தத்தின் சார்பு குறைவு கரைபொருளின் மோல் பின்னத்திற்கு சமம்." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq3",
                        type: "mcq",
                        question: { en: "Which of the following concentration terms is independent of temperature?", ta: "பின்வரும் செறிவுச் சொற்களில் எது வெப்பநிலையைப் பொறுத்தது அல்ல?" },
                        options: [
                            { en: "Molarity", ta: "மோலார் செறிமானம்" },
                            { en: "Molality", ta: "மோலால் செறிமானம்" },
                            { en: "Formalilty", ta: "ஃபார்மாலிட்டி" },
                            { en: "Normality", ta: "நார்மாலிட்டி" }
                        ],
                        correctAnswer: "Molality",
                        explanation: { en: "Molality is defined as moles of solute per kilogram of solvent, both mass terms. Mass does not change with temperature, unlike volume. Therefore, molality is independent of temperature.", ta: "மோலால் செறிமானம் என்பது ஒரு கிலோகிராம் கரைப்பானுக்கு மோல்களின் கரைபொருள் என வரையறுக்கப்படுகிறது, இவை இரண்டுமே நிறைச் சொற்கள். பருமன் போலல்லாமல், நிறை வெப்பநிலையுடன் மாறாது. எனவே, மோலால் செறிமானம் வெப்பநிலையைப் பொறுத்தது அல்ல." },
                        neetFrequency: 5
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq4",
                        type: "mcq",
                        question: { en: "An ideal solution is formed by mixing two liquids A and B. Which of the following statements is true?", ta: "A மற்றும் B என்ற இரண்டு திரவங்களை கலப்பதன் மூலம் ஒரு நல்லியல்பு கரைசல் உருவாகிறது. பின்வரும் கூற்றுகளில் எது சரியானது?" },
                        options: [
                            { en: "\(\Delta H_{mix} = 0\)", ta: "\(\Delta H_{mix} = 0\)" },
                            { en: "\(\Delta V_{mix} = 0\)", ta: "\(\Delta V_{mix} = 0\)" },
                            { en: "A-B interactions are similar to A-A and B-B interactions", ta: "A-B தொடர்புகள் A-A மற்றும் B-B தொடர்புகளுக்கு ஒத்தவை" },
                            { en: "All of the above", ta: "மேற்கண்ட அனைத்தும்" }
                        ],
                        correctAnswer: "All of the above",
                        explanation: { en: "For an ideal solution, there is no change in enthalpy and volume on mixing, and intermolecular forces between components are similar.", ta: "ஒரு நல்லியல்பு கரைசலுக்கு, கலக்கும்போது என்டல்பி மற்றும் பருமனில் எந்த மாற்றமும் இருக்காது, மேலும் கூறுகளுக்கு இடையேயான மூலக்கூறிடை விசைகள் ஒரே மாதிரியாக இருக்கும்." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq5",
                        type: "mcq",
                        question: { en: "If \(K_H\) for a gas in liquid is given as \(2 \times 10^5\) atm at 298 K, what is the solubility of the gas when its partial pressure is 0.5 atm?", ta: "ஒரு திரவத்தில் உள்ள ஒரு வாயுவின் \(K_H\) 298 K இல் \(2 \times 10^5\) atm என கொடுக்கப்பட்டால், அதன் பகுதி அழுத்தம் 0.5 atm ஆக இருக்கும்போது வாயுவின் கரைதிறன் என்ன?" },
                        options: [
                            { en: "\(2.5 \times 10^{-6}\)", ta: "\(2.5 \times 10^{-6}\)" },
                            { en: "\(4 \times 10^{-6}\)", ta: "\(4 \times 10^{-6}\)" },
                            { en: "\(2.5 \times 10^{-5}\)", ta: "\(2.5 \times 10^{-5}\)" },
                            { en: "\(4 \times 10^{-5}\)", ta: "\(4 \times 10^{-5}\)" }
                        ],
                        correctAnswer: "\(2.5 \times 10^{-6}\)",
                        explanation: { en: "According to Henry's Law, \(P = K_H \chi\). Here, \(P = 0.5\) atm, \(K_H = 2 \times 10^5\) atm. So, \(\chi = \frac{P}{K_H} = \frac{0.5}{2 \times 10^5} = 0.25 \times 10^{-5} = 2.5 \times 10^{-6}\).", ta: "ஹென்றி விதியின்படி, \(P = K_H \chi\). இங்கு, \(P = 0.5\) atm, \(K_H = 2 \times 10^5\) atm. எனவே, \(\chi = \frac{P}{K_H} = \frac{0.5}{2 \times 10^5} = 0.25 \times 10^{-5} = 2.5 \times 10^{-6}\)." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq6",
                        type: "mcq",
                        question: { en: "Which of the following will have the highest boiling point?", ta: "பின்வருவனவற்றில் எது மிக உயர்ந்த கொதிநிலையைக் கொண்டிருக்கும்?" },
                        options: [
                            { en: "0.1 M glucose solution", ta: "0.1 M குளுக்கோஸ் கரைசல்" },
                            { en: "0.1 M NaCl solution", ta: "0.1 M NaCl கரைசல்" },
                            { en: "0.1 M \(BaCl_2\) solution", ta: "0.1 M \(BaCl_2\) கரைசல்" },
                            { en: "0.1 M urea solution", ta: "0.1 M யூரியா கரைசல்" }
                        ],
                        correctAnswer: "0.1 M \(BaCl_2\) solution",
                        explanation: { en: "Elevation in boiling point is a colligative property and depends on the number of particles. For 0.1 M glucose and urea, i = 1 (non-electrolytes). For 0.1 M NaCl, i = 2. For 0.1 M \(BaCl_2\), i = 3 (\(BaCl_2 \rightarrow Ba^{2+} + 2Cl^-\)). Since \(BaCl_2\) produces the most particles, it will have the highest boiling point elevation and thus highest boiling point.", ta: "கொதிநிலையில் உயர்வு ஒரு பிணைப்புப் பண்பாகும், மேலும் இது துகள்களின் எண்ணிக்கையைப் பொறுத்தது. 0.1 M குளுக்கோஸ் மற்றும் யூரியாவுக்கு, i = 1 (மின்பகுளிகள் அல்லாதவை). 0.1 M NaCl க்கு, i = 2. 0.1 M \(BaCl_2\) க்கு, i = 3 (\(BaCl_2 \rightarrow Ba^{2+} + 2Cl^-\)). \(BaCl_2\) அதிக துகள்களை உருவாக்குவதால், அது மிக உயர்ந்த கொதிநிலை உயர்வை மற்றும் மிக உயர்ந்த கொதிநிலையைக் கொண்டிருக்கும்." },
                        neetFrequency: 5
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq7",
                        type: "mcq",
                        question: { en: "When a non-volatile solute is added to a solvent, the vapour pressure of the solution decreases. This phenomenon is explained by:", ta: "ஒரு ஆவியாகாத கரைபொருள் ஒரு கரைப்பானில் சேர்க்கப்படும்போது, கரைசலின் ஆவி அழுத்தம் குறைகிறது. இந்த நிகழ்வு எதனால் விளக்கப்படுகிறது?" },
                        options: [
                            { en: "Henry's Law", ta: "ஹென்றி விதி" },
                            { en: "Raoult's Law", ta: "ரவுல்ட் விதி" },
                            { en: "Osmosis", ta: "சவ்வூடுபரவல்" },
                            { en: "Van't Hoff equation", ta: "வான்ட் ஹாஃப் சமன்பாடு" }
                        ],
                        correctAnswer: "Raoult's Law",
                        explanation: { en: "Raoult's Law describes the relationship between the partial vapour pressure of components in a solution and their mole fractions, specifically stating that a non-volatile solute lowers the vapour pressure of the solvent.", ta: "ரவுல்ட் விதி ஒரு கரைசலில் உள்ள கூறுகளின் பகுதி ஆவி அழுத்தம் மற்றும் அவற்றின் மோல் பின்னங்களுக்கு இடையேயான தொடர்பை விவரிக்கிறது, குறிப்பாக ஒரு ஆவியாகாத கரைபொருள் கரைப்பானின் ஆவி அழுத்தத்தைக் குறைக்கிறது என்று கூறுகிறது." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq8",
                        type: "mcq",
                        question: { en: "The value of Henry's Law constant \(K_H\) is:", ta: "ஹென்றி விதி மாறிலி \(K_H\) இன் மதிப்பு:" },
                        options: [
                            { en: "Increases with increase in temperature", ta: "வெப்பநிலை அதிகரித்தால் அதிகரிக்கிறது" },
                            { en: "Decreases with increase in temperature", ta: "வெப்பநிலை அதிகரித்தால் குறைகிறது" },
                            { en: "Remains constant with temperature", ta: "வெப்பநிலையுடன் நிலையாக இருக்கும்" },
                            { en: "First increases then decreases", ta: "முதலில் அதிகரித்து பின்னர் குறைகிறது" }
                        ],
                        correctAnswer: "Increases with increase in temperature",
                        explanation: { en: "The solubility of gases in liquids decreases with increasing temperature, implying that the \(K_H\) value increases with increasing temperature (since \(P = K_H \chi\) and for the same partial pressure P, as solubility \(\chi\) decreases, \(K_H\) must increase).", ta: "திரவங்களில் வாயுக்களின் கரைதிறன் வெப்பநிலை அதிகரிக்கும்போது குறைகிறது, இதன் பொருள் \(K_H\) மதிப்பு வெப்பநிலை அதிகரிக்கும்போது அதிகரிக்கிறது (ஏனெனில் \(P = K_H \chi\) மற்றும் அதே பகுதி அழுத்தம் P க்கு, கரைதிறன் \(\chi\) குறையும்போது, \(K_H\) அதிகரிக்க வேண்டும்)." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq9",
                        type: "mcq",
                        question: { en: "Which of the following will show a negative deviation from Raoult's Law?", ta: "பின்வருவனவற்றில் எது ரவுல்ட் விதியிலிருந்து எதிர்மறை விலகலைக் காட்டும்?" },
                        options: [
                            { en: "Ethanol and Acetone", ta: "எத்தனால் மற்றும் அசெட்டோன்" },
                            { en: "Benzene and Toluene", ta: "பென்சீன் மற்றும் டோலுயீன்" },
                            { en: "Chloroform and Acetone", ta: "குளோரோஃபார்ம் மற்றும் அசெட்டோன்" },
                            { en: "n-hexane and n-heptane", ta: "n-ஹெக்சேன் மற்றும் n-ஹெப்டேன்" }
                        ],
                        correctAnswer: "Chloroform and Acetone",
                        explanation: { en: "Chloroform and Acetone form hydrogen bonds (intermolecular interactions stronger than pure components), leading to negative deviation. Ethanol-Acetone shows positive deviation. Benzene-Toluene and n-hexane-n-heptane are ideal solutions.", ta: "குளோரோஃபார்ம் மற்றும் அசெட்டோன் ஹைட்ரஜன் பிணைப்புகளை உருவாக்குகின்றன (தூய கூறுகளை விட மூலக்கூறிடை தொடர்புகள் வலிமையானவை), இது எதிர்மறை விலகலுக்கு வழிவகுக்கிறது. எத்தனால்-அசெட்டோன் நேர்மறை விலகலைக் காட்டுகிறது. பென்சீன்-டோலுயீன் மற்றும் n-ஹெக்சேன்-n-ஹெப்டேன் நல்லியல்பு கரைசல்கள்." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq10",
                        type: "mcq",
                        question: { en: "The osmotic pressure of a solution is given by \(\Pi = CRT\). If the temperature is doubled and concentration is halved, the osmotic pressure becomes:", ta: "ஒரு கரைசலின் சவ்வூடுபரவல் அழுத்தம் \(\Pi = CRT\) என கொடுக்கப்பட்டுள்ளது. வெப்பநிலை இரட்டிப்பாகவும், செறிவு பாதியாகவும் இருந்தால், சவ்வூடுபரவல் அழுத்தம் இவ்வாறு மாறும்:" },
                        options: [
                            { en: "Half", ta: "பாதி" },
                            { en: "Double", ta: "இரட்டிப்பு" },
                            { en: "Same", ta: "அதே" },
                            { en: "Quadruple", ta: "நான்கு மடங்கு" }
                        ],
                        correctAnswer: "Same",
                        explanation: { en: "New concentration \(C' = C/2\), New temperature \(T' = 2T\). New osmotic pressure \(\Pi' = C'RT' = (C/2)R(2T) = CRT = \Pi\). So, the osmotic pressure remains the same.", ta: "புதிய செறிவு \(C' = C/2\), புதிய வெப்பநிலை \(T' = 2T\). புதிய சவ்வூடுபரவல் அழுத்தம் \(\Pi' = C'RT' = (C/2)R(2T) = CRT = \Pi\). எனவே, சவ்வூடுபரவல் அழுத்தம் அதே தான்." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq11",
                        type: "mcq",
                        question: { en: "What will be the van't Hoff factor (i) for benzoic acid (\(C_6H_5COOH\)) when it undergoes dimerization in benzene?", ta: "பென்சீனில் பென்சோயிக் அமிலம் (\(C_6H_5COOH\)) இரும மூலக்கூறாகும்போது வான்ட் ஹாஃப் காரணி (i) என்னவாக இருக்கும்?" },
                        options: [
                            { en: "1", ta: "1" },
                            { en: "2", ta: "2" },
                            { en: "0.5", ta: "0.5" },
                            { en: "3", ta: "3" }
                        ],
                        correctAnswer: "0.5",
                        explanation: { en: "When benzoic acid dimerizes, two molecules associate to form one particle. Therefore, the observed number of particles is half of the expected. \(i = \frac{1}{2} = 0.5\).", ta: "பென்சோயிக் அமிலம் இரும மூலக்கூறாகும்போது, இரண்டு மூலக்கூறுகள் ஒரு துகளை உருவாக்க சேர்கின்றன. எனவே, கவனிக்கப்பட்ட துகள்களின் எண்ணிக்கை எதிர்பார்க்கப்பட்டதில் பாதி. \(i = \frac{1}{2} = 0.5\)." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq12",
                        type: "mcq",
                        question: { en: "Which of the following aqueous solutions will have the lowest freezing point?", ta: "பின்வரும் நீர்த்த கரைசல்களில் எது மிகக் குறைந்த உறைநிலையைக் கொண்டிருக்கும்?" },
                        options: [
                            { en: "0.1 m urea", ta: "0.1 m யூரியா" },
                            { en: "0.1 m NaCl", ta: "0.1 m NaCl" },
                            { en: "0.1 m \(K_2SO_4\)", ta: "0.1 m \(K_2SO_4\)" },
                            { en: "0.1 m glucose", ta: "0.1 m குளுக்கோஸ்" }
                        ],
                        correctAnswer: "0.1 m \(K_2SO_4\)",
                        explanation: { en: "Depression in freezing point (\(\Delta T_f = i K_f m\)) is a colligative property. The solution with the highest 'i' value will have the largest \(\Delta T_f\) and thus the lowest freezing point. Urea and glucose are non-electrolytes (i=1). NaCl dissociates into 2 ions (i=2). \(K_2SO_4\) dissociates into 3 ions (\(2K^+ + SO_4^{2-}\), i=3). So, \(K_2SO_4\) has the highest 'i' and lowest freezing point.", ta: "உறைநிலையில் தாழ்வு (\(\Delta T_f = i K_f m\)) ஒரு பிணைப்புப் பண்பாகும். அதிக 'i' மதிப்பு கொண்ட கரைசல் மிக உயர்ந்த \(\Delta T_f\) ஐயும், இதனால் மிகக் குறைந்த உறைநிலையையும் கொண்டிருக்கும். யூரியா மற்றும் குளுக்கோஸ் மின்பகுளிகள் அல்லாதவை (i=1). NaCl 2 அயனிகளாக பிரிகிறது (i=2). \(K_2SO_4\) 3 அயனிகளாக பிரிகிறது (\(2K^+ + SO_4^{2-}\), i=3). எனவே, \(K_2SO_4\) அதிக 'i' மற்றும் குறைந்த உறைநிலையைக் கொண்டுள்ளது." },
                        neetFrequency: 5
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq13",
                        type: "mcq",
                        question: { en: "At higher altitudes, people suffer from a disease called anoxia. This is due to:", ta: "உயரமான இடங்களில், மக்கள் அனோக்ஸியா எனப்படும் நோயால் பாதிக்கப்படுகிறார்கள். இதற்கு காரணம்:" },
                        options: [
                            { en: "Low atmospheric pressure", ta: "குறைந்த வளிமண்டல அழுத்தம்" },
                            { en: "High atmospheric pressure", ta: "அதிக வளிமண்டல அழுத்தம்" },
                            { en: "Low temperature", ta: "குறைந்த வெப்பநிலை" },
                            { en: "High temperature", ta: "அதிக வெப்பநிலை" }
                        ],
                        correctAnswer: "Low atmospheric pressure",
                        explanation: { en: "At high altitudes, the partial pressure of oxygen is less than that at the ground level. This leads to a lower concentration of oxygen in the blood and tissues of climbers and results in anoxia (lack of oxygen). This is an application of Henry's Law.", ta: "உயரமான இடங்களில், ஆக்ஸிஜனின் பகுதி அழுத்தம் தரைமட்டத்தில் இருப்பதை விட குறைவாக உள்ளது. இது ஏறுபவர்களின் இரத்தம் மற்றும் திசுக்களில் ஆக்ஸிஜனின் குறைந்த செறிவுக்கு வழிவகுக்கிறது மற்றும் அனோக்ஸியா (ஆக்ஸிஜன் பற்றாக்குறை) ஏற்படுகிறது. இது ஹென்றி விதியின் ஒரு பயன்பாடு." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq14",
                        type: "mcq",
                        question: { en: "An increase in temperature of the aqueous solution of sugar will:", ta: "சர்க்கரையின் நீர்த்த கரைசலின் வெப்பநிலையை அதிகரிப்பது இவ்வாறு மாற்றும்:" },
                        options: [
                            { en: "Increase its molality", ta: "அதன் மோலால் செறிமானத்தை அதிகரிக்கும்" },
                            { en: "Increase its molarity", ta: "அதன் மோலார் செறிமானத்தை அதிகரிக்கும்" },
                            { en: "Decrease its molarity", ta: "அதன் மோலார் செறிமானத்தை குறைக்கும்" },
                            { en: "Decrease its molality", ta: "அதன் மோலால் செறிமானத்தை குறைக்கும்" }
                        ],
                        correctAnswer: "Decrease its molarity",
                        explanation: { en: "Molarity is moles of solute per volume of solution. As temperature increases, the volume of the solution increases due to expansion, leading to a decrease in molarity. Molality (moles of solute per mass of solvent) is independent of temperature.", ta: "மோலார் செறிமானம் என்பது கரைசலின் பருமனுக்கு மோல்களின் கரைபொருள். வெப்பநிலை அதிகரிக்கும்போது, விரிவாக்கம் காரணமாக கரைசலின் பருமன் அதிகரித்து, மோலார் செறிமானத்தில் குறைவை ஏற்படுத்தும். மோலால் செறிமானம் (கரைப்பானின் நிறைக்கு மோல்களின் கரைபொருள்) வெப்பநிலையைப் பொறுத்தது அல்ல." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                        question: {
                        id: "mcq15",
                        type: "mcq",
                        question: { en: "Which pair of solutions is isotonic at the same temperature?", ta: "ஒரே வெப்பநிலையில் எந்த கரைசல் இணைகள் சம அளவு அழுத்தம் கொண்டவை?" },
                        options: [
                            { en: "0.1 M Urea and 0.1 M NaCl", ta: "0.1 M யூரியா மற்றும் 0.1 M NaCl" },
                            { en: "0.1 M Urea and 0.2 M Glucose", ta: "0.1 M யூரியா மற்றும் 0.2 M குளுக்கோஸ்" },
                            { en: "0.1 M Glucose and 0.1 M Urea", ta: "0.1 M குளுக்கோஸ் மற்றும் 0.1 M யூரியா" },
                            { en: "0.1 M \(BaCl_2\) and 0.3 M Urea", ta: "0.1 M \(BaCl_2\) மற்றும் 0.3 M யூரியா" }
                        ],
                        correctAnswer: "0.1 M Glucose and 0.1 M Urea",
                        explanation: { en: "Isotonic solutions have the same osmotic pressure. \(\Pi = iCRT\). Since R and T are constant, we need \(iC\) to be the same. Glucose (i=1) and Urea (i=1) are non-electrolytes. For 0.1 M Glucose, \(iC = 1 \times 0.1 = 0.1\). For 0.1 M Urea, \(iC = 1 \times 0.1 = 0.1\). Thus, they are isotonic. For 0.1 M NaCl, \(iC = 2 \times 0.1 = 0.2\). For 0.1 M \(BaCl_2\), \(iC = 3 \times 0.1 = 0.3\). For 0.3 M Urea, \(iC = 1 \times 0.3 = 0.3\). So, 0.1 M \(BaCl_2\) and 0.3 M Urea are also isotonic.", ta: "சம அளவு அழுத்தம் கொண்ட கரைசல்கள் ஒரே சவ்வூடுபரவல் அழுத்தத்தைக் கொண்டிருக்கும். \(\Pi = iCRT\). R மற்றும் T நிலையானவை என்பதால், \(iC\) ஒரே மாதிரியாக இருக்க வேண்டும். குளுக்கோஸ் (i=1) மற்றும் யூரியா (i=1) மின்பகுளிகள் அல்லாதவை. 0.1 M குளுக்கோஸுக்கு, \(iC = 1 \times 0.1 = 0.1\). 0.1 M யூரியாவுக்கு, \(iC = 1 \times 0.1 = 0.1\). இவ்வாறு, அவை சம அளவு அழுத்தம் கொண்டவை. 0.1 M NaCl க்கு, \(iC = 2 \times 0.1 = 0.2\). 0.1 M \(BaCl_2\) க்கு, \(iC = 3 \times 0.1 = 0.3\). 0.3 M யூரியாவுக்கு, \(iC = 1 \times 0.3 = 0.3\). எனவே, 0.1 M \(BaCl_2\) மற்றும் 0.3 M யூரியா ஆகியவை சம அளவு அழுத்தம் கொண்டவை." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq16",
                        type: "mcq",
                        question: { en: "Which of the following statements is incorrect regarding the colligative properties?", ta: "பின்வரும் கூற்றுகளில் பிணைப்புப் பண்புகள் தொடர்பாக தவறானது எது?" },
                        options: [
                            { en: "They depend on the number of solute particles.", ta: "அவை கரைபொருள் துகள்களின் எண்ணிக்கையைப் பொறுத்தது." },
                            { en: "They are independent of the nature of solute particles.", ta: "அவை கரைபொருள் துகள்களின் தன்மையைப் பொறுத்தது அல்ல." },
                            { en: "They are properties of dilute solutions.", ta: "அவை நீர்த்த கரைசல்களின் பண்புகள்." },
                            { en: "They are used to determine the molar mass of electrolytes only.", ta: "அவை மின்பகுளிகளின் மோலார் நிறையை மட்டுமே தீர்மானிக்கப் பயன்படுத்தப்படுகின்றன." }
                        ],
                        correctAnswer: "They are used to determine the molar mass of electrolytes only.",
                        explanation: { en: "Colligative properties can be used to determine the molar mass of both non-electrolytes and electrolytes. For electrolytes, the van't Hoff factor is incorporated.", ta: "பிணைப்புப் பண்புகள் மின்பகுளிகள் அல்லாதவை மற்றும் மின்பகுளிகள் இரண்டின் மோலார் நிறைகளையும் தீர்மானிக்கப் பயன்படுத்தப்படலாம். மின்பகுளிகளுக்கு, வான்ட் ஹாஃப் காரணி சேர்க்கப்பட்டுள்ளது." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq17",
                        type: "mcq",
                        question: { en: "The boiling point of an aqueous solution is 100.18 °C. The freezing point of the same solution will be (\(K_f = 1.86 \text{ K kg mol}^{-1}\), \(K_b = 0.512 \text{ K kg mol}^{-1}\)):", ta: "ஒரு நீர்த்த கரைசலின் கொதிநிலை 100.18 °C. அதே கரைசலின் உறைநிலை என்னவாக இருக்கும்? (\(K_f = 1.86 \text{ K kg மோல்}^{-1}\), \(K_b = 0.512 \text{ K kg மோல்}^{-1}\)):" },
                        options: [
                            { en: "-0.18 °C", ta: "-0.18 °C" },
                            { en: "-0.65 °C", ta: "-0.65 °C" },
                            { en: "-1.86 °C", ta: "-1.86 °C" },
                            { en: "-0.36 °C", ta: "-0.36 °C" }
                        ],
                        correctAnswer: "-0.65 °C",
                        explanation: { en: "Given \(\Delta T_b = 100.18 - 100 = 0.18\) °C or K. We know \(\Delta T_b = K_b m\) and \(\Delta T_f = K_f m\). Dividing these two equations: \(\frac{\Delta T_f}{\Delta T_b} = \frac{K_f}{K_b}\). So, \(\Delta T_f = \Delta T_b \times \frac{K_f}{K_b} = 0.18 \times \frac{1.86}{0.512} \approx 0.65\) K. Freezing point = \(0 - 0.65 = -0.65\) °C.", ta: "கொடுக்கப்பட்டது \(\Delta T_b = 100.18 - 100 = 0.18\) °C அல்லது K. நமக்குத் தெரியும் \(\Delta T_b = K_b m\) மற்றும் \(\Delta T_f = K_f m\). இந்த இரண்டு சமன்பாடுகளை வகுத்தால்: \(\frac{\Delta T_f}{\Delta T_b} = \frac{K_f}{K_b}\). எனவே, \(\Delta T_f = \Delta T_b \times \frac{K_f}{K_b} = 0.18 \times \frac{1.86}{0.512} \approx 0.65\) K. உறைநிலை = \(0 - 0.65 = -0.65\) °C." },
                        neetFrequency: 5
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq18",
                        type: "mcq",
                        question: { en: "Reverse osmosis is used for:", ta: "தலைகீழ் சவ்வூடுபரவல் எதற்காகப் பயன்படுத்தப்படுகிறது?" },
                        options: [
                            { en: "Water purification", ta: "நீர் சுத்திகரிப்பு" },
                            { en: "Desalination of seawater", ta: "கடல் நீரை உப்பகற்றுதல்" },
                            { en: "Concentrating fruit juices", ta: "பழச்சாறுகளை செறிவூட்டுதல்" },
                            { en: "All of the above", ta: "மேற்கண்ட அனைத்தும்" }
                        ],
                        correctAnswer: "All of the above",
                        explanation: { en: "Reverse osmosis is a process that forces a solvent from a region of high solute concentration through a semipermeable membrane to a region of low solute concentration by applying pressure, effectively removing impurities or salt. It's used in water purification, desalination, and food industry.", ta: "தலைகீழ் சவ்வூடுபரவல் என்பது ஒரு பகுதி ஊடுருவும் சவ்வு வழியாக அதிக கரைபொருள் செறிவுள்ள பகுதியிலிருந்து குறைந்த கரைபொருள் செறிவுள்ள பகுதிக்கு ஒரு கரைப்பானை அழுத்தம் மூலம் செலுத்தப்படும் ஒரு செயல்முறையாகும், இது அசுத்தங்கள் அல்லது உப்பை திறம்பட நீக்குகிறது. இது நீர் சுத்திகரிப்பு, உப்பகற்றுதல் மற்றும் உணவுத் தொழிலில் பயன்படுத்தப்படுகிறது." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq19",
                        type: "mcq",
                        question: { en: "Among the following, the strongest intermolecular forces are present in:", ta: "பின்வருவனவற்றில், மிக வலிமையான மூலக்கூறிடை விசைகள் இதில் உள்ளன:" },
                        options: [
                            { en: "Ideal solutions", ta: "நல்லியல்பு கரைசல்கள்" },
                            { en: "Solutions showing positive deviation from Raoult's Law", ta: "ரவுல்ட் விதியிலிருந்து நேர்மறை விலகலைக் காட்டும் கரைசல்கள்" },
                            { en: "Solutions showing negative deviation from Raoult's Law", ta: "ரவுல்ட் விதியிலிருந்து எதிர்மறை விலகலைக் காட்டும் கரைசல்கள்" },
                            { en: "Azeotropes", ta: "அசட்ரோப்கள்" }
                        ],
                        correctAnswer: "Solutions showing negative deviation from Raoult's Law",
                        explanation: { en: "Negative deviation occurs when A-B interactions are stronger than A-A and B-B interactions, leading to lower vapour pressure than expected.", ta: "A-B தொடர்புகள் A-A மற்றும் B-B தொடர்புகளை விட வலிமையாக இருக்கும்போது எதிர்மறை விலகல் ஏற்படுகிறது, இது எதிர்பார்க்கப்பட்டதை விட குறைந்த ஆவி அழுத்தத்திற்கு வழிவகுக்கிறது." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq20",
                        type: "mcq",
                        question: { en: "Which of the following statements is true for an azeotropic mixture?", ta: "பின்வரும் கூற்றுகளில் அசட்ரோபிக் கலவைக்கு எது சரியானது?" },
                        options: [
                            { en: "It boils at a constant temperature.", ta: "இது ஒரு நிலையான வெப்பநிலையில் கொதிக்கும்." },
                            { en: "Its composition in liquid and vapour phases is the same.", ta: "திரவ மற்றும் ஆவி நிலைகளில் அதன் கலவை ஒரே மாதிரியாக இருக்கும்." },
                            { en: "It cannot be separated by fractional distillation.", ta: "இதை பின்னக் காய்ச்சிவடித்தல் மூலம் பிரிக்க முடியாது." },
                            { en: "All of the above", ta: "மேற்கண்ட அனைத்தும்" }
                        ],
                        correctAnswer: "All of the above",
                        explanation: { en: "Azeotropes are constant boiling mixtures whose components cannot be separated by fractional distillation because their liquid and vapour phase compositions are identical at that specific boiling point.", ta: "அசட்ரோப்கள் நிலையான கொதிநிலை கலவைகளாகும், அதன் கூறுகள் பின்னக் காய்ச்சிவடித்தல் மூலம் பிரிக்க முடியாது, ஏனெனில் அந்த குறிப்பிட்ட கொதிநிலையில் அவற்றின் திரவ மற்றும் ஆவி நிலை கலவைகள் ஒரே மாதிரியாக இருக்கும்." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq21",
                        type: "mcq",
                        question: { en: "The molal elevation constant (\(K_b\)) depends on:", ta: "மோலால் உயர்வு மாறிலி (\(K_b\)) எதைப் பொறுத்தது?" },
                        options: [
                            { en: "Nature of the solute", ta: "கரைபொருளின் தன்மை" },
                            { en: "Nature of the solvent", ta: "கரைப்பானின் தன்மை" },
                            { en: "Concentration of the solution", ta: "கரைசலின் செறிவு" },
                            { en: "Temperature of the solution", ta: "கரைசலின் வெப்பநிலை" }
                        ],
                        correctAnswer: "Nature of the solvent",
                        explanation: { en: "The molal elevation constant (\(K_b\)) and molal depression constant (\(K_f\)) are characteristic properties of the solvent. They depend only on the nature of the solvent, not on the solute or concentration.", ta: "மோலால் உயர்வு மாறிலி (\(K_b\)) மற்றும் மோலால் தாழ்வு மாறிலி (\(K_f\)) ஆகியவை கரைப்பானின் சிறப்பியல்பு பண்புகளாகும். அவை கரைப்பானின் தன்மையை மட்டுமே சார்ந்துள்ளது, கரைபொருள் அல்லது செறிவை அல்ல." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq22",
                        type: "mcq",
                        question: { en: "The correct order of osmotic pressure for 0.01 M aqueous solutions of each compound is: \(BaCl_2\), KCl, \(CH_3COOH\), Glucose (Assume 100% dissociation for strong electrolytes).", ta: "ஒவ்வொரு சேர்மத்தின் 0.01 M நீர்த்த கரைசல்களுக்கான சவ்வூடுபரவல் அழுத்தத்தின் சரியான வரிசை: \(BaCl_2\), KCl, \(CH_3COOH\), குளுக்கோஸ் (வலுவான மின்பகுளிகளுக்கு 100% பிரிதலைக் கருதுக)." },
                        options: [
                            { en: "Glucose < \(CH_3COOH\) < KCl < \(BaCl_2\)", ta: "குளுக்கோஸ் < \(CH_3COOH\) < KCl < \(BaCl_2\)" },
                            { en: "\(CH_3COOH\) < Glucose < KCl < \(BaCl_2\)", ta: "\(CH_3COOH\) < குளுக்கோஸ் < KCl < \(BaCl_2\)" },
                            { en: "\(BaCl_2\) < KCl < \(CH_3COOH\) < Glucose", ta: "\(BaCl_2\) < KCl < \(CH_3COOH\) < குளுக்கோஸ்" },
                            { en: "Glucose < KCl < \(CH_3COOH\) < \(BaCl_2\)", ta: "குளுக்கோஸ் < KCl < \(CH_3COOH\) < \(BaCl_2\)" }
                        ],
                        correctAnswer: "Glucose < \(CH_3COOH\) < KCl < \(BaCl_2\)",
                        explanation: { en: "Osmotic pressure \(\Pi = iCRT\). For fixed C, R, T, \(\Pi \propto i\). \(i_{glucose} = 1\). \(i_{CH_3COOH}\) is slightly > 1 (weak electrolyte, partial dissociation). \(i_{KCl} = 2\). \(i_{BaCl_2} = 3\). So, the order of i (and thus \(\Pi\)) is Glucose < \(CH_3COOH\) < KCl < \(BaCl_2\).", ta: "சவ்வூடுபரவல் அழுத்தம் \(\Pi = iCRT\). நிலையான C, R, T க்கு, \(\Pi \propto i\). \(i_{glucose} = 1\). \(i_{CH_3COOH}\) சற்றே > 1 (பலவீனமான மின்பகுளி, பகுதி பிரிதல்). \(i_{KCl} = 2\). \(i_{BaCl_2} = 3\). எனவே, i இன் வரிசை (மற்றும் \(\Pi\) இன் வரிசை) குளுக்கோஸ் < \(CH_3COOH\) < KCl < \(BaCl_2\)." },
                        neetFrequency: 5
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq23",
                        type: "mcq",
                        question: { en: "Which of the following aqueous solutions has the highest boiling point?", ta: "பின்வரும் நீர்த்த கரைசல்களில் எது மிக உயர்ந்த கொதிநிலையைக் கொண்டுள்ளது?" },
                        options: [
                            { en: "0.01 M NaCl", ta: "0.01 M NaCl" },
                            { en: "0.01 M \(Na_2SO_4\)", ta: "0.01 M \(Na_2SO_4\)" },
                            { en: "0.01 M Glucose", ta: "0.01 M குளுக்கோஸ்" },
                            { en: "0.01 M \(KNO_3\)", ta: "0.01 M \(KNO_3\)" }
                        ],
                        correctAnswer: "0.01 M \(Na_2SO_4\)",
                        explanation: { en: "Boiling point elevation (\(\Delta T_b = i K_b m\)) is directly proportional to 'i'. \(i_{Glucose} = 1\). \(i_{NaCl} = 2\). \(i_{KNO_3} = 2\). \(i_{Na_2SO_4} = 3\) (\(2Na^+ + SO_4^{2-}\)). The highest 'i' value for \(Na_2SO_4\) means it will have the highest boiling point elevation and thus the highest boiling point.", ta: "கொதிநிலை உயர்வு (\(\Delta T_b = i K_b m\)) 'i' க்கு நேர் விகிதத்தில் இருக்கும். \(i_{குளுக்கோஸ்} = 1\). \(i_{NaCl} = 2\). \(i_{KNO_3} = 2\). \(i_{Na_2SO_4} = 3\) (\(2Na^+ + SO_4^{2-}\)). \(Na_2SO_4\) க்கான மிக உயர்ந்த 'i' மதிப்பு என்பது அது மிக உயர்ந்த கொதிநிலை உயர்வையும், இதனால் மிக உயர்ந்த கொதிநிலையையும் கொண்டிருக்கும் என்று பொருள்." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq24",
                        type: "mcq",
                        question: { en: "An antifreeze solution is prepared from 222.6 g of ethylene glycol (\(C_2H_6O_2\)) and 200 g of water. Calculate the molality of the solution.", ta: "222.6 கிராம் எத்திலீன் கிளைக்கால் (\(C_2H_6O_2\)) மற்றும் 200 கிராம் நீரிலிருந்து ஒரு ஆண்டிஃப்ரீஸ் கரைசல் தயாரிக்கப்படுகிறது. கரைசலின் மோலால் செறிமானத்தை கணக்கிடுங்கள்." },
                        options: [
                            { en: "17.95 m", ta: "17.95 m" },
                            { en: "18.0 m", ta: "18.0 m" },
                            { en: "17.95 mol kg⁻¹", ta: "17.95 மோல் கி.கி⁻¹" },
                            { en: "Both A and C", ta: "A மற்றும் C இரண்டும்" }
                        ],
                        correctAnswer: "Both A and C",
                        explanation: { en: "Molar mass of ethylene glycol (\(C_2H_6O_2\)) = \(2 \times 12 + 6 \times 1 + 2 \times 16 = 24 + 6 + 32 = 62\) g/mol. Moles of ethylene glycol = \(\frac{222.6 \text{ g}}{62 \text{ g/mol}} = 3.59 \text{ mol}\). Mass of water = 200 g = 0.200 kg. Molality = \(\frac{\text{Moles of solute}}{\text{Mass of solvent (kg)}} = \frac{3.59 \text{ mol}}{0.200 \text{ kg}} = 17.95 \text{ mol kg}^{-1}\) or 17.95 m.", ta: "எத்திலீன் கிளைக்காலின் மோலார் நிறை (\(C_2H_6O_2\)) = \(2 \times 12 + 6 \times 1 + 2 \times 16 = 24 + 6 + 32 = 62\) கி/மோல். எத்திலீன் கிளைக்காலின் மோல்கள் = \(\frac{222.6 \text{ கி}}{62 \text{ கி/மோல்}} = 3.59 \text{ மோல்}\). நீரின் நிறை = 200 கி = 0.200 கி.கி. மோலால் செறிமானம் = \(\frac{\text{கரைபொருளின் மோல்கள்}}{\text{கரைப்பானின் நிறை (கி.கி)}} = \frac{3.59 \text{ மோல்}}{0.200 \text{ கி.கி}} = 17.95 \text{ மோல் கி.கி}^{-1}\) அல்லது 17.95 m." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mcq25",
                        type: "mcq",
                        question: { en: "Which factor does not affect the solubility of a solid in a liquid?", ta: "ஒரு திரவத்தில் ஒரு திடப்பொருளின் கரைதிறனை எந்த காரணி பாதிக்காது?" },
                        options: [
                            { en: "Nature of solute", ta: "கரைபொருளின் தன்மை" },
                            { en: "Nature of solvent", ta: "கரைப்பானின் தன்மை" },
                            { en: "Temperature", ta: "வெப்பநிலை" },
                            { en: "Pressure", ta: "அழுத்தம்" }
                        ],
                        correctAnswer: "Pressure",
                        explanation: { en: "Pressure has a negligible effect on the solubility of solids in liquids. It primarily affects the solubility of gases in liquids (Henry's Law).", ta: "அழுத்தம் திரவங்களில் திடப்பொருட்களின் கரைதிறனில் புறக்கணிக்கத்தக்க விளைவைக் கொண்டுள்ளது. இது முதன்மையாக திரவங்களில் வாயுக்களின் கரைதிறனை பாதிக்கிறது (ஹென்றி விதி)." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "heading",
                    en: "Assertion and Reason Questions",
                    ta: "கூற்று மற்றும் காரணம் வினாக்கள்"
                },
                {
                    type: "paragraph",
                    en: "**Directions**: In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option.",
                    ta: "**வழிமுறைகள்**: பின்வரும் வினாக்களில், கூற்று (A) ஒரு காரணம் (R) அறிக்கையைத் தொடர்ந்து வருகிறது. சரியான விருப்பத்தைத் தேர்ந்தெடுக்கவும்."
                },
                {
                    type: "list",
                    items: [
                        { en: "(A) Both A and R are true and R is the correct explanation of A.", ta: "(A) A மற்றும் R இரண்டும் உண்மை மற்றும் R என்பது A இன் சரியான விளக்கம்." },
                        { en: "(B) Both A and R are true but R is not the correct explanation of A.", ta: "(B) A மற்றும் R இரண்டும் உண்மை ஆனால் R என்பது A இன் சரியான விளக்கம் அல்ல." },
                        { en: "(C) A is true but R is false.", ta: "(C) A உண்மை ஆனால் R தவறு." },
                        { en: "(D) A is false but R is true.", ta: "(D) A தவறு ஆனால் R உண்மை." }
                    ]
                },
                {
                    type: "question",
                    question: {
                        id: "ar1",
                        type: "assertion-reason",
                        optionA: { en: "Assertion (A): Molarity of a solution changes with temperature.", ta: "கூற்று (A): ஒரு கரைசலின் மோலார் செறிமானம் வெப்பநிலையுடன் மாறுகிறது." },
                        optionR: { en: "Reason (R): Volume of the solution changes with temperature.", ta: "காரணம் (R): கரைசலின் பருமன் வெப்பநிலையுடன் மாறுகிறது." },
                        correctAnswer: "A",
                        explanation: { en: "Molarity is defined as moles of solute per volume of solution. As temperature changes, the volume of the solution expands or contracts, thereby changing the molarity. Thus, both A and R are true, and R is the correct explanation of A.", ta: "மோலார் செறிமானம் என்பது கரைசலின் பருமனுக்கு மோல்களின் கரைபொருள் என வரையறுக்கப்படுகிறது. வெப்பநிலை மாறும்போது, கரைசலின் பருமன் விரிவடையும் அல்லது சுருங்கும், இதன் மூலம் மோலார் செறிமானம் மாறும். எனவே, A மற்றும் R இரண்டும் உண்மை, மற்றும் R என்பது A இன் சரியான விளக்கம்." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "ar2",
                        type: "assertion-reason",
                        optionA: { en: "Assertion (A): The boiling point of a solution is higher than that of the pure solvent.", ta: "கூற்று (A): ஒரு கரைசலின் கொதிநிலை தூய கரைப்பானை விட அதிகமாகும்." },
                        optionR: { en: "Reason (R): The vapour pressure of a solution is lower than that of the pure solvent.", ta: "காரணம் (R): ஒரு கரைசலின் ஆவி அழுத்தம் தூய கரைப்பானை விட குறைவாகும்." },
                        correctAnswer: "A",
                        explanation: { en: "When a non-volatile solute is added to a solvent, the vapour pressure of the solution decreases. To boil, the solution needs to reach a higher temperature for its vapour pressure to equal the atmospheric pressure. Thus, both A and R are true, and R is the correct explanation of A.", ta: "ஒரு ஆவியாகாத கரைபொருள் ஒரு கரைப்பானில் சேர்க்கப்படும்போது, கரைசலின் ஆவி அழுத்தம் குறைகிறது. கொதிக்க, கரைசலின் ஆவி அழுத்தம் வளிமண்டல அழுத்தத்திற்கு சமமாக இருக்க ஒரு அதிக வெப்பநிலையை அடைய வேண்டும். எனவே, A மற்றும் R இரண்டும் உண்மை, மற்றும் R என்பது A இன் சரியான விளக்கம்." },
                        neetFrequency: 5
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "ar3",
                        type: "assertion-reason",
                        optionA: { en: "Assertion (A): Osmotic pressure is a colligative property.", ta: "கூற்று (A): சவ்வூடுபரவல் அழுத்தம் ஒரு பிணைப்புப் பண்பு." },
                        optionR: { en: "Reason (R): Osmotic pressure depends on the number of solute particles in the solution.", ta: "காரணம் (R): சவ்வூடுபரவல் அழுத்தம் கரைசலில் உள்ள கரைபொருள் துகள்களின் எண்ணிக்கையைப் பொறுத்தது." },
                        correctAnswer: "A",
                        explanation: { en: "Colligative properties are those that depend only on the number of solute particles and not on their nature. Osmotic pressure (\(\Pi = CRT\)) directly depends on the molar concentration (C), which is related to the number of moles of solute. Thus, both A and R are true, and R is the correct explanation of A.", ta: "பிணைப்புப் பண்புகள் என்பவை கரைபொருள் துகள்களின் எண்ணிக்கையை மட்டுமே சார்ந்துள்ளது, அவற்றின் தன்மையை அல்ல. சவ்வூடுபரவல் அழுத்தம் (\(\Pi = CRT\)) மோலார் செறிவை (C) நேரடியாக சார்ந்துள்ளது, இது கரைபொருளின் மோல்களின் எண்ணிக்கையுடன் தொடர்புடையது. எனவே, A மற்றும் R இரண்டும் உண்மை, மற்றும் R என்பது A இன் சரியான விளக்கம்." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "ar4",
                        type: "assertion-reason",
                        optionA: { en: "Assertion (A): Ideal solutions show positive or negative deviations from Raoult's Law.", ta: "கூற்று (A): நல்லியல்பு கரைசல்கள் ரவுல்ட் விதியிலிருந்து நேர்மறை அல்லது எதிர்மறை விலகல்களைக் காட்டுகின்றன." },
                        optionR: { en: "Reason (R): In ideal solutions, intermolecular forces between components are similar to those in pure components.", ta: "காரணம் (R): நல்லியல்பு கரைசல்களில், கூறுகளுக்கு இடையேயான மூலக்கூறிடை விசைகள் தூய கூறுகளில் உள்ளவற்றுக்கு ஒத்தவை." },
                        correctAnswer: "D",
                        explanation: { en: "Assertion (A) is false because ideal solutions obey Raoult's Law over the entire range of concentration and do not show any deviation. Non-ideal solutions show deviations. Reason (R) is true; in ideal solutions, A-B interactions are similar to A-A and B-B interactions.", ta: "கூற்று (A) தவறானது, ஏனெனில் நல்லியல்பு கரைசல்கள் செறிவு வரம்பு முழுவதும் ரவுல்ட் விதியைப் பின்பற்றும் மற்றும் எந்த விலகலையும் காட்டாது. நல்லியல்பு அல்லாத கரைசல்கள் விலகல்களைக் காட்டுகின்றன. காரணம் (R) உண்மை; நல்லியல்பு கரைசல்களில், A-B தொடர்புகள் A-A மற்றும் B-B தொடர்புகளுக்கு ஒத்தவை." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "ar5",
                        type: "assertion-reason",
                        optionA: { en: "Assertion (A): For an electrolyte like NaCl, the van't Hoff factor (i) is greater than 1.", ta: "கூற்று (A): NaCl போன்ற ஒரு மின்பகுளிக்கு, வான்ட் ஹாஃப் காரணி (i) 1 ஐ விட பெரியது." },
                        optionR: { en: "Reason (R): NaCl dissociates into \(Na^+\) and \(Cl^-\) ions in aqueous solution, increasing the number of particles.", ta: "காரணம் (R): NaCl நீர்த்த கரைசலில் \(Na^+\) மற்றும் \(Cl^-\) அயனிகளாக பிரிகிறது, துகள்களின் எண்ணிக்கையை அதிகரிக்கிறது." },
                        correctAnswer: "A",
                        explanation: { en: "When NaCl dissolves in water, it dissociates into two ions (\(Na^+\) and \(Cl^-\)). This increases the number of particles in the solution, leading to an 'i' value greater than 1. For 100% dissociation, i = 2 for NaCl. Thus, both A and R are true, and R is the correct explanation of A.", ta: "NaCl நீரில் கரையும்போது, அது இரண்டு அயனிகளாக (\(Na^+\) மற்றும் \(Cl^-\)) பிரிகிறது. இது கரைசலில் உள்ள துகள்களின் எண்ணிக்கையை அதிகரித்து, 1 ஐ விட பெரிய 'i' மதிப்பிற்கு வழிவகுக்கிறது. 100% பிரிதலுக்கு, NaCl க்கு i = 2. எனவே, A மற்றும் R இரண்டும் உண்மை, மற்றும் R என்பது A இன் சரியான விளக்கம்." },
                        neetFrequency: 5
                    }
                },
                {
                    type: "heading",
                    en: "Match the Columns",
                    ta: "பொருத்துக"
                },
                {
                    type: "question",
                    question: {
                        id: "mtc1",
                        type: "match-the-column",
                        question: { en: "Match the concentration terms with their definitions.", ta: "செறிவுச் சொற்களை அவற்றின் வரையறைகளுடன் பொருத்துக." },
                        columns: {
                            column1: [
                                { en: "(i) Molarity", ta: "(i) மோலார் செறிமானம்" },
                                { en: "(ii) Molality", ta: "(ii) மோலால் செறிமானம்" },
                                { en: "(iii) Mole fraction", ta: "(iii) மோல் பின்னம்" },
                                { en: "(iv) Mass percentage", ta: "(iv) நிறை சதவீதம்" }
                            ],
                            column2: [
                                { en: "(a) Moles of solute per kg of solvent", ta: "(a) ஒரு கிலோகிராம் கரைப்பானுக்கு மோல்களின் கரைபொருள்" },
                                { en: "(b) Moles of solute per litre of solution", ta: "(b) ஒரு லிட்டர் கரைசலுக்கு மோல்களின் கரைபொருள்" },
                                { en: "(c) Ratio of moles of a component to total moles", ta: "(c) ஒரு கூறின் மோல்களுக்கும் மொத்த மோல்களுக்கும் உள்ள விகிதம்" },
                                { en: "(d) Mass of component in 100 g of solution", ta: "(d) 100 கிராம் கரைசலில் உள்ள கூறின் நிறை" }
                            ]
                        },
                        matchPairs: { "i": "b", "ii": "a", "iii": "c", "iv": "d" },
                        correctAnswer: "i-b,ii-a,iii-c,iv-d",
                        explanation: { en: "Molarity is moles of solute per litre of solution. Molality is moles of solute per kg of solvent. Mole fraction is the ratio of moles of a component to total moles. Mass percentage is mass of component in 100 g of solution.", ta: "மோலார் செறிமானம் ஒரு லிட்டர் கரைசலுக்கு மோல்களின் கரைபொருள். மோலால் செறிமானம் ஒரு கிலோகிராம் கரைப்பானுக்கு மோல்களின் கரைபொருள். மோல் பின்னம் ஒரு கூறின் மோல்களுக்கும் மொத்த மோல்களுக்கும் உள்ள விகிதம். நிறை சதவீதம் 100 கிராம் கரைசலில் உள்ள கூறின் நிறை." },
                        neetFrequency: 3
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mtc2",
                        type: "match-the-column",
                        question: { en: "Match the colligative properties with their corresponding formulas (for non-electrolyte).", ta: "பிணைப்புப் பண்புகளை அவற்றின் தொடர்புடைய சூத்திரங்களுடன் (மின்பகுளி அல்லாதவற்றுக்கு) பொருத்துக." },
                        columns: {
                            column1: [
                                { en: "(i) Relative lowering of vapour pressure", ta: "(i) ஆவி அழுத்தத்தின் சார்பு குறைவு" },
                                { en: "(ii) Elevation in boiling point", ta: "(ii) கொதிநிலையில் உயர்வு" },
                                { en: "(iii) Depression in freezing point", ta: "(iii) உறைநிலையில் தாழ்வு" },
                                { en: "(iv) Osmotic pressure", ta: "(iv) சவ்வூடுபரவல் அழுத்தம்" }
                            ],
                            column2: [
                                { en: "(a) \(\Delta T_f = K_f m\)", ta: "(a) \(\Delta T_f = K_f m\)" },
                                { en: "(b) \(\Pi = CRT\)", ta: "(b) \(\Pi = CRT\)" },
                                { en: "(c) \(\frac{P^0 - P_s}{P^0} = \chi_{\text{solute}}\) ", ta: "(c) \(\frac{P^0 - P_s}{P^0} = \chi_{\text{கரைபொருள்}}\) " },
                                { en: "(d) \(\Delta T_b = K_b m\)", ta: "(d) \(\Delta T_b = K_b m\)" }
                            ]
                        },
                        matchPairs: { "i": "c", "ii": "d", "iii": "a", "iv": "b" },
                        correctAnswer: "i-c,ii-d,iii-a,iv-b",
                        explanation: { en: "These are the standard formulas for colligative properties for non-electrolytes.", ta: "இவை மின்பகுளிகள் அல்லாதவற்றுக்கான பிணைப்புப் பண்புகளுக்கான நிலையான சூத்திரங்கள்." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mtc3",
                        type: "match-the-column",
                        question: { en: "Match the solutions with their type of deviation from Raoult's Law.", ta: "கரைசல்களை ரவுல்ட் விதியிலிருந்து அவற்றின் விலகல் வகையுடன் பொருத்துக." },
                        columns: {
                            column1: [
                                { en: "(i) Ethanol + Acetone", ta: "(i) எத்தனால் + அசெட்டோன்" },
                                { en: "(ii) Chloroform + Acetone", ta: "(ii) குளோரோஃபார்ம் + அசெட்டோன்" },
                                { en: "(iii) Benzene + Toluene", ta: "(iii) பென்சீன் + டோலுயீன்" },
                                { en: "(iv) Nitric acid + Water", ta: "(iv) நைட்ரிக் அமிலம் + நீர்" }
                            ],
                            column2: [
                                { en: "(a) Negative deviation", ta: "(a) எதிர்மறை விலகல்" },
                                { en: "(b) Ideal solution", ta: "(b) நல்லியல்பு கரைசல்" },
                                { en: "(c) Positive deviation", ta: "(c) நேர்மறை விலகல்" },
                                { en: "(d) Maximum boiling azeotrope", ta: "(d) அதிகபட்ச கொதிநிலை அசட்ரோப்" }
                            ]
                        },
                        matchPairs: { "i": "c", "ii": "a", "iii": "b", "iv": "d" },
                        correctAnswer: "i-c,ii-a,iii-b,iv-d",
                        explanation: { en: "Ethanol + Acetone shows positive deviation. Chloroform + Acetone shows negative deviation. Benzene + Toluene is an ideal solution. Nitric acid + Water forms a maximum boiling azeotrope, which also shows negative deviation but more strongly.", ta: "எத்தனால் + அசெட்டோன் நேர்மறை விலகலைக் காட்டுகிறது. குளோரோஃபார்ம் + அசெட்டோன் எதிர்மறை விலகலைக் காட்டுகிறது. பென்சீன் + டோலுயீன் ஒரு நல்லியல்பு கரைசல். நைட்ரிக் அமிலம் + நீர் ஒரு அதிகபட்ச கொதிநிலை அசட்ரோபை உருவாக்குகிறது, இது எதிர்மறை விலகலையும் காட்டுகிறது, ஆனால் இன்னும் வலிமையாக." },
                        neetFrequency: 4
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mtc4",
                        type: "match-the-column",
                        question: { en: "Match the solutions with their van't Hoff factor (i) (assuming complete dissociation/association).", ta: "கரைசல்களை அவற்றின் வான்ட் ஹாஃப் காரணி (i) உடன் பொருத்துக (முழுமையான பிரிதல்/சேர்தலைக் கருதுக)." },
                        columns: {
                            column1: [
                                { en: "(i) Urea", ta: "(i) யூரியா" },
                                { en: "(ii) KCl", ta: "(ii) KCl" },
                                { en: "(iii) \(K_2SO_4\)", ta: "(iii) \(K_2SO_4\)" },
                                { en: "(iv) Acetic acid in benzene (dimer)", ta: "(iv) பென்சீனில் அசிட்டிக் அமிலம் (இருமம்)" }
                            ],
                            column2: [
                                { en: "(a) 3", ta: "(a) 3" },
                                { en: "(b) 1", ta: "(b) 1" },
                                { en: "(c) 0.5", ta: "(c) 0.5" },
                                { en: "(d) 2", ta: "(d) 2" }
                            ]
                        },
                        matchPairs: { "i": "b", "ii": "d", "iii": "a", "iv": "c" },
                        correctAnswer: "i-b,ii-d,iii-a,iv-c",
                        explanation: { en: "Urea is a non-electrolyte, so i=1. KCl dissociates into 2 ions, so i=2. \(K_2SO_4\) dissociates into 3 ions, so i=3. Acetic acid in benzene dimerizes, so two molecules form one particle, leading to i=0.5.", ta: "யூரியா ஒரு மின்பகுளி அல்லாதது, எனவே i=1. KCl 2 அயனிகளாக பிரிகிறது, எனவே i=2. \(K_2SO_4\) 3 அயனிகளாக பிரிகிறது, எனவே i=3. பென்சீனில் உள்ள அசிட்டிக் அமிலம் இருமமாகிறது, எனவே இரண்டு மூலக்கூறுகள் ஒரு துகளை உருவாக்குகின்றன, இது i=0.5 க்கு வழிவகுக்கிறது." },
                        neetFrequency: 5
                    }
                },
                {
                    type: "question",
                    question: {
                        id: "mtc5",
                        type: "match-the-column",
                        question: { en: "Match the phenomena with the related concepts.", ta: "நிகழ்வுகளை தொடர்புடைய கருத்துக்களுடன் பொருத்துக." },
                        columns: {
                            column1: [
                                { en: "(i) Soda water bottle opened at room temp", ta: "(i) அறை வெப்பநிலையில் சோடா நீர் பாட்டில் திறக்கப்பட்டது" },
                                { en: "(ii) Drying of salted fish", ta: "(ii) உப்பு சேர்க்கப்பட்ட மீன் உலர்த்துதல்" },
                                { en: "(iii) IV fluids are isotonic with blood", ta: "(iii) நரம்புவழி திரவங்கள் இரத்தத்துடன் சம அளவு அழுத்தம் கொண்டவை" },
                                { en: "(iv) Salt added to roads in winter", ta: "(iv) குளிர்காலத்தில் சாலைகளில் உப்பு சேர்க்கப்படுகிறது" }
                            ],
                            column2: [
                                { en: "(a) Osmosis/Osmotic Pressure", ta: "(a) சவ்வூடுபரவல்/சவ்வூடுபரவல் அழுத்தம்" },
                                { en: "(b) Henry's Law", ta: "(b) ஹென்றி விதி" },
                                { en: "(c) Depression in freezing point", ta: "(c) உறைநிலையில் தாழ்வு" },
                                { en: "(d) Reverse osmosis", ta: "(d) தலைகீழ் சவ்வூடுபரவல்" }
                            ]
                        },
                        matchPairs: { "i": "b", "ii": "a", "iii": "a", "iv": "c" },
                        correctAnswer: "i-b,ii-a,iii-a,iv-c",
                        explanation: { en: "(i) Opening a soda bottle reduces pressure, decreasing \(CO_2\) solubility (Henry's Law). (ii) Salting fish causes water to move out of fish cells (osmosis). (iii) IV fluids must be isotonic with blood to prevent cell damage (osmosis). (iv) Salt lowers the freezing point of water, preventing ice formation (depression in freezing point).", ta: "(i) சோடா பாட்டிலைத் திறப்பது அழுத்தத்தைக் குறைத்து, \(CO_2\) கரைதிறனைக் குறைக்கிறது (ஹென்றி விதி). (ii) மீன்களுக்கு உப்பு சேர்ப்பது மீன் செல்களிலிருந்து நீரை வெளியேற்றுகிறது (சவ்வூடுபரவல்). (iii) செல் சேதத்தைத் தடுக்க நரம்புவழி திரவங்கள் இரத்தத்துடன் சம அளவு அழுத்தம் கொண்டதாக இருக்க வேண்டும் (சவ்வூடுபரவல்). (iv) உப்பு நீரின் உறைநிலையைக் குறைத்து, பனிக்கட்டி உருவாவதைத் தடுக்கிறது (உறைநிலையில் தாழ்வு)." },
                        neetFrequency: 4
                    }
                }
            ]
        },
        {
            id: "virtual-lab",
            title: { en: "Virtual Lab", ta: "மெய்நிகர் ஆய்வகம்" },
            type: "virtual-lab",
            content: [
                {
                    type: "paragraph",
                    en: "Explore the concepts of colligative properties through interactive simulations. In this virtual lab, you can prepare solutions of varying concentrations and observe changes in boiling point, freezing point, and osmotic pressure. Experiment with different solutes (electrolytes vs. non-electrolytes) and solvents to understand the impact on these properties. The lab provides detailed data collection and analysis tools, allowing you to plot graphs and verify theoretical predictions based on Raoult's law and van't Hoff factor. **Key experiments include:**\n*   Measuring boiling point elevation for different molalities.\n*   Observing freezing point depression for various solutions.\n*   Simulating osmosis across a semi-permeable membrane and calculating osmotic pressure.\n*   Investigating the effect of van't Hoff factor on colligative properties for dissociating and associating solutes.\nThis immersive experience helps in visualizing abstract concepts and reinforcing your understanding of solution chemistry.",
                    ta: "ஊடாடும் உருவகப்படுத்துதல்கள் மூலம் பிணைப்புப் பண்புகளின் கருத்துக்களை ஆராயுங்கள். இந்த மெய்நிகர் ஆய்வகத்தில், நீங்கள் பல்வேறு செறிவுகளின் கரைசல்களைத் தயாரித்து, கொதிநிலை, உறைநிலை மற்றும் சவ்வூடுபரவல் அழுத்தத்தில் ஏற்படும் மாற்றங்களைக் கவனிக்கலாம். இந்த பண்புகளின் தாக்கத்தைப் புரிந்துகொள்ள வெவ்வேறு கரைபொருட்கள் (மின்பகுளிகள் மற்றும் மின்பகுளி அல்லாதவை) மற்றும் கரைப்பான்களுடன் பரிசோதனை செய்யுங்கள். இந்த ஆய்வகம் விரிவான தரவு சேகரிப்பு மற்றும் பகுப்பாய்வு கருவிகளை வழங்குகிறது, இது வரைபடங்களை உருவாக்கவும், ரவுல்ட் விதி மற்றும் வான்ட் ஹாஃப் காரணி அடிப்படையிலான தத்துவார்த்த கணிப்புகளை சரிபார்க்கவும் உங்களை அனுமதிக்கிறது. **முக்கிய சோதனைகளில் அடங்குபவை:**\n*   வெவ்வேறு மோலால் செறிவுகளுக்கான கொதிநிலை உயர்வை அளவிடுதல்.\n*   பல்வேறு கரைசல்களுக்கான உறைநிலை தாழ்வை உற்றுநோக்குதல்.\n*   அரை ஊடுருவும் சவ்வு வழியாக சவ்வூடுபரவலை உருவகப்படுத்துதல் மற்றும் சவ்வூடுபரவல் அழுத்தத்தைக் கணக்கிடுதல்.\n*   பிரித்தல் மற்றும் சேர்தல் கரைபொருள்களுக்கு பிணைப்புப் பண்புகளில் வான்ட் ஹாஃப் காரணியின் விளைவை ஆராய்தல்.\nஇந்த ஆழ்ந்த அனுபவம் சுருக்கமான கருத்துக்களை காட்சிப்படுத்தவும், கரைசலியல் வேதியியலில் உங்கள் புரிதலை வலுப்படுத்தவும் உதவுகிறது."
                }
            ]
        },
        {
            id: "3d-diagrams",
            title: { en: "3D Diagrams", ta: "3D வரைபடங்கள்" },
            type: "3d-diagram",
            content: [
                {
                    type: "paragraph",
                    en: "Visualize the molecular-level interactions and structures within solutions with our high-quality 3D diagrams. These diagrams provide an in-depth view of how solute and solvent molecules interact, and how these interactions influence the macroscopic properties of solutions. **Key 3D models include:**\n*   **Solvation process:** Witness how polar and non-polar solvents interact with different types of solutes.\n*   **Crystal lattice dissolution:** Observe the step-by-step process of an ionic compound dissolving in water.\n*   **Hydrogen bonding in non-ideal solutions:** See how stronger or weaker hydrogen bonds lead to deviations from Raoult's Law (e.g., in ethanol-water or chloroform-acetone mixtures).\n*   **Molecular arrangements in ideal vs. non-ideal solutions:** Compare the spatial arrangement of molecules and understand the factors contributing to ideal behavior or deviations.\nThese interactive 3D models enhance your spatial reasoning and help you grasp complex concepts related to solution formation and behavior more effectively.",
                    ta: "எங்கள் உயர்தர 3D வரைபடங்கள் மூலம் கரைசல்களில் உள்ள மூலக்கூறிடை தொடர்புகள் மற்றும் கட்டமைப்புகளைக் காட்சிப்படுத்தவும். இந்த வரைபடங்கள் கரைபொருள் மற்றும் கரைப்பான் மூலக்கூறுகள் எவ்வாறு தொடர்பு கொள்கின்றன, மற்றும் இந்த தொடர்புகள் கரைசல்களின் பருமனான பண்புகளை எவ்வாறு பாதிக்கின்றன என்பதைப் பற்றிய ஆழமான பார்வையை வழங்குகிறது. **முக்கிய 3D மாதிரிகளில் அடங்குபவை:**\n*   **கரைதல் செயல்முறை:** துருவ மற்றும் துருவமற்ற கரைப்பான்கள் வெவ்வேறு வகையான கரைபொருட்களுடன் எவ்வாறு தொடர்பு கொள்கின்றன என்பதைப் பாருங்கள்.\n*   **படிக லேட்டிஸ் கரைதல்:** ஒரு அயனி சேர்மம் நீரில் கரையும் படிநிலையான செயல்முறையைக் கவனிக்கவும்.\n*   **நல்லியல்பு அல்லாத கரைசல்களில் ஹைட்ரஜன் பிணைப்பு:** வலிமையான அல்லது பலவீனமான ஹைட்ரஜன் பிணைப்புகள் ரவுல்ட் விதியிலிருந்து விலகல்களுக்கு எவ்வாறு வழிவகுக்கின்றன என்பதைப் பாருங்கள் (எ.கா., எத்தனால்-நீர் அல்லது குளோரோஃபார்ம்-அசெட்டோன் கலவைகளில்).\n*   **நல்லியல்பு மற்றும் நல்லியல்பு அல்லாத கரைசல்களில் மூலக்கூறு ஏற்பாடுகள்:** மூலக்கூறுகளின் இடஞ்சார்ந்த ஏற்பாட்டை ஒப்பிட்டு, நல்லியல்பு நடத்தை அல்லது விலகல்களுக்கு பங்களிக்கும் காரணிகளைப் புரிந்து கொள்ளுங்கள்.\nஇந்த ஊடாடும் 3D மாதிரிகள் உங்கள் இடஞ்சார்ந்த பகுத்தறிவை மேம்படுத்துகின்றன மற்றும் கரைசல் உருவாக்கம் மற்றும் நடத்தை தொடர்பான சிக்கலான கருத்துக்களை மிகவும் திறம்பட புரிந்துகொள்ள உதவுகின்றன."
                }
            ]
        }
    ]
};

export default neetModule;
