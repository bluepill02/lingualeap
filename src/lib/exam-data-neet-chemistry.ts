
import type { ExamModule } from './types';

export const neetChemistryTamil: ExamModule = {
    id: 'exam-neet-chemistry-tamil',
    title: 'NEET: Chemistry (Chemical Bonding)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Chemistry',
    syllabusMapping: [
        {
            topic: 'Chemical Bonding and Molecular Structure',
            tnBoardChapter: '11th Std Chemistry - Vol 1, Chapter 4: Chemical Bonding',
            ncertReference: 'Class 11 Chemistry - Part 1, Chapter 4: Chemical Bonding and Molecular Structure',
            notes: 'VSEPR theory and Hybridization are extremely important. NCERT provides excellent diagrams for molecular shapes. Practice predicting the geometry of at least 20-30 common molecules.'
        }
    ],
    vocabulary: [
        {
            word: 'வேதிப் பிணைப்பு (Vethi Pinaippu)',
            romanization: 'Vethi Pinaippu',
            definition: 'Chemical Bond. The force of attraction that holds atoms together in a molecule or compound. Think of it as the "glue" that connects atoms. There are different types of glue, like சகப்பிணைப்பு (covalent) and அயனிப் பிணைப்பு (ionic).',
            partOfSpeech: 'Noun',
            sentence: 'அணுக்களுக்கு இடையிலான வேதிப் பிணைப்பு மூலக்கூறுகளை உருவாக்குகிறது.',
            sentenceRoman: 'Anukkalukku idaiyilana vethi pinaippu moolakkurugalai uruvaakkugirathu.',
            sentenceTranslation: 'The chemical bond between atoms forms molecules.'
        },
        {
            word: 'சகப்பிணைப்பு (Sagapinaippu)',
            romanization: 'Sagapinaippu',
            definition: 'Covalent Bond. A bond formed when two atoms share electrons (எலக்ட்ரான் பகிர்வு). This is like two friends sharing their lunch. It typically occurs between two non-metals (அலோகங்கள்).',
            partOfSpeech: 'Noun',
            sentence: 'மீத்தேன் மூலக்கூறில் கார்பன் மற்றும் ஹைட்ரஜன் இடையே சகப்பிணைப்பு உள்ளது.',
            sentenceRoman: 'Meethen moolakkuril kaarban matrum haidrajan idaiye sagapinaippu ullathu.',
            sentenceTranslation: 'In a methane molecule, there is a covalent bond between carbon and hydrogen.'
        },
        {
            word: 'அயனிப் பிணைப்பு (Ayani Pinaippu)',
            romanization: 'Ayani Pinaippu',
            definition: 'Ionic Bond. A bond formed by the complete transfer of one or more electrons from a metal (உலோகம்) to a non-metal (அலோகம்). This creates ions (அயனிகள்) with opposite charges that attract each other, like tiny magnets.',
            partOfSpeech: 'Noun',
            sentence: 'சோடியம் குளோரைடில் (NaCl) சோடியம் மற்றும் குளோரின் இடையே அயனிப் பிணைப்பு உருவாகிறது.',
            sentenceRoman: 'Sodium kloraidil sodiyam matrum kulorin idaiye ayani pinaippu uruvaagirathu.',
            sentenceTranslation: 'An ionic bond is formed between sodium and chlorine in sodium chloride (NaCl).'
        },
        {
            word: 'இனக்கலப்பு (Inakkalappu)',
            romanization: 'Inakkalappu',
            definition: 'Hybridization. The concept of mixing atomic orbitals (அணு ஆர்பிட்டால்கள்) into new hybrid orbitals. This allows atoms to form more stable bonds and explains the observed molecular shapes. For example, carbon mixes one \'s\' and three \'p\' orbitals to form four identical \'sp3\' orbitals in methane.',
            partOfSpeech: 'Noun',
            sentence: 'மீத்தேனில் உள்ள கார்பன் அணு sp3 இனக்கலப்பில் உள்ளது.',
            sentenceRoman: 'Meethenil ulla kaarban anu sp3 inakkalappil ullathu.',
            sentenceTranslation: 'The carbon atom in methane is in sp3 hybridization.'
        },
        {
            word: 'மூலக்கூறு வடிவியல் (Moolakkuru Vadiviyal)',
            romanization: 'Moolakkuru Vadiviyal',
            definition: 'Molecular Geometry. The 3D arrangement of atoms in a molecule. This shape is crucial as it determines many properties of the molecule. VSEPR theory helps us predict this shape (e.g., tetrahedral, linear).',
            partOfSpeech: 'Noun',
            sentence: 'VSEPR கொள்கை மூலக்கூறு வடிவியலை கணிக்க உதவுகிறது.',
            sentenceRoman: 'VSEPR kolgai moolakkuru vadiviyalai kanikka uthavugirathu.',
            sentenceTranslation: 'VSEPR theory helps to predict molecular geometry.'
        }
    ],
    workedExamples: [
        {
            problem: 'Predict the geometry and bond angle of Ammonia (NH₃) molecule using VSEPR theory. அம்மோனியா (NH₃) மூலக்கூறின் வடிவியல் மற்றும் பிணைப்புக் கோணத்தை VSEPR கொள்கையைப் பயன்படுத்தி கணிக்கவும்.',
            steps: [
                {
                    step: 1,
                    explanation: 'Find the central atom and the total number of valence electrons. In NH₃, Nitrogen (N) is the central atom.',
                    calculation: 'Valence e⁻ of N = 5. Valence e⁻ of H = 1. Total valence e⁻ = 5 + 3(1) = 8.'
                },
                {
                    step: 2,
                    explanation: 'Determine the number of bond pairs and lone pairs around the central atom. Total pairs = Total valence e⁻ / 2.',
                    calculation: 'Total pairs = 8 / 2 = 4 pairs. Bond pairs = 3 (since N is bonded to 3 H atoms). Lone pairs = Total pairs - Bond pairs = 4 - 3 = 1 lone pair.'
                },
                {
                    step: 3,
                    explanation: 'Determine the electron geometry based on the total number of electron pairs (4). This corresponds to sp3 hybridization, so the electron geometry is Tetrahedral.',
                    calculation: 'Electron Geometry: Tetrahedral (நான்முகி)'
                },
                {
                    step: 4,
                    explanation: 'Determine the molecular geometry by considering the lone pairs. The lone pair-bond pair repulsion is stronger than bond pair-bond pair repulsion, which pushes the bonds closer together.',
                    calculation: 'Shape: Trigonal Pyramidal (முக்கோணப் பிரமிடு)'
                },
                {
                    step: 5,
                    explanation: 'Predict the bond angle. A perfect tetrahedral angle is 109.5°. The lone pair repulsion reduces this angle.',
                    calculation: 'The H-N-H bond angle is approximately 107°.'
                }
            ],
            answer: 'The geometry of NH₃ is Trigonal Pyramidal and the bond angle is approximately 107°.',
            tip: 'The key to VSEPR is to remember that lone pairs (தனித்த எலக்ட்ரான் இரட்டைகள்) repel more than bond pairs (பிணைப்பு எலக்ட்ரான் இரட்டைகள்). For NEET, any time you see one lone pair in a tetrahedral electron geometry, the molecular shape will be trigonal pyramidal and the angle will be slightly less than 109.5°.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the bond formed by sharing electrons called?',
            options: ['அயனிப் பிணைப்பு (Ayani Pinaippu)', 'சகப்பிணைப்பு (Sagapinaippu)', 'உலோகப் பிணைப்பு (Uloga Pinaippu)', 'ஹைட்ரஜன் பிணைப்பு (Haidrajan Pinaippu)'],
            answer: 'சகப்பிணைப்பு (Sagapinaippu)'
        },
        {
            type: 'multiple-choice',
            question: 'What concept describes the mixing of atomic orbitals to form new orbitals for bonding?',
            options: ['மூலக்கூறு வடிவியல் (Moolakkuru Vadiviyal)', 'வேதிப் பிணைப்பு (Vethi Pinaippu)', 'அயனியாக்கம் (Ayaniyakkam)', 'இனக்கலப்பு (Inakkalappu)'],
            answer: 'இனக்கலப்பு (Inakkalappu)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'VSEPR theory is used to predict ____ ____.',
            answer: 'மூலக்கூறு வடிவியல்'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The electrostatic attraction between oppositely charged ions forms an ____ ____.',
            answer: 'அயனிப் பிணைப்பு'
        },
        {
            type: 'multiple-choice',
            question: 'What is the hybridization of the carbon atom in methane?',
            options: ['sp', 'sp2', 'sp3', 'dsp2'],
            answer: 'sp3'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Hybridization Confusion (இனக்கலப்பு)',
            tip: 'For NEET, predicting the hybridization (sp, sp2, sp3) is key. A simple trick for TN students is to count the number of sigma (σ) bonds + lone pairs around the central atom. 2 means sp, 3 means sp2, 4 means sp3. Don\'t forget to count the lone pairs! This is a guaranteed question.'
        },
        {
            pitfall: 'Misidentifying Bond Types',
            tip: 'Remember this rule of thumb: an அயனிப் பிணைப்பு (Ionic Bond) usually forms between a metal (உலோகம்) and a non-metal (அலோகம்), due to large electronegativity difference. A சகப்பிணைப்பு (Covalent Bond) forms between two non-metals. Identifying the elements in the compound is the first step.'
        }
    ]
};
