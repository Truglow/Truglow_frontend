'use client';

import React from 'react';
import { UserCheck, Building2, Clock, CheckCircle2 } from 'lucide-react';
import { StaffStatusRecord } from '@/lib/mock/manager-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StaffOverviewCardProps {
  staffList: StaffStatusRecord[];
}

export function StaffOverviewCard({ staffList }: StaffOverviewCardProps) {
  const getStatusBadge = (status: StaffStatusRecord['status']) => {
    switch (status) {
      case 'In Consultation':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
            In Consultation
          </span>
        );
      case 'Available':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
            Available
          </span>
        );
      case 'On Break':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 border border-stone-300">
            On Break
          </span>
        );
      case 'Off Duty':
        return (
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-300">
            Off Duty
          </span>
        );
    }
  };

  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-[#eee6dc] bg-[#faf7f2]/80">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
            <UserCheck className="h-4 w-4 text-[#8f5323]" />
            Active Clinic Staff & Room Load
          </CardTitle>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
            {staffList.filter((s) => s.status !== 'Off Duty').length} Active Staff
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {staffList.map((staff) => (
          <div
            key={staff.id}
            className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#eee6dc] flex items-center justify-between gap-3 text-xs"
          >
            <div className="space-y-0.5 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#2a1d17]">{staff.name}</span>
                {getStatusBadge(staff.status)}
              </div>
              <div className="text-[11px] text-[#7a6759]">
                {staff.roleTitle} • <span className="text-[#8f5323]">{staff.specialization}</span>
              </div>
              <div className="text-[10px] text-[#8f796a] flex items-center gap-2 pt-0.5">
                <span className="flex items-center gap-1">
                  <Building2 className="h-3 w-3" /> {staff.room} ({staff.branch})
                </span>
                <span>•</span>
                <span className="font-mono text-[#2a1d17] font-semibold">
                  {staff.patientsSeenToday} patients today
                </span>
              </div>
            </div>

            <div className="text-right text-[11px] flex-shrink-0">
              <span className="text-[#8f796a] block text-[10px]">Next Available</span>
              <span className="font-mono font-bold text-[#8f5323]">{staff.nextAvailable}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
