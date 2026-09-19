'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { MobileNavigation } from '@/components/layout/mobile-navigation';
import { NotificationsPopover } from '@/components/layout/notifications-popover';
import { UserMenu } from '@/components/layout/user-menu';
import { Input } from '@/components/ui/input';

export function StaffHeader() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b border-[#e5ddd3] sticky top-0 z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Mobile Navigation Trigger & Mobile Logo */}
          <div className="flex items-center gap-3">
            <MobileNavigation />
            
            <Link href="/dashboard" className="lg:hidden flex items-center">
              <div className="relative h-8 w-28">
                <Image
                  src="/Asset_logo_2.svg"
                  alt="TruGlow Clinic"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Search Bar Input */}
          <div className="hidden md:flex flex-1 max-w-md items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#8f796a]">
                <Search className="h-4 w-4" />
              </div>
              <Input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search patient record, appointment ID, or staff..."
                className="pl-9 h-9 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17] placeholder:text-[#a8998d] focus-visible:ring-2 focus-visible:ring-[#8f5323] focus-visible:border-transparent rounded-xl transition-all"
              />
            </div>
          </div>

          {/* Right Area: Notifications & User Profile */}
          <div className="flex items-center gap-2 sm:gap-3">
            <NotificationsPopover />
            <div className="h-6 w-px bg-[#e0d6cb] hidden sm:block" />
            <UserMenu />
          </div>

        </div>
      </div>
    </header>
  );
}
