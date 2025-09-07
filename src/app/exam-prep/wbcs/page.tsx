
'use client';

import { wbcsBengaliSynonymsAntonyms } from '@/lib/exam-data-wbcs';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function WbcsExamPrepPage() {
    return <ExamModuleViewer module={wbcsBengaliSynonymsAntonyms} />;
}
