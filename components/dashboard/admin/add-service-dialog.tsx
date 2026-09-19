'use client';

import React, { useState } from 'react';
import { Stethoscope, Clock, DollarSign, Tag } from 'lucide-react';
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
import { AdminServiceSummary } from '@/lib/mock/admin-data';

interface AddServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onServiceAdded: (service: Omit<AdminServiceSummary, 'id' | 'status'>) => void;
}

export function AddServiceDialog({
  open,
  onOpenChange,
  onServiceAdded,
}: AddServiceDialogProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<'Skin' | 'Hair' | 'Laser' | 'Cosmetic Surgery'>('Skin');
  const [durationMinutes, setDurationMinutes] = useState(45);
  const [priceINR, setPriceINR] = useState(4500);
  const [code, setCode] = useState('SKN-NEW-06');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      onServiceAdded({
        code: code.trim() || `TRU-${Math.floor(100 + Math.random() * 900)}`,
        name: name.trim(),
        category,
        durationMinutes: Number(durationMinutes) || 45,
        priceINR: Number(priceINR) || 4500,
      });

      setIsSubmitting(false);
      setName('');
      onOpenChange(false);
    }, 400);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white border-[#e5ddd3] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#2a1d17] flex items-center gap-2">
            <Stethoscope className="h-5 w-5 text-[#8f5323]" />
            Add Treatment / Service Catalog Item
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7a6759]">
            Configure new dermatological, laser, or cosmetic procedures in TruGlow clinic schedule.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Service Name */}
            <div className="space-y-1 sm:col-span-2">
              <Label htmlFor="srv-name" className="text-xs font-semibold text-[#4a3428]">
                Treatment / Service Name *
              </Label>
              <Input
                id="srv-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Advanced Glutathione & Vitamin C Peel"
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
              />
            </div>

            {/* Category */}
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">Category *</Label>
              <Select
                value={category}
                onValueChange={(val) => setCategory(val as 'Skin' | 'Hair' | 'Laser' | 'Cosmetic Surgery')}
              >
                <SelectTrigger className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]">
                  <div className="flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5 text-[#8f5323]" />
                    <SelectValue />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-white border-[#e5ddd3]">
                  <SelectItem value="Skin">Skin Aesthetics</SelectItem>
                  <SelectItem value="Hair">Hair Restoration</SelectItem>
                  <SelectItem value="Laser">Laser Procedures</SelectItem>
                  <SelectItem value="Cosmetic Surgery">Cosmetic Surgery</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Service Code */}
            <div className="space-y-1">
              <Label htmlFor="srv-code" className="text-xs font-semibold text-[#4a3428]">
                Service Code
              </Label>
              <Input
                id="srv-code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="SKN-GLU-06"
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17] font-mono"
              />
            </div>

            {/* Duration */}
            <div className="space-y-1">
              <Label htmlFor="srv-duration" className="text-xs font-semibold text-[#4a3428]">
                Duration (Minutes)
              </Label>
              <div className="relative">
                <Clock className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  id="srv-duration"
                  type="number"
                  value={durationMinutes}
                  onChange={(e) => setDurationMinutes(Number(e.target.value))}
                  placeholder="45"
                  className="pl-9 h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
                />
              </div>
            </div>

            {/* Price INR */}
            <div className="space-y-1">
              <Label htmlFor="srv-price" className="text-xs font-semibold text-[#4a3428]">
                Standard Fee (₹ INR)
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-4 w-4 text-[#8f796a]" />
                <Input
                  id="srv-price"
                  type="number"
                  value={priceINR}
                  onChange={(e) => setPriceINR(Number(e.target.value))}
                  placeholder="4500"
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
              {isSubmitting ? 'Saving...' : 'Add Service to Catalog'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
