
'use client';

import { gpscGujaratiProverbs } from '@/lib/exam-data-gpsc';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function GpscExamPrepPage() {
  return <ExamModuleViewer module={gpscGujaratiProverbs} />;
}
