import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Force HTTPS in production
    // We check both x-forwarded-proto and request.nextUrl.protocol
    const proto = request.headers.get('x-forwarded-proto') || request.nextUrl.protocol.replace(':', '')

    if (
        process.env.NODE_ENV === 'production' &&
        proto !== 'https'
    ) {
        const host = request.headers.get('host') || request.nextUrl.host
        return NextResponse.redirect(
            `https://${host}${request.nextUrl.pathname}${request.nextUrl.search}`,
            301
        )
    }
}

export const config = {
    matcher: '/:path*',
}
