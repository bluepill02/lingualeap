
import { getNeetContent } from '@/lib/neet/content-loader';
import { notFound } from 'next/navigation';
import NeetChapterClientPage from './client-page';
import { NeetModule } from '@/lib/types';


export default async function NeetChemistryChapterPage({ params }: { params: { chapter: string } }) {
    try {
        const content = getNeetContent(params.chapter);

        if (!content) {
            notFound();
        }
        
        // Pass the entire module content to the client component
        return <NeetChapterClientPage content={content} />;
    } catch (error) {
        console.error(`Failed to load content for chapter: ${params.chapter}`, error);
        notFound();
    }
}
