
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Repeat } from 'lucide-react';
import { cn } from '@/lib/utils';

export function IceSkaterAnimation() {
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
        .skater {
            position: absolute;
            bottom: 50%;
            left: 50%;
            width: 10px;
            height: 40px;
            background: hsl(var(--primary));
            border-radius: 5px;
            transform-origin: bottom center;
        }
        .skater::before { /* Head */
            content: '';
            position: absolute;
            top: -10px;
            left: -5px;
            width: 20px;
            height: 20px;
            background: hsl(var(--destructive));
            border-radius: 50%;
        }
        .arms {
            position: absolute;
            top: 5px;
            left: -15px;
            width: 40px;
            height: 5px;
            background: hsl(var(--primary));
            transition: transform 0.5s ease-in-out;
        }
        
        .animate .skater {
            animation: spin 2s linear infinite;
        }
        .animate .arms-out {
            transform: scaleX(1);
        }
        .animate .arms-in {
             transform: scaleX(0.2);
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
      `}</style>
      <div className="relative h-32">
        <div className={cn("skater-container", isAnimating && 'animate')}>
             <div className="skater" style={{ animationPlayState: isAnimating ? 'running' : 'paused' }}>
                <div className={cn("arms", isAnimating ? 'arms-out' : 'arms-in')} />
            </div>
        </div>
      </div>
       <div className="flex items-center justify-center gap-4 mt-2">
            <Button onClick={handleAnimate} disabled={isAnimating}>
                <Play className="mr-2" />
                Spin (Arms Out)
            </Button>
            <Button onClick={handleReset} variant="outline">
                <Repeat className="mr-2" />
                Stop (Arms In)
            </Button>
       </div>
       <p className="text-center text-sm text-muted-foreground mt-2">
        When the skater pulls their arms in (Stop), their rotational speed increases due to conservation of angular momentum.
      </p>
    </div>
  );
}
