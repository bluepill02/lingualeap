
import type { ExamModule } from './types';

export const bpscHindiModernHistory: ExamModule = {
    id: 'exam-bpsc-hindi-history',
    title: 'BPSC: Modern History Terminology',
    examName: 'BPSC',
    language: 'Hindi',
    category: 'Modern History',
    syllabusMapping: [
        {
            topic: 'Modern History of India and Indian Culture',
            tnBoardChapter: 'N/A',
            ncertReference: 'Class 12 History - Themes in Indian History Part III',
            notes: 'Focus on the freedom struggle, peasant movements in Bihar (like Champaran Satyagraha), and the role of key leaders from the state.'
        }
    ],
    vocabulary: [
        {
            word: 'स्वराज (Swaraj)',
            romanization: 'Swaraj',
            definition: 'Self-rule, independence. A key concept in the Indian independence movement.',
            partOfSpeech: 'Noun',
            sentence: 'बाल गंगाधर तिलक का प्रसिद्ध नारा था, "स्वराज मेरा जन्मसिद्ध अधिकार है और मैं इसे लेकर रहूँगा।"',
            sentenceRoman: 'Bal Gangadhar Tilak ka prasiddh naara tha, "Swaraj mera janmasiddh adhikar hai aur main ise lekar rahunga."',
            sentenceTranslation: 'Bal Gangadhar Tilak\'s famous slogan was, "Swaraj is my birthright and I shall have it."'
        },
        {
            word: 'सत्याग्रह (Satyagraha)',
            romanization: 'Satyagraha',
            definition: 'Holding onto truth; nonviolent resistance or civil resistance. A concept popularized by Mahatma Gandhi, first successfully implemented in Champaran, Bihar.',
            partOfSpeech: 'Noun',
            sentence: 'गांधीजी ने चंपारण में अपना पहला सफल सत्याग्रह किया।',
            sentenceRoman: 'Gandhiji ne Champaran mein apna pehla safal satyagraha kiya.',
            sentenceTranslation: 'Gandhiji conducted his first successful Satyagraha in Champaran.'
        },
        {
            word: 'असहयोग आंदोलन (Asahyog Aandolan)',
            romanization: 'Asahyog Aandolan',
            definition: 'The Non-Cooperation Movement (1920-22), a pivotal phase of the Indian independence movement led by Mahatma Gandhi.',
            partOfSpeech: 'Noun',
            sentence: 'असहयोग आंदोलन का उद्देश्य ब्रिटिश सरकार के साथ सहयोग न करके उन्हें कमजोर करना था।',
            sentenceRoman: 'Asahyog Aandolan ka uddeshya British sarkar ke saath sahyog na karke unhe kamjor karna tha.',
            sentenceTranslation: 'The aim of the Non-Cooperation Movement was to weaken the British government by not cooperating with them.'
        },
        {
            word: 'खिलाफत आंदोलन (Khilafat Aandolan)',
            romanization: 'Khilafat Aandolan',
            definition: 'The Khilafat Movement (1919-24), a pan-Islamic political protest campaign launched by Muslims in British India, often merged with the Non-Cooperation Movement.',
            partOfSpeech: 'Noun',
            sentence: 'खिलाफत आंदोलन ने भारतीय स्वतंत्रता संग्राम में हिंदू-मुस्लिम एकता को बढ़ावा दिया।',
            sentenceRoman: 'Khilafat Aandolan ne Bhartiya svatantrata sangram mein Hindu-Muslim ekta ko badhawa diya.',
            sentenceTranslation: 'The Khilafat Movement promoted Hindu-Muslim unity in the Indian freedom struggle.'
        },
        {
            word: 'अधिवेशन (Adhiveshan)',
            romanization: 'Adhiveshan',
            definition: 'A formal meeting, session, or conference, especially of a political party like the Indian National Congress.',
            partOfSpeech: 'Noun',
            sentence: 'भारतीय राष्ट्रीय कांग्रेस का 1922 का गया अधिवेशन बिहार में एक महत्वपूर्ण घटना थी।',
            sentenceRoman: 'Bhartiya Rashtriya Congress ka 1922 ka Gaya adhiveshan Bihar mein ek mahatvapurna ghatna thi.',
            sentenceTranslation: 'The 1922 Gaya session of the Indian National Congress was an important event in Bihar.'
        },
        {
            word: 'किसान सभा (Kisan Sabha)',
            romanization: 'Kisan Sabha',
            definition: 'Peasant assembly. These were crucial organizations in the Indian freedom struggle, especially in Bihar, led by figures like Swami Sahajanand Saraswati.',
            partOfSpeech: 'Noun',
            sentence: 'स्वामी सहजानंद सरस्वती ने बिहार में किसान सभा आंदोलन का नेतृत्व किया।',
            sentenceRoman: 'Swami Sahajanand Saraswati ne Bihar mein Kisan Sabha aandolan ka netritva kiya.',
            sentenceTranslation: 'Swami Sahajanand Saraswati led the Kisan Sabha movement in Bihar.'
        },
        {
            word: 'बहिष्कार (Bahishkar)',
            romanization: 'Bahishkar',
            definition: 'Boycott. A key tactic used during the freedom struggle to protest against British goods and institutions.',
            partOfSpeech: 'Noun',
            sentence: 'स्वदेशी आंदोलन के दौरान विदेशी वस्तुओं का बहिष्कार किया गया।',
            sentenceRoman: 'Swadeshi aandolan ke dauran videshi vastuon ka bahishkar kiya gaya.',
            sentenceTranslation: 'Foreign goods were boycotted during the Swadeshi movement.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'The concept of nonviolent resistance popularized by Gandhi is known as?',
            options: ['स्वराज (Swaraj)', 'अधिवेशन (Adhiveshan)', 'सत्याग्रह (Satyagraha)', 'खिलाफत (Khilafat)'],
            answer: 'सत्याग्रह (Satyagraha)'
        },
        {
            type: 'multiple-choice',
            question: 'What is the term for a formal session or conference of a political party?',
            options: ['आंदोलन (Aandolan)', 'सत्याग्रह (Satyagraha)', 'स्वराज (Swaraj)', 'अधिवेशन (Adhiveshan)'],
            answer: 'अधिवेशन (Adhiveshan)'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The movement aimed at weakening the British government by not cooperating was the ____ आंदोलन.',
            answer: 'असहयोग'
        },
        {
            type: 'fill-in-the-blank',
            question: 'Bal Gangadhar Tilak\'s famous slogan demanded ____, or self-rule.',
            answer: 'स्वराज'
        },
        {
            type: 'multiple-choice',
            question: 'Which movement promoted Hindu-Muslim unity during the freedom struggle?',
            options: ['असहयोग आंदोलन (Asahyog Aandolan)', 'खिलाफत आंदोलन (Khilafat Aandolan)', 'भारत छोड़ो आंदोलन (Bharat Chhodo Aandolan)', 'सविनय अवज्ञा आंदोलन (Savinay Avagya Aandolan)'],
            answer: 'खिलाफत आंदोलन (Khilafat Aandolan)'
        },
        {
            type: 'multiple-choice',
            question: 'Who was a prominent leader of the Kisan Sabha movement in Bihar?',
            options: ['Mahatma Gandhi', 'Rajendra Prasad', 'Swami Sahajanand Saraswati', 'Jawaharlal Nehru'],
            answer: 'Swami Sahajanand Saraswati'
        },
        {
            type: 'fill-in-the-blank',
            question: 'The tactic of boycotting foreign goods during the freedom struggle is called ____.',
            answer: 'बहिष्कार'
        },
        {
            type: 'multiple-choice',
            question: 'Where did Gandhi launch his first successful Satyagraha in India?',
            options: ['Kheda', 'Ahmedabad', 'Champaran', 'Bardoli'],
            answer: 'Champaran'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Confusing Similar-Sounding Movements',
            tip: 'Differentiate clearly between "Asahyog" (Non-Cooperation, 1920-22) and "Savinay Avagya" (Civil Disobedience, 1930-34). Although both were led by Gandhi, they occurred at different times and had different specific objectives. Create a timeline to link key terms to specific years.'
        },
        {
            pitfall: 'Underestimating the Importance of Regional Movements',
            tip: 'For BPSC, national movements are important, but movements with strong roots in Bihar, like the Champaran Satyagraha and the Kisan Sabha movement, are extremely high-yield. Pay special attention to the role of leaders from Bihar like Rajendra Prasad and Swami Sahajanand Saraswati.'
        },
        {
            pitfall: 'Misunderstanding "Swaraj"',
            tip: 'The term "Swaraj" evolved over time. For early nationalists, it meant self-rule within the British Empire. For later nationalists like Tilak and Gandhi, it meant complete independence. Be aware of the context (early vs. later freedom struggle) when answering questions about it.'
        }
    ]
};
