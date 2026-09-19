'use client';

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';
import { StaffSidebar } from '@/components/layout/staff-sidebar';
import { Button } from '@/components/ui/button';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open staff portal menu"
          className="lg:hidden text-[#7a6759] hover:text-[#8f5323] hover:bg-amber-50 h-9 w-9 rounded-xl border border-[#e5ddd3]"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="p-0 w-72 bg-[#fcfaf7] border-r border-[#e5ddd3]"
      >
        <SheetTitle className="sr-only">Staff Navigation Menu</SheetTitle>
        <StaffSidebar onItemClick={() => setIsOpen(false)} className="w-full border-r-0" />
      </SheetContent>
    </Sheet>
  );
}
