'use client';

import React from 'react';
import { Server, CheckCircle2, ShieldCheck, Cpu, HardDrive } from 'lucide-react';
import { SYSTEM_SERVICES_HEALTH } from '@/lib/mock/super-admin-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SystemStatusGrid() {
  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-[#eee6dc] bg-[#faf7f2]/80">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
            <Server className="h-4 w-4 text-[#8f5323]" />
            System Infrastructure & Integration Health
          </CardTitle>
          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
            All Systems Normal
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {SYSTEM_SERVICES_HEALTH.map((svc) => (
          <div
            key={svc.id}
            className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#eee6dc] flex flex-col justify-between space-y-2 text-xs"
          >
            <div className="flex items-start justify-between">
              <span className="font-bold text-[#2a1d17] leading-tight">{svc.name}</span>
              <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-[#8f796a]">Category: <strong className="text-[#2a1d17]">{svc.category}</strong></span>
              <span className="font-mono text-[#8f5323] font-bold">{svc.uptime}</span>
            </div>

            <div className="flex items-center justify-between text-[10px] text-[#7a6759] border-t border-[#f3eee7] pt-1.5">
              <span>Latency: <span className="font-mono font-semibold">{svc.latency}</span></span>
              <span className="font-semibold text-emerald-700">{svc.status}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
