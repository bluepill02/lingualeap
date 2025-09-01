
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
            definition: 'An attraction between atoms, ions or molecules that enables the formation of chemical compounds (Chemical Bond).',
            partOfSpeech: 'Noun',
            sentence: 'அணுக்களுக்கு இடையிலான வேதிப் பிணைப்பு மூலக்கூறுகளை உருவாக்குகிறது.',
            sentenceRoman: 'Anukkalukku idaiyilana vethi pinaippu moolakkurugalai uruvaakkugirathu.',
            sentenceTranslation: 'The chemical bond between atoms forms molecules.'
        },
        {
            word: 'சகப்பிணைப்பு (Sagapinaippu)',
            romanization: 'Sagapinaippu',
            definition: 'A chemical bond that involves the sharing of electron pairs between atoms (Covalent Bond).',
            partOfSpeech: 'Noun',
            sentence: 'மீத்தேன் மூலக்கூறில் கார்பன் மற்றும் ஹைட்ரஜன் இடையே சகப்பிணைப்பு உள்ளது.',
            sentenceRoman: 'Meethen moolakkuril kaarban matrum haidrajan idaiye sagapinaippu ullathu.',
            sentenceTranslation: 'In a methane molecule, there is a covalent bond between carbon and hydrogen.'
        },
        {
            word: 'அயனிப் பிணைப்பு (Ayani Pinaippu)',
            romanization: 'Ayani Pinaippu',
            definition: 'A type of chemical bond formed through an electrostatic attraction between two oppositely charged ions (Ionic Bond).',
            partOfSpeech: 'Noun',
            sentence: 'சோடியம் குளோரைடில் (NaCl) சோடியம் மற்றும் குளோரின் இடையே அயனிப் பிணைப்பு உருவாகிறது.',
            sentenceRoman: 'Sodium kloraidil sodiyam matrum kulorin idaiye ayani pinaippu uruvaagirathu.',
            sentenceTranslation: 'An ionic bond is formed between sodium and chlorine in sodium chloride (NaCl).'
        },
        {
            word: 'இனக்கலப்பு (Inakkalappu)',
            romanization: 'Inakkalappu',
            definition: 'The concept of mixing atomic orbitals to form new hybrid orbitals suitable for the qualitative description of atomic bonding properties (Hybridization).',
            partOfSpeech: 'Noun',
            sentence: 'மீத்தேனில் உள்ள கார்பன் அணு sp3 இனக்கலப்பில் உள்ளது.',
            sentenceRoman: 'Meethenil ulla kaarban anu sp3 inakkalappil ullathu.',
            sentenceTranslation: 'The carbon atom in methane is in sp3 hybridization.'
        },
        {
            word: 'மூலக்கூறு வடிவியல் (Moolakkuru Vadiviyal)',
            romanization: 'Moolakkuru Vadiviyal',
            definition: 'The three-dimensional arrangement of the atoms that constitute a molecule (Molecular Geometry).',
            partOfSpeech: 'Noun',
            sentence: 'VSEPR கொள்கை மூலக்கூறு வடிவியலை கணிக்க உதவுகிறது.',
            sentenceRoman: 'VSEPR kolgai moolakkuru vadiviyalai kanikka uthavugirathu.',
            sentenceTranslation: 'VSEPR theory helps to predict molecular geometry.'
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
