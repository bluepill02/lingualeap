
'use client';

import * as React from 'react';

export function ConfettiBurst() {
  return (
    <div className="confetti">
        {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="confetti-piece"></div>
        ))}
    </div>
  );
}
