'use client';

import React, { useState } from 'react';
import { Lock, ShieldCheck, Key, Server, Check } from 'lucide-react';
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

interface SystemSettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SystemSettingsDialog({ open, onOpenChange }: SystemSettingsDialogProps) {
  const [cookieName] = useState('truglow_portal_token');
  const [jwtAlgo] = useState('HMAC-SHA256 (Web Crypto Subtly Signed)');
  const [sessionDuration, setSessionDuration] = useState('24 Hours (30 Days for Remember-Me)');
  const [rateLimit, setRateLimit] = useState('100 requests / minute / IP');
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
            <Lock className="h-5 w-5 text-[#8f5323]" />
            Global System & Security Settings
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7a6759]">
            Configure server-side session parameters, token verification, and security options.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSave} className="space-y-4 py-2 text-xs">
          
          <div className="space-y-3">
            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428] flex items-center gap-1">
                <Key className="h-3.5 w-3.5 text-[#8f5323]" /> Session Cookie Identifier
              </Label>
              <Input
                readOnly
                value={cookieName}
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17] font-mono"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428] flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#8f5323]" /> JWT Cryptographic Algorithm
              </Label>
              <Input
                readOnly
                value={jwtAlgo}
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17] font-mono"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428] flex items-center gap-1">
                <Server className="h-3.5 w-3.5 text-[#8f5323]" /> Token Expiration Lifetime
              </Label>
              <Input
                value={sessionDuration}
                onChange={(e) => setSessionDuration(e.target.value)}
                className="h-10 bg-[#fcfaf7] border-[#d7cec7] text-xs text-[#2a1d17]"
              />
            </div>

            <div className="space-y-1">
              <Label className="text-xs font-semibold text-[#4a3428]">API Rate Limiting Threshold</Label>
              <Input
                value={rateLimit}
                onChange={(e) => setRateLimit(e.target.value)}
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
              disabled={isSaved}
              className="h-9 text-xs bg-[#8f5323] hover:bg-[#744119] text-white font-semibold cursor-pointer"
            >
              {isSaved ? 'Saving System Config...' : 'Apply Security Config'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
