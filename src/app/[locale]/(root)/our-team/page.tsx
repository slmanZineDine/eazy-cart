// My-Components
import Employees from "./_components/Employees";
import TextImage from "@/components/common/text-image";
import SectionTitle from "@/components/common/section-title";
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

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
