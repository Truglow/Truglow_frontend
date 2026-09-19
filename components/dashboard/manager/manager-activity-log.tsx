'use client';

import React from 'react';
import { Activity, Clock, ShieldCheck, FileText, UserCheck, Stethoscope } from 'lucide-react';
import { OperationalLogRecord } from '@/lib/mock/manager-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ManagerActivityLogProps {
  logs: OperationalLogRecord[];
}

export function ManagerActivityLog({ logs }: ManagerActivityLogProps) {
  const getCategoryIcon = (category: OperationalLogRecord['category']) => {
    switch (category) {
      case 'Patient Flow':
        return <UserCheck className="h-3.5 w-3.5 text-emerald-700" />;
      case 'Service':
        return <Stethoscope className="h-3.5 w-3.5 text-[#8f5323]" />;
      case 'Staffing':
        return <ShieldCheck className="h-3.5 w-3.5 text-amber-700" />;
      default:
        return <FileText className="h-3.5 w-3.5 text-stone-700" />;
    }
  };

  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl">
      <CardHeader className="pb-3 border-b border-[#eee6dc]">
        <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
          <Activity className="h-4 w-4 text-[#8f5323]" />
          Recent Operational Activity Log
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-3 text-xs">
              <div className="mt-0.5 p-1.5 rounded-lg bg-amber-50 border border-amber-200/80 flex-shrink-0">
                {getCategoryIcon(log.category)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#2a1d17]">{log.title}</span>
                  <span className="text-[10px] text-[#8f796a] flex items-center gap-0.5 font-mono">
                    <Clock className="h-3 w-3" /> {log.time}
                  </span>
                </div>
                <p className="text-[11px] text-[#7a6759] mt-0.5 leading-snug">
                  {log.description}
                </p>
                <div className="text-[10px] text-[#8f796a] font-medium mt-1">
                  Actor: <span className="text-[#2a1d17]">{log.actor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
