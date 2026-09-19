'use client';

import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';
import { HourlyTrendData } from '@/lib/mock/manager-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';

interface AppointmentTrendsChartProps {
  data: HourlyTrendData[];
}

export function AppointmentTrendsChart({ data }: AppointmentTrendsChartProps) {
  return (
    <Card className="bg-white border-[#e5ddd3] shadow-2xs rounded-2xl overflow-hidden">
      <CardHeader className="pb-2 border-b border-[#eee6dc]">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-bold text-[#2a1d17] flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-[#8f5323]" />
            Hourly Appointment Volume & Patient Flow
          </CardTitle>
          <span className="text-[10px] font-semibold text-[#8f796a]">
            Today's Operating Hours
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-6">
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="bookedGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8f5323" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#8f5323" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="completedGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#059669" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#059669" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#eee6dc" vertical={false} />
              <XAxis
                dataKey="hour"
                stroke="#8f796a"
                fontSize={11}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#8f796a"
                fontSize={11}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#ffffff',
                  borderColor: '#e5ddd3',
                  borderRadius: '12px',
                  fontSize: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }}
              />
              <Area
                type="monotone"
                dataKey="booked"
                name="Booked Visits"
                stroke="#8f5323"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#bookedGrad)"
              />
              <Area
                type="monotone"
                dataKey="completed"
                name="Completed Visits"
                stroke="#059669"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#completedGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-3 pt-3 border-t border-[#f3eee7] flex items-center justify-center gap-6 text-xs font-semibold text-[#7a6759]">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#8f5323]" />
            <span>Booked Appointments</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-600" />
            <span>Concluded Visits</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
