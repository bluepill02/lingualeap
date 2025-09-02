
import type { NeetModule } from '@/lib/types';

export const biotechnologyAndItsApplications: NeetModule = {
  id: 'biology-biotechnology-and-its-applications',
  title: 'Biotechnology and Its Applications',
  chapter: 'Biotechnology and Its Applications',
  subject: 'Biology',
  conceptNotes: `
### 1. Principles and Process of Biotechnology (உயிரி தொழில்நுட்பவியல்: கொள்கைகள் மற்றும் செயல்முறைகள்)
*   **Genetic engineering (Recombinant DNA technology):** The core technique involving the alteration of the genetic makeup of an organism. This includes creating recombinant DNA, gene cloning, and gene transfer.

### 2. Application of Biotechnology in Health (சுகாதாரத்தில் உயிரி தொழில்நுட்பவியலின் பயன்பாடு)
*   **Human insulin and vaccine production:** Using genetically engineered organisms (like *E. coli*) to produce large quantities of safe and effective human insulin ("humulin") and recombinant vaccines (e.g., Hepatitis B vaccine).
*   **Gene Therapy (மரபணு சிகிச்சை):** The collection of methods that allows the correction of a gene defect that has been diagnosed in a child/embryo. The first clinical gene therapy was given for Adenosine Deaminase (ADA) deficiency.

### 3. Application of Biotechnology in Agriculture (வேளாண்மையில் உயிரி தொழில்நுட்பவியலின் பயன்பாடு)
*   **Genetically Modified Organisms (GMO):** Plants, bacteria, fungi, and animals whose genes have been altered by manipulation.
*   **Bt crops:** Crops made resistant to pests. The classic example is **Bt cotton**, which produces an insecticidal protein from the bacterium *Bacillus thuringiensis* to protect against cotton bollworms.

### 4. Transgenic Animals (மரபணு மாற்றப்பட்ட விலங்குகள்)
*   Animals that have had their DNA manipulated to possess and express an extra (foreign) gene.
*   Used to study diseases, test vaccine safety, and produce useful biological products (e.g., 'Rosie' the cow).

### 5. Biosafety Issues (உயிர்ப் பாதுகாப்பு சிக்கல்கள்)
*   Ethical issues arising from genetic modification.
*   **Biopiracy (உயிரித் திருட்டு):** The term used to refer to the use of bio-resources by multinational companies and other organisations without proper authorisation from the countries and people concerned without compensatory payment.
*   **Patents:** Legal rights granted to an inventor to prevent others from commercially using their invention.
  `,
  workedExamples: [
    {
        problem: 'A farmer notices that his cotton crop is frequently destroyed by bollworms. He wants to avoid using chemical sprays. What biotechnological solution would you recommend and why?',
        solution: 'The recommended solution is to use **Bt cotton**. Bt cotton is a genetically modified plant that contains the *cry* gene from the bacterium *Bacillus thuringiensis*. This gene produces a protein that is toxic to bollworms. When the bollworms feed on the cotton plant, the toxin is activated in their gut, and they are killed. This approach is highly specific to the pest, reduces the need for chemical pesticides, and is environmentally safer. (Bt பருத்தி என்பது இயற்கையாகவே பூச்சிகளைக் கொல்லும் மரபணு மாற்றப்பட்ட பயிர்.)'
    },
    {
        problem: 'Why was the production of insulin using recombinant DNA technology considered a major breakthrough for diabetic patients?',
        solution: 'Before rDNA technology, insulin was extracted from the pancreas of slaughtered pigs and cattle. This had several problems: \n1. **Allergic Reactions:** The animal insulin was slightly different from human insulin and could cause allergic or other immune responses in some patients. \n2. **Supply Issues:** The supply was dependent on the availability of slaughtered animals. \n3. **Ethical Concerns:** Use of animal products was a concern for some. \n\nGenetically engineered "humulin" is identical to human insulin, so it does not cause allergies. It can be produced in vast, pure quantities using bacteria, ensuring a stable and safe supply. (செயற்கை இன்சுலின் (humulin) மனித இன்சுலின் போலவே இருப்பதால், ஒவ்வாமை ஏற்படாது மற்றும் தட்டுப்பாடு இருக்காது.)'
    },
    {
        problem: 'A patient is suspected of being in the very early stages of an HIV infection. Why would a conventional antibody test be negative, and what molecular diagnostic tool would be more effective?',
        solution: 'In the early stages of an HIV infection (the "window period"), the body may not have produced a detectable level of antibodies against the virus yet. Therefore, a conventional test like ELISA, which detects antibodies, might give a false negative result. \nA more effective tool would be **PCR (Polymerase Chain reaction)**. PCR can detect the presence of the virus\'s genetic material (RNA) itself, even at very low concentrations. By amplifying the viral nucleic acid, PCR can confirm an infection long before antibody levels become significant. (PCR சோதனை, நோய்த்தொற்றின் ஆரம்ப கட்டத்திலேயே வைரஸின் மரபணுப் பொருளைக் கண்டறியும் திறன் கொண்டது.)'
    }
  ],
  mcqs: [
    {
      question: 'The "cry" gene is obtained from which organism?',
      options: ['*Escherichia coli*', '*Agrobacterium tumefaciens*', '*Bacillus thuringiensis*', '*Meloidogyne incognita*'],
      answer: '*Bacillus thuringiensis*',
      explanation: 'The cry gene, which codes for the insecticidal protein, is isolated from the bacterium *Bacillus thuringiensis*.'
    },
    {
      question: 'RNA interference (RNAi) is used to develop resistance in plants against:',
      options: ['Insects', 'Fungi', 'Bacteria', 'Nematodes'],
      answer: 'Nematodes',
      explanation: 'RNAi has been successfully used to create pest resistance in tobacco plants against the nematode *Meloidogyne incognita*.'
    },
    {
      question: 'Which of the following is NOT a reason to create transgenic animals?',
      options: ['To study disease', 'To produce biological products', 'To increase agricultural yields directly', 'To test vaccine safety'],
      answer: 'To increase agricultural yields directly',
      explanation: 'While transgenic plants are made to increase yield, transgenic animals are primarily used for research, disease modeling, and producing valuable proteins, not for direct food yield increase.'
    },
    {
      question: 'The first clinical gene therapy was given for the treatment of:',
      options: ['Cancer', 'AIDS', 'Cystic Fibrosis', 'Adenosine Deaminase (ADA) Deficiency'],
      answer: 'Adenosine Deaminase (ADA) Deficiency',
      explanation: 'The first gene therapy was performed in 1990 on a four-year-old girl with ADA deficiency, an immune disorder.'
    },
    {
      question: 'ELISA test is based on the principle of:',
      options: ['Gene amplification', 'Antigen-antibody interaction', 'DNA sequencing', 'Cell culture'],
      answer: 'Antigen-antibody interaction',
      explanation: 'ELISA (Enzyme-Linked Immunosorbent Assay) uses the highly specific binding between antigens and antibodies to detect the presence of a substance.'
    },
    {
        question: '"Golden Rice" is a genetically modified crop plant where the incorporated gene is meant for the biosynthesis of:',
        options: ['Vitamin C', 'Vitamin A', 'Omega 3', 'Vitamin B'],
        answer: 'Vitamin A',
        explanation: 'Golden Rice is enriched with beta-carotene, which is a precursor for Vitamin A.'
    },
    {
        question: 'The Indian government organisation responsible for assessing the safety of introducing GM organisms is:',
        options: ['ICMR', 'CSIR', 'GEAC', 'DBT'],
        answer: 'GEAC',
        explanation: 'The Genetic Engineering Approval Committee (GEAC) is the regulatory body for GM organisms in India.'
    },
    {
        question: 'Which of the following is an example of biopiracy?',
        options: ['Developing a hybrid crop variety through conventional breeding', 'Using traditional knowledge about a medicinal plant to develop a drug without compensating the local community', 'Licensing a patented technology for commercial use', 'Using microbes to produce antibiotics in a lab'],
        answer: 'Using traditional knowledge about a medicinal plant to develop a drug without compensating the local community',
        explanation: 'Biopiracy involves exploiting natural resources or traditional knowledge without proper authorization or fair compensation.'
    },
    {
        question: 'The two polypeptide chains of mature human insulin are linked together by:',
        options: ['Hydrogen bonds', 'Peptide bonds', 'Disulfide bridges', 'Ionic bonds'],
        answer: 'Disulfide bridges',
        explanation: 'Mature insulin consists of chain A and chain B, which are held together by two disulfide bridges.'
    },
    {
        question: 'Transgenic mice are being developed for use in:',
        options: ['Testing the safety of polio vaccine before use in humans', 'Production of human growth hormone', 'Production of insulin', 'Testing the taste of food additives'],
        answer: 'Testing the safety of polio vaccine before use in humans',
        explanation: 'Transgenic mice are used as models to test the safety and efficacy of vaccines like the polio vaccine.'
    },
    {
        question: 'The silencing of a specific mRNA due to a complementary dsRNA molecule is known as:',
        options: ['Translation', 'Transcription', 'RNA interference', 'DNA replication'],
        answer: 'RNA interference',
        explanation: 'RNA interference (RNAi) is a biological process in which dsRNA molecules inhibit gene expression or translation, by neutralizing targeted mRNA molecules.'
    },
    {
        question: '"Rosie", the first transgenic cow, produced milk that was enriched with:',
        options: ['Human alpha-lactalbumin', 'Human insulin', 'Casein', 'Vitamin C'],
        answer: 'Human alpha-lactalbumin',
        explanation: 'Rosie produced human protein-enriched milk (2.4 grams per litre) containing human alpha-lactalbumin, which was nutritionally more balanced for human babies than natural cow-milk.'
    },
    {
        question: 'A probe used in molecular diagnostics is:',
        options: ['A type of PCR machine', 'A single-stranded DNA or RNA molecule tagged with a radioactive marker', 'A bacterial plasmid', 'An enzyme used in ELISA'],
        answer: 'A single-stranded DNA or RNA molecule tagged with a radioactive marker',
        explanation: 'A probe is a short, labeled nucleic acid sequence used to detect the presence of a complementary sequence in a sample.'
    },
    {
        question: 'Bt toxin protein crystals do not kill the *Bacillus* itself because:',
        options: ['The bacterium is resistant to the toxin', 'The toxin is inactive in the bacterium\'s neutral pH', 'The bacterium lacks the specific receptors for the toxin', 'The toxin is stored in special vacuoles'],
        answer: 'The toxin is inactive in the bacterium\'s neutral pH',
        explanation: 'The Bt toxin exists as an inactive protoxin and is converted into an active form only in the alkaline pH of an insect\'s gut.'
    },
    {
        question: 'Which of the following is NOT a potential application of animal transgenesis?',
        options: ['Production of organs for xenotransplantation', 'Study of complex genetic diseases', 'Creating new species of farm animals', 'Improving nutritional quality of milk'],
        answer: 'Creating new species of farm animals',
        explanation: 'Transgenesis modifies existing species; it does not create entirely new ones.'
    },
    {
        question: 'The Flavr Savr tomato was a GM crop developed to:',
        options: ['Resist pests', 'Tolerate herbicides', 'Have a longer shelf life', 'Have higher vitamin content'],
        answer: 'Have a longer shelf life',
        explanation: 'It was one of the first GM crops, engineered to slow the ripening process, thus increasing its shelf life.'
    },
    {
        question: 'Which vector is commonly used in creating transgenic plants?',
        options: ['Retrovirus', 'Bacteriophage', 'Ti plasmid of *Agrobacterium*', 'Yeast artificial chromosome (YAC)'],
        answer: 'Ti plasmid of *Agrobacterium*',
        explanation: '*Agrobacterium tumefaciens* is a natural genetic engineer of plants, and its Ti plasmid is widely used as a vector.'
    },
    {
        question: 'In the context of ADA deficiency gene therapy, what is the role of the retrovirus?',
        options: ['To identify the faulty gene', 'To act as a vector to deliver the normal gene', 'To suppress the patient\'s immune system', 'To multiply the patient\'s lymphocytes'],
        answer: 'To act as a vector to deliver the normal gene',
        explanation: 'Retroviruses are used as vectors because of their ability to integrate their genetic material into the host cell\'s genome.'
    },
    {
        question: 'Which of the following statements about PCR is incorrect?',
        options: ['It requires a thermostable DNA polymerase', 'It involves cycles of denaturation, annealing, and extension', 'It can only amplify DNA, not RNA', 'It is used for molecular diagnosis'],
        answer: 'It can only amplify DNA, not RNA',
        explanation: 'While standard PCR amplifies DNA, a variation called Reverse Transcriptase PCR (RT-PCR) first converts RNA to DNA, which is then amplified. So, RNA can also be detected and amplified.'
    },
    {
        question: 'What is the primary advantage of using molecular diagnosis techniques over conventional methods?',
        options: ['They are cheaper', 'They are faster', 'They allow for very early detection of diseases', 'They do not require a trained professional'],
        answer: 'They allow for very early detection of diseases',
        explanation: 'Techniques like PCR can detect pathogens even when their concentration is very low, enabling diagnosis long before symptoms appear.'
    },
    {
        question: 'Treatment of a genetic disorder by correcting the faulty gene is called:',
        options: ['Immunotherapy', 'Chemotherapy', 'Gene therapy', 'Physiotherapy'],
        answer: 'Gene therapy',
        explanation: 'Gene therapy is an experimental technique that uses genes to treat or prevent disease by replacing a faulty gene or adding a new gene.'
    },
    {
        question: 'The Bt toxin gene `cryIAc` is effective against:',
        options: ['Corn borer', 'Cotton bollworms', 'Nematodes', 'Beetles'],
        answer: 'Cotton bollworms',
        explanation: 'Different cry genes are specific to different pests. cryIAc and cryIIAb control cotton bollworms.'
    },
    {
        question: 'The term "Humulin" refers to:',
        options: ['Insulin extracted from pigs', 'A type of human hemoglobin', 'Genetically engineered human insulin', 'A hormone for stimulating growth'],
        answer: 'Genetically engineered human insulin',
        explanation: 'Humulin was the brand name for the first commercially available human insulin produced using recombinant DNA technology.'
    },
    {
        question: 'Which Indian plant has been patented by a US company, leading to controversies on biopiracy?',
        options: ['Neem', 'Tulsi', 'Turmeric', 'All of the above'],
        answer: 'All of the above',
        explanation: 'Basmati rice, turmeric, and neem are all traditional Indian resources that have been subjects of biopiracy attempts or patents by foreign entities.'
    },
    {
        question: 'For gene therapy to be a permanent cure, the functional gene should be introduced into:',
        options: ['Adult somatic cells', 'Embryonic cells', 'Mature blood cells', 'Bone marrow cells'],
        answer: 'Embryonic cells',
        explanation: 'Introducing the gene at an early embryonic stage would ensure it is present in all the cells of the individual, providing a permanent cure.'
    }
  ],
  assertionReasons: [
    {
      assertion: 'Biotechnology has applications in producing pest-resistant plants.',
      reason: 'The *cry* gene from *Bacillus thuringiensis* can be introduced into plants to provide protection against insects.',
      answer: 'A',
      explanation: 'Both statements are true, and the reason is a correct explanation for the assertion. Bt crops are a prime example of this application.'
    },
    {
      assertion: 'Using animal insulin for treating diabetes in humans can lead to allergies.',
      reason: 'Animal insulin is slightly different in its protein structure from human insulin.',
      answer: 'A',
      explanation: 'The reason correctly explains why animal insulin can trigger an immune response (allergy) in some human patients.'
    },
    {
      assertion: 'Gene therapy for ADA deficiency using lymphocytes is not a permanent cure.',
      reason: 'Lymphocytes are not immortal cells and have a limited lifespan.',
      answer: 'A',
      explanation: 'Both are true. Since the corrected lymphocytes are mortal, the patient requires periodic infusion of such genetically engineered cells to maintain the treatment\'s effect.'
    },
    {
      assertion: 'PCR is a very sensitive diagnostic technique.',
      reason: 'PCR can amplify a very small amount of nucleic acid into a detectable quantity.',
      answer: 'A',
      explanation: 'The ability of PCR to amplify a single or few copies of a DNA sequence by several orders of magnitude is the reason for its high sensitivity.'
    },
    {
      assertion: 'The use of bio-resources without proper authorization is termed biopiracy.',
      reason: 'Biopiracy does not provide compensatory payment to the concerned country or people.',
      answer: 'B',
      explanation: 'Both statements are true definitions of biopiracy, but the reason is an additional characteristic of biopiracy, not the direct explanation of the term itself. The core of biopiracy is the unauthorized use.'
    },
    {
      assertion: 'RNA interference (RNAi) can be used to silence a specific gene.',
      reason: 'RNAi involves the use of a double-stranded RNA molecule complementary to the target mRNA.',
      answer: 'A',
      explanation: 'The dsRNA molecule is the key component that initiates the silencing process, thus the reason correctly explains the assertion.'
    },
    {
      assertion: 'Transgenic animals are created to study how genes are regulated.',
      reason: 'The introduction of a foreign gene can help understand its effect on the host\'s biological systems.',
      answer: 'A',
      explanation: 'By introducing a gene and observing its effects, scientists can study its regulation and its contribution to complex physiological functions.'
    },
    {
      assertion: 'The active form of Bt toxin kills the insect.',
      reason: 'The active toxin binds to the surface of midgut epithelial cells, creating pores that cause cell swelling and lysis.',
      answer: 'A',
      explanation: 'The reason correctly describes the mode of action of the active Bt toxin, which explains how it kills the insect.'
    },
    {
      assertion: 'ELISA is a widely used diagnostic test for AIDS.',
      reason: 'ELISA can detect the presence of HIV antibodies in the patient\'s serum.',
      answer: 'A',
      explanation: 'The detection of antibodies against HIV is the basis of using ELISA for AIDS diagnosis.'
    },
    {
      assertion: 'Mature insulin is composed of three polypeptide chains: A, B, and C.',
      reason: 'Proinsulin contains an extra stretch called the C-peptide.',
      answer: 'D',
      explanation: 'The assertion is false; mature insulin has only two chains (A and B). The reason is true; proinsulin has a C-peptide which is removed during maturation.'
    },
    {
      assertion: 'All transgenic animals are commercially successful.',
      reason: 'Creating transgenic animals is an expensive and complex process.',
      answer: 'D',
      explanation: 'The assertion is false; many transgenic animals are created for research purposes and are not commercially viable. The reason is true.'
    },
    {
      assertion: 'The Indian Parliament has cleared the GEAC for making decisions regarding GM organisms.',
      reason: 'GEAC stands for Genetic Engineering Analysis Committee.',
      answer: 'C',
      explanation: 'The assertion is true. However, the reason is false. GEAC stands for Genetic Engineering *Approval* Committee.'
    },
    {
      assertion: 'The Ti plasmid is a popular vector for cloning genes in animals.',
      reason: 'The Ti plasmid is derived from *Agrobacterium tumefaciens*.',
      answer: 'D',
      explanation: 'The assertion is false; the Ti plasmid is used for plants, not animals. The reason is true.'
    },
    {
      assertion: 'Using biocontrol agents is preferable to using chemical pesticides.',
      reason: 'Biocontrol agents are specific to the target pest and do not harm other useful organisms.',
      answer: 'A',
      explanation: 'The reason correctly explains one of the main advantages of biocontrol agents over broad-spectrum chemical pesticides.'
    },
    {
      assertion: 'Proinsulin needs to be processed to become functional insulin.',
      reason: 'The C-peptide is removed from proinsulin during processing.',
      answer: 'A',
      explanation: 'The removal of the C-peptide is the key processing step that converts proinsulin into active, mature insulin.'
    }
  ],
  matchTheColumns: [
    {
      column1: ['a) Bt Cotton', 'b) Gene Therapy', 'c) ELISA', 'd) Humulin'],
      column2: ['i) Antigen-antibody interaction', 'ii) *E. coli*', 'iii) ADA Deficiency', 'iv) Cry gene'],
      answer: 'a-iv, b-iii, c-i, d-ii'
    },
    {
      column1: ['a) Golden Rice', 'b) RNAi', 'c) PCR', 'd) Biopiracy'],
      column2: ['i) Amplification of nucleic acid', 'ii) Use of bio-resources without authorization', 'iii) Vitamin A enriched', 'iv) Nematode resistance'],
      answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
      column1: ['a) Rosie', 'b) *Meloidogyne incognita*', 'c) GEAC', 'd) Molecular Probe'],
      column2: ['i) Nematode', 'ii) Radioactive DNA/RNA', 'iii) Transgenic Cow', 'iv) GM Research Validity'],
      answer: 'a-iii, b-i, c-iv, d-ii'
    },
    {
      column1: ['a) cryIAc', 'b) cryIAb', 'c) Ti Plasmid', 'd) Retrovirus'],
      column2: ['i) Controls corn borer', 'ii) Vector in gene therapy', 'iii) Controls cotton bollworms', 'iv) Vector for transgenic plants'],
      answer: 'a-iii, b-i, c-iv, d-ii'
    },
    {
      column1: ['a) Unprocessed Insulin', 'b) Mature Insulin', 'c) Toxin Inactivation', 'd) Toxin Activation'],
      column2: ['i) Disulfide bridges', 'ii) Alkaline pH', 'iii) Neutral pH', 'iv) Contains C-peptide'],
      answer: 'a-iv, b-i, c-iii, d-ii'
    },
    {
      column1: ['a) Diagnostic test for AIDS', 'b) Study of diseases', 'c) Vaccine Safety', 'd) Biofertilizer'],
      column2: ['i) Transgenic mice', 'ii) ELISA', 'iii) *Rhizobium*', 'iv) Transgenic models (e.g., for cancer)'],
      answer: 'a-ii, b-iv, c-i, d-iii'
    },
    {
      column1: ['a) Pathophysiology', 'b) α-1-antitrypsin', 'c) dsRNA', 'd) *Salmonella typhi*'],
      column2: ['i) Treatment for emphysema', 'ii) Study of how disease works', 'iii) Pathogen for Typhoid', 'iv) Triggers RNAi'],
      answer: 'a-ii, b-i, c-iv, d-iii'
    },
    {
      column1: ['a) No pollution', 'b) Vitamin A deficiency', 'c) Human protein', 'd) Pest resistance'],
      column2: ['i) Golden Rice', 'ii) Bt Toxin', 'iii) Biogas', 'iv) α-lactalbumin'],
      answer: 'a-iii, b-i, c-iv, d-ii'
    },
    {
      column1: ['a) Fungi', 'b) Virus', 'c) Bacterium', 'd) Helminth'],
      column2: ['i) *Wuchereria*', 'ii) *Salmonella*', 'iii) *Trichophyton*', 'iv) Rhinovirus'],
      answer: 'a-iii, b-iv, c-ii, d-i'
    },
    {
      column1: ['a) AIDS', 'b) Cancer', 'c) Allergy', 'd) Common Cold'],
      column2: ['i) Exaggerated immune response', 'ii) Contact inhibition loss', 'iii) Retrovirus', 'iv) Nasal discharge'],
      answer: 'a-iii, b-ii, c-i, d-iv'
    },
    {
      column1: ['a) Physical barrier', 'b) Physiological barrier', 'c) Cellular barrier', 'd) Cytokine barrier'],
      column2: ['i) Interferons', 'ii) Macrophages', 'iii) Skin', 'iv) Acid in stomach'],
      answer: 'a-iii, b-iv, c-ii, d-i'
    },
    {
      column1: ['a) *Plasmodium*', 'b) *Entamoeba*', 'c) *Wuchereria*', 'd) *Ascaris*'],
      column2: ['i) Elephantiasis', 'ii) Internal bleeding', 'iii) Malignant malaria', 'iv) Amoebic dysentery'],
      answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
      column1: ['a) Opioids', 'b) Cannabinoids', 'c) Coca alkaloids', 'd) Morphine'],
      column2: ['i) Brain receptors', 'ii) Interferes with dopamine transport', 'iii) CNS depressant', 'iv) Effective sedative'],
      answer: 'a-iii, b-i, c-ii, d-iv'
    },
    {
      column1: ['a) MOET', 'b) SCP', 'c) Biofortification', 'd) Somatic hybridization'],
      column2: ['i) Breeding for improved nutritional quality', 'ii) Production of Pomato', 'iii) Herd improvement technique', 'iv) *Spirulina*'],
      answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
      column1: ['a) *Lactobacillus*', 'b) *Saccharomyces cerevisiae*', 'c) *Aspergillus niger*', 'd) *Clostridium butylicum*'],
      column2: ['i) Citric acid', 'ii) Butyric acid', 'iii) Bread', 'iv) Curd'],
      answer: 'a-iv, b-iii, c-i, d-ii'
    }
  ]
};
