
import type { ExamModule } from './types';

export const neetChemistryEquilibrium: ExamModule = {
    id: 'exam-neet-chemistry-equilibrium',
    title: 'NEET: Chemistry (Equilibrium)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Chemistry',
    syllabusMapping: [
        {
            topic: 'Equilibrium',
            tnBoardChapter: '12th Std Chemistry - Vol 1, Chapter 8: Ionic Equilibrium & 11th Std Chemistry - Vol 2, Chapter 8: Physical and Chemical Equilibrium',
            ncertReference: 'Class 11 Chemistry - Part 1, Chapter 7: Equilibrium',
            notes: 'This is a large and very important unit. Focus on Le Chatelier\'s principle, calculation of Kc and Kp, and problems related to pH and buffer solutions.'
        }
    ],
    vocabulary: [
        {
            word: 'சமநிலை (Samanilai)',
            romanization: 'Samanilai',
            definition: 'Equilibrium. A state in a reversible reaction where the rate of the forward reaction equals the rate of the reverse reaction, and the concentrations of reactants and products remain constant.',
            partOfSpeech: 'Noun',
            sentence: 'வேதிச் சமநிலையில், முன்னோக்கு மற்றும் பின்னோக்கு வினைகளின் வேகம் சமமாக இருக்கும்.',
            sentenceRoman: 'Vētic camanilaiyil, muṉṉōkku maṟṟum piṉṉōkku viṉaikaḷiṉ vēkam camamāka irukkum.',
            sentenceTranslation: 'In chemical equilibrium, the rates of the forward and reverse reactions are equal.'
        },
        {
            word: 'லீ சாட்லியர் கொள்கை (Le Chatelier\'s Principle)',
            romanization: 'Le Chatelier Kolgai',
            definition: 'Le Chatelier\'s Principle. It states that if a change of condition (like temperature, pressure, or concentration) is applied to a system in equilibrium, the system will shift in a direction that counteracts the change.',
            partOfSpeech: 'Principle',
            sentence: 'லீ சாட்லியர் கொள்கையின்படி, வெப்பநிலையை அதிகரித்தால், வெப்பம் கொள்ளும் வினைக்கு சமநிலை மாறும்.',
            sentenceRoman: 'Lī cāṭliyar koḷkaiyiṉpaṭi, veppanilaiyai atikarittāl, veppam koḷḷum viṉaikku camanilai māṟum.',
            sentenceTranslation: 'According to Le Chatelier\'s principle, if the temperature is increased, the equilibrium will shift to the endothermic reaction.'
        },
        {
            word: 'சமநிலை மாறிலி (Samanilai Maarili)',
            romanization: 'Samanilai Maarili',
            definition: 'Equilibrium Constant (K). A value that expresses the relationship between the amounts of products and reactants present at equilibrium in a reversible chemical reaction at a given temperature.',
            partOfSpeech: 'Noun',
            sentence: 'சமநிலை மாறிலியின் மதிப்பு (Kc) ஒரு வினையின் அளவைக் குறிக்கிறது.',
            sentenceRoman: 'Camanilai māṟiliyiṉ matippu (Kc) oru viṉaiyiṉ aḷavaik kuṟikkiṟatu.',
            sentenceTranslation: 'The value of the equilibrium constant (Kc) indicates the extent of a reaction.'
        }
    ],
    workedExamples: [
        {
            problem: 'For the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g), at a certain temperature, the equilibrium concentrations are [N₂] = 0.5 M, [H₂] = 1.5 M, and [NH₃] = 0.2 M. Calculate the equilibrium constant (Kc).',
            steps: [
                {
                    step: 1,
                    explanation: 'Write the expression for the equilibrium constant (Kc) for the given reaction.',
                    calculation: 'Kc = [Products] / [Reactants] = [NH₃]² / ([N₂] * [H₂]³)'
                },
                {
                    step: 2,
                    explanation: 'Substitute the given equilibrium concentrations into the expression.',
                    calculation: 'Kc = (0.2)² / (0.5 * (1.5)³)'
                },
                {
                    step: 3,
                    explanation: 'Calculate the values of the squared and cubed terms.',
                    calculation: '(0.2)² = 0.04. (1.5)³ = 3.375'
                },
                {
                    step: 4,
                    explanation: 'Perform the final calculation to find the value of Kc.',
                    calculation: 'Kc = 0.04 / (0.5 * 3.375) = 0.04 / 1.6875 ≈ 0.0237'
                }
            ],
            answer: 'The equilibrium constant (Kc) for the reaction is approximately 0.0237 M⁻².',
            tip: 'The most common mistake is forgetting to raise the concentrations to the power of their stoichiometric coefficients. Always double-check the balanced equation. In this case, NH₃ has a coefficient of 2 and H₂ has a coefficient of 3.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'What principle is used to predict the shift in equilibrium when a condition is changed?',
            options: ['Hess\'s Law', 'Aufbau Principle', 'Heisenberg\'s Uncertainty Principle', 'Le Chatelier\'s Principle'],
            answer: 'Le Chatelier\'s Principle'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Units of Kc',
            tip: 'The units of the equilibrium constant (Kc) depend on the stoichiometry of the reaction. The unit is (M) raised to the power of (moles of gaseous products - moles of gaseous reactants). For the Haber process (N₂ + 3H₂ ⇌ 2NH₃), Δn = 2 - (1+3) = -2, so the unit is M⁻² or mol⁻²L².'
        }
    ]
};
