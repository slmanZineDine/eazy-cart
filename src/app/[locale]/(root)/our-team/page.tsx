// My-Components
import Employees from "./_components/Employees";
import TextImage from "@/components/common/text-image";
import SectionTitle from "@/components/common/section-title";

const OurTeamPage = () => {
  return (
    <>
      <TextImage imageSrc="/assets/images/employees/employee.jpg">
        <SectionTitle
          title="Best Employee of"
          mainWord="The Month"
          className="!mb-10 text-center"
        />
      </TextImage>
      <Employees />
    </>
  );
};

export default OurTeamPage;
