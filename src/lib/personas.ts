
export interface LearnerPersona {
    type: string;
    description: string;
}

export const learnerPersonas: LearnerPersona[] = [
    {
        type: 'The Casual Traveler',
        description: 'Learns basic phrases for an upcoming trip. Motivated by cultural experiences and easy communication. Prefers short, practical lessons.',
    },
    {
        type: 'The Career Climber',
        description: 'Needs professional language skills for work. Motivated by job opportunities and business communication. Prefers formal language and business-oriented scenarios.',
    },
    {
        type: 'The Exam Ace',
        description: 'Studying for a proficiency exam (e.g., TOEFL, JLPT, DELE). Highly motivated by scores and structured learning. Prefers grammar drills and exam-specific vocabulary.',
    },
    {
        type: 'The Cultural Explorer',
        description: 'Passionate about a country\'s culture, media (movies, music), and history. Motivated by connection and understanding. Enjoys lessons about traditions and pop culture.',
    },
    {
        type: 'The Social Connector',
        description: 'Wants to connect with friends, family, or a partner who speaks the language. Motivated by personal relationships. Prefers conversational practice and informal language.',
    },
    {
        type: 'The Brain Trainer',
        description: 'Learns for cognitive benefits and the love of learning itself. Motivated by personal growth and challenge. Enjoys complex grammar and a wide range of topics.',
    }
];
