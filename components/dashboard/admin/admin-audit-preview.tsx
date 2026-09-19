'use client';

import React from 'react';
import { ShieldCheck, ShieldAlert, KeyRound, AlertTriangle } from 'lucide-react';
import { AuditLogRecord } from '@/lib/mock/admin-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface AdminAuditPreviewProps {
  logs: AuditLogRecord[];
}

export function AdminAuditPreview({ logs }: AdminAuditPreviewProps) {
  const getSeverityBadge = (severity: AuditLogRecord['severity']) => {
    switch (severity) {
      case 'SECURITY':
        return 'bg-purple-100 text-purple-900 border-purple-300';
      case 'WARN':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'INFO':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
    }
  };

  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-[#eee6dc] bg-[#faf7f2]/80">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
            <KeyRound className="h-4 w-4 text-[#8f5323]" />
            Security & Audit Activity Preview
          </CardTitle>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
            System Security Active
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {logs.map((log) => (
          <div
            key={log.id}
            className="p-3 rounded-xl bg-[#faf7f2] border border-[#eee6dc] flex items-start justify-between gap-3 text-xs"
          >
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${getSeverityBadge(log.severity)}`}>
                  {log.severity}
                </span>
                <span className="font-bold text-[#2a1d17]">{log.component}</span>
                <span className="text-[10px] text-[#8f796a]">({log.timestamp})</span>
              </div>
              <p className="text-[11px] text-[#7a6759] font-medium leading-snug">
                {log.event}
              </p>
              <div className="text-[10px] text-[#8f796a]">
                Actor: <span className="text-[#2a1d17] font-semibold">{log.actor}</span>
              </div>
            </div>

            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-[#d7cec7] text-[#8f5323] flex-shrink-0">
              {log.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
