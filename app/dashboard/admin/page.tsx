import React from 'react';
import { Metadata } from 'next';
import { AdminDashboard } from '@/components/dashboard/admin/admin-dashboard';

export const metadata: Metadata = {
  title: 'Administrator Dashboard | TruGlow Clinic Portal',
  description: 'Clinic administration, user directory, staff management, treatment service catalog, and security audit preview for TruGlow Clinic.',
};

export default function AdminDashboardPage() {
  return <AdminDashboard />;
}

