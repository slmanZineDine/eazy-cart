import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { i18n } from "./i18n.config";
import { cookies } from "next/headers";

function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

  const locales = i18n.locales;
  let locale = "";

  try {
    locale = matchLocale(languages, locales, i18n.defaultLocale);
  } catch {
    locale = i18n.defaultLocale;
  }
  return locale;
}

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const { pathname } = request.nextUrl;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}`),
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    requestHeaders.set("x-locale", locale);

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  const parsedUrl = new URL(request.url);
  const locale = parsedUrl.pathname.split("/")[1];
  requestHeaders.set("x-locale", locale);

  const isLogged = (await cookies()).has("theToken");

  if (isLogged && pathname === `/${locale}/login`) {
    return NextResponse.redirect(new URL(`/${locale}/`, request.url));
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml|assets).*)",
  ],
};
