
import type { NeetModule } from '@/lib/types';

export const plantPhysiology: NeetModule = {
    id: 'neet-biology-plant-physiology',
    title: 'Biology - Plant Physiology',
    chapter: 'Plant Physiology',
    subject: 'Biology',
    learningObjectives: [
        "Understand the mechanisms of water transport in plants, including transpiration and water potential.",
        "Describe the role of essential mineral nutrients, their deficiency symptoms, and the mechanism of absorption.",
        "Explain the process of photosynthesis, including light-dependent and light-independent reactions (Calvin cycle, C4 pathway).",
        "Describe the process of cellular respiration in plants, including glycolysis, Krebs cycle, and electron transport chain.",
        "Analyze the role of plant growth regulators (hormones) like auxins, gibberellins, cytokinins, ethylene, and abscisic acid."
    ],
    prerequisites: [
        "Understanding of plant anatomy (xylem, phloem, stomata).",
        "Knowledge of cell structure, especially chloroplasts and mitochondria.",
        "Basic chemistry of photosynthesis (CO₂ + H₂O → C₆H₁₂O₆) and respiration."
    ],
    conceptOverview: "This unit focuses on the life processes of plants, essentially answering the question: 'How does a plant live?' It covers how plants transport water and minerals from the soil to their leaves, the process of mineral nutrition, and the two most critical metabolic processes on Earth: photosynthesis (how plants make food using sunlight) and respiration (how they use that food to get energy). The unit concludes with an examination of plant growth and development, including the complex role of plant hormones (phytohormones) in controlling everything from seed germination to fruit ripening.",
    tamilConnection: "பண்டைய தமிழர்கள், குறிப்பாக சோழர்கள், நீர் மேலாண்மையில் சிறந்து விளங்கினர். கல்லணை போன்ற கட்டமைப்புகள், தாவரங்களுக்கு நீர் எவ்வளவு அவசியம் என்பதை அவர்கள் அறிந்திருந்ததைக் காட்டுகிறது. தாவரங்கள் எவ்வாறு நீரையும், சத்துக்களையும் கடத்துகின்றன, எவ்வாறு உணவைத் தயாரிக்கின்றன (ஒளிச்சேர்க்கை) என்பதை இந்த அத்தியாயம் விளக்குகிறது.",
    culturalContext: "The agricultural practices across India, from the paddy fields of the Kaveri delta to the wheat fields of Punjab, are all practical applications of plant physiology. Understanding how plants absorb nutrients, respond to light, and grow is fundamental to improving crop yields and ensuring food security for the nation. The green revolution itself was based on developing plant varieties that responded well to fertilizers and water, a direct manipulation of plant physiological processes.",
    syllabusMapping: [{
        topic: 'Transport in Plants, Mineral Nutrition, Photosynthesis, Respiration, Plant Growth and Development',
        tnBoardChapter: '11th Std Botany Ch 9 to 13',
        ncertReference: 'Class 11 Biology - Unit 4',
        notes: 'A crucial unit. Photosynthesis and Respiration cycles (C3, C4, Glycolysis, Krebs) are very important. Plant hormones are also a high-yield topic.',
        mappingDescription: 'Maps to the plant physiology section in the TN Board Std 11 Botany book.'
    }],
    stateBoardGaps: [
      "The concept of Water Potential (Ψ_w = Ψ_s + Ψ_p) is explained with greater mathematical emphasis in NCERT. TN board texts may describe the concept qualitatively but might not focus on the equation as heavily.",
      "The detailed mechanism of phloem transport (Pressure-Flow Hypothesis or Mass Flow Hypothesis) is a key topic in NCERT that might be less detailed in the state syllabus.",
      "NCERT provides a more detailed comparison of the C3 and C4 pathways, including photorespiration as a wasteful process in C3 plants, which is a very important topic for NEET.",
      "The chemiosmotic hypothesis for ATP synthesis in both photosynthesis and respiration is explained in greater detail in NCERT, linking proton gradients to ATP synthase."
    ],
    extraNeetConcepts: [
      "Guttation vs. Transpiration - understanding the difference and the role of hydathodes.",
      "Details of mineral toxicity, particularly manganese toxicity and its effect on other mineral uptake.",
      "Cyclic vs. Non-cyclic photophosphorylation - understanding the specific conditions under which each occurs and what their net products are (ATP only vs. ATP and NADPH).",
      "Respiratory Quotient (RQ) - calculation and significance for different substrates like carbohydrates, fats, and proteins.",
      "Vernalisation and Photoperiodism - the effect of low temperature and light duration on flowering."
    ],
    ncertReadingGuide: [
      "In 'Transport in Plants', Figure 11.10 showing the pressure-flow hypothesis is very important to understand the mechanism of translocation.",
      "In 'Mineral Nutrition', Table 12.1 and 12.2 listing macronutrients, micronutrients, and their deficiency symptoms are high-yield for memory-based questions.",
      "In 'Photosynthesis', focus on the diagrams of the Z-scheme of light reaction (Figure 13.6) and the Calvin cycle (Figure 13.8). You should be able to trace the path of electrons and the regeneration of RuBP.",
      "The comparative table between C3 and C4 plants (Table 13.1) is extremely important. Questions are frequently asked based on the differences listed there.",
      "In 'Respiration', the schematic representation of glycolysis (Figure 14.1) and the Krebs cycle (Figure 14.3) are crucial. Be prepared for questions on the net gain of ATP from these processes.",
      "In 'Plant Growth and Development', Table 15.3, 15.4 and 15.5 summarizing the physiological effects of plant growth regulators are very important for matching-type questions."
    ],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: []
    },
    mcqs: [
        {
            question: "The primary function of xylem tissue in plants is:",
            options: ["A. Transport of food", "B. Transport of water and minerals", "C. Photosynthesis", "D. Mechanical support only"],
            answer: "B. Transport of water and minerals",
            explanation: "Xylem is the principal water-conducting tissue of vascular plants.",
            neetFrequency: 3
        },
        {
            question: "The main driving force for the mass flow of water through the xylem is:",
            options: ["A. Root pressure", "B. Capillarity", "C. Transpiration pull", "D. Active transport"],
            answer: "C. Transpiration pull",
            explanation: "The transpiration pull, generated by the evaporation of water from leaves, is the main force responsible for pulling the water column up the xylem.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is a macronutrient for plants?",
            options: ["A. Iron", "B. Manganese", "C. Zinc", "D. Nitrogen"],
            answer: "D. Nitrogen",
            explanation: "Macronutrients are required in large quantities. Nitrogen is a key component of proteins, nucleic acids, and chlorophyll. Iron, Manganese, and Zinc are micronutrients.",
            neetFrequency: 4
        },
        {
            question: "The light-independent reactions of photosynthesis (Calvin cycle) take place in the:",
            options: ["A. Thylakoid membrane", "B. Stroma of the chloroplast", "C. Cytoplasm", "D. Mitochondrial matrix"],
            answer: "B. Stroma of the chloroplast",
            explanation: "The light-dependent reactions occur in the thylakoids, while the Calvin cycle, which fixes CO₂, occurs in the stroma.",
            neetFrequency: 5
        },
        {
            question: "In C4 plants, the primary CO₂ acceptor is:",
            options: ["A. RuBisCO", "B. Phosphoenolpyruvate (PEP)", "C. Ribulose-5-phosphate", "D. Oxaloacetic acid"],
            answer: "B. Phosphoenolpyruvate (PEP)",
            explanation: "In C4 plants, CO₂ is first fixed by PEP carboxylase into a 4-carbon acid. RuBisCO is the primary acceptor in C3 plants.",
            neetFrequency: 5
        },
        {
            question: "The net gain of ATP molecules from one molecule of glucose during aerobic respiration is approximately:",
            options: ["A. 2", "B. 8", "C. 36-38", "D. 4"],
            answer: "C. 36-38",
            explanation: "Complete oxidation of one glucose molecule yields approximately 36 to 38 ATP molecules through glycolysis, the Krebs cycle, and oxidative phosphorylation.",
            neetFrequency: 3
        },
        {
            question: "Which plant hormone is responsible for apical dominance?",
            options: ["A. Auxin", "B. Gibberellin", "C. Cytokinin", "D. Ethylene"],
            answer: "A. Auxin",
            explanation: "Auxin produced in the apical bud suppresses the growth of lateral (axillary) buds, a phenomenon known as apical dominance.",
            neetFrequency: 4
        },
        {
            question: "The gaseous plant hormone responsible for fruit ripening is:",
            options: ["A. Abscisic acid", "B. Ethylene", "C. Cytokinin", "D. Gibberellin"],
            answer: "B. Ethylene",
            explanation: "Ethylene is a gaseous hormone that promotes senescence and fruit ripening.",
            neetFrequency: 5
        },
        {
            question: "The opening and closing of stomata is primarily due to:",
            options: ["A. The concentration of CO₂", "B. The intensity of light", "C. The turgor changes in guard cells", "D. The air temperature"],
            answer: "C. The turgor changes in guard cells",
            explanation: "The influx and efflux of potassium ions into guard cells changes their water potential and turgor, causing the stomatal pore to open or close.",
            neetFrequency: 4
        },
        {
            question: "The Respiratory Quotient (RQ) for carbohydrates is:",
            options: ["A. 1", "B. 0.7", "C. 0.9", "D. Infinity"],
            answer: "A. 1",
            explanation: "For carbohydrates, the volume of CO₂ evolved is equal to the volume of O₂ consumed (e.g., C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O), so RQ = CO₂/O₂ = 6/6 = 1.",
            neetFrequency: 3
        },
        {
            question: "Which process occurs in both aerobic and anaerobic respiration?",
            options: ["A. Krebs cycle", "B. Glycolysis", "C. Electron Transport Chain", "D. Oxidative phosphorylation"],
            answer: "B. Glycolysis",
            explanation: "Glycolysis is the initial pathway that breaks down glucose into pyruvate. It occurs in the cytoplasm and does not require oxygen.",
            neetFrequency: 4
        },
        {
            question: "The deficiency of which element causes 'dieback' of shoots?",
            options: ["A. Calcium", "B. Copper", "C. Nitrogen", "D. Magnesium"],
            answer: "B. Copper",
            explanation: "Deficiency of copper causes dieback of shoots and necrosis of the tip of young leaves.",
            neetFrequency: 1
        },
        {
            question: "Photorespiration is a wasteful process that occurs in:",
            options: ["A. C4 plants", "B. C3 plants", "C. CAM plants", "D. All plants"],
            answer: "B. C3 plants",
            explanation: "In C3 plants, RuBisCO can also bind with O₂, which leads to a wasteful process called photorespiration. C4 plants have a mechanism to avoid this.",
            neetFrequency: 4
        },
        {
            question: "The final electron acceptor in the mitochondrial electron transport chain is:",
            options: ["A. NAD⁺", "B. FAD", "C. Water", "D. Oxygen"],
            answer: "D. Oxygen",
            explanation: "Oxygen is the terminal electron acceptor, which then combines with protons to form water.",
            neetFrequency: 3
        },
        {
            question: "Which hormone promotes bolting (internode elongation prior to flowering) in rosette plants?",
            options: ["A. Auxin", "B. Cytokinin", "C. Gibberellin", "D. Ethylene"],
            answer: "C. Gibberellin",
            explanation: "Gibberellins are known to promote stem elongation and bolting in plants like cabbage and beets.",
            neetFrequency: 3
        },
        {
            question: "The water potential of pure water at standard temperature and pressure is:",
            options: ["A. 1", "B. -1", "C. Zero", "D. 100"],
            answer: "C. Zero",
            explanation: "By convention, the water potential of pure water under standard conditions is taken as zero. The addition of solutes makes it negative.",
            neetFrequency: 2
        },
        {
            question: "The law of limiting factors was proposed by:",
            options: ["A. Blackman", "B. Hill", "C. Calvin", "D. Arnon"],
            answer: "A. Blackman",
            explanation: "Blackman's Law of Limiting Factors states that the rate of a physiological process is limited by the factor which is in the shortest supply.",
            neetFrequency: 1
        },
        {
            question: "The first stable product of the Calvin cycle is:",
            options: ["A. Ribulose-1,5-bisphosphate (RuBP)", "B. Oxaloacetic acid (OAA)", "C. 3-phosphoglycerate (3-PGA)", "D. Phosphoenolpyruvate (PEP)"],
            answer: "C. 3-phosphoglycerate (3-PGA)",
            explanation: "The fixation of CO₂ by RuBisCO results in an unstable 6-carbon compound that immediately splits into two molecules of the 3-carbon compound, 3-PGA.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is a free-living, anaerobic nitrogen-fixing bacterium?",
            options: ["A. Rhizobium", "B. Azotobacter", "C. Nostoc", "D. Rhodospirillum"],
            answer: "D. Rhodospirillum",
            explanation: "Azotobacter is free-living and aerobic. Rhizobium is symbiotic. Rhodospirillum is free-living and anaerobic.",
            neetFrequency: 2
        },
        {
            question: "Guttation is the result of:",
            options: ["A. Diffusion", "B. Transpiration", "C. Osmosis", "D. Root pressure"],
            answer: "D. Root pressure",
            explanation: "Guttation, the loss of water in liquid form from the leaf margins, is caused by positive root pressure developed during the night.",
            neetFrequency: 3
        },
        { question: "In the Z-scheme of light reaction, which of the following is involved in both cyclic and non-cyclic photophosphorylation?", options: ["A. PS I", "B. PS II", "C. NADP reductase", "D. The oxygen-evolving complex"], answer: "A. PS I", explanation: "PS I can function in both cyclic (where the electron cycles back to it) and non-cyclic photophosphorylation. PS II is involved only in non-cyclic.", neetFrequency: 4 },
        { question: "Conversion of nitrite to nitrate is carried out by:", options: ["A. Nitrosomonas", "B. Nitrobacter", "C. Pseudomonas", "D. Thiobacillus"], answer: "B. Nitrobacter", explanation: "Nitrifying bacteria convert ammonia to nitrate in two steps: Nitrosomonas converts ammonia to nitrite, and Nitrobacter converts nitrite to nitrate.", neetFrequency: 3 },
        { question: "The connection between glycolysis and the Krebs cycle is:", options: ["A. Pyruvic acid", "B. Acetyl-CoA", "C. Citric acid", "D. Glucose-6-phosphate"], answer: "B. Acetyl-CoA", explanation: "Pyruvate from glycolysis is converted into Acetyl-CoA in the link reaction before it can enter the Krebs cycle.", neetFrequency: 5 },
        { question: "Which plant hormone is also known as the 'stress hormone'?", options: ["A. Auxin", "B. Cytokinin", "C. Gibberellin", "D. Abscisic acid (ABA)"], answer: "D. Abscisic acid (ABA)", explanation: "ABA is produced in response to various stresses like drought and induces stomatal closure to conserve water.", neetFrequency: 3 },
        { question: "Photoperiodism is the response of plants to:", options: ["A. Intensity of light", "B. Duration of light/dark periods", "C. Quality of light", "D. Temperature"], answer: "B. Duration of light/dark periods", explanation: "Photoperiodism is the physiological reaction of organisms to the length of day or night, which controls processes like flowering.", neetFrequency: 2 },
        { question: "Which element is a constituent of the ring structure of chlorophyll?", options: ["A. Iron (Fe)", "B. Manganese (Mn)", "C. Magnesium (Mg)", "D. Calcium (Ca)"], answer: "C. Magnesium (Mg)", explanation: "The porphyrin ring of the chlorophyll molecule has a magnesium atom at its center.", neetFrequency: 4 },
        { question: "Which of the following is required for the activity of the enzyme nitrate reductase?", options: ["A. Molybdenum (Mo)", "B. Manganese (Mn)", "C. Zinc (Zn)", "D. Copper (Cu)"], answer: "A. Molybdenum (Mo)", explanation: "Molybdenum is a component of several enzymes, including nitrate reductase and nitrogenase.", neetFrequency: 3 },
        { question: "The first action spectrum of photosynthesis was described by:", options: ["A. Jan Ingenhousz", "B. T.W. Engelmann", "C. C. van Niel", "D. Joseph Priestley"], answer: "B. T.W. Engelmann", explanation: "Engelmann used a prism to split light and illuminate a green alga (Cladophora) and observed where aerobic bacteria congregated, thus plotting the first action spectrum.", neetFrequency: 1 },
        { question: "The site of perception of light in plants for photoperiodism is:", options: ["A. Stem", "B. Flower", "C. Leaf", "D. Root"], answer: "C. Leaf", explanation: "The leaves perceive the photoperiodic stimulus, which is then transported to the floral buds to induce flowering.", neetFrequency: 2 },
        { question: "In the electron transport system, the final hydrogen acceptor is:", options: ["A. Cytochrome a₃", "B. Oxygen", "C. Hydrogen itself", "D. Water"], answer: "B. Oxygen", explanation: "Oxygen is the terminal acceptor of electrons and also combines with protons (hydrogen ions) to form water.", neetFrequency: 4 },
        { question: "The movement of ions against a concentration gradient is called:", options: ["A. Diffusion", "B. Facilitated diffusion", "C. Osmosis", "D. Active transport"], answer: "D. Active transport", explanation: "Active transport requires energy (ATP) to move substances against their concentration gradient.", neetFrequency: 3 },
        { question: "The water potential of a flaccid cell will be:", options: ["A. Equal to zero", "B. Equal to its solute potential", "C. Equal to its pressure potential", "D. Equal to its matric potential"], answer: "B. Equal to its solute potential", explanation: "In a flaccid cell, the turgor pressure (pressure potential) is zero. Since Ψ_w = Ψ_s + Ψ_p, if Ψ_p = 0, then Ψ_w = Ψ_s.", neetFrequency: 2 },
        { question: "Kranz anatomy is a characteristic feature of:", options: ["A. C3 plants", "B. C4 plants", "C. CAM plants", "D. All plants"], answer: "B. C4 plants", explanation: "Kranz anatomy refers to the wreath-like arrangement of bundle sheath cells around the vascular bundles, which is a key feature of C4 plants.", neetFrequency: 4 },
        { question: "The process of glycolysis occurs in the:", options: ["A. Mitochondria", "B. Chloroplast", "C. Nucleus", "D. Cytoplasm"], answer: "D. Cytoplasm", explanation: "Glycolysis is the universal first step of respiration and occurs in the cytoplasm of all living cells.", neetFrequency: 3 },
        { question: "Which hormone can substitute for vernalization?", options: ["A. Auxin", "B. Cytokinin", "C. Gibberellin", "D. Ethylene"], answer: "C. Gibberellin", explanation: "Gibberellins can replace the requirement of cold treatment (vernalization) for flowering in some plants.", neetFrequency: 2 },
        { question: "The opening of stomata is aided by the radial orientation of cellulose microfibrils in the:", options: ["A. Epidermal cells", "B. Guard cells", "C. Subsidiary cells", "D. Spongy mesophyll"], answer: "B. Guard cells", explanation: "The radial orientation of microfibrils in the cell walls of guard cells facilitates their outward bowing when they become turgid, opening the stoma.", neetFrequency: 2 },
        { question: "What is the net production of ATP in glycolysis?", options: ["A. 2 ATP", "B. 4 ATP", "C. 6 ATP", "D. 8 ATP"], answer: "A. 2 ATP", explanation: "Glycolysis produces a total of 4 ATP, but 2 ATP are consumed in the preparatory phase, so the net gain is 2 ATP.", neetFrequency: 4 },
        { question: "The first stable product of CO₂ fixation in sorghum is:", options: ["A. Pyruvic acid", "B. Oxaloacetic acid", "C. Succinic acid", "D. Phosphoglyceric acid"], answer: "B. Oxaloacetic acid", explanation: "Sorghum is a C4 plant. In C4 plants, the first product of CO₂ fixation is a 4-carbon compound, oxaloacetic acid.", neetFrequency: 3 },
        { question: "The element essential for the synthesis of auxin is:", options: ["A. Zinc", "B. Boron", "C. Iron", "D. Molybdenum"], answer: "A. Zinc", explanation: "Zinc (Zn²⁺) is required for the synthesis of auxin.", neetFrequency: 3 },
        { question: "In the electron transport chain, FADH₂ contributes to the synthesis of approximately how many ATP molecules?", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: "B. 2", explanation: "FADH₂ enters the ETC at a lower energy level than NADH, so it contributes to the synthesis of approximately 2 ATP molecules, compared to 3 from NADH.", neetFrequency: 3 },
        { question: "Which hormone is involved in phototropism?", options: ["A. Auxin", "B. Gibberellin", "C. Cytokinin", "D. Abscisic acid"], answer: "A. Auxin", explanation: "Phototropism, the bending of a plant towards light, is mediated by the migration of auxin away from the light source to the shaded side, promoting cell elongation there.", neetFrequency: 4 },
        { question: "Which of the following is a chemosynthetic autotroph?", options: ["A. Green sulfur bacteria", "B. Purple sulfur bacteria", "C. Nitrifying bacteria (e.g., Nitrosomonas)", "D. Cyanobacteria"], answer: "C. Nitrifying bacteria (e.g., Nitrosomonas)", explanation: "Nitrifying bacteria derive energy by oxidizing inorganic nitrogen compounds (like ammonia) rather than from light, making them chemosynthetic.", neetFrequency: 2 },
        { question: "The location of the electron transport system in plants is:", options: ["A. Outer mitochondrial membrane", "B. Inner mitochondrial membrane", "C. Cytosol", "D. Stroma"], answer: "B. Inner mitochondrial membrane", explanation: "The electron transport chain for cellular respiration is located on the inner mitochondrial membrane.", neetFrequency: 3 },
        { question: "The 'red drop' effect observed by Emerson is related to:", options: ["A. The presence of two photosystems", "B. The process of photorespiration", "C. The C4 pathway", "D. The opening of stomata"], answer: "A. The presence of two photosystems", explanation: "The drop in photosynthetic yield at wavelengths beyond 680 nm (red drop) and its enhancement when supplemented with shorter wavelength light led to the discovery of two photosystems (PS I and PS II).", neetFrequency: 1 },
        { question: "Leghemoglobin, found in root nodules, functions as an:", options: ["A. Oxygen scavenger", "B. Nitrogen donor", "C. Energy source", "D. Enzyme activator"], answer: "A. Oxygen scavenger", explanation: "Leghemoglobin has a high affinity for oxygen and binds it, creating an anaerobic environment necessary for the nitrogenase enzyme to function.", neetFrequency: 3 },
        { question: "The final product of the Krebs cycle is:", options: ["A. Pyruvic acid", "B. Acetyl-CoA", "C. Citric acid", "D. Oxaloacetic acid"], answer: "D. Oxaloacetic acid", explanation: "The Krebs cycle is a cycle because the final step regenerates oxaloacetic acid, which is ready to combine with a new molecule of Acetyl-CoA.", neetFrequency: 2 },
        { question: "Which hormone is primarily responsible for inducing dormancy in buds and seeds?", options: ["A. Auxin", "B. Gibberellin", "C. Cytokinin", "D. Abscisic acid (ABA)"], answer: "D. Abscisic acid (ABA)", explanation: "ABA acts as a general plant growth inhibitor and is instrumental in inducing and maintaining dormancy.", neetFrequency: 4 },
        { question: "Transpiration is least in:", options: ["A. High temperature", "B. Low humidity", "C. High wind speed", "D. High humidity"], answer: "D. High humidity", explanation: "High humidity means the air is already saturated with water vapor, reducing the water potential gradient between the leaf and the air, thus slowing down transpiration.", neetFrequency: 3 },
        { question: "The splitting of water molecules during photosynthesis is called:", options: ["A. Hydrolysis", "B. Photolysis", "C. Glycolysis", "D. Plasmolysis"], answer: "B. Photolysis", explanation: "Photolysis is the light-dependent splitting of water, which provides electrons and protons for the light reactions and releases oxygen.", neetFrequency: 2 },
        { question: "Apoplastic pathway for water movement involves:", options: ["A. Movement through the cytoplasm and plasmodesmata", "B. Movement through the cell walls and intercellular spaces", "C. Movement through the vacuole", "D. Active transport across the membrane"], answer: "B. Movement through the cell walls and intercellular spaces", explanation: "The apoplast consists of the non-living parts of the plant tissue—the cell walls and intercellular spaces.", neetFrequency: 3 }
    ],
    assertionReasons: [
        {
            assertion: "C4 plants are more efficient in photosynthesis than C3 plants.",
            reason: "C4 plants have a mechanism that increases the concentration of CO₂ at the RuBisCO enzyme site, thus minimizing photorespiration.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and is the correct explanation. The C4 pathway acts as a CO₂ pump, which prevents the wasteful photorespiration process that occurs in C3 plants under hot, dry conditions.",
            neetFrequency: 5
        },
        {
            assertion: "The deficiency of molybdenum causes a deficiency of nitrogen in plants.",
            reason: "Molybdenum is a component of the enzyme nitrate reductase.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and is the correct explanation. Nitrate reductase is essential for converting nitrate into forms that the plant can use to make proteins. Without Mo, this enzyme cannot function, leading to nitrogen deficiency.",
            neetFrequency: 3
        },
        {
            assertion: "Aerobic respiration yields more ATP than anaerobic respiration.",
            reason: "In aerobic respiration, the complete oxidation of glucose occurs.",
            answer: "A",
            explanation: "Assertion is true (approx. 38 ATP vs 2 ATP). The reason is also true and correctly explains why. Complete oxidation in the presence of oxygen allows the Krebs cycle and oxidative phosphorylation to extract much more energy.",
            neetFrequency: 4
        },
        {
            assertion: "Auxins promote the growth of the apical bud but inhibit the growth of axillary buds.",
            reason: "This phenomenon is called apical dominance.",
            answer: "B",
            explanation: "Both statements are true. The assertion describes the phenomenon, and the reason correctly names it as apical dominance. However, the reason is just a name for the phenomenon described in the assertion, not an explanation of the mechanism.",
            neetFrequency: 3
        },
        {
            assertion: "During the day, stomata are open.",
            reason: "The accumulation of K⁺ ions in the guard cells lowers their water potential, causing water to enter and the cells to become turgid.",
            answer: "A",
            explanation: "The assertion is generally true. The reason is also true and is the widely accepted mechanism (potassium pump theory) that explains how stomata open.",
            neetFrequency: 4
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Auxin", "(b) Gibberellin", "(c) Cytokinin", "(d) Ethylene"],
            column2: ["(p) Fruit ripening", "(q) Cell division", "(r) Apical dominance", "(s) Bolting"],
            answer: "a-r, b-s, c-q, d-p",
            explanation: "Matching plant hormones with their primary functions.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Glycolysis", "(b) Krebs Cycle", "(c) Light Reaction", "(d) Calvin Cycle"],
            column2: ["(p) Stroma of chloroplast", "(q) Thylakoid membrane", "(r) Mitochondrial matrix", "(s) Cytoplasm"],
            answer: "a-s, b-r, c-q, d-p",
            explanation: "Matching metabolic processes with their cellular location.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Nitrogen", "(b) Magnesium", "(c) Phosphorus", "(d) Zinc"],
            column2: ["(p) Constituent of ATP", "(q) Required for auxin synthesis", "(r) Constituent of chlorophyll", "(s) Constituent of proteins and nucleic acids"],
            answer: "a-s, b-r, c-p, d-q",
            explanation: "Matching mineral nutrients with their key roles in the plant.",
            neetFrequency: 4
        },
        {
            column1: ["(a) C3 Plants", "(b) C4 Plants", "(c) Transpiration", "(d) Guttation"],
            column2: ["(p) Loss of water as liquid", "(q) Kranz anatomy", "(r) Photorespiration present", "(s) Cooling of leaf surface"],
            answer: "a-r, b-q, c-s, d-p",
            explanation: "Matching plant types and processes with their characteristic features.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Plasmolysis", "(b) Imbibition", "(c) Osmosis", "(d) Diffusion"],
            column2: ["(p) Movement from higher to lower concentration", "(q) Swelling of seeds", "(r) Movement of water across a semipermeable membrane", "(s) Shrinkage of protoplast"],
            answer: "a-s, b-q, c-r, d-p",
            explanation: "Matching different water relation concepts with their definitions or examples.",
            neetFrequency: 3
        }
    ],
    keyTakeaways: [
        "Photosynthesis (in chloroplasts) converts light energy into chemical energy (food), while respiration (in mitochondria) releases that chemical energy for cellular work.",
        "Water transport in plants is primarily driven by the transpiration pull, a process based on the cohesive and adhesive properties of water.",
        "The Calvin cycle (C3 cycle) is the primary pathway for carbon fixation in most plants, but C4 plants have an adaptation to minimize photorespiration in hot climates.",
        "Plant growth regulators (hormones) control all aspects of plant growth and development, often working in conjunction or opposition to each other."
    ],
    mnemonics: [
        {
            text: "For plant hormones and their main function: 'Auxin makes you Grow, Gibberellin makes you Sprout, Cytokinin makes you Divide, Ethylene makes you Ripe, ABA makes you Sleep'.",
            tamil: "தாவர ஹார்மோன்களுக்கு: 'ஆக்சின் வளரச் செய்யும், ஜிப்ரலின் முளைக்க வைக்கும், சைட்டோகைனின் பிரிக்க வைக்கும், எத்திலீன் பழுக்க வைக்கும், ABA தூங்க வைக்கும்'."
        },
        {
            text: "For Krebs Cycle intermediates: 'Citrate Is Krebs Starting Substrate For Making Oxaloacetate' (Citrate, Isocitrate, α-Ketoglutarate, Succinyl-CoA, Succinate, Fumarate, Malate, Oxaloacetate).",
            tamil: "கிரெப்ஸ் சுழற்சி இடைநிலைகளுக்கு: 'Citrate Is Krebs Starting Substrate For Making Oxaloacetate'."
        }
    ],
    neetTips: [
        {
            text: "Make flowcharts for the C3, C4, Glycolysis, and Krebs cycles. Focus on the key inputs, outputs, and locations of each process. Direct questions on the number of ATP/NADPH used or produced are very common.",
            tamil: "C3, C4, கிளைகோலைசிஸ், மற்றும் கிரெப்ஸ் சுழற்சிகளுக்கு பாய்வு வரைபடங்களை உருவாக்கவும். ஒவ்வொரு செயல்முறையின் முக்கிய உள்ளீடுகள், வெளியீடுகள் மற்றும் இடங்கள் ஆகியவற்றில் கவனம் செலுத்துங்கள். பயன்படுத்தப்பட்ட அல்லது உற்பத்தி செய்யப்பட்ட ATP/NADPH எண்ணிக்கை குறித்த நேரடி கேள்விகள் மிகவும் பொதுவானவை."
        },
        {
            text: "Create a table for plant growth regulators, listing their functions, whether they are growth promoters or inhibitors, and a key application.",
            tamil: "தாவர வளர்ச்சி சீராக்கிகளுக்கு ஒரு அட்டவணையை உருவாக்கவும், அவற்றின் செயல்பாடுகள், அவை வளர்ச்சி ஊக்குவிப்பாளர்களா அல்லது தடுப்பாளர்களா, மற்றும் ஒரு முக்கிய பயன்பாட்டைப் பட்டியலிடவும்."
        }
    ],
    studentTip: {
        english: "Try to see these processes as a connected whole. Photosynthesis produces the glucose that respiration uses. Transport brings the water needed for photosynthesis. It's all one interconnected system.",
        tamil: "இந்த செயல்முறைகளை ஒரு இணைக்கப்பட்ட முழுமையாகப் பார்க்க முயற்சிக்கவும். ஒளிச்சேர்க்கை சுவாசம் பயன்படுத்தும் குளுக்கோஸை உற்பத்தி செய்கிறது. போக்குவரத்து ஒளிச்சேர்க்கைக்குத் தேவையான நீரைக் கொண்டுவருகிறது. இது அனைத்தும் ஒன்றுக்கொன்று இணைக்கப்பட்ட ஒரு அமைப்பு."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why did C4 plants evolve? What is the advantage of having the C4 pathway, especially in hot and dry climates?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: C4 தாவரங்கள் ஏன் பரிணமித்தன? C4 பாதையைக் கொண்டிருப்பதன் நன்மை என்ன, குறிப்பாக வெப்பமான மற்றும் வறண்ட காலநிலைகளில்?"
    },
    nextChapter: {
        title: "Human Physiology",
        titleTamil: "மனித உடற்செயலியல்"
    },
    validationReport: []
};
