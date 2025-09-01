
import type { ExamModule } from './types';

export const neetChemistryTamil: ExamModule = {
    id: 'exam-neet-chemistry-tamil',
    title: 'NEET: Chemistry (Chemical Bonding)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Chemistry',
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
            word: 'வினைவேகமாற்றி (Vinaivegamaatri)',
            romanization: 'Vinaivegamaatri',
            definition: 'A substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change (Catalyst).',
            partOfSpeech: 'Noun',
            sentence: 'பல தொழில்துறை செயல்முறைகளில் வினைவேகமாற்றிகள் முக்கிய பங்கு வகிக்கின்றன.',
            sentenceRoman: 'Pala thozhilthurai seyalmuraigalil vinaivegamaatrigal mukkiya pangu vagikkinrana.',
            sentenceTranslation: 'Catalysts play an important role in many industrial processes.'
        },
        {
            word: 'வெப்பங்கொள் வினை (Veppangol Vinai)',
            romanization: 'Veppangol Vinai',
            definition: 'A reaction in which the system absorbs energy from its surroundings, usually in the form of heat (Endothermic Reaction).',
            partOfSpeech: 'Noun',
sentence: 'பனிக்கட்டி உருகுதல் ஒரு வெப்பங்கொள் வினை ஆகும்.',
            sentenceRoman: 'Panikkatti uruguthal oru veppangol vinai aagum.',
            sentenceTranslation: 'Melting of ice is an endothermic reaction.'
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
            question: 'Which of the following is an example of an Endothermic Reaction?',
            options: ['Combustion', 'Neutralization', 'Melting of ice', 'Respiration'],
            answer: 'Melting of ice'
        },
        {
            type: 'fill-in-the-blank',
            question: 'A substance that speeds up a reaction is called a ____.',
            answer: 'வினைவேகமாற்றி'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The electrostatic attraction between oppositely charged ions forms an ____ ____.',
            answer: 'அயனிப் பிணைப்பு'
        },
        {
            type: 'multiple-choice',
            question: 'What is the Tamil term for "Chemical Bond"?',
            options: ['அணு அமைப்பு (Anu amaippu)', 'வேதி வினை (Vethi vinai)', 'வேதிப் பிணைப்பு (Vethi Pinaippu)', 'மூலக்கூறு (Moolakkuru)'],
            answer: 'வேதிப் பிணைப்பு (Vethi Pinaippu)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Hybridization Confusion (இனக்கலப்பு)',
            tip: 'For NEET, predicting the hybridization (sp, sp2, sp3) is key. A simple trick for TN students is to count the number of sigma bonds + lone pairs around the central atom. 2 means sp, 3 means sp2, 4 means sp3. Don\'t forget to count the lone pairs!'
        },
        {
            pitfall: 'Misidentifying Bond Types',
            tip: 'Remember this rule: an அயனிப் பிணைப்பு (Ionic Bond) usually forms between a metal (உலோகம்) and a non-metal (அலோகம்). A சகப்பிணைப்பு (Covalent Bond) forms between two non-metals. Identifying the elements in the compound is the first step.'
        }
    ]
};
