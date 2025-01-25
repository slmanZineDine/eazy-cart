import "server-only";

import { i18n, Locale } from "@/i18n.config";

const dictionaries = {
  ar: () => import("@/dictionaries/ar.json").then((module) => module.default),
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  locale ? dictionaries[locale]() : dictionaries[i18n.defaultLocale]();

export default getDictionary;
