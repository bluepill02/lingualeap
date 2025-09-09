
import { getNeetContent } from '@/lib/neet/content-loader';
import { notFound } from 'next/navigation';
import NeetChapterClientPage from './client-page';
import { NeetModule } from '@/lib/types';
import { takeItEasyBiologyModule } from '@/lib/neet/biology/take-it-easy';


export default async function NeetBiologyChapterPage({ params }: { params: { chapter: string } }) {
    let content: NeetModule | undefined;

    if (params.chapter === 'take-it-easy') {
        content = takeItEasyBiologyModule;
    } else {
        content = getNeetContent(params.chapter) as NeetModule | undefined;
    }

    if (!content) {
        notFound();
    }
    
    return <NeetChapterClientPage content={content} />;
}
