
import { Metadata } from 'next';
import ExamPrepClientPage from './client-page';


export const metadata: Metadata = {
  title: 'Exam Preparation Modules',
  description: 'Explore comprehensive study modules for competitive exams like NEET, TNPSC, UPSC, and more. Featuring AI-powered practice tools and detailed bilingual content.',
  keywords: ['exam prep', 'NEET modules', 'TNPSC study material', 'UPSC preparation', 'competitive exams India'],
};

export default function ExamPrepPage() {
    return <ExamPrepClientPage />;
}
