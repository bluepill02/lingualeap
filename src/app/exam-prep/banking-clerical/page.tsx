
'use client';

import { gujaratiBankingProverbs } from '@/lib/exam-data-banking-gujarati';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';

export default function BankingClericalExamPrepPage() {
  return <ExamModuleViewer module={gujaratiBankingProverbs} />;
}
