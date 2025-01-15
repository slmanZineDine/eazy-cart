// My-Components
import SectionTitle from "@/components/common/sectionTitle";

const ContactServices = () => {
  // ################### DATA ###################
  const services = [
    { id: 1, title: "Visit Feedback" },
    { id: 2, title: "Employer Services" },
    { id: 3, title: "Billing Inquiries" },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title="Let us know"
          mainWord="How We Can Help You"
          className="!mb-10 text-center"
        />
        <div className="flex-between flex-col gap-6 md:flex-row">
          {services.map((service, i) => (
            <div key={service.id}>
              <div className="mb-3 flex items-center gap-4">
                <span className="flex-center size-10 rounded-full bg-background font-bold text-primary shadow-md">
                  {i + 1}.
                </span>
                <h3>{service.title}</h3>
              </div>
              <p className="indent-4 text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quos deserunt alias consequatur labore quod placeat.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactServices;
