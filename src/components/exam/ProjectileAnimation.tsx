
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Play, Repeat } from 'lucide-react';

export function ProjectileAnimation() {
  const [angle, setAngle] = useState(45);
  const [velocity, setVelocity] = useState(25);
  const [isAnimating, setIsAnimating] = useState(false);
  const [path, setPath] = useState('');
  const g = 9.8;

  const calculatePath = () => {
    const angleRad = angle * (Math.PI / 180);
    const range = (velocity * velocity * Math.sin(2 * angleRad)) / g;
    const maxHeight = (velocity * velocity * Math.pow(Math.sin(angleRad), 2)) / (2 * g);

    // Scale the path for a 300x150 SVG box
    const scaleX = 300 / range;
    const scaleY = 150 / maxHeight;
    const scale = Math.min(scaleX, scaleY) * 0.9;
    
    let d = 'M 0 150';
    for (let t = 0; ; t += 0.1) {
      const x = velocity * Math.cos(angleRad) * t;
      const y = velocity * Math.sin(angleRad) * t - 0.5 * g * t * t;
      if (y < 0) break;
      d += ` L ${x * scale} ${150 - y * scale}`;
    }
    return d;
  };
  
  useEffect(() => {
    if (!isAnimating) {
        setPath(calculatePath());
    }
  }, [angle, velocity, isAnimating])

  const handleAnimate = () => {
    setIsAnimating(true);
    // After animation duration, reset the state
    setTimeout(() => setIsAnimating(false), 2000);
  };
  
  const handleReset = () => {
    setIsAnimating(false);
  }

  return (
    <div className="my-6 p-4 border rounded-lg bg-background overflow-hidden">
      <style jsx>{`
        .projectile-path {
          stroke: hsl(var(--primary));
          stroke-width: 2px;
          fill: none;
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        .animate .projectile-path {
          animation: draw-path 2s ease-out forwards;
        }
        @keyframes draw-path {
          to {
            stroke-dashoffset: 0;
          }
        }
        .ball {
            fill: hsl(var(--accent));
            offset-path: path('${path}');
            offset-rotate: 0deg;
        }
        .animate .ball {
            animation: move-ball 2s ease-out forwards;
        }
        @keyframes move-ball {
            from { offset-distance: 0%; }
            to { offset-distance: 100%; }
        }
      `}</style>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="angle-slider">Angle: {angle}°</Label>
          <Slider
            id="angle-slider"
            min={1}
            max={90}
            step={1}
            value={[angle]}
            onValueChange={(val) => setAngle(val[0])}
            disabled={isAnimating}
          />
        </div>
        <div>
          <Label htmlFor="velocity-slider">Velocity: {velocity} m/s</Label>
          <Slider
            id="velocity-slider"
            min={10}
            max={50}
            step={1}
            value={[velocity]}
            onValueChange={(val) => setVelocity(val[0])}
            disabled={isAnimating}
          />
        </div>
      </div>

      <div className="bg-muted p-2 rounded-md">
        <svg viewBox="0 0 300 150" className="w-full h-auto">
            <path d={path} className="projectile-path" style={{ strokeDasharray: 1000, strokeDashoffset: isAnimating ? 1000: 0 }}/>
            <path d={path} className={isAnimating ? 'animate' : ''} >
                <circle r="4" className={`ball ${isAnimating ? 'animate' : ''}`} />
            </path>
            <line x1="0" y1="150" x2="300" y2="150" stroke="hsl(var(--foreground) / 0.5)" />
            <line x1="0" y1="0" x2="0" y2="150" stroke="hsl(var(--foreground) / 0.5)" />
        </svg>
      </div>

      <div className="flex items-center justify-center gap-4 mt-4">
        <Button onClick={handleAnimate} disabled={isAnimating}>
          <Play className="mr-2" />
          Launch
        </Button>
        <Button onClick={handleReset} variant="outline">
          <Repeat className="mr-2" />
          Reset
        </Button>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-2">
        Adjust the angle and velocity to see how they affect the projectile's trajectory. Launch to see the animation.
      </p>
    </div>
  );
}
