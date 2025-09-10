
import { getTnpscModuleById } from '@/lib/exam-data-tnpsc';
import { notFound } from 'next/navigation';
import TnpscContentViewer from './client-page';
import type { TnpscModule } from '@/lib/exam-data-tnpsc';

export default async function TnpscModulePage({ params }: { params: { moduleId: string } }) {
  const module = getTnpscModuleById(params.moduleId) as TnpscModule | null;

  if (!module) {
    notFound();
  }

  return <TnpscContentViewer module={module} />;
}
