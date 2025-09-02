
import type { NeetModule } from '@/lib/types';

export const humanPhysiology: NeetModule = {
  id: 'biology-human-physiology',
  title: 'Human Physiology',
  chapter: 'Human Physiology',
  subject: 'Biology',
  conceptNotes: `
### 1. Breathing and Respiration (சுவாசம் மற்றும் வாயுப் பரிமாற்றம்)

*   **Respiratory Organs in animals (recall only):** Mechanisms of breathing in different animals.
*   **Respiratory System in Humans:** The pathway from nostrils to alveoli.
*   **Mechanism of breathing and its regulation in humans:** Inspiration and Expiration; role of diaphragm and intercostal muscles. Regulation by the respiratory rhythm centre in the medulla.
*   **Exchange of gases, transport of gases and regulation of respiration:** Diffusion of O₂ and CO₂ across the alveolar membrane. Transport of O₂ as oxyhaemoglobin and CO₂ as bicarbonate.
*   **Respiratory Volumes:** Tidal Volume (TV), Inspiratory Reserve Volume (IRV), Expiratory Reserve Volume (ERV), Residual Volume (RV), and capacities.
*   **Disorders related to respiration:** Asthma, Emphysema, Occupational respiratory disorders.

### 2. Body Fluids and Circulation (உடல் திரவங்கள் மற்றும் சுழற்சி)

*   **Composition of blood, blood groups, coagulation of blood:** Plasma, formed elements (RBC, WBC, platelets). ABO and Rh grouping. Mechanism of blood clotting.
*   **Composition of lymph and its function:** Lymph as a middleman.
*   **Human circulatory system:** Structure of human heart and blood vessels (arteries, veins, capillaries).
*   **Cardiac cycle, cardiac output, ECG, Double circulation:** Sequence of events in a heartbeat. Stroke volume and cardiac output. Basics of ECG (P, QRS, T waves). Pulmonary and systemic circulation.
*   **Regulation of cardiac activity:** Neural and hormonal regulation.
*   **Disorders of circulatory system:** Hypertension, Coronary Artery Disease (CAD), Angina Pectoris, Heart Failure.

### 3. Excretory Products and their Elimination (கழிவுப் பொருட்கள் மற்றும் அவற்றை வெளியேற்றுதல்)

*   **Modes of excretion:** Ammonotelism, ureotelism, uricotelism.
*   **Human excretory system:** Structure and function of kidneys, ureters, bladder, urethra.
*   **Urine formation, Osmoregulation:** Glomerular filtration, reabsorption, and secretion in the nephron.
*   **Regulation of kidney function:** Role of Renin-Angiotensin system, Atrial Natriuretic Factor (ANF), and ADH.
*   **Role of other organs in excretion:** Lungs, liver, skin.
*   **Disorders:** Uraemia, Renal failure, Renal calculi, Nephritis. Dialysis and artificial kidney.

### 4. Locomotion and Movement (இயக்கம் மற்றும் இடப்பெயர்ச்சி)

*   **Types of movement:** Ciliary, flagellar, muscular.
*   **Skeletal muscle:** Contractile proteins (actin and myosin) and muscle contraction (Sliding filament theory).
*   **Skeletal system and its functions:** Axial and appendicular skeleton.
*   **Joints:** Fibrous, cartilaginous, and synovial joints.
*   **Disorders of muscular and skeletal system:** Myasthenia gravis, Tetany, Muscular dystrophy, Arthritis, Osteoporosis, Gout.

### 5. Neural Control and Coordination (நரம்புக் கட்டுப்பாடு மற்றும் ஒருங்கிணைப்பு)

*   **Neuron and nerves:** Structure of a neuron, types of nerves.
*   **Nervous system in humans:** Central Nervous System (CNS - brain and spinal cord), Peripheral Nervous System (PNS), and Visceral Nervous System.
*   **Generation and conduction of nerve impulse:** Resting potential, action potential, and propagation of the impulse across a synapse.

### 6. Chemical Coordination and regulation (வேதிய ஒருங்கிணைப்பு)

*   **Endocrine glands and hormones:** Definition and properties.
*   **Human endocrine system:** Hypothalamus, Pituitary, Pineal, Thyroid, Parathyroid, Adrenal, Pancreas, Gonads (Testis and Ovary).
*   **Mechanism of hormone action (Elementary Idea):** Basic concept of hormone receptors.
*   **Role of hormones as messengers and regulators.**
*   **Hypo-and hyperactivity and related disorders:** Dwarfism, Acromegaly, Cretinism, Goiter, Exophthalmic goiter, Diabetes, Addison’s disease.
  `,
  workedExamples: [
    {
        problem: "A person has a cardiac output of 5040 ml/minute and a heart rate of 72 beats/minute. What is their stroke volume?",
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
