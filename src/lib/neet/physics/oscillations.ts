
import type { NeetModule } from '@/lib/types';
import { oscillationsAndWavesModule } from './oscillations-and-waves';

// This is a stub file. The content for Oscillations is combined with Waves in a single module.
export const oscillationsModule: NeetModule = {
    ...oscillationsAndWavesModule, // Copy all content from the combined module
    id: 'neet-physics-oscillations',
    title: 'Physics - Oscillations',
    chapter: 'Oscillations'
};
