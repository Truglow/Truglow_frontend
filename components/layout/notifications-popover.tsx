'use client';

import React, { useState } from 'react';
import { Bell, Check, Clock, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

interface NotificationItem {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
  type: 'appointment' | 'system' | 'alert';
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'New Patient Registration',
    description: 'Patient Priya Verma checked in for consultation',
    time: '10m ago',
    read: false,
    type: 'appointment',
  },
  {
    id: 'notif-[#notif-2]',
    title: 'Schedule Updated',
    description: 'Dr. Srinivas updated afternoon laser procedure slots',
    time: '1h ago',
    read: false,
    type: 'system',
  },
  {
    id: 'notif-3',
    title: 'System Security Verification',
    description: 'Role-based access controls active across clinic branches',
    time: '3h ago',
    read: true,
    type: 'alert',
  },
];

export function NotificationsPopover() {
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="View notifications"
          className="relative p-2 rounded-xl text-[#7a6759] hover:text-[#8f5323] hover:bg-amber-50/80 transition-all border border-transparent hover:border-[#e0d6cb] focus:outline-none cursor-pointer"
        >
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#8f5323] ring-2 ring-white animate-pulse" />
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-80 sm:w-96 bg-white border-[#e5ddd3] shadow-xl rounded-2xl p-0 overflow-hidden"
      >
        <div className="p-4 bg-[#faf7f2] border-b border-[#e5ddd3] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-[#8f5323]" />
            <h3 className="text-xs font-bold text-[#2a1d17]">Operational Notifications</h3>
            {unreadCount > 0 && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-[#8f5323] border border-amber-300">
                {unreadCount} new
              </span>
            )}
          </div>
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={markAllRead}
              className="text-[11px] h-7 text-[#8f5323] hover:text-[#6e3e18] hover:bg-amber-100/50 p-1 cursor-pointer font-medium"
            >
              <Check className="h-3 w-3 mr-1" />
              Mark all read
            </Button>
          )}
        </div>

        <div className="divide-y divide-[#f3eee7] max-h-80 overflow-y-auto">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-3.5 flex items-start gap-3 transition-colors ${
                n.read ? 'bg-white' : 'bg-amber-50/40'
              }`}
            >
              <div className="mt-0.5 p-1.5 rounded-lg bg-amber-100/80 text-[#8f5323] flex-shrink-0">
                {n.type === 'appointment' ? (
                  <Sparkles className="h-3.5 w-3.5" />
                ) : n.type === 'alert' ? (
                  <ShieldAlert className="h-3.5 w-3.5" />
                ) : (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                )}
              </div>
              <div className="flex-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#2a1d17]">{n.title}</span>
                  <span className="text-[10px] text-[#8f796a] flex items-center gap-0.5 font-mono">
                    <Clock className="h-3 w-3" /> {n.time}
                  </span>
                </div>
                <p className="text-[11px] text-[#7a6759] mt-0.5 leading-snug">
                  {n.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-2.5 bg-[#faf7f2] border-t border-[#e5ddd3] text-center">
          <span className="text-[10px] text-[#8f796a] font-medium">
            TruGlow Staff Notification System
          </span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
