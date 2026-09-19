import { AuthUser, UserRole } from '@/types/auth';

export interface SeedUserRecord {
  id: string;
  email: string;
  username: string;
  name: string;
  role: UserRole;
  passwordHash: string;
  branch: string;
}

// Seed accounts for the 4 TruGlow clinic management roles.
// In production, these will be stored in a dedicated database with salt & pepper.
export const SEED_USERS: SeedUserRecord[] = [
  {
    id: 'usr-rec-01',
    email: 'receptionist@truglow.com',
    username: 'receptionist',
    name: 'Priya Sharma',
    role: 'RECEPTIONIST',
    // Password: 'receptionist123'
    passwordHash: '$2a$10$YvA6hgBjjchY9SYQVajdBOIcYk6JgMRhaQ27tz4UnNSCQ9Cl6xREq',
    branch: 'Manikonda & HITEC City',
  },
  {
    id: 'usr-mng-02',
    email: 'manager@truglow.com',
    username: 'manager',
    name: 'Kavitha Rao',
    role: 'MANAGER',
    // Password: 'manager123'
    passwordHash: '$2a$10$Uhh6RLY0o16yePBByZLlMOb419a7e1p8ST0Y2qt9LxTyak50IVwse',
    branch: 'Hyderabad Central Operations',
  },
  {
    id: 'usr-adm-03',
    email: 'admin@truglow.com',
    username: 'admin',
    name: 'Suresh Varma',
    role: 'ADMIN',
    // Password: 'admin123'
    passwordHash: '$2a$10$xcGA3cP8H0XeGPVuU7eowuTzwOlEyJw5lH8vFXTPNdRS6M6Ygfhwe',
    branch: 'All Branches',
  },
  {
    id: 'usr-sad-04',
    email: 'superadmin@truglow.com',
    username: 'superadmin',
    name: 'Executive Director',
    role: 'SUPER_ADMIN',
    // Password: 'superadmin123'
    passwordHash: '$2a$10$OAEB9PPFIvYiKWNAqzJ41OBThUbP/SKaL1faI0drfxV4b5lMjcuUm',
    branch: 'Headquarters',
  },
];

export function findUserByIdentifier(identifier: string): SeedUserRecord | undefined {
  const cleanId = identifier.trim().toLowerCase();
  return SEED_USERS.find(
    (u) => u.email.toLowerCase() === cleanId || u.username.toLowerCase() === cleanId
  );
}

export function sanitizeUser(user: SeedUserRecord): AuthUser {
  return {
    id: user.id,
    email: user.email,
    username: user.username,
    name: user.name,
    role: user.role,
    branch: user.branch,
  };
}
