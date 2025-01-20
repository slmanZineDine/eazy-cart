// i18n
import getDictionary from "@/utils/translation";
import { getCurrentLocale } from "@/utils/translation/getCurrentLocale";
// My-Components
import SectionTitle from "@/components/common/section-title";

const ContactServices = async () => {
  // ################### i18n ###################
  const locale = await getCurrentLocale();
  const { contact } = await getDictionary(locale);

  // ################### DATA ###################
  const services = [
    { id: 1, title: contact.services.visitFeedback },
    { id: 2, title: contact.services.employeeServices },
    { id: 3, title: contact.services.billingInquiries },
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <SectionTitle
          title={contact.serviceTitle}
          mainWord={contact.serviceHighlight}
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
                {contact.services.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactServices;
