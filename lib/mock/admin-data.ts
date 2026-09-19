export interface AdminKpiData {
  totalPatients: number;
  totalStaff: number;
  todaysAppointments: number;
  activeServices: number;
  pendingTasks: number;
}

export interface AdminStaffSummary {
  id: string;
  name: string;
  role: 'RECEPTIONIST' | 'MANAGER' | 'ADMIN';
  roleLabel: string;
  specialization: string;
  branch: string;
  status: 'Active' | 'On Leave' | 'Suspended';
  email: string;
}

export interface AdminServiceSummary {
  id: string;
  code: string;
  name: string;
  category: 'Skin' | 'Hair' | 'Laser' | 'Cosmetic Surgery';
  durationMinutes: number;
  priceINR: number;
  status: 'Active' | 'Under Review' | 'Archived';
}

export interface DepartmentSummary {
  id: string;
  name: string;
  headSpecialist: string;
  staffCount: number;
  activeServicesCount: number;
  branch: string;
}

export interface AdminActivityRecord {
  id: string;
  timestamp: string;
  category: 'Staff Management' | 'Service Catalog' | 'User Access' | 'Clinic Settings';
  action?: string;
  title: string;
  description: string;
  details?: string;
  performedBy: string;
}

export interface AuditLogRecord {
  id: string;
  timestamp: string;
  severity: 'INFO' | 'WARN' | 'SECURITY';
  component: string;
  event: string;
  actor: string;
  status: 'Success' | 'Flagged';
}

export const INITIAL_ADMIN_KPIS: AdminKpiData = {
  totalPatients: 1485,
  totalStaff: 18,
  todaysAppointments: 32,
  activeServices: 24,
  pendingTasks: 4,
};

export const INITIAL_ADMIN_STAFF: AdminStaffSummary[] = [
  {
    id: 'STF-001',
    name: 'Dr. Kavitha Rao',
    role: 'MANAGER',
    roleLabel: 'Clinic Manager & Sr. Dermatologist',
    specialization: 'Aesthetics & Laser',
    branch: 'Hyderabad Central',
    status: 'Active',
    email: 'manager@truglow.com',
  },
  {
    id: 'STF-002',
    name: 'Priya Sharma',
    role: 'RECEPTIONIST',
    roleLabel: 'Front-Desk Receptionist',
    specialization: 'Patient Intake & Queue',
    branch: 'Manikonda & HITEC City',
    status: 'Active',
    email: 'receptionist@truglow.com',
  },
  {
    id: 'STF-003',
    name: 'Dr. Srinivas Varma',
    role: 'ADMIN',
    roleLabel: 'Clinical Director',
    specialization: 'Hair & Plastic Surgery',
    branch: 'All Branches',
    status: 'Active',
    email: 'admin@truglow.com',
  },
  {
    id: 'STF-004',
    name: 'Dr. Sunitha Reddy',
    role: 'MANAGER',
    roleLabel: 'Cosmetic Dermatologist',
    specialization: 'Chemical Peels & Anti-aging',
    branch: 'HITEC City',
    status: 'Active',
    email: 'sunitha.r@truglow.com',
  },
];

export const INITIAL_ADMIN_SERVICES: AdminServiceSummary[] = [
  {
    id: 'SRV-101',
    code: 'SKN-HYD-01',
    name: 'HydraFacial Glow Treatment',
    category: 'Skin',
    durationMinutes: 45,
    priceINR: 4500,
    status: 'Active',
  },
  {
    id: 'SRV-102',
    code: 'HAR-PRP-02',
    name: 'PRP Hair Restoration Therapy',
    category: 'Hair',
    durationMinutes: 60,
    priceINR: 6500,
    status: 'Active',
  },
  {
    id: 'SRV-103',
    code: 'LSR-FLB-03',
    name: 'Full Body Laser Hair Reduction',
    category: 'Laser',
    durationMinutes: 90,
    priceINR: 12500,
    status: 'Active',
  },
  {
    id: 'SRV-104',
    code: 'SUR-BOT-04',
    name: 'Botox & Facial Contour Consultation',
    category: 'Cosmetic Surgery',
    durationMinutes: 30,
    priceINR: 3500,
    status: 'Active',
  },
  {
    id: 'SRV-105',
    code: 'SKN-PEL-05',
    name: 'Derma Chemical Peel & Brightening',
    category: 'Skin',
    durationMinutes: 45,
    priceINR: 3200,
    status: 'Active',
  },
];

