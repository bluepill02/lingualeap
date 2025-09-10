
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { getUserSettings } from '@/services/user';
import type { User as AppUser } from '@/lib/types';

interface UserContextType {
  user: (AppUser & { uid: string }) | null;
  isLoading: boolean;
  reloadUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserContextType['user']>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = useCallback(async (firebaseUser: FirebaseUser | null) => {
    if (firebaseUser) {
      try {
        const userProfile = await getUserSettings(firebaseUser.uid);
        if (userProfile) {
          setUser({ ...userProfile, uid: firebaseUser.uid });
        } else {
          // Handle case where user is authenticated but profile doesn't exist yet
          setUser({
            id: firebaseUser.uid,
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || 'New User',
            email: firebaseUser.email || '',
            avatarUrl: firebaseUser.photoURL || `https://picsum.photos/seed/${firebaseUser.uid}/100/100`,
            isPro: false,
            streak: 0,
            xp: 0,
            language: 'Hindi',
            timezone: 'Asia/Kolkata',
            proficiency: 'Beginner',
            goals: ['Travel'],
            persona: 'The Casual Traveler',
          });
        }
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    } else {
      setUser(null);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setIsLoading(true);
      fetchUserData(firebaseUser);
    });
    return () => unsubscribe();
  }, [fetchUserData]);

  const reloadUser = useCallback(async () => {
    const auth = getAuth(app);
    const currentUser = auth.currentUser;
    setIsLoading(true);
    await fetchUserData(currentUser);
  }, [fetchUserData]);

  return (
    <UserContext.Provider value={{ user, isLoading, reloadUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
