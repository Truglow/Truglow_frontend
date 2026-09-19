'use client';

import React from 'react';
import { ShieldCheck, ShieldAlert, Key, FileText, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SuperAdminQuickActionsProps {
  onManageAdminsClick: () => void;
  onManageRolesClick: () => void;
  onManagePermissionsClick: () => void;
  onViewAuditLogsClick: () => void;
  onSystemSettingsClick: () => void;
}

export function SuperAdminQuickActions({
  onManageAdminsClick,
  onManageRolesClick,
  onManagePermissionsClick,
  onViewAuditLogsClick,
  onSystemSettingsClick,
}: SuperAdminQuickActionsProps) {
  return (
    <div className="bg-white border border-[#e5ddd3] rounded-2xl p-4 md:p-5 shadow-2xs space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-[#2a1d17]">
          Super Admin Governance Actions
        </h3>
        <span className="text-[11px] text-[#8f796a] font-medium">
          System Control Shortcuts
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        
        {/* Manage Admins */}
        <Button
          onClick={onManageAdminsClick}
          className="h-11 bg-[#2a1d17] hover:bg-[#1a120e] text-[#fbf9f5] border border-[#4a3428] font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all shadow-md cursor-pointer"
        >
          <ShieldCheck className="h-4 w-4 text-amber-400" />
          <span>Manage Admins</span>
        </Button>

        {/* Manage Roles */}
        <Button
          onClick={onManageRolesClick}
          variant="outline"
          className="h-11 border-[#d7cec7] hover:border-[#8f5323] hover:bg-amber-50/50 text-[#4a3428] font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer"
        >
          <Key className="h-4 w-4 text-[#8f5323]" />
          <span>Manage Roles</span>
        </Button>

        {/* Manage Permissions */}
        <Button
          onClick={onManagePermissionsClick}
          className="h-11 bg-amber-100/80 hover:bg-amber-200/80 text-[#8f5323] border border-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer"
        >
          <ShieldAlert className="h-4 w-4" />
          <span>Permissions Matrix</span>
        </Button>

        {/* View Audit Logs */}
        <Button
          onClick={onViewAuditLogsClick}
          variant="outline"
          className="h-11 border-[#d7cec7] hover:border-emerald-600 hover:bg-emerald-50 text-emerald-900 font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer"
        >
          <FileText className="h-4 w-4 text-emerald-700" />
          <span>Full Audit Logs</span>
        </Button>

        {/* System Settings */}
        <Button
          onClick={onSystemSettingsClick}
          variant="outline"
          className="h-11 border-[#d7cec7] hover:border-[#8f5323] hover:bg-stone-100 text-[#4a3428] font-bold text-xs flex items-center justify-center gap-1.5 rounded-xl transition-all cursor-pointer"
        >
          <Lock className="h-4 w-4 text-stone-700" />
          <span>Security Settings</span>
        </Button>

      </div>
    </div>
  );
}
