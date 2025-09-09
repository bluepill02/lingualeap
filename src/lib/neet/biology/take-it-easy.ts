
import type { NeetModule } from '../../types';

export const takeItEasyBiologyModule: NeetModule = {
  id: 'take-it-easy',
  title: 'Take it Easy: Complex Topics Simplified',
  chapter: 'Human Physiology & Genetics',
  subject: 'Biology',
  learningObjectives: [
    'Understand the fundamental processes of major human organ systems.',
    'Grasp the core principles of Mendelian inheritance and molecular genetics.',
    'Build a strong foundation to confidently tackle complex questions in these units.',
  ],
  prerequisites: ['Basic cell biology', 'Understanding of macromolecules'],
  conceptOverview:
    "This special module is designed to demystify two of the most challenging and high-yield areas in NEET Biology: Human Physiology and Genetics. We break down complex systems and abstract concepts into manageable, easy-to-understand pieces. Our goal is to build your confidence and problem-solving skills, turning these difficult topics into your areas of strength.",
  workedExamples: [
    {
      title: 'Understanding Cardiac Output',
      difficulty: 'Medium',
      problem:
        'If a person has a heart rate of 75 beats/minute and a stroke volume of 70 mL/beat, what is their cardiac output?',
      solutionSteps: [
        {
          step: 1,
          explanation: 'Recall the formula for Cardiac Output (CO).',
          calculation: 'CO = Heart Rate (HR) * Stroke Volume (SV)',
        },
        {
          step: 2,
          explanation: 'Substitute the given values into the formula.',
          calculation: 'CO = 75 beats/min * 70 mL/beat',
        },
        {
          step: 3,
          explanation: 'Calculate the result.',
          calculation: 'CO = 5250 mL/minute',
        },
        {
            step: 4,
            explanation: 'Convert the result to Liters/minute for the standard unit.',
            calculation: 'CO = 5.25 L/minute'
        }
      ],
      answer: 'The cardiac output is 5.25 L/minute.',
      neetHack:
        'Remember that cardiac output is essentially the total volume of blood pumped by the heart in one minute. The formula is logical: volume per beat multiplied by beats per minute.',
    },
    {
      title: 'Dihybrid Cross Probability',
      difficulty: 'Hard',
      problem:
        'In pea plants, round seeds (R) are dominant to wrinkled seeds (r) and yellow seeds (Y) are dominant to green seeds (y). If a plant heterozygous for both traits (RrYy) is self-pollinated, what is the probability of obtaining an offspring with wrinkled, green seeds (rryy)?',
      solutionSteps: [
        {
          step: 1,
          explanation:
            'Understand that this is a dihybrid cross. We can analyze each trait separately.',
        },
        {
            step: 2,
            explanation: 'First, consider the seed shape trait (Rr x Rr). The probability of getting rr offspring is 1/4 (R Rr Rr rr).',
        },
        {
            step: 3,
            explanation: 'Next, consider the seed color trait (Yy x Yy). The probability of getting yy offspring is also 1/4 (Y YY Yy yy).',
        },
        {
            step: 4,
            explanation: 'To find the probability of both events occurring together, multiply their individual probabilities (Product Rule).',
            calculation: 'P(rryy) = P(rr) * P(yy) = (1/4) * (1/4)'
        },
         {
            step: 5,
            explanation: 'Calculate the final probability.',
            calculation: 'P(rryy) = 1/16'
        }
      ],
      answer: 'The probability of obtaining an offspring with wrinkled, green seeds is 1/16.',
       neetHack: 'For any standard Mendelian dihybrid cross (heterozygous parents), the phenotypic ratio is always 9:3:3:1. The "1" represents the double recessive trait (rryy), so the probability is always 1/16. Knowing this saves you from drawing a Punnett square during the exam.'
    },
  ],
  mcqs: [
     {
      question:
        'Which part of the human brain is responsible for maintaining posture and balance?',
      options: [
        'A) Cerebrum',
        'B) Cerebellum',
        'C) Medulla Oblongata',
        'D) Pons',
      ],
      answer: 'B) Cerebellum',
      explanation:
        'The cerebellum, located at the back of the brain, coordinates voluntary movements such as posture, balance, coordination, and speech, resulting in smooth and balanced muscular activity.',
    },
    {
      question:
        "According to Mendel's Law of Segregation, alleles for a trait separate from each other during the formation of:",
      options: [
        'A) Zygotes',
        'B) Gametes',
        'C) Embryos',
        'D) Somatic cells',
      ],
      answer: 'B) Gametes',
      explanation:
        'The Law of Segregation states that during the formation of gametes (sperm or egg cells), the two alleles for a heritable character separate (segregate) from each other so that each gamete ends up with only one allele.',
    },
  ],
  assertionReasons: [],
  matchTheColumns: [],
};
