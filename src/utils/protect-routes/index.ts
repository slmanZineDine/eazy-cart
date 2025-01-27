import { Locale } from "@/i18n.config";

function protectRoute(locale: Locale, routes: string[], pathname: string) {
  for (const route of routes) {
    if (pathname === `/${locale}/${route}`) {
      return true;
    }
  }

  return false;
}

export default protectRoute;
