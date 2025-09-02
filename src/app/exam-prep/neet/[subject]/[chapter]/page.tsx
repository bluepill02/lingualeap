
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { getNeetChapterContent } from '@/lib/neet/content-loader';
import { NeetChapterClientPage } from './client-page';
import type { NeetModule } from '@/lib/types';

export default function NeetChapterPage({ params }: { params: { subject: string; chapter: string } }) {
  const { subject, chapter } = params;
  
  const content = getNeetChapterContent(subject, chapter);
  
  if (!content) {
    notFound();
  }

  const title = chapter.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4 md:p-0">
       <header>
        <h1 className="text-4xl font-bold font-headline">{content.title}</h1>
        <p className="text-muted-foreground capitalize">
          NEET Preparation Module | {subject}
        </p>
      </header>
      
      <NeetChapterClientPage content={content} />
    </div>
  );
}

// Re-generate static pages for all chapters
export async function generateStaticParams() {
    const subjects = ['physics', 'chemistry', 'biology'];
    const paths: { subject: string; chapter: string }[] = [];
    
    // In a real app, we'd dynamically discover these from a manifest
    const chaptersBySubject: Record<string, string[]> = {
        physics: [
            'Physics and Measurement', 'Kinematics', 'Laws of Motion', 'Work, Energy, and Power', 
            'Rotational Motion', 'Gravitation', 'Properties of Solids and Liquids', 'Thermodynamics', 
            'Kinetic Theory of Gases', 'Oscillations and Waves', 'Electrostatics', 'Current Electricity',
            'Magnetic Effects of Current and Magnetism', 'Electromagnetic Induction and Alternating Currents',
            'Electromagnetic Waves', 'Optics', 'Dual Nature of Matter and Radiation', 'Atoms and Nuclei',
            'Electronic Devices', 'Experimental Skills'
        ],
        chemistry: [
            'Some Basic Concepts in Chemistry', 'Atomic Structure', 'Chemical Bonding and Molecular Structure',
            'Chemical Thermodynamics', 'Solutions', 'Equilibrium', 'Redox Reactions and Electrochemistry',
            'Chemical Kinetics', 'Classification of Elements and Periodicity in Properties',
            'p-Block Elements', 'd- and f-Block Elements', 'Coordination Compounds',
            'Purification and Characterisation of Organic Compounds', 'Some Basic Principles of Organic Chemistry',
            'Hydrocarbons', 'Organic Compounds Containing Halogens', 'Organic Compounds Containing Oxygen',
            'Organic Compounds Containing Nitrogen', 'Biomolecules', 'Principles Related to Practical Chemistry'
        ],
        biology: [
            'Diversity in Living World', 'Structural Organisation in Animals and Plants', 'Cell Structure and Function',
            'Plant Physiology', 'Human Physiology', 'Reproduction', 'Genetics and Evolution', 'Biology and Human Welfare',
            'Biotechnology and Its Applications', 'Ecology and Environment'
        ],
    };

    for (const subject of subjects) {
        const chapters = chaptersBySubject[subject];
        for (const chapter of chapters) {
            paths.push({
                subject: subject,
                chapter: chapter.replace(/[\/:]/g, '').replace(/\s+/g, '-').toLowerCase(),
            });
        }
    }

    return paths;
}
