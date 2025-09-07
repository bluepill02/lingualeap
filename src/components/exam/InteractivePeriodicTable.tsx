
'use client';

import { useState } from 'react';
import { periodicTableData, ElementData } from '@/lib/periodic-table-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Scale, Atom, Thermometer, Zap } from 'lucide-react';
import { BilingualText } from './bilingual-text';

type Property = 'atomicRadius' | 'electronegativity' | 'ionizationEnergy';

const propertyConfig = {
  atomicRadius: { label: 'Atomic Radius (pm)', labelTamil: 'அணு ஆரம் (pm)', min: 31, max: 265 },
  electronegativity: { label: 'Electronegativity (Pauling)', labelTamil: 'எலக்ட்ரான் கவர்தன்மை', min: 0.79, max: 3.98 },
  ionizationEnergy: { label: 'Ionization Energy (kJ/mol)', labelTamil: 'அயனியாக்கும் ஆற்றல் (kJ/mol)', min: 375, max: 2372 },
};

const categoryColors: Record<ElementData['category'], string> = {
    'alkali-metal': 'bg-red-500/80',
    'alkaline-earth-metal': 'bg-orange-500/80',
    'lanthanide': 'bg-yellow-400/80',
    'actinide': 'bg-yellow-500/80',
    'transition-metal': 'bg-yellow-600/80',
    'post-transition-metal': 'bg-green-500/80',
    'metalloid': 'bg-teal-500/80',
    'reactive-nonmetal': 'bg-blue-500/80',
    'noble-gas': 'bg-purple-500/80'
};

const getColorForValue = (value: number | null, property: Property) => {
    if (value === null) return 'bg-muted';
    const { min, max } = propertyConfig[property];
    const percentage = (value - min) / (max - min);

    // Using HSL color space for a smooth gradient.
    // Low values are greenish (HSL hue 120), high values are reddish (HSL hue 0).
    const hue = 120 - (percentage * 120);
    return `hsl(${hue}, 80%, 60%)`;
}


