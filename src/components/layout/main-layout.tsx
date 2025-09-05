
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
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { mockUser } from '@/lib/data';
import { Separator } from '../ui/separator';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const menuItems = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      icon: Home,
    },
    {
      href: '/lessons',
      label: 'Lessons',
      icon: BookOpen,
    },
    {
      href: '/flashcards',
      label: 'Flashcards',
      icon: GraduationCap,
    },
    {
      href: '/personal-tutor',
      label: 'Personal Tutor',
      icon: Bot,
    },
    {
      href: '/exam-prep',
      label: 'Exam Module',
      icon: ClipboardCheck,
    },
     {
      href: '/admin/validation-report',
      label: 'Validation Report',
      icon: ShieldCheck,
    },
    {
      href: '/ar-immersion',
      label: 'AR Immersion',
      icon: Camera,
    },
    {
      href: '/live-classes',
      label: 'Live Classes',
      icon: Radio,
    },
    {
      href: '/peer-teaching',
      label: 'Peer Teaching',
      icon: Megaphone,
    },
    {
      href: '/settings',
      label: 'Settings',
      icon: Settings,
    },
  ];

  return (
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
                <Link href={item.href} aria-label={item.label}>
                  <SidebarMenuButton
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
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
      <SidebarInset>
        <header className="flex h-16 items-center justify-between border-b bg-card px-6">
          <SidebarTrigger />
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
        </header>

        <main className="flex-1 p-6 md:p-8">{children}</main>
        
        <footer className="mt-auto p-6 text-center text-xs text-muted-foreground">
            <Separator className="my-4" />
            <div className="flex items-center justify-center gap-4">
                <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
            </div>
            <p className="mt-2">© {new Date().getFullYear()} LinguaLeap. All rights reserved.</p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
