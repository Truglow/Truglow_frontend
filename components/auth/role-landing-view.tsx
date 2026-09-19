'use client';

import React from 'react';
import { UserRole } from '@/types/auth';
import { useAuth } from '@/hooks/use-auth';
import { ROLE_DETAILS } from '@/lib/auth/roles';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, CheckCircle2, User, Mail, Building, Key, Clock } from 'lucide-react';

interface RoleLandingViewProps {
  expectedRole: UserRole;
}

export function RoleLandingView({ expectedRole }: RoleLandingViewProps) {
  const { user, role } = useAuth();
  const meta = ROLE_DETAILS[expectedRole];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-white border border-[#e5ddd3] rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${meta.badgeClass}`}>
                {meta.label} Workspace
              </span>
              <span className="text-xs text-[#8f796a] flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Authenticated Session
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#2a1d17]">
              Welcome, {user?.name || meta.label}
            </h1>
            <p className="text-sm text-[#7a6759] mt-1.5 max-w-2xl">
              {meta.description}
            </p>
          </div>

          <div className="sm:text-right text-xs text-[#7a6759] bg-[#faf7f2] p-3 rounded-lg border border-[#eee6dc]">
            <div className="font-semibold text-[#2a1d17]">Current Clinic Branch</div>
            <div className="text-emerald-700 font-medium">{user?.branch || 'Hyderabad Centers'}</div>
          </div>
        </div>
      </div>

      {/* Grid: Session Diagnostics & Next Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* User Identity Card */}
        <Card className="bg-white border-[#e5ddd3] shadow-xs">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold text-[#2a1d17] flex items-center gap-2">
              <User className="h-4 w-4 text-[#8f5323]" />
              Staff Profile
            </CardTitle>
            <CardDescription className="text-xs text-[#7a6759]">
              Verified credential data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-xs">
            <div className="flex justify-between py-1.5 border-b border-[#f3eee7]">
              <span className="text-[#8f796a] flex items-center gap-1.5">
                <Key className="h-3.5 w-3.5" /> Staff ID:
              </span>
              <span className="font-mono font-medium text-[#2a1d17]">{user?.id || '—'}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#f3eee7]">
              <span className="text-[#8f796a] flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> Email:
              </span>
              <span className="font-medium text-[#2a1d17]">{user?.email || '—'}</span>
            </div>
            <div className="flex justify-between py-1.5 border-b border-[#f3eee7]">
              <span className="text-[#8f796a] flex items-center gap-1.5">
                <Building className="h-3.5 w-3.5" /> Branch:
              </span>
              <span className="font-medium text-[#2a1d17]">{user?.branch || '—'}</span>
            </div>
            <div className="flex justify-between py-1.5">
              <span className="text-[#8f796a] flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" /> Role Level:
              </span>
              <span className="font-semibold text-[#8f5323]">{role || expectedRole}</span>
            </div>
          </CardContent>
        </Card>

        {/* System Status / Foundation Notice */}
        <Card className="bg-white border-[#e5ddd3] shadow-xs md:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold text-[#2a1d17] flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-700" />
              Role-Based Authentication Foundation Ready
            </CardTitle>
            <CardDescription className="text-xs text-[#7a6759]">
              Feature 1 verification notice
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-[#5f493c] leading-relaxed">
            <p>
              You have successfully authenticated through the new TruGlow Clinic Management Portal login system. 
              The system verified your identity server-side, issued an HTTP-only signed session, and safely redirected you to your authorized <strong className="text-[#2a1d17]">{meta.label}</strong> workspace.
            </p>
            <div className="p-3.5 rounded-lg bg-amber-50/80 border border-amber-200/70 text-[#713f12] text-xs space-y-1">
              <div className="font-semibold text-[#854d0e] flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#854d0e]" />
                Next Feature Modules:
              </div>
              <p className="text-[11px] text-[#854d0e]/90">
                In accordance with project guidelines, role-specific operational modules (appointment management, patient charts, reports, staff administration) will be layered onto this secure authentication foundation in subsequent features.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
