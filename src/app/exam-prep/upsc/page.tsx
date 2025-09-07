
'use client';

import { upscHindiIdiomsAndPhrases } from '@/lib/exam-data-upsc';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function UpscExamPrepPage() {
    return <ExamModuleViewer module={upscHindiIdiomsAndPhrases} />;
}
