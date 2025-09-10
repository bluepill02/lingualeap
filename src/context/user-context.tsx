
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import type { User as FirebaseUser } from 'firebase/auth';

interface UserContextType {
  user: FirebaseUser | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children, user }: { children: ReactNode, user: FirebaseUser | null }) => {
  return (
    <UserContext.Provider value={{ user }}>
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
