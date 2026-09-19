import { Permission, UserRole } from '@/types/auth';

export interface RoleMetadata {
  label: string;
  description: string;
  dashboardPath: string;
  badgeClass: string;
}

export const ROLE_DETAILS: Record<UserRole, RoleMetadata> = {
  RECEPTIONIST: {
    label: 'Receptionist',
    description: 'Front-desk operations, appointments, and patient intake',
    dashboardPath: '/dashboard/receptionist',
    badgeClass: 'bg-amber-100 text-amber-900 border-amber-300',
  },
  MANAGER: {
    label: 'Clinic Manager',
    description: 'Clinic workflow, scheduling coordination, and operational overview',
    dashboardPath: '/dashboard/manager',
    badgeClass: 'bg-stone-100 text-stone-900 border-stone-300',
  },
  ADMIN: {
    label: 'Administrator',
    description: 'Clinic administration, staff management, and system configuration',
    dashboardPath: '/dashboard/admin',
    badgeClass: 'bg-orange-100 text-orange-950 border-orange-300',
  },
  SUPER_ADMIN: {
    label: 'Super Administrator',
    description: 'Full system governance, security audits, and multi-branch control',
    dashboardPath: '/dashboard/super-admin',
    badgeClass: 'bg-[#2a1d17] text-[#fbf9f5] border-[#4a3428]',
  },
};

/**
 * Role hierarchy rank for authorization comparisons.
 * Higher rank indicates greater system administrative scope.
 */
export const ROLE_HIERARCHY: Record<UserRole, number> = {
  RECEPTIONIST: 10,
  MANAGER: 20,
  ADMIN: 30,
  SUPER_ADMIN: 40,
};

/**
 * Centralized Role-Permission Matrix.
 * Defines explicit operational capabilities for each staff role.
 */
export const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  RECEPTIONIST: [
    'appointments.view',
    'appointments.create',
    'appointments.update',
    'appointments.cancel',
    'patients.view',
    'patients.create',
    'patients.update',
    'patients.checkin',
    'queue.manage',
  ],
  MANAGER: [
    'appointments.view',
    'appointments.create',
    'appointments.update',
    'appointments.cancel',
    'patients.view',
    'patients.create',
    'patients.update',
    'patients.checkin',
    'queue.manage',
    'operations.overview',
    'reports.view',
    'services.view',
    'staff.view',
  ],
  ADMIN: [
    'appointments.view',
    'appointments.create',
    'appointments.update',
    'appointments.cancel',
    'patients.view',
    'patients.create',
    'patients.update',
    'patients.checkin',
    'queue.manage',
    'operations.overview',
    'reports.view',
    'services.view',
    'services.manage',
    'staff.view',
    'staff.manage',
    'users.manage',
    'settings.manage',
    'audit.view',
  ],
  SUPER_ADMIN: [
    'appointments.view',
    'appointments.create',
    'appointments.update',
    'appointments.cancel',
    'patients.view',
    'patients.create',
    'patients.update',
    'patients.checkin',
    'queue.manage',
    'operations.overview',
    'reports.view',
    'services.view',
    'services.manage',
    'staff.view',
    'staff.manage',
    'users.manage',
    'settings.manage',
    'audit.view',
    'roles.manage',
    'security.manage',
    'system.manage',
  ],
};

export function getRoleDashboardRoute(role: UserRole): string {
  return ROLE_DETAILS[role]?.dashboardPath || '/dashboard';
}

export function isValidRole(role: unknown): role is UserRole {
  return (
    typeof role === 'string' &&
    (role === 'RECEPTIONIST' ||
      role === 'MANAGER' ||
      role === 'ADMIN' ||
      role === 'SUPER_ADMIN')
  );
}

/**
 * Checks if a given role possesses a specific permission.
 */
export function hasPermission(
  role: UserRole | null | undefined,
  permission: Permission
): boolean {
  if (!role || !isValidRole(role)) return false;
  return ROLE_PERMISSIONS[role].includes(permission);
}

/**
 * Checks if a given role possesses ALL specified permissions.
 */
export function hasAllPermissions(
  role: UserRole | null | undefined,
  permissions: Permission[]
): boolean {
  if (!role || !isValidRole(role)) return false;
  const userPermissions = ROLE_PERMISSIONS[role];
  return permissions.every((p) => userPermissions.includes(p));
}

/**
 * Checks if a given role possesses ANY of the specified permissions.
 */
export function hasAnyPermission(
  role: UserRole | null | undefined,
  permissions: Permission[]
): boolean {
  if (!role || !isValidRole(role)) return false;
  const userPermissions = ROLE_PERMISSIONS[role];
  return permissions.some((p) => userPermissions.includes(p));
}

/**
 * Server-side route authorization check.
 * Verifies if a staff user role is authorized to access a given dashboard pathname.
 */
export function canAccessRoute(
  role: UserRole | null | undefined,
  pathname: string
): boolean {
  if (!role || !isValidRole(role)) return false;

  // Super Admin can access all dashboard areas
  if (role === 'SUPER_ADMIN') return true;

  if (pathname.startsWith('/dashboard/super-admin') || pathname.startsWith('/dashboard/superadmin')) {
    return false;
  }

  if (pathname.startsWith('/dashboard/admin')) {
    return ROLE_HIERARCHY[role] >= ROLE_HIERARCHY.ADMIN;
  }

  if (pathname.startsWith('/dashboard/manager')) {
    return ROLE_HIERARCHY[role] >= ROLE_HIERARCHY.MANAGER;
  }

  if (pathname.startsWith('/dashboard/receptionist')) {
    return ROLE_HIERARCHY[role] >= ROLE_HIERARCHY.RECEPTIONIST;
  }

  return true;
}

