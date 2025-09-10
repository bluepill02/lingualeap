
'use client';

import { sscCglHindiContent } from '@/lib/exam-data';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function SscCglExamPrepPage() {
    return <ExamModuleViewer module={sscCglHindiContent} />;
}
