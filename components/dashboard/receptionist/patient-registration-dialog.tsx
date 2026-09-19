'use client';

import React, { useState } from 'react';
import { UserPlus, Sparkles, Building2, Phone, Mail, User } from 'lucide-react';
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

interface PatientRegistrationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onPatientRegistered: (patient: { name: string; phone: string; service: string }) => void;
}

export function PatientRegistrationDialog({
  open,
  onOpenChange,
  onPatientRegistered,
}: PatientRegistrationDialogProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Female');
  const [age, setAge] = useState('');
  const [branch, setBranch] = useState('HITEC City');
  const [primaryConcern, setPrimaryConcern] = useState('Skin & Facial Aesthetics');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      onPatientRegistered({
        name: name.trim(),
        phone: phone.trim(),
        service: primaryConcern,
      });

      setIsSubmitting(false);
      setName('');
      setPhone('');
      setEmail('');
      setAge('');
      onOpenChange(false);
    }, 400);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white border-[#e5ddd3] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#2a1d17] flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-[#8f5323]" />
            Register New Patient
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7a6759]">
            Create a new electronic health intake record for TruGlow Hair & Skin Clinic.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Name */}
            <div className="space-y-1 sm:col-span-2">
              <Label htmlFor="reg-name" className="text-xs font-semibold text-[#4a3428]">
                Full Patient Name *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  id="reg-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ananya Reddy"
                  className="pl-9 h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-1">
              <Label htmlFor="reg-phone" className="text-xs font-semibold text-[#4a3428]">
                Phone Number *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  id="reg-phone"
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="pl-9 h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <Label htmlFor="reg-email" className="text-xs font-semibold text-[#4a3428]">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  id="reg-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patient@gmail.com"
                  className="pl-9 h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
                />
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent className="bg-white border-[#e5ddd3]">
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Age */}
            <div className="space-y-1">
              <Label htmlFor="reg-age" className="text-xs font-semibold text-[#4a3428]">
                Age (years)
              </Label>
              <Input
                id="reg-age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="28"
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
              />
            </div>

            {/* Branch */}
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Clinic Branch</Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-[#8f5323]" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-[#e5ddd3]">
                  <SelectItem value="HITEC City">HITEC City Branch</SelectItem>
                  <SelectItem value="Manikonda">Manikonda Branch</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Primary Concern */}
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Primary Treatment Interest</Label>
              <Select value={primaryConcern} onValueChange={setPrimaryConcern}>
                <SelectTrigger className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-[#8f5323]" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-[#e5ddd3]">
                  <SelectItem value="Skin & Facial Aesthetics">Skin & Facial Aesthetics</SelectItem>
                  <SelectItem value="Hair Restoration & PRP">Hair Restoration & PRP</SelectItem>
                  <SelectItem value="Laser Hair Reduction">Laser Hair Reduction</SelectItem>
                  <SelectItem value="Cosmetic Surgery Consultation">Cosmetic Surgery Consultation</SelectItem>
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
              {isSubmitting ? 'Registering...' : 'Register Patient'}
            </Button>
          </DialogFooter>

        </form>
      </DialogContent>
    </Dialog>
  );
}
