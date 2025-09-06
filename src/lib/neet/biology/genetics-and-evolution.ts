
import type { NeetModule } from '@/lib/types';

export const geneticsAndEvolution: NeetModule = {
    id: 'neet-biology-genetics-and-evolution',
    title: 'Biology - Genetics and Evolution (மரபியல் மற்றும் பரிணாமம்)',
    chapter: 'Genetics and Evolution',
    subject: 'Biology',
    learningObjectives: [
        "Understand and apply Mendel's Laws of Inheritance (Dominance, Segregation, Independent Assortment).",
        "Solve genetics problems involving monohybrid and dihybrid crosses, and understand concepts like incomplete dominance and co-dominance.",
        "Describe the chromosomal theory of inheritance and concepts of linkage and recombination.",
        "Explain the molecular basis of inheritance, including the structure of DNA, replication, transcription, and translation.",
        "Understand the evidence for evolution and the theories of Lamarck, Darwin (natural selection), and the modern synthetic theory.",
        "Analyze the mechanisms of evolution, including Hardy-Weinberg principle, genetic drift, and speciation."
    ],
    prerequisites: [
        "Understanding of cell division (mitosis and meiosis).",
        "Knowledge of reproduction in organisms.",
        "Basic concepts of biomolecules, especially nucleic acids."
    ],
    conceptOverview: "This unit covers the science of heredity and variation. It begins with Mendel's Laws of Inheritance and moves on to the chromosomal theory of inheritance. The 'Molecular Basis of Inheritance' delves into the structure of DNA, its replication, transcription, and translation (the central dogma of molecular biology). Finally, the 'Evolution' section explores the origin of life and the mechanisms, like natural selection, that drive the evolution of new species.",
    tamilConnection: "'தாய் எட்டடி பாய்ந்தால், குட்டி பதினாறு அடி பாயும்' என்ற பழமொழி, மரபுப் பண்புகள் கடத்தப்படுவதை குறிக்கிறது. மெண்டலின் விதிகள், இந்த மரபுப் பண்புகள் எவ்வாறு ஒரு தலைமுறையிலிருந்து அடுத்த தலைமுறைக்கு கடத்தப்படுகின்றன என்பதற்கான அறிவியல் அடிப்படையை வழங்குகின்றன.",
    culturalContext: "The Jallikattu bulls of Tamil Nadu are a product of centuries of artificial selection, where humans have selectively bred bulls for specific traits like strength, aggression, and stamina. This is a powerful example of how selection (in this case, artificial) can lead to changes in a population over time, a core concept in the study of evolution.",
    syllabusMapping: [{
        topic: 'Principles of Inheritance, Molecular Basis, Evolution',
        tnBoardChapter: '12th Std Botany Ch 2, 3, 4; 12th Std Zoology Ch 3, 4',
        ncertReference: 'Class 12 Biology - Unit 7',
        notes: 'A very high-yield and conceptual unit. Mendelian genetics problems, molecular basis concepts (replication, transcription, translation), and evidence for evolution are key topics.',
        mappingDescription: 'Maps to Genetics and Evolution chapters in TN Board Std 12.'
    }],
    stateBoardGaps: [
      "The concept of 'Linkage and Recombination' including the work of T.H. Morgan on Drosophila is given more weightage and detailed explanation in NCERT.",
      "The molecular details of the 'lac operon' as a model for gene regulation are a crucial NCERT topic that might be less detailed in some state board texts.",
      "The Hardy-Weinberg principle and the factors affecting it (gene flow, genetic drift, mutation, recombination, natural selection) are central to the NCERT evolution chapter.",
      "Human Genome Project (HGP) goals, methodologies, and findings are explicitly detailed in NCERT."
    ],
    extraNeetConcepts: [
      "Pedigree analysis and the identification of inheritance patterns (autosomal dominant, autosomal recessive, X-linked) from a pedigree chart.",
      "The concept of 'split genes' and the process of splicing in eukaryotes.",
      "Different types of mutations (point mutation, frameshift mutation) and chromosomal aberrations (aneuploidy, polyploidy).",
      "Adaptive radiation as a mechanism of evolution, with Darwin's finches as the classic example."
    ],
    ncertReadingGuide: [
      "Master the Punnett squares for monohybrid, dihybrid, and test crosses in Chapter 5. Be able to predict phenotypic and genotypic ratios.",
      "In Chapter 6, the diagrams of DNA replication (Figure 6.7), transcription unit (Figure 6.9), and the lac operon (Figure 6.14) are extremely important.",
      "Understand the experimental proofs for DNA as the genetic material (Griffith's, Avery-MacLeod-McCarty, Hershey-Chase experiments).",
      "In Chapter 7, focus on the evidences for evolution: homologous and analogous structures (Figure 7.3 and 7.4), and adaptive radiation (Figure 7.8).",
      "The section on human evolution, including the timeline and characteristics of different hominids, is a source of direct recall questions."
    ],
    mcqs: [
        { question: "Mendel's Law of Independent Assortment is applicable for genes that are:", options: ["A. Located on the same chromosome", "B. Located on different chromosomes", "C. Dominant", "D. Recessive"], answer: "B. Located on different chromosomes", explanation: "The law of independent assortment states that the alleles of two (or more) different genes get sorted into gametes independently of one another. This holds true for genes located on different chromosomes or genes that are very far apart on the same chromosome.", neetFrequency: 4 },
        { question: "In a dihybrid cross, the phenotypic ratio of F₂ generation is:", options: ["A. 1:2:1", "B. 3:1", "C. 9:3:3:1", "D. 1:1:1:1"], answer: "C. 9:3:3:1", explanation: "This is the classic Mendelian ratio for a dihybrid cross involving two independently assorting genes.", neetFrequency: 5 },
        { question: "Which of the following is an example of co-dominance?", options: ["A. Flower color in Snapdragon", "B. ABO blood group in humans", "C. Skin color in humans", "D. Pea seed shape"], answer: "B. ABO blood group in humans", explanation: "In the AB blood group, both the A and B alleles are expressed simultaneously, which is the definition of co-dominance.", neetFrequency: 4 },
        { question: "The experimental proof that DNA is the genetic material came from the experiments of:", options: ["A. Mendel", "B. Griffith", "C. Hershey and Chase", "D. Watson and Crick"], answer: "C. Hershey and Chase", explanation: "The Hershey-Chase experiment using bacteriophages labeled with radioactive phosphorus (for DNA) and sulfur (for protein) conclusively proved that DNA is the genetic material.", neetFrequency: 3 },
        { question: "The process of copying genetic information from one strand of the DNA into RNA is termed as:", options: ["A. Replication", "B. Translation", "C. Transcription", "D. Transduction"], answer: "C. Transcription", explanation: "Transcription is the synthesis of RNA from a DNA template.", neetFrequency: 5 },
        { question: "The lac operon is an example of:", options: ["A. Gene regulation in eukaryotes", "B. Inducible operon", "C. Repressible operon", "D. A structural gene"], answer: "B. Inducible operon", explanation: "The lac operon is switched on (induced) in the presence of the substrate lactose.", neetFrequency: 4 },
        { question: "Which of the following structures are homologous?", options: ["A. Wings of a butterfly and wings of a bird", "B. Flippers of a penguin and flippers of a dolphin", "C. Eye of an octopus and eye of a mammal", "D. Forelimbs of a man, bat, and whale"], answer: "D. Forelimbs of a man, bat, and whale", explanation: "Homologous structures have a similar basic anatomical plan and origin but perform different functions. The forelimbs of these mammals are a classic example of divergent evolution.", neetFrequency: 5 },
        { question: "The theory of natural selection was proposed by:", options: ["A. Lamarck", "B. Charles Darwin", "C. Hugo de Vries", "D. Alfred Wallace"], answer: "B. Charles Darwin", explanation: "Charles Darwin proposed the theory of evolution by natural selection in his book 'On the Origin of Species'. Alfred Wallace independently arrived at a similar conclusion.", neetFrequency: 3 },
        { question: "The Hardy-Weinberg principle states that allele frequencies in a population will remain constant if:", options: ["A. Mutation occurs", "B. There is no random mating", "C. Natural selection is operating", "D. The population is large and there is no gene flow"], answer: "D. The population is large and there is no gene flow", explanation: "The Hardy-Weinberg equilibrium requires a large population, random mating, no mutation, no gene flow, and no natural selection.", neetFrequency: 4 },
        { question: "A classic example of adaptive radiation is:", options: ["A. Different beaks of Darwin's finches", "B. Wings of insects and birds", "C. Australian marsupials and placental mammals", "D. Both A and C"], answer: "D. Both A and C", explanation: "Adaptive radiation is the evolution of different species from a common ancestor to fill different ecological niches. Both Darwin's finches in the Galapagos and the diversity of Australian marsupials are classic examples.", neetFrequency: 3 },
        { question: "A test cross involves crossing an individual with an unknown genotype with:", options: ["A. A homozygous dominant individual", "B. A homozygous recessive individual", "C. A heterozygous individual", "D. Another individual of the same unknown genotype"], answer: "B. A homozygous recessive individual", explanation: "A test cross is used to determine the genotype of an individual showing a dominant phenotype by crossing it with a homozygous recessive parent.", neetFrequency: 4 },
        { question: "In DNA, the two strands are held together by:", options: ["A. Covalent bonds", "B. Ionic bonds", "C. Hydrogen bonds", "D. Peptide bonds"], answer: "C. Hydrogen bonds", explanation: "Hydrogen bonds form between the complementary base pairs (A-T and G-C), holding the two strands of the double helix together.", neetFrequency: 2 },
        { question: "The process of synthesis of proteins from mRNA is called:", options: ["A. Transcription", "B. Translation", "C. Replication", "D. Transformation"], answer: "B. Translation", explanation: "Translation is the process where the genetic code on mRNA is read by ribosomes to synthesize a protein.", neetFrequency: 5 },
        { question: "The UAA, UAG, and UGA codons are known as:", options: ["A. Start codons", "B. Stop codons", "C. Degenerate codons", "D. Ambiguous codons"], answer: "B. Stop codons", explanation: "These three codons do not code for any amino acid and signal the termination of protein synthesis.", neetFrequency: 3 },
        { question: "The wings of a bat and the wings of an insect are an example of:", options: ["A. Homologous structures", "B. Analogous structures", "C. Vestigial structures", "D. Convergent evolution"], answer: "D. Convergent evolution", explanation: "Wings of a bat and an insect are analogous structures. They have different origins but similar functions, arising from convergent evolution. Both B and D are correct.", neetFrequency: 4 },
        { question: "A sudden change in the genetic material is called:", options: ["A. Recombination", "B. Linkage", "C. Mutation", "D. Speciation"], answer: "C. Mutation", explanation: "A mutation is a permanent alteration in the DNA sequence.", neetFrequency: 2 },
        { question: "The phenomenon where a single gene exhibits multiple phenotypic expressions is called:", options: ["A. Pleiotropy", "B. Polygenic inheritance", "C. Co-dominance", "D. Incomplete dominance"], answer: "A. Pleiotropy", explanation: "Pleiotropy is the condition where one gene influences two or more seemingly unrelated phenotypic traits. Phenylketonuria is a classic example.", neetFrequency: 3 },
        { question: "The semi-conservative model of DNA replication was experimentally proved by:", options: ["A. Watson and Crick", "B. Hershey and Chase", "C. Meselson and Stahl", "D. Griffith"], answer: "C. Meselson and Stahl", explanation: "The Meselson-Stahl experiment used heavy nitrogen isotopes to demonstrate that DNA replication is semi-conservative.", neetFrequency: 3 },
        { question: "Which enzyme is primarily responsible for the synthesis of the new DNA strand during replication?", options: ["A. Helicase", "B. Ligase", "C. Primase", "D. DNA Polymerase"], answer: "D. DNA Polymerase", explanation: "DNA Polymerase is the enzyme that synthesizes new DNA strands by adding nucleotides complementary to the template strand.", neetFrequency: 4 },
        { question: "The Miller-Urey experiment demonstrated:", options: ["A. The origin of life from non-living matter", "B. The synthesis of organic molecules from inorganic precursors", "C. The evolution of eukaryotes from prokaryotes", "D. The process of natural selection"], answer: "B. The synthesis of organic molecules from inorganic precursors", explanation: "The experiment simulated early Earth conditions and showed that amino acids and other organic molecules could be formed from inorganic substances.", neetFrequency: 3 },
        { question: "A cross between a red-flowered plant (RR) and a white-flowered plant (rr) produces pink-flowered plants (Rr). This is an example of:", options: ["A. Dominance", "B. Co-dominance", "C. Incomplete dominance", "D. Pleiotropy"], answer: "C. Incomplete dominance", explanation: "In incomplete dominance, the heterozygote phenotype is an intermediate between the two homozygous phenotypes.", neetFrequency: 4 },
        { question: "In the genetic code, there are 64 codons, but only 20 amino acids. This is because the code is:", options: ["A. Ambiguous", "B. Universal", "C. Degenerate", "D. Non-overlapping"], answer: "C. Degenerate", explanation: "Degeneracy means that a single amino acid may be coded for by more than one codon.", neetFrequency: 3 },
        { question: "The chromosomal basis of sex determination in humans is:", options: ["A. XX-XY type", "B. ZZ-ZW type", "C. XX-XO type", "D. Haplo-diploid type"], answer: "A. XX-XY type", explanation: "In humans, females are XX (homogametic) and males are XY (heterogametic).", neetFrequency: 2 },
        { question: "The tendency of genes located on the same chromosome to be inherited together is known as:", options: ["A. Independent assortment", "B. Linkage", "C. Segregation", "D. Crossing over"], answer: "B. Linkage", explanation: "Linkage is the phenomenon where genes that are close together on the same chromosome tend to be transmitted as a unit.", neetFrequency: 2 },
        { question: "Genetic drift is more significant in:", options: ["A. Large populations", "B. Small populations", "C. Migrating populations", "D. All populations equally"], answer: "B. Small populations", explanation: "Genetic drift refers to random fluctuations in allele frequencies. Its effects are much more pronounced in small populations where chance events can have a larger impact.", neetFrequency: 3 },
        { question: "What is the function of tRNA?", options: ["A. Carries genetic code from nucleus to cytoplasm", "B. It is a constituent of ribosomes", "C. It carries amino acids to the ribosome", "D. It is the genetic material in some viruses"], answer: "C. It carries amino acids to the ribosome", explanation: "Transfer RNA (tRNA) acts as an adapter molecule, matching codons on mRNA to the specific amino acids they code for.", neetFrequency: 4 },
        { question: "Which human ancestor is known as the 'handy man' for first making and using tools?", options: ["A. Australopithecus", "B. Homo habilis", "C. Homo erectus", "D. Neanderthal man"], answer: "B. Homo habilis", explanation: "Homo habilis is considered the first hominid to use stone tools.", neetFrequency: 2 },
        { question: "A condition where an individual has an extra copy of chromosome 21 is known as:", options: ["A. Turner's Syndrome", "B. Klinefelter's Syndrome", "C. Down's Syndrome", "D. Patau's Syndrome"], answer: "C. Down's Syndrome", explanation: "Down's Syndrome is caused by trisomy of chromosome 21.", neetFrequency: 3 },
        { question: "The 'Operon' concept was proposed by:", options: ["A. Beadle and Tatum", "B. Jacob and Monod", "C. Nirenberg and Matthaei", "D. Watson and Crick"], answer: "B. Jacob and Monod", explanation: "Francois Jacob and Jacques Monod proposed the operon model for gene regulation in bacteria.", neetFrequency: 1 },
        { question: "Which of the following represents the correct central dogma of molecular biology?", options: ["A. RNA → DNA → Protein", "B. DNA → RNA → Protein", "C. Protein → RNA → DNA", "D. DNA → Protein → RNA"], answer: "B. DNA → RNA → Protein", explanation: "The central dogma describes the flow of genetic information from DNA to RNA (transcription) and from RNA to protein (translation).", neetFrequency: 4 },
        { question: "A man with blood group A marries a woman with blood group B. What are all the possible blood groups of their offspring?", options: ["A. A, B", "B. A, B, AB", "C. A, B, AB, O", "D. AB only"], answer: "C. A, B, AB, O", explanation: "If the man is Iᴬi and the woman is Iᴮi, their children can have genotypes IᴬIᴮ (AB), Iᴬi (A), Iᴮi (B), or ii (O).", neetFrequency: 4 },
        { question: "In DNA, the percentage of Guanine is 20%. What would be the percentage of Thymine?", options: ["A. 20%", "B. 30%", "C. 40%", "D. 50%"], answer: "B. 30%", explanation: "According to Chargaff's rule, A=T and G=C. If G=20%, then C=20%. Total G+C = 40%. The remaining A+T = 60%. Since A=T, T must be 30%.", neetFrequency: 3 },
        { question: "The fragments of DNA synthesized on the lagging strand during replication are called:", options: ["A. Primers", "B. Okazaki fragments", "C. Introns", "D. Exons"], answer: "B. Okazaki fragments", explanation: "The lagging strand is synthesized discontinuously in small pieces called Okazaki fragments, which are later joined by DNA ligase.", neetFrequency: 3 },
        { question: "The theory of 'inheritance of acquired characters' was proposed by:", options: ["A. Darwin", "B. Weismann", "C. Lamarck", "D. Malthus"], answer: "C. Lamarck", explanation: "Jean-Baptiste Lamarck proposed that traits acquired during an organism's lifetime could be passed on to its offspring.", neetFrequency: 2 },
        { question: "If the sequence of a template strand of DNA is 3'-ATGCATGC-5', what will be the sequence of the mRNA transcribed from it?", options: ["A. 5'-TACGTACG-3'", "B. 5'-UACGUACG-3'", "C. 3'-UACGUACG-5'", "D. 5'-AUGCAUGC-3'"], answer: "B. 5'-UACGUACG-3'", explanation: "mRNA is synthesized in the 5' to 3' direction, complementary to the 3' to 5' template strand. A pairs with U, T with A, G with C, and C with G.", neetFrequency: 4 },
        { question: "A disease caused by a point mutation in the gene for the beta-globin chain of hemoglobin is:", options: ["A. Thalassemia", "B. Down's Syndrome", "C. Klinefelter's Syndrome", "D. Sickle-cell anemia"], answer: "D. Sickle-cell anemia", explanation: "Sickle-cell anemia is caused by a single point mutation (substitution of GAG by GUG) in the beta-globin gene.", neetFrequency: 3 },
        { question: "Which of the following is not a vestigial organ in humans?", options: ["A. Appendix", "B. Wisdom teeth", "C. Coccyx (tail bone)", "D. Pancreas"], answer: "D. Pancreas", explanation: "The pancreas is a vital organ with crucial digestive and endocrine functions. The others are considered vestigial organs.", neetFrequency: 1 },
        { question: "Which era is known as the 'Age of Reptiles'?", options: ["A. Cenozoic", "B. Mesozoic", "C. Paleozoic", "D. Precambrian"], answer: "B. Mesozoic", explanation: "The Mesozoic era, comprising the Triassic, Jurassic, and Cretaceous periods, was dominated by dinosaurs and other reptiles.", neetFrequency: 2 },
        { question: "The process by which organisms with different evolutionary history evolve similar phenotypic adaptations in response to a common environmental challenge is called:", options: ["A. Convergent evolution", "B. Divergent evolution", "C. Adaptive radiation", "D. Co-evolution"], answer: "A. Convergent evolution", explanation: "Convergent evolution leads to analogous structures, where different species independently evolve similar traits.", neetFrequency: 3 },
        { question: "The final proof for DNA as the genetic material came from the experiments of:", options: ["A. Avery, Macleod and McCarty", "B. Hershey and Chase", "C. Griffith", "D. Meselson and Stahl"], answer: "B. Hershey and Chase", explanation: "While Avery et al. provided strong evidence, the Hershey-Chase experiment provided the unequivocal proof.", neetFrequency: 3 },
        { question: "The one aspect which is not a salient feature of the genetic code is its being:", options: ["A. Degenerate", "B. Ambiguous", "C. Universal", "D. Non-overlapping"], answer: "B. Ambiguous", explanation: "The genetic code is unambiguous, meaning that one codon specifies only one amino acid. It is degenerate, universal, and non-overlapping.", neetFrequency: 3 },
        { question: "The phenomenon of a single gene product affecting multiple phenotypes is:", options: ["A. Polygeny", "B. Pleiotropy", "C. Epistasis", "D. Linkage"], answer: "B. Pleiotropy", explanation: "This is the definition of pleiotropy.", neetFrequency: 2 },
        { question: "In a monohybrid cross, what is the genotypic ratio in the F₂ generation?", options: ["A. 3:1", "B. 1:2:1", "C. 9:3:3:1", "D. 1:1"], answer: "B. 1:2:1", explanation: "The genotypic ratio is 1 (homozygous dominant) : 2 (heterozygous) : 1 (homozygous recessive).", neetFrequency: 4 },
        { question: "The frequency of a recessive allele in a population is 0.2. What is the frequency of heterozygous individuals according to the Hardy-Weinberg principle?", options: ["A. 0.04", "B. 0.16", "C. 0.32", "D. 0.64"], answer: "C. 0.32", explanation: "q = 0.2. p = 1 - q = 0.8. Frequency of heterozygotes = 2pq = 2 * 0.8 * 0.2 = 0.32.", neetFrequency: 3 },
        { question: "The process of removing introns and joining exons is called:", options: ["A. Splicing", "B. Capping", "C. Tailing", "D. Translation"], answer: "A. Splicing", explanation: "Splicing is a key step in post-transcriptional modification in eukaryotes.", neetFrequency: 2 },
        { question: "Which of the following is considered a 'living fossil'?", options: ["A. Archaeopteryx", "B. Ginkgo biloba", "C. Coelacanth", "D. Both B and C"], answer: "D. Both B and C", explanation: "Both Ginkgo (a tree) and Coelacanth (a fish) are examples of living fossils, organisms that have remained largely unchanged over millions of years.", neetFrequency: 2 },
        { question: "The discontinuous synthesis of DNA occurs on one strand, because:", options: ["A. DNA polymerase is slow", "B. The template strand is fragmented", "C. DNA polymerase can synthesize only in the 5'→3' direction", "D. The DNA helix is too tight"], answer: "C. DNA polymerase can synthesize only in the 5'→3' direction", explanation: "Because the two DNA strands are antiparallel, one strand (the lagging strand) must be synthesized discontinuously in fragments as the replication fork opens.", neetFrequency: 4 },
        { question: "A man whose father was color-blind marries a woman who has a color-blind father. The probability of their first child being a color-blind son is:", options: ["A. 1/2", "B. 1/4", "C. 1/8", "D. 1/3"], answer: "B. 1/4", explanation: "Color blindness is X-linked recessive. The man is XY (not color-blind, as he gets Y from his father). The woman has a color-blind father, so she must be a carrier (XcX). The probability of having a son is 1/2. The probability of that son getting the Xc from his mother is 1/2. Total probability = (1/2) * (1/2) = 1/4.", neetFrequency: 3 },
        { question: "The first life on Earth originated in:", options: ["A. Air", "B. Land", "C. Water", "D. Space"], answer: "C. Water", explanation: "The current scientific consensus is that the first life forms originated in an aquatic environment.", neetFrequency: 1 },
        { question: "Industrial melanism is an example of:", options: ["A. Genetic drift", "B. Natural selection", "C. Artificial selection", "D. Mutation"], answer: "B. Natural selection", explanation: "The change in frequency of light- and dark-colored peppered moths in response to industrial pollution is a classic example of natural selection in action.", neetFrequency: 4 }
    ],
    assertionReasons: [
        {
            assertion: "In a dihybrid cross, the F₂ generation shows a 9:3:3:1 phenotypic ratio.",
            reason: "This is due to the Law of Independent Assortment, where alleles for different traits segregate independently during gamete formation.",
            answer: "A",
            explanation: "The assertion is true, and the reason provides the correct Mendelian principle that explains this ratio for two unlinked genes.",
            neetFrequency: 5
        },
        {
            assertion: "The genetic code is considered degenerate.",
            reason: "One codon can code for more than one amino acid.",
            answer: "C",
            explanation: "The assertion is true. However, the reason is false. Degeneracy means that one amino acid can be coded by *more than one* codon, not the other way around. The code is unambiguous.",
            neetFrequency: 4
        },
        {
            assertion: "The wings of a butterfly and the wings of a bird are analogous structures.",
            reason: "They have different evolutionary origins but perform a similar function.",
            answer: "A",
            explanation: "The assertion is true. The reason is also true and is the correct definition of analogous structures, explaining the assertion.",
            neetFrequency: 3
        },
        {
            assertion: "The Hardy-Weinberg principle is rarely applicable to real populations.",
            reason: "Real populations are often subject to mutation, genetic drift, natural selection, and non-random mating.",
            answer: "A",
            explanation: "The assertion is true; it's a theoretical baseline. The reason is also true and correctly lists the evolutionary forces that violate the conditions of the principle, thus explaining why it's not applicable in reality.",
            neetFrequency: 3
        },
        {
            assertion: "DNA replication is semi-conservative.",
            reason: "Each new DNA molecule consists of one old parental strand and one newly synthesized strand.",
            answer: "A",
            explanation: "The assertion is a true statement. The reason provides the correct definition of what semi-conservative replication means, thereby explaining the assertion.",
            neetFrequency: 4
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Gregor Mendel", "(b) Watson and Crick", "(c) Charles Darwin", "(d) Jacob and Monod"],
            column2: ["(p) Operon concept", "(q) Theory of natural selection", "(r) Laws of inheritance", "(s) Double helix structure of DNA"],
            answer: "a-r, b-s, c-q, d-p",
            explanation: "Matching the scientists with their landmark contributions to biology."
        },
        {
            column1: ["(a) Transcription", "(b) Translation", "(c) Replication", "(d) Reverse Transcription"],
            column2: ["(p) Protein synthesis from mRNA", "(q) DNA synthesis from DNA", "(r) RNA synthesis from DNA", "(s) DNA synthesis from RNA"],
            answer: "a-r, b-p, c-q, d-s",
            explanation: "Matching the molecular processes with their correct descriptions."
        },
        {
            column1: ["(a) Down's Syndrome", "(b) Klinefelter's Syndrome", "(c) Turner's Syndrome", "(d) Sickle-cell anemia"],
            column2: ["(p) Point mutation", "(q) Monosomy of X-chromosome (XO)", "(r) Trisomy of 21st chromosome", "(s) Trisomy of sex chromosomes (XXY)"],
            answer: "a-r, b-s, c-q, d-p",
            explanation: "Matching the genetic disorders with their underlying causes."
        },
        {
            column1: ["(a) Homologous organs", "(b) Analogous organs", "(c) Vestigial organs", "(d) Fossils"],
            column2: ["(p) Wings of butterfly and bird", "(q) Remnants of ancient life", "(r) Appendix in humans", "(s) Forelimbs of whale and bat"],
            answer: "a-s, b-p, c-r, d-q",
            explanation: "Matching evolutionary concepts with their correct examples."
        },
        {
            column1: ["(a) Start codon", "(b) Stop codon", "(c) Linkage", "(d) Crossing over"],
            column2: ["(p) Exchange of genetic material", "(q) Tendency of genes to be inherited together", "(r) AUG", "(s) UAG"],
            answer: "a-r, b-s, c-q, d-p",
            explanation: "Matching genetics and molecular biology terms with their examples or definitions."
        }
    ],
    keyTakeaways: [
        "Mendel's laws describe the basic patterns of inheritance for discrete traits.",
        "The Central Dogma (DNA → RNA → Protein) describes the flow of genetic information that is fundamental to all life.",
        "Evolution by natural selection is the core mechanism that explains the diversity and adaptation of life on Earth.",
        "Mutations and recombination provide the raw genetic variation upon which natural selection acts."
    ],
    mnemonics: [
        { text: "For the stop codons in the genetic code: 'U Are Annoying, U Go Away, U Are Gone' (UAA, UGA, UAG).", tamil: "மரபணு குறியீட்டில் உள்ள நிறுத்தக் குறியீடுகளுக்கு: 'U Are Annoying, U Go Away, U Are Gone' (UAA, UGA, UAG)." },
        { text: "For human evolution order: 'Dr. Lucy is an Able Man, Erecting a Wise Neanderthal.' (Dryopithecus, Australopithecus, Homo habilis, Homo erectus, Homo sapiens neanderthalensis, Homo sapiens sapiens).", tamil: "மனிதப் பரிணாம வரிசைக்கு: 'Dr. Lucy is an Able Man, Erecting a Wise Neanderthal.'" }
    ],
    neetTips: [
        { text: "Pedigree analysis questions are common. Learn to quickly identify the patterns: autosomal vs. X-linked, and dominant vs. recessive.", tamil: "மரபுவழிப் பகுப்பாய்வு கேள்விகள் பொதுவானவை. autosomal vs. X-linked, மற்றும் ஓங்கு vs. ஒடுங்கு ஆகிய வடிவங்களை விரைவாக அடையாளம் காணக் கற்றுக்கொள்ளுங்கள்." },
        { text: "Understand the Hardy-Weinberg equilibrium equation (p² + 2pq + q² = 1) and how to use it to calculate allele and genotype frequencies.", tamil: "ஹார்டி-வெயின்பெர்க் சமநிலைச் சமன்பாட்டை (p² + 2pq + q² = 1) மற்றும் அல்லீல் மற்றும் மரபணு வகை அதிர்வெண்களைக் கணக்கிட அதை எவ்வாறு பயன்படுத்துவது என்பதைப் புரிந்து கொள்ளுங்கள்." }
    ],
    studentTip: {
        english: "Genetics problems are puzzles. Always write down the given information, identify the type of cross, and use a Punnett square systematically. For evolution, focus on understanding the evidence (fossils, comparative anatomy, etc.) as a cohesive story.",
        tamil: "மரபியல் கணக்குகள் புதிர்கள் போன்றவை. எப்போதும் கொடுக்கப்பட்ட தகவல்களை எழுதி, சிலுவையின் வகையை அடையாளம் கண்டு, புன்னட் கட்டத்தை முறையாகப் பயன்படுத்தவும். பரிணாமத்திற்கு, சான்றுகளை (படிமங்கள், ஒப்பீட்டு உடற்கூறியல் போன்றவை) ஒரு ஒத்திசைவான கதையாகப் புரிந்துகொள்வதில் கவனம் செலுத்துங்கள்."
    },
    peerDiscussion: {
        english: "Discuss with a friend: 'Natural selection acts on individuals, but evolution occurs in populations.' What does this statement mean? Provide an example.",
        tamil: "'இயற்கைத் தேர்வு தனிநபர்கள் மீது செயல்படுகிறது, ஆனால் பரிணாமம் மக்கள் தொகையில் நிகழ்கிறது.' இந்த அறிக்கை என்ன அர்த்தம்? ஒரு உதாரணம் கொடுங்கள் என்று உங்கள் நண்பருடன் விவாதிக்கவும்."
    },
    nextChapter: {
        title: "Biology and Human Welfare",
        titleTamil: "உயிரியலும் மனித நலனும்"
    },
    validationReport: []
};
