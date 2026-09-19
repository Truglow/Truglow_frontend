import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME, verifySessionToken } from '@/lib/auth/jwt';
import { findUserByIdentifier, sanitizeUser } from '@/lib/auth/seed-users';

export async function GET(req: NextRequest) {
  try {
    const cookie = req.cookies.get(AUTH_COOKIE_NAME);
    if (!cookie?.value) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const payload = await verifySessionToken(cookie.value);
    if (!payload) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    const user = findUserByIdentifier(payload.email) || findUserByIdentifier(payload.username);
    if (!user) {
      return NextResponse.json({ authenticated: false }, { status: 401 });
    }

    return NextResponse.json({
      authenticated: true,
      user: sanitizeUser(user),
    });
  } catch (error) {
    console.error('Session check error:', error);
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
