'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AppointmentRecord } from '@/lib/mock/receptionist-data';

interface RescheduleDialogProps {
  appointment: AppointmentRecord | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRescheduleConfirm: (aptId: string, newTime: string, newDoctor: string) => void;
}

export function RescheduleDialog({
  appointment,
  open,
  onOpenChange,
  onRescheduleConfirm,
}: RescheduleDialogProps) {
  const [newTime, setNewTime] = useState(appointment?.time || '03:30 PM');
  const [newDoctor, setNewDoctor] = useState(appointment?.doctor || 'Dr. Kavitha Rao');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!appointment) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      onRescheduleConfirm(appointment.id, newTime, newDoctor);
      setIsSubmitting(false);
      onOpenChange(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-[#e5ddd3] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#2a1d17] flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#8f5323]" />
            Reschedule Appointment
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7a6759]">
            Change appointment timing or assigned specialist.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2 text-xs">
          <div className="bg-[#faf7f2] p-3 rounded-xl border border-[#eee6dc] space-y-1">
            <div className="flex justify-between font-bold text-[#2a1d17]">
              <span>{appointment.patientName}</span>
              <span className="font-mono text-[#8f5323]">{appointment.id}</span>
            </div>
            <div className="text-[#7a6759]">{appointment.service}</div>
            <div className="text-[11px] text-[#8f796a]">
              Current Time: <strong className="text-[#2a1d17]">{appointment.time}</strong>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">New Time Slot</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  value={newTime}
                  onChange={(e) => setNewTime(e.target.value)}
                  placeholder="e.g. 03:30 PM"
                  className="pl-9 h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
                />
              </div>
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Assigned Specialist</Label>
              <Select value={newDoctor} onValueChange={setNewDoctor}>
                <SelectTrigger className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#e5ddd3]">
                  <SelectItem value="Dr. Kavitha Rao">Dr. Kavitha Rao</SelectItem>
                  <SelectItem value="Dr. Srinivas Varma">Dr. Srinivas Varma</SelectItem>
                  <SelectItem value="Dr. Sunitha Reddy">Dr. Sunitha Reddy</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter className="pt-3 border-t border-[#eee6dc]">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="h-9 text-xs border-[#d7cec7] text-[#4a3428]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-9 text-xs bg-[#8f5323] hover:bg-[#744119] text-white font-semibold"
            >
              {isSubmitting ? 'Updating...' : 'Save Reschedule'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
