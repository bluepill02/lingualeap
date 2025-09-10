
'use server';

import { db } from '@/lib/firebase';
import { doc, getDoc, collection, query, where, getDocs, limit, Timestamp } from 'firebase/firestore';
import type { User, Flashcard, Lesson, CompanionCircle, DashboardData } from '@/lib/types';
import { mockUser, lessons as mockLessons, companionCircles } from '@/lib/data';
import { getUserFlashcards } from './user-flashcards';
import { getUserSettings } from './user';

/**
 * Fetches all necessary data for the user's dashboard.
 * This function now queries Firestore for live user data.
 */
export async function getDashboardData(userId: string): Promise<DashboardData> {
  try {
    // 1. Fetch the user's profile from Firestore
    const userData = await getUserSettings(userId);
    if (!userData) {
      console.warn(`User document for ${userId} not found. Using mock user.`);
      return {
        userData: { ...mockUser, id: userId },
        flashcardStats: { mastered: 0, dueToday: 0, total: 0 },
        lessons: mockLessons.slice(0, 4),
        companionCircle: null,
        myCirclesCount: 0,
      };
    }

    // 2. Fetch user-specific flashcard stats
    const userFlashcards = await getUserFlashcards(userId);
    const now = new Date();
    const flashcardStats = {
      mastered: userFlashcards.filter(fc => fc.stability > 10).length,
      dueToday: userFlashcards.filter(fc => new Date(fc.nextDue) <= now).length,
      total: userFlashcards.length,
    };

    // 3. Fetch recommended lessons (can be personalized later)
    const recommendedLessons = mockLessons.slice(0, 4);

    // 4. Fetch all of the user's companion circles from Firestore
    const circlesQuery = query(
      collection(db, 'companion-circles'),
      where('members', 'array-contains', userId)
    );
    const circleSnapshot = await getDocs(circlesQuery);
    
    const myCirclesCount = circleSnapshot.size;
    let userCompanionCircle: CompanionCircle | null = null;
    
    if (!circleSnapshot.empty) {
      const circleDoc = circleSnapshot.docs[0];
      userCompanionCircle = { ...circleDoc.data(), id: circleDoc.id } as CompanionCircle;
    }


    return {
      userData: userData as User,
      flashcardStats,
      lessons: recommendedLessons,
      companionCircle: userCompanionCircle,
      myCirclesCount: myCirclesCount,
    };
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    // Return mock data as a fallback to prevent crashing the page
    return {
      userData: { ...mockUser, id: userId }, // Return a shell user with the correct ID
      flashcardStats: { mastered: 0, dueToday: 0, total: 0 },
      lessons: mockLessons.slice(0, 4),
      companionCircle: null, // Default to no circle on error
      myCirclesCount: 0,
    };
  }
}
