
'use client';

import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, User as FirebaseUser } from 'firebase/auth';
import { app } from '@/lib/firebase';
import MainLayout from '@/components/layout/main-layout';
import { UserProvider } from '@/context/user-context';
import { Skeleton } from '@/components/ui/skeleton';
import { Loader2 } from 'lucide-react';

function DashboardLoadingSkeleton() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex items-center gap-2">
            <Loader2 className="h-8 w-8 animate-spin text-primary"/>
            <p className="text-muted-foreground">Loading Your Dashboard...</p>
        </div>
    </div>
  )
}


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return <DashboardLoadingSkeleton />;
  }

  return (
    <UserProvider user={user}>
      <MainLayout>{children}</MainLayout>
    </UserProvider>
  );
}
