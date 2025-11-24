/**
 * Replaces {{placeholder}} tokens in a string with given values.
 *
 * @example
 * fmt("Hello {{user}}", { user: "Alice" }) // => "Hello Alice"
 * fmt("Delete {{entity}}?", { entity: "user" }) // => "Delete user?"
 *
 * @param message - The template string containing {{key}} placeholders
 * @param options - Key-value pairs to replace placeholders (undefined values are skipped)
 * @returns The interpolated string
 */

import { Locale } from "@/i18n.config";

interface Options {
  [key: string]: string | number | boolean | undefined;
  femaleArabicField?: boolean;
}

export function fmt(message: string, options: Options = {}): string {
  let result = message;
  Object.entries(options).forEach(([key, value]) => {
    if (value !== undefined) {
      result = result.replace(
        new RegExp(`\\{\\{${key}\\}\\}`, "g"),
        String(value),
      );
    }
  });
  return result;
}

export function addAl(word: string): string {
  const trimmed = word.trim();
  const isArabic = /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF]+/.test(trimmed);

  if (!isArabic || trimmed.startsWith("ال")) {
    return trimmed;
  }

  return "ال" + trimmed;
}

const rtlLanguages = [
  "ar", // Arabic
  "he", // Hebrew
  "fa", // Persian (Farsi)
  "ur", // Urdu
  "ps", // Pashto
  "dv", // Dhivehi (Maldivian)
  "ku", // Kurdish (Sorani dialect)
  "yi", // Yiddish
  "syr", // Syriac
  "ug", // Uyghur
];

export function getDirection(lang: Locale) {
  return rtlLanguages.includes(lang) ? "rtl" : "ltr";
}

export function isRTL(lang: Locale) {
  return getDirection(lang) === "rtl";
}

// export const getCurrentLang = async (): Promise<Lang> => {
//    const { cookies } = await import("next/headers");
//    return ((await cookies()).get(LANG_COOKIE)?.value || "en") as Lang;
// };
