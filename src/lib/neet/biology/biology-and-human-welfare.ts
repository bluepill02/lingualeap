
import type { NeetModule } from '@/lib/types';

export const biologyAndHumanWelfare: NeetModule = {
    id: 'neet-biology-biology-and-human-welfare',
    title: 'Biology and Human Welfare',
    chapter: 'Biology and Human Welfare',
    subject: 'Biology',
    learningObjectives: [
        "Understand common human diseases (causative agents, symptoms, prevention).",
        "Explain the human immune system, including innate and acquired immunity, and concepts like vaccination.",
        "Describe the role of microbes in industrial production of antibiotics, enzymes, and beverages.",
        "Understand the principles of sewage treatment and biogas production.",
        "Explain strategies for enhancement in food production, such as plant breeding and animal husbandry."
    ],
    prerequisites: [
        "Basic knowledge of cell biology.",
        "Understanding of microorganisms like bacteria, viruses, and fungi.",
        "Concepts of genetics and inheritance."
    ],
    conceptOverview: "This unit covers the application of biology for the welfare of humanity. It includes topics like human health and diseases, the immune system, common infections, and the role of microbes in producing antibiotics, beverages, and other industrial products. It emphasizes strategies for enhancement in food production and the welfare of society.",
    tamilConnection: "சித்த மருத்துவம் மற்றும் பாட்டி வைத்தியம் போன்ற தமிழ் மரபு மருத்துவ முறைகள், நோய்களைத் தடுப்பதற்கும் குணப்படுத்துவதற்கும் தாவரங்கள் மற்றும் நுண்ணுயிரிகளின் பயன்பாட்டை நீண்டகாலமாகப் புரிந்து வைத்துள்ளன. இந்த அத்தியாயம், அந்தப் பாரம்பரிய அறிவிற்கான நவீன அறிவியல் விளக்கத்தை அளிக்கிறது.",
    culturalContext: "The mass production of antibiotics like Penicillin, derived from microbes, revolutionized medicine globally and in India, drastically reducing mortality from bacterial infections. Similarly, the use of microbes in large-scale fermentation for producing beverages and foods like yogurt (தயிர்) is a direct application of principles studied in this chapter.",
    syllabusMapping: [{
        topic: 'Biology and Human Welfare',
        tnBoardChapter: '12th Std Zoology Ch 6, 8; 12th Std Botany Ch 8',
        ncertReference: 'Class 12 Biology - Unit 8',
        notes: 'Covers Human Health and Disease, Microbes in Human Welfare. Very important and scoring unit.',
        mappingDescription: 'Maps to various chapters in TN Board Std 12 Zoology and Botany.'
    }],
    stateBoardGaps: [
        "The detailed structure of an antibody molecule (H₂L₂), including the variable and constant regions, is a key focus in NCERT which might be less emphasized in state board texts.",
        "The concept of 'tissue culture' and 'somatic hybridization' (protoplast fusion) in the 'Strategies for Enhancement in Food Production' chapter is explained with more specific examples like the creation of 'Pomato' in NCERT.",
        "The complete life cycle of Plasmodium, with clear diagrams showing both the human host and mosquito host stages, is a very important NCERT topic that requires careful study.",
        "The specific names of microbes used in industrial production (e.g., Aspergillus niger for citric acid, Lactobacillus for lactic acid, Saccharomyces cerevisiae for ethanol) are frequently asked from NCERT.",
        "The role of different immune cells (B-lymphocytes, T-lymphocytes, Helper T-cells) and their distinction between humoral and cell-mediated immunity is a core conceptual point in NCERT."
    ],
    extraNeetConcepts: [
        "Single Cell Protein (SCP) as an alternative source of protein, with examples like Spirulina.",
        "The concept of 'biofortification' - breeding crops with higher levels of vitamins, minerals, or proteins.",
        "Understanding the mechanism of action of drugs that affect the nervous system, like opioids binding to receptors.",
        "The specific types of barriers in innate immunity (physical, physiological, cellular, cytokine).",
        "The role of Mycorrhiza as a biofertilizer and its symbiotic relationship with plant roots."
    ],
    ncertReadingGuide: [
        "In 'Human Health and Disease', Table 8.1 listing various diseases, their causative organisms, and symptoms is extremely high-yield. Memorize it thoroughly.",
        "The diagram of the antibody molecule (Figure 8.4) and the life cycle of Plasmodium (Figure 8.1) are frequently asked as diagram-based questions.",
        "In 'Microbes in Human Welfare', Table 10.1 (Microbes and their products) and Table 10.3 (Microbes as biocontrol agents) are sources of direct MCQs.",
        "Pay close attention to the flowchart of sewage treatment (Figure 10.6), understanding the difference between primary and secondary treatment.",
        "In 'Strategies for Enhancement', focus on the examples of crop varieties developed for disease resistance (Table 9.1) and pest resistance (Table 9.2)."
    ],
    mcqs: [
        {
            question: "Typhoid fever is caused by which pathogen?",
            options: ["A. Plasmodium vivax", "B. Streptococcus pneumoniae", "C. Salmonella typhi", "D. Wuchereria bancrofti"],
            answer: "C. Salmonella typhi",
            explanation: "Typhoid fever is caused by the bacterium Salmonella typhi, which is transmitted through contaminated food and water.",
            neetFrequency: 5
        },
        {
            question: "The 'Ringworm' disease in humans is caused by:",
            options: ["A. Bacteria", "B. Viruses", "C. Fungi", "D. Protozoans"],
            answer: "C. Fungi",
            explanation: "Ringworm is a common fungal infection of the skin caused by genera like Microsporum, Trichophyton, and Epidermophyton.",
            neetFrequency: 4
        },
        {
            question: "Which of the following provides cell-mediated immunity?",
            options: ["A. B-lymphocytes", "B. T-lymphocytes", "C. Plasma cells", "D. Antibodies"],
            answer: "B. T-lymphocytes",
            explanation: "T-lymphocytes mediate Cell-Mediated Immunity (CMI), while B-lymphocytes are responsible for antibody-mediated (humoral) immunity.",
            neetFrequency: 5
        },
        {
            question: "Antibiotics are effective against:",
            options: ["A. Viruses", "B. Bacteria", "C. Fungi", "D. All of the above"],
            answer: "B. Bacteria",
            explanation: "Antibiotics are drugs that kill or inhibit the growth of bacteria. They are generally not effective against viruses or fungi.",
            neetFrequency: 3
        },
        {
            question: "The technology of biogas production was developed in India mainly due to the efforts of:",
            options: ["A. IARI and KVIC", "B. ISRO and DRDO", "C. CSIR and ICMR", "D. BARC and TIFR"],
            answer: "A. IARI and KVIC",
            explanation: "The Indian Agricultural Research Institute (IARI) and Khadi and Village Industries Commission (KVIC) developed the technology for biogas production.",
            neetFrequency: 2
        },
        {
            question: "Which of the following is used as a 'clot-buster' for removing clots from the blood vessels of patients?",
            options: ["A. Lipase", "B. Streptokinase", "C. Cyclosporin A", "D. Statins"],
            answer: "B. Streptokinase",
            explanation: "Streptokinase, produced by the bacterium Streptococcus, is used as a clot-buster for patients who have suffered a myocardial infarction.",
            neetFrequency: 4
        },
        {
            question: "'Himgiri' is a variety of wheat resistant to:",
            options: ["A. White rust", "B. Bacterial blight", "C. Leaf and stripe rust, hill bunt", "D. Black rot"],
            answer: "C. Leaf and stripe rust, hill bunt",
            explanation: "Himgiri is a variety of wheat developed by hybridization and selection for disease resistance to leaf and stripe rust, and hill bunt.",
            neetFrequency: 3
        },
        {
            question: "The 'Widal Test' is used for the diagnosis of:",
            options: ["A. Malaria", "B. Pneumonia", "C. AIDS", "D. Typhoid"],
            answer: "D. Typhoid",
            explanation: "The Widal test is a serological test used to diagnose typhoid fever by detecting antibodies against the Salmonella typhi bacterium.",
            neetFrequency: 5
        },
        {
            question: "Which antibody is most abundant in colostrum (first milk)?",
            options: ["A. IgG", "B. IgM", "C. IgA", "D. IgE"],
            answer: "C. IgA",
            explanation: "Colostrum is rich in IgA antibodies, which provides passive immunity to the newborn infant.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is a hallucinogenic drug?",
            options: ["A. Morphine", "B. Cocaine", "C. LSD (Lysergic acid diethylamide)", "D. Heroin"],
            answer: "C. LSD (Lysergic acid diethylamide)",
            explanation: "LSD is a potent hallucinogen derived from the fungus Claviceps purpurea.",
            neetFrequency: 2
        },
        {
            question: "The infective stage of Plasmodium that enters the human body is the:",
            options: ["A. Merozoite", "B. Gametocyte", "C. Sporozoite", "D. Trophozoite"],
            answer: "C. Sporozoite",
            explanation: "When an infected female Anopheles mosquito bites a human, it injects sporozoites into the bloodstream.",
            neetFrequency: 5
        },
        {
            question: "The primary lymphoid organs are:",
            options: ["A. Spleen and lymph nodes", "B. Bone marrow and thymus", "C. Tonsils and spleen", "D. Appendix and Peyer's patches"],
            answer: "B. Bone marrow and thymus",
            explanation: "Primary lymphoid organs (bone marrow and thymus) are where immature lymphocytes differentiate into antigen-sensitive lymphocytes.",
            neetFrequency: 3
        },
        {
            question: "Cyclosporin A, an immunosuppressive agent, is produced by the fungus:",
            options: ["A. Penicillium notatum", "B. Saccharomyces cerevisiae", "C. Trichoderma polysporum", "D. Aspergillus niger"],
            answer: "C. Trichoderma polysporum",
            explanation: "The fungus Trichoderma polysporum is the source of cyclosporin A, used in organ transplant patients.",
            neetFrequency: 4
        },
        {
            question: "In sewage treatment, the flocs are:",
            options: ["A. Masses of bacteria associated with fungal filaments", "B. Masses of algae and fungi", "C. Sludge from the primary treatment", "D. A type of chemical precipitate"],
            answer: "A. Masses of bacteria associated with fungal filaments",
            explanation: "Flocs are mesh-like structures formed by masses of aerobic bacteria associated with fungal filaments, used in secondary sewage treatment.",
            neetFrequency: 3
        },
        {
            question: "Which of the following is an example of biofortification?",
            options: ["A. Creating pest-resistant cotton (Bt-cotton)", "B. Producing a plant with a higher vitamin A content", "C. Using microbes to control pests", "D. Growing plants in a soilless medium"],
            answer: "B. Producing a plant with a higher vitamin A content",
            explanation: "Biofortification is the process of breeding crops with higher levels of vitamins, minerals, or other nutrients. Golden rice is a classic example.",
            neetFrequency: 2
        },
        {
            question: "The 'slash and burn' agriculture, or Jhum cultivation, is primarily practiced in:",
            options: ["A. The Gangetic plains of India", "B. The deserts of Rajasthan", "C. The North-Eastern states of India", "D. The coastal regions of Kerala"],
            answer: "C. The North-Eastern states of India",
            explanation: "Jhum cultivation is a traditional agricultural practice in the hilly areas of the North-Eastern states.",
            neetFrequency: 1
        },
        {
            question: "The part of the body affected by pneumonia is:",
            options: ["A. Liver", "B. Intestine", "C. Lungs (alveoli)", "D. Brain"],
            answer: "C. Lungs (alveoli)",
            explanation: "Pneumonia is an infection that inflames the air sacs (alveoli) in one or both lungs.",
            neetFrequency: 4
        },
        {
            question: "The principle of vaccination is based on the property of the immune system called:",
            options: ["A. Memory", "B. Specificity", "C. Diversity", "D. Self-tolerance"],
            answer: "A. Memory",
            explanation: "Vaccination works by introducing antigens into the body to generate a primary immune response and memory cells. A subsequent natural infection elicits a rapid and massive secondary response.",
            neetFrequency: 3
        },
        {
            question: "Statins, used as blood cholesterol-lowering agents, are produced by:",
            options: ["A. Bacteria", "B. Algae", "C. Yeast", "D. Viruses"],
            answer: "C. Yeast",
            explanation: "Statins are produced by the yeast Monascus purpureus and competitively inhibit the enzyme responsible for cholesterol synthesis.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is a free-living nitrogen-fixing bacterium?",
            options: ["A. Rhizobium", "B. Azospirillum", "C. Frankia", "D. Anabaena"],
            answer: "B. Azospirillum",
            explanation: "Azospirillum and Azotobacter are free-living nitrogen-fixing bacteria, while Rhizobium and Frankia are symbiotic.",
            neetFrequency: 3
        },
        {
            question: "In plant breeding, the entire collection of plants/seeds having all the diverse alleles for all genes in a given crop is called:",
            options: ["A. A pure line", "B. A selection", "C. A hybrid", "D. Germplasm collection"],
            answer: "D. Germplasm collection",
            explanation: "Germplasm collection is the sum total of all the alleles for all the genes present in a given crop.",
            neetFrequency: 2
        },
        {
            question: "Single Cell Protein (SCP) refers to:",
            options: ["A. A specific protein from a single cell", "B. Large scale production of microbial biomass as a source of protein", "C. A protein coat of a virus", "D. A protein found in a cell membrane"],
            answer: "B. Large scale production of microbial biomass as a source of protein",
            explanation: "SCP is the production of edible protein from microbes like bacteria, yeast, or algae.",
            neetFrequency: 2
        },
        {
            question: "Which of the following diseases is transmitted by the bite of a female mosquito vector?",
            options: ["A. Ringworm", "B. Ascariasis", "C. Filariasis (Elephantiasis)", "D. Amoebiasis"],
            answer: "C. Filariasis (Elephantiasis)",
            explanation: "Filariasis is caused by the filarial worm Wuchereria and is transmitted by the bite of female Culex mosquitoes.",
            neetFrequency: 4
        },
        {
            question: "The chemical test used for diagnosis of AIDS is:",
            options: ["A. Widal Test", "B. ELISA Test", "C. ESR Test", "D. PCR Test"],
            answer: "B. ELISA Test",
            explanation: "ELISA (Enzyme-Linked Immunosorbent Assay) is a widely used screening test for AIDS. PCR is used for confirmation.",
            neetFrequency: 3
        },
        {
            question: "Which gas is the main component of biogas?",
            options: ["A. Carbon dioxide", "B. Methane", "C. Hydrogen sulphide", "D. Nitrogen"],
            answer: "B. Methane",
            explanation: "Biogas is a mixture of gases, predominantly methane (CH₄).",
            neetFrequency: 3
        },
        { question: "Auto-Immune disease is:", options: ["A. When the body's immune system attacks self-cells", "B. An allergic reaction", "C. A congenital disease", "D. An infectious disease"], answer: "A. When the body's immune system attacks self-cells", explanation: "In an autoimmune disease, the body fails to recognize self from non-self and attacks its own tissues. Rheumatoid arthritis is an example.", neetFrequency: 2 },
        { question: "The drug 'smack' is a derivative of:", options: ["A. Cocaine", "B. Marijuana", "C. Morphine", "D. Caffeine"], answer: "C. Morphine", explanation: "Heroin, commonly called smack, is chemically diacetylmorphine, which is obtained by acetylation of morphine.", neetFrequency: 3 },
        { question: "Ladybird beetles are useful to get rid of:", options: ["A. Aphids", "B. Mosquitoes", "C. Butterflies", "D. Moths"], answer: "A. Aphids", explanation: "The Ladybird beetle is a common biocontrol agent used to control aphid populations in agriculture.", neetFrequency: 2 },
        { question: "The technique of growing plants in a nutrient solution, in complete absence of soil, is known as:", options: ["A. Aquaculture", "B. Hydroponics", "C. Tissue culture", "D. Biofortification"], answer: "B. Hydroponics", explanation: "This is the definition of hydroponics.", neetFrequency: 1 },
        { question: "The technique of producing thousands of plants through tissue culture is called:", options: ["A. Micropropagation", "B. Somatic hybridization", "C. Biofortification", "D. Protoplast fusion"], answer: "A. Micropropagation", explanation: "Micropropagation is the process of rapidly multiplying plant material to produce a large number of progeny plants.", neetFrequency: 3 },
        { question: "Which of the following is a physiological barrier of innate immunity?", options: ["A. Skin", "B. Mucus coating", "C. Acid in the stomach", "D. Macrophages"], answer: "C. Acid in the stomach", explanation: "Skin and mucus are physical barriers. Macrophages are cellular barriers. Acid in the stomach and saliva in the mouth are physiological barriers.", neetFrequency: 4 },
        { question: "MALT constitutes about what percentage of the lymphoid tissue in the human body?", options: ["A. 10%", "B. 20%", "C. 50%", "D. 70%"], answer: "C. 50%", explanation: "Mucosal Associated Lymphoid Tissue (MALT) constitutes about 50 percent of the lymphoid tissue in the human body.", neetFrequency: 1 },
        { question: "In 'MOET' technology, the 'M' and 'E' stand for:", options: ["A. Multiple Ovulation & Egg Transfer", "B. Multiple Ovulation & Embryo Transfer", "C. Mechanical Ovulation & Embryo Transfer", "D. Mono Ovulation & Egg Transfer"], answer: "B. Multiple Ovulation & Embryo Transfer", explanation: "MOET stands for Multiple Ovulation Embryo Transfer technology, used in animal breeding.", neetFrequency: 2 },
        { question: "Which of the following is not a symptom of malaria?", options: ["A. High fever recurring every 3-4 days", "B. Chills and shivering", "C. Intestinal perforation", "D. Headache"], answer: "C. Intestinal perforation", explanation: "Intestinal perforation and death in severe cases is a symptom of typhoid, not malaria.", neetFrequency: 3 },
        { question: "The use of bio-resources by multinational companies and other organizations without proper authorization from the countries and people concerned is termed:", options: ["A. Biotechnology", "B. Bio-prospecting", "C. Bio-piracy", "D. Bio-ethics"], answer: "C. Bio-piracy", explanation: "This is the definition of biopiracy.", neetFrequency: 1 },
        { question: "The antibody involved in allergic reactions is:", options: ["A. IgA", "B. IgG", "C. IgM", "D. IgE"], answer: "D. IgE", explanation: "IgE type antibodies are produced in response to allergens.", neetFrequency: 4 },
        { question: "Cancer cells are characterized by:", options: ["A. Contact inhibition", "B. Uncontrolled proliferation", "C. Apoptosis", "D. Limited growth"], answer: "B. Uncontrolled proliferation", explanation: "Cancer cells lose the property of contact inhibition and show uncontrolled cell division.", neetFrequency: 3 },
        { question: "The pathogen 'Haemophilus influenzae' causes:", options: ["A. Common cold", "B. Pneumonia", "C. Malaria", "D. Diphtheria"], answer: "B. Pneumonia", explanation: "Haemophilus influenzae is one of the bacteria that can cause pneumonia, along with Streptococcus pneumoniae.", neetFrequency: 3 },
        { question: "Which part of the poppy plant is used to extract opium?", options: ["A. Flowers", "B. Leaves", "C. Roots", "D. Latex from unripe capsules"], answer: "D. Latex from unripe capsules", explanation: "Opium is extracted from the latex of the unripe seed pods (capsules) of the poppy plant, Papaver somniferum.", neetFrequency: 2 },
        { question: "The 'Roquefort cheese' is ripened by using a specific:", options: ["A. Bacterium", "B. Yeast", "C. Fungus", "D. Alga"], answer: "C. Fungus", explanation: "Roquefort cheese is ripened by growing a specific fungus on it, which gives it a particular flavour.", neetFrequency: 1 },
        { question: "Which of the following is an example of active immunity?", options: ["A. Antibodies transferred from mother to foetus through placenta", "B. Antibodies present in colostrum", "C. Infection with a pathogen", "D. Injection of anti-venom"], answer: "C. Infection with a pathogen", explanation: "Active immunity is developed when a person's own cells produce antibodies in response to an infection or vaccination. The others are examples of passive immunity.", neetFrequency: 4 },
        { question: "The large holes in 'Swiss cheese' are due to the production of a large amount of CO₂ by a bacterium named:", options: ["A. Lactobacillus", "B. Saccharomyces cerevisiae", "C. Propionibacterium shermanii", "D. Aspergillus niger"], answer: "C. Propionibacterium shermanii", explanation: "This bacterium is responsible for the characteristic holes and flavor of Swiss cheese.", neetFrequency: 2 },
        { question: "Which of the following is a communicable disease?", options: ["A. Cancer", "B. Diabetes", "C. Allergy", "D. Common Cold"], answer: "D. Common Cold", explanation: "Communicable or infectious diseases can spread from one person to another. The common cold is caused by rhinoviruses.", neetFrequency: 1 },
        { question: "Somatic hybridization is achieved through:", options: ["A. Grafting", "B. Protoplast fusion", "C. Micropropagation", "D. Hybrid breeding"], answer: "B. Protoplast fusion", explanation: "Protoplasts (cells without cell walls) from two different varieties are fused to get a hybrid protoplast, which can be grown to form a new plant.", neetFrequency: 2 },
        { question: "What is the function of methanogens in the rumen of cattle?", options: ["A. Digest proteins", "B. Digest cellulose", "C. Produce vitamins", "D. Kill harmful bacteria"], answer: "B. Digest cellulose", explanation: "Methanogens are present in the gut of ruminants and help in the breakdown of cellulose.", neetFrequency: 3 },
        { question: "Which of the following is a secondary metabolite obtained from a plant?", options: ["A. Glucose", "B. Amino acid", "C. Morphine", "D. Starch"], answer: "C. Morphine", explanation: "Morphine is an alkaloid, which is a type of secondary metabolite. Glucose, amino acids, and starch are primary metabolites.", neetFrequency: 2 },
        { question: "The 'Father of the Green Revolution' in India is:", options: ["A. M.S. Swaminathan", "B. Norman Borlaug", "C. Verghese Kurien", "D. C.V. Raman"], answer: "A. M.S. Swaminathan", explanation: "M.S. Swaminathan is renowned as the Father of the Green Revolution in India for his role in developing high-yielding wheat varieties.", neetFrequency: 1 },
        { question: "Which of the following is a viral disease?", options: ["A. Diphtheria", "B. Filariasis", "C. Typhoid", "D. Polio"], answer: "D. Polio", explanation: "Polio is caused by the poliovirus. Diphtheria and typhoid are bacterial, and filariasis is caused by a helminth.", neetFrequency: 3 },
        { question: "The term 'totipotency' refers to the capacity of:", options: ["A. A cell to generate a whole plant", "B. A bud to sprout", "C. A seed to germinate", "D. A flower to produce fruit"], answer: "A. A cell to generate a whole plant", explanation: "Totipotency is the inherent potential of a plant cell to grow and develop into a complete plant.", neetFrequency: 2 },
        { question: "The BOD (Biochemical Oxygen Demand) of waste water is a measure of:", options: ["A. The amount of toxic chemicals", "B. The amount of organic matter", "C. The number of bacteria", "D. The amount of dissolved oxygen"], answer: "B. The amount of organic matter", explanation: "BOD is a measure of the oxygen required by aerobic bacteria to decompose the organic matter present in a sample of water. A higher BOD indicates more pollution.", neetFrequency: 4 }
    ]
,
    assertionReasons: [
        {
            assertion: "Active immunity is slow and takes time to give its full effective response.",
            reason: "Active immunity is produced when antibodies are given directly to the body.",
            answer: "C",
            explanation: "Assertion is true. Reason is false. Active immunity is produced when the body's own cells produce antibodies in response to an antigen. Giving ready-made antibodies is passive immunity.",
            neetFrequency: 4
        },
        {
            assertion: "Aniline is a weaker base than ammonia.",
            reason: "The lone pair of electrons on the nitrogen atom in aniline is delocalized into the benzene ring.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and is the correct explanation for the decreased basicity of aniline.",
            neetFrequency: 5
        },
        {
            assertion: "Penicillin is a broad-spectrum antibiotic.",
            reason: "Penicillin is effective against a wide range of disease-causing bacteria.",
            answer: "D",
            explanation: "Assertion is false. Penicillin is a narrow-spectrum antibiotic, primarily effective against gram-positive bacteria. The reason is the definition of a broad-spectrum antibiotic, which is true in itself.",
            neetFrequency: 2
        },
        {
            assertion: "Interferons are a type of protein that helps non-infected cells to protect themselves from viral infection.",
            reason: "Interferons are secreted by virus-infected cells.",
            answer: "A",
            explanation: "Both Assertion and Reason are true, and the Reason is the correct explanation. Virus-infected cells produce interferons which protect neighboring non-infected cells from further viral infection.",
            neetFrequency: 3
        },
        {
            assertion: "The use of biofertilizers is recommended to reduce dependence on chemical fertilizers.",
            reason: "Biofertilizers are organisms that enrich the nutrient quality of the soil.",
            answer: "A",
            explanation: "Both statements are true, and the reason correctly explains why biofertilizers are recommended.",
            neetFrequency: 3
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Typhoid", "(b) Malaria", "(c) Pneumonia", "(d) Filariasis"],
            column2: ["(p) Wuchereria bancrofti", "(q) Haemophilus influenzae", "(r) Plasmodium vivax", "(s) Salmonella typhi"],
            answer: "a-s, b-r, c-q, d-p",
            explanation: "Matching the disease with its causative pathogen.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Opioid", "(b) Cannabinoid", "(c) Coca alkaloid", "(d) Hallucinogen"],
            column2: ["(p) Cocaine", "(q) Charas", "(r) Morphine", "(s) Datura"],
            answer: "a-r, b-q, c-p, d-s",
            explanation: "Matching the drug category with a representative example."
        },
        {
            column1: ["(a) Citric acid", "(b) Cyclosporin A", "(c) Statins", "(d) Butyric acid"],
            column2: ["(p) Yeast (Monascus)", "(q) Fungus (Aspergillus)", "(r) Bacterium (Clostridium)", "(s) Fungus (Trichoderma)"],
            answer: "a-q, b-s, c-p, d-r",
            explanation: "Matching the chemical product with the microbe that produces it.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Innate immunity", "(b) Active immunity", "(c) Passive immunity", "(d) Autoimmunity"],
            column2: ["(p) Vaccination", "(q) Rheumatoid arthritis", "(r) Colostrum", "(s) Physical barriers"],
            answer: "a-s, b-p, c-r, d-q",
            explanation: "Matching the type of immunity with its correct example or component.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Biofertilizer", "(b) Biocontrol agent", "(c) Biogas", "(d) SCP"],
            column2: ["(p) Methane", "(q) Spirulina", "(r) Rhizobium", "(s) Bacillus thuringiensis"],
            answer: "a-r, b-s, c-p, d-q",
            explanation: "Matching the biotechnological term with its correct example.",
            neetFrequency: 3
        }
    ],
    keyFormulasAndDiagrams: {},
    keyTakeaways: [
        "Understanding the life cycles of pathogens like Plasmodium is crucial for identifying infective stages and points of intervention.",
        "The immune system has two main branches: innate (non-specific, present from birth) and acquired (pathogen-specific, has memory).",
        "Microbes are not just harmful; they are extensively used in industry to produce valuable products like antibiotics, enzymes, and beverages.",
        "Modern agricultural strategies involve techniques like plant breeding, tissue culture, and SCP to meet the growing demand for food.",
        "Reproductive health is a critical aspect of human welfare, involving contraception and management of sexually transmitted diseases."
    ],
    mnemonics: [
        {
            text: "To remember common fungal diseases: 'Ring-a-ring-a-roses, Fungi in your toeses!' Helps remember Ringworm.",
            tamil: "'ரிங்-அ-ரிங்-அ-ரோசஸ், உங்கள் கால்விரல்களில் பூஞ்சைகள்!' இது படர்தாமரையை நினைவில் கொள்ள உதவுகிறது."
        },
        {
            text: "For primary vs. secondary lymphoid organs: 'B.T. Primary'. Bone marrow and Thymus are Primary.",
            tamil: "முதன்மை மற்றும் இரண்டாம் நிலை நிணநீர் உறுப்புகளுக்கு: 'B.T. பிரைமரி'. எலும்பு மஜ்ஜை மற்றும் தைமஸ் முதன்மையானவை."
        }
    ],
    neetTips: [
        {
            text: "Tables listing diseases, causative organisms, and symptoms from NCERT are a source of direct, high-yield questions. Create flashcards for them.",
            tamil: "NCERT-இலிருந்து நோய்கள், காரணி உயிரினங்கள் மற்றும் அறிகுறிகளைப் பட்டியலிடும் அட்டவணைகள், நேரடி, அதிக மதிப்பெண் தரும் கேள்விகளின் மூலமாகும். அவற்றுக்கு ஃபிளாஷ் கார்டுகளை உருவாக்கவும்."
        },
        {
            text: "Differentiate clearly between active and passive immunity, and natural vs. artificial types of each. Questions often test these specific classifications.",
            tamil: "செயல்படு மற்றும் மந்தமான நோய் எதிர்ப்பு சக்தி, மற்றும் ஒவ்வொன்றின் இயற்கை மற்றும் செயற்கை வகைகளுக்கு இடையே தெளிவாக வேறுபடுத்துங்கள். கேள்விகள் பெரும்பாலும் இந்த குறிப்பிட்ட வகைப்பாடுகளை சோதிக்கின்றன."
        }
    ],
    studentTip: {
        english: "Connect the dots. For example, understand how vaccination boosts acquired immunity, and how antibiotics (products of microbes) are used to fight diseases. This interconnected knowledge is powerful.",
        tamil: "புள்ளிகளை இணைக்கவும். உதாரணமாக, தடுப்பூசி எவ்வாறு பெறப்பட்ட நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது, மற்றும் நுண்ணுயிரிகளின் தயாரிப்புகளான நுண்ணுயிர் எதிர்ப்பிகள் எவ்வாறு நோய்களை எதிர்த்துப் போராடப் பயன்படுத்தப்படுகின்றன என்பதைப் புரிந்து கொள்ளுங்கள். இந்த ஒன்றோடொன்று இணைக்கப்பட்ட அறிவு சக்தி வாய்ந்தது."
    },
    peerDiscussion: {
        english: "Discuss with a friend the pros and cons of using bio-control agents versus chemical pesticides in agriculture.",
        tamil: "வேளாண்மையில் இரசாயன பூச்சிக்கொல்லிகளுக்கு எதிராக உயிரி-கட்டுப்பாட்டு முகவர்களைப் பயன்படுத்துவதன் நன்மை தீமைகள் பற்றி உங்கள் நண்பருடன் விவாதிக்கவும்."
    },
    nextChapter: {
        title: "Biotechnology and Its Applications",
        titleTamil: "உயிரித் தொழில்நுட்பவியல் மற்றும் அதன் பயன்பாடுகள்"
    },
    validationReport: []
};
