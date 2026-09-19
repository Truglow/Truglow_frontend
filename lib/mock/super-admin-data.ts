import { Permission, UserRole } from '@/types/auth';

export interface SuperAdminKpiData {
  totalUsers: number;
  activeStaff: number;
  systemActivityEvents: number;
  securityEventsCount: number;
  pendingAdminActions: number;
}

export interface SystemServiceHealth {
  id: string;
  name: string;
  category: 'Security' | 'API' | 'Integration' | 'Storage';
  status: 'Operational' | 'Degraded' | 'Maintenance';
  uptime: string;
  latency: string;
}

export interface RolePermissionMatrixItem {
  permissionKey: Permission;
  label: string;
  category: 'Appointments' | 'Patients' | 'Operations' | 'Staff' | 'Governance';
  RECEPTIONIST: boolean;
  MANAGER: boolean;
  ADMIN: boolean;
  SUPER_ADMIN: boolean;
}

export interface SecurityEventRecord {
  id: string;
  timestamp: string;
  type: 'USER_CREATE' | 'ROLE_CHANGE' | 'PERM_UPDATE' | 'LOGIN_EVENT' | 'CONFIG_CHANGE';
  title: string;
  description: string;
  actor: string;
  severity: 'CRITICAL' | 'WARN' | 'INFO';
}

export interface SystemAuditLogItem {
  id: string;
  timestamp: string;
  severity: 'SECURITY' | 'WARN' | 'INFO';
  component: string;
  event: string;
  actor: string;
  ipAddress: string;
  result: 'Pass' | 'Blocked';
}

export const INITIAL_SUPER_ADMIN_KPIS: SuperAdminKpiData = {
  totalUsers: 22,
  activeStaff: 18,
  systemActivityEvents: 1482,
  securityEventsCount: 14,
  pendingAdminActions: 2,
};

export const SYSTEM_SERVICES_HEALTH: SystemServiceHealth[] = [
  {
    id: 'SVC-01',
    name: 'HMAC-SHA256 Auth Gateway',
    category: 'Security',
    status: 'Operational',
    uptime: '99.99%',
    latency: '12ms',
  },
  {
    id: 'SVC-02',
    name: 'Server-Side Proxy Route Guard',
    category: 'Security',
    status: 'Operational',
    uptime: '100%',
    latency: '8ms',
  },
  {
    id: 'SVC-03',
    name: 'WhatsApp Consultation API',
    category: 'Integration',
    status: 'Operational',
    uptime: '99.95%',
    latency: '140ms',
  },
  {
    id: 'SVC-04',
    name: 'Google Sheets Appointment Sync',
    category: 'Storage',
    status: 'Operational',
    uptime: '99.90%',
    latency: '220ms',
  },
];

export const ROLE_PERMISSION_MATRIX_DATA: RolePermissionMatrixItem[] = [
  {
    permissionKey: 'appointments.view',
    label: 'View Appointments',
    category: 'Appointments',
    RECEPTIONIST: true,
    MANAGER: true,
    ADMIN: true,
    SUPER_ADMIN: true,
  },
  {
    permissionKey: 'appointments.create',
    label: 'Book Appointments',
    category: 'Appointments',
    RECEPTIONIST: true,
    MANAGER: true,
    ADMIN: true,
    SUPER_ADMIN: true,
  },
  {
    permissionKey: 'patients.view',
    label: 'Patient Record Lookup',
    category: 'Patients',
    RECEPTIONIST: true,
    MANAGER: true,
    ADMIN: true,
    SUPER_ADMIN: true,
  },
  {
    permissionKey: 'operations.overview',
    label: 'Operational Analytics Overview',
    category: 'Operations',
    RECEPTIONIST: false,
    MANAGER: true,
    ADMIN: true,
    SUPER_ADMIN: true,
  },
  {
    permissionKey: 'staff.manage',
    label: 'Staff Directory Administration',
    category: 'Staff',
    RECEPTIONIST: false,
    MANAGER: false,
    ADMIN: true,
    SUPER_ADMIN: true,
  },
  {
    permissionKey: 'settings.manage',
    label: 'Clinic Settings & Parameters',
    category: 'Governance',
    RECEPTIONIST: false,
    MANAGER: false,
    ADMIN: true,
    SUPER_ADMIN: true,
  },
  {
    permissionKey: 'roles.manage',
    label: 'Role Architecture & Permissions',
    category: 'Governance',
    RECEPTIONIST: false,
    MANAGER: false,
    ADMIN: false,
    SUPER_ADMIN: true,
  },
  {
    permissionKey: 'security.manage',
    label: 'Security Secrets & Maintenance',
    category: 'Governance',
    RECEPTIONIST: false,
    MANAGER: false,
    ADMIN: false,
    SUPER_ADMIN: true,
  },
];

