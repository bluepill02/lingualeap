
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
import { mockUser } from '@/lib/data';
import { Separator } from '../ui/separator';
import { useLanguage, Language } from '@/context/language-context';
import { translations } from '@/lib/i18n';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const menuItems = [
    {
      href: '/dashboard',
      labelKey: 'dashboard',
      icon: Home,
    },
    {
      href: '/lessons',
      labelKey: 'lessons',
      icon: BookOpen,
    },
    {
      href: '/flashcards',
      labelKey: 'flashcards',
      icon: GraduationCap,
    },
     {
      href: '/calendar',
      labelKey: 'calendar',
      icon: Calendar,
    },
    {
      href: '/personal-tutor',
      labelKey: 'personalTutor',
      icon: Bot,
    },
    {
      href: '/companion-circles',
      labelKey: 'companionCircles',
      icon: Users,
    },
    {
      href: '/exam-prep',
      labelKey: 'examPrep',
      icon: ClipboardCheck,
    },
     {
      href: '/admin/validation-report',
      labelKey: 'validationReport',
      icon: ShieldCheck,
    },
    {
      href: '/ar-immersion',
      labelKey: 'arImmersion',
      icon: Camera,
    },
    {
      href: '/live-classes',
      labelKey: 'liveClasses',
      icon: Radio,
    },
    {
      href: '/peer-teaching',
      labelKey: 'peerTeaching',
      icon: Megaphone,
    },
    {
      href: '/settings',
      labelKey: 'settings',
      icon: Settings,
    },
  ];

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
          <Link href="/upgrade">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              <CreditCard className="mr-2" />
              Upgrade to Pro
            </Button>
          </Link>
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
                    <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
                    <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none font-headline">{mockUser.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                        {mockUser.email}
                    </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6">
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
