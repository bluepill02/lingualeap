
import { getNeetContent } from '@/lib/neet/content-loader';
import { notFound } from 'next/navigation';
import NeetChapterClientPage from '@/app/exam-prep/neet/physics/[chapter]/client-page';

export default async function NeetChemistryChapterPage({ params }: { params: { chapter: string } }) {
    const content = getNeetContent(params.chapter);

    if (!content) {
        notFound();
    }
    
    // Pass the entire module content to the client component
    // We can reuse the physics client page for now as the structure is identical
    return <NeetChapterClientPage content={content} />;
}
