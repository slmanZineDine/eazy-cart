import type { Metadata } from "next";
import { buildOpenGraph } from "./buildOpenGraph";
import { buildTwitter } from "./buildTwitter";
import SITE_CONFIG from "../site.config";
import { type Locale } from "@/i18n.config";

/**
 * Input for enhanced SEO metadata generation.
 */
export interface EnhancedSeoInput {
  lang: Locale;
  title: string | { absolute: string };
  description: string;
  type?: "website" | "article";
  image?: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  authors?: { name: string; url?: string }[];
  pathname?: string;
  openGraphOverrides?: Partial<Metadata["openGraph"]>;
  twitterOverrides?: Partial<Metadata["twitter"]>;
}

/**
 * Generates enhanced SEO metadata for Next.js pages.
 * @param input EnhancedSeoInput
 * @returns Metadata object for Next.js
 */
export async function createEnhancedMetadata(
  input: EnhancedSeoInput,
): Promise<Metadata> {
  const {
    lang,
    title,
    description,
    type = "website",
    keywords = [],
    publishedTime,
    modifiedTime,
    authors,
    pathname = "",
    openGraphOverrides,
    twitterOverrides,
    image,
  } = input;

  const { siteName, siteURL } = SITE_CONFIG;

  return {
    title,
    description,
    keywords,
    openGraph: buildOpenGraph({
      lang,
      title,
      description,
      type,
      image,
      publishedTime,
      modifiedTime,
      authors,
      pathname,
      openGraphOverrides,
    }),
    twitter: buildTwitter({
      title,
      description,
      image,
      twitterOverrides,
    }),
    robots: { index: true, follow: true },
    alternates: {
      canonical: `/${lang}${pathname}`,
      languages: {
        en: `/en${pathname}`,
        ar: `/ar${pathname}`,
      },
    },
    ...(type === "article" &&
      authors && {
        authors,
      }),
    applicationName: siteName,
    metadataBase: new URL(siteURL),
  };
}
