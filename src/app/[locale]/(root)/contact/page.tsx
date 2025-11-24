// My-Components
import ContactForm from "./_components/ContactForm";
import ContactServices from "./_components/ContactServices";
// Utils
import getDictionary from "@/utils/translation";
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
    title: dict.title.contact,
    description: dict.description.contact,
    pathname: "/contact",
  });

  return metaData;
}

export default async function ContactPage() {
  return (
    <>
      <ContactServices />
      <ContactForm />
    </>
  );
}
