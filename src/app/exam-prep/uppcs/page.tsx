
'use client';

import { uppcsHindiLetterWriting } from '@/lib/exam-data-uppcs';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function UppcsExamPrepPage() {
    return <ExamModuleViewer module={uppcsHindiLetterWriting} />;
}
