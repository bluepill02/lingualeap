
import type { NeetModule } from '@/lib/types';

export const biotechnologyAndItsApplications: NeetModule = {
    id: 'neet-biology-biotechnology-and-its-applications',
    title: 'Biology - Biotechnology and Its Applications (உயிரித் தொழில்நுட்பவியல் மற்றும் அதன் பயன்பாடுகள்)',
    chapter: 'Biotechnology and Its Applications',
    subject: 'Biology',
    learningObjectives: [
        "Understand the principles of biotechnology, including recombinant DNA technology and genetic engineering.",
        "Describe the applications of biotechnology in agriculture, such as the production of pest-resistant plants (e.g., Bt-cotton) and enhancing nutritional value.",
        "Explain the applications of biotechnology in medicine, including the production of insulin, gene therapy, and molecular diagnosis (PCR, ELISA).",
        "Discuss the use of transgenic animals for producing biological products.",
        "Analyze the ethical issues related to genetic modification (GM organisms) and biotechnology, including biopiracy."
    ],
    prerequisites: [
        "Molecular Basis of Inheritance (DNA structure, replication, transcription, translation).",
        "Understanding of enzymes and basic biochemical pathways.",
        "Knowledge of cell structure and function."
    ],
    conceptOverview: "This unit focuses on the practical applications of biotechnology. It covers the use of genetically modified organisms in agriculture (like Bt-cotton), medicine (like insulin production), and other fields. Key topics include gene therapy, molecular diagnosis (PCR, ELISA), and transgenic animals. It also delves into the ethical issues related to genetic modification and the need for regulatory bodies like GEAC.",
    tamilConnection: "தமிழ்நாட்டின் விவசாயத்தில், வறட்சியைத் தாங்கும் மற்றும் பூச்சி எதிர்ப்புத் திறன் கொண்ட பயிர்களை உருவாக்குவது போன்ற உயிரி தொழில்நுட்பத்தின் பயன்பாடுகள் மிக முக்கியமானவை. இட்லி, தோசை மாவு புளிப்பது முதல், தயிர் உறைவது வரை, நம் சமையலறையில் நடக்கும் நொதித்தல் செயல்முறைகள், நுண்ணுயிரிகளின் உயிரி தொழில்நுட்பப் பயன்பாடுகளுக்கு சிறந்த எடுத்துக்காட்டுகளாகும்.",
    culturalContext: "The development of Bt-cotton has had a significant impact on the cotton farming industry in states like Tamil Nadu and Maharashtra, by providing resistance against bollworm pests. This is a real-world, large-scale application of the genetic engineering principles discussed in this chapter.",
    syllabusMapping: [{
        topic: 'Biotechnology and its Applications',
        tnBoardChapter: '12th Std Botany Ch 5, 6; 12th Std Zoology Ch 5',
        ncertReference: 'Class 12 Biology - Chapters 11 & 12',
        notes: 'Conceptual and application-based questions are common. Focus on processes like PCR, rDNA technology, RNAi, and applications like Bt-cotton and insulin production.',
        mappingDescription: 'Maps to chapters on Plant and Animal Biotechnology in TN Board Std 12.'
    }],
    stateBoardGaps: [
        "The detailed mechanism of RNA interference (RNAi) for pest resistance in tobacco plants is a core topic in NCERT, often tested with specific reference to *Meloidegyne incognita*.",
        "The specific steps involved in producing genetically engineered insulin, including the assembly of A and B chains, are explained in more detail in NCERT.",
        "The role and full form of GEAC (Genetic Engineering Appraisal Committee) and its function in regulating GM research is an important point for NEET from the NCERT textbook.",
        "The discussion on 'biopiracy' with specific examples like Basmati rice and turmeric is more prominent in NCERT.",
        "The application of PCR in molecular diagnostics for early detection of diseases like HIV is explicitly mentioned and is a common source of questions."
    ],
    extraNeetConcepts: [
        "Transgenic animals and their specific applications, such as 'Rosie' the cow which produced human protein-enriched milk.",
        "The use of Ti plasmid from *Agrobacterium tumefaciens* as a natural genetic engineer for plants.",
        "The concept of 'gene therapy' and the distinction between somatic cell and germ line gene therapy.",
        "The ethical concerns surrounding GMOs, including potential effects on biodiversity and the need for careful evaluation."
    ],
    ncertReadingGuide: [
        "In Chapter 11, focus on the diagrams illustrating rDNA technology, especially Figure 11.2 (Restriction enzyme action) and Figure 11.4 (Steps in PCR).",
        "Figure 11.7 showing the structure of pBR322 is very important. Understand the role of 'ori', 'rop', selectable markers (ampR, tetR), and cloning sites.",
        "In Chapter 12, the flowchart for the production of Bt cotton (Figure 12.1) and the mechanism of RNA interference (Figure 12.2) are crucial.",
        "Figure 12.3, which illustrates the maturation of pro-insulin into insulin, is frequently asked.",
        "Pay close attention to the section on ethical issues. Questions on GEAC and biopiracy are common."
    ],
    mcqs: [
        { question: "The bacterium 'Bacillus thuringiensis' is used to produce:", options: ["A. An antibiotic", "B. An insecticide", "C. A vaccine", "D. A growth hormone"], answer: "B. An insecticide", explanation: "Bt produces a protein crystal containing a toxic insecticidal protein. The gene for this toxin (cry gene) is transferred to plants to make them pest-resistant.", neetFrequency: 5 },
        { question: "The two polypeptide chains of human insulin are linked together by:", options: ["A. Hydrogen bonds", "B. Glycosidic bonds", "C. Phosphodiester bonds", "D. Disulphide bridges"], answer: "D. Disulphide bridges", explanation: "The A and B chains of mature insulin are linked by two disulphide bridges.", neetFrequency: 4 },
        { question: "Which of the following is used as a vector for cloning genes into higher organisms?", options: ["A. Retrovirus", "B. Baculovirus", "C. Salmonella typhimurium", "D. Rhizopus nigricans"], answer: "A. Retrovirus", explanation: "Retroviruses in animals and Agrobacterium tumefaciens in plants are used as vectors because of their ability to deliver genes to host cells.", neetFrequency: 3 },
        { question: "The first transgenic cow, Rosie, produced milk that was enriched with:", options: ["A. Casein", "B. Human alpha-lactalbumin", "C. Vitamin C", "D. Iron"], answer: "B. Human alpha-lactalbumin", explanation: "Rosie produced human protein-enriched milk (2.4 grams per litre) which was nutritionally more balanced for human babies.", neetFrequency: 2 },
        { question: "RNA interference (RNAi) is used for developing pest-resistant plants. It involves:", options: ["A. Silencing of a specific mRNA using a complementary dsRNA", "B. Synthesis of a new protein", "C. Blocking transcription", "D. Enhancing translation"], answer: "A. Silencing of a specific mRNA using a complementary dsRNA", explanation: "RNAi takes place in all eukaryotic organisms as a method of cellular defense. This method involves silencing of a specific mRNA due to a complementary dsRNA molecule.", neetFrequency: 5 },
        { question: "The technique used for the amplification of a gene of interest is:", options: ["A. ELISA", "B. PCR", "C. Gel electrophoresis", "D. Gene therapy"], answer: "B. PCR", explanation: "Polymerase Chain Reaction (PCR) is a technique used to make multiple copies of a specific segment of DNA.", neetFrequency: 4 },
        { question: "The Indian government organization that regulates the validity of GM research and the safety of GM organisms is:", options: ["A. ICMR", "B. CSIR", "C. GEAC", "D. IARI"], answer: "C. GEAC", explanation: "GEAC stands for Genetic Engineering Appraisal Committee.", neetFrequency: 3 },
        { question: "The site of production of ADA in the body is:", options: ["A. Erythrocytes", "B. Lymphocytes", "C. Platelets", "D. Monocytes"], answer: "B. Lymphocytes", explanation: "Adenosine deaminase (ADA) is crucial for the immune system to function, and the enzyme is produced in lymphocytes.", neetFrequency: 2 },
        { question: "Golden rice is a transgenic crop of the future with which of the following improved traits?", options: ["A. High protein content", "B. High Vitamin A content", "C. Pest resistance", "D. Drought resistance"], answer: "B. High Vitamin A content", explanation: "Golden rice is a genetically modified variety of rice that is biofortified to produce beta-carotene, a precursor of Vitamin A.", neetFrequency: 4 },
        { question: "In gel electrophoresis, separated DNA fragments can be visualized with the help of:", options: ["A. Ethidium bromide in UV radiation", "B. Acetocarmine in bright light", "C. Aniline blue in visible light", "D. Ethidium bromide in infrared radiation"], answer: "A. Ethidium bromide in UV radiation", explanation: "The separated DNA fragments are stained with ethidium bromide and then visualized under UV radiation, where they appear as orange bands.", neetFrequency: 3 },
        { question: "The term 'biopiracy' refers to:", options: ["A. Use of bio-resources without proper authorization", "B. Use of biotechnology for criminal investigation", "C. Unethical use of an organism's patent", "D. Both A and C"], answer: "D. Both A and C", explanation: "Biopiracy refers to the use of bio-resources by companies and other organizations without proper authorisation from the countries and people concerned, and without compensatory payment. It often involves patenting traditional knowledge.", neetFrequency: 2 },
        { question: "The DNA fragments separated on an agarose gel can be visualised after staining with:", options: ["A. Bromophenol blue", "B. Acetocarmine", "C. Aniline blue", "D. Ethidium bromide"], answer: "D. Ethidium bromide", explanation: "This is a standard staining agent used for DNA in gel electrophoresis.", neetFrequency: 3 },
        { question: "A probe which is a molecule used to locate specific sequences in a mixture of DNA or RNA molecules could be:", options: ["A. A single-stranded RNA", "B. A single-stranded DNA", "C. Either RNA or DNA", "D. A protein"], answer: "C. Either RNA or DNA", explanation: "A probe is a single-stranded sequence of DNA or RNA that is used to search for its complementary sequence in a sample genome.", neetFrequency: 2 },
        { question: "Which of the following is not a feature of the plasmids?", options: ["A. Transferable", "B. Single-stranded", "C. Independent replication", "D. Circular structure"], answer: "B. Single-stranded", explanation: "Plasmids are extrachromosomal, self-replicating, usually circular, double-stranded DNA molecules found in bacteria.", neetFrequency: 4 },
        { question: "The first clinical gene therapy was given for treating:", options: ["A. Diabetes mellitus", "B. Rheumatoid arthritis", "C. Adenosine deaminase deficiency", "D. Phenylketonuria"], answer: "C. Adenosine deaminase deficiency", explanation: "The first clinical gene therapy was given in 1990 to a 4-year old girl with adenosine deaminase (ADA) deficiency.", neetFrequency: 3 },
        { question: "The Ti plasmid, used for making transgenic plants, is obtained from:", options: ["A. Escherichia coli", "B. Agrobacterium tumefaciens", "C. Bacillus thuringiensis", "D. Yeast"], answer: "B. Agrobacterium tumefaciens", explanation: "The tumor-inducing (Ti) plasmid from this bacterium is a natural genetic engineer, modified to be used as a cloning vector for plants.", neetFrequency: 4 },
        { question: "The PCR technique was developed by:", options: ["A. Kary Mullis", "B. James Watson", "C. Paul Berg", "D. Herbert Boyer"], answer: "A. Kary Mullis", explanation: "Kary Mullis developed the Polymerase Chain Reaction (PCR) technique in the 1980s, for which he received the Nobel Prize.", neetFrequency: 1 },
        { question: "The thermostable enzyme Taq polymerase used in PCR is obtained from:", options: ["A. Escherichia coli", "B. Thermus aquaticus", "C. Agrobacterium tumefaciens", "D. Saccharomyces cerevisiae"], answer: "B. Thermus aquaticus", explanation: "Taq polymerase is isolated from the thermophilic bacterium Thermus aquaticus, which allows it to withstand the high temperatures used in the denaturation step of PCR.", neetFrequency: 3 },
        { question: "The role of a 'selectable marker' in a plasmid vector is to:", options: ["A. Help in identifying and eliminating non-transformants", "B. Increase the copy number of the plasmid", "C. Provide a site for the replication to start", "D. Allow for easy ligation of foreign DNA"], answer: "A. Help in identifying and eliminating non-transformants", explanation: "Selectable markers, like antibiotic resistance genes, help in selecting host cells that have successfully taken up the plasmid (transformants).", neetFrequency: 4 },
        { question: "A patient is suspected to be suffering from AIDS. Which diagnostic technique will you recommend for its early detection?", options: ["A. Widal Test", "B. Urinalysis", "C. ELISA", "D. MRI"], answer: "C. ELISA", explanation: "ELISA (Enzyme-Linked Immunosorbent Assay) is a sensitive test used for the early detection of antigens or antibodies, including for HIV.", neetFrequency: 3 },
        { question: "The cryIac gene produces a protein that controls:", options: ["A. Cotton bollworms", "B. Corn borer", "C. Both A and B", "D. Nematodes"], answer: "A. Cotton bollworms", explanation: "The gene cryIAb controls corn borer, while cryIAc and cryIIAb control the cotton bollworms.", neetFrequency: 3 },
        { question: "The process of separation and purification of expressed protein before marketing is called:", options: ["A. Upstream processing", "B. Downstream processing", "C. Bioprocessing", "D. Post-translational modification"], answer: "B. Downstream processing", explanation: "Downstream processing involves all the steps required to separate and purify the product from the bioreactor.", neetFrequency: 2 },
        { question: "The recognition sequence for the restriction enzyme EcoRI is:", options: ["A. 5' - GAATTC - 3'", "B. 5' - GGATCC - 3'", "C. 5' - AAGCTT - 3'", "D. 5' - AGTACT - 3'"], answer: "A. 5' - GAATTC - 3'", explanation: "This is the specific palindromic sequence recognized by EcoRI.", neetFrequency: 2 },
        { question: "Which of the following is not an application of PCR?", options: ["A. Molecular diagnosis", "B. Gene amplification", "C. DNA sequencing", "D. Protein purification"], answer: "D. Protein purification", explanation: "PCR is a DNA-based technique. Protein purification involves methods like chromatography.", neetFrequency: 3 },
        { question: "What is the function of the 'rop' gene in the pBR322 vector?", options: ["A. Codes for restriction enzymes", "B. Codes for the proteins involved in the replication of the plasmid", "C. Codes for antibiotic resistance", "D. Codes for the origin of replication"], answer: "B. Codes for the proteins involved in the replication of the plasmid", explanation: "The 'rop' gene codes for proteins that regulate the copy number of the plasmid.", neetFrequency: 1 },
        { question: "Which of the following is true for the cry protein?", options: ["A. It is toxic to all insects", "B. It is activated by the acidic pH of the insect gut", "C. It is activated by the alkaline pH of the insect gut", "D. It is a protoxin that is always active"], answer: "C. It is activated by the alkaline pH of the insect gut", explanation: "The Bt toxin protein exists as an inactive protoxin but is converted into an active form due to the alkaline pH of the insect's gut, which solubilizes the crystals.", neetFrequency: 4 },
        { question: "The term 'molecular scissors' refers to:", options: ["A. DNA ligase", "B. DNA polymerase", "C. Restriction enzymes", "D. Helicase"], answer: "C. Restriction enzymes", explanation: "Restriction enzymes are called molecular scissors because they cut DNA at specific recognition sites.", neetFrequency: 3 },
        { question: "In recombinant DNA technology, the term 'vector' refers to:", options: ["A. The enzyme that cuts DNA", "B. A plasmid or virus that carries foreign DNA into a host cell", "C. The host cell that receives the foreign DNA", "D. The desired gene to be cloned"], answer: "B. A plasmid or virus that carries foreign DNA into a host cell", explanation: "A vector is a DNA molecule used as a vehicle to artificially carry foreign genetic material into another cell.", neetFrequency: 2 },
        { question: "The first step in PCR is:", options: ["A. Annealing", "B. Extension", "C. Denaturation", "D. Ligation"], answer: "C. Denaturation", explanation: "The double-stranded DNA is heated to a high temperature (usually 94-96°C) to separate the two strands. This is denaturation.", neetFrequency: 4 },
        { question: "Which of the following is a palindromic sequence?", options: ["A. 5'-GAATTC-3' and 3'-CTTAAG-5'", "B. 5'-GATTACA-3' and 3'-CTAATGT-5'", "C. 5'-CCTAGG-3' and 3'-GGTACC-5'", "D. Both A and B"], answer: "A. 5'-GAATTC-3' and 3'-CTTAAG-5'", explanation: "A palindromic sequence reads the same on the two strands when orientation of reading is kept the same (5' to 3').", neetFrequency: 3 },
        { question: "The use of bio-resources by multinational companies without proper authorization is called:", options: ["A. Biowar", "B. Biopiracy", "C. Bioterrorism", "D. Bioethics"], answer: "B. Biopiracy", explanation: "This term describes the unethical appropriation of knowledge and genetic resources of indigenous peoples and farmers.", neetFrequency: 2 },
        { question: "The DNA fragments can be separated by a technique known as:", options: ["A. PCR", "B. Gel electrophoresis", "C. Blotting", "D. Centrifugation"], answer: "B. Gel electrophoresis", explanation: "Gel electrophoresis separates DNA fragments based on their size.", neetFrequency: 4 },
        { question: "Which of the following is required for the synthesis of DNA in PCR?", options: ["A. DNA primers and DNA polymerase", "B. RNA primers and RNA polymerase", "C. DNA primers and RNA polymerase", "D. RNA primers and DNA polymerase"], answer: "A. DNA primers and DNA polymerase", explanation: "PCR requires short DNA primers to initiate synthesis and a thermostable DNA polymerase to extend them.", neetFrequency: 3 },
        { question: "The 'sticky ends' on a DNA fragment are produced by:", options: ["A. DNA ligase", "B. DNA polymerase", "C. Most restriction enzymes", "D. All restriction enzymes"], answer: "C. Most restriction enzymes", explanation: "Many restriction enzymes make staggered cuts, leaving single-stranded overhangs called sticky ends, which facilitate the ligation of DNA fragments.", neetFrequency: 3 },
        { question: "Which of the following can be used to induce the uptake of recombinant DNA by a bacterial cell?", options: ["A. Heat shock", "B. Treatment with calcium chloride", "C. Electroporation", "D. All of the above"], answer: "D. All of the above", explanation: "These are all methods used to make the bacterial cell membrane temporarily permeable to DNA, a process called transformation.", neetFrequency: 2 },
        { question: "Which type of gene is used to treat ADA deficiency in gene therapy?", options: ["A. The gene for insulin", "B. A functional ADA cDNA", "C. A pest-resistance gene", "D. An antibiotic resistance gene"], answer: "B. A functional ADA cDNA", explanation: "A functional adenosine deaminase (ADA) complementary DNA (cDNA) is introduced into the patient's lymphocytes.", neetFrequency: 3 },
        { question: "An advantage of using genetically modified crops is:", options: ["A. Increased reliance on chemical pesticides", "B. Reduced nutrient value", "C. Increased tolerance to abiotic stresses", "D. Decreased crop yield"], answer: "C. Increased tolerance to abiotic stresses", explanation: "Biotechnology can be used to develop crops that are more tolerant to stresses like cold, drought, salt, and heat.", neetFrequency: 2 },
        { question: "In insertional inactivation, the recombinant DNA is inserted within the coding sequence of:", options: ["A. An antibiotic resistance gene", "B. The origin of replication", "C. A gene for a color-producing enzyme like β-galactosidase", "D. Both A and C are common methods"], answer: "D. Both A and C are common methods", explanation: "Insertion into either a resistance gene (e.g., tetR in pBR322) or the β-galactosidase gene inactivates it, allowing for the selection of recombinants.", neetFrequency: 3 },
        { question: "The source of the cry gene for making Bt cotton is a:", options: ["A. Fungus", "B. Bacterium", "C. Virus", "D. Plant"], answer: "B. Bacterium", explanation: "The cry gene is isolated from the bacterium Bacillus thuringiensis.", neetFrequency: 4 },
        { question: "The term 'molecular diagnosis' refers to:", options: ["A. Diagnosing diseases by observing symptoms", "B. Using techniques like PCR and ELISA to detect pathogens or genetic disorders", "C. Using X-rays for diagnosis", "D. Performing surgery"], answer: "B. Using techniques like PCR and ELISA to detect pathogens or genetic disorders", explanation: "Molecular diagnosis uses molecular biology techniques for the early and accurate detection of diseases.", neetFrequency: 1 },
        { question: "Which of the following is not a component of a bioreactor?", options: ["A. Agitator system", "B. Oxygen delivery system", "C. Foam control system", "D. A centrifuge"], answer: "D. A centrifuge", explanation: "A centrifuge is used in downstream processing to separate cells or products, not as part of the bioreactor itself.", neetFrequency: 1 },
        { question: "The final step in PCR is:", options: ["A. Denaturation", "B. Annealing", "C. Extension", "D. Ligation"], answer: "C. Extension", explanation: "The three steps of a PCR cycle are Denaturation, Annealing, and Extension. Extension is the final step where the new DNA strand is synthesized.", neetFrequency: 4 },
        { question: "Which of the following is a limitation of traditional hybridization procedures used in plant breeding?", options: ["A. It is very fast", "B. It introduces only desired genes", "C. It can only be done between closely related species", "D. It leads to the introduction of undesirable genes along with desired genes"], answer: "D. It leads to the introduction of undesirable genes along with desired genes", explanation: "Traditional breeding involves crossing whole plants, which can bring in undesirable traits along with the desired ones. Genetic engineering is more precise.", neetFrequency: 2 },
        { question: "The term 'Flavr Savr' refers to a transgenic:", options: ["A. Tomato", "B. Cotton", "C. Tobacco", "D. Rice"], answer: "A. Tomato", explanation: "'Flavr Savr' was one of the first genetically modified foods, a tomato engineered to have a longer shelf life by slowing the ripening process.", neetFrequency: 1 },
        { question: "Which of the following is a key requirement for a cloning vector?", options: ["A. Origin of replication (ori)", "B. Selectable marker", "C. Cloning sites", "D. All of the above"], answer: "D. All of the above", explanation: "A good vector needs an origin of replication, a selectable marker to identify transformants, and unique restriction sites for cloning.", neetFrequency: 3 },
        { question: "The main objective of producing herbicide-resistant GM crops is to:", options: ["A. Reduce the use of herbicides", "B. Allow the use of herbicides to remove weeds without harming the crop", "C. Increase the nutritional value", "D. Make the crop resistant to insects"], answer: "B. Allow the use of herbicides to remove weeds without harming the crop", explanation: "This allows farmers to control weeds effectively without damaging the main crop.", neetFrequency: 2 },
        { question: "The term 'plasmid' refers to:", options: ["A. The main circular chromosome of a bacterium", "B. Extrachromosomal, circular DNA in bacteria", "C. The DNA found in a virus", "D. The genetic material of a eukaryote"], answer: "B. Extrachromosomal, circular DNA in bacteria", explanation: "Plasmids are small, extrachromosomal DNA molecules within a cell that are physically separated from chromosomal DNA and can replicate independently.", neetFrequency: 3 },
        { question: "How many recombinant therapeutics are currently being marketed in India?", options: ["A. 5", "B. 12", "C. 30", "D. 100"], answer: "B. 12", explanation: "As per the NCERT textbook, of the 30 recombinant therapeutics approved for human use worldwide, 12 are presently being marketed in India.", neetFrequency: 1 },
        { question: "The DNA polymerase used in PCR is:", options: ["A. Active at room temperature", "B. Thermostable", "C. Obtained from humans", "D. An RNA polymerase"], answer: "B. Thermostable", explanation: "It must be thermostable to withstand the high temperatures of the denaturation step without being destroyed.", neetFrequency: 3 },
        { question: "The first recombinant DNA was constructed by:", options: ["A. Watson and Crick", "B. Kary Mullis", "C. Stanley Cohen and Herbert Boyer", "D. Alexander Fleming"], answer: "C. Stanley Cohen and Herbert Boyer", explanation: "Cohen and Boyer are credited with constructing the first recombinant DNA molecule in 1972.", neetFrequency: 2 }
    ],
    assertionReasons: [
        {
            assertion: "Recombinant DNA technology is used to produce human insulin in E. coli.",
            reason: "The gene for human insulin can be transferred into E. coli, which then transcribes and translates it to produce the hormone.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and is the correct explanation of how biotechnology is used for insulin production.",
            neetFrequency: 4
        },
        {
            assertion: "PCR can be used to detect very low amounts of DNA.",
            reason: "PCR can amplify a single DNA molecule into billions of copies.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and correctly explains why PCR is such a sensitive diagnostic tool.",
            neetFrequency: 3
        },
        {
            assertion: "RNA interference is a method of post-transcriptional gene silencing.",
            reason: "It involves preventing the translation of a specific mRNA by using a complementary double-stranded RNA.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and correctly describes the mechanism of RNAi, thus explaining the assertion.",
            neetFrequency: 2
        },
        {
            assertion: "Agrobacterium tumefaciens is known as a natural genetic engineer.",
            reason: "It can transfer a piece of its DNA known as 'T-DNA' into normal plant cells and convert them into a tumor.",
            answer: "A",
            explanation: "Assertion is a common description. The reason is true and explains the natural ability of this bacterium that scientists have exploited for plant biotechnology.",
            neetFrequency: 3
        },
        {
            assertion: "The Ti plasmid is disarmed before being used as a cloning vector.",
            reason: "The tumor-inducing genes are removed from the Ti plasmid so that it can deliver desired genes without causing disease.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and correctly explains why and how the Ti plasmid is modified for use in genetic engineering.",
            neetFrequency: 2
        }
    ],
    matchTheColumns: [
        { column1: ["(a) Bt cotton", "(b) RNAi", "(c) ELISA", "(d) Gene Therapy"], column2: ["(p) Adenosine deaminase deficiency", "(q) Detection of antigen-antibody interaction", "(r) Pest resistance", "(s) Nematode resistance in tobacco"], answer: "a-r, b-s, c-q, d-p", explanation: "Matching biotechnological applications with their specific examples or principles." },
        { column1: ["(a) PCR", "(b) Restriction enzyme", "(c) DNA ligase", "(d) Vector"], column2: ["(p) Molecular scissors", "(q) Joins DNA fragments", "(r) Amplification of DNA", "(s) Plasmid"], answer: "a-r, b-p, c-q, d-s", explanation: "Matching tools of rDNA technology with their function or example." },
        { column1: ["(a) Denaturation", "(b) Annealing", "(c) Extension", "(d) Downstream Processing"], column2: ["(p) Binding of primers", "(q) Separation of DNA strands", "(r) Purification of product", "(s) Synthesis by Taq polymerase"], answer: "a-q, b-p, c-s, d-r", explanation: "Matching the steps of PCR and bioprocessing with their descriptions." },
        { column1: ["(a) Golden Rice", "(b) Flavr Savr Tomato", "(c) Rosie the cow", "(d) Biopiracy"], column2: ["(p) Human alpha-lactalbumin", "(q) Vitamin A enriched", "(r) Turmeric and Neem patents", "(s) Delayed ripening"], answer: "a-q, b-s, c-p, d-r", explanation: "Matching specific examples of biotechnology with their key features." },
        { column1: ["(a) Selectable marker", "(b) Palindromic sequence", "(c) Bioreactor", "(d) Electroporation"], column2: ["(p) GAATTC", "(q) Creates temporary pores in cell membrane", "(r) Large scale culture", "(s) Antibiotic resistance gene"], answer: "a-s, b-p, c-r, d-q", explanation: "Matching biotechnology terms with their examples or definitions." }
    ],
    keyTakeaways: [
        "Recombinant DNA (rDNA) technology allows us to combine DNA from different species to create new genetic combinations.",
        "Key tools of rDNA technology include restriction enzymes, cloning vectors (like plasmids), and DNA ligase.",
        "Polymerase Chain Reaction (PCR) is a technique used to amplify a specific segment of DNA, essential for diagnostics and research.",
        "Biotechnology has wide-ranging applications in agriculture (GMOs like Bt-cotton), medicine (production of insulin, gene therapy), and industry.",
        "The use of biotechnology raises important ethical concerns (biopiracy, GM organisms) that are regulated by bodies like GEAC."
    ],
    mnemonics: [
        { text: "For the steps of PCR: 'Denature, Anneal, Extend' (DAE). Think 'Don't Annoy Elephants!'", tamil: "PCR படிகளுக்கு: 'Denature, Anneal, Extend' (DAE)." }
    ],
    neetTips: [
        { text: "Application-based questions are very common. Instead of just memorizing a technique like PCR, understand *why* it is used (e.g., for early detection of HIV or in DNA fingerprinting).", tamil: "பயன்பாடு சார்ந்த கேள்விகள் மிகவும் பொதுவானவை. PCR போன்ற ஒரு நுட்பத்தை மனப்பாடம் செய்வதற்குப் பதிலாக, அது *ஏன்* பயன்படுத்தப்படுகிறது என்பதைப் புரிந்து கொள்ளுங்கள் (எ.கா., HIV-ஐ ஆரம்பத்திலேயே கண்டறிய அல்லது DNA கைரேகைப் பதிவில்)." },
        { text: "Remember the specific names associated with key discoveries or products, such as 'Rosie' the cow, 'Flavr Savr' tomato, and the nematode *Meloidegyne incognita*.", tamil: "முக்கிய கண்டுபிடிப்புகள் அல்லது தயாரிப்புகளுடன் தொடர்புடைய குறிப்பிட்ட பெயர்களை நினைவில் கொள்ளுங்கள், அதாவது 'ரோசி' என்ற மாடு, 'ஃபிளேவர் சேவர்' தக்காளி, மற்றும் நூற்புழு *மெலாய்டோகைன் இன்காக்னிட்டா*." }
    ],
    studentTip: {
        english: "Biotechnology is a rapidly evolving field. Focus on understanding the core principles from your textbook, as these are the concepts that will be tested, rather than the very latest research.",
        tamil: "உயிரித் தொழில்நுட்பவியல் வேகமாக வளர்ந்து வரும் ஒரு துறையாகும். உங்கள் பாடப்புத்தகத்திலிருந்து அடிப்படைக் கொள்கைகளைப் புரிந்துகொள்வதில் கவனம் செலுத்துங்கள், ஏனெனில் மிக சமீபத்திய ஆராய்ச்சியை விட இந்த கருத்துக்களே சோதிக்கப்படும்."
    },
    peerDiscussion: {
        english: "Discuss the pros and cons of Genetically Modified (GM) crops with a friend. What are the potential benefits for food security versus the potential risks to biodiversity?",
        tamil: "மரபணு மாற்றப்பட்ட (GM) பயிர்களின் நன்மைகள் மற்றும் தீமைகள் பற்றி உங்கள் நண்பருடன் விவாதிக்கவும். உணவுப் பாதுகாப்பிற்கான சாத்தியமான நன்மைகள் மற்றும் பல்லுயிர் பெருக்கத்திற்கான சாத்தியமான அபாயங்கள் என்ன?"
    },
    nextChapter: {
        title: "Ecology and Environment",
        titleTamil: "சூழலியல் மற்றும் சுற்றுச்சூழல்"
    },
    validationReport: []
};

