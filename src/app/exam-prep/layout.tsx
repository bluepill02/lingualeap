
import { ReactNode } from 'react';

// This is a simplified public layout for the exam prep section.
// It doesn't include the main sidebar or the authentication checks.
export default function ExamPrepLayout({ children }: { children: ReactNode }) {
  return <div className="container mx-auto p-4 sm:p-6">{children}</div>;
}
