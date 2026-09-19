'use client';

import React from 'react';
import { Calendar, UserCheck, Clock, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ReceptionistKpisProps {
  todaysAppointments: number;
  checkedIn: number;
  waiting: number;
  completed: number;
}

export function ReceptionistKpis({
  todaysAppointments,
  checkedIn,
  waiting,
  completed,
}: ReceptionistKpisProps) {
  const cards = [
    {
      title: "Today's Appointments",
      value: todaysAppointments,
      subtitle: 'Scheduled appointments',
      icon: Calendar,
      iconBg: 'bg-amber-100 text-[#8f5323]',
      borderClass: 'border-amber-200/80',
    },
    {
      title: 'Checked In',
      value: checkedIn,
      subtitle: 'Arrived at clinic',
      icon: UserCheck,
      iconBg: 'bg-emerald-100 text-emerald-800',
      borderClass: 'border-emerald-200/80',
    },
    {
      title: 'Waiting in Lounge',
      value: waiting,
      subtitle: 'Awaiting consultation',
      icon: Clock,
      iconBg: 'bg-orange-100 text-orange-800',
      borderClass: 'border-orange-200/80',
    },
    {
      title: 'Completed Today',
      value: completed,
      subtitle: 'Visits concluded',
      icon: CheckCircle2,
      iconBg: 'bg-stone-100 text-stone-800',
      borderClass: 'border-stone-200/80',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className={`bg-white border ${card.borderClass} shadow-2xs hover:shadow-xs transition-shadow rounded-2xl`}
          >
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#7a6759]">
                  {card.title}
                </p>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#2a1d17] mt-1">
                  {card.value}
                </h3>
                <p className="text-[11px] text-[#8f796a] mt-0.5 font-medium">
                  {card.subtitle}
                </p>
              </div>

              <div className={`p-3 rounded-xl ${card.iconBg}`}>
                <Icon className="h-6 w-6" />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
