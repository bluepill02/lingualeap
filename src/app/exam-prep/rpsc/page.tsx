
'use client';

import { rpscRajasthaniVocabulary } from '@/lib/exam-data-rpsc';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function RpscExamPrepPage() {
    return <ExamModuleViewer module={rpscRajasthaniVocabulary} />;
}
