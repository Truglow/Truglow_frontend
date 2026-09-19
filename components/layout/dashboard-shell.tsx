'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/use-auth';
import { ROLE_DETAILS } from '@/lib/auth/roles';
import { StaffSidebar } from '@/components/layout/staff-sidebar';
import { StaffHeader } from '@/components/layout/staff-header';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ShieldCheck, Loader2 } from 'lucide-react';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { user, role, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f7f4ee] flex flex-col items-center justify-center p-6 text-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#8f5323] mb-3" />
        <h3 className="text-sm font-bold text-[#2a1d17]">Loading Staff Workspace...</h3>
        <p className="text-xs text-[#7a6759] mt-1">Verifying credentials and branch permissions</p>
      </div>
    );
  }

  if (!user || !role) {
    return <main className="min-h-screen bg-[#f7f4ee]">{children}</main>;
  }

  const roleMeta = ROLE_DETAILS[role];

  // Derive simple breadcrumb title from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const currentSegment = pathSegments[pathSegments.length - 1] || 'dashboard';
  const pageTitle =
    currentSegment === 'receptionist' ? 'Reception Desk'
    : currentSegment === 'manager' ? 'Operational Manager'
    : currentSegment === 'admin' ? 'Administration'
    : currentSegment === 'super-admin' ? 'Super Admin Governance'
    : currentSegment.charAt(0).toUpperCase() + currentSegment.slice(1);

  return (
    <div className="min-h-screen bg-[#f7f4ee] flex flex-col">
      {/* Top Staff Header */}
      <StaffHeader />

      {/* Body Container: Sidebar + Content */}
      <div className="flex-1 flex w-full max-w-7xl mx-auto">
        
        {/* Desktop Left Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <StaffSidebar className="sticky top-16 h-[calc(100vh-4rem)]" />
        </div>

        {/* Main Content Workspace */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* Top Workspace Bar: Breadcrumbs & Role Badge */}
          <div className="px-4 sm:px-6 lg:px-8 py-4 bg-[#faf7f2]/60 border-b border-[#e5ddd3] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <Breadcrumb>
              <BreadcrumbList className="text-xs text-[#7a6759]">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={roleMeta.dashboardPath} className="hover:text-[#8f5323] transition-colors">
                      Portal
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-[#d7cec7]" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-semibold text-[#2a1d17]">
                    {pageTitle}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#8f796a] font-medium hidden sm:inline">Active Role:</span>
              <span className={`font-semibold px-2.5 py-0.5 rounded-full border text-[11px] ${roleMeta.badgeClass}`}>
                {roleMeta.label}
              </span>
            </div>
          </div>

          {/* Page Content Container */}
          <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
            {children}
          </main>

          {/* Staff Portal Footer */}
          <footer className="bg-[#f2ede4] border-t border-[#e5ddd3] py-4 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7a6759] gap-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-[#8f5323]" />
                <span>TruGlow Healthcare Portal • Role & Permission System Enforced</span>
              </div>
              <div className="text-[11px] font-mono text-[#8f796a]">
                Branch: {user.branch || 'Hyderabad'}
              </div>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
