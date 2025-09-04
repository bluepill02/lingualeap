
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Repeat } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ActionReactionAnimation() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAnimate = () => {
    setIsAnimating(false);
    setTimeout(() => {
        setIsAnimating(true);
    }, 10);
  };
  
  const handleReset = () => {
      setIsAnimating(false);
  }

  return (
    <div className="my-6 p-4 border rounded-lg bg-background overflow-hidden">
      <style jsx>{`
        .astronaut {
            position: absolute;
            width: 40px;
            height: 60px;
            background: hsl(var(--primary) / 0.8);
            border-radius: 20px 20px 5px 5px;
            border: 2px solid hsl(var(--foreground));
        }
        .astronaut::before { /* Helmet */
            content: '';
            position: absolute;
            top: 5px;
            left: 50%;
            transform: translateX(-50%);
            width: 30px;
            height: 30px;
            background: hsl(var(--background));
            border-radius: 50%;
        }
        .astronaut-a { top: 50%; left: 35%; transform: translateY(-50%); }
        .astronaut-b { top: 50%; left: 55%; transform: translateY(-50%); }
        .force-vector {
            position: absolute;
            top: 50%;
            height: 2px;
            background: hsl(var(--destructive));
            opacity: 0;
            transform-origin: left center;
        }
        .force-vector::after { /* Arrowhead */
            content: '';
            position: absolute;
            right: -2px;
            top: -4px;
            border-style: solid;
            border-width: 5px 0 5px 10px;
            border-color: transparent transparent transparent hsl(var(--destructive));
        }
        
        .animate .astronaut-a { animation: moveA 2s ease-out forwards; }
        .animate .astronaut-b { animation: moveB 2s ease-out forwards; }
        .animate .force-vector { animation: showForce 1s ease-out forwards; }
        .animate .force-on-b { left: calc(55% + 40px); }
        .animate .force-on-a { left: 35%; transform: rotate(180deg); }


        @keyframes moveA {
            0% { transform: translate(0, -50%); }
            100% { transform: translate(-100px, -50%); }
        }
        @keyframes moveB {
            0% { transform: translate(0, -50%); }
            100% { transform: translate(100px, -50%); }
        }
        @keyframes showForce {
            0% { width: 0; opacity: 0; }
            50% { width: 50px; opacity: 1; }
            100% { width: 50px; opacity: 0; }
        }
      `}</style>
      <div className={cn("relative h-24", isAnimating && 'animate')}>
        <div className="astronaut astronaut-a"></div>
        <div className="astronaut astronaut-b"></div>
        <div className="force-vector force-on-b"><span className="absolute -top-5 right-0 text-xs">F_AB</span></div>
        <div className="force-vector force-on-a"><span className="absolute -top-5 right-0 text-xs">F_BA</span></div>
      </div>
       <div className="flex items-center justify-center gap-4 mt-2">
            <Button onClick={handleAnimate} disabled={isAnimating}>
                <Play className="mr-2" />
                Push Apart
            </Button>
            <Button onClick={handleReset} variant="outline">
                <Repeat className="mr-2" />
                Reset
            </Button>
       </div>
       <p className="text-center text-sm text-muted-foreground mt-2">
        Watch as Astronaut A pushes B. Both move apart, demonstrating that forces occur in equal and opposite pairs on different bodies.
      </p>
    </div>
  );
}
