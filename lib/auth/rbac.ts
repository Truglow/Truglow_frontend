import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME, verifySessionToken } from '@/lib/auth/jwt';
import { Permission, UserRole, SessionPayload } from '@/types/auth';
import { hasPermission, isValidRole, ROLE_HIERARCHY } from '@/lib/auth/roles';

export interface AuthorizationResult {
  authorized: boolean;
  user?: SessionPayload;
  response?: NextResponse;
}

/**
 * Validates the authentication token from an incoming server/API request.
 */
export async function authenticateApiRequest(req: NextRequest): Promise<SessionPayload | null> {
  const cookie = req.cookies.get(AUTH_COOKIE_NAME);
  if (!cookie?.value) return null;

  return await verifySessionToken(cookie.value);
}

/**
 * Centralized API route authorization helper.
 * Enforces server-side authentication and role/permission checks.
 * Returns HTTP 401 if unauthenticated, HTTP 403 if forbidden.
 */
export async function authorizeApiRequest(
  req: NextRequest,
  options?: {
    requiredPermission?: Permission;
    allowedRoles?: UserRole[];
    minRole?: UserRole;
  }
): Promise<AuthorizationResult> {
  const session = await authenticateApiRequest(req);

  if (!session) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Unauthorized: Authentication token is missing or expired' },
        { status: 401 }
      ),
    };
  }

  const role = session.role;

  if (!isValidRole(role)) {
    return {
      authorized: false,
      response: NextResponse.json(
        { error: 'Forbidden: Invalid or unrecognized staff role' },
        { status: 403 }
      ),
    };
  }

  // Check required permission if specified
  if (options?.requiredPermission && !hasPermission(role, options.requiredPermission)) {
    return {
      authorized: false,
      response: NextResponse.json(
        {
          error: `Forbidden: Role '${role}' lacks required permission '${options.requiredPermission}'`,
        },
        { status: 403 }
      ),
    };
  }

  // Check allowed roles array if specified
  if (options?.allowedRoles && !options.allowedRoles.includes(role)) {
    return {
      authorized: false,
      response: NextResponse.json(
        {
          error: `Forbidden: Role '${role}' is not in allowed roles [${options.allowedRoles.join(', ')}]`,
        },
        { status: 403 }
      ),
    };
  }

  // Check minimum role hierarchy if specified
  if (options?.minRole && ROLE_HIERARCHY[role] < ROLE_HIERARCHY[options.minRole]) {
    return {
      authorized: false,
      response: NextResponse.json(
        {
          error: `Forbidden: Role '${role}' does not satisfy minimum role rank '${options.minRole}'`,
        },
        { status: 403 }
      ),
    };
  }

  return {
    authorized: true,
    user: session,
  };
}
