// My-Components
import Features from "./_components/Features";
import Statistics from "./_components/Statistics";
import TextImage from "@/components/common/text-image";
import SectionTitle from "@/components/common/section-title";
import getDictionary from "@/utils/translation";

import { Locale } from "@/i18n.config";
import { createEnhancedMetadata } from "@/utils/seo/meta/enhanced-meta";

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale: lang } = await params;
  const { siteMeta: dict } = await getDictionary(lang);

  const metaData = createEnhancedMetadata({
    lang,
    title: dict.title.about,
    description: dict.description.about,
    pathname: "/about",
  });

  return metaData;
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  // ################### i18n ###################
  const { about } = await getDictionary(locale);

  return (
    <>
      <TextImage imageSrc="/assets/images/product.jpg">
        <SectionTitle
          title={about.aboutTitle}
          mainWord={about.aboutHighlight}
          className="!mb-10 text-center"
        />
      </TextImage>
      <Features />
      <Statistics />
    </>
  );
}
