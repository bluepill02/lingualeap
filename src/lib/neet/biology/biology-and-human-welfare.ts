
import type { NeetModule } from '@/lib/types';

export const biologyAndHumanWelfare: NeetModule = {
  id: 'biology-and-human-welfare',
  title: 'Biology and Human Welfare',
  chapter: 'Biology and Human Welfare',
  subject: 'Biology',
  conceptNotes: `
### 1. Human Health and Diseases (மனித ஆரோக்கியமும் நோய்களும்)

*   **Health (ஆரோக்கியம்):** A state of complete physical, mental, and social well-being, not merely the absence of disease or infirmity. (நோயற்ற வாழ்வே குறைவற்ற செல்வம் - "A life without disease is a life without want.")
*   **Disease (நோய்):** Any condition that impairs the normal functioning of the body.
    *   **Infectious Diseases (தொற்று நோய்கள்):** Caused by pathogens (e.g., bacteria, viruses, fungi, protozoa, helminths) and can be transmitted from person to person. (சாதாரண சளி, டைபாய்டு, மலேரியா)
    *   **Non-infectious Diseases (தொற்றா நோய்கள்):** Not transmitted between people (e.g., cancer, diabetes, heart diseases). (புற்றுநோய், சர்க்கரை நோய்)

#### Common Human Diseases (பொதுவான மனித நோய்கள்)
A table summarizing common diseases, their pathogens, transmission, and symptoms. (This would be rendered as a table in the UI).

### 2. Immunity (நோய் எதிர்ப்பு சக்தி)

The body's ability to resist disease. (உடலின் நோய்களை எதிர்க்கும் திறன்)
*   **Innate Immunity (இயல்பான நோய் எதிர்ப்பு சக்தி):** Non-specific, present from birth. (பிறப்பிலேயே இருக்கும் பாதுகாப்புப் படை)
*   **Acquired Immunity (பெறப்பட்ட நோய் எதிர்ப்பு சக்தி):** Pathogen-specific, develops after exposure. (நோய் வந்த பிறகு அல்லது தடுப்பூசி மூலம் பெறும் பாதுகாப்பு)

### 3. AIDS, Cancer, Drugs and Alcohol Abuse
Brief overview of these topics, causes, and effects.

### 4. Improvement in Food Production (உணவு உற்பத்தியில் மேம்பாடு)

*   **Animal Husbandry (கால்நடை வளர்ப்பு):** Scientific management of livestock.
*   **Plant Breeding (தாவரப் பெருக்கம்):** Creating desired plant types. Biofortification (உயிரி ஊட்டச்சத்து மேம்பாடு) is a key concept.
*   **Single Cell Protein (SCP) (ஒற்றை செல் புரதம்):** Protein-rich biomass from microorganisms.

### 5. Microbes in Human Welfare (மனித நலனில் நுண்ணுயிரிகள்)

*   **Household Products:** Curd, Bread, Cheese.
*   **Industrial Products:** Fermented Beverages, Antibiotics, Chemicals, Enzymes.
*   **Sewage Treatment:** Primary and Secondary (biological) treatment.
*   **Biogas Production:** Anaerobic digestion by methanogens.
*   **Biocontrol Agents & Biofertilizers:** Using microbes to control pests and improve soil fertility.
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
    }
  ],
};
