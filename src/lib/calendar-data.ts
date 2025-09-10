
'use client';
import type { CalendarEvent } from './types';

// This file is DEPRECATED and will be removed.
// Event data is now handled by the src/services/calendar.ts service.

export const events: CalendarEvent[] = [
  {
    id: 'event-1',
    title: 'Peer Study: NEET Physics Problem Solving',
    date: new Date(new Date().setDate(new Date().getDate() + 2)),
    type: 'peer-study',
    group: 'NEET Physics Problem Solvers',
    circleId: 'circle-1'
  },
  {
    id: 'event-2',
    title: 'Mentor Session: Doubt Clearing for Rotational Motion',
    date: new Date(new Date().setDate(new Date().getDate() + 2)),
    type: 'mentor-session',
    group: 'NEET Physics Problem Solvers',
    circleId: 'circle-1'
  },
  {
    id: 'event-3',
    title: 'Live Class: Mastering Hindi Tenses',
    date: new Date(),
    type: 'live-class',
    liveClassId: 'lc-1'
  },
  {
    id: 'event-4',
    title: 'Deadline: Submit Peer Teaching Mission',
    date: new Date(new Date().setDate(new Date().getDate() + 5)),
    type: 'deadline',
    missionId: 'newtons-third-law'
  },
  {
    id: 'event-5',
    title: 'Peer Review: Biology Diagrams',
    date: new Date(new Date().setDate(new Date().getDate() + 4)),
    type: 'peer-study',
    group: 'Biology Diagram Practice',
    circleId: 'circle-2'
  }
];
