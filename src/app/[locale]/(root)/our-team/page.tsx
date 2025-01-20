// My-Components
import Employees from "./_components/Employees";
import TextImage from "@/components/common/textImage";
import SectionTitle from "@/components/common/sectionTitle";

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
