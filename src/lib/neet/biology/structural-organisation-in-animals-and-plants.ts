
import type { NeetModule } from '@/lib/types';

export const structuralOrganisationInAnimalsAndPlants: NeetModule = {
  id: 'biology-structural-organisation-in-animals-and-plants',
  title: 'Structural Organisation in Animals and Plants',
  chapter: 'Structural Organisation in Animals and Plants',
  subject: 'Biology',
  conceptNotes: `
### 1. Plant Morphology and Tissues (தாவர புறஅமைப்பியல் மற்றும் திசுக்கள்)
*   **Morphology and modifications:** Modifications of Root, Stem, and Leaf.
*   **Inflorescence:** Cymose and Racemose types.
*   **Flower, Fruit, and Seed:** Basic structure and function.
*   **Plant Families:** Malvaceae, Cruciferae, Leguminosae, Compositae, Graminae (description to be dealt with relevant practicals).
*   **Tissues:**
    *   **Meristematic Tissue (ஆக்குத் திசு):** Apical, Intercalary, and Lateral meristems responsible for growth.
    *   **Permanent Tissue (நிலையான திசு):**
        *   **Simple:** Parenchyma, Collenchyma, Sclerenchyma.
        *   **Complex:** Xylem and Phloem.

### 2. Plant Anatomy (தாவர உள்ளமைப்பியல்)
*   **Anatomy and functions of different parts of flowering plants:** Root, stem, and leaf anatomy of dicots and monocots.

### 3. Animal Tissues (விலங்கு திசுக்கள்)
*   **Epithelial Tissue (எபிதீலியல் திசு):** Covering and protective tissue (simple and compound).
*   **Connective Tissue (இணைப்புத் திசு):** Links and supports other tissues (loose, dense, and specialized - cartilage, bone, blood).
*   **Muscular Tissue (தசைத் திசு):** Responsible for movement (Skeletal, Smooth, Cardiac).
*   **Neural Tissue (நரம்புத் திசு):** Controls the body's responsiveness (neurons and neuroglia).

### 4. Morphology, Anatomy and Functions of an Animal (Brief Account Only)
*   Study of morphology, anatomy, and functions of different systems of an **insect (Frog is given as an example of an animal to study, though it is an amphibian, not an insect. This section will cover the Frog as per syllabus trends).**
    *   **Digestive System:** Alimentary canal and digestive glands.
    *   **Circulatory System:** Heart, blood vessels, and blood.
    *   **Respiratory System:** Skin and lungs.
    *   **Nervous System:** Central, peripheral, and autonomic systems.
    *   **Reproductive System:** Male and female reproductive organs.
  `,
  workedExamples: [
    {
        problem: 'A cross-section of a plant stem shows vascular bundles arranged in a ring, with a distinct layer of cambium between the xylem and phloem. Is this a monocot or a dicot stem? Justify your answer.',
        solution: 'This is a **Dicot stem**. \n**Justification:**\n1.  **Vascular bundles in a ring:** This arrangement is characteristic of dicot stems. (In monocot stems, the vascular bundles are scattered).\n2.  **Presence of cambium:** The cambium between xylem and phloem indicates that the vascular bundles are "open." This allows for secondary growth (increase in girth), which is a feature of dicot stems. Monocot stems have "closed" vascular bundles (no cambium). (இருவித்திலை தாவரத் தண்டில் வாஸ்குலார் கட்டைகள் வளையமாகவும், சைலம் மற்றும் ஃபுளோயத்திற்கு இடையில் காம்பியம் காணப்படுவதும் அதன் முக்கிய பண்புகளாகும்.)'
    },
    {
        problem: 'A person suffers a tear in a structure that connects a muscle to a bone. What type of connective tissue has been damaged?',
        solution: 'The damaged tissue is a **Tendon**. Tendons are a type of **dense regular connective tissue** primarily composed of collagen fibres. Their specific function is to attach skeletal muscles to bones. (தசையை எலும்புடன் இணைக்கும் இணைப்புத் திசு டெண்டான் ஆகும்.)'
    },
    {
        problem: 'How does the circulatory system of a frog differ from that of a human?',
        solution: 'The main difference is in the heart structure and the type of circulation. \n**Frog:** Has a **three-chambered heart** (two atria, one ventricle). It exhibits **incomplete double circulation**, where oxygenated blood from the lungs and deoxygenated blood from the body get mixed in the single ventricle before being pumped out. \n**Human:** Has a **four-chambered heart** (two atria, two ventricles). It exhibits **complete double circulation**, where oxygenated and deoxygenated blood are kept completely separate.'
    }
  ],
  mcqs: [
    {
      question: 'Which of the following plant tissues is responsible for secondary growth?',
      options: ['Apical Meristem', 'Intercalary Meristem', 'Lateral Meristem', 'Parenchyma'],
      answer: 'Lateral Meristem',
      explanation: 'Lateral meristems, like the vascular cambium and cork cambium, are responsible for increasing the girth or thickness of the plant.'
    },
    {
      question: 'The vascular bundles are scattered in the ground tissue of a:',
      options: ['Dicot stem', 'Monocot stem', 'Dicot root', 'Monocot root'],
      answer: 'Monocot stem',
      explanation: 'Scattered vascular bundles are a characteristic feature of monocot stems.'
    },
    {
      question: 'Tendons connect:',
      options: ['Bone to bone', 'Muscle to bone', 'Nerve to muscle', 'Bone to cartilage'],
      answer: 'Muscle to bone',
      explanation: 'Tendons are dense connective tissues that attach skeletal muscles to bones.'
    },
    {
      question: 'Which of the following animal tissues is specialized to store fat?',
      options: ['Areolar tissue', 'Adipose tissue', 'Cartilage', 'Bone'],
      answer: 'Adipose tissue',
      explanation: 'Adipose tissue is a type of loose connective tissue that is specialized for the storage of fat.'
    },
    {
      question: 'The heart of a frog has:',
      options: ['Two chambers', 'Three chambers', 'Four chambers', 'One chamber'],
      answer: 'Three chambers',
      explanation: 'Frogs, being amphibians, have a three-chambered heart with two atria and one ventricle.'
    },
    {
        question: 'Which of the following is a simple permanent tissue?',
        options: ['Xylem', 'Phloem', 'Parenchyma', 'Epidermis'],
        answer: 'Parenchyma',
        explanation: 'Parenchyma is a simple tissue because it is composed of only one type of cell. Xylem and Phloem are complex tissues.'
    },
    {
        question: 'The heart muscle tissue is also known as:',
        options: ['Skeletal muscle', 'Smooth muscle', 'Voluntary muscle', 'Cardiac muscle'],
        answer: 'Cardiac muscle',
        explanation: 'Cardiac muscle is the specialized muscle tissue found only in the heart.'
    },
    {
        question: 'In a closed circulatory system, blood is found within:',
        options: ['Sinuses', 'Body cavities', 'Blood vessels', 'Hemocoel'],
        answer: 'Blood vessels',
        explanation: 'In a closed system, as seen in earthworms and vertebrates, blood is confined to arteries, veins, and capillaries.'
    },
    {
        question: 'The waterproof layer present on the epidermis of a plant stem is called:',
        options: ['Cuticle', 'Endodermis', 'Pericycle', 'Pith'],
        answer: 'Cuticle',
        explanation: 'The cuticle is a waxy layer secreted by the epidermis that helps prevent water loss.'
    },
    {
        question: 'Which type of epithelium lines the inner surface of blood vessels?',
        options: ['Cuboidal epithelium', 'Columnar epithelium', 'Squamous epithelium', 'Ciliated epithelium'],
        answer: 'Squamous epithelium',
        explanation: 'Simple squamous epithelium, also called endothelium, forms a thin layer lining blood vessels to facilitate diffusion.'
    },
    {
        question: 'Companion cells are closely associated with:',
        options: ['Vessels', 'Tracheids', 'Sieve tubes', 'Sclereids'],
        answer: 'Sieve tubes',
        explanation: 'Companion cells are found alongside sieve tube elements in the phloem and regulate their function.'
    },
    {
        question: 'The clitellum in an earthworm is involved in:',
        options: ['Digestion', 'Respiration', 'Locomotion', 'Cocoon formation'],
        answer: 'Cocoon formation',
        explanation: 'The clitellum is a glandular segment that secretes materials to form a cocoon for the eggs.'
    },
    {
        question: 'The supportive skeletal structures in the human external ears and in the tip of the nose are examples of:',
        options: ['Bone', 'Ligament', 'Tendon', 'Cartilage'],
        answer: 'Cartilage',
        explanation: 'These structures are made of flexible cartilage, which provides support while allowing for movement.'
    },
    {
        question: 'Which of the following is absent in a monocot root?',
        options: ['Xylem', 'Phloem', 'Pith', 'Cambium'],
        answer: 'Cambium',
        explanation: 'Monocot roots, like monocot stems, lack cambium and therefore do not undergo secondary growth.'
    },
    {
        question: 'The exoskeleton of a cockroach is made of:',
        options: ['Cellulose', 'Chitin', 'Keratin', 'Pectin'],
        answer: 'Chitin',
        explanation: 'The hard outer covering (exoskeleton) of arthropods like the cockroach is composed of chitin.'
    },
    {
        question: 'Which of the following is NOT a part of the ground tissue system?',
        options: ['Cortex', 'Pith', 'Medullary rays', 'Epidermis'],
        answer: 'Epidermis',
        explanation: 'The epidermis is part of the epidermal tissue system, which is the outermost covering.'
    },
    {
        question: 'Blood is considered which type of tissue?',
        options: ['Epithelial tissue', 'Muscular tissue', 'Neural tissue', 'Connective tissue'],
        answer: 'Connective tissue',
        explanation: 'Blood is considered a specialized fluid connective tissue because it has a matrix (plasma) and originates from mesoderm.'
    },
    {
        question: 'Malpighian tubules are the excretory organs of:',
        options: ['Earthworm', 'Frog', 'Cockroach', 'Human'],
        answer: 'Cockroach',
        explanation: 'Cockroaches and other insects use Malpighian tubules for excretion and osmoregulation.'
    },
    {
        question: 'Bulliform cells in grasses help in:',
        options: ['Photosynthesis', 'Water storage and leaf rolling', 'Reproduction', 'Gaseous exchange'],
        answer: 'Water storage and leaf rolling',
        explanation: 'Bulliform cells are large, empty cells in the epidermis of grasses that become flaccid during water stress, causing the leaves to roll inwards to reduce water loss.'
    },
    {
        question: 'The type of joint present between the human skull bones is:',
        options: ['Cartilaginous joint', 'Synovial joint', 'Fibrous joint', 'Ball and socket joint'],
        answer: 'Fibrous joint',
        explanation: 'The sutures between the skull bones are immovable fibrous joints.'
    },
    {
        question: 'Lenticels are involved in:',
        options: ['Transpiration', 'Gaseous exchange', 'Food transport', 'Photosynthesis'],
        answer: 'Gaseous exchange',
        explanation: 'Lenticels are pores in the bark of woody stems that allow for the exchange of gases between the internal tissues and the atmosphere.'
    },
    {
        question: 'The most abundant protein in the animal world is:',
        options: ['Keratin', 'Actin', 'Collagen', 'Myosin'],
        answer: 'Collagen',
        explanation: 'Collagen is the main structural protein in the extracellular matrix of various connective tissues and is the most abundant protein in mammals.'
    },
    {
        question: 'Which of the following is NOT a part of the axial skeleton?',
        options: ['Skull', 'Vertebral column', 'Ribs', 'Femur'],
        answer: 'Femur',
        explanation: 'The femur (thigh bone) is part of the appendicular skeleton (limbs).'
    },
    {
        question: 'The function of companion cells is to:',
        options: ['Provide energy for water transport', 'Load sugars into sieve tubes', 'Provide mechanical support to phloem', 'Store food'],
        answer: 'Load sugars into sieve tubes',
        explanation: 'Companion cells are metabolically active and help in loading and unloading sugars into the sieve tube elements.'
    },
    {
        question: 'Which of the following is a voluntary muscle?',
        options: ['Smooth muscle', 'Cardiac muscle', 'Skeletal muscle', 'Muscles of the iris'],
        answer: 'Skeletal muscle',
        explanation: 'Skeletal muscles are attached to the skeleton and are under conscious control.'
    }
  ],
  assertionReasons: [
    {
      assertion: 'Phloem is a complex tissue.',
      reason: 'It is composed of four different kinds of elements: sieve tube elements, companion cells, phloem parenchyma, and phloem fibres.',
      answer: 'A',
      explanation: 'A complex tissue is defined as being made of more than one type of cell. The reason correctly lists the different cell types, thus explaining why phloem is a complex tissue.'
    },
    {
      assertion: 'Blood is considered a connective tissue.',
      reason: 'It connects different parts of the body and transports substances.',
      answer: 'B',
      explanation: 'Both statements are true. Blood is a connective tissue. It does connect body parts and transport substances. However, the primary reason it is classified as a connective tissue is its origin from the mesoderm and the presence of a matrix (plasma). The reason provided is a function, not the classificatory reason.'
    },
    {
        assertion: 'In dicot stems, secondary growth occurs.',
        reason: 'Dicot stems have cambium present between xylem and phloem.',
        answer: 'A',
        explanation: 'The presence of vascular cambium is the reason why dicot stems can undergo secondary growth, increasing their girth. This correctly explains the assertion.'
    },
    {
        assertion: 'Cardiac muscle tissue is a contractile tissue present only in the heart.',
        reason: 'Cardiac muscle cells are involuntary, striated, and uninucleate.',
        answer: 'B',
        explanation: 'Both statements are true descriptions of cardiac muscle. However, the description of the cells (reason) does not explain why it is found only in the heart (assertion). They are two separate, correct facts.'
    },
    {
        assertion: 'The exoskeleton of arthropods is made of a complex polysaccharide called chitin.',
        reason: 'This chitinous exoskeleton is shed periodically during growth, a process called moulting or ecdysis.',
        answer: 'B',
        explanation: 'Both statements are true and related to the arthropod exoskeleton, but the fact that it is shed (moulting) is a consequence of its rigid nature, not the reason why it is made of chitin.'
    },
    {
        assertion: 'Sclerenchyma cells are dead at maturity.',
        reason: 'They have thick, lignified cell walls that provide mechanical support.',
        answer: 'A',
        explanation: 'The deposition of lignin in the cell wall is so extensive that it leaves no internal space, leading to the death of the protoplast. The thick, lignified wall is what provides mechanical strength. The reason correctly explains the assertion.'
    },
    {
        assertion: 'A cockroach has an open circulatory system.',
        reason: 'Blood in a cockroach flows through large vessels that open into spaces called sinuses.',
        answer: 'A',
        explanation: 'The reason provides the correct definition of an open circulatory system, thus explaining the assertion.'
    },
    {
        assertion: 'Parenchyma is a simple tissue.',
        reason: 'It performs various functions like photosynthesis and storage.',
        answer: 'B',
        explanation: 'Both statements are true. Parenchyma is a simple tissue because it is made of only one type of cell. It also performs many functions. However, its function is not the reason it is classified as "simple".'
    },
    {
        assertion: 'Ligaments attach one bone to another bone.',
        reason: 'Ligaments are made of yellow elastic tissue.',
        answer: 'B',
        explanation: 'Both statements are true. Ligaments connect bone to bone, and they are composed of elastic fibres. The composition, however, is a description, not the reason for its function. The two are related but not a direct cause-and-effect for the purpose of assertion-reason logic.'
    },
    {
        assertion: 'Intercalary meristem increases the length of the plant.',
        reason: 'It is found at the tips of shoots and roots.',
        answer: 'C',
        explanation: 'The assertion is true; intercalary meristem contributes to growth in length, especially in grasses. The reason is false; that describes apical meristem.'
    },
    {
        assertion: 'Frogs are amphibians.',
        reason: 'They can live both on land and in freshwater.',
        answer: 'A',
        explanation: 'The reason provides the definition of an amphibian, correctly explaining why frogs are classified as such.'
    },
    {
        assertion: 'The vascular bundles in monocot stems are described as closed.',
        reason: 'Cambium is absent in the vascular bundles of monocot stems.',
        answer: 'A',
        explanation: 'The absence of cambium is the defining feature of a "closed" vascular bundle, meaning it cannot undergo secondary growth. The reason correctly explains the assertion.'
    },
    {
        assertion: 'The wall of the intestine is lined by simple columnar epithelium.',
        reason: 'Columnar epithelium helps in secretion and absorption.',
        answer: 'A',
        explanation: 'The function of the intestine is secretion and absorption, and the columnar epithelial cells are specialized for these roles. Thus, the reason correctly explains why this type of tissue is found there.'
    },
    {
        assertion: 'Xylem is responsible for the translocation of food.',
        reason: 'Phloem is responsible for the transport of water and minerals.',
        answer: 'E',
        explanation: 'Both the assertion and the reason are false. Xylem transports water and minerals, while phloem translocates food.'
    },
    {
        assertion: 'Smooth muscles are also known as involuntary muscles.',
        reason: 'Their functioning cannot be directly controlled.',
        answer: 'A',
        explanation: 'The reason provides the definition of "involuntary," which correctly explains the assertion.'
    }
  ],
  matchTheColumns: [
    {
      column1: ['a) Parenchyma', 'b) Collenchyma', 'c) Sclerenchyma', 'd) Meristem'],
      column2: ['i) Mechanical support', 'ii) Photosynthesis, storage', 'iii) Active cell division', 'iv) Living mechanical tissue'],
      answer: 'a-ii, b-iv, c-i, d-iii'
    },
    {
      column1: ['a) Xylem', 'b) Phloem', 'c) Stomata', 'd) Cambium'],
      column2: ['i) Translocation of food', 'ii) Secondary growth', 'iii) Conduction of water', 'iv) Transpiration'],
      answer: 'a-iii, b-i, c-iv, d-ii'
    },
    {
      column1: ['a) Epithelial tissue', 'b) Connective tissue', 'c) Muscular tissue', 'd) Neural tissue'],
      column2: ['i) Contraction', 'ii) Communication', 'iii) Covering/Lining', 'iv) Support and binding'],
      answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
      column1: ['a) Tendon', 'b) Ligament', 'c) Cartilage', 'd) Adipose tissue'],
      column2: ['i) Bone to bone', 'ii) Fat storage', 'iii) Muscle to bone', 'iv) Flexible support'],
      answer: 'a-iii, b-i, c-iv, d-ii'
    },
    {
      column1: ['a) Earthworm', 'b) Cockroach', 'c) Frog', 'd) Human'],
      column2: ['i) Malpighian tubules', 'ii) Nephridia', 'iii) Kidneys', 'iv) 206 bones in adult'],
      answer: 'a-ii, b-i, c-iii, d-iv'
    },
    {
      column1: ['a) Dicot Root', 'b) Monocot Root', 'c) Dicot Stem', 'd) Monocot Stem'],
      column2: ['i) Scattered vascular bundles', 'ii) Vascular bundles in a ring', 'iii) Radial vascular bundles, pith small', 'iv) Radial vascular bundles, large pith'],
      answer: 'a-iii, b-iv, c-ii, d-i'
    },
    {
      column1: ['a) Squamous Epithelium', 'b) Cuboidal Epithelium', 'c) Columnar Epithelium', 'd) Compound Epithelium'],
      column2: ['i) Secretion and absorption', 'ii) Ducts of glands', 'iii) Protection against stress', 'iv) Air sacs of lungs'],
      answer: 'a-iv, b-ii, c-i, d-iii'
    },
    {
      column1: ['a) Skeletal Muscle', 'b) Smooth Muscle', 'c) Cardiac Muscle', 'd) Neuron'],
      column2: ['i) Involuntary, fusiform', 'ii) Branched, involuntary', 'iii) Striated, voluntary', 'iv) Excitability'],
      answer: 'a-iii, b-i, c-ii, d-iv'
    },
    {
      column1: ['a) Areolar Tissue', 'b) Bone', 'c) Blood', 'd) Cartilage'],
      column2: ['i) Fluid matrix (plasma)', 'ii) Hard, non-pliable matrix', 'iii) Pliable matrix', 'iv) Support framework for epithelium'],
      answer: 'a-iv, b-ii, c-i, d-iii'
    },
    {
      column1: ['a) Heart of cockroach', 'b) Heart of frog', 'c) Heart of human', 'd) Circulatory system of earthworm'],
      column2: ['i) 4-chambered', 'ii) Closed type', 'iii) 13-chambered', 'iv) 3-chambered'],
      answer: 'a-iii, b-iv, c-i, d-ii'
    },
    {
      column1: ['a) Pericycle', 'b) Endodermis', 'c) Pith', 'd) Cortex'],
      column2: ['i) Innermost layer of cortex', 'ii) Central portion of the stele', 'iii) Lies inside endodermis', 'iv) Lies between epidermis and endodermis'],
      answer: 'a-iii, b-i, c-ii, d-iv'
    },
    {
      column1: ['a) Root hair', 'b) Trichome', 'c) Stoma', 'd) Bulliform cells'],
      column2: ['i) Epidermal hair on stem', 'ii) Unicellular elongation of epidermis', 'iii) Empty colorless cells in grasses', 'iv) Regulates transpiration'],
      answer: 'a-ii, b-i, c-iv, d-iii'
    },
    {
      column1: ['a) Sclereids', 'b) Tracheids', 'c) Vessels', 'd) Sieve tubes'],
      column2: ['i) Elongated cells with tapering ends', 'ii) Individual members are interconnected through perforations', 'iii) Long, cylindrical tube-like structures', 'iv) Spherical or oval, highly thickened dead cells'],
      answer: 'a-iv, b-i, c-ii, d-iii'
    },
    {
      column1: ['a) Periplaneta americana', 'b) Pheretima posthuma', 'c) Rana tigrina', 'd) Homo sapiens'],
      column2: ['i) Human', 'ii) Frog', 'iii) Earthworm', 'iv) Cockroach'],
      answer: 'a-iv, b-iii, c-ii, d-i'
    },
    {
      column1: ['a) Joint', 'b) Axial skeleton', 'c) Appendicular skeleton', 'd) Sarcomere'],
      column2: ['i) Bones of limbs and girdles', 'ii) Functional unit of contraction', 'iii) Point of contact between bones', 'iv) Skull, vertebral column, ribs'],
      answer: 'a-iii, b-iv, c-i, d-ii'
    }
  ]
};
