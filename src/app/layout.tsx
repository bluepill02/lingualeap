import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import 'katex/dist/katex.min.css';
import { LanguageProvider } from '@/context/language-context';
import { ThemeProvider } from '@/context/theme-provider';
import { UserProvider } from '@/context/user-context';
import { StructuredData } from '@/components/seo/structured-data';

export const metadata: Metadata = {
  title: {
    default: 'LinguaLeap: AI-Powered Language & Exam Mastery',
    template: '%s | LinguaLeap',
  },
  description: 'Master new languages and ace competitive exams like NEET & TNPSC with LinguaLeap. Your personalized, AI-driven learning journey with gamified lessons, companion circles, and interactive practice.',
  keywords: ['language learning', 'NEET preparation', 'TNPSC exam', 'UPSC preparation', 'competitive exams India', 'AI tutor', 'learn Tamil', 'learn Hindi', 'exam prep app', 'companion circles', 'study buddy'],
  authors: [{ name: 'LinguaLeap Team' }],
  creator: 'LinguaLeap',
  publisher: 'LinguaLeap',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'LinguaLeap: AI-Powered Language & Exam Mastery',
    description: 'Master new languages and ace competitive exams like NEET & TNPSC with LinguaLeap.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://lingualeap-jjwfq.web.app',
    siteName: 'LinguaLeap',
    images: [
      {
        url: 'https://picsum.photos/seed/lingualeap-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'A vibrant abstract image representing language and learning.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LinguaLeap: AI-Powered Language & Exam Mastery',
    description: 'Master new languages and ace competitive exams like NEET & TNPSC with LinguaLeap.',
    images: ['https://picsum.photos/seed/lingualeap-og/1200/630'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "LinguaLeap",
    "url": "https://lingualeap-jjwfq.web.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://lingualeap-jjwfq.web.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData data={websiteSchema} />
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
