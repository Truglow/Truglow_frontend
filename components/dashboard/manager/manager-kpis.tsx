'use client';

import React from 'react';
import { Calendar, CheckCircle2, Clock, XCircle, UserPlus, TrendingUp } from 'lucide-react';
import { ManagerKpiData } from '@/lib/mock/manager-data';
import { Card, CardContent } from '@/components/ui/card';

interface ManagerKpisProps {
  data: ManagerKpiData;
}

export function ManagerKpis({ data }: ManagerKpisProps) {
  const cards = [
    {
      title: 'Appointments Today',
      value: data.appointmentsToday,
      badge: `${data.capacityUtilization}% Capacity`,
      subtitle: 'Across all centers',
      icon: Calendar,
      iconBg: 'bg-amber-100 text-[#8f5323]',
      borderClass: 'border-amber-200/80',
    },
    {
      title: 'Completed Visits',
      value: data.completed,
      badge: 'On Track',
      subtitle: 'Visits concluded',
      icon: CheckCircle2,
      iconBg: 'bg-emerald-100 text-emerald-800',
      borderClass: 'border-emerald-200/80',
    },
    {
      title: 'Pending Visits',
      value: data.pending,
      badge: 'In Progress',
      subtitle: 'Scheduled remaining',
      icon: Clock,
      iconBg: 'bg-stone-100 text-stone-800',
      borderClass: 'border-stone-200/80',
    },
    {
      title: 'No Shows / Cancelled',
      value: data.noShows,
      badge: '9.3% Rate',
      subtitle: 'Requires follow-up',
      icon: XCircle,
      iconBg: 'bg-red-100 text-red-800',
      borderClass: 'border-red-200/80',
    },
    {
      title: 'New Patients Intake',
      value: data.newPatients,
      badge: '+12% vs last week',
      subtitle: 'First time visits',
      icon: UserPlus,
      iconBg: 'bg-orange-100 text-orange-900',
      borderClass: 'border-orange-200/80',
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
