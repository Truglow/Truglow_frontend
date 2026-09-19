'use client';

import React from 'react';
import { Users, UserCheck, Calendar, Stethoscope, ClipboardList } from 'lucide-react';
import { AdminKpiData } from '@/lib/mock/admin-data';
import { Card, CardContent } from '@/components/ui/card';

interface AdminKpisProps {
  data: AdminKpiData;
}

export function AdminKpis({ data }: AdminKpisProps) {
  const cards = [
    {
      title: 'Total Registered Patients',
      value: data.totalPatients.toLocaleString(),
      badge: 'Active Database',
      subtitle: 'Electronic health records',
      icon: Users,
      iconBg: 'bg-amber-100 text-[#8f5323]',
      borderClass: 'border-amber-200/80',
    },
    {
      title: 'Total Clinic Staff',
      value: data.totalStaff,
      badge: 'Active Roster',
      subtitle: 'Doctors, nurses & desk staff',
      icon: UserCheck,
      iconBg: 'bg-orange-100 text-orange-900',
      borderClass: 'border-orange-200/80',
    },
    {
      title: "Today's Appointments",
      value: data.todaysAppointments,
      badge: 'Live Operations',
      subtitle: 'Across all centers',
      icon: Calendar,
      iconBg: 'bg-emerald-100 text-emerald-800',
      borderClass: 'border-emerald-200/80',
    },
    {
      title: 'Active Services Catalog',
      value: data.activeServices,
      badge: 'Configured',
      subtitle: 'Treatments & procedures',
      icon: Stethoscope,
      iconBg: 'bg-stone-100 text-stone-800',
      borderClass: 'border-stone-200/80',
    },
    {
      title: 'Pending Admin Tasks',
      value: data.pendingTasks,
      badge: 'Action Required',
      subtitle: 'Intake & approvals',
      icon: ClipboardList,
      iconBg: 'bg-red-100 text-red-800',
      borderClass: 'border-red-200/80',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {cards.map((c) => {
        const Icon = c.icon;

        return (
          <Card
            key={c.title}
            className={`bg-white border ${c.borderClass} shadow-2xs hover:shadow-xs transition-shadow rounded-2xl`}
          >
            <CardContent className="p-4 flex flex-col justify-between h-full">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#7a6759]">
                  {c.title}
                </p>
                <div className={`p-2 rounded-xl ${c.iconBg}`}>
                  <Icon className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-2">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-2xl font-extrabold text-[#2a1d17]">
                    {c.value}
                  </h3>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-[#8f5323] border border-amber-200/80">
                    {c.badge}
                  </span>
                </div>
                <p className="text-[10px] text-[#8f796a] mt-1 font-medium">
                  {c.subtitle}
                </p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
