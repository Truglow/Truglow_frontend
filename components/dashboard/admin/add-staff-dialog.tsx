'use client';

import React, { useState } from 'react';
import { UserPlus, Building2, Mail, User, ShieldCheck } from 'lucide-react';
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
import { AdminStaffSummary } from '@/lib/mock/admin-data';

interface AddStaffDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStaffAdded: (staff: Omit<AdminStaffSummary, 'id' | 'status'>) => void;
}

export function AddStaffDialog({
  open,
  onOpenChange,
  onStaffAdded,
}: AddStaffDialogProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'RECEPTIONIST' | 'MANAGER' | 'ADMIN'>('RECEPTIONIST');
  const [roleLabel, setRoleLabel] = useState('Front-Desk Receptionist');
  const [specialization, setSpecialization] = useState('Patient Intake & Queue');
  const [branch, setBranch] = useState('HITEC City');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      onStaffAdded({
        name: name.trim(),
        email: email.trim(),
        role,
        roleLabel: roleLabel || 'Clinic Staff',
        specialization: specialization || 'General Healthcare',
        branch,
      });

      setIsSubmitting(false);
      setName('');
      setEmail('');
      onOpenChange(false);
    }, 400);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white border-[#e5ddd3] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#2a1d17] flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-[#8f5323]" />
            Add New Clinic Staff Account
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7a6759]">
            Register a medical specialist, receptionist, or clinic manager in the TruGlow directory.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div className="space-y-1 sm:col-span-2">
              <Label htmlFor="staff-name" className="text-xs font-semibold text-[#4a3428]">
                Staff Full Name *
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  id="staff-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Rajesh Varma"
                  className="pl-9 h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1 sm:col-span-2">
              <Label htmlFor="staff-email" className="text-xs font-semibold text-[#4a3428]">
                Official Email Address *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  id="staff-email"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="staff.name@truglow.com"
                  className="pl-9 h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
                />
              </div>
            </div>

            {/* Role Access Level */}
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Role Level *</Label>
              <Select
                value={role}
                onValueChange={(val) => {
                  const r = val as 'RECEPTIONIST' | 'MANAGER' | 'ADMIN';
                  setRole(r);
                  if (r === 'RECEPTIONIST') setRoleLabel('Front-Desk Receptionist');
                  else if (r === 'MANAGER') setRoleLabel('Clinic Operational Manager');
                  else setRoleLabel('System Administrator');
                }}
              >
                <SelectTrigger className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#8f5323]" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-[#e5ddd3]">
                  <SelectItem value="RECEPTIONIST">RECEPTIONIST (Front-Desk)</SelectItem>
                  <SelectItem value="MANAGER">MANAGER (Operational Overview)</SelectItem>
                  <SelectItem value="ADMIN">ADMIN (Clinic Administration)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Branch Assignment */}
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Branch Center</Label>
              <Select value={branch} onValueChange={setBranch}>
                <SelectTrigger className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]">
                  <div className="flex items-center gap-1.5">
                    <Building2 className="h-3.5 w-3.5 text-[#8f5323]" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-[#e5ddd3]">
                  <SelectItem value="HITEC City">HITEC City Center</SelectItem>
                  <SelectItem value="Manikonda">Manikonda Center</SelectItem>
                  <SelectItem value="All Branches">All Hyderabad Centers</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Specialization / Title */}
            <div className="space-y-1 sm:col-span-2">
              <Label htmlFor="staff-spec" className="text-xs font-semibold text-[#4a3428]">
                Clinical Specialization / Department Title
              </Label>
              <Input
                id="staff-spec"
                value={specialization}
                onChange={(e) => setSpecialization(e.target.value)}
                placeholder="e.g. Senior Aesthetic Dermatologist & Laser Specialist"
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
              />
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
              {isSubmitting ? 'Creating Account...' : 'Add Staff Account'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
