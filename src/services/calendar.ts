
'use server';

import { db } from '@/lib/firebase';
import { 
    collection, 
    getDocs, 
    query, 
    where,
    Timestamp,
    writeBatch
} from 'firebase/firestore';
import { Users, User, Video, Flag } from 'lucide-react';
import type { CalendarEvent } from '@/lib/types';

// Mock data to seed the database
const seedEvents: Omit<CalendarEvent, 'id' | 'date'>[] = [
  {
    title: 'Peer Study: NEET Physics Problem Solving',
    type: 'peer-study',
    group: 'NEET Physics Problem Solvers',
    circleId: 'circle-1',
    userIds: ['user-1', 'user-2', 'user-4']
  },
  {
    title: 'Mentor Session: Doubt Clearing for Rotational Motion',
    type: 'mentor-session',
    group: 'NEET Physics Problem Solvers',
    circleId: 'circle-1',
    userIds: ['user-1', 'user-2', 'user-4']
  },
  {
    title: 'Live Class: Mastering Hindi Tenses',
    type: 'live-class',
    liveClassId: 'lc-1',
    userIds: ['user-1', 'user-2', 'user-3', 'user-4'] // Example: all users get this
  },
  {
    title: 'Deadline: Submit Peer Teaching Mission',
    type: 'deadline',
    missionId: 'newtons-third-law',
    userIds: ['user-1'] // Example: only for user-1
  },
  {
    title: 'Peer Review: Biology Diagrams',
    type: 'peer-study',
    group: 'Biology Diagram Practice',
    circleId: 'circle-2',
    userIds: ['user-3', 'user-5', 'user-6', 'user-7']
  }
];

// Helper to get a date relative to today
const getDate = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d;
}

export async function seedCalendarEvents() {
    const eventsCollection = collection(db, 'events');
    const snapshot = await getDocs(eventsCollection);

    if (!snapshot.empty) {
        console.log('Calendar events already seeded.');
        return;
    }
    
    console.log('Seeding calendar events...');
    const batch = writeBatch(db);
    const dateMap = [2, 2, 0, 5, 4]; // Corresponding date offsets for seedEvents

    seedEvents.forEach((eventData, index) => {
        const eventRef = collection(db, 'events').doc();
        const eventWithDate = {
            ...eventData,
            date: Timestamp.fromDate(getDate(dateMap[index]))
        }
        batch.set(eventRef, eventWithDate);
    });

    await batch.commit();
    console.log('Successfully seeded calendar events.');
}


export async function getEventsForUser(userId: string): Promise<CalendarEvent[]> {
  try {
    const eventsRef = collection(db, 'events');
    // Seed data if the collection is empty for the first time
    const checkSnapshot = await getDocs(query(eventsRef, where('userIds', 'array-contains', 'user-1'))); // Check with a known user
    if (checkSnapshot.empty) {
        await seedCalendarEvents();
    }

    const q = query(eventsRef, where('userIds', 'array-contains', userId));
    const snapshot = await getDocs(q);

    return snapshot.docs.map(doc => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        date: (data.date as Timestamp).toDate(),
      } as CalendarEvent;
    });

  } catch (error) {
    console.error("Error fetching events for user:", error);
    return [];
  }
}

export const eventTypeConfig = {
    'peer-study': {
        icon: Users,
        color: 'bg-green-500',
        label: 'Peer Study Group',
        action: 'View Details',
    },
    'mentor-session': {
        icon: User,
        color: 'bg-blue-500',
        label: 'Mentor Session',
        action: 'View Details',
    },
    'live-class': {
        icon: Video,
        color: 'bg-purple-500',
        label: 'Live Class',
        action: 'Join Now',
    },
    'deadline': {
        icon: Flag,
        color: 'bg-red-500',
        label: 'Deadline',
        action: 'View Mission',
    }
}
