
import type { ExamModule } from './types';

export const neetChemistryThermo: ExamModule = {
    id: 'exam-neet-chemistry-thermo',
    title: 'NEET: Chemistry (Thermodynamics)',
    examName: 'NEET',
    language: 'Tamil',
    category: 'Chemistry',
    syllabusMapping: [
        {
            topic: 'Thermodynamics',
            tnBoardChapter: '11th Std Chemistry - Vol 2, Chapter 7: Thermodynamics',
            ncertReference: 'Class 11 Chemistry - Part 1, Chapter 6: Thermodynamics',
            notes: 'Focus on the First Law, enthalpy calculations (Hess\'s Law), and the relationship between ΔG, ΔH, and ΔS. Numerical problems are very common from this chapter.'
        }
    ],
    vocabulary: [
        {
            word: 'வெப்ப அடக்கம் (Enthalpy)',
            romanization: 'Veppa Adakkam (Enthalpy)',
            definition: 'Enthalpy (H) is the total heat content of a system. The change in enthalpy (ΔH) tells us if a reaction releases heat (exothermic, ΔH < 0, வெப்ப உமிழ் வினை) or absorbs heat (endothermic, ΔH > 0, வெப்ப கொள் வினை). Analogy: Think of it as the "heat bank account" of a reaction.',
            partOfSpeech: 'Noun',
            sentence: 'ஒரு வினையின் வெப்ப அடக்க மாற்றம் (ΔH) அதன் வெப்ப உமிழ் அல்லது வெப்ப கொள் தன்மையைக் குறிக்கிறது.',
            sentenceRoman: 'Oru vinaiyin veppa adakka maatram (ΔH) adhan veppa umizh allathu veppa kol thanmaiyai kurikkirathu.',
            sentenceTranslation: 'The change in enthalpy (ΔH) of a reaction indicates its exothermic or endothermic nature.'
        },
        {
            word: 'என்ட்ரோபி (Entropy)',
            romanization: 'Entropy',
            definition: 'Entropy (S) is a measure of the randomness or disorder (ஒழுங்கின்மை) of a system. The universe naturally tends towards higher entropy. Analogy: A tidy room (low entropy) naturally becomes messy (high entropy) over time. Gas molecules have higher entropy than solid molecules.',
            partOfSpeech: 'Noun',
            sentence: 'இயற்கையாகவே, ஒரு அமைப்பின் என்ட்ரோபி அதிகரிக்க முனைகிறது.',
            sentenceRoman: 'Iyarkaiyagave, oru amaippin entropy athigarika munaiyugirathu.',
            sentenceTranslation: 'Naturally, the entropy of a system tends to increase.'
        },
        {
            word: 'கிப்ஸ் கட்டிலா ஆற்றல் (Gibbs Free Energy)',
            romanization: 'Gibbs Kattila Aatral',
            definition: 'Gibbs Free Energy (G) combines enthalpy and entropy to determine if a reaction is spontaneous (தன்னிச்சையான வினை) at a given temperature. The key formula is ΔG = ΔH - TΔS. If ΔG is negative, the reaction is spontaneous.',
            partOfSpeech: 'Noun',
            sentence: 'ஒரு வினையின் தன்னிச்சைத் தன்மையை தீர்மானிக்க கிப்ஸ் கட்டிலா ஆற்றல் (ΔG) பயன்படுகிறது.',
            sentenceRoman: 'Oru vinaiyin thannichchai thanmaiyai theermaanikka Gibbs kattila aatral (ΔG) payanpadugirathu.',
            sentenceTranslation: 'Gibbs free energy (ΔG) is used to determine the spontaneity of a reaction.'
        },
        {
            word: 'தன்னிச்சையான வினை (Thannichaiyana Vinai)',
            romanization: 'Thannichaiyana Vinai',
            definition: 'Spontaneous Process. A process that occurs without any external input of energy. It doesn\'t mean fast, just that it\'s thermodynamically favorable to happen. If ΔG is negative, the process is spontaneous.',
            partOfSpeech: 'Noun',
            sentence: 'ΔG மதிப்பு எதிர்மறையாக இருந்தால், அந்த வினை ஒரு தன்னிச்சையான வினை ஆகும்.',
            sentenceRoman: 'ΔG mathippu ethirmaraiyaga irunthaal, antha vinai oru thannichaiyana vinai aagum.',
            sentenceTranslation: 'If the value of ΔG is negative, then the reaction is a spontaneous process.'
        },
    ],
    workedExamples: [
        {
            problem: 'For a reaction, ΔH = 400 kJ mol⁻¹ and ΔS = 0.2 kJ K⁻¹ mol⁻¹. At what temperature will the reaction become spontaneous? ஒரு வினைக்கு, ΔH = 400 kJ மோல்⁻¹ மற்றும் ΔS = 0.2 kJ K⁻¹ மோல்⁻¹. எந்த வெப்பநிலையில் வினை தன்னிச்சையாக மாறும்?',
            steps: [
                {
                    step: 1,
                    explanation: 'Identify the condition for spontaneity. A reaction becomes spontaneous when Gibbs Free Energy (ΔG) changes from positive to negative. The tipping point is when ΔG = 0.',
                    calculation: 'For spontaneity, ΔG < 0. At equilibrium (the crossover point), ΔG = 0.'
                },
                {
                    step: 2,
                    explanation: 'Use the Gibbs-Helmholtz equation: ΔG = ΔH - TΔS. Set ΔG to 0 to find the equilibrium temperature (T).',
                    calculation: '0 = ΔH - TΔS'
                },
                {
                    step: 3,
                    explanation: 'Rearrange the equation to solve for T.',
                    calculation: 'TΔS = ΔH  =>  T = ΔH / ΔS'
                },
                {
                    step: 4,
                    explanation: 'Substitute the given values into the equation. Ensure the units are consistent (both are in kJ, so no conversion is needed).',
                    calculation: 'T = (400 kJ mol⁻¹) / (0.2 kJ K⁻¹ mol⁻¹)'
                },
                {
                    step: 5,
                    explanation: 'Calculate the temperature (T). The reaction will be spontaneous at any temperature *above* this equilibrium temperature.',
                    calculation: 'T = 2000 K. Therefore, the reaction becomes spontaneous above 2000 K.'
                }
            ],
            answer: 'The reaction becomes spontaneous above 2000 K.',
            tip: 'The most common mistake in these problems is unit conversion. Sometimes ΔH is given in kJ and ΔS is given in J. Always convert them to the same unit (usually Joules) before calculating. In this case, both were in kJ, so it was straightforward.'
        }
    ],
    quizzes: [
        {
            type: 'multiple-choice',
            question: 'If ΔH is negative and ΔS is positive, a reaction is:',
            options: ['Spontaneous at all temperatures', 'Non-spontaneous at all temperatures', 'Spontaneous only at high temperatures', 'Spontaneous only at low temperatures'],
            answer: 'Spontaneous at all temperatures'
        },
        {
            type: 'multiple-choice',
            question: 'What is the Tamil term for Entropy?',
            options: ['வெப்ப அடக்கம்', 'என்ட்ரோபி', 'கிப்ஸ் ஆற்றல்', 'தன்னிச்சை'],
            answer: 'என்ட்ரோபி'
        },
        {
            type: 'fill-in-the-blank',
            question: 'A process that absorbs heat from the surroundings is called an ____ process.',
            answer: 'endothermic'
        },
        {
            type: 'fill-in-the-blank',
            question: 'For a reaction to be spontaneous, the value of ΔG must be ____.',
            answer: 'negative'
        }
    ],
    errorAnalysis: [
        {
            pitfall: 'Sign Conventions for ΔH and ΔS',
            tip: 'This is a critical area. Remember: Exothermic (heat released) means ΔH is negative. Endothermic (heat absorbed) means ΔH is positive. Increasing disorder (e.g., solid to gas) means ΔS is positive. Decreasing disorder means ΔS is negative. Getting these signs right is the first step to solving any ΔG problem.'
        },
        {
            pitfall: 'ΔG and Reaction Rate Confusion',
            tip: 'A negative ΔG means a reaction is *spontaneous* (likely to happen), but it says nothing about how *fast* it happens (the reaction rate). A reaction can be spontaneous but very slow, like the rusting of iron. Don\'t confuse thermodynamics (will it happen?) with kinetics (how fast will it happen?).'
        }
    ]
};
