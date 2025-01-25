// Next
import { Metadata } from "next";
// My-Components
import Employees from "./_components/Employees";
import TextImage from "@/components/common/text-image";
import SectionTitle from "@/components/common/section-title";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// Data
import { Locale } from "@/i18n.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const locale = (await params).locale;

  const { navbar } = await getDictionary(locale);

  return { title: navbar.ourTeam };
}

const OurTeamPage = async () => {
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
};

export default OurTeamPage;
