
import type { NeetModule } from '@/lib/types';

export const structuralOrganisationInAnimalsAndPlants: NeetModule = {
    id: 'neet-biology-structural-organisation-in-animals-and-plants',
    title: 'Structural Organisation in Animals and Plants',
    chapter: 'Structural Organisation in Animals and Plants',
    subject: 'Biology',
    learningObjectives: [
        "Describe the morphology of different parts of flowering plants: root, stem, leaf, inflorescence, flower, fruit and seed.",
        "Understand the anatomy of flowering plants, including different tissue systems.",
        "Differentiate between monocot and dicot anatomy.",
        "Describe the four main types of animal tissues: epithelial, connective, muscular, and neural.",
        "Understand the anatomy and organ systems of representative animals like the cockroach."
    ],
    prerequisites: [
        "Basic knowledge of plant and animal diversity.",
        "Understanding of the cell as the basic unit of tissues."
    ],
    conceptOverview: "This unit builds upon the concept of the cell and explores how cells are organized into tissues, organs, and organ systems in multicellular organisms. It covers the morphology and anatomy of flowering plants (root, stem, leaf systems) and the different types of animal tissues (epithelial, connective, muscular, and neural). It also includes a detailed study of the anatomy of specific animals like the cockroach or frog as representative examples.",
    tamilConnection: "ஒரு பனை மரத்தின் வேர், தண்டு, ஓலை ஆகியவற்றின் அமைப்பு அதன் செயல்பாட்டோடு தொடர்புடையது. அதுபோலவே, ஒரு விலங்கின் உடலில் உள்ள வெவ்வேறு திசுக்கள் வெவ்வேறு பணிகளைச் செய்கின்றன. இந்த அத்தியாயம், தாவரங்கள் மற்றும் விலங்குகளின் உள் மற்றும் வெளிப்புற அமைப்பை விவரிக்கிறது.",
    culturalContext: "The use of specific parts of plants in Indian traditional medicine, like using the neem leaf (வேப்பிலை) for its antiseptic properties, is based on the plant's anatomy and the chemicals produced within its tissues. Similarly, understanding animal tissues is the foundation for surgery and medicine. This chapter provides the microscopic basis for these macroscopic applications.",
    syllabusMapping: [{
        topic: 'Morphology of Flowering Plants, Anatomy of Flowering Plants, Structural Organisation in Animals',
        tnBoardChapter: '11th Std Botany Ch 3, 4, 5; 11th Std Zoology Ch 2, 3',
        ncertReference: 'Class 11 Biology - Unit 2',
        notes: 'Focus on modifications of root, stem, leaf. Animal tissues (epithelial, connective, etc.) and cockroach/frog anatomy are key topics.',
        mappingDescription: 'Maps to morphology, anatomy and tissues chapters in TN Board Std 11.'
    }],
    stateBoardGaps: [
      "The TN State Board syllabus provides a very detailed account of plant anatomy and morphology, sometimes exceeding the scope of NCERT. However, the specific examples used might differ.",
      "NCERT's treatment of animal tissues, particularly connective tissues, is more concise and exam-oriented. Students should focus on the NCERT classification.",
      "The chapter on the cockroach as a representative animal is present in NCERT but often omitted or replaced with other animals in state board curricula. This section must be studied exclusively from NCERT for NEET."
    ],
    extraNeetConcepts: [
      "Secondary growth in dicot roots, although a smaller topic, is sometimes asked.",
      "Specific details about the components of different connective tissues, like the composition of the matrix in bone and cartilage.",
      "Understanding the origin (ectodermal, mesodermal, endodermal) of different tissue types."
    ],
    ncertReadingGuide: [
      "In 'Morphology of Flowering Plants', create tables for the modifications of root, stem, and leaf with their functions and examples. This is a very high-yield area.",
      "Pay close attention to the diagrams of flower parts, placentation types, and aestivation. Direct diagram-based questions are common.",
      "For 'Anatomy of Flowering Plants', create a comparative table for dicot and monocot root, stem, and leaf anatomy. Focus on the arrangement of vascular bundles.",
      "In 'Structural Organisation in Animals', focus on the location and function of each type of epithelial tissue (squamous, cuboidal, columnar) and connective tissue (areolar, adipose, bone, cartilage, blood).",
      "The diagrams of different animal tissues are important for identification.",
      "For the cockroach section, focus on the digestive and reproductive systems. Labelled diagrams are key."
    ],
    keyFormulasAndDiagrams: {
        formulas: [],
        diagrams: [
            {
                title: 'Parts of a Flowering Plant',
                description: 'A diagram showing the root system and the shoot system, including nodes, internodes, leaves, flowers, and fruits.',
                diagram: `
                    Flower --> Fruit
                      |
                    Stem --- Leaf (at Node)
                      |
                  Internode
                      |
                    Node
                      |
                    ----------------- Ground Level
                      |
                    Primary Root
                      |
                   Secondary Root
                `
            },
            {
                title: 'T.S. of a Dicot Stem (Example)',
                description: 'A diagram showing the arrangement of tissues from epidermis to pith.',
                diagram: `
                Outermost: Epidermis
                           |
                        Cortex (Hypodermis, Cortical layers, Endodermis)
                           |
                        Pericycle
                           |
                    Vascular Bundles (Arranged in a ring - Phloem outside, Xylem inside)
                           |
                         Pith (center)
                `
            }
        ]
    },
    mcqs: [
        { question: "The primary function of the root system is:", options: ["A. Photosynthesis", "B. Absorption of water and minerals", "C. Food storage", "D. Both B and C"], answer: "D. Both B and C", explanation: "The primary functions are anchorage and absorption, but roots are also often modified for food storage.", neetFrequency: 3 },
        { question: "Pneumatophores are modifications of:", options: ["A. Stem", "B. Leaf", "C. Root", "D. Flower"], answer: "C. Root", explanation: "Pneumatophores are respiratory roots found in mangrove plants like Rhizophora, which grow upwards into the air to get oxygen.", neetFrequency: 4 },
        { question: "The arrangement of flowers on the floral axis is termed as:", options: ["A. Venation", "B. Phyllotaxy", "C. Aestivation", "D. Inflorescence"], answer: "D. Inflorescence", explanation: "Inflorescence is the arrangement of flowers on the floral axis. Phyllotaxy is the arrangement of leaves, and aestivation is the arrangement of sepals/petals.", neetFrequency: 3 },
        { question: "Which of the following is an example of a compound leaf?", options: ["A. Guava", "B. Mango", "C. Neem", "D. Hibiscus"], answer: "C. Neem", explanation: "In a neem leaf, the incision of the lamina reaches up to the midrib, breaking it into a number of leaflets. This is a pinnately compound leaf.", neetFrequency: 2 },
        { question: "The tissue responsible for the transport of water and minerals in plants is:", options: ["A. Phloem", "B. Xylem", "C. Epidermis", "D. Cortex"], answer: "B. Xylem", explanation: "Xylem is the vascular tissue that conducts water and minerals from the roots to the rest of the plant.", neetFrequency: 5 },
        { question: "In dicot stems, the vascular bundles are:", options: ["A. Scattered", "B. Arranged in a ring", "C. Radial", "D. Absent"], answer: "B. Arranged in a ring", explanation: "A characteristic feature of dicot stems is the ring-like arrangement of vascular bundles, which allows for secondary growth.", neetFrequency: 4 },
        { question: "The blood is considered a type of:", options: ["A. Epithelial tissue", "B. Connective tissue", "C. Muscular tissue", "D. Neural tissue"], answer: "B. Connective tissue", explanation: "Blood is a fluid connective tissue, consisting of plasma (matrix) and formed elements (cells).", neetFrequency: 4 },
        { question: "Which type of muscle tissue is voluntary in nature?", options: ["A. Smooth muscle", "B. Cardiac muscle", "C. Skeletal muscle", "D. All of the above"], answer: "C. Skeletal muscle", explanation: "Skeletal muscles are attached to bones and are under conscious control, hence they are voluntary.", neetFrequency: 3 },
        { question: "The function of the Malpighian tubules in a cockroach is:", options: ["A. Digestion", "B. Respiration", "C. Reproduction", "D. Excretion"], answer: "D. Excretion", explanation: "Malpighian tubules are the main excretory organs in insects like cockroaches, removing waste products from the hemolymph.", neetFrequency: 3 },
        { question: "A flower with a superior ovary is called:", options: ["A. Hypogynous", "B. Perigynous", "C. Epigynous", "D. Syngynous"], answer: "A. Hypogynous", explanation: "In a hypogynous flower, the gynoecium occupies the highest position while other parts are situated below it. The ovary is superior.", neetFrequency: 4 },
        {
            question: "A fleshy fruit which develops from a single ovary of a single flower is a:",
            options: ["A. Simple fruit", "B. Aggregate fruit", "C. Multiple fruit", "D. False fruit"],
            answer: "A. Simple fruit",
            explanation: "Simple fruits develop from the monocarpellary or multicarpellary syncarpous ovary of a single flower. e.g., Mango, Tomato.",
            neetFrequency: 2
        },
        {
            question: "The edible part of a coconut is the:",
            options: ["A. Mesocarp", "B. Endosperm", "C. Pericarp", "D. Epicarp"],
            answer: "B. Endosperm",
            explanation: "The white kernel of the coconut and the coconut water are both endosperm, which provides nourishment to the embryo.",
            neetFrequency: 3
        },
        {
            question: "The pericycle, which gives rise to lateral roots, is a part of the:",
            options: ["A. Cortex", "B. Epidermis", "C. Stele", "D. Pith"],
            answer: "C. Stele",
            explanation: "The stele is all the tissues on the inner side of the endodermis. It includes the pericycle, vascular bundles, and pith.",
            neetFrequency: 3
        },
        {
            question: "Bulliform cells in grasses help in:",
            options: ["A. Photosynthesis", "B. Minimizing water loss", "C. Storing food", "D. Providing mechanical support"],
            answer: "B. Minimizing water loss",
            explanation: "When water is scarce, the bulliform cells become flaccid, causing the leaves to curl inwards to reduce water loss through transpiration.",
            neetFrequency: 2
        },
        {
            question: "Tendons and ligaments are examples of:",
            options: ["A. Areolar tissue", "B. Adipose tissue", "C. Dense regular connective tissue", "D. Skeletal tissue"],
            answer: "C. Dense regular connective tissue",
            explanation: "Tendons (attach muscle to bone) and ligaments (attach bone to bone) are made of dense regular connective tissue where collagen fibers are arranged in parallel.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is not a part of the phloem?",
            options: ["A. Sieve tubes", "B. Companion cells", "C. Tracheids", "D. Phloem parenchyma"],
            answer: "C. Tracheids",
            explanation: "Tracheids are a component of the xylem, responsible for water transport.",
            neetFrequency: 3
        },
        {
            question: "In which type of placentation is the ovule attached to the ovary wall?",
            options: ["A. Axile", "B. Basal", "C. Free central", "D. Parietal"],
            answer: "D. Parietal",
            explanation: "In parietal placentation, the ovules develop on the inner wall of the ovary or on peripheral parts.",
            neetFrequency: 3
        },
        {
            question: "The heart of a cockroach has how many chambers?",
            options: ["A. 4", "B. 2", "C. 13", "D. 10"],
            answer: "C. 13",
            explanation: "The cockroach has an elongated, 13-chambered heart that runs along the dorsal midline of the thorax and abdomen.",
            neetFrequency: 1
        },
        {
            question: "The protective covering of the radicle in a monocot seed is called:",
            options: ["A. Coleoptile", "B. Coleorhiza", "C. Scutellum", "D. Aleurone layer"],
            answer: "B. Coleorhiza",
            explanation: "Coleorhiza is the undifferentiated sheath that covers the radicle. Coleoptile covers the plumule.",
            neetFrequency: 3
        },
        {
            question: "Ciliated columnar epithelium is found in the:",
            options: ["A. Lining of the stomach", "B. Fallopian tubes and bronchioles", "C. Skin surface", "D. Ducts of salivary glands"],
            answer: "B. Fallopian tubes and bronchioles",
            explanation: "The cilia help in the movement of particles or mucus in a specific direction, which is needed in the bronchioles (to clear mucus) and fallopian tubes (to move the ovum).",
            neetFrequency: 4
        },
        {
            question: "Lenticels are involved in:",
            options: ["A. Photosynthesis", "B. Transpiration", "C. Gaseous exchange", "D. Food transport"],
            answer: "C. Gaseous exchange",
            explanation: "Lenticels are pores in the bark of woody stems that allow for the exchange of gases between the internal tissues and the atmosphere.",
            neetFrequency: 2
        },
        {
            question: "The type of inflorescence found in mustard is:",
            options: ["A. Raceme", "B. Spike", "C. Corymb", "D. Umbel"],
            answer: "A. Raceme",
            explanation: "Mustard has a racemose inflorescence where the main axis continues to grow and flowers are borne laterally in an acropetal succession.",
            neetFrequency: 1
        },
        {
            question: "Which tissue is responsible for secondary growth in dicot stems?",
            options: ["A. Apical meristem", "B. Intercalary meristem", "C. Vascular cambium", "D. Xylem"],
            answer: "C. Vascular cambium",
            explanation: "Vascular cambium is a lateral meristem that produces secondary xylem and secondary phloem, leading to an increase in the girth or thickness of the stem.",
            neetFrequency: 3
        },
        {
            question: "The cells of cartilage are known as:",
            options: ["A. Osteocytes", "B. Chondrocytes", "C. Fibroblasts", "D. Mast cells"],
            answer: "B. Chondrocytes",
            explanation: "Chondrocytes are the cells that form and maintain the cartilaginous matrix.",
            neetFrequency: 2
        },
        {
            question: "In a cockroach, the gizzard is part of the:",
            options: ["A. Foregut", "B. Midgut", "C. Hindgut", "D. Salivary glands"],
            answer: "A. Foregut",
            explanation: "The gizzard (proventriculus) is part of the foregut and is used for grinding food particles.",
            neetFrequency: 2
        },
        {
            question: "A flower that can be divided into two similar halves by only one particular vertical plane is:",
            options: ["A. Actinomorphic", "B. Zygomorphic", "C. Asymmetric", "D. Isomorphic"],
            answer: "B. Zygomorphic",
            explanation: "Zygomorphic flowers have bilateral symmetry (e.g., pea, gulmohar). Actinomorphic flowers have radial symmetry.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is a storage root?",
            options: ["A. Banyan prop root", "B. Sugarcane stilt root", "C. Carrot", "D. Rhizophora pneumatophore"],
            answer: "C. Carrot",
            explanation: "The carrot is a tap root modified for food storage.",
            neetFrequency: 3
        },
        {
            question: "Companion cells are closely associated with:",
            options: ["A. Tracheids", "B. Vessel elements", "C. Sieve tubes", "D. Guard cells"],
            answer: "C. Sieve tubes",
            explanation: "Companion cells are specialized parenchyma cells that are associated with the sieve tube elements and regulate their activity.",
            neetFrequency: 3
        },
        {
            question: "The type of epithelium lining the urinary bladder is:",
            options: ["A. Simple squamous", "B. Simple cuboidal", "C. Stratified squamous", "D. Transitional"],
            answer: "D. Transitional",
            explanation: "Transitional epithelium is a type of stratified epithelium that can stretch, which is ideal for lining organs like the urinary bladder.",
            neetFrequency: 3
        },
        {
            question: "Which part of the cockroach's digestive system secretes digestive enzymes?",
            options: ["A. Gizzard", "B. Hepatic caeca", "C. Malpighian tubules", "D. Crop"],
            answer: "B. Hepatic caeca",
            explanation: "The hepatic or gastric caeca, located at the junction of the foregut and midgut, secrete digestive juice.",
            neetFrequency: 2
        },
        {
            question: "When the stamens are united into more than two bundles, the condition is called:",
            options: ["A. Monadelphous", "B. Diadelphous", "C. Polyadelphous", "D. Syngenesious"],
            answer: "C. Polyadelphous",
            explanation: "This condition, where filaments are united into multiple bundles, is seen in plants like citrus.",
            neetFrequency: 2
        },
        {
            question: "Dicot leaves are characterized by the presence of:",
            options: ["A. Parallel venation", "B. Reticulate venation", "C. Isobilateral structure", "D. Absence of stomata"],
            answer: "B. Reticulate venation",
            explanation: "Dicot leaves typically have reticulate (net-like) venation, whereas monocot leaves have parallel venation.",
            neetFrequency: 4
        },
        {
            question: "Which of the following is not a simple tissue?",
            options: ["A. Parenchyma", "B. Collenchyma", "C. Sclerenchyma", "D. Xylem"],
            answer: "D. Xylem",
            explanation: "Xylem is a complex tissue made up of different types of cells (tracheids, vessels, xylem parenchyma, xylem fibers).",
            neetFrequency: 3
        },
        {
            question: "Adipose tissue is a type of:",
            options: ["A. Loose connective tissue", "B. Dense connective tissue", "C. Epithelial tissue", "D. Muscular tissue"],
            answer: "A. Loose connective tissue",
            explanation: "Adipose tissue is a type of loose connective tissue specialized for fat storage.",
            neetFrequency: 3
        },
        {
            question: "A parthenocarpic fruit is one which is:",
            options: ["A. Formed from the whole inflorescence", "B. Formed without fertilization", "C. A fruit with a hard pericarp", "D. A fruit with many seeds"],
            answer: "B. Formed without fertilization",
            explanation: "Parthenocarpic fruits, like bananas, develop without the process of fertilization and are typically seedless.",
            neetFrequency: 2
        },
        {
            question: "The heartwood of a tree:",
            options: ["A. Conducts water and minerals", "B. Is dark in color and provides mechanical support", "C. Is the outer region of the secondary xylem", "D. Is also called sapwood"],
            answer: "B. Is dark in color and provides mechanical support",
            explanation: "Heartwood is the central, dark-colored, non-functional part of the secondary xylem that is filled with tannins and resins, providing structural support.",
            neetFrequency: 2
        },
        {
            question: "The cells lining the blood vessels belong to the category of:",
            options: ["A. Simple columnar epithelium", "B. Stratified cuboidal epithelium", "C. Simple squamous epithelium", "D. Ciliated epithelium"],
            answer: "C. Simple squamous epithelium",
            explanation: "The lining of blood vessels (endothelium) is made of simple squamous epithelium, which provides a smooth surface for blood flow.",
            neetFrequency: 3
        },
        {
            question: "The respiratory system of a cockroach consists of a network of:",
            options: ["A. Lungs", "B. Gills", "C. Trachea", "D. Skin"],
            answer: "C. Trachea",
            explanation: "Insects like cockroaches have a network of air tubes called trachea that open to the outside through spiracles for gas exchange.",
            neetFrequency: 3
        },
        {
            question: "An aggregate fruit develops from a:",
            options: ["A. Multicarpellary, apocarpous gynoecium", "B. Multicarpellary, syncarpous gynoecium", "C. Single flower with a single ovary", "D. Complete inflorescence"],
            answer: "A. Multicarpellary, apocarpous gynoecium",
            explanation: "An aggregate fruit develops from a single flower that has multiple free carpels (apocarpous), like in a raspberry or strawberry.",
            neetFrequency: 2
        },
        {
            question: "Casparian strips are present in the:",
            options: ["A. Epidermis", "B. Cortex", "C. Pericycle", "D. Endodermis"],
            answer: "D. Endodermis",
            explanation: "The endodermis of the root has waterproof suberin depositions called Casparian strips, which regulate water and mineral uptake.",
            neetFrequency: 4
        },
        {
            question: "The tissue that provides mechanical strength to the growing parts of the plant like the young stem and petiole of a leaf is:",
            options: ["A. Parenchyma", "B. Collenchyma", "C. Sclerenchyma", "D. Phloem"],
            answer: "B. Collenchyma",
            explanation: "Collenchyma has thickened corners and provides flexible mechanical support to growing organs.",
            neetFrequency: 3
        },
        {
            question: "The most abundant and widely distributed tissue in the bodies of complex animals is:",
            options: ["A. Epithelial", "B. Connective", "C. Muscular", "D. Neural"],
            answer: "B. Connective",
            explanation: "Connective tissue is the most abundant and serves various functions, including linking, supporting, and protecting other tissues and organs.",
            neetFrequency: 2
        },
        {
            question: "In a monocot stem, the vascular bundles are:",
            options: ["A. Arranged in a ring", "B. Conjoint and open", "C. Scattered and closed", "D. Radial"],
            answer: "C. Scattered and closed",
            explanation: "Monocot stems have vascular bundles scattered throughout the ground tissue, and they are closed (lacking cambium).",
            neetFrequency: 4
        },
        {
            question: "Intercalated discs are characteristic features of:",
            options: ["A. Skeletal muscle", "B. Smooth muscle", "C. Cardiac muscle", "D. Nervous tissue"],
            answer: "C. Cardiac muscle",
            explanation: "Intercalated discs are junctions that connect individual cardiac muscle cells, allowing them to function as a single synchronized unit (syncytium).",
            neetFrequency: 3
        },
        {
            question: "The mode of arrangement of sepals or petals in a floral bud is known as:",
            options: ["A. Placentation", "B. Aestivation", "C. Venation", "D. Phyllotaxy"],
            answer: "B. Aestivation",
            explanation: "Aestivation describes how sepals or petals are arranged with respect to each other in a bud.",
            neetFrequency: 2
        },
        {
            question: "Which of the following is not a modification of the stem?",
            options: ["A. Tendrils of cucumber", "B. Thorns of Citrus", "C. Pitcher of Nepenthes", "D. Flattened structures of Opuntia"],
            answer: "C. Pitcher of Nepenthes",
            explanation: "The pitcher in a pitcher plant (Nepenthes) is a modification of the leaf lamina, not the stem.",
            neetFrequency: 4
        },
        {
            question: "The scutellum observed in a grain of maize is comparable to which part of the seed in other monocotyledons?",
            options: ["A. Cotyledon", "B. Endosperm", "C. Aleurone layer", "D. Plumule"],
            answer: "A. Cotyledon",
            explanation: "The scutellum is the large, shield-shaped cotyledon of a grass embryo.",
            neetFrequency: 2
        },
        {
            question: "Which type of connective tissue is present in the skin?",
            options: ["A. Dense regular", "B. Dense irregular", "C. Adipose tissue", "D. Cartilage"],
            answer: "B. Dense irregular",
            explanation: "The dermis of the skin contains dense irregular connective tissue, which has fibroblasts and many fibers (mostly collagen) that are oriented differently, providing strength in many directions.",
            neetFrequency: 2
        },
        {
            question: "In a cockroach, vision is:",
            options: ["A. Monocular", "B. Binocular", "C. Mosaic", "D. Simple"],
            answer: "C. Mosaic",
            explanation: "Cockroaches have compound eyes, each consisting of many hexagonal ommatidia. Together they form a mosaic vision, which is more sensitive but has less resolution.",
            neetFrequency: 1
        },
        {
            question: "A flower which has both androecium and gynoecium is called:",
            options: ["A. Unisexual", "B. Bisexual", "C. Neuter", "D. Dioecious"],
            answer: "B. Bisexual",
            explanation: "A flower having both essential whorls (stamens and carpels) is called bisexual or hermaphrodite.",
            neetFrequency: 2
        }
    ],
    assertionReasons: [
        {
            assertion: "In a dicot stem, the vascular bundles are arranged in a ring.",
            reason: "This arrangement allows for secondary growth by the formation of a continuous ring of cambium.",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and correctly explains the significance of this arrangement, which facilitates the formation of a vascular cambium ring for increasing girth.",
            neetFrequency: 4
        },
        {
            assertion: "Tendons attach skeletal muscles to bones.",
            reason: "Tendons are made of dense regular connective tissue.",
            answer: "B",
            explanation: "Both assertion and reason are true statements about tendons. However, the reason describes the composition of the tendon, it doesn't explain its function of attaching muscle to bone. The function is a macroscopic property, while the reason is a microscopic description.",
            neetFrequency: 3
        },
        {
            assertion: "The leaves of a pea plant are modified into tendrils.",
            reason: "These tendrils help the plant in climbing.",
            answer: "A",
            explanation: "The assertion is true; in pea, the upper leaflets are modified into tendrils. The reason is also true and is the correct explanation for this modification.",
            neetFrequency: 2
        },
        {
            assertion: "Blood is considered a connective tissue.",
            reason: "It connects different parts of the body and has a matrix (plasma).",
            answer: "A",
            explanation: "Assertion is true. The reason is also true and provides the justification for classifying blood as a specialized connective tissue.",
            neetFrequency: 4
        },
        {
            assertion: "Phloem is responsible for translocation of food.",
            reason: "Phloem is composed of sieve tube elements, companion cells, phloem parenchyma and phloem fibres.",
            answer: "B",
            explanation: "Both statements are true. The assertion describes the function of phloem, and the reason describes its components. However, listing the components doesn't explain the function of translocation itself.",
            neetFrequency: 3
        }
    ],
    matchTheColumns: [
        {
            column1: ["(a) Root modification", "(b) Stem modification", "(c) Leaf modification"],
            column2: ["(p) Tendrils of cucumber", "(q) Pitcher of Nepenthes", "(r) Pneumatophores of Rhizophora"],
            answer: "a-r, b-p, c-q",
            explanation: "Matching the plant part with its correct modification example."
        },
        {
            column1: ["(a) Aestivation", "(b) Placentation", "(c) Venation", "(d) Inflorescence"],
            column2: ["(p) Arrangement of veins", "(q) Arrangement of flowers", "(r) Arrangement of ovules", "(s) Arrangement of petals"],
            answer: "a-s, b-r, c-p, d-q",
            explanation: "Matching the botanical terms with their correct definitions."
        },
        {
            column1: ["(a) Parenchyma", "(b) Collenchyma", "(c) Sclerenchyma", "(d) Cambium"],
            column2: ["(p) Mechanical support (flexible)", "(q) Photosynthesis, storage", "(r) Secondary growth", "(s) Mechanical support (rigid)"],
            answer: "a-q, b-p, c-s, d-r",
            explanation: "Matching the plant tissues with their primary functions."
        },
        {
            column1: ["(a) Epithelial Tissue", "(b) Connective Tissue", "(c) Muscular Tissue", "(d) Neural Tissue"],
            column2: ["(p) Contraction and movement", "(q) Conduction of impulses", "(r) Lining and protection", "(s) Support and binding"],
            answer: "a-r, b-s, c-p, d-q",
            explanation: "Matching the four main animal tissue types with their primary functions."
        },
        {
            column1: ["(a) Cockroach Excretion", "(b) Cockroach Respiration", "(c) Cockroach Circulation", "(d) Cockroach Digestion"],
            column2: ["(p) Tracheal system", "(q) Open type with hemolymph", "(r) Gizzard and hepatic caeca", "(s) Malpighian tubules"],
            answer: "a-s, b-p, c-q, d-r",
            explanation: "Matching the physiological processes in a cockroach with the responsible organ/system."
        }
    ],
    keyTakeaways: [
        "The morphology of a plant part is closely related to its function (e.g., root for absorption, leaf for photosynthesis).",
        "Modifications of root, stem, and leaf are adaptations for functions like storage, support, and protection.",
        "Animal tissues are classified into four main types—Epithelial, Connective, Muscular, and Neural—each with a specific function.",
        "The anatomy of an organism reveals how its different organ systems are organized to carry out life processes."
    ],
    mnemonics: [
        { text: "For types of aestivation in flowers: 'Vexing Twists Validate Imbrication' (Vexillary, Twisted, Valvate, Imbricate).", tamil: "பூவிதழ் அமைவு வகைகளுக்கு: 'Vexing Twists Validate Imbrication' (வெக்ஸில்லரி, திருகு, தொடு இதழ், தழுவு இதழ்)." }
    ],
    neetTips: [
        { text: "Draw and label diagrams of monocot and dicot root/stem anatomy. Comparing them side-by-side is the best way to learn the differences.", tamil: "ஒருவித்திலை மற்றும் இருவித்திலை வேர்/தண்டின் உள்ளமைப்பியல் படங்களை வரைந்து பெயரிடுங்கள். அவற்றை பக்கவாட்டில் ஒப்பிடுவது வேறுபாடுகளைக் கற்றுக்கொள்ள சிறந்த வழியாகும்." },
        { text: "Examples of root, stem, and leaf modifications are very frequently asked. Create a table with the type of modification, its function, and an example (e.g., Stem tendril - climbing - cucumber).", tamil: "வேர், தண்டு, மற்றும் இலை மாற்றங்களின் எடுத்துக்காட்டுகள் அடிக்கடி கேட்கப்படுகின்றன. மாற்றத்தின் வகை, அதன் செயல்பாடு மற்றும் ஒரு எடுத்துக்காட்டுடன் ஒரு அட்டவணையை உருவாக்கவும் (எ.கா., தண்டு பற்றுக்கம்பி - ஏறுதல் - வெள்ளரி)." }
    ],
    studentTip: {
        english: "Try to find examples of the plant modifications you learn in your own garden or neighborhood. Connecting theory to real-life examples makes it much easier to remember.",
        tamil: "உங்கள் சொந்த தோட்டத்தில் அல்லது சுற்றுப்புறத்தில் நீங்கள் கற்கும் தாவர மாற்றங்களுக்கான எடுத்துக்காட்டுகளைக் கண்டுபிடிக்க முயற்சிக்கவும். கோட்பாட்டை நிஜ வாழ்க்கை எடுத்துக்காட்டுகளுடன் இணைப்பது நினைவில் கொள்வதை மிகவும் எளிதாக்குகிறது."
    },
    peerDiscussion: {
        english: "Discuss with a friend: Why are epithelial tissues classified based on the number of layers and the shape of cells? How does this structure relate to their function in different parts of the body (e.g., skin vs. lung alveoli)?",
        tamil: "உங்கள் நண்பருடன் விவாதிக்கவும்: எபிதீலியல் திசுக்கள் ஏன் அடுக்குகளின் எண்ணிக்கை மற்றும் செல்களின் வடிவத்தின் அடிப்படையில் வகைப்படுத்தப்படுகின்றன? இந்த அமைப்பு உடலின் வெவ்வேறு பகுதிகளில் (எ.கா., தோல் vs. நுரையீரல் காற்று நுண்ணறைகள்) அவற்றின் செயல்பாட்டுடன் எவ்வாறு தொடர்புடையது?"
    },
    nextChapter: {
        title: "Cell Structure and Function",
        titleTamil: "செல்: அமைப்பு மற்றும் பணிகள்"
    },
    validationReport: []
};
