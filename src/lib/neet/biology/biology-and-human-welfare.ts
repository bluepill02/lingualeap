
import type { NeetModule } from '@/lib/types';

export const biologyAndHumanWelfare: NeetModule = {
  id: 'biology-and-human-welfare',
  title: 'Biology and Human Welfare',
  chapter: 'Biology and Human Welfare',
  subject: 'Biology',
  conceptNotes: `
### 1. Health and Disease (ஆரோக்கியம் மற்றும் நோய்)
*   **Health and Disease:** Basic concepts.
*   **Pathogens; parasites causing human diseases:**
    *   Malaria (மலேரியா)
    *   Filariasis (யானைக்கால் நோய்)
    *   Ascariasis (அஸ்காரிஸ்)
    *   Typhoid (டைபாய்டு)
    *   Pneumonia (நிமோனியா)
    *   Common cold (சாதாரண சளி)
    *   Amoebiasis (அமீபியாசிஸ்)
    *   Ringworm (படர்தாமரை)
    *   Dengue (டெங்கு)
    *   Chikungunya (சிக்குன்குனியா)
*   **Basic concepts of immunology - vaccines (நோய் எதிர்ப்பு சக்தியின் அடிப்படைகள் - தடுப்பூசிகள்):** Innate and acquired immunity, active and passive immunity.
*   **Cancer, HIV and AIDS.**
*   **Adolescence, drug and alcohol abuse, Tobacco abuse.**

### 2. Microbes in Human Welfare (மனித நலனில் நுண்ணுயிரிகள்)
*   **In household food processing:** Curd, bread, toddy, etc.
*   **In industrial production:** Fermented beverages, antibiotics, organic acids, enzymes.
*   **In sewage treatment:** Primary and secondary treatment.
*   **In energy generation:** Biogas production.
*   **As biocontrol agents (உயிரி கட்டுப்பாட்டுக் காரணிகள்):** Using microbes to control pests.
*   **As biofertilizers (உயிர் உரங்கள்):** Using microbes to enhance soil fertility (e.g., Rhizobium, Azotobacter).
  `,
  workedExamples: [
    {
        problem: 'A village experiences a sudden outbreak of a disease characterized by high fever, chills, and enlarged spleen, occurring in cycles. What is the likely disease and its mode of transmission?',
        solution: 'The symptoms (high fever, chills, enlarged spleen, cyclical occurrence) are characteristic of **Malaria**. The mode of transmission is through the bite of an infected female **_Anopheles_ mosquito**. (மலேரியா நோயின் அறிகுறிகள் - பெண் அனோபிலஸ் கொசுவால் பரவுகிறது.)'
    },
    {
        problem: 'Explain how "Golden Rice" is an example of biofortification and its significance.',
        solution: '"Golden Rice" is a genetically engineered rice variety designed to produce beta-carotene, a precursor to Vitamin A. It\'s an example of biofortification because it aims to increase the nutritional value (Vitamin A content) of a staple crop. Its significance lies in addressing Vitamin A deficiency, a major public health problem in many developing countries, especially among children, leading to blindness and weakened immunity. (கோல்டன் அரிசி என்பது வைட்டமின் A குறைபாட்டைப் போக்க மரபணு மாற்றப்பட்ட ஊட்டச்சத்து மேம்படுத்தப்பட்ட பயிர்.)'
    },
    {
        problem: 'Describe the role of microbes in the secondary treatment of sewage.',
        solution: 'In secondary (biological) sewage treatment, large aeration tanks are used where aerobic heterotrophic microbes (bacteria and fungi) grow rapidly to form "flocs" (masses of bacteria associated with fungal filaments). These microbes consume the major part of the organic matter in the effluent, significantly reducing the Biochemical Oxygen Demand (BOD) of the sewage. This process purifies the water before it is released. (கழிவுநீர் சுத்திகரிப்பில், நுண்ணுயிரிகள் (aerobic microbes) கழிவில் உள்ள கரிமப் பொருட்களை சிதைத்து, BOD அளவைக் குறைக்கின்றன.)'
    }
  ],
  mcqs: [
    {
      question: 'Which of the following is an example of a non-infectious disease?',
      options: ['Typhoid', 'Malaria', 'Cancer', 'Pneumonia'],
      answer: 'Cancer',
      explanation: 'Cancer is a non-infectious disease caused by uncontrolled cell growth, not by a pathogen.',
    },
    {
      question: 'The causative agent of typhoid fever is:',
      options: ['*Plasmodium vivax*', '*Salmonella typhi*', '*Entamoeba histolytica*', 'Rhinovirus'],
      answer: '*Salmonella typhi*',
      explanation: '*Salmonella typhi* is the bacterium that causes typhoid fever, usually transmitted through contaminated food or water.',
    },
    {
      question: 'Which cells are primarily targeted by the HIV virus?',
      options: ['B-lymphocytes', 'Helper T-lymphocytes', 'Neutrophils', 'Macrophages'],
      answer: 'Helper T-lymphocytes',
      explanation: 'HIV primarily infects and destroys Helper T-lymphocytes (CD4+ T cells), which weakens the immune system.',
    },
    {
      question: 'Colostrum, the yellowish fluid secreted by the mother during the initial days of lactation, provides:',
      options: ['Active immunity', 'Passive immunity', 'Autoimmunity', 'Cell-mediated immunity'],
      answer: 'Passive immunity',
      explanation: 'Colostrum is rich in ready-made antibodies (IgA) that provide passive immunity to the newborn.',
    },
    {
      question: 'The term "metastasis" in the context of cancer refers to:',
      options: ['Programmed cell death', 'Uncontrolled cell growth', 'Spread of cancerous cells to distant sites', 'Differentiation of cells'],
      answer: 'Spread of cancerous cells to distant sites',
      explanation: 'Metastasis is the process by which cancer cells break away from the primary tumor and spread to other parts of the body to form new tumors.',
    },
    {
        question: 'Which microbe is used for the commercial production of ethanol?',
        options: ['*Aspergillus niger*', '*Saccharomyces cerevisiae*', '*Lactobacillus*', '*Clostridium butylicum*'],
        answer: '*Saccharomyces cerevisiae*',
        explanation: '*Saccharomyces cerevisiae*, also known as brewer\'s yeast, is used for fermenting malted cereals and fruit juices to produce ethanol.'
    },
    {
        question: 'The drug "smack" is a derivative of:',
        options: ['Cocaine', 'Morphine', 'Cannabis', 'Tobacco'],
        answer: 'Morphine',
        explanation: 'Smack, also known as heroin, is chemically diacetylmorphine, which is derived from the acetylation of morphine.'
    },
    {
        question: 'The technique of MOET (Multiple Ovulation Embryo Transfer) is used for:',
        options: ['Fish production', 'Apiculture', 'Herd improvement in cattle', 'Producing disease-resistant plants'],
        answer: 'Herd improvement in cattle',
        explanation: 'MOET is a program for herd improvement in which a cow is administered hormones to induce superovulation, and the resulting embryos are transferred to surrogate mothers.'
    },
    {
        question: 'Cyclosporin A, an immunosuppressive agent, is produced by the fungus:',
        options: ['*Trichoderma polysporum*', '*Monascus purpureus*', '*Aspergillus niger*', '*Penicillium notatum*'],
        answer: '*Trichoderma polysporum*',
        explanation: '*Trichoderma polysporum* is a fungus that produces cyclosporin A, which is used as an immunosuppressive agent in organ-transplant patients.'
    },
    {
        question: '"Pusa Sadabahar" is a disease-resistant variety of:',
        options: ['Wheat', 'Brassica', 'Cauliflower', 'Chilli'],
        answer: 'Chilli',
        explanation: 'Pusa Sadabahar is a variety of chilli resistant to Chilly mosaic virus, Tobacco mosaic virus, and Leaf curl.'
    },
    {
        question: 'The infectious stage of *Plasmodium* that enters the human body is the:',
        options: ['Merozoite', 'Sporozoite', 'Gametocyte', 'Trophozoite'],
        answer: 'Sporozoite',
        explanation: 'Infection begins when an infected female *Anopheles* mosquito bites a human and injects sporozoites with its saliva.'
    },
    {
        question: 'Which of the following is used as a biocontrol agent for butterfly caterpillars?',
        options: ['*Trichoderma*', 'Ladybird beetle', '*Bacillus thuringiensis*', '*Dragonflies*'],
        answer: '*Bacillus thuringiensis*',
        explanation: 'Dried spores of *Bacillus thuringiensis* (Bt) are mixed with water and sprayed onto vulnerable plants to be eaten by insect larvae like butterfly caterpillars.'
    },
    {
        question: 'Which antibody is the most abundant in the human body?',
        options: ['IgA', 'IgE', 'IgG', 'IgM'],
        answer: 'IgG',
        explanation: 'IgG is the most abundant class of antibody, constituting about 80% of the total antibodies in the body.'
    },
    {
        question: 'The primary treatment of sewage involves:',
        options: ['Biological degradation', 'Chemical treatment', 'Physical removal of particles', 'Aeration'],
        answer: 'Physical removal of particles',
        explanation: 'Primary treatment involves the physical removal of large and small particles from sewage through filtration and sedimentation.'
    },
    {
        question: '"Hissardale" is a new breed of sheep developed in Punjab by crossing:',
        options: ['Bikaneri ewes and Merino rams', 'Bikaneri rams and Merino ewes', 'Deccani ewes and Bikaneri rams', 'Merino rams and Deccani ewes'],
        answer: 'Bikaneri ewes and Merino rams',
        explanation: 'Hissardale is a result of cross-breeding between Bikaneri ewes and Merino rams.'
    }
  ],
  assertionReasons: [
    {
      assertion: 'Active immunity is long-lived.',
      reason: 'Active immunity involves the production of memory cells.',
      answer: 'A',
      explanation: 'Both are true and the reason explains the assertion. Memory cells created during the primary immune response provide a quick and strong response upon subsequent encounters, leading to long-lived immunity.'
    },
    {
      assertion: 'Patients who have undergone organ transplantation are given immunosuppressive agents.',
      reason: 'Immunosuppressive agents prevent the host\'s immune system from rejecting the transplanted organ.',
      answer: 'A',
      explanation: 'Both are true and the reason correctly explains the assertion. The body\'s immune system, specifically cell-mediated immunity, can recognize a transplanted organ as foreign and reject it. Immunosuppressants are used to prevent this rejection.'
    },
    {
        "assertion": "Methanogens are obligate anaerobes.",
        "reason": "They are commonly found in the anaerobic sludge during sewage treatment and in the rumen of cattle.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion by giving examples of the anaerobic environments where methanogens thrive. They cannot survive in the presence of oxygen."
    },
    {
        "assertion": "Interferons are a type of barrier that prevents viral infection.",
        "reason": "Virus-infected cells secrete proteins called interferons which protect non-infected cells from further viral infection.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. Interferons are part of the cytokine barrier of innate immunity."
    },
    {
        "assertion": "Single Cell Protein (SCP) can help reduce environmental pollution.",
        "reason": "Microbes like *Spirulina* can be grown easily on materials like wastewater, animal manure, and molasses.",
        "answer": "A",
        "explanation": "The reason correctly explains the assertion. By using waste materials as substrates, SCP production helps in reducing pollution while creating a protein-rich food source."
    }
  ],
  matchTheColumns: [
    {
      column1: ['a) Typhoid', 'b) Filariasis', 'c) Ringworm', 'd) Malaria'],
      column2: ['i) *Wuchereria bancrofti*', 'ii) *Salmonella typhi*', 'iii) *Plasmodium vivax*', 'iv) Fungi (e.g., *Microsporum*)'],
      answer: 'a-ii, b-i, c-iv, d-iii'
    },
    {
      column1: ['a) Innate Immunity', 'b) Acquired Immunity', 'c) Passive Immunity', 'd) Active Immunity'],
      column2: ['i) Antibodies from mother to fetus', 'ii) Vaccination', 'iii) Skin barrier', 'iv) Memory cells'],
      answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
      "column1": ["a) *Aspergillus niger*", "b) *Acetobacter aceti*", "c) *Clostridium butylicum*", "d) *Lactobacillus*"],
      "column2": ["i) Acetic acid", "ii) Butyric acid", "iii) Lactic acid", "iv) Citric acid"],
      "answer": "a-iv, b-i, c-ii, d-iii"
    },
    {
      "column1": ["a) Statins", "b) Streptokinase", "c) Cyclosporin A", "d) Penicillin"],
      "column2": ["i) *Streptococcus*", "ii) *Trichoderma*", "iii) *Monascus purpureus*", "iv) *Penicillium notatum*"],
      "answer": "a-iii, b-i, c-ii, d-iv"
    },
    {
      "column1": ["a) Opioids", "b) Cannabinoids", "c) Coca alkaloids", "d) Morphine"],
      "column2": ["i) Brain receptors", "ii) Interferes with dopamine transport", "iii) CNS depressant", "iv) Effective sedative"],
      "answer": "a-iii, b-i, c-ii, d-iv"
    }
  ],
};
