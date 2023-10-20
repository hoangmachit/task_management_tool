import { NextResponse } from 'next/server'
export async function middleware(request) {
    const { pathname } = request.nextUrl;
    console.log(`>>>> Pathname: ${pathname}`);
    return NextResponse.next();
}
export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|assets).*)'
    ],
}