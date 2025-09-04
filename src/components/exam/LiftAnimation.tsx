
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown, Repeat } from 'lucide-react';
import { cn } from '@/lib/utils';

type LiftState = 'idle' | 'up' | 'down';

export function LiftAnimation() {
  const [liftState, setLiftState] = useState<LiftState>('idle');

  return (
    <div className="my-6 p-4 border rounded-lg bg-background overflow-hidden">
      <style jsx>{`
        .lift-shaft {
            position: relative;
            width: 120px;
            height: 200px;
            background: hsl(var(--muted) / 0.3);
            border: 2px solid hsl(var(--border));
            margin: 0 auto;
            overflow: hidden;
        }
        .lift-car {
            position: absolute;
            bottom: 10px;
            left: 10px;
            width: 100px;
            height: 80px;
            background: hsl(var(--secondary));
            border: 2px solid hsl(var(--primary));
            transition: transform 1.5s ease-in-out;
        }
        .person {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 20px;
            height: 40px;
            background: hsl(var(--destructive));
            border-radius: 10px 10px 0 0;
        }
        .scale {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 10px;
            background: hsl(var(--foreground));
            border-radius: 2px;
        }
        .dial {
            position: absolute;
            bottom: 5px;
            left: 25px;
            width: 2px;
            height: 12px;
            background: hsl(var(--primary));
            transform-origin: bottom center;
            transition: transform 0.5s ease-out;
        }
        
        .state-up .lift-car { transform: translateY(-100px); }
        .state-down .lift-car { transform: translateY(0); }
        .state-up .dial { transform: rotate(45deg); }
        .state-down .dial { transform: rotate(-45deg); }
        .state-idle .dial { transform: rotate(0deg); }

      `}</style>
      <div className={cn("lift-shaft", `state-${liftState}`)}>
        <div className="lift-car">
          <div className="scale">
            <div className="dial"></div>
          </div>
          <div className="person"></div>
        </div>
      </div>
       <div className="flex items-center justify-center gap-4 mt-4">
            <Button onClick={() => setLiftState('up')} size="sm">
                <ArrowUp className="mr-2" />
                Accelerate Up
            </Button>
             <Button onClick={() => setLiftState('down')} size="sm">
                <ArrowDown className="mr-2" />
                Accelerate Down
            </Button>
            <Button onClick={() => setLiftState('idle')} variant="outline" size="sm">
                <Repeat className="mr-2" />
                Reset
            </Button>
       </div>
       <p className="text-center text-sm text-muted-foreground mt-2">
        Observe the scale's dial (red person). Apparent weight increases when accelerating up and decreases when accelerating down.
      </p>
    </div>
  );
}
