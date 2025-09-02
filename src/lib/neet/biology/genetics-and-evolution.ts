
import type { NeetModule } from '@/lib/types';

export const geneticsAndEvolution: NeetModule = {
  id: 'biology-genetics-and-evolution',
  title: 'Genetics and Evolution',
  chapter: 'Genetics and Evolution',
  subject: 'Biology',
  conceptNotes: `
### 1. Principles of Inheritance and Variation (மரபுக்கடத்தல் மற்றும் மாறுபாடுகளின் கோட்பாடுகள்)

*   **Mendel's Laws of Inheritance (மெண்டலின் விதிகள்):**
    *   **Law of Dominance (ஓங்குதன்மை விதி):** In a heterozygous pair, one allele (dominant) expresses itself, and the other (recessive) is masked.
    *   **Law of Segregation (தனித்துப் பிரிதல் விதி):** During gamete formation, the two alleles for a heritable character separate (segregate) from each other so that each gamete ends up with only one allele.
    *   **Law of Independent Assortment (சார்பின்றி ஒதுங்குதல் விதி):** Genes for different traits can segregate independently during the formation of gametes.
*   **Deviations from Mendelism (மெண்டலிசத்திலிருந்து விலகல்கள்):**
    *   **Incomplete Dominance (முழுமையற்ற ஓங்குதன்மை):** The F1 hybrid shows a phenotype that is intermediate between the two parental phenotypes (e.g., flower color in snapdragon). (சிவப்பு மற்றும் வெள்ளை பூக்கள் கலந்து இளஞ்சிவப்பு பூக்கள் உருவாவது போல).
    *   **Co-dominance (இணை ஓங்குதன்மை):** Both alleles are expressed equally in the phenotype (e.g., AB blood group in humans).
    *   **Multiple Alleles (பல் கூட்டλληல்கள்):** More than two alleles exist for a single gene (e.g., ABO blood group system).
    *   **Pleiotropy (பல் பண்புக்கூறு):** A single gene affects multiple phenotypic traits.
*   **Chromosomal Theory of Inheritance (குரோமோசோம் கோட்பாடு):** Proposed by Sutton and Boveri. States that genes are located on chromosomes and the behavior of chromosomes during meiosis accounts for inheritance patterns.
*   **Sex Determination (பால் நிர்ணயம்):** XX-XY (humans, Drosophila), XX-XO (insects), ZW-ZZ (birds).
*   **Genetic Disorders (மரபணு குறைபாடுகள்):**
    *   **Mendelian Disorders:** Haemophilia, Sickle-cell anaemia, Phenylketonuria (PKU).
    *   **Chromosomal Disorders:** Down's syndrome (Trisomy 21), Klinefelter's syndrome (XXY), Turner's syndrome (XO).

### 2. Molecular Basis of Inheritance (மரபுக்கடத்தலின் மூலக்கூறு அடிப்படை)

*   **The Genetic Material (மரபுப் பொருள்):** DNA is the genetic material in most organisms. Proved by Hershey-Chase experiment.
*   **Structure of DNA (DNA அமைப்பு):** Double helix model proposed by Watson and Crick. It's a polymer of deoxyribonucleotides. The two strands are anti-parallel.
*   **DNA Replication (DNA இரட்டிப்பாதல்):** Semiconservative model. DNA polymerase is the main enzyme.
*   **Transcription (படியெடுத்தல்):** The process of copying genetic information from one strand of the DNA into RNA. Enzyme: RNA polymerase.
*   **Genetic Code (மரபியல் குறியீடு):** The relationship between the sequence of nucleotides on mRNA and the sequence of amino acids in a polypeptide. It is a triplet code, universal, and degenerate.
*   **Translation (மொழிபெயர்த்தல்):** The process of polymerization of amino acids to form a polypeptide. Occurs on ribosomes.
*   **Gene Regulation (மரபணு ஒழுங்குப்பாடு):** The Lac operon model in *E.coli* is a classic example of gene regulation in prokaryotes.
*   **Human Genome Project & DNA Fingerprinting:** Key applications of molecular biology.

### 3. Evolution (பரிணாமம்)

*   **Origin of Life (உயிரின் தோற்றம்):** Oparin-Haldane theory of chemical evolution. Miller-Urey experiment provided evidence.
*   **Evidence for Evolution (பரிணாமத்திற்கான சான்றுகள்):**
    *   Paleontological (fossils).
    *   Comparative Anatomy: **Homologous organs** (same origin, different functions, e.g., forelimbs of man, whale, bat) indicate divergent evolution. **Analogous organs** (different origin, same function, e.g., wings of butterfly and birds) indicate convergent evolution. (ஒத்த உறுப்புகள் ஒரு மூதாதையரிடமிருந்து வருவதைக் காட்டுகின்றன, செயல்பாடு வேறுபட்டாலும். ஒப்புமை உறுப்புகள் வெவ்வேறு மூதாதையரிடமிருந்து வந்தாலும் ஒரே செயல்பாட்டைக் காட்டுகின்றன).
*   **Theories of Evolution:**
    *   **Lamarckism:** Theory of inheritance of acquired characters.
    *   **Darwinism:** Theory of natural selection. Key concepts: overproduction, struggle for existence, variation, and survival of thefittest.
*   **Hardy-Weinberg Principle (ஹார்டி-வெயின்பர்க் கொள்கை):** States that allele and genotype frequencies in a population will remain constant from generation to generation in the absence of other evolutionary influences. p² + 2pq + q² = 1.
*   **Human Evolution (மனிதப் பரிணாமம்):** Key stages: *Dryopithecus* -> *Ramapithecus* -> *Australopithecus* -> *Homo habilis* -> *Homo erectus* -> *Homo neanderthalensis* -> *Homo sapiens*.
  `,
  workedExamples: [
    {
        problem: 'In pea plants, tall (T) is dominant over dwarf (t). A heterozygous tall plant is crossed with a dwarf plant. What will be the phenotypic ratio of the offspring?',
        solution: 'This is a test cross. \n**Parental Genotypes:** Heterozygous tall (Tt) x Dwarf (tt) \n**Gametes from Tt:** T, t \n**Gametes from tt:** t \n**Punnett Square:**\n| | T | t |\n|---|---|---|\n| t | Tt | tt |\n\n**Offspring Genotypes:** 1 Tt : 1 tt \n**Offspring Phenotypes:** 1 Tall : 1 Dwarf \nThe phenotypic ratio is **1:1**. (இது ஒரு சோதனை கலப்பு. சந்ததிகளின் புறத்தோற்ற விகிதம் 1 நெட்டை : 1 குட்டை என இருக்கும்.)'
    },
    {
        problem: 'A man with blood group A marries a woman with blood group B. Their child has blood group O. What are the genotypes of the parents?',
        solution: 'For the child to have blood group O (genotype ii), they must inherit an "i" allele from each parent. \nA man with blood group A can have genotype IᴬIᴬ or Iᴬi. \nA woman with blood group B can have genotype IᴮIᴮ or Iᴮi. \nSince the child is "ii", both parents must carry the recessive "i" allele. \nTherefore, the genotype of the father (blood group A) must be **Iᴬi**. \nThe genotype of the mother (blood group B) must be **Iᴮi**. (குழந்தைக்கு O இரத்த வகை (ii) இருக்க, ஒவ்வொரு பெற்றோரிடமிருந்தும் ஒரு "i" அல்லீலைப் பெற வேண்டும். எனவே, பெற்றோரின் மரபணு வகை Iᴬi மற்றும் Iᴮi ஆக இருக்க வேண்டும்.)'
    },
    {
        problem: 'In a population that is in Hardy-Weinberg equilibrium, the frequency of the recessive allele (a) is 0.3. What is the percentage of heterozygous individuals (Aa) in the population?',
        solution: 'Given: Frequency of recessive allele (q) = 0.3 \nAccording to Hardy-Weinberg equilibrium, p + q = 1. \nFrequency of dominant allele (p) = 1 - q = 1 - 0.3 = 0.7. \nThe frequency of heterozygous individuals is given by 2pq. \nFrequency of heterozygotes = 2 * p * q = 2 * 0.7 * 0.3 = 0.42. \nTo express this as a percentage, multiply by 100. \nPercentage of heterozygous individuals = 0.42 * 100 = **42%**. (ஹார்டி-வெயின்பர்க் சமன்பாட்டின்படி, ஹெட்டோரோசைகஸ் நபர்களின் சதவீதம் 2pq ஆகும், இது 42% ஆகும்.)'
    }
  ],
  mcqs: [
    {
      question: 'Which of the following is an example of co-dominance?',
      options: ['Flower color in snapdragon', 'ABO blood group in humans', 'Height in pea plants', 'Skin color in humans'],
      answer: 'ABO blood group in humans',
      explanation: 'In the AB blood group, both A and B alleles are expressed equally, showing co-dominance.'
    },
    {
      question: 'The experimental proof for the semiconservative replication of DNA was first shown in a:',
      options: ['Plant', 'Bacterium', 'Fungus', 'Virus'],
      answer: 'Bacterium',
      explanation: 'Meselson and Stahl performed their experiment on *E. coli* to prove the semiconservative nature of DNA replication.'
    },
    {
      question: 'The wings of a butterfly and the wings of a bird are examples of:',
      options: ['Homologous structures', 'Vestigial structures', 'Analogous structures', 'Exoskeletons'],
      answer: 'Analogous structures',
      explanation: 'They have different origins and structures but perform the same function (flying), indicating convergent evolution.'
    },
    {
      question: 'A genetic disorder caused by the trisomy of chromosome 21 is:',
      options: ['Turner\'s Syndrome', 'Klinefelter\'s Syndrome', 'Down\'s Syndrome', 'Haemophilia'],
      answer: 'Down\'s Syndrome',
      explanation: 'Down\'s Syndrome is a chromosomal disorder characterized by the presence of an extra copy of chromosome 21.'
    },
    {
      question: 'The process of synthesis of RNA from a DNA template is called:',
      options: ['Replication', 'Translation', 'Transcription', 'Transformation'],
      answer: 'Transcription',
      explanation: 'Transcription is the first step of gene expression, where a particular segment of DNA is copied into RNA.'
    },
    {
        question: 'Which of the following represents a test cross?',
        options: ['Ww x Ww', 'WW x Ww', 'Ww x ww', 'WW x WW'],
        answer: 'Ww x ww',
        explanation: 'A test cross is a cross between an organism with an unknown dominant genotype and an organism that is homozygous recessive for that trait.'
    },
    {
        question: 'The term "operon" was proposed by:',
        options: ['Watson and Crick', 'Jacob and Monod', 'Hershey and Chase', 'Griffith'],
        answer: 'Jacob and Monod',
        explanation: 'Francois Jacob and Jacques Monod proposed the operon model for gene regulation in bacteria.'
    },
    {
        question: 'Which theory states that "ontogeny recapitulates phylogeny"?',
        options: ['Theory of Natural Selection', 'Theory of Acquired Characters', 'Recapitulation Theory', 'Modern Synthetic Theory'],
        answer: 'Recapitulation Theory',
        explanation: 'Proposed by Ernst Haeckel, this theory suggests that the development of an organism (ontogeny) expresses all the intermediate forms of its ancestors throughout evolution (phylogeny).'
    },
    {
        question: 'In the DNA double helix, the two strands are:',
        options: ['Parallel', 'Anti-parallel', 'Perpendicular', 'Coiled in the same direction'],
        answer: 'Anti-parallel',
        explanation: 'The two strands run in opposite directions, one in the 5\' to 3\' direction and the other in the 3\' to 5\' direction.'
    },
    {
        question: 'A man with blood group O marries a woman with blood group AB. What are the possible blood groups of their offspring?',
        options: ['O and AB', 'A and B', 'A, B, and O', 'A, B, AB, and O'],
        answer: 'A and B',
        explanation: 'The man\'s genotype is ii. The woman\'s is IᴬIᴮ. The offspring can have genotypes Iᴬi (Blood group A) or Iᴮi (Blood group B).'
    },
    {
        question: 'Which of the following is considered the "ultimate source of variation"?',
        options: ['Recombination', 'Mutation', 'Genetic drift', 'Natural selection'],
        answer: 'Mutation',
        explanation: 'Mutations are random changes in the DNA sequence that create new alleles, providing the raw material for evolution.'
    },
    {
        question: 'The enzyme required for transcription is:',
        options: ['DNA polymerase', 'RNA polymerase', 'Ligase', 'Helicase'],
        answer: 'RNA polymerase',
        explanation: 'RNA polymerase is the enzyme that synthesizes RNA from a DNA template.'
    },
    {
        question: 'Which of the following provides the most direct evidence for evolution?',
        options: ['Comparative anatomy', 'Embryology', 'Fossils', 'Biogeography'],
        answer: 'Fossils',
        explanation: 'Fossils are the preserved remains of ancient organisms that provide a direct record of the history of life on Earth.'
    },
    {
        "question": "Which of the following is a termination codon?",
        "options": [ "AUG", "GUG", "UGA", "CGC" ],
        "answer": "UGA",
        "explanation": "UAA, UAG, and UGA are the three stop or termination codons in the genetic code."
    },
    {
        "question": "The phenomenon of a single gene exhibiting multiple phenotypic effects is called:",
        "options": [ "Co-dominance", "Pleiotropy", "Polygenic inheritance", "Multiple allelism" ],
        "answer": "Pleiotropy",
        "explanation": "Pleiotropy occurs when one gene influences two or more seemingly unrelated phenotypic traits. An example is phenylketonuria."
    }
  ],
  assertionReasons: [
    {
      assertion: 'The law of segregation is universally applicable.',
      reason: 'It is based on the fact that alleles do not show any blending and both characters are recovered as such in the F2 generation.',
      answer: 'A',
      explanation: 'The law of segregation is the only one of Mendel\'s laws without exception, as alleles must separate during meiosis. The reason correctly explains the non-blending nature of alleles.'
    },
    {
      assertion: 'The genetic code is degenerate.',
      reason: 'Some amino acids are coded by more than one codon.',
      answer: 'A',
      explanation: 'Degeneracy means that a single amino acid can be specified by multiple codons. The reason is the correct definition of degeneracy.'
    },
    {
      assertion: 'Analogous organs show convergent evolution.',
      reason: 'Analogous organs have a similar function but different evolutionary origins.',
      answer: 'A',
      explanation: 'Convergent evolution is the process whereby organisms not closely related independently evolve similar traits as a result of having to adapt to similar environments or ecological niches. This is perfectly illustrated by analogous organs.'
    },
    {
        "assertion": "A person with blood group O can donate blood to a person with any other blood group.",
        "reason": "O blood group individuals do not have any antigens on their RBCs.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Since O blood group RBCs lack both A and B antigens, they do not trigger an immune reaction in recipients of other blood types, making them universal donors."
    },
    {
        "assertion": "The Hardy-Weinberg principle states that allele frequencies in a population are stable from generation to generation.",
        "reason": "This is applicable only when there are no evolutionary influences like mutation, selection, or genetic drift.",
        "answer": "A",
        "explanation": "The reason correctly states the conditions under which the principle holds true, thus explaining the assertion."
    },
    {
        "assertion": "Haemophilia is a sex-linked recessive disorder.",
        "reason": "It shows transmission from an unaffected carrier female to some of the male progeny.",
        "answer": "A",
        "explanation": "The reason correctly describes the criss-cross inheritance pattern characteristic of X-linked recessive disorders, which explains the assertion."
    },
    {
        "assertion": "In a DNA molecule, the percentage of Adenine is equal to the percentage of Thymine.",
        "reason": "Adenine always pairs with Thymine through two hydrogen bonds.",
        "answer": "A",
        "explanation": "The reason (Chargaff's rule of base pairing) correctly explains why the amounts of A and T are equal."
    },
    {
        "assertion": "Industrial melanism is an example of natural selection.",
        "reason": "In a polluted environment, dark-colored moths were better camouflaged and survived, leading to an increase in their population.",
        "answer": "A",
        "explanation": "The reason correctly provides the mechanism of natural selection in the case of the peppered moth, explaining the assertion."
    }
  ],
  matchTheColumns: [
    {
      column1: ['a) Lac Operon', 'b) DNA Fingerprinting', 'c) Human Evolution', 'd) Test Cross'],
      column2: ['i) *Homo habilis*', 'ii) Alec Jeffreys', 'iii) To determine genotype of F1 hybrid', 'iv) Gene regulation in prokaryotes'],
      answer: 'a-iv, b-ii, c-i, d-iii'
    },
    {
      column1: ['a) Phenylketonuria', 'b) Sickle-cell anaemia', 'c) Down\'s syndrome', 'd) Turner\'s syndrome'],
      column2: ['i) Trisomy', 'ii) Autosomal recessive', 'iii) Monosomy of X-chromosome', 'iv) Co-dominance example'],
      answer: 'a-ii, b-iv, c-i, d-iii'
    },
    {
      "column1": ["a) Homologous organs", "b) Analogous organs", "c) Vestigial organs", "d) Adaptive radiation"],
      "column2": ["i) Wings of butterfly and bird", "ii) Appendix in humans", "iii) Forelimbs of man and whale", "iv) Darwin's finches"],
      "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
      "column1": ["a) Transcription", "b) Translation", "c) Replication", "d) Reverse Transcription"],
      "column2": ["i) DNA → DNA", "ii) RNA → DNA", "iii) DNA → mRNA", "iv) mRNA → Protein"],
      "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
      "column1": ["a) AUG", "b) UAA", "c) GGG", "d) CUU"],
      "column2": ["i) Leucine", "ii) Start codon (Methionine)", "iii) Glycine", "iv) Stop codon"],
      "answer": "a-ii, b-iv, c-iii, d-i"
    }
  ],
};
