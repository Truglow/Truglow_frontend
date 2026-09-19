import React from 'react';
import { Metadata } from 'next';
import { ManagerDashboard } from '@/components/dashboard/manager/manager-dashboard';

export const metadata: Metadata = {
  title: 'Manager Dashboard | TruGlow Clinic Portal',
  description: 'Operational overview, patient volume metrics, staffing roster, and performance analytics for TruGlow Clinic.',
};

export default function ManagerDashboardPage() {
  return <ManagerDashboard />;
}

