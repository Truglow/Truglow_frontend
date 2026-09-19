'use client';

import React from 'react';
import { ShieldAlert, ShieldCheck, Key, Lock, UserPlus, Clock } from 'lucide-react';
import { SecurityEventRecord } from '@/lib/mock/super-admin-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SecurityEventLogProps {
  events: SecurityEventRecord[];
}

export function SecurityEventLog({ events }: SecurityEventLogProps) {
  const getEventIcon = (type: SecurityEventRecord['type']) => {
    switch (type) {
      case 'ROLE_CHANGE':
        return <Key className="h-3.5 w-3.5 text-amber-700" />;
      case 'CONFIG_CHANGE':
        return <Lock className="h-3.5 w-3.5 text-[#8f5323]" />;
      case 'USER_CREATE':
        return <UserPlus className="h-3.5 w-3.5 text-emerald-700" />;
      case 'LOGIN_EVENT':
        return <ShieldCheck className="h-3.5 w-3.5 text-stone-700" />;
      default:
        return <ShieldAlert className="h-3.5 w-3.5 text-purple-700" />;
    }
  };

  const getSeverityBadge = (severity: SecurityEventRecord['severity']) => {
    switch (severity) {
      case 'CRITICAL':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'WARN':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'INFO':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
    }
  };

  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl">
      <CardHeader className="pb-3 border-b border-[#eee6dc]">
        <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
          <ShieldAlert className="h-4 w-4 text-[#8f5323]" />
          System & Security Events
        </CardTitle>
      </CardHeader>

      <CardContent className="p-4">
        <div className="space-y-3">
          {events.map((evt) => (
            <div key={evt.id} className="flex items-start gap-3 text-xs">
              <div className="mt-0.5 p-1.5 rounded-lg bg-amber-50 border border-amber-200/80 flex-shrink-0">
                {getEventIcon(evt.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#2a1d17]">{evt.title}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${getSeverityBadge(evt.severity)}`}>
                      {evt.severity}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8f796a] flex items-center gap-0.5 font-mono flex-shrink-0">
                    <Clock className="h-3 w-3" /> {evt.timestamp}
                  </span>
                </div>
                <p className="text-[11px] text-[#7a6759] mt-0.5 leading-snug">
                  {evt.description}
                </p>
                <div className="text-[10px] text-[#8f796a] font-medium mt-1">
                  By: <span className="text-[#2a1d17]">{evt.actor}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
