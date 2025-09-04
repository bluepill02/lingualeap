
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
  
  const showComponents = props.isAngled && props.forces.some(f => f.showComponents && f.direction === 'down');

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
        <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            <div className={cn("absolute w-full h-full border-2 border-dashed rounded-lg", props.isAngled && "-rotate-[30deg] bg-primary/5")}>
                {/* Dotted lines for components */}
                {showComponents && step > 0 && (
                    <>
                         <div className="absolute top-1/2 left-1/2 w-[60%] h-[1px] bg-border border-t border-dashed -translate-x-1/2 -translate-y-1/2 rotate-[60deg]" />
                         <div className="absolute top-1/2 left-1/2 w-[70%] h-[1px] bg-border border-t border-dashed -translate-x-1/2 -translate-y-1/2 rotate-[-30deg]" />
                    </>
                )}
            </div>
            <div className={cn("w-12 h-12 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold z-10", props.isAngled && "")}>
                {props.body.split(' ')[1] || 'm'}
            </div>
            
            {/* Force Vectors */}
            {props.forces.map((force, index) => (
                <div key={index} className={cn(
                    "absolute flex items-center transition-opacity duration-500 z-20",
                    step > index ? "opacity-100" : "opacity-0",
                    // Positioning classes
                    force.direction === 'up' && "bottom-full left-1/2 -translate-x-1/2",
                    force.direction === 'down' && "top-full left-1/2 -translate-x-1/2",
                    force.direction === 'left' && "right-full top-1/2 -translate-y-1/2",
                    force.direction === 'right' && "left-full top-1/2 -translate-y-1/2",
                    force.direction === 'up-left' && "bottom-1/2 right-1/2",
                    force.direction === 'up-right' && "bottom-1/2 left-1/2",
                    force.direction === 'down-left' && "top-1/2 right-1/2",
                    force.direction === 'down-right' && "top-1/2 left-1/2",
                    force.direction === 'inward' && "right-1/2 top-1/2 -translate-y-1/2",
                )}>
                    <div className={cn("flex items-center text-sm font-semibold", getArrowRotation(force.direction))}>
                       <span className="mr-1">{force.name}</span>
                       <ArrowRight className="w-5 h-5 text-destructive" />
                    </div>
                </div>
            ))}

            {/* Component Labels */}
            {showComponents && step > 0 && (
                 <>
                    <div className="absolute text-xs font-mono top-[75%] left-[10%] -rotate-[30deg] text-muted-foreground opacity-70">mg sinθ</div>
                    <div className="absolute text-xs font-mono top-[60%] left-[65%] -rotate-[30deg] text-muted-foreground opacity-70">mg cosθ</div>
                 </>
            )}

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
