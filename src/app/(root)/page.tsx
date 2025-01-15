// My-Components
import Hero from "./_components/Hero";
import ShopByCategory from "./_components/ShopByCategory";
import FeaturedProducts from "./_components/FeaturedProducts";

type THomeProps = {
  searchParams: Promise<{
    category?: string;
    page?: string;
  }>;
};

export default async function Home(props: THomeProps) {
  // ################### DATA ###################
  const searchParams = await props.searchParams;
  const category = searchParams?.category || "";
  const page = Number(searchParams?.page) || 1;

  return (
    <>
      <Hero />
      <ShopByCategory category={category} page={page} />
      <FeaturedProducts />
    </>
  );
}
