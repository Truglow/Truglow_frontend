import React from 'react';
import { Metadata } from 'next';
import { ReceptionistDashboard } from '@/components/dashboard/receptionist/receptionist-dashboard';

export const metadata: Metadata = {
  title: 'Receptionist Dashboard | TruGlow Clinic Portal',
  description: 'Front-desk operations, appointments, patient intake, and lounge queue management for TruGlow Clinic.',
};

export default function ReceptionistDashboardPage() {
  return <ReceptionistDashboard />;
}

