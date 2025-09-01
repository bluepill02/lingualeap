
import type { ExamModule } from './types';

export const neetBiologyTamil: ExamModule = {
    id: 'exam-neet-biology-tamil',
    title: 'NEET: Biology (Genetics)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Biology',
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
            word: 'குரோமோசோம் (Kuromosom)',
            romanization: 'Kuromosom',
            definition: 'A thread-like structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes (Chromosome).',
            partOfSpeech: 'Noun',
            sentence: 'மனித செல்களில் 23 ஜோடி குரோமோசோம்கள் உள்ளன.',
            sentenceRoman: 'Manitha selgalil 23 jodi kuromosomgal ullana.',
            sentenceTranslation: 'There are 23 pairs of chromosomes in human cells.'
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
            word: 'மைட்டாசிஸ் (Maittasis)',
            romanization: 'Maittasis',
            definition: 'A type of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus, typical of ordinary tissue growth (Mitosis).',
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
            question: 'The study of genes and heredity is called ____.',
            answer: 'மரபியல்'
        },
        {
            type: 'fill-in-the-blank',
            question: 'Cell division for tissue growth is known as ____.',
            answer: 'மைட்டாசிஸ்'
        },
        {
            type: 'multiple-choice',
            question: 'How many pairs of chromosomes are in a typical human cell?',
            options: ['22', '23', '46', '48'],
            answer: '23'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Confusing Mitosis and Meiosis Stages',
            tip: 'TN students should use mnemonics. For Mitosis, remember "PMAT" (Prophase, Metaphase, Anaphase, Telophase). For Meiosis, it\'s "PMAT twice" (PMAT I and PMat II). The key difference is that homologous chromosomes pair up in Prophase I of Meiosis, which does not happen in Mitosis.'
        },
        {
            pitfall: 'Misunderstanding Dominant and Recessive Alleles',
            tip: 'ஓங்கு பண்பு (Dominant) allele will express itself even if only one copy is present (e.g., Tt). ஒடுங்கு பண்பு (Recessive) allele needs two copies to be expressed (e.g., tt). Drawing Punnett squares is the best way to solve genetics problems in NEET, so practice it well.'
        }
    ]
};
