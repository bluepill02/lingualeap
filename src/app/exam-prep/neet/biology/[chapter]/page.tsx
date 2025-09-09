
import { getNeetContent } from '@/lib/neet/content-loader';
import { notFound } from 'next/navigation';
import NeetChapterClientPage from './client-page';
import { NeetModule } from '@/lib/types';


export default async function NeetBiologyChapterPage({ params }: { params: { chapter: string } }) {
    const content = getNeetContent(params.chapter) as NeetModule | undefined;

    if (!content) {
        notFound();
    }
    
    return <NeetChapterClientPage content={content} />;
}
