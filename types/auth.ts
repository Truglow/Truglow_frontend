export type UserRole = 'RECEPTIONIST' | 'MANAGER' | 'ADMIN' | 'SUPER_ADMIN';

export type Permission =
  // Appointments
  | 'appointments.view'
  | 'appointments.create'
  | 'appointments.update'
  | 'appointments.cancel'
  // Patients & Intake
  | 'patients.view'
  | 'patients.create'
  | 'patients.update'
  | 'patients.checkin'
  | 'queue.manage'
  // Operations & Workflow
  | 'operations.overview'
  | 'reports.view'
  | 'services.view'
  | 'services.manage'
  // Staff & Access
  | 'staff.view'
  | 'staff.manage'
  | 'users.manage'
  // Governance & Security
  | 'settings.manage'
  | 'audit.view'
  | 'roles.manage'
  | 'security.manage'
  | 'system.manage';

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
  branch?: string;
}

export interface LoginCredentials {
  identifier: string; // Accepts email or username
  password: string;
  rememberMe?: boolean;
}

export interface AuthResponse {
  success: boolean;
  user?: AuthUser;
  redirectTo?: string;
  error?: string;
}

export interface SessionPayload {
  sub: string;
  email: string;
  username: string;
  role: UserRole;
  name: string;
  exp?: number;
  iat?: number;
}

