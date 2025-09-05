
import type { NeetModule } from '@/lib/types';
import { oscillationsAndWavesModule } from './oscillations-and-waves';

// This is a stub file. The content for Waves is combined with Oscillations in a single module.
export const wavesModule: NeetModule = {
    ...oscillationsAndWavesModule, // Copy all content from the combined module
    id: 'neet-physics-waves',
    title: 'Physics - Waves',
    chapter: 'Waves'
};
