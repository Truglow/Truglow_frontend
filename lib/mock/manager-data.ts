export interface ManagerKpiData {
  appointmentsToday: number;
  completed: number;
  pending: number;
  noShows: number;
  newPatients: number;
  capacityUtilization: number; // Percentage
}

export interface OperationalAlert {
  id: string;
  type: 'danger' | 'warning' | 'info';
  title: string;
  description: string;
  timestamp: string;
  branch: string;
  actionableText: string;
}

export interface HourlyTrendData {
  hour: string;
  booked: number;
  completed: number;
  capacity: number;
}

export interface ServicePerformanceData {
  service: string;
  category: string;
  bookings: number;
  percentage: number;
  color: string;
}

export interface StaffStatusRecord {
  id: string;
  name: string;
  roleTitle: string;
  specialization: string;
  status: 'In Consultation' | 'Available' | 'On Break' | 'Off Duty';
  room: string;
  patientsSeenToday: number;
  branch: string;
  nextAvailable: string;
}

export interface OperationalLogRecord {
  id: string;
  time: string;
  category: 'Workflow' | 'Staffing' | 'Service' | 'Patient Flow';
  title: string;
  description: string;
  actor: string;
}

export const INITIAL_MANAGER_KPIS: ManagerKpiData = {
  appointmentsToday: 32,
  completed: 18,
  pending: 11,
  noShows: 3,
  newPatients: 10,
  capacityUtilization: 86,
};

export const INITIAL_OPERATIONAL_ALERTS: OperationalAlert[] = [
  {
    id: 'ALT-101',
    type: 'warning',
    title: 'High Afternoon Room Demand',
    description: 'HITEC City Laser Treatment Room 2 is at 95% booking capacity between 02:00 PM - 05:00 PM.',
    timestamp: '15m ago',
    branch: 'HITEC City',
    actionableText: 'Review Slot Allocation',
  },
  {
    id: 'ALT-102',
    type: 'danger',
    title: '3 Unconfirmed Afternoon Visits',
    description: 'Patients scheduled for 03:00 PM PRP therapy have not confirmed attendance.',
    timestamp: '40m ago',
    branch: 'Manikonda',
    actionableText: 'Send WhatsApp Reminder',
  },
  {
    id: 'ALT-103',
    type: 'info',
    title: 'Specialist Shift Exchange',
    description: 'Dr. Sunitha Reddy will cover evening consultations at Manikonda Center.',
    timestamp: '1h ago',
    branch: 'Manikonda',
    actionableText: 'View Duty Roster',
  },
];

export const HOURLY_APPOINTMENT_TRENDS: HourlyTrendData[] = [
  { hour: '09:00 AM', booked: 4, completed: 4, capacity: 5 },
  { hour: '10:00 AM', booked: 6, completed: 6, capacity: 6 },
  { hour: '11:00 AM', booked: 5, completed: 5, capacity: 6 },
  { hour: '12:00 PM', booked: 3, completed: 3, capacity: 4 },
  { hour: '01:00 PM', booked: 2, completed: 0, capacity: 4 },
  { hour: '02:00 PM', booked: 5, completed: 0, capacity: 6 },
  { hour: '03:00 PM', booked: 4, completed: 0, capacity: 6 },
  { hour: '04:00 PM', booked: 3, completed: 0, capacity: 5 },
];

export const SERVICE_PERFORMANCE_METRICS: ServicePerformanceData[] = [
  { service: 'HydraFacial & Skin Aesthetics', category: 'Skin', bookings: 12, percentage: 38, color: '#8f5323' },
  { service: 'PRP Hair Restoration Therapy', category: 'Hair', bookings: 8, percentage: 25, color: '#d97706' },
  { service: 'Full Body Laser Hair Reduction', category: 'Laser', bookings: 7, percentage: 22, color: '#059669' },
  { service: 'Cosmetic Surgery Consultation', category: 'Surgery', bookings: 5, percentage: 15, color: '#4b5563' },
];

export const STAFF_STATUS_ROSTER: StaffStatusRecord[] = [
  {
    id: 'STF-01',
    name: 'Dr. Kavitha Rao',
    roleTitle: 'Senior Dermatologist',
    specialization: 'Aesthetics & Laser',
    status: 'In Consultation',
    room: 'Consultation Room 1',
    patientsSeenToday: 8,
    branch: 'HITEC City',
    nextAvailable: '11:45 AM',
  },
  {
    id: 'STF-02',
    name: 'Dr. Srinivas Varma',
    roleTitle: 'Trichologist & Plastic Surgeon',
    specialization: 'Hair & PRP Therapy',
    status: 'In Consultation',
    room: 'Procedure Suite 2',
    patientsSeenToday: 6,
    branch: 'Manikonda',
    nextAvailable: '12:00 PM',
  },
  {
    id: 'STF-03',
    name: 'Dr. Sunitha Reddy',
    roleTitle: 'Cosmetic Dermatologist',
    specialization: 'Chemical Peels & Anti-aging',
    status: 'Available',
    room: 'Laser Suite 1',
    patientsSeenToday: 4,
    branch: 'HITEC City',
    nextAvailable: 'Immediate',
  },
  {
    id: 'STF-04',
    name: 'Priya Sharma',
    roleTitle: 'Lead Receptionist',
    specialization: 'Front-desk & Intake',
    status: 'Available',
    room: 'Front Reception Counter',
    patientsSeenToday: 18,
    branch: 'Manikonda',
    nextAvailable: 'Active Duty',
  },
];

export const OPERATIONAL_LOGS: OperationalLogRecord[] = [
  {
    id: 'LOG-501',
    time: '11:10 AM',
    category: 'Patient Flow',
    title: 'Peak Morning Flow Concluded',
    description: 'All 15 morning skin & laser consultations completed on schedule.',
    actor: 'System Auto-Monitor',
  },
  {
    id: 'LOG-502',
    time: '10:30 AM',
    category: 'Service',
    title: 'HydraFacial Consumables Restocked',
    description: 'Skin care serum inventory verified for afternoon appointments.',
    actor: 'Clinic Operations',
  },
  {
    id: 'LOG-503',
    time: '09:15 AM',
    category: 'Staffing',
    title: 'Duty Roster Verified',
    description: '4 medical specialists and 6 nursing staff checked in across centers.',
    actor: 'Manager Portal',
  },
];
