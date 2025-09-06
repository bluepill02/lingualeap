
import type { NeetModule } from '@/lib/types';

export const equilibrium: NeetModule = {
    id: 'neet-chemistry-equilibrium',
    title: 'Chemistry - Equilibrium (சமநிலை)',
    chapter: 'Equilibrium',
    subject: 'Chemistry',
    learningObjectives: [
        "Understand the concept of equilibrium in physical and chemical processes.",
        "Apply the Law of Mass Action and define the equilibrium constant (Kc and Kp).",
        "State and apply Le Chatelier's principle to predict the effect of changes in concentration, temperature, and pressure on a system at equilibrium.",
        "Understand different concepts of acids and bases (Arrhenius, Bronsted-Lowry, Lewis).",
        "Define pH and calculate the pH of solutions.",
        "Analyze the ionization of weak acids and bases and the concept of buffer solutions.",
        "Define and apply the concept of solubility product (Ksp)."
    ],
    prerequisites: [
        "Stoichiometry and mole concept.",
        "Basic understanding of chemical reactions.",
        "Concepts from Thermodynamics."
    ],
    conceptOverview: "Equilibrium is a dynamic state where the rates of forward and reverse processes are equal, resulting in no net change in the system's macroscopic properties. This chapter covers two main types of equilibrium: chemical equilibrium (in reversible reactions) and ionic equilibrium (in solutions of acids, bases, and salts). We will explore the Law of Mass Action and Le Chatelier's principle, which help us predict and control the outcomes of reversible reactions. The second part delves into ionic equilibrium, defining acids and bases, the pH scale, buffer solutions, and the solubility of sparingly soluble salts. These concepts are fundamental to countless processes in chemistry, biology, and medicine.",
    tamilConnection: "ஒரு வேதிவினை முன்னோக்கிச் செல்லும் வேகமும், பின்னோக்கிச் செல்லும் வேகமும் சமமாக இருக்கும்போது, அது சமநிலையை அடைகிறது. ஒரு வினையின் சமநிலையை செறிவு, வெப்பநிலை, அழுத்தம் போன்ற காரணிகளை மாற்றுவதன் மூலம் எவ்வாறு மாற்றலாம் என்பதை 'லெ ஷாட்லியே தத்துவம்' விளக்குகிறது. இது வேதித் தொழிற்சாலைகளில் உற்பத்தியை அதிகரிக்கப் பயன்படுகிறது.",
    culturalContext: "The pH of soil is a critical factor in agriculture in regions like the Kaveri delta. Some crops prefer acidic soil, while others prefer alkaline soil. Understanding the principles of ionic equilibrium, acids, bases, and buffers, as discussed in this chapter, is essential for farmers to manage soil health and maximize crop yield.",
    syllabusMapping: [
        {
            topic: "Equilibrium",
            tnBoardChapter: "11th Std Chemistry - Vol 2, Chapter 8 & 9 (Chemical and Ionic Equilibrium)",
            ncertReference: "Class 11 Chemistry - Part 1, Chapter 7: Equilibrium",
            notes: "A very important and often challenging chapter. Le Chatelier's principle, calculation of pH, buffer solutions, and solubility product are high-yield topics for NEET. Practice a wide variety of numerical problems.",
            mappingDescription: '11th Std Chemistry - Vol 2, Chapters 8 & 9 map to NEET Chemistry Unit 7'
        }
    ],
    conceptNotes: [
        {
            heading: {
                english: '1. Chemical Equilibrium and Equilibrium Constant',
                tamil: '1. வேதிச் சமநிலை மற்றும் சமநிலை மாறிலி'
            },
            content: [
                {
                    english: `**Reversible Reaction:** A reaction that can proceed in both forward and backward directions.
*   **Equilibrium:** The state in a reversible reaction where the rate of the forward reaction equals the rate of the backward reaction.
*   **Law of Mass Action:** The rate of a chemical reaction is directly proportional to the product of the molar concentrations of the reactants.
*   **Equilibrium Constant ($K_c$):** For a general reaction $aA + bB \\rightleftharpoons cC + dD$, the equilibrium constant in terms of concentration is:
$$ K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b} $$
*   **Equilibrium Constant ($K_p$):** In terms of partial pressures for gaseous reactions:
$$ K_p = \\frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b} $$
*   **Relationship between $K_p$ and $K_c$:** $K_p = K_c(RT)^{\\Delta n_g}$, where $\\Delta n_g = (c+d) - (a+b)$ is the change in the number of moles of gaseous components.`,
                    tamil: `**மீள்வினை:** முன்னோக்கி மற்றும் பின்னோக்கி ஆகிய இரு திசைகளிலும் நிகழக்கூடிய ஒரு வினை.
*   **சமநிலை:** ஒரு மீள்வினையில், முன்னோக்கு வினையின் வேகம் பின்னோக்கு வினையின் வேகத்திற்கு சமமாக இருக்கும் நிலை.
*   **நிறை தாக்க விதி:** ஒரு வேதிவினையின் வேகம் வினைபடு பொருட்களின் மோலார் செறிவுகளின் பெருக்கற்பலனுக்கு நேர்த்தகவில் இருக்கும்.
*   **சமநிலை மாறிலி ($K_c$):** $aA + bB \\rightleftharpoons cC + dD$ என்ற பொதுவான வினைக்கு, செறிவுகளின் அடிப்படையில் சமநிலை மாறிலி:
*   **சமநிலை மாறிலி ($K_p$):** வாயு வினைகளுக்கு பகுதி அழுத்தங்களின் அடிப்படையில்:
*   **$K_p$ மற்றும் $K_c$ க்கு இடையேயான தொடர்பு:** $K_p = K_c(RT)^{\\Delta n_g}$, இங்கு $\\Delta n_g$ என்பது வாயு கூறுகளின் மோல்களின் எண்ணிக்கையில் ஏற்படும் மாற்றம்.`
                }
            ]
        },
        {
            heading: {
                english: '2. Le Chatelier\'s Principle (லெ ஷாட்லியே தத்துவம்)',
                tamil: '2. லெ ஷாட்லியே தத்துவம்'
            },
            content: [
                {
                    english: `If a system at equilibrium is subjected to a change in concentration, pressure, or temperature, the equilibrium shifts in a direction that tends to nullify the effect of the change.
*   **Effect of Concentration:** Increasing reactant concentration shifts equilibrium forward. Increasing product concentration shifts it backward.
*   **Effect of Pressure:** Increasing pressure (by decreasing volume) shifts the equilibrium towards the side with fewer moles of gas.
*   **Effect of Temperature:** For an exothermic reaction ($\\Delta H$ is negative), increasing temperature shifts equilibrium backward. For an endothermic reaction ($\\Delta H$ is positive), increasing temperature shifts it forward.
*   **Effect of Catalyst:** A catalyst increases the rates of both forward and backward reactions equally. It helps attain equilibrium faster but does not change the equilibrium constant or the position of equilibrium.`,
                    tamil: `சமநிலையில் உள்ள ஒரு அமைப்பின் மீது செறிவு, அழுத்தம் அல்லது வெப்பநிலையில் மாற்றம் செய்யப்பட்டால், சமநிலையானது அந்த மாற்றத்தின் விளைவை நீக்கும் திசையில் நகரும்.
*   **செறிவின் விளைவு:** வினைபடு பொருளின் செறிவை அதிகரித்தால், சமநிலை முன்னோக்கி நகரும். வினைவிளை பொருளின் செறிவை அதிகரித்தால், அது பின்னோக்கி நகரும்.
*   **அழுத்தத்தின் விளைவு:** அழுத்தத்தை அதிகரிப்பது (கனஅளவைக் குறைப்பதன் மூலம்) சமநிலையை குறைந்த வாயு மோல்கள் உள்ள பக்கத்திற்கு நகர்த்தும்.
*   **வெப்பநிலையின் விளைவு:** ஒரு வெப்ப உமிழ் வினைக்கு ($\\Delta H$ எதிர்மறை), வெப்பநிலையை அதிகரிப்பது சமநிலையை பின்னோக்கி நகர்த்தும். ஒரு வெப்பம் கொள் வினைக்கு ($\\Delta H$ நேர்மறை), வெப்பநிலையை அதிகரிப்பது அதை முன்னோக்கி நகர்த்தும்.
*   **வினைவேகமாற்றியின் விளைவு:** ஒரு வினைவேகமாற்றி முன்னோக்கு மற்றும் பின்னோக்கு வினைகளின் வேகங்களை சமமாக அதிகரிக்கிறது. இது சமநிலையை விரைவாக அடைய உதவுகிறது, ஆனால் சமநிலை மாறிலி அல்லது சமநிலை நிலையை மாற்றுவதில்லை.`
                }
            ]
        },
        {
            heading: {
                english: '3. Ionic Equilibrium: Acids, Bases, and pH',
                tamil: '3. அயனிச் சமநிலை: அமிலங்கள், காரங்கள் மற்றும் pH'
            },
            content: [
                {
                    english: `**Arrhenius Concept:** Acids give H⁺ ions, bases give OH⁻ ions in water.
*   **Brønsted-Lowry Concept:** Acids are proton (H⁺) donors, bases are proton acceptors.
*   **Lewis Concept:** Acids are electron-pair acceptors, bases are electron-pair donors.
*   **Ionic Product of Water ($K_w$):** $K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}$ at 25°C.
*   **pH Scale:** A measure of acidity. $pH = -\\log[H^+]$.
    *   pH < 7: Acidic (அமிலத்தன்மை)
    *   pH > 7: Basic (காரத்தன்மை)
    *   pH = 7: Neutral (நடுநிலை)`,
                    tamil: `**அர்ஹீனியஸ் கருத்து:** அமிலங்கள் நீரில் H⁺ அயனிகளையும், காரங்கள் OH⁻ அயனிகளையும் கொடுக்கின்றன.
*   **பிரான்ஸ்டெட்-லௌரி கருத்து:** அமிலங்கள் புரோட்டான் (H⁺) donneurs, காரங்கள் புரோட்டான் acceptors.
*   **லூயிஸ் கருத்து:** அமிலங்கள் எலக்ட்ரான்-ஜோடி acceptors, காரங்கள் எலக்ட்ரான்-ஜோடி donneurs.
*   **நீரின் அயனிப் பெருக்கம் ($K_w$):** $K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}$ at 25°C.
*   **pH அளவு:** அமிலத்தன்மையின் ஒரு அளவீடு. $pH = -\\log[H^+]$.`
                }
            ]
        },
        {
            heading: {
                english: '4. Buffer Solutions and Solubility Product',
                tamil: '4. தாங்கல் கரைசல்கள் மற்றும் கரைதிறன் பெருக்கம்'
            },
            content: [
                {
                    english: `**Buffer Solution (தாங்கல் கரைசல்):** A solution which resists a change in its pH on dilution or on addition of small amounts of acid or alkali.
*   **Acidic Buffer:** A mixture of a weak acid and its salt with a strong base (e.g., CH₃COOH + CH₃COONa).
*   **Basic Buffer:** A mixture of a weak base and its salt with a strong acid (e.g., NH₄OH + NH₄Cl).
*   **Henderson-Hasselbalch Equation:** For an acidic buffer, $pH = pK_a + \\log \\frac{[Salt]}{[Acid]}$.
*   **Solubility Product ($K_{sp}$) (கரைதிறன் பெருக்கம்):** For a sparingly soluble salt, it is the product of the molar concentrations of its ions in a saturated solution, with each concentration term raised to the power equal to the number of ions produced.
    *   For $A_x B_y \\rightleftharpoons xA^{y+} + yB^{x-}$, $K_{sp} = [A^{y+}]^x [B^{x-}]^y$.
*   **Common Ion Effect (பொது அயனி விளைவு):** The suppression of the dissociation of a weak electrolyte by the addition of a strong electrolyte having an ion in common. This is the principle behind selective precipitation.`,
                    tamil: `**தாங்கல் கரைசல்:** நீர்த்தல் அல்லது சிறிய அளவு அமிலம் அல்லது காரத்தைச் சேர்க்கும்போது அதன் pH மாற்றத்தை எதிர்க்கும் ஒரு கரைசல்.
*   **அமில தாங்கல்:** ஒரு வலிமை குறைந்த அமிலம் மற்றும் ஒரு வலிமையான காரத்துடன் அதன் உப்பு ஆகியவற்றின் கலவை.
*   **கார தாங்கல்:** ஒரு வலிமை குறைந்த காரம் மற்றும் ஒரு வலிமையான அமிலத்துடன் அதன் உப்பு ஆகியவற்றின் கலவை.
*   **ஹெண்டர்சன்-ஹாசல்பால்ச் சமன்பாடு:** ஒரு அமில தாங்கலுக்கு, $pH = pK_a + \\log \\frac{[உப்பு]}{[அமிலம்]}$.
*   **கரைதிறன் பெருக்கம் ($K_{sp}$):** குறைவாக கரையும் ஒரு உப்பிற்கு, இது ஒரு தெவிட்டிய கரைசலில் உள்ள அதன் அயனிகளின் மோலார் செறிவுகளின் பெருக்கற்பலன் ஆகும், ஒவ்வொரு செறிவு உறுப்பும் உற்பத்தி செய்யப்படும் அயனிகளின் எண்ணிக்கைக்கு சமமான அடுக்குக்கு உயர்த்தப்படுகிறது.
*   **பொது அயனி விளைவு:** ஒரு பொதுவான அயனியைக் கொண்ட ஒரு வலிமையான மின்பகுளியைச் சேர்ப்பதன் மூலம் ஒரு வலிமை குறைந்த மின்பகுளியின் பிரிகையை அடக்குதல். இதுவே தேர்ந்தெடுத்து வீழ்படிவாக்குதலின் கொள்கையாகும்.`
                }
            ]
        }
    ],
    workedExamples: [
        {
            title: "NEET Level: Kp and Kc Relation",
            titleTamil: "நீட் நிலை: Kp மற்றும் Kc தொடர்பு",
            difficulty: 'Easy',
            problem: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), find the relationship between Kp and Kc.",
            problemTamil: "N₂(g) + 3H₂(g) ⇌ 2NH₃(g) என்ற வினைக்கு, Kp மற்றும் Kc க்கு இடையேயான தொடர்பைக் கண்டறியவும்.",
            solutionSteps: [
                { step: 1, explanation: "Use the formula Kp = Kc(RT)^Δn_g.", explanationTamil: "Kp = Kc(RT)^Δn_g என்ற சூத்திரத்தைப் பயன்படுத்தவும்." },
                { step: 2, explanation: "Calculate Δn_g, the change in the number of moles of gas. Δn_g = (moles of gaseous products) - (moles of gaseous reactants).", explanationTamil: "வாயு மோல்களின் எண்ணிக்கையில் ஏற்படும் மாற்றமான Δn_g ஐக் கணக்கிடவும்." },
                { step: 3, explanation: "Substitute the stoichiometric coefficients.", calculation: "Δn_g = 2 - (1 + 3) = 2 - 4 = -2" },
                { step: 4, explanation: "Substitute Δn_g back into the relation.", calculation: "Kp = Kc(RT)⁻² = Kc / (RT)²" }
            ],
            neetHack: "If the number of gas moles decreases, Δn_g is negative and Kp will be less than Kc. If it increases, Kp > Kc. If it's constant, Kp = Kc.",
            commonPitfall: "Forgetting to only count the moles of gaseous substances when calculating Δn_g."
        },
        {
            title: "JEE Level: Le Chatelier's Principle",
            titleTamil: "ஜே.இ.இ நிலை: லெ ஷாட்லியே தத்துவம்",
            difficulty: 'Medium',
            problem: "For the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = -198 kJ. What conditions of pressure and temperature would favour the forward reaction?",
            problemTamil: "2SO₂(g) + O₂(g) ⇌ 2SO₃(g), ΔH = -198 kJ என்ற வினைக்கு, எந்த அழுத்தம் மற்றும் வெப்பநிலை நிலைகள் முன்னோக்கு வினையை ஆதரிக்கும்?",
            solutionSteps: [
                { step: 1, explanation: "Analyze the effect of pressure. First, find the change in the number of moles of gas, Δn_g.", calculation: "Δn_g = 2 - (2 + 1) = -1" },
                { step: 2, explanation: "Since Δn_g is negative, the number of moles decreases in the forward reaction. According to Le Chatelier's principle, increasing the pressure will favour the reaction that decreases the number of moles. Therefore, high pressure favours the forward reaction.", explanationTamil: "Δn_g எதிர்மறையாக இருப்பதால், முன்னோக்கு வினையில் மோல்களின் எண்ணிக்கை குறைகிறது. லெ ஷாட்லியே தத்துவத்தின்படி, அழுத்தத்தை அதிகரிப்பது மோல்களின் எண்ணிக்கையைக் குறைக்கும் வினையை ஆதரிக்கும். எனவே, உயர் அழுத்தம் முன்னோக்கு வினையை ஆதரிக்கிறது." },
                { step: 3, explanation: "Analyze the effect of temperature. The given reaction is exothermic (ΔH is negative), meaning it releases heat.", explanationTamil: "வெப்பநிலையின் விளைவை பகுப்பாய்வு செய்யவும். கொடுக்கப்பட்ட வினை வெப்ப உமிழ் வினையாகும் (ΔH எதிர்மறை), அதாவது அது வெப்பத்தை வெளியிடுகிறது." },
                { step: 4, explanation: "According to Le Chatelier's principle, to favour the forward reaction (which produces heat), we should remove heat, i.e., decrease the temperature. Therefore, low temperature favours the forward reaction.", explanationTamil: "லெ ஷாட்லியே தத்துவத்தின்படி, முன்னோக்கு வினையை (வெப்பத்தை உற்பத்தி செய்கிறது) ஆதரிக்க, நாம் வெப்பத்தை அகற்ற வேண்டும், அதாவது வெப்பநிலையைக் குறைக்க வேண்டும். எனவே, குறைந்த வெப்பநிலை முன்னோக்கு வினையை ஆதரிக்கிறது." },
                { step: 5, explanation: "Conclusion: The forward reaction is favoured by high pressure and low temperature.", explanationTamil: "முடிவு: முன்னோக்கு வினை உயர் அழுத்தம் மற்றும் குறைந்த வெப்பநிலையால் ஆதரிக்கப்படுகிறது." }
            ]
        },
        {
            title: "NEET Level: pH Calculation",
            titleTamil: "நீட் நிலை: pH கணக்கீடு",
            difficulty: 'Medium',
            problem: "Calculate the pH of a 0.01 M solution of acetic acid (CH₃COOH). Given K_a = 1.8 x 10⁻⁵.",
            problemTamil: "0.01 M அசிட்டிக் அமிலக் கரைசலின் pH ஐக் கணக்கிடுக. K_a = 1.8 x 10⁻⁵ என கொடுக்கப்பட்டுள்ளது.",
            solutionSteps: [
                { step: 1, explanation: "Write the dissociation equilibrium for the weak acid: CH₃COOH ⇌ H⁺ + CH₃COO⁻.", explanationTamil: "வலிமை குறைந்த அமிலத்திற்கான பிரிகை சமநிலையை எழுதவும்." },
                { step: 2, explanation: "Use the formula for the hydrogen ion concentration of a weak acid: [H⁺] = √(K_a * C), where C is the concentration.", calculation: "[H⁺] = \\sqrt{(1.8 \\times 10^{-5}) \\times (0.01)} = \\sqrt{1.8 \\times 10^{-7}} = \\sqrt{18 \\times 10^{-8}}" },
                { step: 3, explanation: "Calculate the value of [H⁺]. √18 ≈ 4.24.", calculation: "[H⁺] ≈ 4.24 \\times 10^{-4} M" },
                { step: 4, explanation: "Calculate the pH using the formula pH = -log[H⁺].", calculation: "pH = -\\log(4.24 \\times 10^{-4}) = -(log(4.24) + log(10^{-4})) = - (0.627 - 4) = 3.373" }
            ],
            commonPitfall: "Using the formula pH = -log(C) directly, which is only valid for strong acids. For weak acids, you must calculate the [H⁺] from the K_a value first.",
            neetHack: "A quick approximation for pH of a weak acid is pH = (1/2)(pKa - log C). pKa = -log(Ka) ≈ 4.74. pH ≈ (1/2)(4.74 - (-2)) = (1/2)(6.74) = 3.37."
        },
        {
            title: "JEE Level: Buffer Solutions",
            titleTamil: "ஜே.இ.இ நிலை: தாங்கல் கரைசல்கள்",
            difficulty: 'Medium',
            problem: "A buffer solution is prepared by mixing 50 mL of 0.1 M CH₃COOH and 25 mL of 0.2 M CH₃COONa. Find the pH of the solution. (pKa for CH₃COOH = 4.74)",
            problemTamil: "50 மி.லி 0.1 M CH₃COOH மற்றும் 25 மி.லி 0.2 M CH₃COONa ஐக் கலந்து ஒரு தாங்கல் கரைசல் தயாரிக்கப்படுகிறது. கரைசலின் pH ஐக் கண்டறியவும். (CH₃COOH க்கு pKa = 4.74)",
            solutionSteps: [
                { step: 1, explanation: "Calculate the millimoles of the acid and the salt.", calculation: "mmol of Acid = M × V = 0.1 × 50 = 5 mmol. \\\\ mmol of Salt = 0.2 × 25 = 5 mmol." },
                { step: 2, explanation: "Use the Henderson-Hasselbalch equation: pH = pKa + log([Salt]/[Acid]). Since volume is the same for the mixture, we can use the ratio of moles.", calculation: "pH = 4.74 + \\log(\\frac{5}{5}) = 4.74 + \\log(1)" },
                { step: 3, explanation: "Since log(1) = 0, the pH is equal to the pKa.", calculation: "pH = 4.74" }
            ],
            commonPitfall: "Forgetting to calculate moles first. Concentrations cannot be used directly when volumes are different, but the ratio of moles works."
        },
        {
            title: "NEET Level: Solubility Product",
            titleTamil: "நீட் நிலை: கரைதிறன் பெருக்கம்",
            difficulty: "Medium",
            problem: "The solubility of AgCl in water at 25°C is 1.435 x 10⁻³ g/L. Calculate the solubility product (K_sp). (Molar mass of AgCl = 143.5 g/mol)",
            problemTamil: "25°C இல் நீரில் AgCl இன் கரைதிறன் 1.435 x 10⁻³ கி/லி ஆகும். கரைதிறன் பெருக்கத்தைக் (K_sp) கணக்கிடுக. (AgCl இன் மோலார் நிறை = 143.5 கி/மோல்)",
            solutionSteps: [
                { step: 1, explanation: "First, convert the solubility from g/L to mol/L (molar solubility, s).", calculation: "s = (1.435 × 10⁻³) g/L / (143.5 g/mol) = 1.0 × 10⁻⁵ mol/L" },
                { step: 2, explanation: "Write the dissociation equilibrium for AgCl.", calculation: "AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)" },
                { step: 3, explanation: "From the stoichiometry, [Ag⁺] = s and [Cl⁻] = s.", explanationTamil: "வினைக்கூறு விகிதவியலிலிருந்து, [Ag⁺] = s மற்றும் [Cl⁻] = s." },
                { step: 4, explanation: "Write the expression for K_sp and substitute the values.", calculation: "K_{sp} = [Ag⁺][Cl⁻] = (s)(s) = s² = (1.0 × 10⁻⁵)² = 1.0 × 10⁻¹⁰" }
            ]
        }
    ],
    mcqs: [
        {
            question: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the relationship between Kp and Kc is:",
            options: ["A. Kp = Kc(RT)", "B. Kp = Kc(RT)⁻¹", "C. Kp = Kc(RT)⁻²", "D. Kp = Kc"],
            answer: "C. Kp = Kc(RT)⁻²",
            explanation: "Δn_g = (moles of gaseous products) - (moles of gaseous reactants) = 2 - (1+3) = -2. So, Kp = Kc(RT)⁻².",
            neetFrequency: 5
        },
        {
            question: "According to Le Chatelier's principle, adding heat to a solid ⇌ liquid equilibrium will cause:",
            options: ["A. Amount of solid to decrease", "B. Amount of liquid to decrease", "C. Temperature to rise", "D. Temperature to fall"],
            answer: "A. Amount of solid to decrease",
            explanation: "Melting (solid to liquid) is an endothermic process. Adding heat will shift the equilibrium to favor the endothermic direction, thus melting more solid.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is a Lewis acid?",
            options: ["A. NH₃", "B. H₂O", "C. BF₃", "D. Cl⁻"],
            answer: "C. BF₃",
            explanation: "BF₃ is electron-deficient as Boron has only 6 electrons in its valence shell. It can accept an electron pair, making it a Lewis acid.",
            neetFrequency: 4
        },
        {
            question: "The pH of a 0.001 M HCl solution is:",
            options: ["A. 1", "B. 2", "C. 3", "D. 11"],
            answer: "C. 3",
            explanation: "HCl is a strong acid, so it completely dissociates. [H⁺] = 0.001 M = 10⁻³ M. pH = -log[H⁺] = -log(10⁻³) = 3.",
            neetFrequency: 5
        },
        {
            question: "A buffer solution is prepared from a weak acid HA and its salt NaA. The pH of this buffer is given by:",
            options: ["A. pH = pKa + log([Acid]/[Salt])", "B. pH = pKa + log([Salt]/[Acid])", "C. pH = pKa - log([Salt]/[Acid])", "D. pH = Ka + log([Salt]/[Acid])"],
            answer: "B. pH = pKa + log([Salt]/[Acid])",
            explanation: "This is the Henderson-Hasselbalch equation for an acidic buffer.",
            neetFrequency: 4
        },
        {
            question: "For a reaction at equilibrium, the value of ΔG is:",
            options: ["A. Positive", "B. Negative", "C. Zero", "D. May be positive or negative"],
            answer: "C. Zero",
            explanation: "At equilibrium, the Gibbs free energy change (ΔG) is zero, indicating no net tendency for the reaction to proceed in either direction.",
            neetFrequency: 3
        },
        {
            question: "The solubility product of Ag₂CrO₄ is 32 x 10⁻¹². What is the molar solubility (s) of this salt?",
            options: ["A. 2 x 10⁻⁴ M", "B. 4 x 10⁻⁴ M", "C. 8 x 10⁻⁴ M", "D. 16 x 10⁻¹² M"],
            answer: "A. 2 x 10⁻⁴ M",
            explanation: "Ag₂CrO₄ ⇌ 2Ag⁺ + CrO₄²⁻. Ksp = [Ag⁺]²[CrO₄²⁻] = (2s)²(s) = 4s³. So, 32 x 10⁻¹² = 4s³. s³ = 8 x 10⁻¹². s = 2 x 10⁻⁴ M.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is the strongest acid?",
            options: ["A. HClO", "B. HClO₂", "C. HClO₃", "D. HClO₄"],
            answer: "D. HClO₄",
            explanation: "For oxoacids with the same central atom, the acidity increases with the number of oxygen atoms attached, as they withdraw electron density and stabilize the conjugate base.",
            neetFrequency: 3
        },
        {
            question: "The conjugate base of H₂PO₄⁻ is:",
            options: ["A. H₃PO₄", "B. HPO₄²⁻", "C. PO₄³⁻", "D. H₂PO₄"],
            answer: "B. HPO₄²⁻",
            explanation: "A conjugate base is formed when an acid donates a proton (H⁺). When H₂PO₄⁻ donates a proton, it becomes HPO₄²⁻.",
            neetFrequency: 3
        },
        {
            question: "In the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), increasing the pressure will:",
            options: ["A. Shift equilibrium to the left", "B. Shift equilibrium to the right", "C. Have no effect", "D. Stop the reaction"],
            answer: "B. Shift equilibrium to the right",
            explanation: "The forward reaction has 3 moles of gas reacting to form 2 moles. Increasing pressure favors the direction with fewer moles of gas.",
            neetFrequency: 5
        },
        {
            question: "The pH of a solution is 5. The concentration of H⁺ ions is:",
            options: ["A. 10⁻⁵ M", "B. 10⁻⁹ M", "C. 10⁵ M", "D. 5 M"],
            answer: "A. 10⁻⁵ M",
            explanation: "pH = -log[H⁺], so [H⁺] = 10⁻pH = 10⁻⁵ M.",
            neetFrequency: 2
        },
        {
            question: "Which of the following salt solutions will be basic?",
            options: ["A. NH₄Cl", "B. NaCl", "C. CH₃COONa", "D. K₂SO₄"],
            answer: "C. CH₃COONa",
            explanation: "CH₃COONa is a salt of a weak acid (CH₃COOH) and a strong base (NaOH). The acetate ion (CH₃COO⁻) will hydrolyze water to produce OH⁻ ions, making the solution basic.",
            neetFrequency: 4
        },
        {
            question: "The value of the equilibrium constant for a reaction depends on:",
            options: ["A. Temperature", "B. Pressure", "C. Concentration of reactants", "D. The catalyst used"],
            answer: "A. Temperature",
            explanation: "The equilibrium constant (K) for a given reaction is constant at a constant temperature. It is not affected by changes in pressure, concentration, or catalysts.",
            neetFrequency: 3
        },
        {
            question: "If Kp for a reaction is 1.2 x 10⁻². What will be the Kp for the reverse reaction?",
            options: ["A. 1.2 x 10²", "B. 1 / (1.2 x 10⁻²)", "C. 1.2 x 10⁻²", "D. (1.2 x 10⁻²)²"],
            answer: "B. 1 / (1.2 x 10⁻²)",
            explanation: "The equilibrium constant for the reverse reaction is the reciprocal of the equilibrium constant for the forward reaction. Kp' = 1/Kp.",
            neetFrequency: 2
        },
        {
            question: "For which of the following reactions is Kp = Kc?",
            options: ["A. 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)", "B. N₂(g) + 3H₂(g) ⇌ 2NH₃(g)", "C. H₂(g) + I₂(g) ⇌ 2HI(g)", "D. PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)"],
            answer: "C. H₂(g) + I₂(g) ⇌ 2HI(g)",
            explanation: "Kp = Kc(RT)^Δn_g. Kp = Kc when Δn_g = 0. For reaction C, Δn_g = 2 - (1+1) = 0.",
            neetFrequency: 4
        },
        {
            question: "The pH of a buffer solution can be calculated using:",
            options: ["A. Arrhenius equation", "B. Nernst equation", "C. Henderson-Hasselbalch equation", "D. Ostwald's dilution law"],
            answer: "C. Henderson-Hasselbalch equation",
            explanation: "The Henderson-Hasselbalch equation relates the pH of a buffer to the pKa of the weak acid and the ratio of the concentrations of the salt and acid.",
            neetFrequency: 3
        },
        {
            question: "Adding sodium acetate to a solution of acetic acid will:",
            options: ["A. Increase its pH", "B. Decrease its pH", "C. Not change its pH", "D. Make it neutral"],
            answer: "A. Increase its pH",
            explanation: "This creates a buffer solution. The addition of the common ion (acetate) suppresses the dissociation of the weak acid (acetic acid), reducing the [H⁺] concentration and thus increasing the pH.",
            neetFrequency: 3
        },
        {
            question: "The solubility of AgCl will be minimum in:",
            options: ["A. Pure water", "B. 0.1 M NaCl solution", "C. 0.1 M NaNO₃ solution", "D. 0.1 M BaCl₂ solution"],
            answer: "D. 0.1 M BaCl₂ solution",
            explanation: "Due to the common ion effect, the solubility of AgCl will be suppressed in any solution containing Cl⁻ ions. BaCl₂ provides the highest concentration of Cl⁻ ions (0.2 M) among the choices, causing the maximum suppression.",
            neetFrequency: 4
        },
        {
            question: "The conjugate acid of NH₃ is:",
            options: ["A. NH₂⁻", "B. NH₄⁺", "C. N₂H₄", "D. N₂"],
            answer: "B. NH₄⁺",
            explanation: "A conjugate acid is formed when a base accepts a proton (H⁺). When NH₃ accepts a proton, it forms the ammonium ion, NH₄⁺.",
            neetFrequency: 2
        },
        {
            question: "For a reaction to be spontaneous, ΔG must be:",
            options: ["A. Positive", "B. Negative", "C. Zero", "D. Equal to ΔH"],
            answer: "B. Negative",
            explanation: "A negative value for the change in Gibbs free energy (ΔG < 0) is the criterion for a spontaneous process at constant temperature and pressure.",
            neetFrequency: 1
        },
        {
            question: "If a catalyst is added to a reversible reaction in equilibrium, the equilibrium constant:",
            options: ["A. Increases", "B. Decreases", "C. Remains unchanged", "D. First increases then decreases"],
            answer: "C. Remains unchanged",
            explanation: "A catalyst increases the rates of both the forward and reverse reactions equally, so it helps equilibrium to be reached faster but does not change the position of equilibrium or the value of K.",
            neetFrequency: 3
        },
        {
            question: "The pH of a 10⁻⁸ M solution of HCl in water is:",
            options: ["A. 8", "B. 6", "C. Between 6 and 7", "D. Between 7 and 8"],
            answer: "C. Between 6 and 7",
            explanation: "For very dilute solutions of strong acids, the H⁺ contribution from the autoionization of water cannot be ignored. The total [H⁺] will be slightly more than 10⁻⁷ M, making the pH slightly less than 7.",
            neetFrequency: 2
        },
        {
            question: "The units of the equilibrium constant Kc for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) are:",
            options: ["A. mol L⁻¹", "B. mol² L⁻²", "C. mol⁻² L²", "D. Dimensionless"],
            answer: "C. mol⁻² L²",
            explanation: "Kc = [NH₃]² / ([N₂][H₂]³). Units = (mol/L)² / ((mol/L)(mol/L)³) = (mol/L)⁻² = mol⁻²L².",
            neetFrequency: 4
        },
        {
            question: "The solubility of PbCl₂ is s. Its solubility product Ksp is:",
            options: ["A. s²", "B. s³", "C. 4s³", "D. 27s⁴"],
            answer: "C. 4s³",
            explanation: "PbCl₂ ⇌ Pb²⁺ + 2Cl⁻. Ksp = [Pb²⁺][Cl⁻]² = (s)(2s)² = 4s³.",
            neetFrequency: 4
        },
        {
            question: "The addition of an inert gas at constant volume to the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g) will:",
            options: ["A. Shift the equilibrium to the right", "B. Shift the equilibrium to the left", "C. Have no effect on the equilibrium", "D. Increase the value of Kp"],
            answer: "C. Have no effect on the equilibrium",
            explanation: "Adding an inert gas at constant volume increases the total pressure, but it does not change the partial pressures or concentrations of the reactants and products. Therefore, the equilibrium is unaffected.",
            neetFrequency: 3
        }
    ],
    assertionReasons: [
        {
            assertion: "The pH of a buffer solution does not change significantly on the addition of a small amount of acid or base.",
            reason: "The buffer solution contains a weak acid and its conjugate base (or vice versa) which can neutralize the added acid or base.",
            answer: "A",
            explanation: "Assertion is the definition of a buffer. The reason correctly explains the mechanism of buffer action, thus correctly explaining the assertion."
        },
        {
            assertion: "For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), an increase in pressure favors the formation of ammonia.",
            reason: "According to Le Chatelier's principle, an increase in pressure shifts the equilibrium in the direction of a smaller number of moles.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation. The forward reaction goes from 4 moles of gas to 2 moles, so high pressure favors the product side."
        },
        {
            assertion: "The solubility of AgCl in a solution of NaCl is lower than in pure water.",
            reason: "This is due to the common ion effect.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and correctly explains the assertion. The presence of the common ion Cl⁻ from NaCl suppresses the dissolution of AgCl.",
            neetFrequency: 4
        },
        {
            assertion: "All Lewis acids are Brønsted-Lowry acids.",
            reason: "A Brønsted-Lowry acid is a proton donor.",
            answer: "D",
            explanation: "Assertion is false. For example, BF₃ is a Lewis acid but has no proton to donate, so it is not a Brønsted-Lowry acid. The reason is a true statement defining a Brønsted-Lowry acid."
        },
        {
            assertion: "The ionic product of water, Kw, increases with an increase in temperature.",
            reason: "The autoionization of water is an endothermic process.",
            answer: "A",
            explanation: "Assertion is true (Kw ≈ 10⁻¹⁴ at 25°C and increases at higher temps). The reason is also true and is the correct explanation. Since the process is endothermic, increasing the temperature shifts the equilibrium to the right, increasing the concentrations of H⁺ and OH⁻, and thus increasing Kw."
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Lewis Acid", "(b) Brønsted-Lowry Base", "(c) Conjugate acid of NH₃", "(d) Conjugate base of H₂O"],
            column2: ["(p) Proton acceptor", "(q) Electron pair acceptor", "(r) OH⁻", "(s) NH₄⁺"],
            answer: "a-q, b-p, c-s, d-r"
        },
        {
            column1: ["(a) pH < 7", "(b) pH > 7", "(c) pH = 7", "(d) pH = pKa"],
            column2: ["(p) Neutral solution", "(q) Acidic solution", "(r) Basic solution", "(s) Half-neutralization point"],
            answer: "a-q, b-r, c-p, d-s"
        },
        {
            column1: ["(a) Kp = Kc", "(b) Kp > Kc", "(c) Kp < Kc", "(d) Catalyst added"],
            column2: ["(p) N₂(g) + 3H₂(g) ⇌ 2NH₃(g)", "(q) H₂(g) + I₂(g) ⇌ 2HI(g)", "(r) PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)", "(s) Equilibrium is reached faster"],
            answer: "a-q, b-r, c-p, d-s"
        },
        {
            column1: ["(a) Solubility of CaF₂", "(b) Solubility of Ag₂S", "(c) Solubility of Al(OH)₃", "(d) Solubility of AgCl"],
            column2: ["(p) Ksp = 4s³", "(q) Ksp = s²", "(r) Ksp = 108s⁵ (not a choice)", "(s) Ksp = 27s⁴"],
            answer: "a-p, b-p, c-s, d-q",
            explanation: "Matching salts with the correct relationship between molar solubility (s) and Ksp."
        },
        {
            column1: ["(a) Increase temperature", "(b) Increase pressure", "(c) Add more reactant", "(d) Add a catalyst"],
            column2: ["(p) Shifts right", "(q) Shifts towards fewer moles", "(r) No change in equilibrium position", "(s) Shifts in endothermic direction"],
            answer: "a-s, b-q, c-p, d-r",
            explanation: "Matching changes with their effect on equilibrium according to Le Chatelier's principle."
        }
    ],
    keyFormulasAndDiagrams: {
        formulas: [
            {
                formula: "K_p = K_c(RT)^{\\Delta n_g}",
                description: "Relation between Kp and Kc",
                descriptionTamil: "Kp மற்றும் Kc க்கு இடையேயான தொடர்பு"
            },
            {
                formula: "pH = -\\log[H^+]",
                description: "Definition of pH",
                descriptionTamil: "pH வரையறை"
            },
            {
                formula: "pH = pK_a + \\log \\frac{[Salt]}{[Acid]}",
                description: "Henderson-Hasselbalch Equation",
                descriptionTamil: "ஹெண்டர்சன்-ஹாசல்பால்ச் சமன்பாடு"
            },
            {
                formula: "K_{sp} = [A^{y+}]^x [B^{x-}]^y",
                description: "Solubility Product for A_x B_y",
                descriptionTamil: "A_x B_y க்கான கரைதிறன் பெருக்கம்"
            }
        ],
        diagrams: []
    },
    keyTakeaways: [
        "Le Chatelier's principle is a qualitative tool to predict how an equilibrium system responds to stress.",
        "The pH scale is a logarithmic scale for measuring acidity.",
        "Buffer solutions resist changes in pH.",
        "The solubility product (Ksp) governs the equilibrium of sparingly soluble salts."
    ],
    mnemonics: [
        { text: "Remember the acid-base theories with 'Arrhenius Adds H₂O, Brønsted-Lowry is a Bro-ton donor, Lewis Looks for lone pairs'.", tamil: "'அர்ஹீனியஸ் H₂O சேர்க்கிறார், பிரான்ஸ்டெட்-லௌரி ஒரு புரோட்டான் கொடையாளி, லூயிஸ் தனி ஜோடிகளைத் தேடுகிறார்' என்று அமில-கார கோட்பாடுகளை நினைவில் கொள்க." }
    ],
    neetTips: [
        { text: "For buffer solutions, if the concentrations of acid/base and salt are equal, then pH = pKa or pOH = pKb. Look for this shortcut.", tamil: "தாங்கல் கரைசல்களுக்கு, அமிலம்/காரம் மற்றும் உப்பின் செறிவுகள் சமமாக இருந்தால், pH = pKa அல்லது pOH = pKb ஆகும். இந்த குறுக்குவழியைத் தேடுங்கள்." },
        { text: "In solubility problems, be careful with the stoichiometry. For a salt like CaF₂, K_sp = [Ca²⁺][F⁻]² = (s)(2s)² = 4s³.", tamil: "கரைதிறன் கணக்குகளில், வினைக்கூறு விகிதவியலில் கவனமாக இருங்கள். CaF₂ போன்ற ஒரு உப்பிற்கு, K_sp = [Ca²⁺][F⁻]² = (s)(2s)² = 4s³." }
    ],
    studentTip: {
        english: "Equilibrium is a dynamic concept. Even though the macroscopic properties are constant, the forward and reverse reactions are still occurring at the same rate.",
        tamil: "சமநிலை ஒரு மாறும் கருத்து. பேரியல் பண்புகள் மாறிலியாக இருந்தாலும், முன்னோக்கு மற்றும் பின்னோக்கு வினைகள் இன்னும் அதே வேகத்தில் நிகழ்கின்றன."
    },
    peerDiscussion: {
        english: "Discuss with a friend why adding an inert gas at constant *pressure* shifts the equilibrium, but adding it at constant *volume* does not.",
        tamil: "மாறா *அழுத்தத்தில்* ஒரு மந்த வாயுவைச் சேர்ப்பது ஏன் சமநிலையை மாற்றுகிறது, ஆனால் மாறா *பருமனில்* அதைச் சேர்ப்பது மாற்றாது என்று உங்கள் நண்பருடன் விவாதிக்கவும்."
    },
    nextChapter: {
        title: "Redox Reactions and Electrochemistry",
        titleTamil: "ஆக்ஸிஜனேற்ற-ஒடுக்க வினைகள் மற்றும் மின் வேதியியல்"
    },
    validationReport: []
};
