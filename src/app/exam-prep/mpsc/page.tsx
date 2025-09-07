
'use client';

import { mpscMarathiIdioms } from '@/lib/exam-data-mpsc';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function MpscExamPrepPage() {
  return <ExamModuleViewer module={mpscMarathiIdioms} />;
}
