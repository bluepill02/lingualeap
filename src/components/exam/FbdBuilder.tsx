
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';
import type { FBDstep } from '@/lib/types';
import { cn } from '@/lib/utils';


export function FbdBuilder(props: FBDstep) {
  const [step, setStep] = useState(0);
  const totalForces = props.forces.length;

  const getArrowRotation = (direction: FBDstep['forces'][0]['direction']) => {
    switch (direction) {
      case 'up': return '-rotate-90';
      case 'down': return 'rotate-90';
      case 'left': return 'rotate-180';
      case 'up-left': return '-rotate-[135deg]';
      case 'up-right': return '-rotate-45';
      case 'down-left': return 'rotate-[135deg]';
      case 'down-right': return 'rotate-45';
      case 'inward': return 'rotate-180';
      case 'outward': return 'rotate-0';
      default: return 'rotate-0'; // right
    }
  }

  const handleNext = () => {
    if (step < totalForces) {
      setStep(step + 1);
    }
  }

  const handleReset = () => {
    setStep(0);
  }

  return (
    <Card className="bg-muted/50">
      <CardHeader>
        <CardTitle>Guided FBD Builder: {props.body}</CardTitle>
        <CardDescription>
          Let's build the Free-Body Diagram step-by-step. Current Step: {step > totalForces ? "Complete" : step} / {totalForces}
          {props.context && <p className="text-xs italic mt-1">{props.context}</p>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className={cn("relative w-48 h-48 mx-auto border-2 border-dashed rounded-lg flex items-center justify-center", props.isAngled && "-rotate-[30deg] bg-primary/5")}>
            <div className={cn("w-12 h-12 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold", props.isAngled && "rotate-[30deg]")}>
                {props.body.split(' ')[1] || 'm'}
            </div>
            {props.forces.map((force, index) => (
                <div key={index} className={cn(
                    "absolute flex items-center transition-opacity duration-500",
                    step > index ? "opacity-100" : "opacity-0",
                    // Positioning classes
                    force.direction.includes('up') && "bottom-1/2",
                    force.direction.includes('down') && "top-1/2",
                    force.direction.includes('left') && "right-1/2",
                    force.direction.includes('right') && "left-1/2",
                    force.direction === 'up' && "bottom-full left-1/2 -translate-x-1/2",
                    force.direction === 'down' && "top-full left-1/2 -translate-x-1/2",
                    force.direction === 'left' && "right-full top-1/2 -translate-y-1/2",
                    force.direction === 'right' && "left-full top-1/2 -translate-y-1/2",
                    force.direction === 'inward' && "right-1/2 top-1/2 -translate-y-1/2",
                )}>
                    <div className={cn("flex items-center text-sm font-semibold", getArrowRotation(force.direction))}>
                       <span className={cn("mr-1", props.isAngled && "rotate-[30deg]")}>{force.name}</span>
                       <ArrowRight className="w-5 h-5 text-destructive" />
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-4 flex justify-center items-center gap-4">
          {step <= totalForces ? (
              <Button onClick={handleNext} disabled={step === totalForces}>
                {step === totalForces ? <>Complete <CheckCircle className="ml-2"/></> : <>Next Force <ArrowRight className="ml-2" /></>}
              </Button>
          ) : (
            <Button onClick={handleReset} variant="outline">
              Reset Diagram <RefreshCw className="ml-2"/>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
