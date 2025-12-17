import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Force HTTPS in production
    if (
        process.env.NODE_ENV === 'production' &&
        request.headers.get('x-forwarded-proto') !== 'https'
    ) {
        return NextResponse.redirect(
            `https://${request.headers.get('host')}${request.nextUrl.pathname}${request.nextUrl.search}`,
            301
        )
    }
}

export const config = {
    matcher: '/:path*',
}
