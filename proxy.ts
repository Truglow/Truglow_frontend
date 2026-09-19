import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AUTH_COOKIE_NAME, verifySessionToken } from '@/lib/auth/jwt';
import { canAccessRoute, getRoleDashboardRoute } from '@/lib/auth/roles';

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Force HTTPS only in production
    const proto =
        request.headers.get('x-forwarded-proto') ||
        request.nextUrl.protocol.replace(':', '');

    if (process.env.NODE_ENV === 'production' && proto !== 'https') {
        const host = request.headers.get('host') || request.nextUrl.host;

        return NextResponse.redirect(
            `https://${host}${pathname}${request.nextUrl.search}`,
            301
        );
    }

    // Ignore static files, Next.js assets and API routes
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') ||
        pathname === '/favicon.ico'
    ) {
        return NextResponse.next();
    }

    // Get authentication token
    const tokenCookie = request.cookies.get(AUTH_COOKIE_NAME);
    const token = tokenCookie?.value;

    const session = token
        ? await verifySessionToken(token)
        : null;

    // Handle login page
    if (pathname === '/login') {
        // Already logged in → go to role-specific dashboard
        if (session) {
            const targetDashboard = getRoleDashboardRoute(session.role);

            return NextResponse.redirect(
                new URL(targetDashboard, request.url)
            );
        }

        return NextResponse.next();
    }

    // Handle protected dashboard routes
    if (pathname.startsWith('/dashboard')) {
        // Not logged in → redirect to login
        if (!session) {
            const loginUrl = new URL('/login', request.url);

            loginUrl.searchParams.set('redirect', pathname);

            return NextResponse.redirect(loginUrl);
        }

        // Redirect /dashboard/superadmin alias to canonical /dashboard/super-admin
        if (pathname === '/dashboard/superadmin') {
            return NextResponse.redirect(
                new URL('/dashboard/super-admin', request.url)
            );
        }

        // /dashboard → redirect to role-specific dashboard
        if (pathname === '/dashboard') {
            const targetDashboard = getRoleDashboardRoute(session.role);

            return NextResponse.redirect(
                new URL(targetDashboard, request.url)
            );
        }

        // Enforce server-side role authorization for specific dashboard subroutes
        if (!canAccessRoute(session.role, pathname)) {
            const targetDashboard = getRoleDashboardRoute(session.role);

            return NextResponse.redirect(
                new URL(targetDashboard, request.url)
            );
        }

        return NextResponse.next();
    }

    // All other pages are public
    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};