export function InteractivePeriodicTable() {
    const [selectedProperty, setSelectedProperty] = useState<Property>('atomicRadius');
    const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);
    const [language, setLanguage] = useState<'english' | 'tamil'>('english');
    const [showHeatmap, setShowHeatmap] = useState(true);

    const gridCells: (ElementData | null)[][] = Array.from({ length: 7 }, () => Array(18).fill(null));

    periodicTableData.forEach(el => {
        gridCells[el.period - 1][el.group - 1] = el;
    });

    // Manual placement for Lanthanides and Actinides (placeholders)
    const lanthanidesStart = { group: 3, period: 6 };
    const actinidesStart = { group: 3, period: 7 };


    return (
        <Card className="not-prose my-6">
            <CardHeader className="card-padding-lg">
                <CardTitle className="flex items-center gap-2">Interactive Periodic Table</CardTitle>
                <CardDescription>Visualize trends and understand the 'why' behind element properties.</CardDescription>
            </CardHeader>
            <CardContent className="card-padding-lg space-y-4">
                 <div className="flex flex-wrap gap-4 items-center justify-between p-4 bg-muted rounded-lg">
                    <RadioGroup defaultValue={selectedProperty} onValueChange={(v) => setSelectedProperty(v as Property)} className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                           <RadioGroupItem value="atomicRadius" id="r1" />
                           <Label htmlFor="r1">Atomic Radius</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                           <RadioGroupItem value="electronegativity" id="r2" />
                           <Label htmlFor="r2">Electronegativity</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                           <RadioGroupItem value="ionizationEnergy" id="r3" />
                           <Label htmlFor="r3">Ionization Energy</Label>
                        </div>
                    </RadioGroup>
                    <div className="flex items-center space-x-2">
                        <Button variant={showHeatmap ? 'secondary' : 'outline'} size="sm" onClick={() => setShowHeatmap(true)}>Heatmap</Button>
                        <Button variant={!showHeatmap ? 'secondary' : 'outline'} size="sm" onClick={() => setShowHeatmap(false)}>Categories</Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', gap: '4px' }} className="min-w-[800px]">
                        {gridCells.flat().map((el, index) => {
                            if (!el) {
                                // Use a unique key for empty placeholders
                                const row = Math.floor(index / 18);
                                const col = index % 18;
                                return <div key={`empty-${row}-${col}`} className="hidden md:block"></div>;
                            }
                            
                            const value = el.properties[selectedProperty]?.value ?? null;
                            const bgColor = showHeatmap ? getColorForValue(value, selectedProperty) : categoryColors[el.category];
                            
                            return (
                                <button 
                                    key={el.atomicNumber}
                                    onClick={() => setSelectedElement(el)}
                                    className={cn("h-16 w-full flex flex-col items-center justify-center rounded-md p-1 border text-xs transition-transform hover:scale-105 hover:z-10", !showHeatmap && 'text-white font-bold')}
                                    style={{ 
                                        gridColumnStart: el.group, 
                                        gridRowStart: el.period,
                                        backgroundColor: bgColor,
                                    }}
                                >
                                    <div className="font-bold text-base">{el.symbol}</div>
                                    <div>{el.atomicNumber}</div>
                                    <div className="truncate text-[10px]">{el.name}</div>
                                </button>
                            );
                        })}
                    </div>
                </div>
                 <div className="flex flex-wrap gap-2 mt-4 text-xs">
                    {Object.entries(categoryColors).map(([key, color]) => (
                        <div key={key} className="flex items-center gap-1.5">
                            <div className={cn("w-3 h-3 rounded-sm", color)}></div>
                            <span className="capitalize">{key.replace(/-/g, ' ')}</span>
                        </div>
                    ))}
                </div>

            </CardContent>

            {selectedElement && (
                 <Dialog open={!!selectedElement} onOpenChange={(isOpen) => !isOpen && setSelectedElement(null)}>
                    <DialogContent className="max-w-md">
                        <DialogHeader>
                            <DialogTitle className="text-3xl font-bold flex items-center justify-between">
                                <span>{selectedElement.atomicNumber}. {selectedElement.name} ({selectedElement.symbol})</span>
                                <span className={cn('px-2 py-1 rounded-md text-sm', categoryColors[selectedElement.category], 'text-white')}>{selectedElement.category.replace(/-/g, ' ')}</span>
                            </DialogTitle>
                            <DialogDescription>
                               <BilingualText english={selectedElement.name} tamil={selectedElement.nameTamil}/>
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                             <div className="flex justify-end">
                                <div className="flex bg-muted rounded-lg p-1">
                                    <Button size="sm" variant={language === 'english' ? 'secondary' : 'ghost'} onClick={() => setLanguage('english')}>EN</Button>
                                    <Button size="sm" variant={language === 'tamil' ? 'secondary' : 'ghost'} onClick={() => setLanguage('tamil')}>தமிழ்</Button>
                                </div>
                            </div>
                            <Card>
                                <CardHeader className="flex-row items-center gap-2 space-y-0 p-3">
                                    <Scale className="w-5 h-5 text-primary"/>
                                    <h4 className="font-semibold">Atomic Radius</h4>
                                </CardHeader>
                                <CardContent className="p-3 pt-0">
                                    <p className="text-lg font-bold">{selectedElement.properties.atomicRadius.value} pm</p>
                                    <p className="text-sm text-muted-foreground">{language === 'english' ? selectedElement.properties.atomicRadius.explanation : selectedElement.properties.atomicRadius.explanationTamil}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex-row items-center gap-2 space-y-0 p-3">
                                    <Zap className="w-5 h-5 text-yellow-500"/>
                                    <h4 className="font-semibold">Electronegativity</h4>
                                </CardHeader>
                                <CardContent className="p-3 pt-0">
                                    <p className="text-lg font-bold">{selectedElement.properties.electronegativity.value ?? 'N/A'}</p>
                                     <p className="text-sm text-muted-foreground">{language === 'english' ? selectedElement.properties.electronegativity.explanation : selectedElement.properties.electronegativity.explanationTamil}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex-row items-center gap-2 space-y-0 p-3">
                                    <Atom className="w-5 h-5 text-green-500"/>
                                    <h4 className="font-semibold">Ionization Energy</h4>
                                </CardHeader>
                                <CardContent className="p-3 pt-0">
                                    <p className="text-lg font-bold">{selectedElement.properties.ionizationEnergy.value} kJ/mol</p>
                                     <p className="text-sm text-muted-foreground">{language === 'english' ? selectedElement.properties.ionizationEnergy.explanation : selectedElement.properties.ionizationEnergy.explanationTamil}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </DialogContent>
                 </Dialog>
            )}

        </Card>
    )
}
