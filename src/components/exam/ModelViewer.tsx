
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Orbit } from 'lucide-react';

export function ModelViewer() {
  return (
    <Card className="not-prose my-6 border-blue-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Orbit className="text-blue-500" />
          3D Atom Model (Placeholder)
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center h-48 bg-muted rounded-lg">
        <p className="text-muted-foreground">
          Interactive 3D model viewer would be displayed here.
        </p>
      </CardContent>
    </Card>
  );
}
