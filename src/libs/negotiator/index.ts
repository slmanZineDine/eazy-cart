import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";

import { i18n } from "@/i18n.config";
import type { NextRequest } from "next/server";

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

export default getLocale;
