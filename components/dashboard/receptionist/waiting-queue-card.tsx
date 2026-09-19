'use client';

import React from 'react';
import { Users, Clock, ArrowRight, UserCheck } from 'lucide-react';
import { WaitingPatientRecord } from '@/lib/mock/receptionist-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface WaitingQueueCardProps {
  waitingList: WaitingPatientRecord[];
  onCallIn: (patientId: string) => void;
}

export function WaitingQueueCard({ waitingList, onCallIn }: WaitingQueueCardProps) {
  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl">
      <CardHeader className="pb-3 border-b border-[#eee6dc]">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
            <Users className="h-4 w-4 text-[#8f5323]" />
            Lounge Waiting Queue
          </CardTitle>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-900 border border-orange-200">
            {waitingList.length} In Lounge
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {waitingList.length === 0 ? (
          <div className="text-center py-6 text-xs text-[#8f796a]">
            <UserCheck className="h-6 w-6 mx-auto text-emerald-600 mb-1.5 opacity-60" />
            No patients currently waiting in the lounge.
          </div>
        ) : (
          waitingList.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-xl bg-[#faf7f2] border border-[#eee6dc] flex items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-0.5 min-w-0">
                <div className="font-bold text-[#2a1d17] truncate">{item.patientName}</div>
                <div className="text-[11px] text-[#7a6759] truncate">{item.service}</div>
                <div className="text-[10px] text-[#8f796a] flex items-center gap-2">
                  <span>Doc: {item.doctor}</span>
                  <span>•</span>
                  <span className="font-mono flex items-center gap-0.5 text-orange-800 font-semibold">
                    <Clock className="h-3 w-3" /> Wait: {item.waitTimeMinutes}m
                  </span>
                </div>
              </div>

              <Button
                size="sm"
                onClick={() => onCallIn(item.id)}
                className="h-8 text-[11px] bg-[#8f5323] hover:bg-[#744119] text-white font-bold px-2.5 flex-shrink-0 cursor-pointer"
              >
                Call In <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}
