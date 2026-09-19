'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import {
  INITIAL_ADMIN_KPIS,
  INITIAL_ADMIN_STAFF,
  INITIAL_ADMIN_SERVICES,
  INITIAL_DEPARTMENTS,
  INITIAL_ADMIN_ACTIVITIES,
  INITIAL_SECURITY_AUDIT_LOGS,
  AdminStaffSummary,
  AdminServiceSummary,
  AdminActivityRecord,
} from '@/lib/mock/admin-data';
import { AdminKpis } from '@/components/dashboard/admin/admin-kpis';
import { AdminQuickActions } from '@/components/dashboard/admin/admin-quick-actions';
import { AdminModulesGrid } from '@/components/dashboard/admin/admin-modules-grid';
import { AdminActivityLog } from '@/components/dashboard/admin/admin-activity-log';
import { AdminAuditPreview } from '@/components/dashboard/admin/admin-audit-preview';
import { AddStaffDialog } from '@/components/dashboard/admin/add-staff-dialog';
import { AddServiceDialog } from '@/components/dashboard/admin/add-service-dialog';
import { ClinicSettingsDialog } from '@/components/dashboard/admin/clinic-settings-dialog';
import { Building2, Sparkles, CheckCircle2 } from 'lucide-react';

export function AdminDashboard() {
  const { user } = useAuth();

  // Master State
  const [staffList, setStaffList] = useState<AdminStaffSummary[]>(INITIAL_ADMIN_STAFF);
  const [servicesList, setServicesList] = useState<AdminServiceSummary[]>(INITIAL_ADMIN_SERVICES);
  const [activities, setActivities] = useState<AdminActivityRecord[]>(INITIAL_ADMIN_ACTIVITIES);

  // Dialog Controls
  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const adminName = user?.name || 'Suresh Varma';

  // Handler: Add Staff Member
  const handleStaffAdded = (staff: Omit<AdminStaffSummary, 'id' | 'status'>) => {
    const newStaffRecord: AdminStaffSummary = {
      ...staff,
      id: `STF-0${Math.floor(10 + Math.random() * 90)}`,
      status: 'Active',
    };

    setStaffList((prev) => [newStaffRecord, ...prev]);

    const newActivity: AdminActivityRecord = {
      id: `ACT-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      category: 'Staff Management',
      title: 'New Staff Account Created',
      description: `Added ${staff.name} (${staff.roleLabel}) for ${staff.branch}`,
      performedBy: `${adminName} (Admin)`,
    };
    setActivities((prev) => [newActivity, ...prev]);
  };

  // Handler: Add Treatment Service
  const handleServiceAdded = (service: Omit<AdminServiceSummary, 'id' | 'status'>) => {
    const newServiceRecord: AdminServiceSummary = {
      ...service,
      id: `SRV-${Math.floor(100 + Math.random() * 900)}`,
      status: 'Active',
    };

    setServicesList((prev) => [newServiceRecord, ...prev]);

    const newActivity: AdminActivityRecord = {
      id: `ACT-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      category: 'Service Catalog',
      title: 'New Service Configured',
      description: `Added ${service.name} (${service.code}) at ₹${service.priceINR}`,
      performedBy: `${adminName} (Admin)`,
    };
    setActivities((prev) => [newActivity, ...prev]);
  };

  return (
    <div className="space-y-6">
      
      {/* Admin Header Banner */}
      <div className="bg-white border border-[#e5ddd3] rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-950 border border-orange-300">
                Clinic Administration
              </span>
              <span className="text-xs text-[#8f796a] flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Administrative Governance Active
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2a1d17]">
              {timeGreeting}, {adminName}
            </h1>
            <p className="text-sm text-[#7a6759] mt-1">
              Clinic administration, user rosters, service catalog, and security audit preview.
            </p>
          </div>

          <div className="sm:text-right text-xs text-[#7a6759] bg-[#faf7f2] p-3 rounded-xl border border-[#eee6dc]">
            <div className="font-semibold text-[#2a1d17] flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5 text-[#8f5323]" />
              {user?.branch || 'All TruGlow Centers'}
            </div>
            <div className="text-emerald-700 font-medium mt-0.5 flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> System Configuration Sync Active
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Bar */}
      <AdminKpis data={INITIAL_ADMIN_KPIS} />

      {/* Quick Action Shortcuts */}
      <AdminQuickActions
        onAddStaffClick={() => setIsAddStaffOpen(true)}
        onManageUsersClick={() => {
          const tabBtn = document.querySelector('button:has(svg)') as HTMLButtonElement;
          if (tabBtn) tabBtn.scrollIntoView({ behavior: 'smooth' });
        }}
        onAddServiceClick={() => setIsAddServiceOpen(true)}
        onManageServicesClick={() => {
          const grid = document.querySelector('.space-y-6');
          if (grid) grid.scrollIntoView({ behavior: 'smooth' });
        }}
        onViewReportsClick={() => {
          alert('Administrative report overview: All daily reports generated cleanly.');
        }}
        onSettingsClick={() => setIsSettingsOpen(true)}
      />

      {/* Administration Modules Grid (Staff, Services, Departments) */}
      <AdminModulesGrid
        staffList={staffList}
        servicesList={servicesList}
        departments={INITIAL_DEPARTMENTS}
        onAddStaffClick={() => setIsAddStaffOpen(true)}
        onAddServiceClick={() => setIsAddServiceOpen(true)}
      />

      {/* Activity Log & Security Audit Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdminActivityLog activities={activities} />
        <AdminAuditPreview logs={INITIAL_SECURITY_AUDIT_LOGS} />
      </div>

      {/* Modals */}
      <AddStaffDialog
        open={isAddStaffOpen}
        onOpenChange={setIsAddStaffOpen}
        onStaffAdded={handleStaffAdded}
      />

      <AddServiceDialog
        open={isAddServiceOpen}
        onOpenChange={setIsAddServiceOpen}
        onServiceAdded={handleServiceAdded}
      />

      <ClinicSettingsDialog
        open={isSettingsOpen}
        onOpenChange={setIsSettingsOpen}
      />

    </div>
  );
}
