
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
            definition: 'Genetics. This is the science of how traits (பண்புகள்) are passed from parents to children through genes. Think of it as the rulebook for heredity. Gregor Mendel (கிரிகோர் மெண்டல்) is called the father of modern genetics.',
            partOfSpeech: 'Noun',
            sentence: 'கிரிகோர் மெண்டல் நவீன மரபியலின் தந்தை என்று அழைக்கப்படுகிறார்.',
            sentenceRoman: 'Kirikor Mendal naveena marabiyalin thanthai endru alaikkappadugiraar.',
            sentenceTranslation: 'Gregor Mendel is called the father of modern genetics.'
        },
        {
            word: 'மரபணு (Marabanu)',
            romanization: 'Marabanu',
            definition: 'Gene. This is the basic unit of heredity, like a single instruction in a recipe book. It is a segment of DNA that codes for a specific protein or trait, such as eye color or height.',
            partOfSpeech: 'Noun',
            sentence: 'கண்களின் நிறம் ஒரு குறிப்பிட்ட மரபணு மூலம் தீர்மானிக்கப்படுகிறது.',
            sentenceRoman: 'Kankalin niram oru kurippitta marabanu moolam theermaanikkappadugirathu.',
            sentenceTranslation: 'Eye color is determined by a specific gene.'
        },
        {
            word: 'அல்லீல்கள் (Alleelgal)',
            romanization: 'Alleelgal',
            definition: 'Alleles. These are different versions or forms of the same gene. Analogy: Think of a mango (the gene). The different varieties like \'Banganapalli\' and \'Malgova\' are the alleles. Both are mangoes, but with different traits.',
            partOfSpeech: 'Noun',
            sentence: 'ஒரு மரபணுவின் வெவ்வேறு வடிவங்கள் அல்லீல்கள் எனப்படும்.',
            sentenceRoman: 'Oru marabanuvin vevveru vadivangal alleelgal enappadum.',
            sentenceTranslation: 'Different forms of a gene are called alleles.'
        },
        {
            word: 'புறத்தோற்றம் (Puraththotram)',
            romanization: 'Puraththotram',
            definition: 'Phenotype. This refers to the observable physical properties of an organism, like its appearance, development, and behavior. It is what you can see. For example, "tall plant" or "blue eyes".',
            partOfSpeech: 'Noun',
            sentence: 'மரபுக்கூறு மற்றும் சுற்றுச்சூழல் காரணிகளால் ஒரு உயிரினத்தின் புறத்தோற்றம் தீர்மானிக்கப்படுகிறது.',
            sentenceRoman: 'Marabukkooru matrum sutruchulal kaaranigalal oru uyirinaththin puraththotram theermaanikkappadugirathu.',
            sentenceTranslation: 'An organism\'s phenotype is determined by genotype and environmental factors.'
        },
        {
            word: 'மரபுக்கூறு (Marabukkooru)',
            romanization: 'Marabukkooru',
            definition: 'Genotype. This is the genetic makeup of an organism, the set of genes it carries. It is the "recipe" itself, represented by letters like TT, Tt, or tt. It determines the phenotype.',
            partOfSpeech: 'Noun',
            sentence: 'ஒத்த மரபுக்கூறு (TT) மற்றும் வேறுபட்ட மரபுக்கூறு (Tt) இரண்டும் ஒரே புறத்தோற்றத்தை (உயரமான) கொடுக்கலாம்.',
            sentenceRoman: 'Oththa marabukkooru (TT) matrum verupatta marabukkooru (Tt) irandum ore puraththotrathtai (uyaramana) kodukkalam.',
            sentenceTranslation: 'Both homozygous (TT) and heterozygous (Tt) genotypes can give the same phenotype (tall).'
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
            question: 'Which term refers to the observable characteristics of an organism?',
            options: ['மரபுக்கூறு (Marabukkooru)', 'புறத்தோற்றம் (Puraththotram)', 'அல்லீல் (Alleel)', 'மரபியல் (Marabiyal)'],
            answer: 'புறத்தோற்றம் (Puraththotram)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The genetic makeup of an organism is its ____.',
            answer: 'மரபுக்கூறு'
        },
        {
            type: 'fill-in-the-blank',
            question: 'Different versions of the same gene are called ____.',
            answer: 'அல்லீல்கள்'
        },
        {
            type: 'multiple-choice',
            question: 'The "rulebook" for how traits are passed from parents to children is called:',
            options: ['மரபுக்கூறு (Marabukkooru)', 'புறத்தோற்றம் (Puraththotram)', 'அல்லீல் (Alleel)', 'மரபியல் (Marabiyal)'],
            answer: 'மரபியல் (Marabiyal)'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Codominance vs Incomplete Dominance (இணை ஓங்குதன்மை மற்றும் முழுமையற்ற ஓங்குதன்மை)',
            tip: 'This is a very common confusion point. For Codominance (இணை ஓங்குதன்மை), both alleles express themselves fully and distinctly, like the spots on a cow or the AB blood group. Think of a red hibiscus and a white hibiscus flower having patches of both red and white. For Incomplete Dominance (முழுமையற்ற ஓங்குதன்மை), they blend to create a new, intermediate phenotype. A red and white flower producing a pink flower is the classic example.'
        },
        {
            pitfall: 'Dihybrid Cross Ratio (இருபண்பு கலப்பு விகிதம்)',
            tip: 'Students often memorize the 9:3:3:1 phenotypic ratio but struggle to derive it. Remember it is just two independent monohybrid crosses (3:1 ratio) combined. (3:1) x (3:1) = 9:3:3:1. Practice breaking down dihybrid problems into two separate monohybrid problems to find probabilities easily. This trick saves a lot of time in the exam.'
        }
    ]
};
