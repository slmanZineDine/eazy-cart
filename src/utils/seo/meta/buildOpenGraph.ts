import { i18n } from "@/i18n.config";
import type { Metadata } from "next";
import SITE_CONFIG from "../site.config";
import type { EnhancedSeoInput } from "./enhanced-meta";

/**
 * Helper to build OpenGraph metadata.
 */
export function buildOpenGraph({
  lang,
  title,
  description,
  type = "website",
  image,
  pathname,
  authors,
  openGraphOverrides = {},
}: EnhancedSeoInput & {
  openGraphOverrides?: Partial<Metadata["openGraph"]>;
}): Metadata["openGraph"] {
  const { siteName, ogImage } = SITE_CONFIG;

  const img = image || ogImage;

  const og: Metadata["openGraph"] = {
    title: typeof title === "string" ? title : title.absolute,
    description,
    images: [
      {
        url: img,
        width: 1200,
        height: 630,
        alt: typeof title === "string" ? title : title.absolute,
      },
    ],
    siteName,
    url: `/${lang}${pathname}`,
    locale: i18n.defaultLocale, // the primary/default language of your website.
    alternateLocale: i18n.locales.filter((lang) => lang === i18n.defaultLocale), // the other languages your site supports.
    type,
    ...(type === "article" && {
      // If only one author is provided, use 'author' field
      ...(authors?.length === 1 && { author: authors[0].name }),

      // If authors are provided, map them to the required format
      ...(authors && {
        authors: authors.map((author) =>
          author.url ? `/${lang}${author.url}` : author.name,
        ),
      }),
    }),
    ...openGraphOverrides,
  };
  return og;
}
