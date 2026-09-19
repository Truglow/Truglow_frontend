'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ChatWidget from '@/components/chat-widget';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPortalRoute = pathname?.startsWith('/dashboard') || pathname === '/login';

  if (isPortalRoute) {
    return <main className="min-h-screen">{children}</main>;
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
