'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { getFilteredNavSections } from '@/lib/auth/nav-config';
import { ROLE_DETAILS } from '@/lib/auth/roles';
import { LogOut, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StaffSidebarProps {
  onItemClick?: () => void;
  className?: string;
}

export function StaffSidebar({ onItemClick, className = '' }: StaffSidebarProps) {
  const pathname = usePathname();
  const { user, role, logout } = useAuth();

  if (!role) return null;

  const navSections = getFilteredNavSections(role);
  const roleMeta = ROLE_DETAILS[role];

  return (
    <aside
      className={`w-64 bg-[#fcfaf7] border-r border-[#e5ddd3] flex flex-col justify-between h-full select-none ${className}`}
    >
      {/* Top Branding & Section Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6 scrollbar-thin">
        
        {/* TruGlow Portal Brand Header */}
        <div className="flex flex-col space-y-2 pb-4 border-b border-[#eee6dc]">
          <Link
            href={roleMeta.dashboardPath}
            onClick={onItemClick}
            className="inline-block transition-transform hover:scale-102"
          >
            <div className="relative h-11 w-40">
              <Image
                src="/Asset_logo_2.svg"
                alt="TruGlow Clinic"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8f5323] bg-amber-100/70 px-2 py-0.5 rounded-md border border-amber-200/80">
              Staff Portal
            </span>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md border ${roleMeta.badgeClass}`}>
              {roleMeta.label}
            </span>
          </div>
        </div>

        {/* Navigation Sections & Links */}
        <nav className="space-y-5">
          {navSections.map((section) => (
            <div key={section.title} className="space-y-1.5">
              <h4 className="px-2 text-[10px] font-bold uppercase tracking-widest text-[#a8998d]">
                {section.title}
              </h4>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    pathname === item.href ||
                    (item.href !== '/dashboard' &&
                      !item.href.startsWith('/dashboard/') &&
                      pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={onItemClick}
                      className={`group flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-amber-100/80 text-[#8f5323] font-bold shadow-2xs border border-amber-200/80'
                          : 'text-[#5f493c] hover:bg-amber-50 hover:text-[#8f5323]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon
                          className={`h-4 w-4 transition-colors ${
                            isActive ? 'text-[#8f5323]' : 'text-[#8f796a] group-hover:text-[#8f5323]'
                          }`}
                        />
                        <span>{item.title}</span>
                      </div>

                      {isActive && (
                        <ChevronRight className="h-3.5 w-3.5 text-[#8f5323]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom Footer & Logout Action */}
      <div className="p-4 border-t border-[#eee6dc] bg-[#faf7f2] space-y-3">
        <div className="flex items-center justify-between text-[11px] text-[#7a6759]">
          <span className="truncate font-semibold text-[#2a1d17]">{user?.name}</span>
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 flex-shrink-0" />
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={() => logout()}
          className="w-full h-9 border-[#d7cec7] text-[#4a3428] hover:bg-amber-100/60 hover:text-[#8f5323] hover:border-[#8f5323] text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-2"
        >
          <LogOut className="h-3.5 w-3.5" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
