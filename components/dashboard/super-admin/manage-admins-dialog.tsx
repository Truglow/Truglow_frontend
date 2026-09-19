'use client';

import React, { useState } from 'react';
import { ShieldCheck, UserCheck, Key, Lock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface ManageAdminsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ManageAdminsDialog({ open, onOpenChange }: ManageAdminsDialogProps) {
  const [adminUsers] = useState([
    {
      id: 'usr-sad-04',
      name: 'Executive Director',
      email: 'superadmin@truglow.com',
      role: 'SUPER_ADMIN',
      status: 'Active Governance',
    },
    {
      id: 'usr-adm-03',
      name: 'Suresh Varma',
      email: 'admin@truglow.com',
      role: 'ADMIN',
      status: 'Clinic Administrator',
    },
    {
      id: 'usr-mng-02',
      name: 'Kavitha Rao',
      email: 'manager@truglow.com',
      role: 'MANAGER',
      status: 'Clinic Manager',
    },
  ]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-white border-[#e5ddd3] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#2a1d17] flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-[#8f5323]" />
            System Administrative Governance
          </DialogTitle>
          <DialogDescription className="text-xs text-[#7a6759]">
            Manage Administrator and Super Administrator role assignments and access levels.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 py-2 text-xs">
          <div className="divide-y divide-[#eee6dc] border border-[#e5ddd3] rounded-xl overflow-hidden">
            {adminUsers.map((u) => (
              <div key={u.id} className="p-3.5 bg-white flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#2a1d17]">{u.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      u.role === 'SUPER_ADMIN' 
                        ? 'bg-[#2a1d17] text-[#fbf9f5] border-[#4a3428]' 
                        : 'bg-orange-100 text-orange-950 border-orange-300'
                    }`}>
                      {u.role}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#7a6759] font-mono">{u.email}</div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert(`Role governance for ${u.name} is verified and enforced.`)}
                  className="h-8 text-[11px] border-[#d7cec7] text-[#4a3428] hover:bg-amber-50 cursor-pointer"
                >
                  <Key className="h-3 w-3 mr-1" /> Config
                </Button>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-[#faf7f2] border border-[#e8dfd6] text-[11px] text-[#5f493c] flex items-start gap-2">
            <Lock className="h-4 w-4 text-[#8f5323] flex-shrink-0 mt-0.5" />
            <span>All administrative role modifications generate cryptographically signed security audit logs.</span>
          </div>
        </div>

        <DialogFooter className="pt-2 border-t border-[#eee6dc]">
          <Button
            type="button"
            onClick={() => onOpenChange(false)}
            className="h-9 text-xs bg-[#8f5323] hover:bg-[#744119] text-white font-semibold cursor-pointer"
          >
            Close Governance Panel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
