// My-Components
import Features from "./_components/Features";
import Statistics from "./_components/Statistics";
import TextImage from "@/components/common/text-image";
import SectionTitle from "@/components/common/section-title";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
import { Metadata } from "next";
import { Locale } from "@/i18n.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const locale = (await params).locale;

  const { navbar } = await getDictionary(locale);

  return { title: navbar.about };
}

const AboutPage = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
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
};

export default AboutPage;
