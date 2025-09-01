
import type { ExamModule } from './types';

export const neetBiologyTamil: ExamModule = {
    id: 'exam-neet-biology-tamil',
    title: 'NEET: Biology (Genetics)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Biology',
    syllabusMapping: [
        {
            topic: 'Principles of Inheritance and Variation',
            tnBoardChapter: '12th Std Botany - Chapter 3: Chromosomal Basis of Inheritance & 12th Std Zoology - Chapter 2: Human Reproduction (related concepts)',
            ncertReference: 'Class 12 Biology - Chapter 5: Principles of Inheritance and Variation',
            notes: 'Mendelian genetics is the core. TN board students should pay extra attention to genetic disorders mentioned in NCERT, as they are frequently asked. Practice pedigree analysis extensively.'
        }
    ],
    vocabulary: [
        {
            word: 'மரபியல் (Marabiyal)',
            romanization: 'Marabiyal',
            definition: 'The study of genes, genetic variation, and heredity in organisms (Genetics).',
            partOfSpeech: 'Noun',
            sentence: 'கிரிகோர் மெண்டல் நவீன மரபியலின் தந்தை என்று அழைக்கப்படுகிறார்.',
            sentenceRoman: 'Kirikor Mendal naveena marabiyalin thanthai endru alaikkappadugiraar.',
            sentenceTranslation: 'Gregor Mendel is called the father of modern genetics.'
        },
        {
            word: 'மரபணு (Marabanu)',
            romanization: 'Marabanu',
            definition: 'A unit of heredity which is transferred from a parent to offspring and is held to determine some characteristic of the offspring (Gene).',
            partOfSpeech: 'Noun',
            sentence: 'கண்களின் நிறம் ஒரு குறிப்பிட்ட மரபணு மூலம் தீர்மானிக்கப்படுகிறது.',
            sentenceRoman: 'Kankalin niram oru kurippitta marabanu moolam theermaanikkappadugirathu.',
            sentenceTranslation: 'Eye color is determined by a specific gene.'
        },
        {
            word: 'அல்லீல் (Alleel)',
            romanization: 'Alleel',
            definition: 'One of two or more alternative forms of a gene that arise by mutation and are found at the same place on a chromosome (Allele).',
            partOfSpeech: 'Noun',
            sentence: 'ஒரு மரபணுவின் வெவ்வேறு வடிவங்கள் அல்லீல்கள் எனப்படும்.',
            sentenceRoman: 'Oru marabanuvin vevveru vadivangal alleelgal enappadum.',
            sentenceTranslation: 'Different forms of a gene are called alleles.'
        },
        {
            word: 'புறத்தோற்றம் (Puraththotram)',
            romanization: 'Puraththotram',
            definition: 'The set of observable characteristics of an individual resulting from the interaction of its genotype with the environment (Phenotype).',
            partOfSpeech: 'Noun',
            sentence: 'மரபுக்கூறு மற்றும் சுற்றுச்சூழல் காரணிகளால் ஒரு உயிரினத்தின் புறத்தோற்றம் தீர்மானிக்கப்படுகிறது.',
            sentenceRoman: 'Marabukkooru matrum sutruchulal kaaranigalal oru uyirinaththin puraththotram theermaanikkappadugirathu.',
            sentenceTranslation: 'An organism\'s phenotype is determined by genotype and environmental factors.'
        },
        {
            word: 'மைட்டாசிஸ் (Maittasis)',
            romanization: 'Maittasis',
            definition: 'A type of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus (Mitosis).',
            partOfSpeech: 'Noun',
            sentence: 'உடல் வளர்ச்சி மற்றும் பழுதுபார்த்தலுக்கு மைட்டாசிஸ் அவசியம்.',
            sentenceRoman: 'Udal valarchi matrum paluthupaarthalukku maittasis avasiyam.',
            sentenceTranslation: 'Mitosis is essential for body growth and repair.'
        },
        {
            word: 'மியாசிஸ் (Miyasis)',
            romanization: 'Miyasis',
            definition: 'A type of cell division that results in four daughter cells each with half the number of chromosomes of the parent cell, as in the production of gametes (Meiosis).',
            partOfSpeech: 'Noun',
            sentence: 'இனப்பெருக்க செல்கள் (கேமட்கள்) மியாசிஸ் மூலம் உருவாகின்றன.',
            sentenceRoman: 'Inapperukka selgal (kamatkal) miyasis moolam uruvaaginrana.',
            sentenceTranslation: 'Reproductive cells (gametes) are formed through meiosis.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What is the Tamil word for "Gene"?',
            options: ['செல் (Sel)', 'குரோமோசோம் (Kuromosom)', 'மரபணு (Marabanu)', 'டி.என்.ஏ (DNA)'],
            answer: 'மரபணு (Marabanu)'
        },
        {
            type: 'multiple-choice',
            question: 'Which cell division process produces gametes?',
            options: ['மைட்டாசிஸ் (Maittasis)', 'மியாசிஸ் (Miyasis)', 'அமைட்டாசிஸ் (Amaittasis)', 'சைட்டோகைனசிஸ் (Saittokainasis)'],
            answer: 'மியாசிஸ் (Miyasis)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The set of observable characteristics of an individual is called ____.',
            answer: 'புறத்தோற்றம்'
        },
        {
            type: 'fill-in-the-blank',
            question: 'Alternative forms of a gene are known as ____.',
            answer: 'அல்லீல்'
        },
        {
            type: 'multiple-choice',
            question: 'Cell division for body growth is called:',
            options: ['மியாசிஸ் (Miyasis)', 'இணைவு (Inaivu)', 'குன்றல் பகுப்பு (Kundral paguppu)', 'மைட்டாசிஸ் (Maittasis)'],
            answer: 'மைட்டாசிஸ் (Maittasis)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Confusing Mitosis and Meiosis Stages (மைட்டாசிஸ் மற்றும் மியாசிஸ் நிலைகள்)',
            tip: 'Use mnemonics. For Mitosis, remember "PMAT" (Prophase, Metaphase, Anaphase, Telophase) - இதை "பூ மேல ஆணி தைத்தது" (Poo Mela Aani Thaithathu) என்று ஞாபகம் வைக்கலாம். For Meiosis, it\'s "PMAT twice". The key difference is that homologous chromosomes pair up (crossing-over) in Prophase I of Meiosis, which is a major source of genetic variation.'
        },
        {
            pitfall: 'Codominance vs Incomplete Dominance (இணை ஓங்குதன்மை மற்றும் முழுமையற்ற ஓங்குதன்மை)',
            tip: 'This is a very common confusion point. For codominance (இணை ஓங்குதன்மை), both alleles express themselves fully, like AB blood group. Think of it like a red flower and a white flower having patches of red and white. For incomplete dominance (முழுமையற்ற ஓங்குதன்மை), they blend, creating a new phenotype. A red and white flower producing a pink flower is the classic example.'
        }
    ]
};
