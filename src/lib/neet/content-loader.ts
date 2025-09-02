
import { biologyAndHumanWelfare } from './biology/biology-and-human-welfare';
import { biotechnologyAndItsApplications } from './biology/biotechnology-and-its-applications';
import { cellStructureAndFunction } from './biology/cell-structure-and-function';
import { diversityInLivingWorld } from './biology/diversity-in-living-world';
import { ecologyAndEnvironment } from './biology/ecology-and-environment';
import { geneticsAndEvolution } from './biology/genetics-and-evolution';
import { humanPhysiology } from './biology/human-physiology';
import { plantPhysiology } from './biology/plant-physiology';
import { reproduction } from './biology/reproduction';
import { structuralOrganisationInAnimalsAndPlants } from './biology/structural-organisation-in-animals-and-plants';
import { pBlockElements } from './chemistry/p-block-elements';
import type { NeetModule } from '@/lib/types';

const neetContent: Record<string, Record<string, NeetModule>> = {
    biology: {
        'biology-and-human-welfare': biologyAndHumanWelfare,
        'biotechnology-and-its-applications': biotechnologyAndItsApplications,
        'cell-structure-and-function': cellStructureAndFunction,
        'diversity-in-living-world': diversityInLivingWorld,
        'ecology-and-environment': ecologyAndEnvironment,
        'genetics-and-evolution': geneticsAndEvolution,
        'human-physiology': humanPhysiology,
        'plant-physiology': plantPhysiology,
        'reproduction': reproduction,
        'structural-organisation-in-animals-and-plants': structuralOrganisationInAnimalsAndPlants,
    },
    chemistry: {
        'p-block-elements': pBlockElements,
    },
    physics: {
        // ... to be added
    },
};

export function getNeetChapterContent(subject: string, chapter: string): NeetModule | null {
    const slug = chapter.replace(/[\/:]/g, '').replace(/\s+/g, '-').toLowerCase();
    return neetContent[subject]?.[slug] || null;
}
