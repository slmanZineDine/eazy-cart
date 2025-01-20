// My-Components
import Features from "./_components/Features";
import Statistics from "./_components/Statistics";
import TextImage from "@/components/common/text-image";
import SectionTitle from "@/components/common/section-title";

const AboutPage = () => {
  return (
    <>
      <TextImage imageSrc="/assets/images/product.jpg">
        <SectionTitle
          title="Welcome To"
          mainWord="Eazy Cart"
          className="!mb-10 text-center"
        />
      </TextImage>
      <Features />
      <Statistics />
    </>
  );
};

export default AboutPage;
