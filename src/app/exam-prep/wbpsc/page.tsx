
'use client';

import { wbpscBengaliOneWord } from '@/lib/exam-data-wbpsc';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function WbpscExamPrepPage() {
    return <ExamModuleViewer module={wbpscBengaliOneWord} />;
}
