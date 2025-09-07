
'use client';

import { bpscHindiModernHistory } from '@/lib/exam-data-bpsc';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function BpscExamPrepPage() {
  return <ExamModuleViewer module={bpscHindiModernHistory} />;
}
