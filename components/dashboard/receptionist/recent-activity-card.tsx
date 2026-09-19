'use client';

import React from 'react';
import { Activity, Clock, Sparkles, UserPlus, Calendar, UserCheck, XCircle } from 'lucide-react';
import { ActivityRecord } from '@/lib/mock/receptionist-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RecentActivityCardProps {
  activities: ActivityRecord[];
}

export function RecentActivityCard({ activities }: RecentActivityCardProps) {
  const getActivityIcon = (type: ActivityRecord['type']) => {
    switch (type) {
      case 'checkin':
        return <UserCheck className="h-3.5 w-3.5 text-emerald-700" />;
      case 'booking':
        return <Calendar className="h-3.5 w-3.5 text-[#8f5323]" />;
      case 'registration':
        return <UserPlus className="h-3.5 w-3.5 text-amber-700" />;
      case 'cancellation':
        return <XCircle className="h-3.5 w-3.5 text-red-600" />;
      default:
        return <Sparkles className="h-3.5 w-3.5 text-stone-700" />;
    }
  };

  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl">
      <CardHeader className="pb-3 border-b border-[#eee6dc]">
        <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
          <Activity className="h-4 w-4 text-[#8f5323]" />
          Recent Reception Activity
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-3">
          {activities.slice(0, 5).map((act) => (
            <div key={act.id} className="flex items-start gap-3 text-xs">
              <div className="mt-0.5 p-1.5 rounded-lg bg-amber-50 border border-amber-200/80 flex-shrink-0">
                {getActivityIcon(act.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#2a1d17]">{act.title}</span>
                  <span className="text-[10px] text-[#8f796a] flex items-center gap-0.5 font-mono">
                    <Clock className="h-3 w-3" /> {act.timestamp}
                  </span>
                </div>
                <p className="text-[11px] text-[#7a6759] mt-0.5 leading-snug">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
