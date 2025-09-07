
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Label } from '../ui/label';
import { Zap } from 'lucide-react';

export function LabSimulator() {
  const [resistance, setResistance] = useState(10);
  const [voltage, setVoltage] = useState(5);
  const current = (voltage / resistance).toFixed(2);

  return (
    <Card className="not-prose my-6 border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="text-primary" />
          Ohm's Law Virtual Lab
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="voltage-slider">Voltage (V): {voltage}V</Label>
            <Slider
              id="voltage-slider"
              min={1}
              max={20}
              step={1}
              value={[voltage]}
              onValueChange={(val) => setVoltage(val[0])}
            />
          </div>
          <div>
            <Label htmlFor="resistance-slider">Resistance (Ω): {resistance}Ω</Label>
            <Slider
              id="resistance-slider"
              min={1}
              max={100}
              step={1}
              value={[resistance]}
              onValueChange={(val) => setResistance(val[0])}
            />
          </div>
        </div>
        <div className="p-4 bg-muted rounded-lg text-center">
          <p className="text-lg font-semibold">Calculated Current (I):</p>
          <p className="text-3xl font-bold text-primary">{current} A</p>
          <p className="text-xs text-muted-foreground mt-1">Based on Ohm's Law (I = V / R)</p>
        </div>
      </CardContent>
    </Card>
  );
}
