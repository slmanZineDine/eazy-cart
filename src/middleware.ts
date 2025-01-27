import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Utils
import protectRoute from "./utils/protect-routes";
// Libs
import getLocale from "./libs/negotiator";
import { getSession } from "./libs/iron-session";
// Data
import { paths } from "./constants/paths";
import { UserRole } from "./constants/enums";
import { i18n, Locale } from "./i18n.config";

const ONLY_ADMIN = [paths.dashboard.root];
const PRIVATE_ROUTES = [paths.dashboard.root, paths.profile.root];

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const { pathname } = request.nextUrl;

  // =================== i18n ===================
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
  const locale = parsedUrl.pathname.split("/")[1] as Locale;
  requestHeaders.set("x-locale", locale);

  // =================== Protect Routes ===================
  const { isLoggedIn, role } = await getSession();

  if (isLoggedIn && pathname === `/${locale}/${paths.login}`) {
    return NextResponse.redirect(
      new URL(`/${locale}/${paths.home.root}`, request.url),
    );
  } else if (!isLoggedIn && protectRoute(locale, PRIVATE_ROUTES, pathname)) {
    return NextResponse.redirect(
      new URL(`/${locale}/${paths.home.root}`, request.url),
    );
  }

  if (role !== UserRole.ADMIN && protectRoute(locale, ONLY_ADMIN, pathname)) {
    return NextResponse.redirect(
      new URL(`/${locale}/${paths.home.root}`, request.url),
    );
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|assets).*)",
  ],
};
