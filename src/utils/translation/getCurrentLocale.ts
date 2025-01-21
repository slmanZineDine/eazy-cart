import { Locale } from "@/i18n.config";
import { headers } from "next/headers";

export const getCurrentLocale = async () =>
  (await headers()).get("x-locale") as Locale;
