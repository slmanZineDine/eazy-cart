// Next
import Image from "next/image";
// Third-Party =====> motion
import * as motion from "motion/react-client";
// My-Components
import SocialMedia from "@/components/common/social-media";
import SectionTitle from "@/components/common/section-title";
// Utils
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";

const Employees = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { ourTeam, common } = await getDictionary(locale);

  // ################### DATA ###################
  const employees = [
    {
      id: 1,
      name: "John Doe",
      jobTitle: "Manager",
      img: "/assets/images/employees/employee.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      jobTitle: "Developer",
      img: "/assets/images/employees/employee02.jpg",
    },
    {
      id: 3,
      name: "John Doe",
      jobTitle: "Analyst",
      img: "/assets/images/employees/employee03.jpg",
    },
    {
      id: 4,
      name: "John Doe",
      jobTitle: "Marketing Specialist",
      img: "/assets/images/employees/employee04.jpg",
    },
    {
      id: 5,
      name: "John Doe",
      jobTitle: "Service Representative",
      img: "/assets/images/employees/employee05.jpg",
    },
    {
      id: 6,
      name: "Jane Doe",
      jobTitle: "Designer",
      img: "/assets/images/employees/employee06.jpg",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title={ourTeam.ourTeamTitle}
          mainWord={ourTeam.ourTeamHighlight}
          className="text-center"
          hasSubTitle={true}
          subTitle={common.subTitle}
        />
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee) => (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              transition={{
                duration: 0.2,
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              key={employee.id}
              className="group relative overflow-hidden"
            >
              <div className="flex-center absolute bottom-0 z-10 flex h-0 w-full flex-col gap-2 bg-black/60 text-white transition-[height] duration-700 group-hover:h-full">
                <h3 className="pt-64 text-2xl font-bold">{employee.name}</h3>
                <p>{employee.jobTitle}</p>
                <SocialMedia />
              </div>
              <Image
                width={400}
                height={600}
                src={employee.img}
                alt={employee.name}
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Employees;
