'use client';

import React from 'react';
import { ShieldAlert, AlertTriangle, Info, ArrowRight, CheckCircle2 } from 'lucide-react';
import { OperationalAlert } from '@/lib/mock/manager-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface OperationalAlertsProps {
  alerts: OperationalAlert[];
  onActionClick: (alertId: string) => void;
}

export function OperationalAlerts({ alerts, onActionClick }: OperationalAlertsProps) {
  const getAlertIcon = (type: OperationalAlert['type']) => {
    switch (type) {
      case 'danger':
        return <ShieldAlert className="h-4 w-4 text-red-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-amber-600" />;
      case 'info':
        return <Info className="h-4 w-4 text-emerald-600" />;
    }
  };

  const getAlertBadge = (type: OperationalAlert['type']) => {
    switch (type) {
      case 'danger':
        return 'bg-red-100 text-red-900 border-red-300';
      case 'warning':
        return 'bg-amber-100 text-amber-900 border-amber-300';
      case 'info':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300';
    }
  };

  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl overflow-hidden">
      <CardHeader className="pb-3 border-b border-[#eee6dc] bg-[#faf7f2]/80">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-[#8f5323]" />
            Operational Alerts & Action Items
          </CardTitle>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-[#8f5323] border border-amber-300">
            {alerts.length} Items Require Review
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#eee6dc] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
          >
            <div className="flex items-start gap-3">
              <div className="mt-0.5 p-1.5 rounded-lg bg-white border border-[#e0d6cb] flex-shrink-0">
                {getAlertIcon(alert.type)}
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[#2a1d17]">{alert.title}</span>
                  <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded border ${getAlertBadge(alert.type)}`}>
                    {alert.branch}
                  </span>
                </div>
                <p className="text-[11px] text-[#7a6759] leading-snug">
                  {alert.description}
                </p>
              </div>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={() => onActionClick(alert.id)}
              className="h-8 text-[11px] border-[#d7cec7] text-[#8f5323] hover:bg-amber-100/60 font-bold px-3 flex-shrink-0 self-end sm:self-auto cursor-pointer"
            >
              {alert.actionableText} <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
