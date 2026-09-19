'use client';

import React from 'react';
import { ShieldCheck, Users, Activity, Lock, AlertTriangle } from 'lucide-react';
import { SuperAdminKpiData } from '@/lib/mock/super-admin-data';
import { Card, CardContent } from '@/components/ui/card';

interface SuperAdminKpisProps {
  data: SuperAdminKpiData;
}

export function SuperAdminKpis({ data }: SuperAdminKpisProps) {
  const cards = [
    {
      title: 'Total System Users',
      value: data.totalUsers,
      badge: 'All Roles',
      subtitle: 'Managed credentials',
      icon: Users,
      iconBg: 'bg-[#2a1d17] text-[#fbf9f5]',
      borderClass: 'border-[#4a3428]/40',
    },
    {
      title: 'Active Staff Accounts',
      value: data.activeStaff,
      badge: 'Verified',
      subtitle: 'Clinical & Ops staff',
      icon: ShieldCheck,
      iconBg: 'bg-emerald-100 text-emerald-900',
      borderClass: 'border-emerald-200/80',
    },
    {
      title: 'System Activity Events',
      value: data.systemActivityEvents.toLocaleString(),
      badge: 'Logged',
      subtitle: 'Total requests monitored',
      icon: Activity,
      iconBg: 'bg-amber-100 text-[#8f5323]',
      borderClass: 'border-amber-200/80',
    },
    {
      title: 'Security Audit Events',
      value: data.securityEventsCount,
      badge: 'Monitored',
      subtitle: 'Route & token checks',
      icon: Lock,
      iconBg: 'bg-purple-100 text-purple-900',
      borderClass: 'border-purple-200/80',
    },
    {
      title: 'Pending Governance Review',
      value: data.pendingAdminActions,
      badge: 'Attention Needed',
      subtitle: 'System approvals',
      icon: AlertTriangle,
      iconBg: 'bg-red-100 text-red-900',
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
