
import type { NeetModule } from '@/lib/types';

export const humanPhysiology: NeetModule = {
    id: 'neet-biology-human-physiology',
    title: 'Biology - Human Physiology (மனித உடற்செயலியல்)',
    chapter: 'Human Physiology',
    subject: 'Biology',
    learningObjectives: [
        "Describe the process of digestion and absorption of nutrients.",
        "Explain the mechanism of breathing and exchange of gases in the lungs and tissues.",
        "Understand the composition of blood and the structure and function of the human heart (cardiac cycle).",
        "Describe the process of urine formation and the role of the kidney in osmoregulation.",
        "Analyze the structure of muscles and the mechanism of muscle contraction.",
        "Explain the transmission of nerve impulses and the functioning of the central and peripheral nervous systems.",
        "Understand the endocrine system and the role of various hormones in chemical coordination."
    ],
    prerequisites: [
        "Understanding of animal tissues.",
        "Knowledge of biomolecules and cell structure.",
        "Basic concepts of diffusion and active transport."
    ],
    conceptOverview: "This is a major unit that explores the functioning of the various organ systems in the human body. It covers digestion and absorption, breathing and gas exchange, blood circulation, excretion, locomotion and movement, neural control and coordination, and chemical coordination (hormones). Understanding the mechanics and regulation of each system is crucial for a complete picture of how the human body maintains homeostasis.",
    tamilConnection: "வர்மக்கலை மற்றும் யோகாசனம் போன்ற தமிழ் மரபுகள், உடலின் நரம்பு மண்டலம் மற்றும் இயக்கத்தைப்பற்றிய ஆழமான அறிவை அடிப்படையாகக் கொண்டவை. இந்த அத்தியாயம், செரிமானம் முதல் சுவாசம், நரம்பு மண்டலத்தின் செயல்பாடு வரை மனித உடலின் சிக்கலான இயக்கவியலை அறிவியல் பூர்வமாக விளக்குகிறது.",
    culturalContext: "The practice of Yoga, with its emphasis on controlled breathing (Pranayama), directly impacts the respiratory and nervous systems studied in this chapter. The different postures (asanas) involve a deep understanding of the musculoskeletal system. Human physiology provides the scientific framework for the benefits observed from these ancient Indian practices.",
    syllabusMapping: [{
        topic: 'Digestion, Breathing, Circulation, Excretion, Locomotion, Neural Control, Chemical Coordination',
        tnBoardChapter: '11th Std Zoology Ch 6 to 12',
        ncertReference: 'Class 11 Biology - Unit 5',
        notes: 'The most important unit in Biology for NEET. Every chapter is high-yield. Focus on diagrams, mechanisms, and hormonal regulation.',
        mappingDescription: 'Maps to the entire second half of the TN Board Std 11 Zoology book.'
    }],
    stateBoardGaps: [
      "NCERT's explanation of the mechanism of muscle contraction (Sliding Filament Theory) is often more diagram-centric and directly testable.",
      "The counter-current mechanism in the nephron for urine concentration is a key conceptual topic in NCERT that requires special attention.",
      "Details of synaptic transmission, including the roles of specific neurotransmitters, are more emphasized in NCERT for NEET preparation.",
      "The hormonal feedback loops (e.g., Hypothalamus-Pituitary-Thyroid axis) are explained with a focus on regulation which is a common source of NEET questions."
    ],
    extraNeetConcepts: [
      "Disorders related to each organ system (e.g., Jaundice, Asthma, Angina Pectoris, Addison's disease) are a very high-yield area for MCQs.",
      "The role of hormones in digestion (gastrin, secretin, CCK) is frequently asked.",
      "Understanding the details of an ECG graph (P wave, QRS complex, T wave) and what each part represents.",
      "The mechanism of hormone action (peptide vs. steroid hormones) and the concept of second messengers like cAMP."
    ],
    ncertReadingGuide: [
      "In 'Digestion', focus on the summary of absorption in different parts of the digestive system (Table 16.1).",
      "In 'Breathing and Exchange of Gases', the diagram showing the exchange of gases at the alveoli and tissues (Figure 17.4) is crucial.",
      "For 'Body Fluids and Circulation', master the diagram of the human heart (Figure 18.2) and the schematic representation of the cardiac cycle.",
      "In 'Excretory Products', the diagram of a nephron (Figure 19.2) and the counter-current mechanism (Figure 19.6) are essential.",
      "For 'Locomotion and Movement', the diagram of a sarcomere (Figure 20.2) and the sliding filament theory are key.",
      "In 'Neural Control', the diagram of a neuron (Figure 21.1) and the synapse (Figure 21.3) are important.",
      "For 'Chemical Coordination', create a table summarizing each hormone, its source gland, and its primary function (Table 22.1 is a good start)."
    ],
    keyFormulasAndDiagrams: {},
    workedExamples: [],
    mcqs: [
        { question: "Which enzyme is responsible for the digestion of protein in the stomach?", options: ["A. Trypsin", "B. Pepsin", "C. Amylase", "D. Lipase"], answer: "B. Pepsin", explanation: "Pepsin is secreted in an inactive form (pepsinogen) in the stomach and is activated by HCl to digest proteins into proteoses and peptones.", neetFrequency: 5 },
        { question: "The exchange of gases in the alveoli of the lungs takes place by:", options: ["A. Active transport", "B. Simple diffusion", "C. Osmosis", "D. Facilitated diffusion"], answer: "B. Simple diffusion", explanation: "Gas exchange (O₂ and CO₂) occurs across the alveolar membrane based on differences in partial pressures, which is a process of simple diffusion.", neetFrequency: 4 },
        { question: "The pacemaker of the human heart is the:", options: ["A. AV node", "B. SA node", "C. Purkinje fibers", "D. Bundle of His"], answer: "B. SA node", explanation: "The Sino-atrial (SA) node generates the maximum number of action potentials and is responsible for initiating and maintaining the rhythmic contractile activity of the heart.", neetFrequency: 5 },
        { question: "The functional unit of the kidney is the:", options: ["A. Neuron", "B. Nephron", "C. Alveolus", "D. Sarcomere"], answer: "B. Nephron", explanation: "The nephron is the microscopic structural and functional unit of the kidney, responsible for forming urine.", neetFrequency: 4 },
        { question: "The sliding filament theory explains the process of:", options: ["A. Nerve impulse transmission", "B. Blood clotting", "C. Muscle contraction", "D. Urine formation"], answer: "C. Muscle contraction", explanation: "The sliding filament theory describes how thin (actin) filaments slide over thick (myosin) filaments to cause muscle contraction.", neetFrequency: 4 },
        { question: "The 'lub' sound of the heart is produced during the closure of which valves?", options: ["A. Semilunar valves", "B. Tricuspid and bicuspid valves", "C. Eustachian valve", "D. Thebesian valve"], answer: "B. Tricuspid and bicuspid valves", explanation: "The first heart sound 'lub' is associated with the closure of the atrioventricular (tricuspid and bicuspid/mitral) valves at the beginning of ventricular systole.", neetFrequency: 4 },
        { question: "Which part of the nephron is involved in the reabsorption of the maximum amount of filtrate?", options: ["A. Proximal Convoluted Tubule (PCT)", "B. Loop of Henle", "C. Distal Convoluted Tubule (DCT)", "D. Collecting Duct"], answer: "A. Proximal Convoluted Tubule (PCT)", explanation: "Nearly all of the essential nutrients, and 70-80% of electrolytes and water are reabsorbed by the PCT.", neetFrequency: 5 },
        { question: "Which of the following is a component of the central nervous system?", options: ["A. Spinal nerves", "B. Cranial nerves", "C. Brain", "D. Sympathetic nervous system"], answer: "C. Brain", explanation: "The central nervous system (CNS) consists of the brain and the spinal cord.", neetFrequency: 2 },
        { question: "Insulin is secreted by:", options: ["A. Alpha cells of pancreas", "B. Beta cells of pancreas", "C. Adrenal cortex", "D. Thyroid gland"], answer: "B. Beta cells of pancreas", explanation: "The β-cells in the islets of Langerhans of the pancreas secrete insulin, which lowers blood glucose levels.", neetFrequency: 5 },
        { question: "The junction between two neurons is called a:", options: ["A. Synapse", "B. Sarcomere", "C. Joint", "D. Ganglion"], answer: "A. Synapse", explanation: "A synapse is the junction through which a nerve impulse passes from one neuron to another.", neetFrequency: 3 },
        { question: "The volume of air inspired or expired during a normal respiration is called:", options: ["A. Tidal Volume", "B. Inspiratory Reserve Volume", "C. Expiratory Reserve Volume", "D. Vital Capacity"], answer: "A. Tidal Volume", explanation: "Tidal volume (TV) is the amount of air that moves in or out of the lungs with each respiratory cycle. It is about 500 mL.", neetFrequency: 4 },
        { question: "Which of the following is responsible for the transport of oxygen in the blood?", options: ["A. White blood cells", "B. Platelets", "C. Plasma", "D. Hemoglobin"], answer: "D. Hemoglobin", explanation: "Hemoglobin, a protein in red blood cells, binds reversibly with oxygen to transport it from the lungs to the tissues.", neetFrequency: 3 },
        { question: "The part of the human brain responsible for maintaining posture and balance is:", options: ["A. Cerebrum", "B. Cerebellum", "C. Medulla oblongata", "D. Pons"], answer: "B. Cerebellum", explanation: "The cerebellum coordinates voluntary movements such as posture, balance, coordination, and speech, resulting in smooth, balanced muscular activity.", neetFrequency: 4 },
        { question: "Which hormone is known as the 'fight or flight' hormone?", options: ["A. Insulin", "B. Thyroxine", "C. Adrenaline", "D. Growth hormone"], answer: "C. Adrenaline", explanation: "Adrenaline (epinephrine), secreted by the adrenal medulla, prepares the body for emergency situations.", neetFrequency: 3 },
        { question: "Which of the following is a disorder of the muscular system?", options: ["A. Asthma", "B. Osteoporosis", "C. Myasthenia gravis", "D. Glaucoma"], answer: "C. Myasthenia gravis", explanation: "Myasthenia gravis is an autoimmune disorder affecting the neuromuscular junction, leading to fatigue and weakness of skeletal muscles.", neetFrequency: 2 },
        { question: "The QRS complex in a standard ECG represents:", options: ["A. Depolarization of the atria", "B. Repolarization of the atria", "C. Depolarization of the ventricles", "D. Repolarization of the ventricles"], answer: "C. Depolarization of the ventricles", explanation: "The QRS complex represents ventricular depolarization, which initiates ventricular contraction.", neetFrequency: 4 },
        { question: "The enzyme enterokinase helps in the conversion of:", options: ["A. Pepsinogen into pepsin", "B. Trypsinogen into trypsin", "C. Caseinogen into casein", "D. Proteins into polypeptides"], answer: "B. Trypsinogen into trypsin", explanation: "Enterokinase, secreted by the intestinal mucosa, activates the pancreatic enzyme trypsinogen into trypsin.", neetFrequency: 3 },
        { question: "A person with blood group AB can receive blood from:", options: ["A. Only AB", "B. Only A and B", "C. A, B and O", "D. A, B, AB and O"], answer: "D. A, B, AB and O", explanation: "A person with AB blood group has both A and B antigens but no antibodies, so they are a 'universal recipient'.", neetFrequency: 3 },
        { question: "The hormone responsible for the reabsorption of water in the distal convoluted tubule is:", options: ["A. ADH (Vasopressin)", "B. Aldosterone", "C. Insulin", "D. Glucagon"], answer: "A. ADH (Vasopressin)", explanation: "Anti-diuretic hormone (ADH) increases the permeability of the DCT and collecting ducts to water, promoting its reabsorption.", neetFrequency: 4 },
        { question: "The thin filaments of a myofibril contain:", options: ["A. Myosin only", "B. Actin only", "C. Actin and Troponin", "D. Myosin and Tropomyosin"], answer: "C. Actin and Troponin", explanation: "The thin filament is primarily composed of actin, along with the regulatory proteins troponin and tropomyosin.", neetFrequency: 3 },
        { question: "Which part of the brain controls body temperature and the urge for eating and drinking?", options: ["A. Cerebrum", "B. Medulla", "C. Thalamus", "D. Hypothalamus"], answer: "D. Hypothalamus", explanation: "The hypothalamus is a key control center for many homeostatic functions including thermoregulation, hunger, and thirst.", neetFrequency: 4 },
        { question: "Which of the following is a steroid hormone?", options: ["A. Insulin", "B. Glucagon", "C. Cortisol", "D. Thyroxine"], answer: "C. Cortisol", explanation: "Cortisol is a glucocorticoid produced by the adrenal cortex and is derived from cholesterol, making it a steroid hormone.", neetFrequency: 2 },
        { question: "Which vitamin is necessary for blood clotting?", options: ["A. Vitamin A", "B. Vitamin C", "C. Vitamin D", "D. Vitamin K"], answer: "D. Vitamin K", explanation: "Vitamin K is essential for the synthesis of several clotting factors in the liver.", neetFrequency: 2 },
        { question: "The partial pressure of oxygen in the alveolar air is approximately:", options: ["A. 40 mm Hg", "B. 95 mm Hg", "C. 104 mm Hg", "D. 159 mm Hg"], answer: "C. 104 mm Hg", explanation: "This is a standard physiological value for pO₂ in the alveoli.", neetFrequency: 3 },
        { question: "The 'double circulation' system means that:", options: ["A. Blood flows through the heart twice for each circuit", "B. There are two hearts", "C. There are two atria and one ventricle", "D. The blood is pumped twice per minute"], answer: "A. Blood flows through the heart twice for each circuit", explanation: "In double circulation, blood passes through the heart twice: once to the lungs (pulmonary circulation) and once to the rest of the body (systemic circulation).", neetFrequency: 2 },
        { question: "The Bowman's capsule and glomerulus together constitute the:", options: ["A. Renal tubule", "B. Malpighian body", "C. Loop of Henle", "D. Collecting duct"], answer: "B. Malpighian body", explanation: "The Malpighian body, or renal corpuscle, is the filtration unit of the nephron, consisting of the glomerulus and Bowman's capsule.", neetFrequency: 3 },
        { question: "The H-zone in the skeletal muscle fiber is due to:", options: ["A. The central gap between actin filaments extending through myosin filaments in the A-band", "B. The central gap between myosin filaments in the A-band", "C. The absence of myosin filaments in the I-band", "D. The extension of myosin filaments in the I-band"], answer: "A. The central gap between actin filaments extending through myosin filaments in the A-band", explanation: "The H-zone is the lighter region in the center of the A-band where only thick (myosin) filaments are present, as the thin filaments do not extend into this region.", neetFrequency: 3 },
        { question: "The resting membrane potential is maintained by:", options: ["A. Sodium-potassium pump", "B. Voltage-gated channels", "C. Ligand-gated channels", "D. Calcium pump"], answer: "A. Sodium-potassium pump", explanation: "The Na⁺-K⁺ pump actively transports 3 Na⁺ ions out and 2 K⁺ ions in, maintaining the concentration gradients responsible for the resting potential.", neetFrequency: 4 },
        { question: "Which hormone regulates the basal metabolic rate (BMR)?", options: ["A. Adrenaline", "B. Thyroxine", "C. Insulin", "D. Parathormone"], answer: "B. Thyroxine", explanation: "Thyroxine, secreted by the thyroid gland, is the primary regulator of the body's basal metabolic rate.", neetFrequency: 4 },
        { question: "Pernicious anemia is caused by the deficiency of:", options: ["A. Vitamin B₁", "B. Vitamin B₆", "C. Vitamin B₁₂", "D. Folic acid"], answer: "C. Vitamin B₁₂", explanation: "Vitamin B₁₂ is essential for the maturation of red blood cells. Its deficiency leads to pernicious anemia.", neetFrequency: 2 },
        { question: "The amount of air remaining in the lungs even after a forcible expiration is called:", options: ["A. Tidal Volume", "B. Vital Capacity", "C. Residual Volume", "D. Expiratory Reserve Volume"], answer: "C. Residual Volume", explanation: "Residual Volume (RV) is the volume of air remaining in the lungs after a maximal exhalation.", neetFrequency: 3 },
        { question: "A person with O blood group has which antibodies in their plasma?", options: ["A. Anti-A", "B. Anti-B", "C. Both Anti-A and Anti-B", "D. No antibodies"], answer: "C. Both Anti-A and Anti-B", explanation: "O group individuals have no antigens on their RBCs, so their plasma contains antibodies against both A and B antigens.", neetFrequency: 3 },
        { question: "Uric acid is the chief nitrogenous waste of:", options: ["A. Birds and insects", "B. Humans", "C. Frogs", "D. Fish"], answer: "A. Birds and insects", explanation: "Birds, insects, and reptiles excrete nitrogenous wastes as uric acid to conserve water. Humans excrete urea, and fish excrete ammonia.", neetFrequency: 2 },
        { question: "A motor unit consists of:", options: ["A. A motor neuron and the muscle fibers it innervates", "B. A single muscle fiber", "C. A bundle of muscle fibers", "D. A motor neuron and a sensory neuron"], answer: "A. A motor neuron and the muscle fibers it innervates", explanation: "This is the definition of a motor unit, the functional unit of muscle contraction.", neetFrequency: 1 },
        { question: "The part of the eye where the sharpest vision is formed is:", options: ["A. Blind spot", "B. Fovea", "C. Iris", "D. Cornea"], answer: "B. Fovea", explanation: "The fovea is a small depression in the retina packed with cones, and it is the center of the eye's sharpest vision and color perception.", neetFrequency: 3 },
        { question: "Which hormone is responsible for the development of secondary sexual characters in females?", options: ["A. Progesterone", "B. Testosterone", "C. Estrogen", "D. LH"], answer: "C. Estrogen", explanation: "Estrogen is the primary female sex hormone responsible for the development and regulation of the female reproductive system and secondary sexual characteristics.", neetFrequency: 4 },
        { question: "The digestion of fats begins in the:", options: ["A. Mouth", "B. Stomach", "C. Small intestine", "D. Large intestine"], answer: "C. Small intestine", explanation: "Significant fat digestion begins in the small intestine with the action of bile (for emulsification) and pancreatic lipase.", neetFrequency: 3 },
        { question: "The Bohr effect is the shift of the oxygen-hemoglobin dissociation curve to the right due to:", options: ["A. Increased pO₂", "B. Decreased pCO₂", "C. Increased pCO₂ or decreased pH", "D. Decreased temperature"], answer: "C. Increased pCO₂ or decreased pH", explanation: "The Bohr effect describes the decreased affinity of hemoglobin for oxygen in the presence of high CO₂ concentration (and resulting lower pH), which facilitates oxygen release in tissues.", neetFrequency: 3 },
        { question: "Which of the following blood cells are involved in the immune response?", options: ["A. Erythrocytes", "B. Thrombocytes", "C. Lymphocytes", "D. All of the above"], answer: "C. Lymphocytes", explanation: "Lymphocytes (a type of white blood cell) are the key players in the adaptive immune system.", neetFrequency: 2 },
        { question: "The process of micturition is:", options: ["A. Formation of urine", "B. Filtration of blood", "C. The act of urination", "D. Reabsorption of water"], answer: "C. The act of urination", explanation: "Micturition is the medical term for the process of expelling urine from the bladder.", neetFrequency: 1 },
        { question: "Which protein is found in the thick filaments of myofibrils?", options: ["A. Actin", "B. Myosin", "C. Troponin", "D. Tropomyosin"], answer: "B. Myosin", explanation: "Thick filaments are composed primarily of the protein myosin.", neetFrequency: 3 },
        { question: "The correct sequence of meninges from outer to inner is:", options: ["A. Dura mater, Arachnoid, Pia mater", "B. Arachnoid, Dura mater, Pia mater", "C. Pia mater, Arachnoid, Dura mater", "D. Dura mater, Pia mater, Arachnoid"], answer: "A. Dura mater, Arachnoid, Pia mater", explanation: "The order is Dura mater (outermost), Arachnoid mater (middle), and Pia mater (innermost).", neetFrequency: 2 },
        { question: "Which gland acts as both an endocrine and an exocrine gland?", options: ["A. Pituitary", "B. Thyroid", "C. Adrenal", "D. Pancreas"], answer: "D. Pancreas", explanation: "The pancreas has an exocrine function (secreting digestive enzymes) and an endocrine function (secreting hormones like insulin and glucagon).", neetFrequency: 4 },
        { question: "The condition where the accumulation of urea in the blood is high is called:", options: ["A. Uremia", "B. Anemia", "C. Glycosuria", "D. Ketonuria"], answer: "A. Uremia", explanation: "Uremia refers to abnormally high levels of waste products, particularly urea, in the blood.", neetFrequency: 2 },
        { question: "Which of the following is not a function of the liver?", options: ["A. Production of bile", "B. Glycogen storage", "C. Synthesis of urea", "D. Secretion of insulin"], answer: "D. Secretion of insulin", explanation: "Insulin is secreted by the pancreas, not the liver.", neetFrequency: 3 },
        { question: "The cardiac output is the:", options: ["A. Volume of blood pumped by each ventricle per beat", "B. Volume of blood pumped by each ventricle per minute", "C. Number of beats per minute", "D. Pressure of blood in the aorta"], answer: "B. Volume of blood pumped by each ventricle per minute", explanation: "Cardiac Output = Stroke Volume × Heart Rate.", neetFrequency: 3 },
        { question: "Which part of the nephron is impermeable to water?", options: ["A. Proximal Convoluted Tubule", "B. Descending limb of Henle's loop", "C. Ascending limb of Henle's loop", "D. Collecting Duct"], answer: "C. Ascending limb of Henle's loop", explanation: "The ascending limb is impermeable to water but actively transports salts out, which is crucial for the counter-current mechanism.", neetFrequency: 4 },
        { question: "The contractile protein of skeletal muscle involving ATPase activity is:", options: ["A. Actin", "B. Troponin", "C. Tropomyosin", "D. Myosin"], answer: "D. Myosin", explanation: "The head of the myosin molecule has ATPase activity, which provides the energy for muscle contraction.", neetFrequency: 3 },
        { question: "The reflex arc is formed by:", options: ["A. Receptor, motor neuron, effector", "B. Receptor, sensory neuron, CNS, motor neuron, effector", "C. Brain, spinal cord, nerves", "D. Sensory neuron, motor neuron"], answer: "B. Receptor, sensory neuron, CNS, motor neuron, effector", explanation: "This represents the complete pathway of a reflex action.", neetFrequency: 2 },
        { question: "Which hormone is responsible for ovulation?", options: ["A. FSH", "B. LH", "C. Progesterone", "D. Estrogen"], answer: "B. LH", explanation: "A rapid secretion of Luteinizing Hormone (LH surge) during the mid-cycle induces rupture of the Graafian follicle and thereby the release of the ovum (ovulation).", neetFrequency: 4 }
    ],
    assertionReasons: [
        {
            assertion: "In humans, the heart is myogenic.",
            reason: "The heartbeat is initiated by a specialized patch of muscle tissue, the SA node.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the correct explanation for a myogenic heart, where the impulse for contraction originates within the heart muscle itself.",
            neetFrequency: 3
        },
        {
            assertion: "All motor neurons are efferent neurons.",
            reason: "Motor neurons carry signals from the CNS to the effector organs.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and is the definition of an efferent pathway, which correctly explains what a motor neuron is.",
            neetFrequency: 2
        },
        {
            assertion: "The deficiency of ADH causes diabetes insipidus.",
            reason: "ADH controls the reabsorption of water from the collecting ducts of the kidneys.",
            answer: "A",
            explanation: "Assertion is true. Reason is also true and correctly explains the assertion. A deficiency of ADH leads to impaired water reabsorption, resulting in the excretion of large volumes of dilute urine (polyuria), which is the main symptom of diabetes insipidus.",
            neetFrequency: 4
        },
        {
            assertion: "All voluntary actions are controlled by the cerebellum.",
            reason: "The cerebellum coordinates muscle movements.",
            answer: "D",
            explanation: "Assertion is false. Voluntary actions are initiated and controlled by the cerebrum. The cerebellum's role is to coordinate and fine-tune these movements. The reason is a true statement about the cerebellum's function.",
            neetFrequency: 3
        },
        {
            assertion: "Oxyhemoglobin acts as an acid.",
            reason: "The binding of oxygen to hemoglobin promotes the release of H⁺ ions from it.",
            answer: "B",
            explanation: "Both statements are true. Oxyhemoglobin is a stronger acid than deoxyhemoglobin. This property, known as the Haldane effect, facilitates the release of CO₂ in the lungs. However, the reason is a description of the event, not the fundamental explanation of why it behaves as an acid.",
            neetFrequency: 2
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) P-wave", "(b) QRS complex", "(c) T-wave", "(d) Lub sound"],
            column2: ["(p) Ventricular repolarization", "(q) Ventricular depolarization", "(r) Closure of AV valves", "(s) Atrial depolarization"],
            answer: "a-s, b-q, c-p, d-r",
            explanation: "Matching the components of an ECG and heart sounds with the cardiac events they represent.",
            neetFrequency: 5
        },
        {
            column1: ["(a) Insulin", "(b) Glucagon", "(c) Thyroxine", "(d) Parathormone"],
            column2: ["(p) Increases blood calcium", "(q) Increases basal metabolic rate", "(r) Increases blood glucose", "(s) Decreases blood glucose"],
            answer: "a-s, b-r, c-q, d-p",
            explanation: "Matching hormones with their primary physiological function.",
            neetFrequency: 4
        },
        {
            column1: ["(a) Glomerular filtration", "(b) Counter-current mechanism", "(c) Micturition", "(d) Renin-Angiotensin system"],
            column2: ["(p) Concentration of urine", "(q) Regulation of GFR", "(r) Ultrafiltration", "(s) Release of urine"],
            answer: "a-r, b-p, c-s, d-q",
            explanation: "Matching physiological processes related to the excretory system with their definitions or primary roles.",
            neetFrequency: 4
        },
        {
            column1: ["(a) A-Band", "(b) I-Band", "(c) Z-line", "(d) H-zone"],
            column2: ["(p) Contains only thin filaments", "(q) Contains only thick filaments", "(r) Anchors thin filaments", "(s) Contains both thick and thin filaments"],
            answer: "a-s, b-p, c-r, d-q",
            explanation: "Matching the parts of a sarcomere with their composition.",
            neetFrequency: 3
        },
        {
            column1: ["(a) Pepsin", "(b) Amylase", "(c) Lipase", "(d) Trypsin"],
            column2: ["(p) Starch digestion", "(q) Protein digestion in stomach", "(r) Fat digestion", "(s) Protein digestion in small intestine"],
            answer: "a-q, b-p, c-r, d-s",
            explanation: "Matching digestive enzymes with the substrate they act upon and their location of action.",
            neetFrequency: 4
        }
    ],
    keyTakeaways: [
        "The human body is a complex system of interconnected organ systems that work together to maintain homeostasis.",
        "Digestion breaks down complex food molecules into simpler ones that can be absorbed.",
        "The cardiac cycle describes the sequence of events in one heartbeat, and an ECG is its graphical representation.",
        "The nephron is the functional unit of the kidney, responsible for urine formation through filtration, reabsorption, and secretion.",
        "Nerve impulses are transmitted as electrical signals (action potentials) along neurons and as chemical signals across synapses.",
        "Hormones act as chemical messengers that regulate various physiological processes."
    ],
    mnemonics: [
        {
            text: "For cranial nerves: 'On Old Olympus' Towering Top, A Finn And German Viewed Some Hops'.",
            tamil: "மண்டையோட்டு நரம்புகளுக்கு: 'On Old Olympus' Towering Top, A Finn And German Viewed Some Hops'."
        },
        {
            text: "For hormones of the anterior pituitary: 'FLAG TOP' (FSH, LH, ACTH, GH, TSH, Prolactin).",
            tamil: "முன்புற பிட்யூட்டரியின் ஹார்மோன்களுக்கு: 'FLAG TOP'."
        }
    ],
    neetTips: [
        {
            text: "Diagrams of the nephron, sarcomere, and the human heart are extremely important. Practice drawing and labeling them.",
            tamil: "நெஃப்ரான், சார்க்கோமியர் மற்றும் மனித இதயத்தின் வரைபடங்கள் மிகவும் முக்கியமானவை. அவற்றை வரைந்து பெயரிட்டுப் பயிற்சி செய்யுங்கள்."
        },
        {
            text: "Hormones and their functions/disorders are a very high-yield topic. Create a table listing the hormone, its source gland, its function, and the diseases caused by its hyper/hyposecretion.",
            tamil: "ஹார்மோன்கள் மற்றும் அவற்றின் செயல்பாடுகள்/குறைபாடுகள் ஒரு மிகவும் அதிக மகசூல் தரும் தலைப்பு. ஹார்மோன், அதன் மூல சுரப்பி, அதன் செயல்பாடு மற்றும் அதன் அதிக/குறைந்த சுரப்பால் ஏற்படும் நோய்களைப் பட்டியலிடும் ஒரு அட்டவணையை உருவாக்கவும்."
        }
    ],
    studentTip: {
        english: "Try to create flowcharts to understand complex processes like the cardiac cycle, urine formation, or muscle contraction. Breaking them down into sequential steps makes them easier to learn.",
        tamil: "இதயச் சுழற்சி, சிறுநீர் உருவாக்கம், அல்லது தசைச் சுருக்கம் போன்ற சிக்கலான செயல்முறைகளைப் புரிந்துகொள்ள பாய்வு வரைபடங்களை உருவாக்க முயற்சிக்கவும். அவற்றை வரிசைமுறையான படிகளாக உடைப்பது கற்றுக்கொள்வதை எளிதாக்குகிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend how the nervous system and the endocrine system work together to control and coordinate the body. What are the key differences in their mode of action?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: நரம்பு மண்டலம் மற்றும் நாளமில்லாச் சுரப்பி மண்டலம் எவ்வாறு இணைந்து உடலைக் கட்டுப்படுத்தி ஒருங்கிணைக்கின்றன? அவற்றின் செயல்பாட்டு முறையில் உள்ள முக்கிய வேறுபாடுகள் என்ன?"
    },
    nextChapter: {
        title: "Reproduction",
        titleTamil: "இனப்பெருக்கம்"
    },
    validationReport: []
};
