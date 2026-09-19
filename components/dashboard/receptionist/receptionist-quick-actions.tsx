'use client';

import React from 'react';
import { UserPlus, CalendarPlus, UserCheck, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ReceptionistQuickActionsProps {
  onRegisterClick: () => void;
  onBookClick: () => void;
  onCheckInClick: () => void;
  onSearchFocus: () => void;
}

export function ReceptionistQuickActions({
  onRegisterClick,
  onBookClick,
  onCheckInClick,
  onSearchFocus,
}: ReceptionistQuickActionsProps) {
  return (
    <div className="bg-white border border-[#e5ddd3] rounded-2xl p-4 md:p-5 shadow-2xs space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#2a1d17]">
          Front Desk Quick Actions
        </h3>
        <span className="text-[11px] text-[#8f796a] font-medium">
          Operational Shortcuts
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Register Patient */}
        <Button
          onClick={onRegisterClick}
          className="h-12 bg-amber-50 hover:bg-amber-100/80 text-[#8f5323] border border-amber-200/90 font-bold text-xs flex items-center justify-center gap-2 rounded-xl transition-all shadow-2xs hover:scale-[1.01] cursor-pointer"
        >
          <UserPlus className="h-4 w-4 text-[#8f5323]" />
          <span>Register Patient</span>
        </Button>

        {/* Book Appointment */}
        <Button
          onClick={onBookClick}
          className="h-12 bg-[#8f5323] hover:bg-[#744119] text-white font-bold text-xs flex items-center justify-center gap-2 rounded-xl transition-all shadow-md hover:scale-[1.01] cursor-pointer"
        >
          <CalendarPlus className="h-4 w-4 text-white" />
          <span>Book Appointment</span>
        </Button>

        {/* Check In Patient */}
        <Button
          onClick={onCheckInClick}
          variant="outline"
          className="h-12 border-[#d7cec7] hover:border-emerald-600 hover:bg-emerald-50 text-emerald-900 font-bold text-xs flex items-center justify-center gap-2 rounded-xl transition-all cursor-pointer"
        >
          <UserCheck className="h-4 w-4 text-emerald-700" />
          <span>Check In Patient</span>
        </Button>

        {/* Search Patient */}
        <Button
          onClick={onSearchFocus}
          variant="outline"
          className="h-12 border-[#d7cec7] hover:border-[#8f5323] hover:bg-amber-50/50 text-[#4a3428] font-bold text-xs flex items-center justify-center gap-2 rounded-xl transition-all cursor-pointer"
        >
          <Search className="h-4 w-4 text-[#8f796a]" />
          <span>Search Patients</span>
        </Button>
      </div>
    </div>
  );
}
