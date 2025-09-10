'use server';

import { config } from 'dotenv';
config();

import '@/ai/flows/story-generator';
import '@/ai/flows/personalized-learning-reminders';
import '@/ai/flows/ar-immersion-flow';
import '@/ai/flows/matchmaking-flow';
import '@/ai/flows/personal-tutor-flow';
import '@/ai/flows/quiz-generator';
import '@/ai/flows/neet-content-generator';
import '@/ai/flows/neet-content-fixer';
import '@/ai/flows/mission-feedback-flow';
import '@/ai/flows/neet-quiz-generator';
import '@/ai/flows/neet-flashcard-generator';
import '@/ai/flows/tnpsc-quiz-generator';
import '@/ai/flows/speak-flow';
import '@/ai/flows/study-buddy-flow';
import '@/ai/flows/interview-feedback-flow';
import '@/ai/flows/interview-question-generator';
    

    