import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
// My-Components
import { ThemeProvider } from "@/provider/theme-provider";
// Utils
import getDictionary from "@/utils/translation";
// Data
import { Locale } from "@/i18n.config";
import { Directions, Languages } from "@/constants/enums";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  preload: true,
});

export async function generateStaticParams() {
  return [{ locale: Languages.ARABIC }, { locale: Languages.ENGLISH }];
}

// export const metadata: Metadata = {
//   title: {
//     default: "Home",
//     template: "%s | Eazy Cart",
//   },
//   description:
//     "Shop a wide range of products with fast delivery. From tech to fashion, find everything you need in one place. Enjoy great deals and a seamless shopping experience with us.",
// };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const locale = (await params).locale;

  const { home, navbar } = await getDictionary(locale);

  return {
    title: {
      default: navbar.home,
      template: "%s | Eazy Cart",
    },
    description: home.hero.description,
  };
}

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}>) {
  const locale = (await params).locale;

  return (
    <html
      lang={locale}
      dir={locale === Languages.ARABIC ? Directions.RTL : Directions.LTR}
      suppressHydrationWarning
    >
      <body className={`${cairo.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
