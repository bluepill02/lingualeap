
'use server';

import { getCommunityModuleById } from '@/services/missions';
import { notFound } from 'next/navigation';
import { ExamModuleViewer } from '@/components/exam/exam-module-viewer';
import type { ExamModule } from '@/lib/types';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default async function CommunityModulePage({ params }: { params: { moduleId: string } }) {
  try {
    const module = await getCommunityModuleById(params.moduleId);

    if (!module) {
      notFound();
    }
    
    return <ExamModuleViewer module={module} />;

  } catch (error) {
    console.error(`Failed to load community module: ${params.moduleId}`, error);
    notFound();
  }
}
