import {
  LayoutDashboard,
  Calendar,
  Users,
  Activity,
  BarChart3,
  Stethoscope,
  UserCheck,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { Permission, UserRole } from '@/types/auth';
import { hasPermission } from '@/lib/auth/roles';

export interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  permission?: Permission;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export function getFilteredNavSections(role: UserRole | null | undefined): NavSection[] {
  if (!role) return [];

  const dashboardRoute =
    role === 'RECEPTIONIST' ? '/dashboard/receptionist'
    : role === 'MANAGER' ? '/dashboard/manager'
    : role === 'ADMIN' ? '/dashboard/admin'
    : '/dashboard/super-admin';

  const mainSection: NavSection = {
    title: 'Clinic Front-Desk',
    items: [
      {
        title: 'Dashboard',
        href: dashboardRoute,
        icon: LayoutDashboard,
      },
      {
        title: 'Appointments',
        href: '/dashboard/appointments',
        icon: Calendar,
        permission: 'appointments.view',
      },
      {
        title: 'Patients & Intake',
        href: '/dashboard/patients',
        icon: Users,
        permission: 'patients.view',
      },
    ],
  };

  const opsSection: NavSection = {
    title: 'Operations & Insights',
    items: [
      {
        title: 'Operational Overview',
        href: '/dashboard/operations',
        icon: Activity,
        permission: 'operations.overview',
      },
      {
        title: 'Reports & Revenue',
        href: '/dashboard/reports',
        icon: BarChart3,
        permission: 'reports.view',
      },
      {
        title: 'Services Catalog',
        href: '/dashboard/services',
        icon: Stethoscope,
        permission: 'services.view',
      },
    ],
  };

  const mgmtSection: NavSection = {
    title: 'Administration',
    items: [
      {
        title: 'Staff Management',
        href: '/dashboard/staff',
        icon: UserCheck,
        permission: 'staff.manage',
      },
      {
        title: 'Clinic Settings',
        href: '/dashboard/settings',
        icon: Settings,
        permission: 'settings.manage',
      },
      {
        title: 'Audit Logs',
        href: '/dashboard/audit',
        icon: ShieldAlert,
        permission: 'audit.view',
      },
    ],
  };

  const sysSection: NavSection = {
    title: 'System Governance',
    items: [
      {
        title: 'Role Governance',
        href: '/dashboard/roles',
        icon: ShieldCheck,
        permission: 'roles.manage',
      },
      {
        title: 'System & Security',
        href: '/dashboard/system',
        icon: Lock,
        permission: 'security.manage',
      },
    ],
  };

  const allSections: NavSection[] = [mainSection, opsSection, mgmtSection, sysSection];

  return allSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        if (!item.permission) return true;
        return hasPermission(role, item.permission);
      }),
    }))
    .filter((section) => section.items.length > 0);
}
