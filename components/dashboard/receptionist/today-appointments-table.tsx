'use client';

import React, { useState } from 'react';
import { Search, Filter, CheckCircle2, Clock, Calendar, UserCheck, XCircle, MoreVertical } from 'lucide-react';
import { AppointmentRecord } from '@/lib/mock/receptionist-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TodayAppointmentsTableProps {
  appointments: AppointmentRecord[];
  onCheckIn: (aptId: string) => void;
  onRescheduleClick: (apt: AppointmentRecord) => void;
  onCancelClick: (aptId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function TodayAppointmentsTable({
  appointments,
  onCheckIn,
  onRescheduleClick,
  onCancelClick,
  searchQuery,
  onSearchChange,
}: TodayAppointmentsTableProps) {
  const [statusFilter, setStatusFilter] = useState<string>('ALL');

  const filteredAppointments = appointments.filter((apt) => {
    // Status Filter
    if (statusFilter !== 'ALL' && apt.status.toUpperCase() !== statusFilter) {
      return false;
    }

    // Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = apt.patientName.toLowerCase().includes(q);
      const matchId = apt.patientId.toLowerCase().includes(q);
      const matchPhone = apt.patientPhone.includes(q);
      const matchService = apt.service.toLowerCase().includes(q);
      const matchDoctor = apt.doctor.toLowerCase().includes(q);

      return matchName || matchId || matchPhone || matchService || matchDoctor;
    }

    return true;
  });

  const getStatusBadge = (status: AppointmentRecord['status']) => {
    switch (status) {
      case 'Checked-In':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
            <UserCheck className="h-3 w-3" /> Checked In
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-950 border border-stone-300">
            <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Completed
          </span>
        );
      case 'Scheduled':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300">
            <Clock className="h-3 w-3 text-[#8f5323]" /> Scheduled
          </span>
        );
      case 'Cancelled':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-red-900 border border-red-300">
            <XCircle className="h-3 w-3" /> Cancelled
          </span>
        );
      default:
        return (
          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-800">
            {status}
          </span>
        );
    }
  };

  return (
    <div className="bg-white border border-[#e5ddd3] rounded-2xl shadow-2xs overflow-hidden">
      
      {/* Table Controls Header */}
      <div className="p-4 sm:p-5 bg-[#faf7f2] border-b border-[#e5ddd3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#2a1d17] flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#8f5323]" />
            Today's Appointment Schedule
          </h3>
          <p className="text-xs text-[#7a6759] mt-0.5">
            {filteredAppointments.length} appointment{filteredAppointments.length !== 1 ? 's' : ''} listed
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#8f796a]" />
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Filter patient, service..."
              className="pl-9 h-9 w-full sm:w-56 bg-white border-[#d7cec7] text-xs text-[#2a1d17]"
            />
          </div>

          <div className="flex items-center bg-white border border-[#d7cec7] rounded-lg p-0.5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setStatusFilter('ALL')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                statusFilter === 'ALL' ? 'bg-[#8f5323] text-white' : 'text-[#5f493c] hover:text-[#8f5323]'
              }`}
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('SCHEDULED')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                statusFilter === 'SCHEDULED' ? 'bg-[#8f5323] text-white' : 'text-[#5f493c] hover:text-[#8f5323]'
              }`}
            >
              Scheduled
            </button>
            <button
              type="button"
              onClick={() => setStatusFilter('CHECKED-IN')}
              className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                statusFilter === 'CHECKED-IN' ? 'bg-[#8f5323] text-white' : 'text-[#5f493c] hover:text-[#8f5323]'
              }`}
            >
              Checked In
            </button>
          </div>
        </div>
      </div>

      {/* Appointment Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-[#f7f4ee] border-b border-[#eee6dc] text-[#4a3428] font-bold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3 px-4">Time</th>
              <th className="py-3 px-4">Patient Information</th>
              <th className="py-3 px-4">Treatment / Service</th>
              <th className="py-3 px-4">Specialist Doctor</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f3eee7] text-[#2a1d17]">
            {filteredAppointments.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-[#8f796a]">
                  No appointments found matching current filter criteria.
                </td>
              </tr>
            ) : (
              filteredAppointments.map((apt) => (
                <tr key={apt.id} className="hover:bg-amber-50/30 transition-colors">
                  
                  {/* Time */}
                  <td className="py-3.5 px-4 font-bold text-[#8f5323] whitespace-nowrap">
                    {apt.time}
                  </td>

                  {/* Patient Info */}
                  <td className="py-3.5 px-4">
                    <div className="font-bold text-[#2a1d17]">{apt.patientName}</div>
                    <div className="text-[11px] text-[#7a6759] flex items-center gap-2">
                      <span className="font-mono">{apt.patientId}</span>
                      <span>•</span>
                      <span>{apt.patientPhone}</span>
                    </div>
                  </td>

                  {/* Service */}
                  <td className="py-3.5 px-4">
                    <div className="font-medium">{apt.service}</div>
                    <span className="text-[10px] text-[#8f796a] bg-stone-100 px-1.5 py-0.5 rounded border border-stone-200">
                      {apt.category}
                    </span>
                  </td>

                  {/* Doctor */}
                  <td className="py-3.5 px-4 font-medium text-[#4a3428]">
                    {apt.doctor}
                  </td>

                  {/* Status Badge */}
                  <td className="py-3.5 px-4">
                    {getStatusBadge(apt.status)}
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {apt.status === 'Scheduled' && (
                        <Button
                          size="sm"
                          onClick={() => onCheckIn(apt.id)}
                          className="h-7 text-[11px] bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-2.5 cursor-pointer shadow-2xs"
                        >
                          <UserCheck className="h-3 w-3 mr-1" />
                          Check In
                        </Button>
                      )}

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-[#7a6759] hover:bg-amber-100/50 cursor-pointer"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40 bg-white border-[#e5ddd3]">
                          {apt.status === 'Scheduled' && (
                            <DropdownMenuItem
                              onClick={() => onCheckIn(apt.id)}
                              className="text-xs font-semibold text-emerald-800 cursor-pointer"
                            >
                              Check In Patient
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem
                            onClick={() => onRescheduleClick(apt)}
                            className="text-xs font-medium cursor-pointer"
                          >
                            Reschedule Time
                          </DropdownMenuItem>
                          {apt.status !== 'Cancelled' && (
                            <DropdownMenuItem
                              onClick={() => onCancelClick(apt.id)}
                              className="text-xs text-red-700 font-medium cursor-pointer"
                            >
                              Cancel Appointment
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </td>

                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
