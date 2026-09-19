export interface AppointmentRecord {
  id: string;
  patientId: string;
  patientName: string;
  patientPhone: string;
  service: string;
  category: 'Skin' | 'Hair' | 'Laser' | 'Cosmetic Surgery';
  time: string;
  branch: string;
  doctor: string;
  status: 'Scheduled' | 'Checked-In' | 'In-Consultation' | 'Completed' | 'Cancelled' | 'No-Show';
  notes?: string;
}

export interface WaitingPatientRecord {
  id: string;
  patientId: string;
  patientName: string;
  service: string;
  doctor: string;
  checkInTime: string;
  waitTimeMinutes: number;
  status: 'Waiting in Lounge' | 'Calling In' | 'With Doctor';
}

export interface ActivityRecord {
  id: string;
  timestamp: string;
  type: 'checkin' | 'booking' | 'reschedule' | 'registration' | 'cancellation';
  title: string;
  description: string;
  staffName: string;
}

export interface ReceptionistKpiData {
  todaysAppointments: number;
  checkedIn: number;
  waiting: number;
  completed: number;
}

export const INITIAL_MOCK_APPOINTMENTS: AppointmentRecord[] = [
  {
    id: 'APT-1001',
    patientId: 'PAT-2026-042',
    patientName: 'Ananya Reddy',
    patientPhone: '+91 98765 43210',
    service: 'HydraFacial Glow Treatment',
    category: 'Skin',
    time: '09:30 AM',
    branch: 'HITEC City',
    doctor: 'Dr. Kavitha Rao',
    status: 'Completed',
    notes: 'Follow-up in 3 weeks',
  },
  {
    id: 'APT-1002',
    patientId: 'PAT-2026-089',
    patientName: 'Vikram Sharma',
    patientPhone: '+91 91234 56789',
    service: 'PRP Hair Restoration (Session 2)',
    category: 'Hair',
    time: '10:15 AM',
    branch: 'Manikonda',
    doctor: 'Dr. Srinivas Varma',
    status: 'Checked-In',
    notes: 'Arrived on time. Preparing scalp therapy unit.',
  },
  {
    id: 'APT-1003',
    patientId: 'PAT-2026-104',
    patientName: 'Sneha Kulkarni',
    patientPhone: '+91 99887 76655',
    service: 'Full Face Laser Hair Reduction',
    category: 'Laser',
    time: '11:00 AM',
    branch: 'HITEC City',
    doctor: 'Dr. Sunitha Reddy',
    status: 'Checked-In',
    notes: 'Patch test verified previously',
  },
  {
    id: 'APT-1004',
    patientId: 'PAT-2026-118',
    patientName: 'Rajesh Kumar',
    patientPhone: '+91 98490 12345',
    service: 'Acne Scar Revision Consultation',
    category: 'Skin',
    time: '11:45 AM',
    branch: 'Manikonda',
    doctor: 'Dr. Kavitha Rao',
    status: 'Scheduled',
    notes: 'First time consultation',
  },
  {
    id: 'APT-1005',
    patientId: 'PAT-2026-135',
    patientName: 'Deepika Rao',
    patientPhone: '+91 97001 23456',
    service: 'Chemical Peel & Brightening',
    category: 'Skin',
    time: '02:00 PM',
    branch: 'HITEC City',
    doctor: 'Dr. Sunitha Reddy',
    status: 'Scheduled',
  },
  {
    id: 'APT-1006',
    patientId: 'PAT-2026-142',
    patientName: 'Meera Nair',
    patientPhone: '+91 96543 21098',
    service: 'Botox & anti-aging Touchup',
    category: 'Cosmetic Surgery',
    time: '03:15 PM',
    branch: 'Manikonda',
    doctor: 'Dr. Srinivas Varma',
    status: 'Scheduled',
  },
  {
    id: 'APT-1007',
    patientId: 'PAT-2026-159',
    patientName: 'Karthik Varma',
    patientPhone: '+91 95500 88776',
    service: 'Beard Line Laser Treatment',
    category: 'Laser',
    time: '04:30 PM',
    branch: 'HITEC City',
    doctor: 'Dr. Sunitha Reddy',
    status: 'Scheduled',
  },
];

export const INITIAL_MOCK_WAITING: WaitingPatientRecord[] = [
  {
    id: 'W-01',
    patientId: 'PAT-2026-089',
    patientName: 'Vikram Sharma',
    service: 'PRP Hair Restoration (Session 2)',
    doctor: 'Dr. Srinivas Varma',
    checkInTime: '10:15 AM',
    waitTimeMinutes: 18,
    status: 'Waiting in Lounge',
  },
  {
    id: 'W-02',
    patientId: 'PAT-2026-104',
    patientName: 'Sneha Kulkarni',
    service: 'Full Face Laser Hair Reduction',
    doctor: 'Dr. Sunitha Reddy',
    checkInTime: '10:50 AM',
    waitTimeMinutes: 8,
    status: 'Waiting in Lounge',
  },
];

export const INITIAL_MOCK_ACTIVITIES: ActivityRecord[] = [
  {
    id: 'ACT-01',
    timestamp: '10:50 AM',
    type: 'checkin',
    title: 'Patient Checked In',
    description: 'Sneha Kulkarni checked in for Laser Hair Reduction',
    staffName: 'Priya Sharma (Receptionist)',
  },
  {
    id: 'ACT-02',
    timestamp: '10:15 AM',
    type: 'checkin',
    title: 'Patient Checked In',
    description: 'Vikram Sharma checked in for PRP Hair Restoration',
    staffName: 'Priya Sharma (Receptionist)',
  },
  {
    id: 'ACT-03',
    timestamp: '09:45 AM',
    type: 'booking',
    title: 'New Appointment Booked',
    description: 'Booked Chemical Peel for Deepika Rao at 02:00 PM',
    staffName: 'Priya Sharma (Receptionist)',
  },
  {
    id: 'ACT-04',
    timestamp: '09:15 AM',
    type: 'registration',
    title: 'New Patient Registered',
    description: 'Registered Rajesh Kumar (PAT-2026-118)',
    staffName: 'Priya Sharma (Receptionist)',
  },
];
