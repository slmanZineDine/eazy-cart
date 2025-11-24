// My-Components
import CartView from "./_components/CartView";
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
    title: dict.title.team,
    description: dict.description.team,
    pathname: "/cart",
  });

  return metaData;
}

export default async function CartPage({ params }: Props) {
  const { locale } = await params;

  // ################### i18n ###################
  const { cart } = await getDictionary(locale);

  return (
    <>
      <CartView translations={cart} />
    </>
  );
}
