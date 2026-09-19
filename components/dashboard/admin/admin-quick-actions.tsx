'use client';

import React from 'react';
import { UserPlus, Users, PlusCircle, Stethoscope, FileText, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AdminQuickActionsProps {
  onAddStaffClick: () => void;
  onManageUsersClick: () => void;
  onAddServiceClick: () => void;
  onManageServicesClick: () => void;
  onViewReportsClick: () => void;
  onSettingsClick: () => void;
}

export function AdminQuickActions({
  onAddStaffClick,
  onManageUsersClick,
  onAddServiceClick,
  onManageServicesClick,
  onViewReportsClick,
  onSettingsClick,
}: AdminQuickActionsProps) {
  return (
    <div className="bg-white border border-[#e5ddd3] rounded-2xl p-4 md:p-5 shadow-2xs space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#2a1d17]">
          Administrative Quick Actions
        </h3>
        <span className="text-[11px] text-[#8f796a] font-medium">
          Management Controls
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        
        {/* Add Staff */}
        <Button
          onClick={onAddStaffClick}
          className="h-11 bg-[#8f5323] hover:bg-[#744119] text-white font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all shadow-md cursor-pointer"
        >
          <UserPlus className="h-4 w-4" />
          <span>Add Staff</span>
        </Button>

        {/* Manage Users */}
        <Button
          onClick={onManageUsersClick}
          variant="outline"
          className="h-11 border-[#d7cec7] hover:border-[#8f5323] hover:bg-amber-50/50 text-[#4a3428] font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer"
        >
          <Users className="h-4 w-4 text-[#8f5323]" />
          <span>Manage Users</span>
        </Button>

        {/* Add Service */}
        <Button
          onClick={onAddServiceClick}
          className="h-11 bg-amber-100/80 hover:bg-amber-200/80 text-[#8f5323] border border-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer"
        >
          <PlusCircle className="h-4 w-4" />
          <span>Add Service</span>
        </Button>

        {/* Manage Services */}
        <Button
          onClick={onManageServicesClick}
          variant="outline"
          className="h-11 border-[#d7cec7] hover:border-[#8f5323] hover:bg-amber-50/50 text-[#4a3428] font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer"
        >
          <Stethoscope className="h-4 w-4 text-[#8f5323]" />
          <span>Manage Catalog</span>
        </Button>

        {/* View Reports */}
        <Button
          onClick={onViewReportsClick}
          variant="outline"
          className="h-11 border-[#d7cec7] hover:border-emerald-600 hover:bg-emerald-50 text-emerald-900 font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer"
        >
          <FileText className="h-4 w-4 text-emerald-700" />
          <span>View Reports</span>
        </Button>

        {/* Clinic Settings */}
        <Button
          onClick={onSettingsClick}
          variant="outline"
          className="h-11 border-[#d7cec7] hover:border-[#8f5323] hover:bg-stone-100 text-[#4a3428] font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer"
        >
          <Settings className="h-4 w-4 text-stone-700" />
          <span>Clinic Settings</span>
        </Button>

      </div>
    </div>
  );
}
