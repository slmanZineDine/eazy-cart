// My-Components
import Features from "./_components/Features";
import Statistics from "./_components/Statistics";
import TextImage from "@/components/common/text-image";
import SectionTitle from "@/components/common/section-title";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

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
