import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware only handles the explicit locale routes
// like /vi/* and /en/*
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Don't do anything for the root path - it will have Vietnamese by default
  if (pathname === '/') {
    return NextResponse.next();
  }
  
  // Handle /vi and /en prefixed routes
  if (pathname.startsWith('/vi/') || pathname.startsWith('/en/')) {
    return NextResponse.next();
  }
  
  // The specific locale routes (just /vi or /en without trailing slash)
  if (pathname === '/vi' || pathname === '/en') {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // Only match these paths
    '/', 
    '/vi', 
    '/en',
    '/vi/:path*',
    '/en/:path*'
  ],
};