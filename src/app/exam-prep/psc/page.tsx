
'use client';

import { pscHindiProverbsAndSayings } from '@/lib/exam-data-psc';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function PscExamPrepPage() {
    return <ExamModuleViewer module={pscHindiProverbsAndSayings} />;
}
