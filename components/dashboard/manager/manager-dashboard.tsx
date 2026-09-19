'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import {
  INITIAL_MANAGER_KPIS,
  INITIAL_OPERATIONAL_ALERTS,
  HOURLY_APPOINTMENT_TRENDS,
  SERVICE_PERFORMANCE_METRICS,
  STAFF_STATUS_ROSTER,
  OPERATIONAL_LOGS,
  OperationalAlert,
} from '@/lib/mock/manager-data';
import { ManagerKpis } from '@/components/dashboard/manager/manager-kpis';
import { OperationalAlerts } from '@/components/dashboard/manager/operational-alerts';
import { AppointmentTrendsChart } from '@/components/dashboard/manager/appointment-trends-chart';
import { ServicePerformanceChart } from '@/components/dashboard/manager/service-performance-chart';
import { StaffOverviewCard } from '@/components/dashboard/manager/staff-overview-card';
import { ManagerActivityLog } from '@/components/dashboard/manager/manager-activity-log';
import { Building2, Sparkles, CheckCircle2 } from 'lucide-react';

export function ManagerDashboard() {
  const { user } = useAuth();
  const [alerts, setAlerts] = useState<OperationalAlert[]>(INITIAL_OPERATIONAL_ALERTS);

  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const managerName = user?.name || 'Kavitha Rao';

  const handleAlertAction = (alertId: string) => {
    setAlerts((prev) => prev.filter((a) => a.id !== alertId));
  };

  return (
    <div className="space-y-6">
      
      {/* Manager Banner Header */}
      <div className="bg-white border border-[#e5ddd3] rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-900 border border-stone-300">
                Clinic Operations Management
              </span>
              <span className="text-xs text-[#8f796a] flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Real-Time Operational Monitoring
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2a1d17]">
              {timeGreeting}, {managerName}
            </h1>
            <p className="text-sm text-[#7a6759] mt-1">
              Operational overview & daily performance metrics for TruGlow Clinic.
            </p>
          </div>

          <div className="sm:text-right text-xs text-[#7a6759] bg-[#faf7f2] p-3 rounded-xl border border-[#eee6dc]">
            <div className="font-semibold text-[#2a1d17] flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5 text-[#8f5323]" />
              {user?.branch || 'Hyderabad Central Operations'}
            </div>
            <div className="text-emerald-700 font-medium mt-0.5 flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> All Systems Operational
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Bar */}
      <ManagerKpis data={INITIAL_MANAGER_KPIS} />

      {/* Operational Alerts Section */}
      <OperationalAlerts alerts={alerts} onActionClick={handleAlertAction} />

      {/* Charts Grid: Appointment Trends & Service Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AppointmentTrendsChart data={HOURLY_APPOINTMENT_TRENDS} />
        </div>
        <div className="lg:col-span-1">
          <ServicePerformanceChart data={SERVICE_PERFORMANCE_METRICS} />
        </div>
      </div>

      {/* Staff Roster Overview & Operational Logs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StaffOverviewCard staffList={STAFF_STATUS_ROSTER} />
        <ManagerActivityLog logs={OPERATIONAL_LOGS} />
      </div>

    </div>
  );
}
