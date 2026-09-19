'use client';

import React, { useState } from 'react';
import { Calendar, Clock, User, Stethoscope } from 'lucide-react';
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

interface AppointmentBookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAppointmentBooked: (apt: Omit<AppointmentRecord, 'id' | 'status'>) => void;
}

export function AppointmentBookingDialog({
  open,
  onOpenChange,
  onAppointmentBooked,
}: AppointmentBookingDialogProps) {
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [service, setService] = useState('HydraFacial Glow Treatment');
  const [category, setCategory] = useState<'Skin' | 'Hair' | 'Laser' | 'Cosmetic Surgery'>('Skin');
  const [doctor, setDoctor] = useState('Dr. Kavitha Rao');
  const [time, setTime] = useState('12:30 PM');
  const [branch, setBranch] = useState('HITEC City');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !patientPhone.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedId = `PAT-2026-${Math.floor(100 + Math.random() * 900)}`;
      onAppointmentBooked({
        patientId: generatedId,
        patientName: patientName.trim(),
        patientPhone: patientPhone.trim(),
        service,
        category,
        doctor,
        time,
        branch,
      });

      setIsSubmitting(false);
      setPatientName('');
      setPatientPhone('');
      onOpenChange(false);
    }, 400);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white border-[#e5ddd3] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#2a1d17] flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#8f5323]" />
            Book New Appointment
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7a6759]">
            Schedule a consultation or procedure for a patient.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Patient Name */}
            <div className="space-y-1 sm:col-span-2">
              <Label htmlFor="apt-patient" className="text-xs font-semibold text-[#4a3428]">
                Patient Name *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  id="apt-patient"
                  required
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  placeholder="e.g. Vikram Sharma"
                  className="pl-9 h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="apt-phone" className="text-xs font-semibold text-[#4a3428]">
                Contact Number *
              </Label>
              <Input
                id="apt-phone"
                required
                type="tel"
                value={patientPhone}
                onChange={(e) => setPatientPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
              />
            </div>

            {/* Treatment Category */}
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Category</Label>
              <Select
                value={category}
                onValueChange={(val) => setCategory(val as 'Skin' | 'Hair' | 'Laser' | 'Cosmetic Surgery')}
              >
                <SelectTrigger className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#e5ddd3]">
                  <SelectItem value="Skin">Skin Care</SelectItem>
                  <SelectItem value="Hair">Hair Treatments</SelectItem>
                  <SelectItem value="Laser">Laser Procedures</SelectItem>
                  <SelectItem value="Cosmetic Surgery">Cosmetic Surgery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Service */}
            <div className="space-y-1 sm:col-span-2">
              <Label className="text-xs font-semibold text-[#4a3428]">Procedure / Service</Label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]">
                  <div className="flex items-center gap-1.5">
                    <Stethoscope className="h-3.5 w-3.5 text-[#8f5323]" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-[#e5ddd3]">
                  <SelectItem value="HydraFacial Glow Treatment">HydraFacial Glow Treatment</SelectItem>
                  <SelectItem value="PRP Hair Restoration (Session 2)">PRP Hair Restoration</SelectItem>
                  <SelectItem value="Full Face Laser Hair Reduction">Full Face Laser Hair Reduction</SelectItem>
                  <SelectItem value="Acne Scar Revision Consultation">Acne Scar Revision</SelectItem>
                  <SelectItem value="Chemical Peel & Brightening">Chemical Peel & Brightening</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Doctor */}
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Specialist / Doctor</Label>
              <Select value={doctor} onValueChange={setDoctor}>
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

            {/* Time Slot */}
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Time Slot</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="12:30 PM"
                  className="pl-9 h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
                />
              </div>
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
              {isSubmitting ? 'Booking...' : 'Confirm Appointment'}
            </Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
}
