'use me';
'use client';

import React, { useState } from 'react';
import { ShieldCheck, KeyRound, Server, Activity, Lock, FileText } from 'lucide-react';

import { SuperAdminKpis } from './super-admin-kpis';
import { SuperAdminQuickActions } from './super-admin-quick-actions';
import { SystemStatusGrid } from './system-status-grid';
import { RolePermissionMatrix } from './role-permission-matrix';
import { SecurityEventLog } from './security-event-log';
import { AuditLogTable } from './audit-log-table';

import { ManageAdminsDialog } from './manage-admins-dialog';
import { SystemSettingsDialog } from './system-settings-dialog';

import {
  INITIAL_SUPER_ADMIN_KPIS,
  INITIAL_SECURITY_EVENTS,
  INITIAL_SYSTEM_AUDIT_LOGS,
  SuperAdminKpiData,
  SecurityEventRecord,
  SystemAuditLogItem,
} from '@/lib/mock/super-admin-data';

export function SuperAdminDashboard() {
  const [kpis, setKpis] = useState<SuperAdminKpiData>(INITIAL_SUPER_ADMIN_KPIS);
  const [securityEvents, setSecurityEvents] = useState<SecurityEventRecord[]>(INITIAL_SECURITY_EVENTS);
  const [auditLogs, setAuditLogs] = useState<SystemAuditLogItem[]>(INITIAL_SYSTEM_AUDIT_LOGS);

  // Dialog states
  const [isManageAdminsOpen, setIsManageAdminsOpen] = useState(false);
  const [isSystemSettingsOpen, setIsSystemSettingsOpen] = useState(false);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const showToast = (message: string) => {
    setActionFeedback(message);
    setTimeout(() => {
      setActionFeedback(null);
    }, 4000);
  };

  const handleManageAdminsClick = () => setIsManageAdminsOpen(true);
  const handleSystemSettingsClick = () => setIsSystemSettingsOpen(true);
  
  const handleManageRolesClick = () => {
    document.getElementById('permission-matrix-section')?.scrollIntoView({ behavior: 'smooth' });
    showToast('Scrolled to Role Architecture & Permission Matrix');
  };

  const handleManagePermissionsClick = () => {
    document.getElementById('permission-matrix-section')?.scrollIntoView({ behavior: 'smooth' });
    showToast('Scrolled to System Capabilities Matrix');
  };

  const handleViewAuditLogsClick = () => {
    document.getElementById('audit-logs-section')?.scrollIntoView({ behavior: 'smooth' });
    showToast('Scrolled to Audit Activity Log');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Dynamic Toast Feedback */}
      {actionFeedback && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2a1d17] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-[#8f5323]/40 text-sm animate-in fade-in slide-in-from-bottom-3 duration-200">
          <ShieldCheck className="w-5 h-5 text-[#8f5323]" />
          <span>{actionFeedback}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#2a1d17] via-[#3a2920] to-[#2a1d17] rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden border border-[#8f5323]/30">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-[#8f5323]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8f5323]/30 border border-[#8f5323]/50 text-amber-200 text-xs font-medium mb-3">
              <Lock className="w-3.5 h-3.5 text-amber-300" />
              Highest Governance Level (SUPER_ADMIN)
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-amber-50">
              Super Admin System Console
            </h1>
            <p className="text-stone-300 text-sm mt-1 max-w-2xl leading-relaxed">
              System governance, role permission architecture, security audit logging, and global platform status.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="bg-stone-900/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-stone-700/60 text-right">
              <div className="text-[10px] uppercase font-semibold tracking-wider text-amber-400/90">
                Security Engine Status
              </div>
              <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5 justify-end">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ACTIVE & ENFORCED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Section */}
      <SuperAdminKpis data={kpis} />

      {/* Quick Actions Bar */}
      <SuperAdminQuickActions
        onManageAdminsClick={handleManageAdminsClick}
        onManageRolesClick={handleManageRolesClick}
        onManagePermissionsClick={handleManagePermissionsClick}
        onViewAuditLogsClick={handleViewAuditLogsClick}
        onSystemSettingsClick={handleSystemSettingsClick}
      />

      {/* Section 1: System Status & Infrastructure Overview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#2a1d17] flex items-center gap-2">
            <Server className="w-5 h-5 text-[#8f5323]" />
            Infrastructure & Maintenance Status
          </h2>
          <span className="text-xs text-stone-500">Live Services Integrity check</span>
        </div>
        <SystemStatusGrid />
      </section>

      {/* Section 2: Role & Permission Management */}
      <section id="permission-matrix-section" className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#2a1d17] flex items-center gap-2">
            <KeyRound className="w-5 h-5 text-[#8f5323]" />
            Role & Permission Architecture Matrix
          </h2>
        </div>
        <RolePermissionMatrix />
      </section>

      {/* Section 3: Recent Security & System Activity */}
      <section className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#2a1d17] flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#8f5323]" />
            Recent Security & System Events
          </h2>
        </div>
        <SecurityEventLog events={securityEvents} />
      </section>

      {/* Section 4: Full Audit Logs */}
      <section id="audit-logs-section" className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#2a1d17] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#8f5323]" />
            Full Audit Activity Trail
          </h2>
        </div>
        <AuditLogTable logs={auditLogs} />
      </section>

      {/* Dialog Modals */}
      <ManageAdminsDialog
        open={isManageAdminsOpen}
        onOpenChange={setIsManageAdminsOpen}
      />

      <SystemSettingsDialog
        open={isSystemSettingsOpen}
        onOpenChange={setIsSystemSettingsOpen}
      />
    </div>
  );
}
