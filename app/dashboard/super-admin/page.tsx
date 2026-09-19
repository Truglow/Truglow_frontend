import React from 'react';
import { Metadata } from 'next';
import { SuperAdminDashboard } from '@/components/dashboard/super-admin/super-admin-dashboard';

export const metadata: Metadata = {
  title: 'Super Admin Console | TruGlow Clinic Portal',
  description: 'System-level governance, role permission matrix, security event monitoring, and audit activity for TruGlow Clinic.',
};

export default function SuperAdminDashboardPage() {
  return <SuperAdminDashboard />;
}
