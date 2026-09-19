'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/use-auth';
import {
  INITIAL_MOCK_APPOINTMENTS,
  INITIAL_MOCK_WAITING,
  INITIAL_MOCK_ACTIVITIES,
  AppointmentRecord,
  WaitingPatientRecord,
  ActivityRecord,
} from '@/lib/mock/receptionist-data';
import { ReceptionistKpis } from '@/components/dashboard/receptionist/receptionist-kpis';
import { ReceptionistQuickActions } from '@/components/dashboard/receptionist/receptionist-quick-actions';
import { TodayAppointmentsTable } from '@/components/dashboard/receptionist/today-appointments-table';
import { WaitingQueueCard } from '@/components/dashboard/receptionist/waiting-queue-card';
import { RecentActivityCard } from '@/components/dashboard/receptionist/recent-activity-card';
import { PatientRegistrationDialog } from '@/components/dashboard/receptionist/patient-registration-dialog';
import { AppointmentBookingDialog } from '@/components/dashboard/receptionist/appointment-booking-dialog';
import { RescheduleDialog } from '@/components/dashboard/receptionist/reschedule-dialog';
import { Sparkles, Building2, CheckCircle2 } from 'lucide-react';

export function ReceptionistDashboard() {
  const { user } = useAuth();

  // Master State from mock data
  const [appointments, setAppointments] = useState<AppointmentRecord[]>(INITIAL_MOCK_APPOINTMENTS);
  const [waitingList, setWaitingList] = useState<WaitingPatientRecord[]>(INITIAL_MOCK_WAITING);
  const [activities, setActivities] = useState<ActivityRecord[]>(INITIAL_MOCK_ACTIVITIES);

  // Filter & Dialog Controls
  const [searchQuery, setSearchQuery] = useState('');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [rescheduleTarget, setRescheduleTarget] = useState<AppointmentRecord | null>(null);

  // Time-based greeting helper
  const hour = new Date().getHours();
  const timeGreeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  const receptionistName = user?.name || 'Priya Sharma';

  // Computed KPIs
  const todaysAppointmentsCount = appointments.length;
  const checkedInCount = appointments.filter((a) => a.status === 'Checked-In' || a.status === 'In-Consultation').length;
  const waitingCount = waitingList.length;
  const completedCount = appointments.filter((a) => a.status === 'Completed').length;

  // Handler: Check-in patient
  const handleCheckIn = (aptId: string) => {
    const targetApt = appointments.find((a) => a.id === aptId);
    if (!targetApt) return;

    // Update appointment status
    setAppointments((prev) =>
      prev.map((a) => (a.id === aptId ? { ...a, status: 'Checked-In' } : a))
    );

    // Add to waiting lounge list
    const newWaitItem: WaitingPatientRecord = {
      id: `W-${Math.floor(10 + Math.random() * 90)}`,
      patientId: targetApt.patientId,
      patientName: targetApt.patientName,
      service: targetApt.service,
      doctor: targetApt.doctor,
      checkInTime: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      waitTimeMinutes: 0,
      status: 'Waiting in Lounge',
    };

    setWaitingList((prev) => [newWaitItem, ...prev]);

    // Log Activity
    const newActivity: ActivityRecord = {
      id: `ACT-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      type: 'checkin',
      title: 'Patient Checked In',
      description: `${targetApt.patientName} checked in for ${targetApt.service}`,
      staffName: `${receptionistName} (Receptionist)`,
    };
    setActivities((prev) => [newActivity, ...prev]);
  };

  // Handler: Call in waiting patient
  const handleCallInWaiting = (waitId: string) => {
    const item = waitingList.find((w) => w.id === waitId);
    if (!item) return;

    setWaitingList((prev) => prev.filter((w) => w.id !== waitId));

    const newActivity: ActivityRecord = {
      id: `ACT-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      type: 'checkin',
      title: 'Called to Consultation',
      description: `${item.patientName} directed to ${item.doctor}'s room`,
      staffName: `${receptionistName} (Receptionist)`,
    };
    setActivities((prev) => [newActivity, ...prev]);
  };

  // Handler: Reschedule Appointment Confirm
  const handleRescheduleConfirm = (aptId: string, newTime: string, newDoctor: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === aptId ? { ...a, time: newTime, doctor: newDoctor } : a))
    );

    const target = appointments.find((a) => a.id === aptId);
    if (target) {
      const newActivity: ActivityRecord = {
        id: `ACT-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        type: 'reschedule',
        title: 'Appointment Rescheduled',
        description: `${target.patientName}'s visit updated to ${newTime} with ${newDoctor}`,
        staffName: `${receptionistName} (Receptionist)`,
      };
      setActivities((prev) => [newActivity, ...prev]);
    }
  };

  // Handler: Cancel Appointment
  const handleCancelAppointment = (aptId: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === aptId ? { ...a, status: 'Cancelled' } : a))
    );

    const target = appointments.find((a) => a.id === aptId);
    if (target) {
      const newActivity: ActivityRecord = {
        id: `ACT-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        type: 'cancellation',
        title: 'Appointment Cancelled',
        description: `Cancelled ${target.patientName}'s appointment (${target.id})`,
        staffName: `${receptionistName} (Receptionist)`,
      };
      setActivities((prev) => [newActivity, ...prev]);
    }
  };

  // Handler: Patient Registered Callback
  const handlePatientRegistered = (patient: { name: string; phone: string; service: string }) => {
    const newActivity: ActivityRecord = {
      id: `ACT-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      type: 'registration',
      title: 'New Patient Registered',
      description: `Registered ${patient.name} (${patient.phone})`,
      staffName: `${receptionistName} (Receptionist)`,
    };
    setActivities((prev) => [newActivity, ...prev]);
  };

  // Handler: Appointment Booked Callback
  const handleAppointmentBooked = (apt: Omit<AppointmentRecord, 'id' | 'status'>) => {
    const newApt: AppointmentRecord = {
      ...apt,
      id: `APT-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'Scheduled',
    };

    setAppointments((prev) => [newApt, ...prev]);

    const newActivity: ActivityRecord = {
      id: `ACT-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      type: 'booking',
      title: 'New Appointment Booked',
      description: `Booked ${newApt.service} for ${newApt.patientName} at ${newApt.time}`,
      staffName: `${receptionistName} (Receptionist)`,
    };
    setActivities((prev) => [newActivity, ...prev]);
  };

  return (
    <div className="space-y-6">
      
      {/* Receptionist Header Banner */}
      <div className="bg-white border border-[#e5ddd3] rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                Front Desk Operations
              </span>
              <span className="text-xs text-[#8f796a] flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Live Reception Queue
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2a1d17]">
              {timeGreeting}, {receptionistName}
            </h1>
            <p className="text-sm text-[#7a6759] mt-1">
              Here's what's happening at the clinic today.
            </p>
          </div>

          <div className="sm:text-right text-xs text-[#7a6759] bg-[#faf7f2] p-3 rounded-xl border border-[#eee6dc]">
            <div className="font-semibold text-[#2a1d17] flex items-center gap-1">
              <Building2 className="h-3.5 w-3.5 text-[#8f5323]" />
              {user?.branch || 'Manikonda & HITEC City'}
            </div>
            <div className="text-emerald-700 font-medium mt-0.5 flex items-center gap-1">
              <Sparkles className="h-3 w-3" /> Reception Counter Active
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <ReceptionistKpis
        todaysAppointments={todaysAppointmentsCount}
        checkedIn={checkedInCount}
        waiting={waitingCount}
        completed={completedCount}
      />

      {/* Quick Action Shortcuts Bar */}
      <ReceptionistQuickActions
        onRegisterClick={() => setIsRegisterOpen(true)}
        onBookClick={() => setIsBookingOpen(true)}
        onCheckInClick={() => {
          const firstScheduled = appointments.find((a) => a.status === 'Scheduled');
          if (firstScheduled) handleCheckIn(firstScheduled.id);
        }}
        onSearchFocus={() => {
          const searchInput = document.querySelector('input[placeholder*="Filter patient"]') as HTMLInputElement;
          if (searchInput) searchInput.focus();
        }}
      />

      {/* Today's Appointments Table */}
      <TodayAppointmentsTable
        appointments={appointments}
        onCheckIn={handleCheckIn}
        onRescheduleClick={(apt) => setRescheduleTarget(apt)}
        onCancelClick={handleCancelAppointment}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Lounge Waiting Queue & Recent Activity Side-by-Side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <WaitingQueueCard
          waitingList={waitingList}
          onCallIn={handleCallInWaiting}
        />
        <RecentActivityCard activities={activities} />
      </div>

      {/* Modals */}
      <PatientRegistrationDialog
        open={isRegisterOpen}
        onOpenChange={setIsRegisterOpen}
        onPatientRegistered={handlePatientRegistered}
      />

      <AppointmentBookingDialog
        open={isBookingOpen}
        onOpenChange={setIsBookingOpen}
        onAppointmentBooked={handleAppointmentBooked}
      />

      <RescheduleDialog
        appointment={rescheduleTarget}
        open={!!rescheduleTarget}
        onOpenChange={(open) => {
          if (!open) setRescheduleTarget(null);
        }}
        onRescheduleConfirm={handleRescheduleConfirm}
      />

    </div>
  );
}
