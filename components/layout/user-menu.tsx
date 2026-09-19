'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { ROLE_DETAILS } from '@/lib/auth/roles';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, User, Building2, ShieldCheck, ChevronDown } from 'lucide-react';

export function UserMenu() {
  const { user, role, logout } = useAuth();

  if (!user || !role) return null;

  const roleMeta = ROLE_DETAILS[role];

  // Helper for user initials avatar fallback
  const initials = user.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase()
    : 'TG';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-amber-50/80 transition-all border border-transparent hover:border-[#e0d6cb] focus:outline-none cursor-pointer"
        >
          <Avatar className="h-8 w-8 border border-[#8f5323]/20 bg-amber-100 text-[#8f5323]">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback className="text-xs font-bold bg-amber-100 text-[#8f5323]">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          <div className="hidden lg:flex flex-col text-left">
            <span className="text-xs font-bold text-[#2a1d17] leading-tight">
              {user.name}
            </span>
            <span className="text-[10px] text-[#7a6759] font-medium">
              {roleMeta.label}
            </span>
          </div>

          <ChevronDown className="h-3.5 w-3.5 text-[#8f796a] hidden lg:block" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 bg-white border-[#e5ddd3] shadow-lg rounded-xl p-1.5"
      >
        <DropdownMenuLabel className="p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-xs font-bold text-[#2a1d17]">{user.name}</p>
            <p className="text-[11px] text-[#7a6759] font-mono">{user.email}</p>
            <div className="flex items-center gap-1.5 pt-1">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${roleMeta.badgeClass}`}>
                {roleMeta.label}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-[#eee6dc]" />

        <div className="px-2 py-1.5 text-[11px] text-[#5f493c] space-y-1">
          <div className="flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5 text-[#8f5323]" />
            <span className="font-medium">{user.branch || 'Hyderabad Central'}</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-[#8f796a]">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Encrypted Staff Session</span>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-[#eee6dc]" />

        <DropdownMenuItem asChild>
          <Link
            href={roleMeta.dashboardPath}
            className="flex items-center gap-2 px-2 py-1.5 text-xs text-[#2a1d17] font-medium rounded-lg hover:bg-amber-50 cursor-pointer"
          >
            <User className="h-3.5 w-3.5 text-[#8f5323]" />
            Workspace Home
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-[#eee6dc]" />

        <DropdownMenuItem
          onClick={() => logout()}
          className="flex items-center gap-2 px-2 py-1.5 text-xs text-red-700 font-medium rounded-lg hover:bg-red-50 cursor-pointer"
        >
          <LogOut className="h-3.5 w-3.5 text-red-600" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
