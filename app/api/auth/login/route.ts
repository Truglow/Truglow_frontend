import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { findUserByIdentifier, sanitizeUser } from '@/lib/auth/seed-users';
import { AUTH_COOKIE_NAME, signSessionToken } from '@/lib/auth/jwt';
import { getRoleDashboardRoute } from '@/lib/auth/roles';

const loginSchema = z.object({
  identifier: z.string().min(1, 'Email or username is required'),
  password: z.string().min(1, 'Password is required'),
  rememberMe: z.boolean().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parseResult = loginSchema.safeParse(body);

    if (!parseResult.success) {
      const firstError = parseResult.error.errors[0]?.message || 'Invalid input data';
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400 }
      );
    }

    const { identifier, password, rememberMe } = parseResult.data;

    // 1. Locate user record
    const userRecord = findUserByIdentifier(identifier);
    if (!userRecord) {
      // Intentionally generic error to prevent user enumeration
      return NextResponse.json(
        { success: false, error: 'Invalid credentials. Please verify your email/username and password.' },
        { status: 401 }
      );
    }

    // 2. Validate password with bcrypt
    const passwordMatches = await bcrypt.compare(password, userRecord.passwordHash);
    if (!passwordMatches) {
      return NextResponse.json(
        { success: false, error: 'Invalid credentials. Please verify your email/username and password.' },
        { status: 401 }
      );
    }

    // 3. Issue signed JWT session token
    const expiresInSeconds = rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24; // 30 days or 24 hours
    const token = await signSessionToken(
      {
        sub: userRecord.id,
        email: userRecord.email,
        username: userRecord.username,
        role: userRecord.role,
        name: userRecord.name,
      },
      expiresInSeconds
    );

    const safeUser = sanitizeUser(userRecord);
    const redirectTo = getRoleDashboardRoute(userRecord.role);

    const response = NextResponse.json({
      success: true,
      user: safeUser,
      redirectTo,
    });

    // 4. Set secure HTTP-only cookie
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: expiresInSeconds,
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected authentication error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
