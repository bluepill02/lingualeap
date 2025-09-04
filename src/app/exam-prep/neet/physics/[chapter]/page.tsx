
import { getNeetContent } from '@/lib/neet/content-loader';
import { notFound } from 'next/navigation';
import NeetChapterClientPage from './client-page';

export default async function NeetChapterPage({ params }: { params: { subject: string, chapter: string } }) {
    const content = getNeetContent(params.chapter);

    if (!content) {
        notFound();
    }
    
    // Pass the entire module content to the client component
    return <NeetChapterClientPage content={content} />;
}
