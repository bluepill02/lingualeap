
'use client';

import { tnPscTetVocabulary } from '@/lib/exam-data-tet';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function TetExamPrepPage() {
    return <ExamModuleViewer module={tnPscTetVocabulary} />;
}
