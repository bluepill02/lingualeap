
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Repeat } from 'lucide-react';
import { cn } from '@/lib/utils';

export function InertiaAnimation() {
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
        .car-body {
            position: relative;
            width: 100px;
            height: 40px;
            background: hsl(var(--primary));
            border-radius: 10px 10px 0 0;
            margin-top: -10px;
        }
        .car-body::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 15px;
            width: 70px;
            height: 25px;
            background: hsl(var(--background));
            border-radius: 5px;
        }
        .wheel {
            position: absolute;
            bottom: -10px;
            width: 20px;
            height: 20px;
            background: hsl(var(--secondary));
            border-radius: 50%;
            border: 2px solid hsl(var(--foreground));
        }
        .front-wheel { left: 10px; }
        .back-wheel { right: 10px; }
        .passenger {
            position: absolute;
            left: 55px;
            bottom: 5px;
            width: 15px;
            height: 20px;
            background: hsl(var(--destructive));
            border-radius: 50% 50% 0 0;
            transform-origin: bottom center;
        }
        
        .animate .car {
            animation: moveCar 3s ease-in-out forwards;
        }
        .animate .passenger {
            animation: lagPassenger 3s ease-in-out forwards;
        }

        @keyframes moveCar {
            0% { transform: translateX(0); }
            100% { transform: translateX(200px); }
        }
        @keyframes lagPassenger {
            0% { transform: translateX(0) rotate(0); }
            10% { transform: translateX(-15px) rotate(-15deg); }
            20% { transform: translateX(0) rotate(0); }
            100% { transform: translateX(0) rotate(0); }
        }
      `}</style>
      <div className="relative h-24">
        <div className={cn("absolute bottom-5 left-5", isAnimating && 'animate')}>
          <div className="car relative">
            <div className="car-body"></div>
            <div className="wheel front-wheel"></div>
            <div className="wheel back-wheel"></div>
            <div className="passenger"></div>
          </div>
        </div>
      </div>
       <div className="flex items-center justify-center gap-4 mt-2">
            <Button onClick={handleAnimate} disabled={isAnimating}>
                <Play className="mr-2" />
                Start Animation
            </Button>
            <Button onClick={handleReset} variant="outline">
                <Repeat className="mr-2" />
                Reset
            </Button>
       </div>
       <p className="text-center text-sm text-muted-foreground mt-2">
        Watch how the passenger (red) appears to be pushed back as the car (blue) accelerates forward. This is inertia!
      </p>
    </div>
  );
}