export const INITIAL_DEPARTMENTS: DepartmentSummary[] = [
  {
    id: 'DEP-01',
    name: 'Dermatology & Skin Aesthetics',
    headSpecialist: 'Dr. Kavitha Rao',
    staffCount: 6,
    activeServicesCount: 9,
    branch: 'HITEC City & Manikonda',
  },
  {
    id: 'DEP-02',
    name: 'Trichology & Hair Restoration',
    headSpecialist: 'Dr. Srinivas Varma',
    staffCount: 5,
    activeServicesCount: 6,
    branch: 'Manikonda Center',
  },
  {
    id: 'DEP-03',
    name: 'US-FDA Laser Procedures',
    headSpecialist: 'Dr. Sunitha Reddy',
    staffCount: 4,
    activeServicesCount: 5,
    branch: 'HITEC City Center',
  },
  {
    id: 'DEP-04',
    name: 'Plastic & Cosmetic Surgery',
    headSpecialist: 'Dr. Srinivas Varma',
    staffCount: 3,
    activeServicesCount: 4,
    branch: 'Central Surgical Suite',
  },
];

export const INITIAL_ADMIN_ACTIVITIES: AdminActivityRecord[] = [
  {
    id: 'ACT-801',
    timestamp: '09:45 AM',
    category: 'Staff Management',
    title: 'New Nurse Practitioner Added',
    description: 'Added Kavya Nair to HITEC City Clinical Roster',
    performedBy: 'Suresh Varma (Admin)',
  },
  {
    id: 'ACT-802',
    timestamp: 'Yesterday',
    category: 'Service Catalog',
    title: 'Service Price Schedule Updated',
    description: 'Updated PRP Hair Therapy session pricing to ₹6,500',
    performedBy: 'Suresh Varma (Admin)',
  },
  {
    id: 'ACT-803',
    timestamp: '2 days ago',
    category: 'User Access',
    title: 'Receptionist Credentials Re-issued',
    description: 'Updated staff login credentials for Manikonda Desk',
    performedBy: 'Suresh Varma (Admin)',
  },
  {
    id: 'ACT-804',
    timestamp: '3 days ago',
    category: 'Clinic Settings',
    title: 'Operating Hours Extended',
    description: 'Configured Sunday evening slots for HITEC City Center',
    performedBy: 'Suresh Varma (Admin)',
  },
];

export const INITIAL_SECURITY_AUDIT_LOGS: AuditLogRecord[] = [
  {
    id: 'AUD-901',
    timestamp: '10:14 AM',
    severity: 'INFO',
    component: 'Authentication Service',
    event: 'Staff session verified server-side via HMAC-SHA256 JWT',
    actor: 'Priya Sharma (RECEPTIONIST)',
    status: 'Success',
  },
  {
    id: 'AUD-902',
    timestamp: '09:30 AM',
    severity: 'WARN',
    component: 'Route Access Proxy',
    event: 'Prevented unauthorized subroute access attempt to /dashboard/admin',
    actor: 'Priya Sharma (RECEPTIONIST)',
    status: 'Flagged',
  },
  {
    id: 'AUD-903',
    timestamp: 'Yesterday',
    severity: 'SECURITY',
    component: 'User Access Audit',
    event: 'Password hash comparison validated using bcrypt salt',
    actor: 'Kavitha Rao (MANAGER)',
    status: 'Success',
  },
];
