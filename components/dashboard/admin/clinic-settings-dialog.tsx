'use client';

import React, { useState } from 'react';
import { Settings, Building2, Phone, Clock, ShieldCheck } from 'lucide-react';
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

interface ClinicSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ClinicSettingsDialog({ open, onOpenChange }: ClinicSettingsDialogProps) {
  const [hitecPhone, setHitecPhone] = useState('+91 7799427273');
  const [manikondaPhone, setManikondaPhone] = useState('+91 7799427274');
  const [operatingHours, setOperatingHours] = useState('09:00 AM - 08:00 PM (Mon-Sat)');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onOpenChange(false);
    }, 400);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-[#e5ddd3] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#2a1d17] flex items-center gap-2">
            <Settings className="h-5 w-5 text-[#8f5323]" />
            Clinic Configuration Settings
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7a6759]">
            Administrative parameters for TruGlow Hair & Skin Clinic branches.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSave} className="space-y-4 py-2 text-xs">
          
          <div className="space-y-3">
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428] flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5 text-[#8f5323]" /> HITEC City Helpline Phone
              </Label>
              <Input
                value={hitecPhone}
                onChange={(e) => setHitecPhone(e.target.value)}
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428] flex items-center gap-1">
                <Building2 className="h-3.5 w-3.5 text-[#8f5323]" /> Manikonda Center Phone
              </Label>
              <Input
                value={manikondaPhone}
                onChange={(e) => setManikondaPhone(e.target.value)}
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428] flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-[#8f5323]" /> Operating Hours Schedule
              </Label>
              <Input
                value={operatingHours}
                onChange={(e) => setOperatingHours(e.target.value)}
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
              />
            </div>

            <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-[11px] text-[#713f12] flex items-start gap-2">
              <ShieldCheck className="h-4 w-4 text-[#8f5323] flex-shrink-0 mt-0.5" />
              <span>Global security settings and role architecture definitions are reserved for Super Administrator governance.</span>
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
              disabled={isSaved}
              className="h-9 text-xs bg-[#8f5323] hover:bg-[#744119] text-white font-semibold"
            >
              {isSaved ? 'Saving Settings...' : 'Save Configuration'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
