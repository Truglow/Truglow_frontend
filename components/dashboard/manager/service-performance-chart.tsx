'use client';

import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ServicePerformanceData } from '@/lib/mock/manager-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope } from 'lucide-react';

interface ServicePerformanceChartProps {
  data: ServicePerformanceData[];
}

export function ServicePerformanceChart({ data }: ServicePerformanceChartProps) {
  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl overflow-hidden">
      <CardHeader className="pb-2 border-b border-[#eee6dc]">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
            <Stethoscope className="h-4 w-4 text-[#8f5323]" />
            Service Category Performance
          </CardTitle>
          <span className="text-[10px] font-semibold text-[#8f796a]">
            Top Treatments
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="h-48 w-full relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={80}
                paddingAngle={4}
                dataKey="bookings"
              >
                {data.map((entry) => (
                  <Cell key={entry.service} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  borderColor: '#e5ddd3',
                  borderRadius: '12px',
                  fontSize: '12px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute flex flex-col items-center justify-center pointer-events-none text-center">
            <span className="text-xl font-bold text-[#2a1d17]">32</span>
            <span className="text-[10px] text-[#8f796a] uppercase font-semibold">Total Visits</span>
          </div>
        </div>

        <div className="mt-3 space-y-2 text-xs">
          {data.map((item) => (
            <div key={item.service} className="flex items-center justify-between p-1.5 rounded-lg bg-[#faf7f2]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="font-semibold text-[#2a1d17] truncate max-w-[160px]">{item.service}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <span className="font-bold text-[#8f5323]">{item.bookings} visits</span>
                <span className="text-[10px] text-[#8f796a]">({item.percentage}%)</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
