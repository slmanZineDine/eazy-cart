import { Locale } from "@/i18n.config";
import { headers } from "next/headers";

// export const getCurrentLocale = async () => {
//    const url = (await headers()).get("x-locale");
//    const locale = url?.split("/")[3] as Locale;
//    return locale;
// };

export const getCurrentLocale = async () =>
  (await headers()).get("x-locale") as Locale;
