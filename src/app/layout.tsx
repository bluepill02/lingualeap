import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import 'katex/dist/katex.min.css';
import { LanguageProvider } from '@/context/language-context';
import { ThemeProvider } from '@/context/theme-provider';
import { UserProvider } from '@/context/user-context';

export const metadata: Metadata = {
  title: 'LinguaLeap',
  description: 'Gamified microlearning for language mastery.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-4280161410958958" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider>
            <LanguageProvider>
                {children}
                <Toaster />
            </LanguageProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
