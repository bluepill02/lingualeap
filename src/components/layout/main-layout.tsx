
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  BookOpen,
  Home,
  Settings,
  CreditCard,
  GraduationCap,
  ClipboardCheck,
  Camera,
  Bot,
  Radio,
  Megaphone,
  ShieldCheck,
  Menu,
  Users,
  Languages,
  Calendar,
  Moon,
  Sun,
  LogOut,
  Loader2,
  Briefcase,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LinguaLeapLogo } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '../ui/separator';
import { useLanguage, Language } from '@/context/language-context';
import { translations } from '@/lib/i18n';
import { useTheme } from 'next-themes';
import { getAuth } from 'firebase/auth';
import { app } from '@/lib/firebase';
import { useUser } from '@/context/user-context';
import { Skeleton } from '../ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

function AdPlaceholder() {
    return (
        <div className="p-4 bg-muted border border-dashed rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Advertisement</p>
        </div>
    )
}

function MainLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage } = useLanguage();
  const { setTheme } = useTheme();
  const t = translations[language];
  const { user, isLoading } = useUser();
  const auth = getAuth(app);
  
  const handleLogout = () => {
    auth.signOut().then(() => {
      router.push('/auth');
    });
  };

  const menuItems = [
    { href: '/dashboard', labelKey: 'dashboard', icon: Home, },
    { href: '/language-selection', labelKey: 'lessons', icon: BookOpen, },
    { href: '/flashcards', labelKey: 'flashcards', icon: GraduationCap, },
     { href: '/calendar', labelKey: 'calendar', icon: Calendar, },
    { href: '/personal-tutor', labelKey: 'personalTutor', icon: Bot, },
    { href: '/companion-circles', labelKey: 'companionCircles', icon: Users, },
    { href: '/interview-prep', labelKey: 'interviewPrep', icon: Briefcase, },
    { href: '/ar-immersion', labelKey: 'arImmersion', icon: Camera, },
    { href: '/live-classes', labelKey: 'liveClasses', icon: Radio, },
    { href: '/peer-teaching', labelKey: 'peerTeaching', icon: Megaphone, },
  ];

  if (isLoading) {
    return (
       <div className="flex h-screen w-screen items-center justify-center">
          <div className="flex items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-primary"/>
              <p className="text-muted-foreground">Initializing Application...</p>
          </div>
      </div>
    )
  }

  return (
    <div className="app-container">
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-2">
            <LinguaLeapLogo className="size-8 text-primary" />
            <h1 className="text-xl font-bold font-headline text-primary">
              LinguaLeap
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href} aria-label={t.sidebar[item.labelKey as keyof typeof t.sidebar]}>
                  <SidebarMenuButton
                    isActive={pathname.startsWith(item.href)}
                    tooltip={t.sidebar[item.labelKey as keyof typeof t.sidebar]}
                  >
                    <item.icon />
                    <span>{t.sidebar[item.labelKey as keyof typeof t.sidebar]}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
           <Separator className="my-2" />
           <SidebarMenuItem>
             <Link href="/settings" aria-label={t.sidebar.settings}>
               <SidebarMenuButton isActive={pathname.startsWith('/settings')} tooltip={t.sidebar.settings}>
                 <Settings />
                 <span>{t.sidebar.settings}</span>
               </SidebarMenuButton>
             </Link>
           </SidebarMenuItem>
           <SidebarMenuItem>
             <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
                <LogOut className="mr-2" />
                Log Out
             </Button>
           </SidebarMenuItem>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="p-0">
        <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-card p-4 sm:px-6">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="md:hidden" />
            <div className="hidden md:block">
              <SidebarTrigger />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Change language">
                        <Languages />
                        <span className="sr-only">Change language</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuRadioGroup value={language} onValueChange={(value) => setLanguage(value as Language)}>
                        <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="ta">தமிழ் (Tamil)</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="hi">हिन्दी (Hindi)</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="ml">മലയാളം (Malayalam)</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="kn">ಕನ್ನಡ (Kannada)</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="te">తెలుగు (Telugu)</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full" aria-label="Open user menu">
                    <Avatar>
                    <AvatarImage src={user?.avatarUrl || undefined} alt={user?.name || 'User'} />
                    <AvatarFallback>{user?.name?.charAt(0) || 'U'}</AvatarFallback>
                    </Avatar>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none font-headline">{user?.name || 'Guest User'}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                    </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/settings">
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 space-y-6">
            {user && <AdPlaceholder />}
            {children}
        </main>
        
        <footer className="p-6 text-center text-xs text-muted-foreground">
            <Separator className="my-4" />
            <div className="flex items-center justify-center gap-4">
                <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} LinguaLeap. All rights reserved.</p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
    </div>
  );
}


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
      <MainLayoutContent>{children}</MainLayoutContent>
  );
}
