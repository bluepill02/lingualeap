'use client';

import MainLayout from '@/components/layout/main-layout';
import { UserProvider } from '@/context/user-context';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <UserProvider>
        <MainLayout>{children}</MainLayout>
      </UserProvider>
  );
}
