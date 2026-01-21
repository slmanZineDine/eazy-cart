import { type Locale } from "@/i18n.config";
import type { Metadata } from "next";
import SITE_CONFIG from "../site.config";
import { buildOpenGraph } from "./buildOpenGraph";
import { buildTwitter } from "./buildTwitter";

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
  authors?: { name: string; url?: string }[];
  pathname?: string;
  mainOverrides?: Partial<Metadata>;
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
    authors,
    pathname = "",
    image,
    mainOverrides,
    openGraphOverrides,
    twitterOverrides,
  } = input;

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

    alternates: {
      canonical: `/${lang}${pathname}`,
      languages: {
        en: `/en${pathname}`,
        ar: `/ar${pathname}`,
      },
    },
    ...(authors && { authors }),
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    metadataBase: new URL(SITE_CONFIG.siteURL),
    ...mainOverrides,
  };
}
