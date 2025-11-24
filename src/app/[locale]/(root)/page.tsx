// My-Components
import Hero from "./_components/Hero";
import ShopByCategory from "./_components/ShopByCategory";
import FeaturedProducts from "./_components/FeaturedProducts";
import getDictionary from "@/utils/translation";
import { createEnhancedMetadata } from "@/utils/seo/meta/enhanced-meta";
import { Locale } from "@/i18n.config";

interface Props {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{
    category?: string;
    // page?: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale: lang } = await params;
  const { siteMeta: dict } = await getDictionary(lang);

  const metaData = createEnhancedMetadata({
    lang,
    title: dict.title.home,
    description: dict.description.home,
    pathname: "",
  });

  return metaData;
}

export default async function Home(props: Props) {
  // ################### DATA ###################
  const searchParams = await props.searchParams;
  const category = searchParams?.category || "";
  // const page = Number(searchParams?.page) || 1;

  return (
    <>
      <Hero />
      <ShopByCategory
        category={category}
        // page={page}
      />
      <FeaturedProducts />
    </>
  );
}
