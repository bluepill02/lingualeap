
import type { NeetModule } from '@/lib/types';

export const humanPhysiology: NeetModule = {
  id: 'biology-human-physiology',
  title: 'Human Physiology',
  chapter: 'Human Physiology',
  subject: 'Biology',
  conceptNotes: `
### 1. Digestion and Absorption (செரிமானம் மற்றும் உறிஞ்சுதல்)

*   **Alimentary Canal (உணவுப் பாதை):** The path food takes from mouth to anus, including the esophagus, stomach, small intestine, and large intestine.
*   **Digestive Glands (செரிமான சுரப்பிகள்):** Salivary glands, liver (produces bile), pancreas (produces pancreatic juice).
*   **Process of Digestion:** Mechanical (chewing) and chemical (enzymes) breakdown of complex food into simple absorbable forms.
    *   **Carbohydrates -> Monosaccharides** (e.g., glucose)
    *   **Proteins -> Amino acids**
    *   **Fats -> Fatty acids and glycerol**
*   **Absorption (உறிஞ்சுதல்):** Digested products are absorbed in the small intestine, primarily in the jejunum and ileum, through villi.

### 2. Breathing and Exchange of Gases (சுவாசம் மற்றும் வாயுப் பரிமாற்றம்)

*   **Respiratory Organs (சுவாச உறுப்புகள்):** Lungs are the main respiratory organs. The pathway includes nostrils, pharynx, larynx, trachea, bronchi, and bronchioles.
*   **Mechanism of Breathing:** Inspiration (உட்சுவாசம்) is an active process involving the contraction of the diaphragm and external intercostal muscles. Expiration (வெளிச்சுவாசம்) is a passive process.
*   **Transport of Gases:**
    *   **Oxygen:** ~97% transported by haemoglobin in RBCs as oxyhaemoglobin. ~3% dissolved in plasma.
    *   **Carbon Dioxide:** ~70% as bicarbonate, ~20-25% by haemoglobin as carbamino-haemoglobin, ~7% dissolved in plasma.
*   **Regulation of Respiration:** Respiratory rhythm centre in the medulla oblongata.

### 3. Body Fluids and Circulation (உடல் திரவங்கள் மற்றும் சுழற்சி)

*   **Blood (இரத்தம்):** A connective tissue consisting of plasma, RBCs, WBCs, and platelets.
*   **Blood Groups:** ABO and Rh systems.
*   **Human Heart (மனித இதயம்):** A four-chambered organ. The right side handles deoxygenated blood, and the left side handles oxygenated blood (double circulation).
*   **Cardiac Cycle (இதய சுழற்சி):** The sequence of events in one heartbeat (0.8 seconds). Includes systole (contraction) and diastole (relaxation).
*   **ECG (Electrocardiogram):** Graphical representation of the electrical activity of the heart.

### 4. Excretory Products and their Elimination (கழிவுப் பொருட்கள் மற்றும் அவற்றை வெளியேற்றுதல்)

*   **Human Excretory System (மனிதக் கழிவுநீக்க மண்டலம்):** Consists of a pair of kidneys, ureters, urinary bladder, and urethra.
*   **Nephron (நெஃப்ரான்):** The functional unit of the kidney. Consists of the glomerulus and the renal tubule.
*   **Urine Formation (சிறுநீர் உருவாக்கம்):** Involves three main processes:
    1.  **Glomerular Filtration (கிளாமருலர் வடிகட்டுதல்)**
    2.  **Reabsorption (மீண்டும் உறிஞ்சுதல்)**
    3.  **Secretion (சுரத்தல்)**
*   **Regulation of Kidney Function:** Hormonal feedback mechanisms involving ADH, RAAS (Renin-Angiotensin system), and ANF.

### 5. Locomotion and Movement (இயக்கம் மற்றும் இடப்பெயர்ச்சி)

*   **Types of Movement:** Amoeboid, ciliary, muscular.
*   **Muscles (தசைகள்):** Skeletal, visceral, and cardiac muscles.
*   **Structure of a Skeletal Muscle:** Made of muscle bundles (fascicles), held together by fascia. Each muscle fibre has myofibrils with light (I-band) and dark (A-band) bands.
*   **Sliding Filament Theory:** Explains muscle contraction. The thin actin filaments slide over the thick myosin filaments.
*   **Skeletal System (எலும்பு மண்டலம்):** Framework of bones (206 in adults) and cartilages. Axial skeleton (skull, vertebral column, ribs, sternum) and Appendicular skeleton (limbs and girdles).
*   **Joints (மூட்டுகள்):** Fibrous, cartilaginous, and synovial joints.

### 6. Neural Control and Coordination (நரம்புக் கட்டுப்பாடு மற்றும் ஒருங்கிணைப்பு)

*   **Nervous System:** Divided into Central Nervous System (CNS - brain and spinal cord) and Peripheral Nervous System (PNS).
*   **Neuron (நரம்பு செல்):** Structural and functional unit of the nervous system.
*   **Generation and Conduction of Nerve Impulse:** Involves changes in membrane potential (resting potential, action potential) due to the movement of ions (Na+, K+).
*   **Synapse (நரம்பு சந்தி):** The junction between two neurons. Transmission can be electrical or chemical (via neurotransmitters).
*   **Human Brain (மனித மூளை):** Major parts are the forebrain (cerebrum, thalamus, hypothalamus), midbrain, and hindbrain (pons, cerebellum, medulla).

### 7. Chemical Coordination and Integration (வேதிய ஒருங்கிணைப்பு)

*   **Endocrine Glands (நாளமில்லாச் சுரப்பிகள்):** Ductless glands that secrete hormones directly into the bloodstream.
*   **Major Endocrine Glands and Hormones:**
    *   **Hypothalamus:** Releasing and inhibiting hormones.
    *   **Pituitary (Anterior & Posterior):** GH, TSH, ACTH, LH, FSH, ADH, Oxytocin.
    *   **Thyroid:** Thyroxine (T4), Triiodothyronine (T3).
    *   **Pancreas (Islets of Langerhans):** Insulin, Glucagon.
    *   **Adrenal (Cortex & Medulla):** Cortisol, Aldosterone, Adrenaline, Noradrenaline.
    *   **Testis:** Testosterone.
    *   **Ovary:** Estrogen, Progesterone.
  `,
  workedExamples: [
    {
        problem: 'A person has a cardiac output of 5040 ml/minute and a heart rate of 72 beats/minute. What is their stroke volume?',
        solution: '**Formula:** Cardiac Output (CO) = Stroke Volume (SV) × Heart Rate (HR) \n**Rearranging for Stroke Volume:** SV = CO / HR \n**Given:**\n- CO = 5040 ml/min\n- HR = 72 beats/min \n**Calculation:**\nSV = 5040 ml/min / 72 beats/min = 70 ml/beat. \n**Answer:** The person\'s stroke volume is 70 ml. (இதய வெளியீடு = பக்கவாதம் அளவு × இதய துடிப்பு. பக்கவாதம் அளவு = 5040/72 = 70 மிலி.)'
    },
    {
        problem: 'During a nerve impulse transmission, what event causes repolarization of the neuron membrane?',
        solution: 'Repolarization is the process of restoring the resting membrane potential. After depolarization (influx of Na+ ions), the voltage-gated Na+ channels close, and the voltage-gated **K+ channels open**. This leads to a rapid **efflux (outflow) of K+ ions** from the inside of the axon to the outside. The loss of positive potassium ions from the cell causes the membrane potential to return towards its negative resting value. (நரம்பு சவ்வின் மறுமுனைவாக்கம், பொட்டாசியம் (K+) அயனிகள் வெளியேறுவதால் ஏற்படுகிறது.)'
    },
    {
        problem: 'Explain the principle behind the sliding filament theory of muscle contraction.',
        solution: 'The sliding filament theory states that muscle contraction occurs not by the shortening of the myofilaments themselves, but by the **sliding of the thin actin filaments over the thick myosin filaments**. This process is driven by the formation of **cross-bridges** between the myosin heads and actin filaments. The myosin heads bind to actin, pull the actin filament towards the center of the sarcomere (this is the "power stroke"), detach, and then re-cock to bind again. This cycle repeats, causing the sarcomere to shorten and the muscle to contract. ATP is required for both the binding and detachment of the myosin heads. (தசைச் சுருக்கத்தின் போது, மெல்லிய ஆக்டின் இழைகள் தடிமனான மயோசின் இழைகளின் மீது சறுக்கிச் செல்கின்றன.)'
    }
  ],
  mcqs: [
    {
      question: 'Which part of the nephron is impermeable to water?',
      options: ['Proximal Convoluted Tubule (PCT)', 'Descending limb of Loop of Henle', 'Ascending limb of Loop of Henle', 'Distal Convoluted Tubule (DCT)'],
      answer: 'Ascending limb of Loop of Henle',
      explanation: 'The ascending limb of the Loop of Henle is permeable to electrolytes but impermeable to water, which helps in creating a concentration gradient in the medulla.'
    },
    {
      question: 'The P-wave in a standard ECG represents:',
      options: ['Repolarization of the ventricles', 'Depolarization of the atria', 'Depolarization of the ventricles', 'Repolarization of the atria'],
      answer: 'Depolarization of the atria',
      explanation: 'The P-wave represents the electrical excitation (or depolarization) of the atria, which leads to the contraction of both atria.'
    },
    {
      question: 'Which of the following is NOT a function of the liver?',
      options: ['Production of bile', 'Detoxification of drugs', 'Production of insulin', 'Metabolism of carbohydrates'],
      answer: 'Production of insulin',
      explanation: 'Insulin is produced by the beta cells of the Islets of Langerhans in the pancreas, not the liver.'
    },
    {
      question: 'During muscle contraction, which of the following does NOT shorten?',
      options: ['I-band', 'H-zone', 'Sarcomere', 'A-band'],
      answer: 'A-band',
      explanation: 'The A-band corresponds to the length of the thick myosin filaments. During contraction, the actin filaments slide over the myosin, but the A-band itself does not change its length.'
    },
    {
      question: 'The junction between two neurons is called a:',
      options: ['Synapse', 'Sarcolemma', 'Synovial joint', 'Neuromuscular junction'],
      answer: 'Synapse',
      explanation: 'A synapse is the specialized junction where a nerve impulse is transmitted from one neuron to another.'
    },
    {
      question: 'The enzyme pepsin digests:',
      options: ['Carbohydrates', 'Fats', 'Proteins', 'Nucleic acids'],
      answer: 'Proteins',
      explanation: 'Pepsin is a proteolytic enzyme secreted in the stomach that begins the digestion of proteins into smaller polypeptides.'
    },
    {
      question: 'The amount of air that can be inspired or expired during normal breathing is called:',
      options: ['Tidal Volume', 'Inspiratory Reserve Volume', 'Expiratory Reserve Volume', 'Vital Capacity'],
      answer: 'Tidal Volume',
      explanation: 'Tidal volume (TV) is the volume of air moved into or out of the lungs during a quiet breath, typically about 500 ml.'
    },
    {
      question: 'The "universal donor" blood group is:',
      options: ['A', 'B', 'AB', 'O'],
      answer: 'O',
      explanation: 'Blood group O individuals lack A and B antigens on their RBCs, so their blood can be donated to people of any ABO blood group.'
    },
    {
      question: 'Which hormone is responsible for the reabsorption of water in the distal parts of the nephron?',
      options: ['Aldosterone', 'ADH (Antidiuretic Hormone)', 'Adrenaline', 'Glucagon'],
      answer: 'ADH (Antidiuretic Hormone)',
      explanation: 'ADH, also known as vasopressin, increases the permeability of the DCT and collecting ducts to water, promoting its reabsorption.'
    },
    {
      question: 'The functional unit of muscle contraction is the:',
      options: ['Myofibril', 'Muscle fibre', 'Sarcomere', 'Myosin'],
      answer: 'Sarcomere',
      explanation: 'The sarcomere is the basic contractile unit of a muscle fibre, extending from one Z-line to the next.'
    },
    {
      question: 'Which part of the human brain is the center for controlling body temperature and the urge for eating and drinking?',
      options: ['Cerebrum', 'Cerebellum', 'Medulla', 'Hypothalamus'],
      answer: 'Hypothalamus',
      explanation: 'The hypothalamus is a key part of the forebrain that regulates many homeostatic functions, including body temperature, thirst, and hunger.'
    },
    {
      question: 'Which hormone lowers blood glucose levels?',
      options: ['Glucagon', 'Insulin', 'Cortisol', 'Adrenaline'],
      answer: 'Insulin',
      explanation: 'Insulin, produced by the β-cells of the pancreas, facilitates the uptake of glucose by cells, thus lowering blood glucose levels.'
    },
    {
        question: 'The QRS complex in a standard ECG represents:',
        options: ['Repolarization of the atria', 'Depolarization of the ventricles', 'Repolarization of the ventricles', 'Depolarization of the atria'],
        answer: 'Depolarization of the ventricles',
        explanation: 'The QRS complex represents ventricular depolarization, which initiates ventricular contraction (systole).'
    },
    {
        question: 'The number of floating ribs in the human body is:',
        options: ['2 pairs', '3 pairs', '5 pairs', '7 pairs'],
        answer: '2 pairs',
        explanation: 'The last two pairs of ribs (11th and 12th) are not connected ventrally to the sternum and are therefore called floating ribs.'
    },
    {
        question: 'A synapse is formed by the membrane of a pre-synaptic neuron and a post-synaptic neuron, which may or may not be separated by a gap called:',
        options: ['Synaptic cleft', 'Axon terminal', 'Synaptic vesicle', 'Neurotransmitter'],
        answer: 'Synaptic cleft',
        explanation: 'The synaptic cleft is the physical space between the pre-synaptic and post-synaptic neurons in a chemical synapse.'
    }
  ],
  assertionReasons: [
    {
      assertion: 'Insulin and glucagon have antagonistic effects.',
      reason: 'Insulin lowers blood glucose levels, while glucagon raises blood glucose levels.',
      answer: 'A',
      explanation: 'The reason correctly explains the assertion. They work in opposition to maintain blood glucose homeostasis.'
    },
    {
      assertion: 'All vertebrates have a four-chambered heart.',
      reason: 'Double circulation is a characteristic feature of all vertebrates.',
      answer: 'D',
      explanation: 'The assertion is false. Fishes have a two-chambered heart, and amphibians/reptiles (mostly) have a three-chambered heart. The reason is also false, as fishes have single circulation.'
    },
    {
      "assertion": "The presence of HCl in the stomach is necessary for the process of digestion.",
      "reason": "HCl converts inactive pepsinogen into active pepsin.",
      "answer": "A",
      "explanation": "The reason correctly explains one of the primary roles of HCl in digestion. The acidic environment it creates is essential for activating pepsin."
    },
    {
      "assertion": "The functional residual capacity (FRC) represents the volume of air remaining in the lungs after a normal expiration.",
      "reason": "FRC is the sum of Expiratory Reserve Volume (ERV) and Residual Volume (RV).",
      "answer": "A",
      "explanation": "The reason provides the correct definition and formula for FRC, explaining the assertion."
    },
    {
      "assertion": "The contraction of a muscle fibre is an all-or-none phenomenon.",
      "reason": "A muscle fibre either contracts fully in response to a stimulus above a threshold value or does not contract at all.",
      "answer": "A",
      "explanation": "The reason correctly defines the all-or-none principle as it applies to an individual muscle fibre."
    }
  ],
  matchTheColumns: [
    {
      column1: ['a) Glucagon', 'b) Thyroxine', 'c) ADH', 'd) Aldosterone'],
      column2: ['i) Thyroid gland', 'ii) Adrenal cortex', 'iii) Pituitary gland', 'iv) Pancreas'],
      answer: 'a-iv, b-i, c-iii, d-ii'
    },
    {
      column1: ['a) Gout', 'b) Tetany', 'c) Myasthenia Gravis', 'd) Muscular Dystrophy'],
      column2: ['i) Autoimmune disorder affecting neuromuscular junction', 'ii) Genetic disorder causing progressive degeneration of muscle', 'iii) Rapid spasms due to low Ca++ in body fluid', 'iv) Inflammation of joints due to accumulation of uric acid crystals'],
      answer: 'a-iv, b-iii, c-i, d-ii'
    },
    {
      "column1": ["a) Trypsin", "b) Amylase", "c) Lipase", "d) Pepsin"],
      "column2": ["i) Stomach", "ii) Saliva", "iii) Pancreatic juice (for fats)", "iv) Pancreatic juice (for proteins)"],
      "answer": "a-iv, b-ii, c-iii, d-i"
    },
    {
      "column1": ["a) P-wave", "b) QRS complex", "c) T-wave", "d) Cardiac output"],
      "column2": ["i) Ventricular repolarization", "ii) Stroke volume × Heart rate", "iii) Atrial depolarization", "iv) Ventricular depolarization"],
      "answer": "a-iii, b-iv, c-i, d-ii"
    },
    {
      "column1": ["a) Hinge joint", "b) Pivot joint", "c) Ball and socket joint", "d) Saddle joint"],
      "column2": ["i) Between atlas and axis", "ii) Shoulder joint", "iii) Knee joint", "iv) Between carpal and metacarpal of thumb"],
      "answer": "a-iii, b-i, c-ii, d-iv"
    }
  ],
};
