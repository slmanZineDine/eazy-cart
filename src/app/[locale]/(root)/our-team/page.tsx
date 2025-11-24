// My-Components
import Employees from "./_components/Employees";
import TextImage from "@/components/common/text-image";
import SectionTitle from "@/components/common/section-title";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Data
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
    title: dict.title.team,
    description: dict.description.team,
    pathname: "/our-team",
  });

  return metaData;
}

export default async function TeamPage() {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { ourTeam } = await getDictionary(locale);

  return (
    <>
      <TextImage imageSrc="/assets/images/employees/employee.jpg">
        <SectionTitle
          title={ourTeam.bestEmployeeTitle}
          mainWord={ourTeam.bestEmployeeHighlight}
          className="!mb-10 text-center"
        />
      </TextImage>
      <Employees />
    </>
  );
}
