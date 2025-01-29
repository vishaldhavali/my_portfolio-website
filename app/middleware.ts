import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Skip middleware for API routes
  if (request.nextUrl.pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  if (request.nextUrl.pathname.endsWith(".pdf")) {
    response.headers.set("Content-Type", "application/pdf");
    response.headers.set("Content-Disposition", "inline");
    response.headers.set("Accept", "application/pdf");
    response.headers.set("X-Content-Type-Options", "nosniff");
  }

  return response;
}

export const config = {
  matcher: [
    "/assets/resume/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