export const INITIAL_SECURITY_EVENTS: SecurityEventRecord[] = [
  {
    id: 'SE-301',
    timestamp: '14:22 PM',
    type: 'ROLE_CHANGE',
    title: 'User Role Authority Promoted',
    description: 'Executive Director granted SUPER_ADMIN governance scope to Suresh Varma (Admin)',
    actor: 'Executive Director (SUPER_ADMIN)',
    severity: 'CRITICAL',
  },
  {
    id: 'SE-302',
    timestamp: '11:15 AM',
    type: 'CONFIG_CHANGE',
    title: 'JWT Token Expiration Updated',
    description: 'Configured remember-me session lifetime to 30 days and default session to 24 hours',
    actor: 'Executive Director (SUPER_ADMIN)',
    severity: 'WARN',
  },
  {
    id: 'SE-303',
    timestamp: '09:30 AM',
    type: 'LOGIN_EVENT',
    title: 'Super Admin Security Login',
    description: 'Authenticated session established from IP 10.0.37.86 (Encrypted Cookie)',
    actor: 'Executive Director (SUPER_ADMIN)',
    severity: 'INFO',
  },
  {
    id: 'SE-304',
    timestamp: 'Yesterday',
    type: 'USER_CREATE',
    title: 'Administrator Account Created',
    description: 'Created primary admin credential entry for Suresh Varma (admin@truglow.com)',
    actor: 'Executive Director (SUPER_ADMIN)',
    severity: 'INFO',
  },
];

export const INITIAL_SYSTEM_AUDIT_LOGS: SystemAuditLogItem[] = [
  {
    id: 'SAL-701',
    timestamp: '14:22:10 PM',
    severity: 'SECURITY',
    component: 'Role Governance API',
    event: 'Updated permission matrix mapping for ADMIN role level',
    actor: 'Executive Director (SUPER_ADMIN)',
    ipAddress: '10.0.37.86',
    result: 'Pass',
  },
  {
    id: 'SAL-702',
    timestamp: '12:04:45 PM',
    severity: 'WARN',
    component: 'Proxy Middleware Guard',
    event: 'Unauthorized subroute navigation attempt to /dashboard/super-admin blocked',
    actor: 'Suresh Varma (ADMIN)',
    ipAddress: '10.0.37.102',
    result: 'Blocked',
  },
  {
    id: 'SAL-703',
    timestamp: '10:15:30 AM',
    severity: 'INFO',
    component: 'Authentication Service',
    event: 'User receptionist@truglow.com logged in successfully via bcrypt verification',
    actor: 'Priya Sharma (RECEPTIONIST)',
    ipAddress: '10.0.37.45',
    result: 'Pass',
  },
  {
    id: 'SAL-704',
    timestamp: '09:00:12 AM',
    severity: 'INFO',
    component: 'System Maintenance Engine',
    event: 'Verified encrypted session cookie options: httpOnly=true, sameSite=lax',
    actor: 'System Auto-Guard',
    ipAddress: '127.0.0.1',
    result: 'Pass',
  },
];
