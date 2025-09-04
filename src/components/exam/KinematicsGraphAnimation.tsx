
'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Play, Pause, Repeat } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

type MotionType = 'uniform' | 'accelerated' | 'decelerated';

const generateData = (type: MotionType) => {
  const data = [];
  const u = type === 'uniform' ? 5 : (type === 'accelerated' ? 0 : 10);
  const a = type === 'uniform' ? 0 : (type === 'accelerated' ? 2 : -2);
  
  for (let t = 0; t <= 10; t++) {
    const s = u * t + 0.5 * a * t * t;
    const v = u + a * t;
    data.push({ time: t, position: s, velocity: v, acceleration: a });
  }
  return data;
};

export function KinematicsGraphAnimation() {
  const [motionType, setMotionType] = useState<MotionType>('accelerated');
  const [data, setData] = useState(generateData('accelerated'));
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setData(generateData(motionType));
    setProgress(0);
    setIsPlaying(false);
  }, [motionType]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && progress < 10) {
      timer = setTimeout(() => setProgress(progress + 1), 500);
    } else if (progress >= 10) {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, progress]);

  const handlePlayPause = () => {
      if(progress >= 10) {
          setProgress(0);
      }
      setIsPlaying(!isPlaying);
  }

  const handleReset = () => {
    setProgress(0);
    setIsPlaying(false);
  }

  return (
    <div className="my-6 p-4 border rounded-lg bg-background overflow-hidden not-prose">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 items-center">
        <div>
          <Label htmlFor="motion-type-select">Select Motion Type</Label>
          <Select onValueChange={(value: MotionType) => setMotionType(value)} defaultValue="accelerated">
            <SelectTrigger id="motion-type-select">
              <SelectValue placeholder="Select a motion type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uniform">Uniform Velocity</SelectItem>
              <SelectItem value="accelerated">Uniform Acceleration</SelectItem>
              <SelectItem value="decelerated">Uniform Deceleration</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2 justify-center">
            <Button onClick={handlePlayPause}>
                {isPlaying ? <Pause className="mr-2"/> : <Play className="mr-2"/>}
                {isPlaying ? 'Pause' : (progress >= 10 ? 'Replay' : 'Play')}
            </Button>
            <Button onClick={handleReset} variant="outline">
                <Repeat className="mr-2"/>
                Reset
            </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[600px] lg:h-[250px]">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottom', offset: -5 }}/>
            <YAxis label={{ value: 'Position (m)', angle: -90, position: 'insideLeft' }}/>
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="position" stroke="hsl(var(--primary))" dot={false} />
            {isPlaying && <ReferenceLine x={progress} stroke="hsl(var(--destructive))" />}
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottom', offset: -5 }}/>
            <YAxis label={{ value: 'Velocity (m/s)', angle: -90, position: 'insideLeft' }}/>
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="velocity" stroke="hsl(var(--accent))" dot={false} />
            {isPlaying && <ReferenceLine x={progress} stroke="hsl(var(--destructive))" />}
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottom', offset: -5 }}/>
            <YAxis domain={[-4, 4]} label={{ value: 'Accel (m/s²)', angle: -90, position: 'insideLeft' }}/>
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="acceleration" stroke="hsl(var(--success))" dot={false} />
            {isPlaying && <ReferenceLine x={progress} stroke="hsl(var(--destructive))" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Observe how the slope of the position graph gives the velocity, and the slope of the velocity graph gives the acceleration.
      </p>
    </div>
  );
}


    