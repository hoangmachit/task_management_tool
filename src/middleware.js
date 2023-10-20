import { NextResponse } from 'next/server'
export async function middleware(request) {
    const { pathname } = request.nextUrl;
    const cookies = request.cookies;
    if (pathname.startsWith('/user')) {
        const accessToken = cookies.get('accessToken') | undefined;
        if (!accessToken) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }
    return NextResponse.next();
}
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
        '/user/:path*'
    ],
}