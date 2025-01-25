// Next
import { Metadata } from "next";
// My-Components
import ContactForm from "./_components/ContactForm";
import ContactServices from "./_components/ContactServices";
// Utils
import getDictionary from "@/utils/translation";
// Data
import { Locale } from "@/i18n.config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const locale = (await params).locale;

  const { navbar } = await getDictionary(locale);

  return { title: navbar.contact };
}

const ContactPage = () => {
  return (
    <>
      <ContactServices />
      <ContactForm />
    </>
  );
};

export default ContactPage;
